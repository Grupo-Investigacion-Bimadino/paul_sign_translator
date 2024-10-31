import { PalabrasService } from './palabras.service';
import { CreatePalabraDto } from './dto/create-palabra.dto';
import { UpdatePalabraDto } from './dto/update-palabra.dto';
export declare class PalabrasController {
    private readonly palabrasService;
    constructor(palabrasService: PalabrasService);
    create(createPalabraDto: CreatePalabraDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePalabraDto: UpdatePalabraDto): string;
    remove(id: string): string;
}
