import {Routine, User} from "../../model";
import {Codes} from "../types";
import {InternalError, InvalidArgumentError} from "../../utils/errors";
import {IRoutine, IUser} from "../types/model";

export const createRoutineClient = (item) => {
  const newRoutine = new Routine(item);
  return newRoutine.save()
      .then(_ => Codes.OK)
      .catch(e => {
          const sentData = JSON.stringify(item);
          if (e.name === 'ValidationError') throw new InvalidArgumentError('Routine', sentData);
          throw new InvalidArgumentError('Routine', sentData)
      })
};

export const findRoutineByIdClient = (routineId):Promise<IRoutine> => Routine
      .findById(routineId)
      .exec()
      .catch(e => {
          throw new InternalError('Routines')
      });

export const findRoutinesClient = (field, value):Promise<IRoutine[]> => Routine
    .find({[field]:value})
    .exec()
    .catch(e => {
        if (e.name === 'ValidationError') throw new InvalidArgumentError('Routine query', `${field}:${value}`);
        throw new InternalError('Routine')
    });

export const editRoutineClient = (routineId, routine) => {
    return Routine
        .replaceOne({_id: routineId}, routine)
        .exec()
        .then(data => Codes.OK)
        .catch(e => {
            const sentData = JSON.stringify(routine);
            if (e.name === 'ValidationError') throw new InvalidArgumentError('Routine', sentData);
            throw new InvalidArgumentError('Routine', sentData)
        })
};

export const removeRoutineClient = (routineId) => Routine
        .findOneAndRemove({_id: routineId})
        .exec()
        .then(_ => Codes.OK);

export const addExerciseClient = (routineId, exercise) => {
    return Routine.findById(routineId).update({$push: {exercises:exercise}}).then(e => Codes.OK)
};
