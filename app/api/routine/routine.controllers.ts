import {Codes, ControllerFunction} from "../types";
import {IExercise, IRoutine} from "../types/model";
import {
    addExercise,
    createRoutine,
    editRoutine,
    findRoutineById,
    findRoutines, getExercises,
    removeRoutine
} from "./routine.services";

export const findRoutinesController:ControllerFunction<IRoutine[]> = (req):Promise<IRoutine[]> =>
    findRoutines(req.query);

export const findRoutineByIdController:ControllerFunction<IRoutine> = (req):Promise<IRoutine> =>
    findRoutineById(req.params.userId);

export const createRoutineController: ControllerFunction<Codes> = (req):Promise<Codes> =>
    createRoutine(req.body);

export const editRoutineController: ControllerFunction<Codes> = (req): Promise<Codes> =>
    editRoutine(req.params.userId, req.body);

export const removeRoutineController: ControllerFunction<Codes> = (req): Promise<Codes> =>
    removeRoutine(req.params.userId);

export const addExerciseController:ControllerFunction<Codes> = (req): Promise<Codes> =>
    addExercise(req.params.routineId, req.body);

export const getExercisesConstroller:ControllerFunction<Object> = (req):Promise<Object[]> =>
    getExercises(req.params.routineId);
