import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common'
import { ContentService } from './content.service'
import { CreateContentDto } from './dto/create-content.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { Roles } from '../auth/roles.decorator'
import { RolesGuard } from '../auth/roles.guard'

@Controller('content')
export class ContentController {
  constructor(private content: ContentService) {}

  @Get()
  list(
    @Query('type') type: string | undefined,
    @Query('lang') lang: string | undefined,
    @Query('take') take: string | undefined,
    @Query('skip') skip: string | undefined,
  ) {
    return this.content.list({
      type,
      lang: lang || 'ru',
      take: Number(take || 20),
      skip: Number(skip || 0),
    })
  }

  @Get('by-slug')
  getBySlug(@Query('slug') slug: string, @Query('lang') lang: string | undefined) {
    return this.content.getBySlug(slug, lang || 'ru')
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'AUTHOR')
  @Post('admin/create')
  create(@Body() dto: CreateContentDto, @Req() req: any) {
    return this.content.create(dto, req.user.sub)
  }
}
