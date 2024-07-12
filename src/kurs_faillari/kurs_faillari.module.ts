import { Module } from '@nestjs/common';
import { KursFaillariService } from './kurs_faillari.service';
import { KursFaillariController } from './kurs_faillari.controller';

@Module({
  controllers: [KursFaillariController],
  providers: [KursFaillariService],
})
export class KursFaillariModule {}
