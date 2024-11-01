"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalabrasService = void 0;
const common_1 = require("@nestjs/common");
let PalabrasService = class PalabrasService {
    create(createPalabraDto) {
        return createPalabraDto;
    }
    findAll() {
        return;
        [
            {
                id: 1,
                text: 'jesus',
                Image: 'representacion grafica'
            },
            {
                id: 2,
                text: 'jesusdsada',
                Image: 'representacion grafica'
            },
            {
                id: 3,
                text: 'jesusdsadaaa',
                Image: 'representacion grafica'
            }
        ];
    }
    findOne(id) {
        return {
            id,
            text: 'jesus',
            Image: 'representacion'
        };
    }
    update(id, updatePalabraDto) {
        return {
            id,
            updatePalabraDto,
        };
    }
    remove(id) {
        return {
            id,
        };
    }
};
exports.PalabrasService = PalabrasService;
exports.PalabrasService = PalabrasService = __decorate([
    (0, common_1.Injectable)()
], PalabrasService);
//# sourceMappingURL=palabras.service.js.map