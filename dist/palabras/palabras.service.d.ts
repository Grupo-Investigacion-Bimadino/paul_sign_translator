import { CreatePalabraDto } from './dto/create-palabra.dto';
import { UpdatePalabraDto } from './dto/update-palabra.dto';
export declare class PalabrasService {
    create(createPalabraDto: CreatePalabraDto): CreatePalabraDto;
    findAll(): void;
    findOne(id: number): {
        id: number;
        text: string;
        Image: string;
    };
    update(id: number, updatePalabraDto: UpdatePalabraDto): {
        id: number;
        updatePalabraDto: UpdatePalabraDto;
    };
    remove(id: number): {
        id: number;
    };
}
