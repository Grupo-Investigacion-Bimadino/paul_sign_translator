import { SignificadosService } from './significados.service';
import { CreateSignificadoDto } from './dto/create-significado.dto';
import { UpdateSignificadoDto } from './dto/update-significado.dto';
export declare class SignificadosController {
    private readonly significadosService;
    constructor(significadosService: SignificadosService);
    create(createSignificadoDto: CreateSignificadoDto): CreateSignificadoDto;
    findAll(): void;
    findOne(id: string): {
        id: number;
        text: string;
        Image: string;
    };
    update(id: string, updateSignificadoDto: UpdateSignificadoDto): {
        id: number;
        updateSignificadoDto: UpdateSignificadoDto;
    };
    remove(id: string): {
        id: number;
    };
}
