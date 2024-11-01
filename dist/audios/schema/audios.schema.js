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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageSchema = exports.audios = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let audios = class audios extends mongoose_2.Document {
};
exports.audios = audios;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], audios.prototype, "Nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], audios.prototype, "duracion", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], audios.prototype, "fecha_de_creacion", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], audios.prototype, "etiqueta", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], audios.prototype, "favorito", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], audios.prototype, "tiempo_pausa", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], audios.prototype, "estado", void 0);
exports.audios = audios = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], audios);
exports.MessageSchema = mongoose_1.SchemaFactory.createForClass(audios);
//# sourceMappingURL=audios.schema.js.map