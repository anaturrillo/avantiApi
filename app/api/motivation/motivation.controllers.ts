import {Codes, ControllerFunction} from "../types";
import {IMotivation} from "../types/model";
import {
    createMotivation,
    editMotivation,
    findMotivationById,
    findMotivations,
    removeMotivation
} from "./motivation.services";

export const findMotivationsController:ControllerFunction<IMotivation[]> = (req):Promise<IMotivation[]> => findMotivations(req.query);
export const findMotivationByIdController:ControllerFunction<IMotivation> = (req):Promise<IMotivation> => findMotivationById(req.params.userId);
export const createMotivationController: ControllerFunction<Codes> = (req):Promise<Codes> => createMotivation(req.body);
export const editMotivationController: ControllerFunction<Codes> = (req): Promise<Codes> => editMotivation(req.params.userId, req.body);
export const removeMotivationController: ControllerFunction<Codes> = (req): Promise<Codes> => removeMotivation(req.params.userId);
