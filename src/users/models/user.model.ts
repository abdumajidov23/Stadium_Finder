import {
  BelongsTo,
  Column,
  DataType,
  Model,
  Table,
  HasMany,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { UserCard } from "../../user_cards/models/user_card.model";

interface IUserCreationAttr {
  full_name: string;
  email: string;
  phone: string;
  tg_link: string;
  hashed_password: string;
  photo: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUserCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Unique ID of the user (auto increment)",
  })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: "Alijon Abdumajidov",
    description: "Full name of the user",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
  })
  tg_link: string;

  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_owner: boolean;

  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  @Column({
    type: DataType.STRING,
  })
  activation_link: string;

  @HasMany(()=>UserCard)
  userCards: UserCard[];
}
