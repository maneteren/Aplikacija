import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PrijavaZaposleni } from "./prijavaZaposleni.entity";

@Index("datum_vreme", ["datumVreme"], { unique: true })
@Entity("prijava", { schema: "aplikacija" })
export class Prijava {
  @PrimaryGeneratedColumn({ type: "int", name: "prijava_id", unsigned: true })
  prijavaId: number;

  @Column("timestamp", {
    name: "datum_vreme",
    unique: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  datumVreme: Date;

  @OneToMany(
    () => PrijavaZaposleni,
    (prijavaZaposleni) => prijavaZaposleni.prijava
  )
  prijavaZaposlenis: PrijavaZaposleni[];
}
