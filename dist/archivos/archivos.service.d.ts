import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';
export declare class ArchivosService {
    create(createArchivoDto: CreateArchivoDto): CreateArchivoDto;
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
