import React, { useState } from 'react';

function Dashboard() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    // Lógica para buscar el clima (la implementaremos más adelante).
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