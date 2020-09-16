import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { Prijava } from "../../../entities/prijava.entity";

@Injectable()
export class PrijavaService extends TypeOrmCrudService<Prijava> {
    // !!! Pomenuti repozitorijum mora odmah da se evidentira u app.module!
    constructor(@InjectRepository(Prijava) private readonly prijava: Repository<Prijava>) {
        super(prijava);
    }
}
