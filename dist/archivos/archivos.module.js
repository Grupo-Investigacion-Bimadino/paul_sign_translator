"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchivosModule = void 0;
const common_1 = require("@nestjs/common");
const archivos_service_1 = require("./archivos.service");
const archivos_controller_1 = require("./archivos.controller");
let ArchivosModule = class ArchivosModule {
};
exports.ArchivosModule = ArchivosModule;
exports.ArchivosModule = ArchivosModule = __decorate([
    (0, common_1.Module)({
        controllers: [archivos_controller_1.ArchivosController],
        providers: [archivos_service_1.ArchivosService],
    })
], ArchivosModule);
//# sourceMappingURL=archivos.module.js.map