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
    findAll(): {
        id: number;
        name: string;
        url: string;
        size: string;
        format: string;
    }[];
    findOne(id: string): {
        id: number;
        name: string;
        url: string;
        size: string;
        format: string;
    };
    update(id: string, updateArchivoDto: UpdateArchivoDto): {
        id: number;
        updateArchivoDto: UpdateArchivoDto;
    };
    remove(id: string): {
        id: number;
    };
}
