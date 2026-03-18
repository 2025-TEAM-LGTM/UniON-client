import type { PostResponse } from '@features/posts/types/post-response-data';
import PostCard from '@widgets/post-card/post-card';

import * as styles from './post-card-group.css';

interface PostGroupProps {
  posts: PostResponse[];
  appliedIds: Set<number>;
  onToggleApply: (postId: number) => void;
}

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
          postId={post.postId}
          title={post.title}
          domains={post.domains}
          dday={post.dday}
          recruits={post.recruits}
          nowCount={post.nowCount}
          applied={appliedIds.has(post.postId)}
          onToggleApply={onToggleApply}
        />
      ))}
    </section>
  );
};

export default PostCardGroup;
