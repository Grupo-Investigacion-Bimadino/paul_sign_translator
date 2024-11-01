"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchivosService = void 0;
const common_1 = require("@nestjs/common");
let ArchivosService = class ArchivosService {
    create(createArchivoDto) {
        return createArchivoDto;
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
            id: 1,
            name: 'jesus',
            url: 'google.com/cariño',
            size: '5mb',
            format: '.mp3'
        };
    }
    update(id, updateArchivoDto) {
        return {
            id: id,
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
    (0, common_1.Injectable)()
], ArchivosService);
//# sourceMappingURL=archivos.service.js.map