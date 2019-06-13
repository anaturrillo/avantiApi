import {Router} from 'express'
import {respond} from "../controller";
import {
    createExerciseController,
    editExerciseController,
    findExerciseByIdController,
    findExercisesController, removeExerciseController
} from "./exercise.controller";

const router = Router();

router.get('/', respond(findExercisesController));
router.get('/:exerciseId', respond(findExerciseByIdController));
router.post('/', respond(createExerciseController));
router.put('/:exerciseId', respond(editExerciseController));
router.delete('/:exerciseId', respond(removeExerciseController));

export default router
