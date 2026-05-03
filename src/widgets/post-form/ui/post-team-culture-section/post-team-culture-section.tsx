import type { DraftTeamCulture } from '@entities/posts/model/post-form/post-form';
import { Label } from '@shared/ui/components/label/label';
import PersonalityToggle from '@shared/ui/components/personality-toggle/personality-toggle';
import WriteTextarea from '@shared/ui/components/textarea/write-textarea/write-textarea';
import { getPersonalityLabelMeta } from '@shared/utils/personality/personality';
import type { PersonalityValue } from '@shared/utils/personality/types';
import {
  TEAM_CULTURE_KEYS,
  type TeamCultureKey,
} from '@shared/utils/team-culture/types';

import * as styles from './post-team-culture-section.css';

interface PostTeamCultureSectionProps {
  teamCulture: DraftTeamCulture;
  aboutUs: string;
  onChangeTeamCulture: (next: DraftTeamCulture) => void;
  onChangeAboutUs: (value: string) => void;
}

const PostTeamCultureSection = ({
  teamCulture,
  aboutUs,
  onChangeTeamCulture,
  onChangeAboutUs,
}: PostTeamCultureSectionProps) => {
  const handleToggle = (key: TeamCultureKey, value: PersonalityValue) => {
    onChangeTeamCulture({ ...teamCulture, [key]: value });
  };

  return (
    <section className={styles.sectionContainer}>
      <Label htmlFor='post-about-us' required>
        팀 문화 및 정규 일정
      </Label>
      <div className={styles.cultureListContainer}>
        {TEAM_CULTURE_KEYS.map((key) => {
          const meta = getPersonalityLabelMeta(key);
          const selected = teamCulture[key];

          return (
            <div key={key} className={styles.cultureItemContainer}>
              <span className={styles.cultureItemTitle}>{meta.title}</span>
              <div className={styles.cultureButtonGroup}>
                {([0, 1] as PersonalityValue[]).map((value) => (
                  <PersonalityToggle
                    key={value}
                    selected={selected === value}
                    onSelect={() => handleToggle(key, value)}
                  >
                    {meta.labels[value]}
                  </PersonalityToggle>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.fieldRowContainer}>
        <WriteTextarea
          id='post-about-us'
          value={aboutUs}
          onChange={(event) => onChangeAboutUs(event.target.value)}
          placeholder='팀의 문화, 회의 일정, 지향하는 협업 분위기 등을 자세히 작성해주세요.'
          required
        />
      </div>
    </section>
  );
};

export default PostTeamCultureSection;
