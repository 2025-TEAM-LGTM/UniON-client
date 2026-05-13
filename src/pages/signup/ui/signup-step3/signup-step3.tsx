import type { SignupFormValues } from '@entities/signup/model/signup-form';
import CtaButton from '@shared/ui/components/cta-button/cta-button';
import PersonalityToggle from '@shared/ui/components/personality-toggle/personality-toggle';
import { getPersonalityLabelMeta } from '@shared/utils/personality/personality';
import type { PersonalityValue } from '@shared/utils/personality/types';
import { PERSONALITY_KEYS } from '@shared/utils/personality/types';

import * as styles from './signup-step3.css';

interface SignupStep3Props {
  values: SignupFormValues;
  isSubmitting: boolean;
  onChange: (next: SignupFormValues) => void;
  onNext: () => void;
}

const isStep3Complete = (values: SignupFormValues): boolean => {
  return PERSONALITY_KEYS.every((key) => values.personality[key] != null);
};

const SignupStep3 = ({
  values,
  onChange,
  onNext,
  isSubmitting,
}: SignupStep3Props) => {
  const isComplete = isStep3Complete(values);

  const handleToggle = (
    key: (typeof PERSONALITY_KEYS)[number],
    value: PersonalityValue,
  ) => {
    onChange({
      ...values,
      personality: { ...values.personality, [key]: value },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {PERSONALITY_KEYS.map((key) => {
          const meta = getPersonalityLabelMeta(key);
          const selected = values.personality[key];

          return (
            <div key={key} className={styles.item}>
              <p className={styles.itemTitle}>{meta.title}</p>
              <div className={styles.toggleGroup}>
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

      <div className={styles.buttonContainer}>
        <CtaButton
          color={isComplete ? 'primary' : 'gray'}
          disabled={!isComplete || isSubmitting}
          onClick={onNext}
        >
          다음
        </CtaButton>
      </div>
    </div>
  );
};

export default SignupStep3;
