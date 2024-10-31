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
exports.ArchivosController = void 0;
const common_1 = require("@nestjs/common");
const archivos_service_1 = require("./archivos.service");
const create_archivo_dto_1 = require("./dto/create-archivo.dto");
const update_archivo_dto_1 = require("./dto/update-archivo.dto");
let ArchivosController = class ArchivosController {
    constructor(archivosService) {
        this.archivosService = archivosService;
    }
    create(createArchivoDto) {
        return this.archivosService.create(createArchivoDto);
    }
    findAll() {
        return this.archivosService.findAll();
    }
    findOne(id) {
        return this.archivosService.findOne(+id);
    }
    update(id, updateArchivoDto) {
        return this.archivosService.update(+id, updateArchivoDto);
    }
    remove(id) {
        return this.archivosService.remove(+id);
    }
};
exports.ArchivosController = ArchivosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_archivo_dto_1.CreateArchivoDto]),
    __metadata("design:returntype", void 0)
], ArchivosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArchivosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArchivosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_archivo_dto_1.UpdateArchivoDto]),
    __metadata("design:returntype", void 0)
], ArchivosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArchivosController.prototype, "remove", null);
exports.ArchivosController = ArchivosController = __decorate([
    (0, common_1.Controller)('archivos'),
    __metadata("design:paramtypes", [archivos_service_1.ArchivosService])
], ArchivosController);
//# sourceMappingURL=archivos.controller.js.map