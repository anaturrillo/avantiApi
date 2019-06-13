import {Request} from "express";

export type ControllerFunction<T> = (req:Request) => Promise<T> | T;

export enum ErrorCode {
    NOT_FOUND = 'NOT_FOUND',
    BAD_FORMAT = 'BAD_FORMAT',
    INTERNAL_ERROR = 'INTERNAL_ERROR'
}

export enum Codes {
    OK = 'Operacion exitosa'
}
