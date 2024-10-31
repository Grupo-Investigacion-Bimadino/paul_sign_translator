import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';
export declare class ArchivosService {
    create(createArchivoDto: CreateArchivoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateArchivoDto: UpdateArchivoDto): string;
    remove(id: number): string;
}
