import { Test, TestingModule } from '@nestjs/testing';
import { AdminpointrelaisService } from './adminpointrelais.service';

describe('AdminpointrelaisService', () => {
  let service: AdminpointrelaisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminpointrelaisService],
    }).compile();

    service = module.get<AdminpointrelaisService>(AdminpointrelaisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
