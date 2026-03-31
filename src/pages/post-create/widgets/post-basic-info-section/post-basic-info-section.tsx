import type { PostFormOption } from '@pages/post-create/mocks/mock-post-create-options';
import Chip from '@shared/ui/components/chip/chip';
import {
  DomainContent,
  Dropdown,
  DropdownPanel,
  DropdownTrigger,
} from '@shared/ui/components/dropdown';
import DatePicker from '@shared/ui/components/field/datepicker/datepicker';
import TextField from '@shared/ui/components/field/textfield/textfield';
import { Label } from '@shared/ui/components/label/label';
import { useMemo } from 'react';

import * as styles from './post-basic-info-section.css';

interface PostBasicInfoSectionProps {
  title: string;
  domainIds: number[];
  recruitPeriod: {
    startDate: string;
    endDate: string;
  };
  homepageUrl: string;
  contact: string;
  domainOptions: PostFormOption[];
  onChangeTitle: (value: string) => void;
  onChangeDomains: (value: number[]) => void;
  onChangeRecruitPeriod: (next: { startDate: string; endDate: string }) => void;
  onChangeHomepageUrl: (value: string) => void;
  onChangeContact: (value: string) => void;
}

const MAX_DOMAIN_COUNT = 2;

const PostBasicInfoSection = ({
  title,
  domainIds,
  recruitPeriod,
  homepageUrl,
  contact,
  domainOptions,
  onChangeTitle,
  onChangeDomains,
  onChangeRecruitPeriod,
  onChangeHomepageUrl,
  onChangeContact,
}: PostBasicInfoSectionProps) => {
  const selectedDomains = useMemo(() => {
    return domainOptions.filter((option) => domainIds.includes(option.id));
  }, [domainIds, domainOptions]);

  const domainLabel = selectedDomains.map((domain) => domain.name).join(', ');

  const handleChangeDomains = (nextDomainIds: number[]) => {
    if (nextDomainIds.length > MAX_DOMAIN_COUNT) {
      return;
    }

    onChangeDomains(nextDomainIds);
  };

  const handleRemoveDomain = (domainId: number) => {
    onChangeDomains(domainIds.filter((value) => value !== domainId));
  };
  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>기본 정보</h2>

      <div className={styles.fieldRowContainer}>
        <Label htmlFor='post-title' required>
          공고 제목
        </Label>
        <TextField
          id='post-title'
          value={title}
          onChange={(event) => onChangeTitle(event.target.value)}
          placeholder='공고 제목을 작성해주세요.'
          required
        />
      </div>

      <div className={styles.fieldRowContainer}>
        <div className={styles.labelContainer}>
          <Label required>활동 분야</Label>
        </div>

        <div className={styles.domainFieldContainer}>
          <div className={styles.domainTriggerContainer}>
            <Dropdown>
              <DropdownTrigger
                placeholder='분야 (최대 2개 선택)'
                label={domainLabel || undefined}
              />
              <DropdownPanel>
                <DomainContent
                  options={domainOptions}
                  value={domainIds}
                  onChange={handleChangeDomains}
                />
              </DropdownPanel>
            </Dropdown>
          </div>

          <p className={styles.captionText}>최대 2개까지 선택할 수 있어요.</p>

          {selectedDomains.length > 0 && (
            <div className={styles.chipListContainer}>
              {selectedDomains.map((domain) => (
                <Chip
                  key={domain.id}
                  onRemove={() => handleRemoveDomain(domain.id)}
                >
                  {domain.name}
                </Chip>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.fieldRowContainer}>
        <Label required>모집 기간</Label>

        <div className={styles.periodContainer}>
          <DatePicker
            value={recruitPeriod.startDate}
            onChange={(nextStartDate) =>
              onChangeRecruitPeriod({
                ...recruitPeriod,
                startDate: nextStartDate,
              })
            }
            required
          />
          <DatePicker
            value={recruitPeriod.endDate}
            onChange={(nextEndDate) =>
              onChangeRecruitPeriod({
                ...recruitPeriod,
                endDate: nextEndDate,
              })
            }
            required
          />
        </div>
      </div>

      <div className={styles.fieldRowContainer}>
        <Label htmlFor='homepage-url'>공식 링크</Label>

        <TextField
          id='homepage-url'
          value={homepageUrl}
          onChange={(event) => onChangeHomepageUrl(event.target.value)}
          placeholder='공식 링크를 첨부해주세요.'
        />
      </div>

      <div className={styles.fieldRowContainer}>
        <Label htmlFor='contact' required>
          연락 수단
        </Label>

        <TextField
          id='contact'
          value={contact}
          onChange={(event) => onChangeContact(event.target.value)}
          placeholder='카카오톡 링크 등 연락 수단 링크를 첨부해주세요.'
          required
        />
      </div>
    </section>
  );
};

export default PostBasicInfoSection;
