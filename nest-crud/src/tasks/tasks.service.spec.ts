import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { Task } from './entities/task.entity';

describe('TasksService', () => {
  let service: TasksService;

  const mockTaskRepository = {
    findAndCount: jest.fn(),
    find: jest.fn(),
    findOneBy: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    remove: jest.fn(),
    count: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getRepositoryToken(Task),
          useValue: mockTaskRepository,
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
    jest.clearAllMocks();
  });

  it('should return paginated data with page metadata', async () => {
    const tasks = [
      { id: 1, title: 'Task 1' },
      { id: 2, title: 'Task 2' },
    ] as Task[];

    mockTaskRepository.findAndCount.mockResolvedValue([tasks, 25]);

    const result = await service.findAll(2, 10);

    expect(mockTaskRepository.findAndCount).toHaveBeenCalledWith({
      skip: 10,
      take: 10,
      order: { createdAt: 'DESC' },
    });

    expect(result).toEqual({
      data: tasks,
      total: 25,
      page: 2,
      limit: 10,
      totalPages: 3,
    });
  });
});
