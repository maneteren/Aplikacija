import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { Administrator } from "../../../entities/administrator.entity";
import { AddAdministratorDto } from "../../dtos/administrator/add.administrator.dto";
import { EditAdministratorDto } from "../../dtos/administrator/edit.administrator.dto";
import { AdministratorService } from "../../services/administrator/administrator.service";

@Controller('api/administrator')
export class AdministratorController {
    constructor(
        private administratorService: AdministratorService
    ) { }

    
    // GET http://localhost:3000/api/administrator    
    @Get()
    getAll(): Promise<Administrator[]>{
     return this.administratorService.getAll();
    }

    // GET http://localhost:3000/api/administrator/4/ "dostavi mi administratora sa id 4"
    @Get(':id')
    getById(@Param('id') administratorId: number): Promise<Administrator>{
     return this.administratorService.getById(administratorId);
    }

    // PUT http://localhost:3000/api/administrator
    @Put()
    add(@Body() data: AddAdministratorDto): Promise<Administrator>{
        return this.administratorService.add(data);
    }

    // POST http://localhost:3000/api/administrator/4/ "Hocu da promenim administratora sa id 4"
    @Post(':id')
    edit(@Param('id') id: number, @Body() data: EditAdministratorDto): Promise<Administrator> {
        return this.administratorService.editById(id, data);
    }
}