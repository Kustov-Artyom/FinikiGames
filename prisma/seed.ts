import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const roles = ['ADMIN', 'MODERATOR', 'AUTHOR', 'USER'] as const

  for (const name of roles) {
    await prisma.role.upsert({
      where: { name },
      update: {},
      create: { name },
    })
  }

  const adminEmail = 'admin@arcane.wiki'
  const adminUsername = 'admin'
  const adminPassword = 'ArcaneAdmin_2025!'
  const adminDisplayName = 'Админ'

  const passwordHash = await bcrypt.hash(adminPassword, 10)

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      username: adminUsername,
      passwordHash,
      displayName: adminDisplayName,
    },
  })

  const adminRole = await prisma.role.findUnique({ where: { name: 'ADMIN' } })
  if (!adminRole) throw new Error('ADMIN role not found')

  await prisma.userRole.upsert({
    where: {
      userId_roleId: { userId: admin.id, roleId: adminRole.id },
    },
    update: {},
    create: { userId: admin.id, roleId: adminRole.id },
  })

  console.log('Seed done: roles + admin user created')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
