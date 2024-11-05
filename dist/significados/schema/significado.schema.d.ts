import { Document } from 'mongoose';
export declare class significado extends Document {
    seña: string;
    texto: string;
    timestamp: Date;
}
export declare const MessageSchema: import("mongoose").Schema<significado, import("mongoose").Model<significado, any, any, any, Document<unknown, any, significado> & significado & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, significado, Document<unknown, {}, import("mongoose").FlatRecord<significado>> & import("mongoose").FlatRecord<significado> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
