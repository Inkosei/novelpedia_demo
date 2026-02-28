# Novel Pedia Demo

React + Vite frontend for the NovelPedia home site.

## Run locally

```bash
npm install
npm run dev -- --host
```

App URL: `http://localhost:5173`

## Docker (production)

Build and run with Docker Compose:

```bash
docker compose up --build -d web
```

App URL: `http://localhost:8080`

Stop container:

```bash
docker compose down
```

## Docker (development)

Run Vite inside a dev container (hot reload enabled):

```bash
docker compose --profile dev up --build dev
```

App URL: `http://localhost:5173`

## Project notes

- Production image uses a multi-stage build (`node` build stage + `nginx` runtime).
- Nginx config includes SPA fallback to `index.html` for client-side routing.