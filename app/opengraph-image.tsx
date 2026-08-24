import { ImageResponse } from "next/og";

export const alt = "Enjoye Programming — Learn. Build. Earn.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          color: "#fafafa",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundColor: "#fafafa",
              color: "#09090b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            {">"}
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>Enjoye Programming</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 800, letterSpacing: -2, lineHeight: 1.1 }}>
            Learn. Build. Earn.
          </div>
          <div style={{ marginTop: 18, fontSize: 28, color: "#a1a1aa" }}>
            App development tutorials, documentation & monetization guides
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {["Flutter", "Firebase", "AdMob", "Play Store", "Monetization"].map((topic) => (
            <div
              key={topic}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid #27272a",
                fontSize: 22,
                color: "#d4d4d8",
              }}
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
