import {InvalidArgumentError, NotFoundError} from "../../utils/errors";
import {createMotivationClient, editMotivationClient, findMotivationsClient, removeMotivationClient} from "./motivation.client";

export const findMotivations = async (query) => {
    const field = query.field;
    const value = query.value;

    const hasField = field !== undefined && field !== null && field.trim() !== '';
    const hasValue = value !== undefined && value !== null && value.trim() !== '';

    if ((hasField && !hasValue) || (!hasField && hasValue)) {
        throw new InvalidArgumentError('Motivations query', `${field}:${value}`)
    }

    const users = await findMotivationsClient(field, value);
    if (users.length === 0) throw new NotFoundError('Users', field, value);
    return users
};

export const createMotivation = createMotivationClient;

export const findMotivationById = async motivationId => {
    if (!motivationId) throw new InvalidArgumentError('Motivation', `motivationId: ${motivationId}`);
    const motivation = await findMotivationById(motivationId);
    if (!motivation) throw new NotFoundError('Users', 'userId', motivationId);
    return motivation;
};

export const editMotivation = async (motivationId, user) => {
    const findMotivation = await findMotivationById(motivationId);
    if (!findMotivation) throw new NotFoundError('Motivation', 'motivationId', motivationId);
    return await editMotivationClient(motivationId, user);
};

export const removeMotivation = async (motivationId) => {
    const findMotivation = await findMotivationById(motivationId);
    if (!findMotivation) throw new NotFoundError('Motivation', 'motivationId', motivationId);
    return await removeMotivationClient(motivationId)
};
