import { Injectable } from '@nestjs/common';
import { CreateKursFaillariDto } from './dto/create-kurs_faillari.dto';
import { UpdateKursFaillariDto } from './dto/update-kurs_faillari.dto';

@Injectable()
export class KursFaillariService {
  create(createKursFaillariDto: CreateKursFaillariDto) {
    return 'This action adds a new kursFaillari';
  }

  findAll() {
    return `This action returns all kursFaillari`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kursFaillari`;
  }

  update(id: number, updateKursFaillariDto: UpdateKursFaillariDto) {
    return `This action updates a #${id} kursFaillari`;
  }

  remove(id: number) {
    return `This action removes a #${id} kursFaillari`;
  }
}
