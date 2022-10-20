import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ timestamps: false })
export class User extends Model {
  @Column({ type: DataType.STRING })
  firstname: string;

  @Column({ type: DataType.STRING })
  lastname: string;
}
