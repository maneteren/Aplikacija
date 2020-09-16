import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PrijavaZaposleni } from "./prijavaZaposleni.entity";
import { Zaposleni } from "./zaposleni.entity";

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

  @ManyToMany(type => Zaposleni, zaposleni => zaposleni.prijave)
  @JoinTable({
    name: "prijava_zaposleni",
    joinColumn: { name: "prijava_id", referencedColumnName: "prijavaId" },
    inverseJoinColumn: { name: "zaposleni_id", referencedColumnName: "zaposleniId"}
  })
  zaposleni: Zaposleni[];
}
