import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserWalletDto {
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @ApiProperty()
    @IsNotEmpty()
    wallet: string;
}
