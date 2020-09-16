import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { Administrator } from "../../../entities/administrator.entity";
import { AddAdministratorDto } from "../../dtos/administrator/add.administrator.dto";
import { EditAdministratorDto } from "../../dtos/administrator/edit.administrator.dto";
import { ApiResponse } from "../../misc/api.response.class";
import { AdministratorService } from "../../services/administrator/administrator.service";


@Controller('api/administrator')
export class AdministratorController {
    constructor(
        private administratorService: AdministratorService
    ) { }


    // GET http://localhost:3000/api/administrator    
    @Get()
    getAll(): Promise<Administrator[]> {
        return this.administratorService.getAll();
    }

    // GET http://localhost:3000/api/administrator/4/ "dostavi mi administratora sa id 4"
    @Get(':id')
    getById(@Param('id') administratorId: number): Promise<Administrator | ApiResponse> {
        return new Promise(async (resolve) => {
            // eslint-disable-next-line prefer-const
            let admin = await this.administratorService.getById(administratorId);

            if (admin === undefined) {
                resolve(new ApiResponse("error", -1002));
            }

            resolve(admin);
        });
    }

    // PUT http://localhost:3000/api/administrator "Hocu da dodam administratora" - mozda mi ne treba u aplikaciji?
    @Put()
    add(@Body() data: AddAdministratorDto): Promise<Administrator | ApiResponse> {
        return this.administratorService.add(data);
    }

    // POST http://localhost:3000/api/administrator/4/ "Hocu da promenim administratora sa id 4"
    @Post(':id')
    edit(@Param('id') id: number, @Body() data: EditAdministratorDto): Promise<Administrator | ApiResponse> {
        return this.administratorService.editById(id, data);
    }
}
