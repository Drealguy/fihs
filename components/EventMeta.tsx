import { CalendarIcon, MapPinIcon } from "./Icons";

export default function EventMeta({ when, where }: { when: string; where: string }) {
  return (
    <div className="event-meta">
      <span>
        <CalendarIcon />
        {when}
      </span>
      <span>
        <MapPinIcon />
        {where}
      </span>
    </div>
  );
}
