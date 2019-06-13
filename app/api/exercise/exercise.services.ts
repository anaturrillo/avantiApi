import {InvalidArgumentError, NotFoundError} from "../../utils/errors";
import {
    createExerciseClient,
    editExerciseClient,
    findExerciseByIdClient,
    findExercisesClient,
    removeExerciseClient
} from "./exercise.client";

export const findExercises = async (query) => {
    const field = query.field;
    const value = query.value;

    const hasField = field !== undefined && field !== null && field.trim() !== '';
    const hasValue = value !== undefined && value !== null && value.trim() !== '';

    if ((hasField && !hasValue) || (!hasField && hasValue)) {
        throw new InvalidArgumentError('Exercises query', `${field}:${value}`)
    }

    const users = await findExercisesClient(field, value);
    if (users.length === 0) throw new NotFoundError('Users', field, value);
    return users
};

export const createExercise = createExerciseClient;

export const findExerciseById = async exerciseId => {
    if (!exerciseId) throw new InvalidArgumentError('Exercise', `exerciseId: ${exerciseId}`);
    const exercise = await findExerciseByIdClient(exerciseId);
    if (!exercise) throw new NotFoundError('Users', 'userId', exerciseId);
    return exercise;
};

export const editExercise = async (exerciseId, user) => {
    const findExercise = await findExerciseById(exerciseId);
    if (!findExercise) throw new NotFoundError('Exercise', 'exerciseId', exerciseId);
    return await editExerciseClient(exerciseId, user);
};

export const removeExercise = async (exerciseId) => {
    const findExercise = await findExerciseById(exerciseId);
    if (!findExercise) throw new NotFoundError('Exercise', 'exerciseId', exerciseId);
    return await removeExerciseClient(exerciseId)
};
