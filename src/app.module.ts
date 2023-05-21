//agrupar todo

//librerias
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

//path
import { join } from 'path';

//controllers
import { AppController } from './app.controller';
import { PistasController } from './controllers/pistas.controllers';

//servicios
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController, PistasController],
  providers: [AppService],
})
export class AppModule {}
