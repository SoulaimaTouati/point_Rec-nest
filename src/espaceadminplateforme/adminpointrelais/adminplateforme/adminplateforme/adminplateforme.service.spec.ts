import { Test, TestingModule } from '@nestjs/testing';
import { AdminplateformeService } from './adminplateforme.service';

describe('AdminplateformeService', () => {
  let service: AdminplateformeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminplateformeService],
    }).compile();

    service = module.get<AdminplateformeService>(AdminplateformeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
