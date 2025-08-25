// src/pages/PrivacyPolicy.tsx
import { useEffect } from "react";

export default function PrivacyPolicy() {
  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-6 md:px-20 py-10 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-500 mb-10 text-center">
        Effective Date: August 22, 2025
      </p>

      <div className="space-y-6">
        <p>
          At <strong>MusafirTravelCo.org</strong> (“we,” “our,” “us”), your
          privacy is extremely important to us. This Privacy Policy explains how
          we collect, use, share, and protect your personal information when you
          use our website, services, and mobile applications (collectively, the
          “Services”).
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email, phone number,
            billing details, identification (if required).
          </li>
          <li>
            <strong>Booking Information:</strong> Travel dates, destinations,
            itineraries, group size, preferences.
          </li>
          <li>
            <strong>Technical Information:</strong> IP address, device details,
            browser type, usage logs.
          </li>
          <li>
            <strong>Cookies:</strong> To remember preferences, improve services,
            and show relevant offers.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">
          2. How We Use Your Information
        </h2>
        <p>
          We use your information to process bookings, provide customer support,
          improve our services, send promotional messages (with your consent),
          and comply with legal obligations.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          3. How We Share Your Information
        </h2>
        <p>
          We may share your data with trusted service providers, legal
          authorities (if required), and in the event of a business transfer. We
          do <strong>not sell</strong> your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-8">4. Data Retention</h2>
        <p>
          Your data is kept only as long as necessary for bookings, compliance,
          and dispute resolution. After that, it is securely deleted or
          anonymized.
        </p>

        <h2 className="text-2xl font-semibold mt-8">5. Data Security</h2>
        <p>
          We use encryption, firewalls, and secure servers. However, no online
          transmission is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          6. Your Privacy Rights
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Access and request a copy of your personal data.</li>
          <li>Request corrections or updates to inaccurate data.</li>
          <li>Request deletion (“Right to be Forgotten”).</li>
          <li>Opt-out of promotional messages anytime.</li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a
            href="mailto:musafirtravelco2024@gmail.com"
            className="text-blue-600 underline"
          >
            musafirtravelco2024@gmail.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-8">7. Children’s Privacy</h2>
        <p>
          Our services are not directed at children under 16. We do not
          knowingly collect data from minors.
        </p>

        <h2 className="text-2xl font-semibold mt-8">8. Cookies Policy</h2>
        <p>
          We use essential, performance, and marketing cookies. You can manage
          cookie preferences in your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          9. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy. Updates will be posted with a
          revised effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-8">10. Contact Us</h2>
        <p>
          📧{" "}
          <a
            href="mailto:musafirtravelco2024@gmail.com"
            className="text-blue-600 underline"
          >
            musafirtravelco2024@gmail.com
          </a>
          <br />
          🌍{" "}
          <a
            href="https://www.musafirtravelco.org"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            www.musafirtravelco.org
          </a>
        </p>
      </div>
    </div>
  );
}
