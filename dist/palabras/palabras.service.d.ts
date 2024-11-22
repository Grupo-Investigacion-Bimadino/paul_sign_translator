import { CreatePalabraDto } from './dto/create-palabra.dto';
import { UpdatePalabraDto } from './dto/update-palabra.dto';
import { Model } from 'mongoose';
import { Palabras } from './schema/palabras.schema';
export declare class PalabrasService {
    private palabrasModel;
    constructor(palabrasModel: Model<Palabras>);
    create(createPalabraDto: CreatePalabraDto): Promise<import("mongoose").Document<unknown, {}, Palabras> & Palabras & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Palabras> & Palabras & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[], import("mongoose").Document<unknown, {}, Palabras> & Palabras & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, {}, Palabras, "find", {}>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, Palabras> & Palabras & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, Palabras> & Palabras & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, {}, Palabras, "findOne", {}>;
    update(id: string, updatePalabraDto: UpdatePalabraDto): Promise<import("mongoose").Document<unknown, {}, Palabras> & Palabras & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, Palabras> & Palabras & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
