import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from "./dto/signUpDto";
import { SignInDto } from './dto/signInDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  async signUp(@Body() signUpDto: SignUpDto) {
    const Auth = await this.authService.signup(signUpDto);
    return {message: "Auth signed up successfully", auth: Auth};
  }

  @Post("signin")
  async signIn(@Body() signInDto: SignInDto) {
    const Auth = await this.authService.signin(signInDto);
    return {message: 'Auth signed in successfully', auth: Auth};
  }

  @Get('getme/:id')
  async GetMe(@Param('id') id: string) {
    const Auth = await this.authService.getme(id);
    return {message: 'Auth retrieved successfully', auth: Auth};
  }

  @Patch('logout/:id')
  async logout(@Param('id') id: string) {
    await this.authService.logout(id);
    return {message: 'Auth logged out successfully'};
  }

}
