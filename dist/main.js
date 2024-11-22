"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const swagger_themes_1 = require("swagger-themes");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("API Documentation Sign Translator")
        .setDescription("Api documentation")
        .setVersion("1.0")
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    const theme = new swagger_themes_1.SwaggerTheme();
    const options = {
        explorer: true,
        customCss: theme.getBuffer(swagger_themes_1.SwaggerThemeNameEnum.DARK_MONOKAI)
    };
    swagger_1.SwaggerModule.setup('api', app, documentFactory, options);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map