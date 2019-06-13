import {User} from "../../model";
import {IUser} from "../types/model";
import {Codes} from "../types";
import {InternalError, InvalidArgumentError, NotFoundError} from "../../utils/errors";

export const findUsersClient = (field, value):Promise<IUser[]> => User
    .find({[field]:value})
    .exec()
    .catch(e => {
        if (e.name === 'ValidationError') throw new InvalidArgumentError('User query', `${field}:${value}`);
        throw new InternalError('User')
    });

export const findUserByIdClient = (userId: string):Promise<IUser> => User
    .findById(userId)
    .exec()
    .catch(e => {
        throw new InternalError('Users')
    });

export const createUserClient = userData => {
  const newUser = new User({...userData, _id: userData.username});
  return newUser.save()
      .then(_ => Codes.OK)
      .catch(e => {
          const sentData = JSON.stringify(userData);
          if (e.name === 'ValidationError') throw new InvalidArgumentError('User', sentData);
          throw new InvalidArgumentError('User', sentData)
      })
};

export const editUserClient = (userId, user) => {
    return User
        .replaceOne({_id: userId}, user)
        .exec()
        .then(data => Codes.OK)
        .catch(e => {
            const sentData = JSON.stringify(user);
            if (e.name === 'ValidationError') throw new InvalidArgumentError('User', sentData);
            throw new InvalidArgumentError('User', sentData)
        })
};

export const removeUserClient = (userId) => {
    return User
        .findOneAndRemove({_id: userId})
        .exec()
        .then(_ => Codes.OK)
};




