import { PayloadError, PayloadMessage } from '../../types';

export type ApiResponseType<T = void> = {
    value: T;
    errors: PayloadError[];
    messages: PayloadMessage[];
    success: boolean;
};
