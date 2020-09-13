// Definisanje entiteta koji opisuje klasu administrator u nasoj bazi podataka
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Anotiranje klase Administrator kao entitet
@Entity()
export class Administrator {
    @PrimaryGeneratedColumn({ name: 'administrator_id', type: 'int', unsigned: true })
    administratorId: number;

    @Column({ type: 'varchar', length: '32', unique: true })
    username: string;

    @Column({ name: 'password_hash', type: 'varchar', length: '128' })
    passwordHash: string;
}