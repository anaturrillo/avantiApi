import {InvalidArgumentError, NotFoundError} from "../../utils/errors";
import {createProgressClient, editProgressClient, findProgresssClient, removeProgressClient} from "./progress.client";

export const findProgresss = async (query) => {
    const field = query.field;
    const value = query.value;

    const hasField = field !== undefined && field !== null && field.trim() !== '';
    const hasValue = value !== undefined && value !== null && value.trim() !== '';

    if ((hasField && !hasValue) || (!hasField && hasValue)) {
        throw new InvalidArgumentError('Progresss query', `${field}:${value}`)
    }

    const users = await findProgresssClient(field, value);
    if (users.length === 0) throw new NotFoundError('Users', field, value);
    return users
};

export const createProgress = createProgressClient;

export const findProgressById = async progressId => {
    if (!progressId) throw new InvalidArgumentError('Progress', `progressId: ${progressId}`);
    const progress = await findProgressById(progressId);
    if (!progress) throw new NotFoundError('Users', 'userId', progressId);
    return progress;
};

export const editProgress = async (progressId, user) => {
    const findProgress = await findProgressById(progressId);
    if (!findProgress) throw new NotFoundError('Progress', 'progressId', progressId);
    return await editProgressClient(progressId, user);
};

export const removeProgress = async (progressId) => {
    const findProgress = await findProgressById(progressId);
    if (!findProgress) throw new NotFoundError('Progress', 'progressId', progressId);
    return await removeProgressClient(progressId)
};
