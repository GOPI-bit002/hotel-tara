"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  const incidentId = error.digest ?? "UNKNOWN";

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
      <div style={{ width: "100%", maxWidth: "560px" }}>
        <section
          aria-labelledby="error-title"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            padding: "48px 48px",
          }}
        >
          <p style={{ margin: 0, fontSize: "14px", color: "#666666" }}>
            Error 500
          </p>

          <h1
            id="error-title"
            style={{
              margin: "16px 0 8px",
              fontSize: "32px",
              fontWeight: 400,
              lineHeight: 1.25,
            }}
          >
            Something went wrong
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
            An unexpected issue occurred while loading this page. You can try
            again, or contact us directly to plan your stay at Hotel TARA.
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
            <Row label="Incident ID" value={incidentId} />
            <Row label="Reference" value="500-SERVER-ERROR" />
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
            <button onClick={() => reset()} style={buttonAsLink}>
              Try again
            </button>
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

const buttonAsLink: React.CSSProperties = {
  ...linkStyle,
  background: "transparent",
  border: "none",
  padding: 0,
  cursor: "pointer",
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
          wordBreak: "break-all",
        }}
      >
        {value}
      </dd>
    </div>
  );
}
