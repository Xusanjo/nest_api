import { Injectable, NotFoundException } from '@nestjs/common';
import { SignInDto } from "./dto/signInDto";
import { SignUpDto } from "./dto/signUpDto";
import { InjectModel } from "@nestjs/sequelize";
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth) 
    private authRepo: typeof Auth
    ){}
  
  async signup(signUpdto: SignUpDto) {
    const auth = await this.authRepo.create(signUpdto);
    return auth;
  }

  async signin(signInDto: SignInDto) {
    const auth = await this.authRepo.findOne({where: {email: signInDto.email, password: signInDto.password}});
    return auth;
  }

  async getme(id: string){
    const auth = await this.authRepo.findByPk(id);
    if(!auth){
      throw new NotFoundException(`Auth with ID ${id} not found`);
    }
    return auth;
  }

  async logout(id: string){
    const auth = await this.authRepo.findByPk(id);
    if(auth){
      await auth.save();
    }
    return ;
  }
}
