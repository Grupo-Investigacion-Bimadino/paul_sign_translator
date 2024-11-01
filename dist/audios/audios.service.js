"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiosService = void 0;
const common_1 = require("@nestjs/common");
let AudiosService = class AudiosService {
    create(createAudioDto) {
        return createAudioDto;
    }
    findAll() {
        return [
            {
                id: 1,
                name1: 'Esteban Regino',
                duracion: 5,
                date: 31 / 10 / 2024,
                etiqueta1: 'juegos',
                favoritos: 'si',
                tiempodepausa1: 5,
            },
            {
                id: 2,
                name2: 'Mario Ramos',
                duracion: 10,
                date: 31 / 10 / 2024,
                etiqueta1: 'estudios',
                favoritos: 'si',
                tiempodepausa1: 6,
            },
        ];
    }
    findOne(id) {
        return {
            id,
            name1: 'Esteban Regino',
            duracion: '5',
            date: '31/10/2024',
            etiqueta1: 'juegos',
            favoritos: 'si',
            tiempodepausa1: '5',
        };
    }
    update(id, updateAudioDto) {
        return {
            id,
            updateAudioDto,
        };
    }
    remove(id) {
        return {
            id,
        };
    }
};
exports.AudiosService = AudiosService;
exports.AudiosService = AudiosService = __decorate([
    (0, common_1.Injectable)()
], AudiosService);
//# sourceMappingURL=audios.service.js.map