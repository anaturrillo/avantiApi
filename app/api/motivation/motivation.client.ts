import {Motivation, User} from "../../model";
import {Codes} from "../types";
import {InternalError, InvalidArgumentError} from "../../utils/errors";
import {IMotivation, IUser} from "../types/model";

export const createMotivationClient = (item) => {
  const newMotivation = new Motivation(item);
  return newMotivation.save()
      .then(_ => Codes.OK)
      .catch(e => {
          const sentData = JSON.stringify(item);
          if (e.name === 'ValidationError') throw new InvalidArgumentError('Motivation', sentData);
          throw new InvalidArgumentError('Motivation', sentData)
      })
};

export const findMotivationByIdClient = (motivationId):Promise<IMotivation> => Motivation
      .findById(motivationId)
      .exec()
      .catch(e => {
          throw new InternalError('Motivations')
      });

export const findMotivationsClient = (field, value):Promise<IMotivation[]> => Motivation
    .find({[field]:value})
    .exec()
    .catch(e => {
        if (e.name === 'ValidationError') throw new InvalidArgumentError('Motivation query', `${field}:${value}`);
        throw new InternalError('Motivation')
    });

export const editMotivationClient = (motivationId, motivation) => {
    return Motivation
        .replaceOne({_id: motivationId}, motivation)
        .exec()
        .then(data => Codes.OK)
        .catch(e => {
            const sentData = JSON.stringify(motivation);
            if (e.name === 'ValidationError') throw new InvalidArgumentError('Motivation', sentData);
            throw new InvalidArgumentError('Motivation', sentData)
        })
};

export const removeMotivationClient = (motivationId) => Motivation
        .findOneAndRemove({_id: motivationId})
        .exec()
        .then(_ => Codes.OK);
