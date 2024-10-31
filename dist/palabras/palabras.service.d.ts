import { CreatePalabraDto } from './dto/create-palabra.dto';
import { UpdatePalabraDto } from './dto/update-palabra.dto';
export declare class PalabrasService {
    create(createPalabraDto: CreatePalabraDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePalabraDto: UpdatePalabraDto): string;
    remove(id: number): string;
}
