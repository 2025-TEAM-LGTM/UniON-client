import type { MemberCardModel } from '@entities/members/model/adapters';
import { IMAGES } from '@shared/assets/images';
import Button from '@shared/ui/components/button/button';
import Chip from '@shared/ui/components/chip/chip';
import { toTeamCultureItems } from '@shared/utils/team-culture';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './member-card.css';

interface MemberCardProps {
  member: MemberCardModel;
}

const joinComma = (arr: string[]) => arr.join(', ');

const MemberCard = ({ member }: MemberCardProps) => {
  const navigate = useNavigate();
  const [profileImageUrl, setProfileImageUrl] = useState(
    member.profileImageUrl ?? IMAGES.PROFILE,
  );

  const skillText = member.hardSkills.length
    ? joinComma(member.hardSkills)
    : '없음';

  const teamCultureItems = toTeamCultureItems(member.teamCulture);
  const teamCultureText = teamCultureItems.length
    ? joinComma(teamCultureItems.map((item) => item.selectedLabel))
    : '없음';

  const handleClickProfile = () => {
    navigate(`/members/${member.userId}/profile`);
  };

  const handleImageError = () => {
    setProfileImageUrl(IMAGES.PROFILE);
  };

  return (
    <article
      className={styles.cardContainer}
      aria-label={`${member.username} 팀원 카드`}
    >
      <section className={styles.avatarContainer}>
        <img
          src={profileImageUrl}
          alt={`${member.username} 프로필 이미지`}
          className={styles.image}
          onError={handleImageError}
        />
      </section>

      <div>
        <p className={styles.username}>{member.username}</p>
        <p className={styles.role}>{member.roleName}</p>
      </div>

      <section className={styles.infoContainer}>
        <div className={styles.infoRow}>
          <span className={styles.infoTitle}>스킬</span>
          <span className={styles.infoText}>{skillText}</span>
        </div>

        <div className={styles.infoRow}>
          <span className={styles.infoTitle}>팀 성향</span>
          <span className={styles.infoText}>{teamCultureText}</span>
        </div>
      </section>

      {/* TODO: 시트 확정 후 mainStrength 한글 라벨 파싱 로직 연결 */}
      {member.mainStrength ? <Chip>{member.mainStrength}</Chip> : null}

      <Button color='primary' onClick={handleClickProfile}>
        프로필 보기
      </Button>
    </article>
  );
};

export default MemberCard;
