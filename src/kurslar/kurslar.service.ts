import { Injectable } from '@nestjs/common';
import { CreateKurslarDto } from './dto/create-kurslar.dto';
import { UpdateKurslarDto } from './dto/update-kurslar.dto';

@Injectable()
export class KurslarService {
  create(createKurslarDto: CreateKurslarDto) {
    return 'This action adds a new kurslar';
  }

  findAll() {
    return `This action returns all kurslar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kurslar`;
  }

  update(id: number, updateKurslarDto: UpdateKurslarDto) {
    return `This action updates a #${id} kurslar`;
  }

  remove(id: number) {
    return `This action removes a #${id} kurslar`;
  }
}
