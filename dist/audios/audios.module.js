"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiosModule = void 0;
const common_1 = require("@nestjs/common");
const audios_service_1 = require("./audios.service");
const audios_controller_1 = require("./audios.controller");
const mongoose_1 = require("@nestjs/mongoose");
const audios_schema_1 = require("./schema/audios.schema");
let AudiosModule = class AudiosModule {
};
exports.AudiosModule = AudiosModule;
exports.AudiosModule = AudiosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: audios_schema_1.audios.name, schema: audios_schema_1.MessageSchema }]),
        ],
        controllers: [audios_controller_1.AudiosController],
        providers: [audios_service_1.AudiosService],
    })
], AudiosModule);
//# sourceMappingURL=audios.module.js.map