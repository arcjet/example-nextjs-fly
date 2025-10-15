import { WhatNext } from "@/components/compositions/WhatNext";

export default function IndexPage() {
  return (
    <div className="page">
      <section className="section">
        <h1 className="heading-primary">Form submitted</h1>
        <p className="typography-primary">
          If this were a real form, your message would have been submitted.
        </p>
      </section>

      <hr className="divider" />

      <WhatNext />
    </div>
  );
}
