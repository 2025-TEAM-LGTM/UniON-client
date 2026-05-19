import type { PortfolioFormValues } from '@entities/portfolio-form/model/portfolio-form';
import type { Option } from '@shared/types/common';
import CtaButton from '@shared/ui/components/cta-button/cta-button';
import PostImageSection from '@shared/ui/components/post-image-section/post-image-section';

import * as styles from './portfolio-form-content.css';
import PortfolioBasicInfoFormSection from './ui/portfolio-basic-info-section/portfolio-basic-info-section';
import PortfolioStarSection from './ui/portfolio-star-section/portfolio-star-section';

interface PortfolioFormContentProps {
  values: PortfolioFormValues;
  onChange: (next: PortfolioFormValues) => void;
  roleFields: Option[];
  rolesByFieldOptions: Record<number, Option[]>;
  domainOptions: Option[];
  onSubmit: () => void;
  submitLabel: string;
  disabled?: boolean;
}

const PortfolioFormContent = ({
  values,
  onChange,
  roleFields,
  rolesByFieldOptions,
  domainOptions,
  onSubmit,
  submitLabel,
  disabled,
}: PortfolioFormContentProps) => {
  return (
    <>
      <PortfolioBasicInfoFormSection
        title={values.title}
        summary={values.summary}
        domainId={values.domainId}
        domainOptions={domainOptions}
        fieldId={values.fieldId}
        roleId={values.roleId}
        headcount={values.headcount}
        externUrl={values.externUrl}
        roleFields={roleFields}
        rolesByFieldOptions={rolesByFieldOptions}
        onChangeTitle={(title) => onChange({ ...values, title })}
        onChangeSummary={(summary) => onChange({ ...values, summary })}
        onChangeDomain={(domainId) => onChange({ ...values, domainId })}
        onChangeFieldRole={({ fieldId, roleId }) =>
          onChange({ ...values, fieldId, roleId })
        }
        onChangeHeadcount={(headcount) => onChange({ ...values, headcount })}
        onChangeExternUrl={(externUrl) => onChange({ ...values, externUrl })}
      />

      <PortfolioStarSection
        star={{
          Stext: values.Stext,
          Ttext: values.Ttext,
          Atext: values.Atext,
          Rtext: values.Rtext,
        }}
        onChangeStar={(star) => onChange({ ...values, ...star })}
      />

      <PostImageSection
        image={values.image}
        onChangeImage={(image) => onChange({ ...values, image })}
      />

      <div className={styles.submitContainer}>
        <CtaButton color='primary' onClick={onSubmit} disabled={disabled}>
          {submitLabel}
        </CtaButton>
      </div>
    </>
  );
};

export default PortfolioFormContent;
