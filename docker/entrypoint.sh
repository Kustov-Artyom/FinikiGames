#!/bin/sh
set -e

echo "[BOOT] Prisma migrate deploy"
npx prisma migrate deploy

echo "[BOOT] Prisma db seed"
npx prisma db seed

echo "[BOOT] Start server"
node dist/main.js
