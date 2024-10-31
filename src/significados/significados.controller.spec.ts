import { Test, TestingModule } from '@nestjs/testing';
import { SignificadosController } from './significados.controller';
import { SignificadosService } from './significados.service';

describe('SignificadosController', () => {
  let controller: SignificadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignificadosController],
      providers: [SignificadosService],
    }).compile();

    controller = module.get<SignificadosController>(SignificadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
