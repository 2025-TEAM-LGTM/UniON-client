import { useToast } from '@shared/ui/components/toast/toast-context';

import InfoItem from './info-item';
import * as styles from './recruit-info.css';

type Domain = { id: number; name: string };
type RoleCount = { id: number; name: string; count: number };

export interface RecruitInfoProps {
  domains: Domain[];
  recruitPeriod: { startDate: string; endDate: string };
  homepageUrl?: string;
  contact: string;
  currentRoles: RoleCount[];
  recruitRoles: RoleCount[];
}

const formatPeriod = (startDate: string, endDate: string) =>
  `${startDate} ~ ${endDate}`;

const joinText = (arr: string[]) => (arr.length ? arr.join(', ') : '-');

const formatRoles = (roles: RoleCount[]) => {
  if (!roles.length) return '-';
  return roles.map((r) => `${r.name} ${r.count}명`).join(', ');
};

const RecruitInfo = ({
  domains,
  recruitPeriod,
  homepageUrl,
  contact,
  currentRoles,
  recruitRoles,
}: RecruitInfoProps) => {
  const domainText = joinText(domains.map((d) => d.name));
  const periodText = formatPeriod(
    recruitPeriod.startDate,
    recruitPeriod.endDate,
  );
  const currentRoleText = formatRoles(currentRoles);
  const recruitRoleText = formatRoles(recruitRoles);
  const toast = useToast();

  const handleCopyContact = async () => {
    if (!contact) return;

    try {
      await navigator.clipboard.writeText(contact);
      toast.success('연락처가 복사되었어요.');
    } catch {
      toast.error('연락처 복사에 실패했어요.');
    }
  };

  return (
    <>
      <p className={styles.sectionTitle}>공고 정보</p>

      <div className={styles.infoGrid}>
        <InfoItem title='활동 분야'>{domainText}</InfoItem>
        <InfoItem title='모집 기간'>{periodText}</InfoItem>
        <InfoItem title='공식 링크'>
          {homepageUrl ? (
            <a
              href={homepageUrl}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.linkText}
              title={homepageUrl}
            >
              공식 링크 바로가기
            </a>
          ) : (
            '-'
          )}
        </InfoItem>
        <InfoItem title='연락처'>
          {' '}
          <button
            type='button'
            onClick={handleCopyContact}
            className={styles.copyButton}
            title={contact}
          >
            연락처 복사하기
          </button>
        </InfoItem>
        <InfoItem title='현재 인원'>{currentRoleText}</InfoItem>
        <InfoItem title='모집 인원'>{recruitRoleText}</InfoItem>
      </div>
    </>
  );
};

export default RecruitInfo;
