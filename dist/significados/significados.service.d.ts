import { CreateSignificadoDto } from './dto/create-significado.dto';
import { UpdateSignificadoDto } from './dto/update-significado.dto';
import { Model } from 'mongoose';
import { significado } from './schema/significado.schema';
export declare class SignificadosService {
    private significadosModel;
    constructor(significadosModel: Model<significado>);
    create(createSignificadoDto: CreateSignificadoDto): Promise<import("mongoose").Document<unknown, {}, significado> & significado & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, significado> & significado & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[], import("mongoose").Document<unknown, {}, significado> & significado & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, {}, significado, "find", {}>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, significado> & significado & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, significado> & significado & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, {}, significado, "findOne", {}>;
    update(id: string, updateSignificadoDto: UpdateSignificadoDto): Promise<import("mongoose").Document<unknown, {}, significado> & significado & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, significado> & significado & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
