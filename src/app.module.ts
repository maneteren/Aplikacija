import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from '../config/database.configuration';
import { Administrator } from '../entities/administrator.entity';
import { AdministratorService } from './services/administrator/administrator.service';
import { Izvestaj } from '../entities/izvestaj.entity';
import { Odjava } from '../entities/odjava.entity';
import { OdjavaZaposleni } from '../entities/odjavaZaposleni.entity';
import { Prijava } from '../entities/prijava.entity';
import { PrijavaZaposleni } from '../entities/prijavaZaposleni.entity';
import { Zaposleni } from '../entities/zaposleni.entity';
import { AdministratorController } from './controllers/api/administrator.controller';

@Module({
  imports: [
    // Definisanje TypeOrm modula za rad sa nasom bazom podataka
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DatabaseConfiguration.hostname,
      port: 3306,
      username: DatabaseConfiguration.username,
      password: DatabaseConfiguration.password,
      database: DatabaseConfiguration.database,
      entities: [ 
        Administrator,
        Izvestaj,
        Odjava,
        OdjavaZaposleni,
        Prijava,
        PrijavaZaposleni,
        Zaposleni,
       ]
    }), 
    TypeOrmModule.forFeature([ Administrator ])
  ],
  controllers: [
    AppController,
    AdministratorController
  ],
  providers: [AdministratorService],
})
export class AppModule {}
