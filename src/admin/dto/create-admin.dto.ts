import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateAdminDto {
  @ApiProperty({
    example: "Admin",
    description: "Admin's name",
  })
  name: string;

  @ApiProperty({
    example: "admin@gmail.com",
    description: "Admin's email",
  })
  login: string;

  @ApiProperty({
    example: "adminpassword",
    description: "Admin's password",
  })
  @IsString()
  hashed_password: string;

  @ApiProperty({
    example: true,
    description: "Admin's status (active/inactive)",
  })
  is_active: boolean;

  @ApiProperty({
    example: true,
    description: "Admin's role (creator/non-creator)",
  })
  is_creator: boolean;

  
  refresh_token: string;
}
