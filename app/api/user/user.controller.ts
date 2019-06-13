import {Codes, ControllerFunction} from "../types";
import {createUser, editUser, findUserById, findUsers, removeUser} from "./user.services";
import {IUser} from "../types/model";

export const findUsersController:ControllerFunction<IUser[]> = (req):Promise<IUser[]> => findUsers(req.query);
export const findUserByIdController:ControllerFunction<IUser> = (req):Promise<IUser> => findUserById(req.params.userId);
export const createUserController: ControllerFunction<Codes> = (req):Promise<Codes> => createUser(req.body);
export const editUserController: ControllerFunction<Codes> = (req): Promise<Codes> => editUser(req.params.userId, req.body);
export const removeUserController: ControllerFunction<Codes> = (req): Promise<Codes> => removeUser(req.params.userId);
