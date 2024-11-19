"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchivosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const archivos_schema_1 = require("./schema/archivos.schema");
let ArchivosService = class ArchivosService {
    constructor(archivosModel) {
        this.archivosModel = archivosModel;
    }
    async create(createArchivoDto) {
        const createdarchivos = new this.archivosModel(createArchivoDto);
        const result = await createdarchivos.save();
        return result;
    }
    findAll() {
        return [
            {
                id: 1,
                name: 'jesus',
                url: 'google.com/cariño',
                size: '5mb',
                format: '.mp3'
            },
            {
                id: 2,
                name: 'Esteban',
                url: 'google.com/arbol',
                size: '3mb',
                format: '.mp3'
            },
            {
                id: 3,
                name: 'jesus',
                url: 'google.com/casa',
                size: '1mb',
                format: '.mp3'
            }
        ];
    }
    findOne(id) {
        return {
            id,
            name: 'jesus',
            url: 'google.com/cariño',
            size: '5mb',
            format: '.mp3'
        };
    }
    update(id, updateArchivoDto) {
        return {
            id,
            updateArchivoDto,
        };
    }
    remove(id) {
        return {
            id,
        };
    }
};
exports.ArchivosService = ArchivosService;
exports.ArchivosService = ArchivosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(archivos_schema_1.archivos.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ArchivosService);
//# sourceMappingURL=archivos.service.js.map