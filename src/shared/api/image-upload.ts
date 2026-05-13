import { post } from './http';

export interface PresignResponseData {
  key: string;
  presignedUrl: string;
}

export interface UploadedImageMeta {
  imageKey: string | null;
  imageSize: number | null;
}

export const getPresignedUrl = (
  contentType: string,
): Promise<PresignResponseData> => {
  return post<PresignResponseData>(
    `/api/presign?contentType=${encodeURIComponent(contentType)}`,
  );
};

export const uploadImageToS3 = async (
  presignedUrl: string,
  file: File,
): Promise<void> => {
  const res = await fetch(presignedUrl, {
    method: 'PUT',
    headers: { 'Content-Type': file.type },
    body: file,
  });

  if (!res.ok) throw new Error('이미지 업로드 실패');
};

export const uploadImage = async (file: File): Promise<UploadedImageMeta> => {
  const { key, presignedUrl } = await getPresignedUrl(file.type);
  await uploadImageToS3(presignedUrl, file);
  return { imageKey: key, imageSize: file.size };
};
