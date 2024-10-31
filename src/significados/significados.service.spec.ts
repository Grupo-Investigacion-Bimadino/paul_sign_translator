import { Test, TestingModule } from '@nestjs/testing';
import { SignificadosService } from './significados.service';

describe('SignificadosService', () => {
  let service: SignificadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignificadosService],
    }).compile();

    service = module.get<SignificadosService>(SignificadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
