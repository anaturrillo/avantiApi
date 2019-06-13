import {Router} from 'express'
import {respond} from "../controller";
import {
    addExerciseController,
    createRoutineController,
    editRoutineController,
    findRoutineByIdController,
    findRoutinesController, removeRoutineController
} from "./routine.controllers";

const router = Router();

router.get('/', respond(findRoutinesController));
router.get('/:routineId', respond(findRoutineByIdController));
router.post('/', respond(createRoutineController));
router.put('/:routineId', respond(editRoutineController));
router.delete('/:routineId', respond(removeRoutineController));
router.post('/:routineId/exercises', respond(addExerciseController));

export default router
