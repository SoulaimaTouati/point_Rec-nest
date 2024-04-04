import { Test, TestingModule } from '@nestjs/testing';
import { AdminpointrelaisController } from './adminpointrelais.controller';

describe('AdminpointrelaisController', () => {
  let controller: AdminpointrelaisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminpointrelaisController],
    }).compile();

    controller = module.get<AdminpointrelaisController>(AdminpointrelaisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
