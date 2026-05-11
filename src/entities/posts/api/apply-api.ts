import { del, post } from '@shared/api/http';

export interface ApplyResponse {
  applyId: number;
  postId: number;
  applicantUserId: number;
  applyDate: string;
}

export const applyPost = (postId: number): Promise<ApplyResponse> => {
  return post<ApplyResponse>(`/api/posts/${postId}/applications`);
};

export const cancelApply = (postId: number): Promise<ApplyResponse> => {
  return del<ApplyResponse>(`/api/posts/${postId}/applications/me`);
};
