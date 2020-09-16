/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrator } from '../../../entities/administrator.entity';
import { AddAdministratorDto } from '../../dtos/administrator/add.administrator.dto';
import { EditAdministratorDto } from '../../dtos/administrator/edit.administrator.dto';
import { ApiResponse } from '../../misc/api.response.class';

@Injectable()
export class AdministratorService {
    constructor(
        @InjectRepository(Administrator)
        private readonly administrator: Repository<Administrator>,
    ) { }

    getAll(): Promise<Administrator[]> {
        return this.administrator.find();
    }

    getById(id: number): Promise<Administrator> {
        return this.administrator.findOne(id);
    }

    add(data: AddAdministratorDto): Promise<Administrator | ApiResponse> {
        // DTO -> Model (uz obradu podataka npr password -> passwordHash)
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const crypto = require('crypto');
        const passwordHash = crypto.createHash('sha512');
        passwordHash.update(data.password);
        const passwordHashString = passwordHash.digest('hex').toUpperCase();

        // eslint-disable-next-line prefer-const
        let newAdmin: Administrator = new Administrator();
        newAdmin.username = data.username;
        newAdmin.passwordHash = passwordHashString;

        return new Promise((resolve) => {
            this.administrator.save(newAdmin)
            .then(data => resolve(data))
            .catch(error => {
                const response: ApiResponse = new ApiResponse("error", -1001);
                resolve(response);
            });
        });
    }

    async editById(id: number, data: EditAdministratorDto): Promise<Administrator | ApiResponse> {
        let admin: Administrator = await this.administrator.findOne(id);
        
        if (admin === undefined) {
            return new Promise((resolve) => {
                resolve(new ApiResponse("error", -1002));
            });
        }

        const crypto = require('crypto');
        const passwordHash = crypto.createHash('sha512');
        passwordHash.update(data.password);
        const passwordHashString = passwordHash.digest('hex').toUpperCase();

        admin.passwordHash = passwordHashString;

        return this.administrator.save(admin);
    } 
}
