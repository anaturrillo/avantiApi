import {Codes, ControllerFunction} from "../types";
import {IProgress} from "../types/model";
import {createProgress, editProgress, findProgressById, findProgresss, removeProgress} from "./progress.services";

export const findProgresssController:ControllerFunction<IProgress[]> = (req):Promise<IProgress[]> => findProgresss(req.query);
export const findProgressByIdController:ControllerFunction<IProgress> = (req):Promise<IProgress> => findProgressById(req.params.userId);
export const createProgressController: ControllerFunction<Codes> = (req):Promise<Codes> => createProgress(req.body);
export const editProgressController: ControllerFunction<Codes> = (req): Promise<Codes> => editProgress(req.params.userId, req.body);
export const removeProgressController: ControllerFunction<Codes> = (req): Promise<Codes> => removeProgress(req.params.userId);
