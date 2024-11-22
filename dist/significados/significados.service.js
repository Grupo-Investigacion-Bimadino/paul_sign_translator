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
exports.SignificadosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const significado_schema_1 = require("./schema/significado.schema");
let SignificadosService = class SignificadosService {
    constructor(significadosModel) {
        this.significadosModel = significadosModel;
    }
    async create(createSignificadoDto) {
        const createsignicado = new this.significadosModel(createSignificadoDto);
        const result = await createsignicado.save();
        return result;
    }
    findAll() {
        return this.significadosModel.find();
    }
    findOne(id) {
        return this.significadosModel.findById(id);
    }
    async update(id, updateSignificadoDto) {
        try {
            const updatesignificado = await this.significadosModel.findByIdAndUpdate(id, updateSignificadoDto, { new: true });
            return updatesignificado;
        }
        finally {
            console.log("actualizado");
        }
    }
    async remove(id) {
        try {
            const deletesignificado = await this.significadosModel.findByIdAndDelete(id);
            return deletesignificado;
        }
        finally {
        }
    }
};
exports.SignificadosService = SignificadosService;
exports.SignificadosService = SignificadosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(significado_schema_1.significado.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SignificadosService);
//# sourceMappingURL=significados.service.js.map