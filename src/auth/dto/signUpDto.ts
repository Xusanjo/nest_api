import { PartialType } from '@nestjs/mapped-types';
import { SignInDto } from './signInDto';
import { IsString, IsEmail, IsNotEmpty, IsIn} from "class-validator";
import { Model } from 'sequelize-typescript';
import { Auth } from '../entities/auth.entity';

enum Gender{
    Male = 'male',
    Female = 'female'
}
export class SignUpDto extends Model<Auth> {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    dateOfBirth: string;

    @IsString()
    @IsIn([Gender])
    gender: Gender;
}
