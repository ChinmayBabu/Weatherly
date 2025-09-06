// convert m/s → km/h
export function msToKmh(ms) {
  return ms * 3.6;
}

// Summarize into 5 daily cards
export function summarizeForecast(list = []) {
  const groups = {};
  list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    groups[date] = groups[date] || [];
    groups[date].push(item);
  });

  const dates = Object.keys(groups).slice(0, 5);
  return dates.map((date) => {
    const items = groups[date];
    const temps = items.map((i) => i.main.temp);
    const min = Math.min(...temps);
    const max = Math.max(...temps);
    const rep =
      items.find((i) => i.dt_txt.includes("12:00:00")) ||
      items[Math.floor(items.length / 2)];
    return {
      date,
      min,
      max,
      condition: rep.weather[0].main,
      icon: rep.weather[0].icon,
    };
  });
}

export function generateAlerts(current, forecast) {
  const alerts = [];
  if (!current || !forecast) return alerts;

  const temp = current.main?.temp;
  const windKmh = msToKmh(current.wind?.speed || 0);

  if (temp > 35) alerts.push("🥵 Stay hydrated — it’s very hot today");
  if (windKmh > 50) alerts.push(`🌪 High wind warning (${Math.round(windKmh)} km/h)`);
  const soon = forecast.list[0];
  if (
    soon &&
    (soon.rain || soon.weather.some((w) => /rain/i.test(w.main)))
  ) {
    alerts.push("☔️ It might rain in 3 hours");
  }
  if (
    forecast.list.some(
      (i) =>
        i.rain || i.weather.some((w) => /rain/i.test(w.main))
    )
  ) {
    alerts.push("🌧 Carry an umbrella");
  }
  return [...new Set(alerts)];
}
