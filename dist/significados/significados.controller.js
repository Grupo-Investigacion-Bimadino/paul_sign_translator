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
exports.SignificadosController = void 0;
const common_1 = require("@nestjs/common");
const significados_service_1 = require("./significados.service");
const create_significado_dto_1 = require("./dto/create-significado.dto");
const update_significado_dto_1 = require("./dto/update-significado.dto");
let SignificadosController = class SignificadosController {
    constructor(significadosService) {
        this.significadosService = significadosService;
    }
    create(createSignificadoDto) {
        return this.significadosService.create(createSignificadoDto);
    }
    findAll() {
        return this.significadosService.findAll();
    }
    findOne(id) {
        return this.significadosService.findOne(id);
    }
    update(id, updateSignificadoDto) {
        return this.significadosService.update(id, updateSignificadoDto);
    }
    remove(id) {
        return this.significadosService.remove(id);
    }
};
exports.SignificadosController = SignificadosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_significado_dto_1.CreateSignificadoDto]),
    __metadata("design:returntype", void 0)
], SignificadosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SignificadosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SignificadosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_significado_dto_1.UpdateSignificadoDto]),
    __metadata("design:returntype", void 0)
], SignificadosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SignificadosController.prototype, "remove", null);
exports.SignificadosController = SignificadosController = __decorate([
    (0, common_1.Controller)('significados'),
    __metadata("design:paramtypes", [significados_service_1.SignificadosService])
], SignificadosController);
//# sourceMappingURL=significados.controller.js.map