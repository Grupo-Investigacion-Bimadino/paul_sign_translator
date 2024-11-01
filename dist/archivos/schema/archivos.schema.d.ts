import { Document } from 'mongoose';
export declare class archivos extends Document {
    nombre: string;
    url: string;
    tamaño: string;
    formato: string;
}
export declare const MessageSchema: import("mongoose").Schema<archivos, import("mongoose").Model<archivos, any, any, any, Document<unknown, any, archivos> & archivos & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, archivos, Document<unknown, {}, import("mongoose").FlatRecord<archivos>> & import("mongoose").FlatRecord<archivos> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
