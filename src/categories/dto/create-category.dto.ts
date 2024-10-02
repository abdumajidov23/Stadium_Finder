import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString} from "class-validator";

export class CreateCategoryDto {
  @ApiProperty({ 
    example: "Tennis",
    description: "Categories Name" 
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 1,
    description: "Parent Event Type ID",
  })
  parent_category_id?: number;
}
