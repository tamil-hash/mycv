import { IsEmail, IsString, IsDefined, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsString()
  @IsDefined()
  email: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  password: string;
}
