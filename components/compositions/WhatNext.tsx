import Link from "next/link";

export function WhatNext() {
  return (
    <div className="section">
      <h2 className="heading-secondary">What next?</h2>
      <div className="list-actions">
        <Link
          href="https://app.arcjet.com"
          target="_blank"
          className="button-secondary"
        >
          Sign up for Arcjet
        </Link>
      </div>
      <div className="list-actions">
        <p className="typography-secondary">Want to know more?</p>
        <div>
          <Link href="https://docs.arcjet.com" target="_blank" className="link">
            Arcjet docs
          </Link>
          <span className="typography-secondary">{" / "}</span>
          <Link
            href="https://arcjet.com/discord"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            Join our Discord
          </Link>
        </div>
      </div>
    </div>
  );
}
