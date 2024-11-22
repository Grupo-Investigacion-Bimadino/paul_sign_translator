import { SignificadosService } from './significados.service';
import { CreateSignificadoDto } from './dto/create-significado.dto';
import { UpdateSignificadoDto } from './dto/update-significado.dto';
export declare class SignificadosController {
    private readonly significadosService;
    constructor(significadosService: SignificadosService);
    create(createSignificadoDto: CreateSignificadoDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/significado.schema").significado> & import("./schema/significado.schema").significado & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/significado.schema").significado> & import("./schema/significado.schema").significado & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[], import("mongoose").Document<unknown, {}, import("./schema/significado.schema").significado> & import("./schema/significado.schema").significado & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, {}, import("./schema/significado.schema").significado, "find", {}>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schema/significado.schema").significado> & import("./schema/significado.schema").significado & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, import("./schema/significado.schema").significado> & import("./schema/significado.schema").significado & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }, {}, import("./schema/significado.schema").significado, "findOne", {}>;
    update(id: string, updateSignificadoDto: UpdateSignificadoDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/significado.schema").significado> & import("./schema/significado.schema").significado & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/significado.schema").significado> & import("./schema/significado.schema").significado & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
