import { AudiosService } from './audios.service';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';
export declare class AudiosController {
    private readonly audiosService;
    constructor(audiosService: AudiosService);
    create(createAudioDto: CreateAudioDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/audios.schema").audios> & import("./schema/audios.schema").audios & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/audios.schema").audios> & import("./schema/audios.schema").audios & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[], import("mongoose").Document<unknown, {}, import("./schema/audios.schema").audios> & import("./schema/audios.schema").audios & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, {}, import("./schema/audios.schema").audios, "find", {}>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schema/audios.schema").audios> & import("./schema/audios.schema").audios & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, import("./schema/audios.schema").audios> & import("./schema/audios.schema").audios & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, {}, import("./schema/audios.schema").audios, "findOne", {}>;
    update(id: string, updateAudioDto: UpdateAudioDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/audios.schema").audios> & import("./schema/audios.schema").audios & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/audios.schema").audios> & import("./schema/audios.schema").audios & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
