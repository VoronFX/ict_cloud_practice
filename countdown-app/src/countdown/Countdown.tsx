import React, { useEffect, useState } from 'react';

function getNextSaturday(now = new Date()): Date {
  // Day 6 === Saturday (0 = Sunday)
  const day = now.getDay();
  const daysUntilSaturday = (6 - day + 7) % 7 || 7; // if today is Saturday, go to next Saturday (7 days)

  const next = new Date(now);
  next.setDate(now.getDate() + daysUntilSaturday);
  next.setHours(0, 0, 0, 0);
  return next;
}

function getRemaining(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const days = Math.floor(totalHours / 24);
  return { days, hours, minutes, seconds };
}

export default function Countdown(): JSX.Element {
  const [target] = useState(() => getNextSaturday());
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = target.getTime() - now.getTime();
  const ended = diff <= 0;
  const remaining = getRemaining(Math.max(0, diff));

  if (ended) {
    return <div className="lead">It&apos;s today — enjoy your Saturday!</div>;
  }

  return (
    <div>
      <div className="d-flex justify-content-center gap-3 mb-3">
        <div className="text-center">
          <div className="h2 mb-0">{remaining.days}</div>
          <div className="text-muted small">Days</div>
        </div>
        <div className="text-center">
          <div className="h2 mb-0">{String(remaining.hours).padStart(2, '0')}</div>
          <div className="text-muted small">Hours</div>
        </div>
        <div className="text-center">
          <div className="h2 mb-0">{String(remaining.minutes).padStart(2, '0')}</div>
          <div className="text-muted small">Minutes</div>
        </div>
        <div className="text-center">
          <div className="h2 mb-0">{String(remaining.seconds).padStart(2, '0')}</div>
          <div className="text-muted small">Seconds</div>
        </div>
      </div>
      <div className="small text-muted">Target: {target.toLocaleString()}</div>
    </div>
  );
}
