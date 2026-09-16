import { ImageResponse } from "next/og";

export const alt =
  "Larissa Photographer — fotografia em São Paulo";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",

          padding: "72px 82px",

          background: "#F6F4F0",
          color: "#2E2E2E",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 24,
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "#9A5842",
            }}
          >
            Larissa Photographer
          </div>

          <div
            style={{
              width: 110,
              height: 2,
              background: "#CE7F88",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontFamily: "serif",

              fontSize: 104,
              lineHeight: 0.9,

              letterSpacing: "-0.04em",
            }}
          >
            Fotos que
          </div>

          <div
            style={{
              fontFamily: "serif",

              fontSize: 104,
              lineHeight: 0.9,

              letterSpacing: "-0.04em",

              color: "#9A5842",
            }}
          >
            guardam o agora.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",

            fontSize: 20,
            letterSpacing: "0.12em",
          }}
        >
          <div>
            ENSAIOS · FAMÍLIAS · EVENTOS
          </div>

          <div>
            SÃO PAULO — SP
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}