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
    findAll(): {
        id: number;
        name: string;
        url: string;
        size: string;
        format: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        url: string;
        size: string;
        format: string;
    };
    update(id: number, updateArchivoDto: UpdateArchivoDto): {
        id: number;
        updateArchivoDto: UpdateArchivoDto;
    };
    remove(id: number): {
        id: number;
    };
}
