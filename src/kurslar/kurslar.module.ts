import { Module } from '@nestjs/common';
import { KurslarService } from './kurslar.service';
import { KurslarController } from './kurslar.controller';

@Module({
  controllers: [KurslarController],
  providers: [KurslarService],
})
export class KurslarModule {}
