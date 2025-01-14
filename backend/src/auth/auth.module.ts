import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UserModule } from '../user/user.module'
import { JwtModule } from '@nestjs/jwt'
import config from '../config'

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      privateKey: config.JWT_PRIVATE,
      publicKey: config.JWT_PUBLIC,
      signOptions: { expiresIn: '1d',algorithm: 'RS256'}
    })
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
