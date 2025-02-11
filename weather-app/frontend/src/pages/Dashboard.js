import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Importa el archivo CSS

function Dashboard() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  // Función para buscar el clima
  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error al buscar el clima:', error);
    }
  };

  // Función para obtener la clase CSS basada en el clima
  const getWeatherClass = (weather) => {
    if (!weather) return 'default';

    const weatherType = weather.weather[0].main.toLowerCase();

    switch (weatherType) {
      case 'clear':
        return 'clear';
      case 'rain':
        return 'rain';
      case 'clouds':
        return 'clouds';
      case 'sun':
        return 'sun';
      default:
        return 'default';
    }
  };

  return (
    <div className="dashboard">
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Ingresa una ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar Clima</button>

      {weather && (
        <div className={`weather-info ${getWeatherClass(weather)}`}>
          <h3>{weather.name}</h3>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>Temperatura: {weather.main.temp}°C</p>
          <p>Humedad: {weather.main.humidity}%</p>
          <p>Condición: {weather.weather[0].description}</p>
          <p>Sensacion termica: {weather.weather[0].f}</p>

        </div>
      )}
    </div>
  );
}

export default Dashboard;