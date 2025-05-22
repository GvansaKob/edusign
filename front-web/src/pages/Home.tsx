import React, { useEffect, useState } from "react";
import ioClient from "socket.io-client"; 
import QRCodeDisplay from "../components/QRCodeDisplay";
import AttendeesList from "../components/AttendeesList";

interface Attendee {
  id: number;
  name: string;
  email: string;
}

const socket = ioClient("http://localhost:3000"); 

export default function Home() {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [sessionId, setSessionId] = useState<string>("SESSION123");

  useEffect(() => {
    socket.emit("joinSession", sessionId);

    socket.on("newAttendee", (attendee: Attendee) => {
      setAttendees((prev) => [...prev, attendee]);
    });

    return () => {
      socket.disconnect();
    };
  }, [sessionId]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Feuille d’émargement</h1>
      <QRCodeDisplay sessionId={sessionId} />
      <AttendeesList attendees={attendees} />
    </div>
  );
}
