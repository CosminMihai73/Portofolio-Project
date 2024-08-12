import { IsString, IsOptional } from 'class-validator';

export class UpdateWorkDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsString()
  @IsOptional()
  clientUrl?: string;

  @IsOptional()
  isVisible?: boolean;
}
