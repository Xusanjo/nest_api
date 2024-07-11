import { Injectable } from '@nestjs/common';

@Injectable()
export class FailsService {

  create(createFailDto) {
    return 'This action adds a new fail';
  }

  findAll() {
    return `This action returns all fails`;
  }

  findOne(id: string) {
    return `This action returns a #${id} fail`;
  }

  download(id: string) {
    return `${id}`;
  }

  update(id: string) {
    return `This action updates a #${id} fail`;
  }

  remove(id: string) {
    return `This action removes a #${id} fail`;
  }
}
