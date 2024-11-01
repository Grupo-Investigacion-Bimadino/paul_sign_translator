"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignificadosService = void 0;
const common_1 = require("@nestjs/common");
let SignificadosService = class SignificadosService {
    create(createSignificadoDto) {
        return createSignificadoDto;
    }
    findAll() {
        return;
        [
            {
                id: 1,
                text: 'casas',
                Image: 'seña'
            },
            {
                id: 2,
                text: 'perro',
                Image: 'seña'
            },
            {
                id: 3,
                text: 'carro',
                Image: 'seña'
            }
        ];
    }
    findOne(id) {
        return {
            id: 1,
            text: 'casas',
            Image: 'seña'
        };
    }
    update(id, updateSignificadoDto) {
        return {
            id: id,
            updateSignificadoDto,
        };
    }
    remove(id) {
        return {
            id,
        };
    }
};
exports.SignificadosService = SignificadosService;
exports.SignificadosService = SignificadosService = __decorate([
    (0, common_1.Injectable)()
], SignificadosService);
//# sourceMappingURL=significados.service.js.map