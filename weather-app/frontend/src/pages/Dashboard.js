import React, { useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error al buscar el clima:', error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <input
        type="text"
        placeholder="Ingresa una ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar Clima</button>

      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>Temperatura: {weather.main.temp}°C</p>
          <p>Humedad: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;