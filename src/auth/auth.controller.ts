import { Body, Controller, Post } from '@nestjs/common';
import type { User } from '../generated/prisma/client.js';
import { AuthService } from './auth.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { CredentialsDto } from './dto/credentials.dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.authService.createUser(createUserDto)
  }

  @Post('signin')
  async signin(@Body() CredentialsDto: CredentialsDto): Promise<{ token: string}> {
    return await this.authService.signIn(CredentialsDto)
  }
}
