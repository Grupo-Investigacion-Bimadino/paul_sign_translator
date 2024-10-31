import { AudiosService } from './audios.service';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';
export declare class AudiosController {
    private readonly audiosService;
    constructor(audiosService: AudiosService);
    create(createAudioDto: CreateAudioDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAudioDto: UpdateAudioDto): string;
    remove(id: string): string;
}
