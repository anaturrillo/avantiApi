import * as mongoose from 'mongoose'
import {userSchema, progressSchema, routineSchema, exerciseSchema, motivationSchema} from '../schema'
import {IExercise, IMotivation, IProgress, IRoutine, IUser} from "../api/types/model";

const User = mongoose.model<IUser>('User', userSchema);
const Progress = mongoose.model<IProgress>('Progress', progressSchema);
const Routine = mongoose.model<IRoutine>('Routine', routineSchema);
const Exercise = mongoose.model<IExercise>('Exercise', exerciseSchema);
const Motivation = mongoose.model<IMotivation>('Motivation', motivationSchema);

export {User, Progress, Routine, Exercise, Motivation}
