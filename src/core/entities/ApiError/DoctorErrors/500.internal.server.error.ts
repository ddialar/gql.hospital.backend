import { ApiError } from '@entities/ApiError';

const errorCode: number = 500;

class CreatingDoctorError extends ApiError {
    constructor(description?: string) {
        super(errorCode, 'Creating doctor Error', description);
    }
};

class GettingDoctorError extends ApiError {
    constructor(description?: string) {
        super(errorCode, 'Getting doctor Error', description);
    }
};

export {
    CreatingDoctorError,
    GettingDoctorError
};