import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OdjavaZaposleni } from "./odjavaZaposleni.entity";
import { Zaposleni } from "./zaposleni.entity";

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

  @ManyToMany(type => Zaposleni, zaposleni => zaposleni.odjave)
  @JoinTable({
    name: "odjava_zaposleni",
    joinColumn: { name: "odjava_id", referencedColumnName: "odjavaId" },
    inverseJoinColumn: { name: "zaposleni_id", referencedColumnName: "zaposleniId"}
  })
  zaposleni: Zaposleni[];
}
