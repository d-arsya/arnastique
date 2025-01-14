import { PartialType } from '@nestjs/mapped-types'
import { SignUpUserDto } from '../../auth/dto/sign-up-user.dto'

export class UpdateUserDto extends PartialType(SignUpUserDto) {}
