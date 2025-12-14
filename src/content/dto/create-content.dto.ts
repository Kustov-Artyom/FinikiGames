import { IsBoolean, IsEnum, IsObject, IsOptional, IsString, MinLength } from 'class-validator'
import { ContentStatus, ContentType } from '@prisma/client'

export class CreateContentDto {
  @IsString()
  @MinLength(2)
  slug!: string

  @IsEnum(ContentType)
  type!: ContentType

  @IsEnum(ContentStatus)
  status!: ContentStatus

  @IsBoolean()
  isOfficial!: boolean

  @IsObject()
  meta!: any

  @IsString()
  languageCode!: string

  @IsString()
  title!: string

  @IsOptional()
  @IsString()
  subtitle?: string

  @IsString()
  shortDescription!: string

  @IsString()
  body!: string
}
