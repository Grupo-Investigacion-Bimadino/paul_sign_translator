import { Document } from 'mongoose';
export declare class Palabras extends Document {
    content: string;
    text: string;
    representacion_grafica: string;
}
export declare const MessageSchema: import("mongoose").Schema<Palabras, import("mongoose").Model<Palabras, any, any, any, Document<unknown, any, Palabras> & Palabras & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Palabras, Document<unknown, {}, import("mongoose").FlatRecord<Palabras>> & import("mongoose").FlatRecord<Palabras> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
