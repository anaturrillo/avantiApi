import {Router} from 'express'
import {respond} from "../controller";
import {
    createMotivationController,
    editMotivationController,
    findMotivationByIdController,
    findMotivationsController, removeMotivationController
} from "./motivation.controllers";

const router = Router();

router.get('/', respond(findMotivationsController));
router.get('/:motivationId', respond(findMotivationByIdController));
router.post('/', respond(createMotivationController));
router.put('/:motivationId', respond(editMotivationController));
router.delete('/:motivationId', respond(removeMotivationController));

export default router
