import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Prijava } from "./prijava.entity";
import { Zaposleni } from "./zaposleni.entity";

@Index("zaposleni_id_prijava_id", ["zaposleniId", "prijavaId"], {
  unique: true,
})
@Index("fk_prijava_zaposleni_prijava_id", ["prijavaId"], {})
@Entity("prijava_zaposleni", { schema: "aplikacija" })
export class PrijavaZaposleni {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "prijava_zaposleni_id",
    unsigned: true,
  })
  prijavaZaposleniId: number;

  @Column("int", { name: "zaposleni_id", unsigned: true, default: () => "'0'" })
  zaposleniId: number;

  @Column("int", { name: "prijava_id", unsigned: true, default: () => "'0'" })
  prijavaId: number;

  @ManyToOne(() => Prijava, (prijava) => prijava.prijavaZaposlenis, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "prijava_id", referencedColumnName: "prijavaId" }])
  prijava: Prijava;

  @ManyToOne(() => Zaposleni, (zaposleni) => zaposleni.prijavaZaposlenis, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "zaposleni_id", referencedColumnName: "zaposleniId" }])
  zaposleni: Zaposleni;
}
