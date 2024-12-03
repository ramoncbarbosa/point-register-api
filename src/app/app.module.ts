import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { PointsModule } from '../points/points.module';

@Module({
  imports: [AuthModule, UsersModule, PointsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
