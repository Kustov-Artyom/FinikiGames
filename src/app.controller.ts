import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get()
  root() {
    return {
      ok: true,
      name: 'Finiki Wiki API',
      endpoints: [
        'GET /health',
        'POST /auth/register',
        'POST /auth/login',
        'GET /auth/me (Bearer token)',
        'GET /content?type=HERO&lang=ru&take=20&skip=0',
        'GET /content/by-slug?slug=...&lang=ru',
      ],
    }
  }
}
