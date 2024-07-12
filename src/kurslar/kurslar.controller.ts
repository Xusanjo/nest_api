import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KurslarService } from './kurslar.service';
import { CreateKurslarDto } from './dto/create-kurslar.dto';
import { UpdateKurslarDto } from './dto/update-kurslar.dto';

@Controller('kurslar')
export class KurslarController {
  constructor(private readonly kurslarService: KurslarService) {}

  @Post()
  create(@Body() createKurslarDto: CreateKurslarDto) {
    return this.kurslarService.create(createKurslarDto);
  }

  @Get()
  findAll() {
    return this.kurslarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kurslarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKurslarDto: UpdateKurslarDto) {
    return this.kurslarService.update(+id, updateKurslarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kurslarService.remove(+id);
  }
}
