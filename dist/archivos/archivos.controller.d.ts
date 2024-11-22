import { ArchivosService } from './archivos.service';
import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';
export declare class ArchivosController {
    private readonly archivosService;
    constructor(archivosService: ArchivosService);
    create(createArchivoDto: CreateArchivoDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/archivos.schema").archivos> & import("./schema/archivos.schema").archivos & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schema/archivos.schema").archivos> & import("./schema/archivos.schema").archivos & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/archivos.schema").archivos> & import("./schema/archivos.schema").archivos & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    update(id: string, updateArchivoDto: UpdateArchivoDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/archivos.schema").archivos> & import("./schema/archivos.schema").archivos & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/archivos.schema").archivos> & import("./schema/archivos.schema").archivos & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
