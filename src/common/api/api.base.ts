// import axios from 'axios';
// import { PayloadError, PayloadMessage } from '../types/api.types';
// import { dispatch, RootStore, store } from '../../store';
// // import { logout } from '../../store/actions/auth/auth.actions';
// import { createStandaloneToast } from '@chakra-ui/react';
// import theme from '../../styles/theme';

// const toast = createStandaloneToast({ theme: theme });

// export const axiosBase = axios.create();

// axiosBase.interceptors.request.use(
//     function (request) {
//         const token = store.getState().auth?.user?.token?.accessToken;

//         request.headers.Authorization = token ? `Bearer ${token}` : '';

//         return request;
//     },
//     error => {},
// );

// axiosBase.interceptors.response.use(
//     response => {
//         response.data.messages.forEach((message: PayloadMessage) => {
//             toast({
//                 title: message.messageText,
//                 status: 'info',
//                 position: 'top-right',
//                 duration: 2000,
//             });
//         });
//         return response;
//     },
//     error => {
//         if (error.response.status === 401) {
//             toast({
//                 title: '401 - Unauthorized',
//                 status: 'error',
//                 position: 'top-right',
//                 duration: 2000,
//             });
//             dispatch(logout());
//         } else if (error.response.status === 500) {
//             toast({
//                 title: '500 - Network Error',
//                 status: 'error',
//                 position: 'top-right',
//                 duration: 2000,
//             });
//         } else {
//             error.response.data.errors.forEach((message: PayloadError) => {
//                 toast({
//                     title: message.errorMessage,
//                     status: 'error',
//                     position: 'top-right',
//                     duration: 3000,
//                 });
//             });
//         }
//         return Promise.reject(error);
//     },
// );

// export const baseUrl = process.env.REACT_APP_BASE_URL;

// axiosBase.defaults.baseURL = baseUrl;

// interface IApiResponse {
//     success: boolean;
//     errors: PayloadError[];
//     messages: PayloadMessage[];
//     value?: { [key: string]: string | number | null };
// }

// type KeyValue<U> = {
//     [key: string]: U;
// };

// class Api<T> {
//     async get(url: string, params: object = {}, headers: KeyValue<string> = {}) {
//         const response = await axiosBase
//             .get(url, {
//                 params,
//                 headers,
//             })
//             .catch(err => ({ data: err.response.data }));
//         return response.data;
//     }

//     async post(url: string, body: T, headers: KeyValue<string> = {}): Promise<IApiResponse> {
//         const response = await axiosBase.post(url, body, { headers }).catch(err => ({ data: err.response.data }));
//         return response.data;
//     }

//     async put(url: string, body: T, headers: KeyValue<string> = {}) {
//         const response = await axiosBase
//             .put(url, body, {
//                 headers,
//             })
//             .catch(err => ({
//                 data: err.response.data,
//             }));
//         return response.data;
//     }

//     async delete(url: string, body?: T, headers: KeyValue<string> = {}) {
//         const response = await axiosBase
//             .delete(url, {
//                 data: body,
//                 headers,
//             })
//             .catch(err => ({
//                 data: err.response.data,
//             }));
//         return response.data;
//     }

//     async file(url: string, body: File, headers: KeyValue<string> = {}) {
//         const formData = new FormData();
//         formData.append('file', body);

//         const response = await axiosBase.post(url, formData, { headers: headers }).catch(err => ({
//             data: err.response.data,
//         }));
//         return response.data;
//     }
// }

// export default new Api();
export {}
