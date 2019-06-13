import {Request, Router} from 'express'
import {respond} from "../controller";
import {createUserController,
    editUserController,
    findUserByIdController,
    findUsersController,
    removeUserController
} from "./user.controller";
const router = Router();

router.get('/', respond(findUsersController));
router.get('/:userId', respond(findUserByIdController));
router.post('/', respond(createUserController));
router.put('/:userId', respond(editUserController));
router.delete('/:userId', respond(removeUserController));

export default router
