import { Injectable, NotFoundException } from '@nestjs/common';
import { ItemStatus } from '../generated/prisma/enums.js';
import type { Item } from '../generated/prisma/client.js';
import { CreateItemDto } from './dto/create-item.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ItemsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Item[]> {
    return await this.prismaService.item.findMany();
  }

  async findById(id: string): Promise<Item> {
    const found = await this.prismaService.item.findUnique({
      where: { id, }
    })
    if(!found) {
      throw new NotFoundException()
    }
   return found;
  }

  async create(CreateItemDto: CreateItemDto): Promise<Item> {
    const {name, price, description } =CreateItemDto
    return await this.prismaService.item.create({
      data: {
        name,
        price,
        description,
        status: ItemStatus.ON_SALE,
      }
    })
  }

  async updateStatus(id: string): Promise<Item>{
    return await this.prismaService.item.update({
      data: {
        status: 'SOLD_OUT',
      },
      where: {
        id,
      }
    })
  }

  async delete(id: string) {
    await this.prismaService.item.delete({
      where: {id},
    })
}}
