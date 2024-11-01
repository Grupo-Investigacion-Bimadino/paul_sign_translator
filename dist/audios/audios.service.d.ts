import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';
export declare class AudiosService {
    create(createAudioDto: CreateAudioDto): CreateAudioDto;
    findAll(): ({
        id: number;
        name1: string;
        duracion: number;
        date: number;
        etiqueta1: string;
        favoritos: string;
        tiempodepausa1: number;
        name2?: undefined;
    } | {
        id: number;
        name2: string;
        duracion: number;
        date: number;
        etiqueta1: string;
        favoritos: string;
        tiempodepausa1: number;
        name1?: undefined;
    })[];
    findOne(id: number): {
        id: number;
        name1: string;
        duracion: string;
        date: string;
        etiqueta1: string;
        favoritos: string;
        tiempodepausa1: string;
    };
    update(id: number, updateAudioDto: UpdateAudioDto): {
        id: number;
        updateAudioDto: UpdateAudioDto;
    };
    remove(id: number): {
        id: number;
    };
}
