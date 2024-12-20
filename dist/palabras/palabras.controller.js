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
exports.PalabrasController = void 0;
const common_1 = require("@nestjs/common");
const palabras_service_1 = require("./palabras.service");
const create_palabra_dto_1 = require("./dto/create-palabra.dto");
const update_palabra_dto_1 = require("./dto/update-palabra.dto");
let PalabrasController = class PalabrasController {
    constructor(palabrasService) {
        this.palabrasService = palabrasService;
    }
    create(createPalabraDto) {
        return this.palabrasService.create(createPalabraDto);
    }
    findAll() {
        return this.palabrasService.findAll();
    }
    findOne(id) {
        return this.palabrasService.findOne(id);
    }
    update(id, updatePalabraDto) {
        return this.palabrasService.update(id, updatePalabraDto);
    }
    remove(id) {
        return this.palabrasService.remove(id);
    }
};
exports.PalabrasController = PalabrasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_palabra_dto_1.CreatePalabraDto]),
    __metadata("design:returntype", void 0)
], PalabrasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PalabrasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PalabrasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_palabra_dto_1.UpdatePalabraDto]),
    __metadata("design:returntype", void 0)
], PalabrasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PalabrasController.prototype, "remove", null);
exports.PalabrasController = PalabrasController = __decorate([
    (0, common_1.Controller)('palabras'),
    __metadata("design:paramtypes", [palabras_service_1.PalabrasService])
], PalabrasController);
//# sourceMappingURL=palabras.controller.js.map