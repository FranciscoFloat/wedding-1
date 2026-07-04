import { useEffect, useState } from "react";

// Target date — replace with real wedding date.
const WEDDING_DATE = new Date("2027-06-14T17:00:00");

function getDiff(target: Date) {
  const total = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown() {
  const [time, setTime] = useState<{days: number, hours: number, minutes: number, seconds: number} | null>(null);

  useEffect(() => {
    setTime(getDiff(WEDDING_DATE));
    const id = setInterval(() => setTime(getDiff(WEDDING_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  const units: Array<[string, number]> = [
    ["Días", time ? time.days : 0],
    ["Horas", time ? time.hours : 0],
    ["Min", time ? time.minutes : 0],
    ["Seg", time ? time.seconds : 0],
  ];

  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto">
      {units.map(([label, value]) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center rounded-sm border border-gold/40 bg-card/60 py-5 sm:py-8 backdrop-blur-sm"
        >
          <span className="font-serif text-3xl sm:text-5xl text-ink tabular-nums">
            {time ? String(value).padStart(2, "0") : "00"}
          </span>
          <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
