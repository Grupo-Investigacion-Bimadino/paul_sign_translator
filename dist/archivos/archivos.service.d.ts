import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';
import { Model } from 'mongoose';
import { archivos } from './schema/archivos.schema';
export declare class ArchivosService {
    private archivosModel;
    constructor(archivosModel: Model<archivos>);
    create(createArchivoDto: CreateArchivoDto): Promise<import("mongoose").Document<unknown, {}, archivos> & archivos & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, archivos> & archivos & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, archivos> & archivos & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    update(id: string, updateArchivoDto: UpdateArchivoDto): Promise<import("mongoose").Document<unknown, {}, archivos> & archivos & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, archivos> & archivos & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
