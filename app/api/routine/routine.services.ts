import {InvalidArgumentError, NotFoundError} from "../../utils/errors";
import {Chance} from 'chance'
import {
    addExerciseClient,
    createRoutineClient,
    editRoutineClient,
    findRoutinesClient,
    removeRoutineClient
} from "./routine.client";

const chance = new Chance();

import {findExerciseById} from "../exercise/exercise.services";
import {createIndex} from "../../utils";

export const findRoutines = async (query) => {
    const field = query.field;
    const value = query.value;

    const hasField = field !== undefined && field !== null && field.trim() !== '';
    const hasValue = value !== undefined && value !== null && value.trim() !== '';

    if ((hasField && !hasValue) || (!hasField && hasValue)) {
        throw new InvalidArgumentError('Routines query', `${field}:${value}`)
    }

    const users = await findRoutinesClient(field, value);
    if (users.length === 0) throw new NotFoundError('Users', field, value);
    return users
};

export const createRoutine = createRoutineClient;

export const findRoutineById = async routineId => {
    if (!routineId) throw new InvalidArgumentError('Routine', `routineId: ${routineId}`);
    const routine = await findRoutineById(routineId);
    if (!routine) throw new NotFoundError('Users', 'userId', routineId);
    return routine;
};

export const editRoutine = async (routineId, user) => {
    const findRoutine = await findRoutineById(routineId);
    if (!findRoutine) throw new NotFoundError('Routine', 'routineId', routineId);
    return await editRoutineClient(routineId, user);
};

export const removeRoutine = async (routineId) => {
    const findRoutine = await findRoutineById(routineId);
    if (!findRoutine) throw new NotFoundError('Routine', 'routineId', routineId);
    return await removeRoutineClient(routineId)
};

export const addExercise = async (routineId, exerciseToAdd) => {
    if(!routineId || !exerciseToAdd)
        throw new InvalidArgumentError('Add Exercise', `${routineId}: ${JSON.stringify(exerciseToAdd)}`);

    const routine = await findRoutineById(routineId);
    if (!routine) throw new NotFoundError('Routine', '_id', routineId);

    const exercise = await findExerciseById(exerciseToAdd.exerciseId);
    if (!exercise) throw new NotFoundError('Exercises', 'exerciseId', exerciseToAdd.exerciseId);

    return await addExerciseClient(routineId, {...exerciseToAdd, exercise, _id:chance.guid()})
};

export const getExercises = async (routineId) => {
  const routine = await findRoutineById(routineId);
  if (!routine) throw new NotFoundError('Routine', 'routineId', routineId);
  return routine.exercises
};
