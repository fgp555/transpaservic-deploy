import { Response } from 'express';
export declare class FileController {
    uploadSingle(file: Express.Multer.File, body: any): {
        message: string;
        filename: string;
        data: any;
    };
    createUser(profileImage: Express.Multer.File, body: {
        name: string;
        email: string;
    }, res: Response): Promise<Response<any, Record<string, any>>>;
    uploadMultiple(files: Express.Multer.File[]): {
        message: string;
        files?: undefined;
    } | {
        message: string;
        files: string[];
    };
    listFiles(res: Response): Promise<Response<any, Record<string, any>>>;
    updateFile(file: Express.Multer.File, filename: string, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteFile(filename: string, res: any): Promise<any>;
}
