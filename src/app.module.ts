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
import { ZaposleniController } from './controllers/api/zaposleni.controller';
import { ZaposleniService } from './services/zaposleni/zaposleni.service';
import { PrijavaService } from './services/prijava/prijava.service';
import { PrijavaController } from './controllers/api/prijava.controller';
import { OdjavaController } from './controllers/api/odjava.controller';
import { OdjavaService } from './services/odjava/odjava.service';
import { IzvestajService } from './services/izvestaj/izvestaj.service';
import { IzvestajController } from './controllers/api/izvestaj.controller';
import { AuthController } from './controllers/api/auth.controller';

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
    TypeOrmModule.forFeature([ 
      Administrator,
      Zaposleni,
      Prijava,
      Odjava,
      Izvestaj
    ])
  ],
  controllers: [
    AppController,
    AdministratorController,
    ZaposleniController,
    PrijavaController,
    OdjavaController,
    IzvestajController,
    AuthController
  ],
  providers: [
    AdministratorService,
    ZaposleniService,
    PrijavaService,
    OdjavaService,
    IzvestajService
  ],
})
export class AppModule {}
