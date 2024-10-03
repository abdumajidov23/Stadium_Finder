import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript"
import { User } from "../../users/models/user.model"

interface IOrderCreationAttr{
    description:string
    status:string
    date:string
    userId:number
}

@Table({tableName:"order"})
export class Order extends Model<Order, IOrderCreationAttr> {
    @Column({
        type: DataType.STRING,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    })
    id: number;

    @Column({
        type: DataType.TEXT,
    })
    description: string;

    @Column({
        type: DataType.ENUM("paid", "unpaid"),
        defaultValue: "unpaid",
    })
    status: string;

    @Column({
        type: DataType.DATE,
    })
    date: Date;

    @ForeignKey(()=>User)
    @Column({
        type: DataType.INTEGER,
    })
    userId: number;

    @BelongsTo(()=>User)
    user: User;
}
