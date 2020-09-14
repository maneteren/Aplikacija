import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Odjava } from "./odjava.entity";
import { Zaposleni } from "./zaposleni.entity";

@Index("zaposleni_id_odjava_id", ["zaposleniId", "odjavaId"], { unique: true })
@Index("fk_odjava_zaposleni_odjava_id", ["odjavaId"], {})
@Entity("odjava_zaposleni", { schema: "aplikacija" })
export class OdjavaZaposleni {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "odjava_zaposleni_id",
    unsigned: true,
  })
  odjavaZaposleniId: number;

  @Column("int", { name: "zaposleni_id", unsigned: true, default: () => "'0'" })
  zaposleniId: number;

  @Column("int", { name: "odjava_id", unsigned: true, default: () => "'0'" })
  odjavaId: number;

  @ManyToOne(() => Odjava, (odjava) => odjava.odjavaZaposlenis, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "odjava_id", referencedColumnName: "odjavaId" }])
  odjava: Odjava;

  @ManyToOne(() => Zaposleni, (zaposleni) => zaposleni.odjavaZaposlenis, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "zaposleni_id", referencedColumnName: "zaposleniId" }])
  zaposleni: Zaposleni;
}
