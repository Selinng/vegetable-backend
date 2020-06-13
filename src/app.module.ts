import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VarietyService } from './variety/variety.service';
import { VarietyController } from './variety/variety.controller';

@Module({
  imports: [],
  controllers: [AppController, VarietyController],
  providers: [AppService, VarietyService],
})
export class AppModule {}
