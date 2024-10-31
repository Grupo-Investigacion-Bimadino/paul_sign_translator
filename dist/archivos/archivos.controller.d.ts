import { ArchivosService } from './archivos.service';
import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';
export declare class ArchivosController {
    private readonly archivosService;
    constructor(archivosService: ArchivosService);
    create(createArchivoDto: CreateArchivoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateArchivoDto: UpdateArchivoDto): string;
    remove(id: string): string;
}
