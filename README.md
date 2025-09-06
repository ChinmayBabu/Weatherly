# 🌦 Smart Weather & Alert Dashboard

A simple weather dashboard that shows **real-time weather**, **5-day forecasts**, and **automated alerts** (rain, heatwave, high winds). Built with **React + Vite + TailwindCSS + shadcn UI** and powered by the **OpenWeather API**.

---

## ✨ Features
- 🔍 **Search by City** — Type a city name and fetch live weather data.  
- 🌡 **Current Weather** — Temperature, humidity, wind speed, and conditions.  
- 📅 **5-Day Forecast** — Daily min/max temperatures and icons.  
- 🚨 **Smart Alerts**  
  - 🌧 Rain in forecast → *“Carry an umbrella”*  
  - 🥵 Temp > 35°C → *“Stay hydrated”*  
  - 🌪 Wind > 50 km/h → *“High wind warning”*  
- 🗺 **Map Integration** — Interactive map (Leaflet.js) showing city location.  
- 🎨 **Modern UI** — TailwindCSS + shadcn components.  

---

## 🛠 Tech Stack
- [React](https://react.dev/) (with Vite)  
- [TailwindCSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)  
- [Axios](https://axios-http.com/) (API calls)  
- [React Leaflet](https://react-leaflet.js.org/) (maps)  
- [OpenWeather API](https://openweathermap.org/api) (weather data)  

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root of your project:
```env
VITE_OPENWEATHER_KEY=your_api_key_here
```

> 📝 Get a free API key from [OpenWeather](https://home.openweathermap.org/users/sign_up).

### 4. Run the development server
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
```

---

## 📸 Screenshots
(Add screenshots here once your UI is ready)

---

## 📌 Future Improvements
- 🌙 Dark mode theme  
- 📍 Auto-detect location with Geolocation API  
- 🔔 Push notifications for alerts  
- ⭐ Save favorite cities  

---

## 📜 License
MIT License © 2025 Your Name
