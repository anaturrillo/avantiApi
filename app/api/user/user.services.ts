import {createUserClient, editUserClient, findUserByIdClient, findUsersClient, removeUserClient} from "./user.client";
import {InvalidArgumentError, NotFoundError} from "../../utils/errors";

export const findUsers = async (query) => {
    const field = query.field;
    const value = query.value;

    const hasField = field !== undefined && field !== null && field.trim() !== '';
    const hasValue = value !== undefined && value !== null && value.trim() !== '';

    if ((hasField && !hasValue) || (!hasField && hasValue)) {
        throw new InvalidArgumentError('Users query', `${field}:${value}`)
    }

    const users = await findUsersClient(field, value);
    if (users.length === 0) throw new NotFoundError('Users', field, value);
    return users
};

export const createUser = createUserClient;

export const findUserById = async userId => {
    if (!userId) throw new InvalidArgumentError('User', `userId: ${userId}`);

    const user = await findUserByIdClient(userId);
    if (!user) throw new NotFoundError('Users', 'userId', userId);
    return user;
};

export const editUser = async (userId, user) => {
    const findUserId = await findUserById(userId);
    if (!findUserId) throw new NotFoundError('Users', 'userId', userId);
    return await editUserClient(userId, user);
};

export const removeUser = async (userId) => {
    const findUserId = await findUserById(userId);
    if (!findUserId) throw new NotFoundError('Users', 'userId', userId);
    return await removeUserClient(userId)
};
