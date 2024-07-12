import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize"
import { FailsController } from './fails/fails.controller';
import { FailsModule } from './fails/fails.module';
import { KursFaillariModule } from './kurs_faillari/kurs_faillari.module';
import { KurslarModule } from './kurslar/kurslar.module';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: 'neondb_owner', // Replace with your actual username
      password: 'i3oTC9trdemz', // Replace with your actual password
      database: 'neondb', // Replace with your actual database name
      ssl: true, // Enable SSL
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // <<<<< Important: accepts any SSL certificate including self-signed
        }
      },
      // logging: true // Set to true if you want to see SQL queries logged
    }),
    FailsModule,
    KursFaillariModule,
    KurslarModule,
    ],
  controllers: [FailsController],
  providers: [],
})

export class AppModule { }
