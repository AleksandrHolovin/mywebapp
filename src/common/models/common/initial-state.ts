export type BaseStateType = {
    loading: boolean;
    loaded: boolean;
    errors: PayloadError[];
};

export type PayloadError = {
    key: string;
    errorMessage: string;
};
