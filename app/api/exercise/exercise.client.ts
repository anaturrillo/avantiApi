import {Exercise} from "../../model";
import {Codes} from "../types";
import {InternalError, InvalidArgumentError} from "../../utils/errors";
import {IExercise} from "../types/model";

export const createExerciseClient = (item) => {
    const newExercise = new Exercise(item);
    return newExercise.save()
        .then(_ => Codes.OK)
        .catch(e => {
            const sentData = JSON.stringify(item);
            if (e.name === 'ValidationError') throw new InvalidArgumentError('Exercise', sentData);
            throw new InvalidArgumentError('Exercise', sentData)
        })
};

export const findExerciseByIdClient = (exerciseId):Promise<IExercise> => Exercise
    .findById(exerciseId)
    .exec()
    .catch(e => {
        throw new InternalError('Exercises')
    });

export const findExercisesClient = (field, value):Promise<IExercise[]> => Exercise
    .find({[field]:value})
    .exec()
    .catch(e => {
        if (e.name === 'ValidationError') throw new InvalidArgumentError('Exercise query', `${field}:${value}`);
        throw new InternalError('Exercise')
    });

export const editExerciseClient = (exerciseId, exercise) => {
    return Exercise
        .replaceOne({_id: exerciseId}, exercise)
        .exec()
        .then(data => Codes.OK)
        .catch(e => {
            const sentData = JSON.stringify(exercise);
            if (e.name === 'ValidationError') throw new InvalidArgumentError('Exercise', sentData);
            throw new InvalidArgumentError('Exercise', sentData)
        })
};

export const removeExerciseClient = (exerciseId) => Exercise
    .findOneAndRemove({_id: exerciseId})
    .exec()
    .then(_ => Codes.OK);
