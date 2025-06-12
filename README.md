# React + TypeScript + Vite

## Table of Contents

- [Libraries](#libraries)
- [Requirements](#requirements)
- [Installation](#installation)
- [Run Proxy](#run-proxy)
- [Run Dev Server](#run-dev-server)
- [Run Test](#run-test)
- [Run Lint](#run-lint)
- [Run Build](#run-build)
- [Docker Build](#docker-build)

### Libraries

- [Mantine UI](https://mantine.dev/)
  - [Hooks](https://mantine.dev/hooks/package/)
  - [Components](https://mantine.dev/core/package/)
  - [Forms](https://mantine.dev/form/package/)
  - [Notifications](https://mantine.dev/x/notifications/)
  - [Modals](https://mantine.dev/x/modals/)
  - [Dates](https://mantine.dev/dates/getting-started/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Typescript Cookie](https://github.com/js-cookie/js.cookie)
- [Vitest](https://vitest.dev/)

### Requirements

- [Bun](https://bun.sh/)
- [Docker](https://www.docker.com/)

### Installation

```sh
bun install

# install local-cors-proxy for proxy api
bun install -g local-cors-proxy
```

### Run Proxy

```sh
bun run proxy
```

### Run Dev Server

#### Set Cookie

Login to the [Singha Online System](https://sol-backoffice-uat.sbpds-dev.com) and get the cookie name `SID`, then set the cookie to the `.env.development.local` file

```sh
# .env.development.local
VITE_APP_COOKIE=your_cookie_here
```

```sh
bun run dev
```

### Run Test

```sh
bun run test
bun run test:watch
bun run test:coverage
```

### Run Lint

```sh
bun run lint
```

### Run Build

```sh
bun run build
bun run build:dev
bun run build:staging
bun run build:prod
```

### docker build

```sh

## BUILD_ENV
#  - uat,prd

docker build -t app-name --build-arg BUILD_ENV=uat .

```
