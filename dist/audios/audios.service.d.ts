import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';
import { Model } from 'mongoose';
import { audios } from './schema/audios.schema';
export declare class AudiosService {
    private audiosModel;
    constructor(audiosModel: Model<audios>);
    create(createAudioDto: CreateAudioDto): Promise<import("mongoose").Document<unknown, {}, audios> & audios & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, audios> & audios & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[], import("mongoose").Document<unknown, {}, audios> & audios & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, {}, audios, "find", {}>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, audios> & audios & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, audios> & audios & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, {}, audios, "findOne", {}>;
    update(id: string, updateAudioDto: UpdateAudioDto): Promise<import("mongoose").Document<unknown, {}, audios> & audios & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    remove(id: number): Promise<import("mongoose").Document<unknown, {}, audios> & audios & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
