import { Card, CardContent } from "@/components/ui/card";

export default function Alerts({ alerts }) {
  if (!alerts.length) return null;
  return (
    <Card className="mt-6">
      <CardContent className="space-y-2">
        <h3 className="font-semibold">Alerts</h3>
        <ul className="list-disc pl-5 space-y-1">
          {alerts.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
