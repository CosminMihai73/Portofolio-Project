import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Work } from './work.entity'; // Verifică calea
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(Work)
    private readonly workRepository: Repository<Work>,
  ) {}

  async create(createWorkDto: CreateWorkDto): Promise<Work> {
    const newWork = this.workRepository.create(createWorkDto);
    return this.workRepository.save(newWork);
  }

  async findAll(status?: boolean): Promise<Work[]> {
    if (status === undefined) {
      return this.workRepository.find();
    }
    return this.workRepository.find({ where: { status } });
  }

  async findOne(id: number): Promise<Work> {
    return this.workRepository.findOneBy({ id });
  }

  async update(id: number, updateWorkDto: UpdateWorkDto): Promise<Work> {
    await this.workRepository.update(id, updateWorkDto);
    return this.workRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.workRepository.delete(id);
  }
}
