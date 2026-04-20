import type { RoleCountValue } from '@entities/posts/model/post-form/post-form';
import { ROUTE_PATH } from '@shared/constants/path';
import PageBackHeader from '@widgets/page-back-header/page-back-header';
import { useState } from 'react';

import { MOCK_POST_CREATE_FORM } from './mocks/mock-post-create-form';
import { MOCK_DOMAIN_OPTIONS } from './mocks/mock-post-create-options';
import {
  MOCK_ALL_ROLE_OPTIONS,
  MOCK_ROLE_FIELDS,
  MOCK_ROLES_BY_FIELD_OPTIONS,
} from './mocks/mock-post-role-options';
import * as styles from './post-create.css';
import PostBasicInfoSection from './widgets/post-basic-info-section/post-basic-info-section';
import PostRoleSection from './widgets/post-role-section/post-role-section';

interface RecruitPeriod {
  startDate: string;
  endDate: string;
}

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

const PostCreatePage = () => {
  const [title, setTitle] = useState(MOCK_POST_CREATE_FORM.title);
  const [domainIds, setDomainIds] = useState<number[]>(
    MOCK_POST_CREATE_FORM.domainIds,
  );
  const [recruitPeriod, setRecruitPeriod] = useState<RecruitPeriod>(
    MOCK_POST_CREATE_FORM.recruitPeriod,
  );
  const [homepageUrl, setHomepageUrl] = useState(
    MOCK_POST_CREATE_FORM.homepageUrl,
  );
  const [contact, setContact] = useState(MOCK_POST_CREATE_FORM.contact);

  const [currentRoles, setCurrentRoles] = useState<RoleCountValue[]>(
    MOCK_POST_CREATE_FORM.currentRoles,
  );
  const [recruitRoles, setRecruitRoles] = useState<RoleCountValue[]>(
    MOCK_POST_CREATE_FORM.recruitRoles,
  );

  const [pendingCurrentRole, setPendingCurrentRole] =
    useState<PendingRoleInput>(createEmptyPendingRoleInput());
  const [pendingRecruitRole, setPendingRecruitRole] =
    useState<PendingRoleInput>(createEmptyPendingRoleInput());

  const handleAddRoleItem = (
    pending: PendingRoleInput,
    items: RoleCountValue[],
    setItems: React.Dispatch<React.SetStateAction<RoleCountValue[]>>,
    setPending: React.Dispatch<React.SetStateAction<PendingRoleInput>>,
  ) => {
    const { roleId, count } = pending;

    if (roleId == null) {
      return;
    }

    const existingItem = items.find((item) => item.roleId === roleId);

    if (existingItem) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.roleId === roleId ? { ...item, count } : item,
        ),
      );
    } else {
      setItems((prevItems) => [
        ...prevItems,
        {
          roleId,
          count,
        },
      ]);
    }

    setPending(createEmptyPendingRoleInput());
  };

  const handleRemoveRoleItem = (
    roleId: number,
    setItems: React.Dispatch<React.SetStateAction<RoleCountValue[]>>,
  ) => {
    setItems((prevItems) => prevItems.filter((item) => item.roleId !== roleId));
  };

  return (
    <>
      <section className={styles.headerContainer}>
        <PageBackHeader
          title='글쓰기'
          backLabel='목록으로'
          fallbackPath={ROUTE_PATH.POSTS}
        />
      </section>

      <main className={styles.pageContainer}>
        <PostBasicInfoSection
          title={title}
          domainIds={domainIds}
          recruitPeriod={recruitPeriod}
          homepageUrl={homepageUrl}
          contact={contact}
          domainOptions={MOCK_DOMAIN_OPTIONS}
          onChangeTitle={setTitle}
          onChangeDomains={setDomainIds}
          onChangeRecruitPeriod={setRecruitPeriod}
          onChangeHomepageUrl={setHomepageUrl}
          onChangeContact={setContact}
        />

        <PostRoleSection
          title='현재 팀 구성'
          items={currentRoles}
          pending={pendingCurrentRole}
          fields={MOCK_ROLE_FIELDS}
          rolesByFieldOptions={MOCK_ROLES_BY_FIELD_OPTIONS}
          roleOptions={MOCK_ALL_ROLE_OPTIONS}
          onChangePending={setPendingCurrentRole}
          onAddItem={() =>
            handleAddRoleItem(
              pendingCurrentRole,
              currentRoles,
              setCurrentRoles,
              setPendingCurrentRole,
            )
          }
          onRemoveItem={(roleId) =>
            handleRemoveRoleItem(roleId, setCurrentRoles)
          }
        />

        <PostRoleSection
          title='필요 역할'
          items={recruitRoles}
          pending={pendingRecruitRole}
          fields={MOCK_ROLE_FIELDS}
          rolesByFieldOptions={MOCK_ROLES_BY_FIELD_OPTIONS}
          roleOptions={MOCK_ALL_ROLE_OPTIONS}
          onChangePending={setPendingRecruitRole}
          onAddItem={() =>
            handleAddRoleItem(
              pendingRecruitRole,
              recruitRoles,
              setRecruitRoles,
              setPendingRecruitRole,
            )
          }
          onRemoveItem={(roleId) =>
            handleRemoveRoleItem(roleId, setRecruitRoles)
          }
        />
      </main>
    </>
  );
};

export default PostCreatePage;
