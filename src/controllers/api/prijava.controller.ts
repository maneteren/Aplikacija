import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Prijava } from "../../../entities/prijava.entity";
import { PrijavaService } from "../../services/prijava/prijava.service";

@Controller('api/prijava')
@Crud({
    model: {
        type: Prijava
    },
    params: {
        id: {
            field: 'prijavaId',
            type: 'number',
            primary: true
        }
    },
    query: {
        join: {
            prijavaZaposlenis: {
                eager: true
            },
            zaposleni: {
                eager: true
            }
        }
    }
})
export class PrijavaController {
    constructor(public service: PrijavaService) { }
}