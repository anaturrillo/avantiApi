import {Codes, ControllerFunction} from "../types";
import {IExercise} from "../types/model";
import {createExercise, editExercise, findExerciseById, findExercises, removeExercise} from "./exercise.services";

export const findExercisesController:ControllerFunction<IExercise[]> = (req):Promise<IExercise[]> => findExercises(req.query);
export const findExerciseByIdController:ControllerFunction<IExercise> = (req):Promise<IExercise> => findExerciseById(req.params.exerciseId);
export const createExerciseController: ControllerFunction<Codes> = (req):Promise<Codes> => createExercise(req.body);
export const editExerciseController: ControllerFunction<Codes> = (req): Promise<Codes> => editExercise(req.params.exerciseId, req.body);
export const removeExerciseController: ControllerFunction<Codes> = (req): Promise<Codes> => removeExercise(req.params.exerciseId);
