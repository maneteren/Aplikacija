import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Odjava } from "../../../entities/odjava.entity";
import { OdjavaService } from "../../services/odjava/odjava.service";

@Controller('api/odjava')
@Crud({
    model: {
        type: Odjava
    },
    params: {
        id: {
            field: 'odjavaId',
            type: 'number',
            primary: true
        }
    },
    query: {
        join: {
            odjavaZaposlenis: {
                eager: true
            },
            zaposleni: {
                eager: true
            }
        }
    }
})
export class OdjavaController {
    constructor(public service: OdjavaService) { }
}
