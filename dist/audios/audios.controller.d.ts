import { AudiosService } from './audios.service';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';
export declare class AudiosController {
    private readonly audiosService;
    constructor(audiosService: AudiosService);
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
    findOne(id: string): {
        id: number;
        name1: string;
        duracion: string;
        date: string;
        etiqueta1: string;
        favoritos: string;
        tiempodepausa1: string;
    };
    update(id: string, updateAudioDto: UpdateAudioDto): {
        id: number;
        updateAudioDto: UpdateAudioDto;
    };
    remove(id: string): {
        id: number;
    };
}
