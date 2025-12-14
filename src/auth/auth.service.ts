import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from '../prisma/prisma.service'
import bcrypt from 'bcryptjs'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwt: JwtService) { }

    async register(dto: RegisterDto) {
        const exists = await this.prisma.user.findFirst({
            where: { OR: [{ email: dto.email }, { username: dto.username }] },
        })
        if (exists) throw new BadRequestException('Email или username уже заняты')

        const passwordHash = await bcrypt.hash(dto.password, 10)

        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                username: dto.username,
                passwordHash,
                displayName: dto.displayName,
            },
        })

        const userRole = await this.prisma.role.findUnique({ where: { name: 'USER' } })
        if (userRole) {
            await this.prisma.userRole.create({
                data: { userId: user.id, roleId: userRole.id },
            })
        }

        const roles = ['USER']
        const expiresIn = Number(process.env.JWT_EXPIRES_IN ?? 43200)

        const accessToken = this.jwt.sign(
            { sub: user.id, email: user.email, roles },
            { expiresIn },
        )



        return { accessToken, user: { id: user.id, email: user.email, roles } }
    }

    async login(dto: LoginDto) {
        const user = await this.prisma.user.findUnique({ where: { email: dto.email } })
        if (!user) throw new UnauthorizedException('Неверный логин или пароль')

        const ok = await bcrypt.compare(dto.password, user.passwordHash)
        if (!ok) throw new UnauthorizedException('Неверный логин или пароль')

        const rolesRows = await this.prisma.userRole.findMany({
            where: { userId: user.id },
            include: { role: true },
        })
        const roles = rolesRows.map((r) => r.role.name)

        const expiresIn = Number(process.env.JWT_EXPIRES_IN ?? 43200)

        const accessToken = this.jwt.sign(
            { sub: user.id, email: user.email, roles },
            { expiresIn },
        )



        return { accessToken, user: { id: user.id, email: user.email, roles } }
    }
}
