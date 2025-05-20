import React from "react";
import { QRCodeCanvas } from "qrcode.react";

interface Props {
  sessionId: string;
}

export default function QRCodeDisplay({ sessionId }: Props) {
  const scanUrl = `https://ton-domaine.com/scan/${sessionId}`;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Scannez ce QR Code pour signer</h2>
      <QRCodeCanvas value={scanUrl} size={256} />
    </div>
  );
}
