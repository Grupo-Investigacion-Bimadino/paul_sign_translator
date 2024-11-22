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
exports.PalabrasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const palabras_schema_1 = require("./schema/palabras.schema");
let PalabrasService = class PalabrasService {
    constructor(palabrasModel) {
        this.palabrasModel = palabrasModel;
    }
    async create(createPalabraDto) {
        const createpalabras = new this.palabrasModel(createPalabraDto);
        const result = await createpalabras.save();
        return result;
    }
    findAll() {
        return this.palabrasModel.find();
    }
    findOne(id) {
        return this.palabrasModel.findById(id);
    }
    async update(id, updatePalabraDto) {
        try {
            const updatepalabra = await this.palabrasModel.findByIdAndUpdate(id, updatePalabraDto, { new: true });
            return updatepalabra;
        }
        finally {
            console.log("actualizado");
        }
    }
    async remove(id) {
        try {
            const deletepalabras = await this.palabrasModel.findByIdAndDelete(id);
            return deletepalabras;
        }
        finally {
        }
    }
};
exports.PalabrasService = PalabrasService;
exports.PalabrasService = PalabrasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(palabras_schema_1.Palabras.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PalabrasService);
//# sourceMappingURL=palabras.service.js.map