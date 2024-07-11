import { Module } from '@nestjs/common';
import { FailsService } from './fails.service';
import { FailsController } from './fails.controller';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, "..", "faillar"),
    }),
  ],
  controllers: [FailsController],
  providers: [FailsService],
})
export class FailsModule {}
