import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { User } from "../../users/models/user.model";


interface IOrderCreationAttr{
    description:string
    status:string
    date:string
}

@Table({ tableName: 'order' })
export class Order extends Model<Order, IOrderCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @Column({
    type: DataType.ENUM('paid', 'unpaid'),
    defaultValue: 'unpaid',
  })
  status: string;

  @Column({
    type: DataType.DATE,
    defaultValue: Date.now()
  })
  date: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
