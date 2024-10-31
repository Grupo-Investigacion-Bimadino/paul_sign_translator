"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSignificadoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_significado_dto_1 = require("./create-significado.dto");
class UpdateSignificadoDto extends (0, mapped_types_1.PartialType)(create_significado_dto_1.CreateSignificadoDto) {
}
exports.UpdateSignificadoDto = UpdateSignificadoDto;
//# sourceMappingURL=update-significado.dto.js.map