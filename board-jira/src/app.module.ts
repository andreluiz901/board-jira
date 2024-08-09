import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config'
import { envSchema } from './infra/env/env';
import { EnvService } from './infra/env/env.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (env) => envSchema.parse(env),
    }), 
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, EnvService],
})
export class AppModule {}
