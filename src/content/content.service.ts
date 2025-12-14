import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateContentDto } from './dto/create-content.dto'

@Injectable()
export class ContentService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateContentDto, userId: string) {
    const exists = await this.prisma.content.findUnique({ where: { slug: dto.slug } })
    if (exists) throw new BadRequestException('slug уже занят')

    const content = await this.prisma.content.create({
      data: {
        slug: dto.slug,
        type: dto.type,
        status: dto.status,
        isOfficial: dto.isOfficial,
        meta: dto.meta ?? {},
        authorId: userId,
        publishedAt: dto.status === 'PUBLISHED' ? new Date() : null,
        translations: {
          create: {
            languageCode: dto.languageCode,
            title: dto.title,
            subtitle: dto.subtitle ?? null,
            shortDescription: dto.shortDescription,
            body: dto.body,
          },
        },
      },
      include: { translations: true },
    })

    return content
  }

  async list(params: { type?: string; lang: string; take: number; skip: number }) {
    const where: any = {}
    if (params.type) where.type = params.type

    const items = await this.prisma.content.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: params.take,
      skip: params.skip,
      include: {
        translations: {
          where: { languageCode: params.lang },
        },
      },
    })

    return items.map((c) => ({
      id: c.id,
      slug: c.slug,
      type: c.type,
      status: c.status,
      isOfficial: c.isOfficial,
      viewsCount: c.viewsCount,
      likesCount: c.likesCount,
      commentsCount: c.commentsCount,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt,
      translation: c.translations[0] ?? null,
      meta: c.meta,
    }))
  }

  async getBySlug(slug: string, lang: string) {
    const content = await this.prisma.content.findUnique({
      where: { slug },
      include: {
        translations: {
          where: { languageCode: lang },
        },
        author: true,
      },
    })
    if (!content) throw new NotFoundException('Контент не найден')

    await this.prisma.content.update({
      where: { id: content.id },
      data: { viewsCount: { increment: 1 } },
    })

    return {
      id: content.id,
      slug: content.slug,
      type: content.type,
      status: content.status,
      isOfficial: content.isOfficial,
      meta: content.meta,
      viewsCount: content.viewsCount + 1,
      likesCount: content.likesCount,
      commentsCount: content.commentsCount,
      createdAt: content.createdAt,
      updatedAt: content.updatedAt,
      author: { id: content.author.id, displayName: content.author.displayName },
      translation: content.translations[0] ?? null,
    }
  }
}
