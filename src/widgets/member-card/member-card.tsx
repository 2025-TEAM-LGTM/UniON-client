import type { TeamCulture } from '@entities/post-details/api/types';
import Button from '@shared/ui/components/button/button';
import Chip from '@shared/ui/components/chip/chip';
import { toTeamCultureItems } from '@shared/utils/label';
import { useNavigate } from 'react-router-dom';

import * as styles from './member-card.css';

type Role = { id: number; name: string };

type Skill = { id: number; name: string };

interface MemberCardProps {
  userId: number;
  profileImageUrl: string;
  username: string;
  role: Role;
  skill: Skill[];
  teamCulture: TeamCulture;
  mainStrength?: string;
}

const joinComma = (arr: string[]) => arr.join(', ');

const MemberCard = ({
  userId,
  profileImageUrl,
  username,
  role,
  skill,
  teamCulture,
  mainStrength,
}: MemberCardProps) => {
  const navigate = useNavigate();

  const roleLabel = role.name;
  const skillText = skill.length ? joinComma(skill.map((s) => s.name)) : '없음';

  const teamCultureItems = toTeamCultureItems(teamCulture);
  const teamCultureText = teamCultureItems.length
    ? joinComma(teamCultureItems.map((item) => item.selectedLabel))
    : '없음';

  const handleClickProfile = () => {
    navigate(`/members/${userId}/profile`);
  };

  return (
    <article
      className={styles.cardContainer}
      aria-label={`${username} 팀원 카드`}
    >
      <section className={styles.avatarContainer}>
        <img
          src={profileImageUrl}
          alt={`${username} 프로필 이미지`}
          className={styles.image}
        />
      </section>

      <div>
        <p className={styles.username}>{username}</p>
        <p className={styles.role}>{roleLabel}</p>
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
      {mainStrength ? <Chip>{mainStrength}</Chip> : null}

      <Button color='primary' onClick={handleClickProfile}>
        프로필 보기
      </Button>
    </article>
  );
};

export default MemberCard;
