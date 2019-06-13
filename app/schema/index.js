"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    _id: String,
    name: { type: String, required: true },
    lastName: { type: String },
    username: { type: String, required: true },
    email: { type: String },
    password: { type: String, required: true },
    age: { type: Number },
    myRoutines: []
});
exports.userSchema = userSchema;
var progressSchema = new mongoose.Schema({
    routine: { type: String, require: true },
    date: { type: Date, "default": Date.now }
});
exports.progressSchema = progressSchema;
var routineSchema = new mongoose.Schema({
    exercises: [{
            _id: String,
            exercise: {
                _id: String,
                name: { type: String, required: true },
                author: { type: String, required: true },
                description: String,
                image: {
                    animation: String,
                    static: String
                }
            },
            duration: { type: Number, required: true },
            durationType: { type: String, "enum": ['reps', 'hold'] }
        }],
    rest: Number,
    repetitions: Number,
    restBetweenReps: Number,
    state: { type: String, "enum": ['published', 'unpublished'] }
});
exports.routineSchema = routineSchema;
var exerciseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    image: {
        animation: String,
        static: String
    }
});
exports.exerciseSchema = exerciseSchema;
var motivationSchema = new mongoose.Schema({
    text: String,
    style: {
        type: String,
        "enum": [
            'Raleway',
            'Roboto Condensed',
            'Merriweather',
            'Playfair Display',
            'Niconne',
            'Lora',
            'Lobster',
            'Overpass Mono',
            'Gloria Hallelujah',
            'Poiret One'
        ]
    }
});
exports.motivationSchema = motivationSchema;
