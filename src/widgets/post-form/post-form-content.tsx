import type {
  PostFormValues,
  RoleCountValue,
} from '@entities/posts/model/post-form/post-form';
import type { PostFormOption } from '@pages/post-create/mocks/mock-post-create-options';
import CtaButton from '@shared/ui/components/cta-button/cta-button';
import { type Dispatch, type SetStateAction, useState } from 'react';

import * as styles from './post-form-content.css';
import PostBasicInfoSection from './ui/post-basic-info-section/post-basic-info-section';
import PostDetailSection from './ui/post-detail-section/post-detail-section';
import PostImageSection from './ui/post-image-section/post-image-section';
import PostRoleSection from './ui/post-role-section/post-role-section';
import PostTeamCultureSection from './ui/post-team-culture-section/post-team-culture-section';

interface PendingRoleInput {
  fieldId: number | null;
  roleId: number | null;
  count: number;
}

const createEmptyPendingRoleInput = (): PendingRoleInput => ({
  fieldId: null,
  roleId: null,
  count: 1,
});

interface PostFormContentProps {
  values: PostFormValues;
  onChange: (next: PostFormValues) => void;
  domainOptions: PostFormOption[];
  roleFields: PostFormOption[];
  rolesByFieldOptions: Record<number, PostFormOption[]>;
  allRoleOptions: PostFormOption[];
  onSubmit: () => void;
}

const PostFormContent = ({
  values,
  onChange,
  domainOptions,
  roleFields,
  rolesByFieldOptions,
  allRoleOptions,
  onSubmit,
}: PostFormContentProps) => {
  const [pendingCurrentRole, setPendingCurrentRole] =
    useState<PendingRoleInput>(createEmptyPendingRoleInput());
  const [pendingRecruitRole, setPendingRecruitRole] =
    useState<PendingRoleInput>(createEmptyPendingRoleInput());

  const handleAddRoleItem = (
    pending: PendingRoleInput,
    items: RoleCountValue[],
    field: 'currentRoles' | 'recruitRoles',
    setPending: Dispatch<SetStateAction<PendingRoleInput>>,
  ) => {
    const { roleId, count } = pending;

    if (roleId == null) {
      return;
    }

    const existingItem = items.find((item) => item.roleId === roleId);
    const nextItems = existingItem
      ? items.map((item) =>
          item.roleId === roleId ? { ...item, count } : item,
        )
      : [...items, { roleId, count }];

    onChange({ ...values, [field]: nextItems });
    setPending(createEmptyPendingRoleInput());
  };

  const handleRemoveRoleItem = (
    roleId: number,
    field: 'currentRoles' | 'recruitRoles',
  ) => {
    onChange({
      ...values,
      [field]: values[field].filter((item) => item.roleId !== roleId),
    });
  };

  return (
    <>
      <PostBasicInfoSection
        title={values.title}
        domainIds={values.domainIds}
        recruitPeriod={values.recruitPeriod}
        homepageUrl={values.homepageUrl}
        contact={values.contact}
        domainOptions={domainOptions}
        onChangeTitle={(title) => onChange({ ...values, title })}
        onChangeDomains={(domainIds) => onChange({ ...values, domainIds })}
        onChangeRecruitPeriod={(recruitPeriod) =>
          onChange({ ...values, recruitPeriod })
        }
        onChangeHomepageUrl={(homepageUrl) =>
          onChange({ ...values, homepageUrl })
        }
        onChangeContact={(contact) => onChange({ ...values, contact })}
      />

      <PostRoleSection
        title='현재 팀 구성'
        items={values.currentRoles}
        pending={pendingCurrentRole}
        fields={roleFields}
        rolesByFieldOptions={rolesByFieldOptions}
        roleOptions={allRoleOptions}
        onChangePending={setPendingCurrentRole}
        onAddItem={() =>
          handleAddRoleItem(
            pendingCurrentRole,
            values.currentRoles,
            'currentRoles',
            setPendingCurrentRole,
          )
        }
        onRemoveItem={(roleId) => handleRemoveRoleItem(roleId, 'currentRoles')}
      />

      <PostRoleSection
        title='필요 역할'
        items={values.recruitRoles}
        pending={pendingRecruitRole}
        fields={roleFields}
        rolesByFieldOptions={rolesByFieldOptions}
        roleOptions={allRoleOptions}
        onChangePending={setPendingRecruitRole}
        onAddItem={() =>
          handleAddRoleItem(
            pendingRecruitRole,
            values.recruitRoles,
            'recruitRoles',
            setPendingRecruitRole,
          )
        }
        onRemoveItem={(roleId) => handleRemoveRoleItem(roleId, 'recruitRoles')}
      />

      <PostDetailSection
        seeking={values.seeking}
        onChangeSeeking={(seeking) => onChange({ ...values, seeking })}
      />

      <PostTeamCultureSection
        teamCulture={values.teamCulture}
        aboutUs={values.aboutUs}
        onChangeTeamCulture={(teamCulture) =>
          onChange({ ...values, teamCulture })
        }
        onChangeAboutUs={(aboutUs) => onChange({ ...values, aboutUs })}
      />

      <PostImageSection
        image={values.image}
        onChangeImage={(image) => onChange({ ...values, image })}
      />

      <div className={styles.submitContainer}>
        <CtaButton color='primary' onClick={onSubmit}>
          업로드
        </CtaButton>
      </div>
    </>
  );
};

export default PostFormContent;
