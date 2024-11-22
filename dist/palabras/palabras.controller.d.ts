import { PalabrasService } from './palabras.service';
import { CreatePalabraDto } from './dto/create-palabra.dto';
import { UpdatePalabraDto } from './dto/update-palabra.dto';
export declare class PalabrasController {
    private readonly palabrasService;
    constructor(palabrasService: PalabrasService);
    create(createPalabraDto: CreatePalabraDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/palabras.schema").Palabras> & import("./schema/palabras.schema").Palabras & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/palabras.schema").Palabras> & import("./schema/palabras.schema").Palabras & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[], import("mongoose").Document<unknown, {}, import("./schema/palabras.schema").Palabras> & import("./schema/palabras.schema").Palabras & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, {}, import("./schema/palabras.schema").Palabras, "find", {}>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schema/palabras.schema").Palabras> & import("./schema/palabras.schema").Palabras & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, import("./schema/palabras.schema").Palabras> & import("./schema/palabras.schema").Palabras & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, {}, import("./schema/palabras.schema").Palabras, "findOne", {}>;
    update(id: string, updatePalabraDto: UpdatePalabraDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/palabras.schema").Palabras> & import("./schema/palabras.schema").Palabras & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/palabras.schema").Palabras> & import("./schema/palabras.schema").Palabras & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
