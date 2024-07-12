import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KursFaillariService } from './kurs_faillari.service';
import { CreateKursFaillariDto } from './dto/create-kurs_faillari.dto';
import { UpdateKursFaillariDto } from './dto/update-kurs_faillari.dto';

@Controller('kurs-faillari')
export class KursFaillariController {
  constructor(private readonly kursFaillariService: KursFaillariService) {}

  @Post()
  create(@Body() createKursFaillariDto: CreateKursFaillariDto) {
    return this.kursFaillariService.create(createKursFaillariDto);
  }

  @Get()
  findAll() {
    return this.kursFaillariService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kursFaillariService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKursFaillariDto: UpdateKursFaillariDto) {
    return this.kursFaillariService.update(+id, updateKursFaillariDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kursFaillariService.remove(+id);
  }
}
