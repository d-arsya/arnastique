import { Controller, Get, Response } from '@nestjs/common'
import { ApiExcludeController } from '@nestjs/swagger'
import config from './config'

@ApiExcludeController()
@Controller()
export class AppController {
  @Get('')
  frontend(@Response() res) {
    return res.redirect(config.FE_URL)
  }
}
