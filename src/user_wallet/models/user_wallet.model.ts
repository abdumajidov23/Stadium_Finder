import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IUserWalletAttr {
    user_id: number;
    wallet: string;
}

@Table({ tableName: "user_wallet", timestamps: false })
export class UserWallet extends Model<UserWallet, IUserWalletAttr> {
    @ApiProperty({
        example: 1,
        description: "Unique ID of the user wallet (auto increment)",
    })
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @ApiProperty({
        example: 123,
        description: "Unique ID of the user",
    })
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    user_id: number;

    @ApiProperty({
        example: "ewrty3421",
        description: "Wallet address of the user",
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    wallet: string;
}
