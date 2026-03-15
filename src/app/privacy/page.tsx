import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy and cookie information for nicolae-valentin-dinca.net. GDPR compliance.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ivory text-obsidian">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link
          href="/"
          className="mb-8 inline-flex min-h-[44px] items-center font-sans text-sm uppercase tracking-widest text-warm-gray transition hover:text-forest"
        >
          ← Back to home
        </Link>
        <h1 className="font-serif text-3xl tracking-wide md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 font-sans text-sm text-warm-gray">
          Last updated: {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </p>

        <div className="mt-10 space-y-10 font-sans text-sm leading-relaxed text-obsidian/90 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:tracking-wide [&_h2]:text-obsidian [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
          <section>
            <h2>1. Controller</h2>
            <p>
              The controller of your personal data in relation to this website is:
            </p>
            <p className="mt-2">
              <strong>Nicolae-Valentin Dincă</strong>
              <br />
              Website: nicolae-valentin-dinca.net
            </p>
            <p className="mt-2">
              For privacy-related requests you may use the contact options available on this site.
            </p>
          </section>

          <section>
            <h2>2. Data we collect</h2>
            <p>When you use this website we may process:</p>
            <ul className="mt-2">
              <li>
                <strong>Usage data:</strong> IP address, browser type, device information, pages visited and time spent, in server logs. This is necessary for the operation and security of the site.
              </li>
              <li>
                <strong>Cookie data:</strong> See the Cookie section below.
              </li>
              <li>
                <strong>Data you provide:</strong> If you contact us or use a form, we process the data you submit (e.g. name, email, message) to respond to you.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Cookies</h2>
            <p>We use the following cookies:</p>
            <ul className="mt-2">
              <li>
                <strong>Strictly necessary:</strong> any cookies required for the site to function. This site does not use authentication cookies.
              </li>
              <li>
                <strong>Preference/consent:</strong> we store your cookie consent choice (e.g. &quot;all&quot; or &quot;necessary only&quot;) in local storage so we do not show the banner again.
              </li>
              <li>
                <strong>Optional (if you accept &quot;Accept all&quot;):</strong> we may use analytics or similar cookies in the future. You can change your choice at any time by clearing site data or contacting us.
              </li>
            </ul>
            <p className="mt-3">
              You can refuse or restrict cookies via your browser settings.
            </p>
          </section>

          <section>
            <h2>4. Legal basis and purposes</h2>
            <p>We process your data on the following bases:</p>
            <ul className="mt-2">
              <li>
                <strong>Legitimate interest:</strong> operation, security and improvement of the website, server logs.
              </li>
              <li>
                <strong>Consent:</strong> non-essential cookies, where we ask for your consent via the cookie banner.
              </li>
              <li>
                <strong>Contract or pre-contractual steps:</strong> if you contact us in relation to a service.
              </li>
            </ul>
          </section>

          <section>
            <h2>5. Retention</h2>
            <p>
              We keep your data only as long as necessary for the purposes above (e.g. server logs for a limited period, contact messages until the matter is closed, consent until withdrawn).
            </p>
          </section>

          <section>
            <h2>6. Your rights (GDPR)</h2>
            <p>You have the right to:</p>
            <ul className="mt-2">
              <li>Access your personal data and receive a copy</li>
              <li>Rectify inaccurate data</li>
              <li>Request erasure (&quot;right to be forgotten&quot;) where applicable</li>
              <li>Restrict or object to certain processing</li>
              <li>Data portability, where applicable</li>
              <li>Withdraw consent at any time (without affecting the lawfulness of processing before withdrawal)</li>
              <li>Lodge a complaint with a supervisory authority (e.g. in your country of residence)</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us using the details in section 1.
            </p>
          </section>

          <section>
            <h2>7. Third parties and transfers</h2>
            <p>
              This site may use third-party services (e.g. hosting, analytics if enabled). Where data is processed outside the EEA, we ensure appropriate safeguards (e.g. adequacy decisions or standard contractual clauses) as required by law.
            </p>
          </section>

          <section>
            <h2>8. Changes</h2>
            <p>
              We may update this privacy policy from time to time. The &quot;Last updated&quot; date at the top will be revised. We encourage you to review this page periodically.
            </p>
          </section>
        </div>

        <section className="mt-12 rounded border border-champagne/40 bg-champagne/10 px-4 py-5 sm:px-6">
          <h2 className="font-serif text-lg tracking-wide text-obsidian">
            Contact for GDPR requests
          </h2>
          <p className="mt-2 font-sans text-sm text-obsidian/90">
            To exercise your rights (access, rectification, erasure, restriction, portability) or to submit a request or complaint, please visit{" "}
            <a
              href="https://nicolae-valentin-dinca.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-forest underline transition hover:text-obsidian"
            >
              nicolae-valentin-dinca.com
            </a>.
          </p>
        </section>

        <p className="mt-12 font-sans text-sm text-warm-gray">
          <Link href="/" className="underline transition hover:text-forest">
            Return to home
          </Link>
        </p>
      </div>
    </main>
  );
}
