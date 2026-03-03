import PostCard, { type PostCardProps } from '@widgets/post-card/post-card';

import * as styles from './post-card-group.css';

type PostGroupProps = {
  posts: Omit<PostCardProps, 'onToggleApply'>[];
  appliedIds: Set<number>;
  onToggleApply: (postId: number) => void;
};

const PostCardGroup = ({
  posts,
  appliedIds,
  onToggleApply,
}: PostGroupProps) => {
  const visible = posts.slice(0, 9);

  return (
    <section className={styles.grid} aria-label='팀빌딩 공고 목록'>
      {visible.map((post) => (
        <PostCard
          key={post.postId}
          {...post}
          applied={appliedIds.has(post.postId)}
          onToggleApply={onToggleApply}
        />
      ))}
    </section>
  );
};

export default PostCardGroup;
