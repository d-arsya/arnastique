import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { compare } from 'bcrypt'
import { SignUpUserDto } from './dto/sign-up-user.dto'
import { JwtService } from '@nestjs/jwt'

interface SignInDto {
  email: string
  password: string
}

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signIn(data: SignInDto): Promise<{ access_token: string }> {
    const user = await this.userService.findByEmail(data.email)
    if (!user) {
      throw new UnauthorizedException()
    }
    if (!(await compare(data.password, user?.password))) {
      throw new UnauthorizedException()
    }
    const payload = { userId: user.id }

    const access_token = await this.jwtService.sign(payload)

    return {
      access_token
    }
  }
  async signUp(signUpUserDto: SignUpUserDto): Promise<any> {
    return this.userService.create(signUpUserDto)
  }
}
