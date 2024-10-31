import { CreateSignificadoDto } from './dto/create-significado.dto';
import { UpdateSignificadoDto } from './dto/update-significado.dto';
export declare class SignificadosService {
    create(createSignificadoDto: CreateSignificadoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSignificadoDto: UpdateSignificadoDto): string;
    remove(id: number): string;
}
