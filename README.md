# Sample Next.js

This is a simple project for an introduction to Next.js. You will find two branches for this project:

- **`main`** that contains the code for the simple Next.js project;
- **`supabase`** that contains the code for the simple Next.js project with Supabase integration.

## Installation

First of all, clone the project.

```bash
git clone https://github.com/app-generator/sample-next-js-getting-started.git
```

Once it's done, install the packages.

```bash
yarn install
```

Retrieve the keys from your Supabase account such as the Project anon public key and the Project URL. Then, set these variables in a `.env` file.

```bash
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

And next, you can run the project.

```bash
yarn start # => http://localhost:3000
```
