import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document{
    name:String
    lastName: String
    email: String
    password: String
    age?: Number
    myRoutines?: Array<IRoutine>
}

export interface IRoutine  extends mongoose.Document{
    exercises: Array<IRoutineExercise>
    rest: Number
    repetitions?: Number
    restBetweenReps?: Number
    state: String
}

export interface IRoutineExercise extends mongoose.Document{
    exercise: IExercise
    duration: Number
    durationType: String
}

export interface IProgress extends mongoose.Document{
    routine: String
    date: Date
}

export interface IExercise extends mongoose.Document{
    name: String
    description: String
    image: {
        animation?: String,
        static: String
    }
}

export interface IMotivation extends mongoose.Document {
    text: String
    style: String
}
