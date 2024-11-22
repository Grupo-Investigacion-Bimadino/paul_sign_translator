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
exports.AudiosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const audios_schema_1 = require("./schema/audios.schema");
let AudiosService = class AudiosService {
    constructor(audiosModel) {
        this.audiosModel = audiosModel;
    }
    async create(createAudioDto) {
        const createdaudios = new this.audiosModel(createAudioDto);
        const result = await createdaudios.save();
        return result;
    }
    findAll() {
        return this.audiosModel.find();
    }
    findOne(id) {
        return this.audiosModel.findById(id);
    }
    async update(id, updateAudioDto) {
        try {
            const updateaudio = await this.audiosModel.findByIdAndUpdate(id, updateAudioDto, { new: true });
            return updateaudio;
        }
        finally {
            console.log("actualizado");
        }
    }
    async remove(id) {
        try {
            const deleteaudio = await this.audiosModel.findByIdAndDelete(id);
            return deleteaudio;
        }
        finally {
        }
    }
};
exports.AudiosService = AudiosService;
exports.AudiosService = AudiosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(audios_schema_1.audios.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AudiosService);
//# sourceMappingURL=audios.service.js.map