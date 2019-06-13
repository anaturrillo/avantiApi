import {Progress, User} from "../../model";
import {Codes} from "../types";
import {InternalError, InvalidArgumentError} from "../../utils/errors";
import {IProgress, IUser} from "../types/model";

export const createProgressClient = (item) => {
  const newProgress = new Progress(item);
  return newProgress.save()
      .then(_ => Codes.OK)
      .catch(e => {
          const sentData = JSON.stringify(item);
          if (e.name === 'ValidationError') throw new InvalidArgumentError('Progress', sentData);
          throw new InvalidArgumentError('Progress', sentData)
      })
};

export const findProgressByIdClient = (progressId):Promise<IProgress> => Progress
      .findById(progressId)
      .exec()
      .catch(e => {
          throw new InternalError('Progresss')
      });

export const findProgresssClient = (field, value):Promise<IProgress[]> => Progress
    .find({[field]:value})
    .exec()
    .catch(e => {
        if (e.name === 'ValidationError') throw new InvalidArgumentError('Progress query', `${field}:${value}`);
        throw new InternalError('Progress')
    });

export const editProgressClient = (progressId, progress) => {
    return Progress
        .replaceOne({_id: progressId}, progress)
        .exec()
        .then(data => Codes.OK)
        .catch(e => {
            const sentData = JSON.stringify(progress);
            if (e.name === 'ValidationError') throw new InvalidArgumentError('Progress', sentData);
            throw new InvalidArgumentError('Progress', sentData)
        })
};

export const removeProgressClient = (progressId) => Progress
        .findOneAndRemove({_id: progressId})
        .exec()
        .then(_ => Codes.OK);
