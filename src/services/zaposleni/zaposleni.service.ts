import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { Zaposleni } from "../../../entities/zaposleni.entity";

@Injectable()
export class ZaposleniService extends TypeOrmCrudService<Zaposleni> {
    // !!! Pomenuti repozitorijum mora odmah da se evidentira u app.module!
    constructor(@InjectRepository(Zaposleni) private readonly zaposleni: Repository<Zaposleni>) {
        super(zaposleni);
    }
}
