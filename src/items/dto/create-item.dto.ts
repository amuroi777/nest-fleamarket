import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min } from "class-validator"

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string

  @IsInt()
  @Min(0)
  price: number

  @IsOptional()
  @IsString()
  @MaxLength(5000)
  description?: string
}