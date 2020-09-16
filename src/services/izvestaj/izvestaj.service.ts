import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { Izvestaj } from "../../../entities/izvestaj.entity";

@Injectable()
export class IzvestajService extends TypeOrmCrudService<Izvestaj> {
    // !!! Pomenuti repozitorijum mora odmah da se evidentira u app.module!
    constructor(@InjectRepository(Izvestaj) private readonly izvestaj: Repository<Izvestaj>) {
        super(izvestaj);
    }
}