import request from 'axios';
import { ErrorType } from '../types/type';

export const errorHandler = (error: ErrorType): string | null => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (status: number, statusText: string): string => (`${status} ${statusText}`);

  const {response} = error;

  if (response) {
    return handleError(response.status, response.statusText);
  }

  return null;
};