# Setup

Initialise a new Remix project

```bash
npx create-remix@latest
```

## Tailwind

1. Install the following dev dependencies

```bash
npm i -D concurrently tailwind
```

2. Create a `tailwind.config.js` file

```js
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

3. Update the package script to generate the tailwind file during dev and for the production build.

```json
{
  // ...
  "scripts": {
    "build": "npm run build:css && npm build:remix",
    "build:css": "tailwindcss -i ./styles/tailwind.css -o ./app/styles/tailwind.css --minify",
    "build:remix": "cross-env NODE_ENV=production remix build",
    "dev": "concurrently -n \"tw,rx\" -c \"blue,green\" \"npm run dev:css\" \"npm run dev:remix\"",
    "dev:css": "tailwindcss -i ./styles/tailwind.css -o ./app/styles/tailwind.css --watch",
    "dev:remix": "cross-env NODE_ENV=development remix dev"
  }
  // ...
}
```

4. Create a css file in the root directory `./styles/tailwind.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .custom-class {
    @apply ...;
  }
}
```

5. Update the `.gitignore` list

```
// ...
/app/styles/tailwind.css
// ...
```

# Database & ORM

You can use any number of data persistence solutions but, given the prisma abstraction the easiest place to start is with a SQLite database.

1. Install prisma packages

```bash
npm i -D prisma
npm i @prisma/client
```

2. Initialise Prisma with SQLite

```bash
npx prisma init --datasource-provider-sqlite
```

This will create an initial prisma schema and a `.env` file with the database url.

3. Update the `.gitignore` list

```
// ...
.env
// ...
```

4.  Update the Prisma schema with the required data models

```js
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Post {
  id         String   @id @default(uuid())
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
  name       String
  content    String
}
```

5. Connect the application to the database

Create a new file called `app/utils/db.server.ts` and add the following code.

```js
import { PrismaClient } from "@prisma/client";

let db: PrismaClient;

declare global {
  var __db: PrismaClient | undefined;
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

export { db };
```

6. (Optional) Create a seed file

Create a new file called `prisma/seed.ts` and create the initial data

```js
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({ data: post });
    })
  );
}

seed();

function getPosts() {
  return [
    {
      title: "Post One",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aliquid dolorum! Possimus non qui earum! Omnis facilis ipsa ut animi.`,
    },
    {
      title: "Post Two",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aliquid dolorum! Possimus non qui earum! Omnis facilis ipsa ut animi.`,
    },
    {
      title: "Post Three",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aliquid dolorum! Possimus non qui earum! Omnis facilis ipsa ut animi.`,
    },
    {
      title: "Post Four",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aliquid dolorum! Possimus non qui earum! Omnis facilis ipsa ut animi.`,
    },
  ];
}
```

Install `esbuild-register` as a dev dependency

```bash
npm i -D esbuild-register
```

Add a seed function to the `package.json`

```json
// ...
  "prisma": {
    "seed": "node --require esbuild-register prisma/seed.ts"
  },
  "scripts": {
// ...
```
