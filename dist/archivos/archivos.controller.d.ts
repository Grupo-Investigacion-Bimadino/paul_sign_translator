import { ArchivosService } from './archivos.service';
import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';
export declare class ArchivosController {
    private readonly archivosService;
    constructor(archivosService: ArchivosService);
    create(createArchivoDto: CreateArchivoDto): CreateArchivoDto;
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
