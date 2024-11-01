import { PalabrasService } from './palabras.service';
import { CreatePalabraDto } from './dto/create-palabra.dto';
import { UpdatePalabraDto } from './dto/update-palabra.dto';
export declare class PalabrasController {
    private readonly palabrasService;
    constructor(palabrasService: PalabrasService);
    create(createPalabraDto: CreatePalabraDto): CreatePalabraDto;
    findAll(): void;
    findOne(id: string): {
        id: number;
        text: string;
        Image: string;
    };
    update(id: string, updatePalabraDto: UpdatePalabraDto): {
        id: number;
        updatePalabraDto: UpdatePalabraDto;
    };
    remove(id: string): {
        id: number;
    };
}
