import { Test, TestingModule } from '@nestjs/testing';
import { AdminplateformeController } from './adminplateforme.controller';

describe('AdminplateformeController', () => {
  let controller: AdminplateformeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminplateformeController],
    }).compile();

    controller = module.get<AdminplateformeController>(AdminplateformeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
