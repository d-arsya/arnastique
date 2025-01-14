import { Injectable } from '@nestjs/common'
import config from './config'

@Injectable()
export class AppService {
  getHello(res) {
    return res.status(302).redirect(config.FE_URL)
  }
}
