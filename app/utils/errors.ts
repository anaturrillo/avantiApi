import {ErrorCode} from "../api/types";

export abstract class AppError extends Error{
    public readonly code:ErrorCode;
    protected constructor(msg:string, code:ErrorCode) {
        super(msg);
        this.code = code
    }
}

export class InvalidArgumentError extends AppError {
    constructor(argument:string, value: unknown) {
        super(`${argument} is missing or badly formatted. Recieved: ${value}`, ErrorCode.BAD_FORMAT)
    }
}

export class NotFoundError extends AppError {
    constructor(entity:string, prop:string, value:unknown) {
        super(`There are no ${entity} whith ${prop} = ${value}`, ErrorCode.NOT_FOUND)
    }
}

export class InternalError extends AppError{
    constructor(entity: string) {
        super(`There has been an error with ${entity}`, ErrorCode.INTERNAL_ERROR)
    }
}
