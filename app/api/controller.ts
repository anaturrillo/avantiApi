import {Request, RequestHandler, Response} from "express";
import {ControllerFunction, ErrorCode} from "./types";

const statusCodes = {
    [ErrorCode.BAD_FORMAT]: 400,
    [ErrorCode.NOT_FOUND]: 404,
    [ErrorCode.INTERNAL_ERROR]: 500
};

export const respond = <T>(fn:ControllerFunction<T>):RequestHandler => {
    return async (req:Request, res:Response) => {
        try {
            const result = await fn(req);
            res.json(result)
        } catch (e) {
            console.error(e);
            res.status(statusCodes[e.code] || 500);
            res.json({error:e.message || 'unspecified error'})
        }
    }
};
