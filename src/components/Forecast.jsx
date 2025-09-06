import { Card, CardContent } from "@/components/ui/card";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export default function Forecast({ days }) {
  if (!days.length) return null;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
      {days.map((d) => (
        <Card key={d.date}>
          <CardContent className="text-center p-3">
            <div className="font-medium">{formatDate(d.date)}</div>
            <img
              src={`https://openweathermap.org/img/wn/${d.icon}@2x.png`}
              alt=""
              className="mx-auto"
            />
            <p>{d.condition}</p>
            <p className="text-sm">
              {Math.round(d.min)}° / {Math.round(d.max)}°
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
