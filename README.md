# Next.js + tldraw

## Getting Started

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Run the development server:

```bash
pnpm i
pnpm dev
```

Open server:

```bash
git clone https://github.com/Sun-ZhenXing/fastify-tldraw-server.git
cd fastify-tldraw-server
pnpm i
pnpm dev
```

## Build

Configure `.env.production`, then run:

```bash
docker build -t next-tldraw-client .
```

Or use Docker Compose:

```bash
docker-compose up -d --env-file .env.production
```

Nginx demo:

```nginx
server {
    listen 80;
    server_name tldraw.com;
    location / {
        proxy_pass http://127.0.0.1:3079;
        proxy_set_header Host $host;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
    }
}

server {
    listen 5858;
    server_name tldraw.com;
    location / {
        proxy_pass http://127.0.0.1:5879;
        proxy_set_header Host $host;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```
