import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common'
import { AuthService } from './auth.service'
import { SignUpUserDto } from './dto/sign-up-user.dto'
import { SignInUserDto } from './dto/sign-in-user.dto'
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiGoneResponse,
  ApiHeader,
  ApiOperation,
  ApiProperty
} from '@nestjs/swagger'

class SignedUpUser {
  @ApiProperty()
  id: string
  @ApiProperty()
  name: string
  @ApiProperty()
  email: string
  @ApiProperty()
  avatar?: string
}
class ResSignUp {
  @ApiProperty()
  statusCode: number
  @ApiProperty()
  success: boolean
  @ApiProperty()
  data: SignedUpUser
  @ApiProperty()
  message: string
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @HttpCode(HttpStatus.CREATED)
  @Post('register')
  @ApiOperation({ description: 'Register a user using required datas' })
  @ApiCreatedResponse({ description: 'User created successfully', type: ResSignUp })
  @ApiBadRequestResponse({ description: 'Email has been taken', type: ResSignUp })
  signUp(@Body() signUpUserDto: SignUpUserDto) {
    return this.authService.signUp(signUpUserDto)
  }

  // @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInUserDto: SignInUserDto) {
    return this.authService.signIn(signInUserDto)
  }
}
