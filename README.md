<!-- markdownlint-disable MD033 MD041 -->
<a href="https://arcjet.com" target="_arcjet-home">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://arcjet.com/logo/arcjet-dark-lockup-voyage-horizontal.svg">
    <img src="https://arcjet.com/logo/arcjet-light-lockup-voyage-horizontal.svg" alt="Arcjet Logo" height="128" width="auto">
  </picture>
</a>

# Arcjet + Fly.io example app

[Arcjet](https://arcjet.com) helps developers protect their apps in just a few
lines of code. Bot detection. Rate limiting. Email validation. Attack
protection. Data redaction. A developer-first approach to security.

This is an example Next.js application demonstrating the use of multiple
features.

## Features

- [Signup form protection](https://example.arcjet.com/signup) uses Arcjet's
  server-side email verification configured to block disposable providers and
  ensure that the domain has a valid MX record. It also includes rate limiting
  and bot protection to prevent automated abuse.
- [Bot protection](https://example.arcjet.com/bots) shows how a page can be
  protected from automated clients.
- [Rate limiting](https://example.arcjet.com/rate-limiting) shows the use of
  different rate limit configurations depending on the authenticated user. A
  logged-in user can make more requests than an anonymous user.
- [Attack protection](https://example.arcjet.com/attack) demonstrates Arcjet
  Shield, which detects suspicious behavior, such as SQL injection and
  cross-site scripting attacks.
- [Sensitive info](https://example.arcjet.com/sensitive-info) protects against
  clients sending you sensitive information such as PII that you do not wish to
  handle.

##  Deploy to Fly.io

1. Set up a new Fly.io app

```bash
fly launch --no-deploy
```

This command will generate a `Dockerfile` and a `fly.toml` for you.

1. Create an Arcjet account and link it to your Fly.io app:

```bash
fly ext arcjet create
```

3. Deploy to Fly.io:

```bash
fly deploy
```

4. Open your app in your browser and try out the features.

5. Review the request details in your Arcjet dashboard:

```bash
fly ext arcjet dashboard
```

## Run locally

1. Log into your Arcjet dashboard to get the `ARCJET_KEY` for your app.

```bash
fly ext arcjet dashboard
```

2. Install dependencies:

```bash
npm ci
```

3. Rename `.env.local.example` to `.env.local` and add your Arcjet key. If you
   want to test the rate limiting authentication, you will also need to add an
   Auth.js secret and [create a GitHub OAuth
   app](https://authjs.dev/guides/configuring-github).

4. Start the dev server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Need help?

Check out [the docs](https://docs.arcjet.com/), [contact
support](https://docs.arcjet.com/support), or [join our Discord
server](https://arcjet.com/discord).

## Stack

- Auth: [Auth.js](https://authjs.dev/)
- App: [Next.js](https://nextjs.org/)
- Form handling: [React Hook Form](https://react-hook-form.com/) (see also [our
  full form protection
  example](https://github.com/arcjet/example-nextjs-form))
- Client-side validation: [Zod](https://zod.dev/)
- Security: [Arcjet](https://arcjet.com/)
- Platform: [Fly.io](https://fly.io/)

## Contributing

All development for Arcjet examples is done in the
[`arcjet/examples` repository](https://github.com/arcjet/examples).

You are welcome to open an issue here or in
[`arcjet/examples`](https://github.com/arcjet/examples/issues) directly.
However, please direct all pull requests to
[`arcjet/examples`](https://github.com/arcjet/examples/pulls). Take a look at
our
[contributing guide](https://github.com/arcjet/examples/blob/main/CONTRIBUTING.md)
for more information.
