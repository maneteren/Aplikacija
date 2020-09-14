import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OdjavaZaposleni } from "./odjavaZaposleni.entity";

@Index("datum_vreme", ["datumVreme"], { unique: true })
@Entity("odjava", { schema: "aplikacija" })
export class Odjava {
  @PrimaryGeneratedColumn({ type: "int", name: "odjava_id", unsigned: true })
  odjavaId: number;

  @Column("timestamp", {
    name: "datum_vreme",
    unique: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  datumVreme: Date;

  @OneToMany(() => OdjavaZaposleni, (odjavaZaposleni) => odjavaZaposleni.odjava)
  odjavaZaposlenis: OdjavaZaposleni[];
}
