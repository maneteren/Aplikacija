import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Zaposleni } from "./zaposleni.entity";

@Index(
  "zaposleni_id_pocetak_opsega_izvestaja_kraj_opsega_datuma",
  ["zaposleniId", "pocetakOpsegaIzvestaja", "krajOpsegaDatuma"],
  { unique: true }
)
@Entity("izvestaj", { schema: "aplikacija" })
export class Izvestaj {
  @PrimaryGeneratedColumn({ type: "int", name: "izvestaj_id", unsigned: true })
  izvestajId: number;

  @Column("int", { name: "zaposleni_id", unsigned: true, default: () => "'0'" })
  zaposleniId: number;

  @Column("timestamp", {
    name: "pocetak_opsega_izvestaja",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  pocetakOpsegaIzvestaja: Date | null;

  @Column("timestamp", {
    name: "kraj_opsega_datuma",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  krajOpsegaDatuma: Date | null;

  @ManyToOne(() => Zaposleni, (zaposleni) => zaposleni.izvestajs, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "zaposleni_id", referencedColumnName: "zaposleniId" }])
  zaposleni: Zaposleni;
}
