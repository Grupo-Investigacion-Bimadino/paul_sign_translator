import { SignificadosService } from './significados.service';
import { CreateSignificadoDto } from './dto/create-significado.dto';
import { UpdateSignificadoDto } from './dto/update-significado.dto';
export declare class SignificadosController {
    private readonly significadosService;
    constructor(significadosService: SignificadosService);
    create(createSignificadoDto: CreateSignificadoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSignificadoDto: UpdateSignificadoDto): string;
    remove(id: string): string;
}
