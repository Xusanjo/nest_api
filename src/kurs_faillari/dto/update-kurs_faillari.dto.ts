import { PartialType } from '@nestjs/mapped-types';
import { CreateKursFaillariDto } from './create-kurs_faillari.dto';

export class UpdateKursFaillariDto extends PartialType(CreateKursFaillariDto) {}
