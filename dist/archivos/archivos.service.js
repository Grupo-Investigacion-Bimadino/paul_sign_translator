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
    async findAll() {
        return this.archivosModel.find();
    }
    async findOne(id) {
        return this.archivosModel.findById(id);
    }
    async update(id, updateArchivoDto) {
        try {
            const updatearchivo = await this.archivosModel.findByIdAndUpdate(id, updateArchivoDto, { new: true });
            return updatearchivo;
        }
        finally {
            console.log("actualizado");
        }
    }
    async remove(id) {
        try {
            const deletearchivo = await this.archivosModel.findByIdAndDelete(id);
            return deletearchivo;
        }
        finally {
        }
    }
};
exports.ArchivosService = ArchivosService;
exports.ArchivosService = ArchivosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(archivos_schema_1.archivos.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ArchivosService);
//# sourceMappingURL=archivos.service.js.map