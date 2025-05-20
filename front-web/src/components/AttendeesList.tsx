import React from "react";

interface Attendee {
  id: number;
  name: string;
  email: string;
}

interface Props {
  attendees: Attendee[];
}

export default function AttendeesList({ attendees }: Props) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Participants :</h3>
      <ul>
        {attendees.map((a) => (
          <li key={a.id}>
            {a.name} ({a.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
