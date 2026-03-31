// 제출 관련 API 요청을 모킹하는 함수들을 임시로 정의
// TODO: 추후 실제 API 요청을 보내는 함수로 대체 필요
import type {
  CreatePostRequest,
  CreatePostResponseData,
} from '@entities/post-create/api/types';
import type { UploadedImageMeta } from '@entities/posts/model/post-form/adapters';
import type { SuccessResponse } from '@shared/api/types';

const wait = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const mockUploadImage = async (
  file: File,
): Promise<UploadedImageMeta> => {
  await wait(300);

  return {
    imageKey: `uploads/mock-${Date.now()}-${file.name}`,
    imageSize: file.size,
  };
};

export const mockCreatePost = async (
  body: CreatePostRequest,
): Promise<SuccessResponse<CreatePostResponseData>> => {
  await wait(500);

  if (!body.title.trim()) {
    throw new Error('title : 공백일 수 없습니다');
  }

  console.log('[mockCreatePost] request body', body);

  return {
    status: 201,
    msg: 'OK',
    data: {
      postId: 21,
    },
  };
};
