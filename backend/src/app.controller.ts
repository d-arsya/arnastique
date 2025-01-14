import { Controller, Get, Response } from '@nestjs/common'
import { AppService } from './app.service'
import { ApiExcludeController } from '@nestjs/swagger'

@ApiExcludeController()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get([''])
  frontend(@Response() res) {
    return this.appService.getHello(res)
  }
  @Get('/api')
  gatau(@Response() res) {
    return 1
  }
}
