import {Router} from 'express'
import {respond} from "../controller";
import {
    createProgressController,
    editProgressController,
    findProgressByIdController,
    findProgresssController, removeProgressController
} from "./progress.controllers";

const router = Router();

router.get('/', respond(findProgresssController));
router.get('/:progressId', respond(findProgressByIdController));
router.post('/', respond(createProgressController));
router.put('/:progressId', respond(editProgressController));
router.delete('/:progressId', respond(removeProgressController));

export default router
