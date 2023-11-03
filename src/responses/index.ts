import { Response } from 'express';

export const notFoundResponse = (res: Response<any, any>, reason: string) =>
    res.send({
        status: '404',
        details: 'Not Found',
        reason,
    });
