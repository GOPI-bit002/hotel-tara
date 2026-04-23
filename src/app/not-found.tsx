import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found at Hotel TARA.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#e5e5e5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px",
        fontFamily: '"Times New Roman", Times, serif',
        color: "#000000",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "560px",
        }}
      >
        <section
          aria-labelledby="error-title"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            padding: "48px 48px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#666666",
              letterSpacing: "normal",
            }}
          >
            Error 404
          </p>

          <h1
            id="error-title"
            style={{
              margin: "16px 0 8px",
              fontSize: "32px",
              fontWeight: 400,
              lineHeight: 1.25,
              color: "#000000",
            }}
          >
            Page not found
          </h1>

          <p
            style={{
              margin: "0 0 32px",
              fontSize: "16px",
              lineHeight: 1.6,
              color: "#666666",
              fontWeight: 400,
            }}
          >
            The page you are looking for has moved or no longer exists. You can
            return to the homepage or reach out to us for help planning your
            stay.
          </p>

          <dl
            style={{
              margin: "0 0 32px",
              padding: "24px 0",
              borderTop: "1px solid #e5e5e5",
              borderBottom: "1px solid #e5e5e5",
              display: "grid",
              rowGap: "12px",
            }}
          >
            <Row label="Reference" value="404-NOT-FOUND" />
            <Row label="Location" value="Behdala, Una, Himachal Pradesh" />
            <Row label="Phone" value={site.phoneDisplay} />
          </dl>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <a href="/" style={linkStyle}>
              Return to homepage
            </a>
            <a href={`tel:${site.phoneTel}`} style={linkStyle}>
              Call Hotel TARA
            </a>
          </div>
        </section>

        <p
          style={{
            margin: "24px 0 0",
            textAlign: "center",
            fontSize: "12px",
            color: "#666666",
            fontWeight: 400,
          }}
        >
          Powered by Hotel TARA · Una, Himachal Pradesh
        </p>
      </div>
    </main>
  );
}

const linkStyle: React.CSSProperties = {
  fontSize: "16px",
  color: "#4285f4",
  textDecoration: "none",
  fontWeight: 400,
  fontFamily: '"Times New Roman", Times, serif',
};

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: "16px",
      }}
    >
      <dt style={{ fontSize: "14px", color: "#666666", fontWeight: 400 }}>
        {label}
      </dt>
      <dd
        style={{
          margin: 0,
          fontSize: "14px",
          color: "#000000",
          fontWeight: 400,
          textAlign: "right",
        }}
      >
        {value}
      </dd>
    </div>
  );
}
