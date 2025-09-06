import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WeatherCard({ data }) {
  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const wind = Math.round(data.wind.speed * 3.6);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        <img src={iconUrl} alt="" className="w-16 h-16" />
        <div>
          <p className="capitalize">{data.weather[0].description}</p>
          <p className="text-2xl font-bold">{Math.round(data.main.temp)}°C</p>
          <p>💧 {data.main.humidity}% humidity</p>
          <p>🌬 {wind} km/h wind</p>
        </div>
      </CardContent>
    </Card>
  );
}
