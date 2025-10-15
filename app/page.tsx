import Link from "next/link";
import { WhatNext } from "@/components/compositions/WhatNext";

export default function IndexPage() {
  const siteKey = process.env.ARCJET_SITE ? process.env.ARCJET_SITE : null;

  return (
    <main className="page">
      <div className="section">
        <h1 className="heading-primary">Arcjet Next.js + Fly.io example app</h1>
        <p className="typography-primary">
          <Link href="https://arcjet.com" target="_blank" className="link">
            Arcjet
          </Link>{" "}
          helps developers protect their apps in just a few lines of code. Bot
          detection. Rate limiting. Email validation. Attack protection. Data
          redaction. A developer-first approach to security.
        </p>
        <p className="typography-secondary">
          This is an example Next.js application using Arcjet. The code is{" "}
          <Link
            href="https://github.com/arcjet/example-nextjs-fly"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            on GitHub
          </Link>
          .
        </p>
      </div>

      <div className="section">
        <h2 className="heading-secondary">Examples</h2>
        <div className="list-actions">
          <Link href="/signup" className="button-primary">
            Signup form protection
          </Link>
          <Link href="/bots" className="button-primary">
            Bot protection
          </Link>
          <Link href="/rate-limiting" className="button-primary">
            Rate limiting
          </Link>
          <Link href="/attack" className="button-primary">
            Attack protection
          </Link>
          <Link href="/sensitive-info" className="button-primary">
            Sensitive info
          </Link>
        </div>
      </div>

      <hr className="divider" />

      <WhatNext />
    </main>
  );
}
