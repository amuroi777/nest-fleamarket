import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { ItemsService } from './items.service.js';
import type { Item } from '../generated/prisma/client.js';
import { CreateItemDto } from './dto/create-item.dto.js';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {

  }
  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return await this.itemsService.findById(id)
  }

  @Post()
  async create(@Body() CreateItemDto: CreateItemDto): Promise<Item>{
    return await this.itemsService.create(CreateItemDto)
  }

  @Put(':id')
  async updateStatus(@Param('id', ParseUUIDPipe) id: string) {
    return await this.itemsService.updateStatus(id)
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string){
    await this.itemsService.delete(id)
  }
}
