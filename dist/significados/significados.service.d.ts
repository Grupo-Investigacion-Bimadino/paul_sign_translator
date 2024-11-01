import { CreateSignificadoDto } from './dto/create-significado.dto';
import { UpdateSignificadoDto } from './dto/update-significado.dto';
export declare class SignificadosService {
    create(createSignificadoDto: CreateSignificadoDto): CreateSignificadoDto;
    findAll(): void;
    findOne(id: number): {
        id: number;
        text: string;
        Image: string;
    };
    update(id: number, updateSignificadoDto: UpdateSignificadoDto): {
        id: number;
        updateSignificadoDto: UpdateSignificadoDto;
    };
    remove(id: number): {
        id: number;
    };
}
