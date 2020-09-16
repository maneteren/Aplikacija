import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Izvestaj } from "../../../entities/izvestaj.entity";
import { IzvestajService } from "../../services/izvestaj/izvestaj.service";

@Controller('api/izvestaj')
@Crud({
    model: {
        type: Izvestaj
    },
    params: {
        id: {
            field: 'izvestajId',
            type: 'number',
            primary: true
        }
    },
    query: {
        join: {
            zaposleni: {
                eager: true
            }
        }
    }
})
export class IzvestajController {
    constructor(public service: IzvestajService) { }
}