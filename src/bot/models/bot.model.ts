import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IBotCreationAttr {
    user_id: number;
    username: string;
    first_name: string;
    last_name: string;
    lang: string;


}

@Table({ tableName: "bot" })
export class Bot extends Model<Bot, IBotCreationAttr> {

    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
    })
    user_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    first_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    last_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lang: string;
    
    @Column({
        type: DataType.BOOLEAN,
        // defaultValue: false, 
    })
    status: boolean;

    @Column({
        type: DataType.STRING,
    })
    phone_number: string;
}
