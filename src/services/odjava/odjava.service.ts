import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { Odjava } from "../../../entities/odjava.entity";

@Injectable()
export class OdjavaService extends TypeOrmCrudService<Odjava> {
    // !!! Pomenuti repozitorijum mora odmah da se evidentira u app.module!
    constructor(@InjectRepository(Odjava) private readonly odjava: Repository<Odjava>) {
        super(odjava);
    }
}