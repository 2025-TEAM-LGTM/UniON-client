import type { Option } from '@shared/types/common';
import {
  DomainContent,
  Dropdown,
  DropdownPanel,
  DropdownTrigger,
  FieldRoleContent,
} from '@shared/ui/components/dropdown';
import TextField from '@shared/ui/components/field/textfield/textfield';
import { Label } from '@shared/ui/components/label/label';
import Stepper from '@shared/ui/components/stepper/stepper';
import { useMemo } from 'react';

import * as styles from './portfolio-basic-info-section.css';

interface PortfolioBasicInfoFormSectionProps {
  title: string;
  summary: string;
  domainId: number | null;
  domainOptions: Option[];
  fieldId: number | null;
  roleId: number | null;
  headcount: number;
  externUrl: string;
  roleFields: Option[];
  rolesByFieldOptions: Record<number, Option[]>;
  onChangeTitle: (value: string) => void;
  onChangeSummary: (value: string) => void;
  onChangeDomain: (domainId: number | null) => void;
  onChangeField: (fieldId: number | null) => void;
  onChangeRole: (roleId: number | null) => void;
  onChangeHeadcount: (value: number) => void;
  onChangeExternUrl: (value: string) => void;
}

const PortfolioBasicInfoFormSection = ({
  title,
  summary,
  domainId,
  domainOptions,
  fieldId,
  roleId,
  headcount,
  externUrl,
  roleFields,
  rolesByFieldOptions,
  onChangeTitle,
  onChangeSummary,
  onChangeDomain,
  onChangeField,
  onChangeRole,
  onChangeHeadcount,
  onChangeExternUrl,
}: PortfolioBasicInfoFormSectionProps) => {
  const selectedRole =
    fieldId != null && roleId != null
      ? rolesByFieldOptions[fieldId]?.find((r) => r.id === roleId)
      : null;

  const roleLabel = selectedRole != null ? selectedRole.name : undefined;

  const selectedDomain = useMemo(
    () => domainOptions.find((d) => d.id === domainId) ?? null,
    [domainId, domainOptions],
  );

  const domainLabel = selectedDomain?.name;

  const handleFieldRoleChange = (next: {
    fieldId: number | null;
    roleIds: number[];
  }) => {
    onChangeField(next.fieldId);
    onChangeRole(next.roleIds[0] != null ? next.roleIds[0] : null);
  };

  const handleDomainChange = (nextDomainIds: number[]) => {
    const last = nextDomainIds[nextDomainIds.length - 1] ?? null;
    onChangeDomain(last);
  };

  return (
    <section className={styles.sectionContainer}>
      <h2>
        <Label required>기본 정보</Label>
      </h2>

      <div className={styles.fieldRowContainer}>
        <Label htmlFor='portfolio-title'>프로젝트 제목</Label>
        <TextField
          id='portfolio-title'
          value={title}
          onChange={(e) => onChangeTitle(e.target.value)}
          placeholder='프로젝트 제목을 작성해주세요.'
        />
      </div>

      <div className={styles.fieldRowContainer}>
        <Label htmlFor='portfolio-summary'>활동 요약</Label>
        <TextField
          id='portfolio-summary'
          value={summary}
          onChange={(e) => onChangeSummary(e.target.value)}
          placeholder='활동 내용을 간단히 요약해주세요.'
        />
      </div>

      <div className={styles.fieldRowContainer}>
        <Label>활동 분야</Label>
        <Dropdown>
          <DropdownTrigger placeholder='분야 선택' label={domainLabel} />
          <DropdownPanel>
            <DomainContent
              options={domainOptions}
              value={domainId != null ? [domainId] : []}
              onChange={handleDomainChange}
            />
          </DropdownPanel>
        </Dropdown>
      </div>

      <div className={styles.roleHeadcountRow}>
        <div className={styles.fieldRowContainer}>
          <Label>참여 역할</Label>
          <Dropdown>
            <DropdownTrigger placeholder='직군' label={roleLabel} />
            <DropdownPanel>
              <FieldRoleContent
                fields={roleFields}
                rolesByFieldOptions={rolesByFieldOptions}
                fieldId={fieldId}
                roleIds={roleId != null ? [roleId] : []}
                onChange={handleFieldRoleChange}
                singleSelect
              />
            </DropdownPanel>
          </Dropdown>
        </div>

        <div className={styles.fieldRowContainer}>
          <Label>함께한 팀원 수</Label>
          <Stepper value={headcount} onChange={onChangeHeadcount} />
        </div>
      </div>

      <div className={styles.fieldRowContainer}>
        <Label htmlFor='portfolio-extern-url'>공식 링크</Label>
        <TextField
          id='portfolio-extern-url'
          value={externUrl}
          onChange={(e) => onChangeExternUrl(e.target.value)}
          placeholder='공식 링크를 첨부해주세요.'
        />
      </div>
    </section>
  );
};

export default PortfolioBasicInfoFormSection;
