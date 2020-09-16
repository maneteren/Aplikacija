import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Zaposleni } from "../../../entities/zaposleni.entity";
import { ZaposleniService } from "../../services/zaposleni/zaposleni.service";

@Controller('api/zaposleni')
@Crud({
    model: {
        type: Zaposleni
    },
    params: {
        id: {
            field: 'zaposleniId',
            type: 'number',
            primary: true
        }
    },
    query: {
        join: {
            prijavaZaposlenis: {
                eager: true
            },
            odjavaZaposlenis: {
                eager: true
            },
            izvestajs: {
                eager: false
            }
        }
    }
})
export class ZaposleniController {
    constructor(public service: ZaposleniService) { }
}