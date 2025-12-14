import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = app.get(ConfigService)
  const corsOrigin = config.get<string>('CORS_ORIGIN') || 'http://localhost:5173'

  app.enableCors({
    origin: corsOrigin,
    credentials: true,
  })

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  )

  const port = Number(config.get('PORT') || 3000)
  await app.listen(port)
  console.log(`API running on http://localhost:${port}`)
}

bootstrap()
