import { ApiResponseType } from '../models/common/api-response.type';

export type LoginPayload = {
    username: string;
    password: string;
};

export type LoginResponseSuccessType = ApiResponseType<{
    accessToken: string;
    email: string;
    id: number;
    refreshToken: string;
    role: string;
    tokenExpiration: Date;
    userName: string;
}>;
