import { PartialType } from '@nestjs/mapped-types';
import { CreateKurslarDto } from './create-kurslar.dto';

export class UpdateKurslarDto extends PartialType(CreateKurslarDto) {}
