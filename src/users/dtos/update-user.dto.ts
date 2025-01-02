import {
  IsEmail,
  IsString,
  IsDefined,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  @IsString()
  @IsDefined()
  email: string;

  @IsOptional()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  password: string;
}
