import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule} from "@nestjs/sequelize";
import { Auth } from "./entities/auth.entity";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ".env",
    isGlobal: true,
  }),
    SequelizeModule.forRoot({
      models: [Auth]
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})

export class AuthModule {}
