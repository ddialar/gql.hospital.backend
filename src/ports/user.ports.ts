import { ApiError } from '@entities/ApiError';
import { User } from '@entities/User';

import * as adapters from '@adapters';

// ###############################################################
// ##########           GETTING OPERATIONS              ##########
// ###############################################################

const getUser = async (userId: string): Promise<User | ApiError> => {
    return await adapters.getUser(userId);
};

// ###############################################################
// ##########           UPDATING OPERATIONS             ##########
// ###############################################################

export {
    getUser,
}