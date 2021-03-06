import { ApiError } from '@entities/ApiError';

const errorCode:number = 404;

class UserDoesNotExistError extends ApiError {
    constructor(description?: string) {
        super(errorCode, 'The selected user doesn\'t exist.', description);
    }
};

export {
    UserDoesNotExistError
};