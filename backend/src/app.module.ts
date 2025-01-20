import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { UserModule } from './user/user.module'
import { WalletModule } from './wallet/wallet.module'
import { CategoryModule } from './category/category.module'
import { TransactionModule } from './transaction/transaction.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [AuthModule, UserModule, WalletModule, CategoryModule, TransactionModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
