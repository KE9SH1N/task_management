import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';

import { TasksRepository } from './tasks.repository';

import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  // private tasks: Task[] = [];
  getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksRepository.getTasks(filterDto);
  }
  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (
  //         task.title.toLowerCase().includes(search) ||
  //         task.description.includes(search)
  //       ) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   return tasks;
  // }

  async getTaskById(id: string): Promise<Task> {
    return this.tasksRepository.getTaskById(id);
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    return this.tasksRepository.deleteTask(id);
  }
  async updateTaskStatus(id: string, status: TaskStatus) {
    return this.tasksRepository.updateTaskStatus(id, status);
  }
}
