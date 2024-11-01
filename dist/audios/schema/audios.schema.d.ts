import { Document } from 'mongoose';
export declare class audios extends Document {
    Nombre: string;
    duracion: string;
    fecha_de_creacion: string;
    etiqueta: string;
    favorito: string;
    tiempo_pausa: string;
    estado: string;
}
export declare const MessageSchema: import("mongoose").Schema<audios, import("mongoose").Model<audios, any, any, any, Document<unknown, any, audios> & audios & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, audios, Document<unknown, {}, import("mongoose").FlatRecord<audios>> & import("mongoose").FlatRecord<audios> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
