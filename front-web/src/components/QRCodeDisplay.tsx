import React, { useEffect, useState } from "react";
import QRCode, { QRCodeCanvas } from "qrcode.react";

interface QRCodeDisplayProps {
  sessionId: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ sessionId }) => {
  const [qrValue, setQrValue] = useState(`${sessionId}-${Date.now()}`);

  useEffect(() => {
    const interval = setInterval(() => {
      setQrValue(`${sessionId}-${Date.now()}`);
    }, 5000);

    return () => clearInterval(interval);
  }, [sessionId]);

  return (
    <div className="flex justify-center my-6">
      <QRCodeCanvas value={qrValue} size={200} />
    </div>
  );
};

export default QRCodeDisplay;
