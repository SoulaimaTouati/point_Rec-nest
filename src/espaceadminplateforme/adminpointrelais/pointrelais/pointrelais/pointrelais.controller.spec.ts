import { Test, TestingModule } from '@nestjs/testing';
import { PointrelaisController } from './pointrelais.controller';

describe('PointrelaisController', () => {
  let controller: PointrelaisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PointrelaisController],
    }).compile();

    controller = module.get<PointrelaisController>(PointrelaisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
