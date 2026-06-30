import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Wildlife Removal Services";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 64,
        fontWeight: 700,
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      Wildlife Removal Services
    </div>,
    {
      ...size,
    },
  );
}
