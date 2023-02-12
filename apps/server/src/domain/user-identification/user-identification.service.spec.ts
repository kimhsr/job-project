import { Test, TestingModule } from '@nestjs/testing';
import { UserIdentificationService } from './user-identification.service';

describe('UserIdentificationService', () => {
  let service: UserIdentificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserIdentificationService],
    }).compile();

    service = module.get<UserIdentificationService>(UserIdentificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
