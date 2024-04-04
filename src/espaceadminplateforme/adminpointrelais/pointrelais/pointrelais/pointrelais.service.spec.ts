import { Test, TestingModule } from '@nestjs/testing';
import { PointrelaisService } from './pointrelais.service';

describe('PointrelaisService', () => {
  let service: PointrelaisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PointrelaisService],
    }).compile();

    service = module.get<PointrelaisService>(PointrelaisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
