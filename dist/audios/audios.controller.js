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
exports.AudiosController = void 0;
const common_1 = require("@nestjs/common");
const audios_service_1 = require("./audios.service");
const create_audio_dto_1 = require("./dto/create-audio.dto");
const update_audio_dto_1 = require("./dto/update-audio.dto");
let AudiosController = class AudiosController {
    constructor(audiosService) {
        this.audiosService = audiosService;
    }
    create(createAudioDto) {
        return this.audiosService.create(createAudioDto);
    }
    findAll() {
        return this.audiosService.findAll();
    }
    findOne(id) {
        return this.audiosService.findOne(id);
    }
    update(id, updateAudioDto) {
        return this.audiosService.update(id, updateAudioDto);
    }
    remove(id) {
        return this.audiosService.remove(id);
    }
};
exports.AudiosController = AudiosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_audio_dto_1.CreateAudioDto]),
    __metadata("design:returntype", void 0)
], AudiosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AudiosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AudiosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_audio_dto_1.UpdateAudioDto]),
    __metadata("design:returntype", void 0)
], AudiosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AudiosController.prototype, "remove", null);
exports.AudiosController = AudiosController = __decorate([
    (0, common_1.Controller)('audios'),
    __metadata("design:paramtypes", [audios_service_1.AudiosService])
], AudiosController);
//# sourceMappingURL=audios.controller.js.map