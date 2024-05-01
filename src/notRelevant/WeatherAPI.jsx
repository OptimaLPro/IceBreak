import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
  const [monthlyWeatherData, setMonthlyWeatherData] = useState({});
  const apiKey = '7R9G72YWRB53Z7T39EP5EFHXH';
  const country = 'Israel';
  const startDate = '2023-01-01';
  const endDate = '2023-12-31'; // End date of the year to cover all months

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${country}/${startDate}/${endDate}?key=${apiKey}`);
        const data = await response.json();

        // Log the API response for debugging
        console.log('API Response:', data);

        if (data.error) {
          throw new Error(data.error.message);
        }

        // Process daily data to get monthly summaries
        const monthlyData = processData(data);

        setMonthlyWeatherData(monthlyData);
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
      }
    };

    fetchWeatherData();
  }, [country, apiKey, startDate, endDate]);

  const processData = (data) => {
    // Initialize an object to store monthly summaries
    const monthlyData = {};

    // Iterate through daily data and aggregate by month
    data.days.forEach((day) => {
      const date = new Date(day.datetime);
      const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;

      if (!monthlyData[monthKey]) {
        monthlyData[monthKey] = {
          minTemp: day.tempmin,
          maxTemp: day.tempmax,
          // Add more properties as needed
        };
      } else {
        // Update monthly summary if data exists for the month
        monthlyData[monthKey].minTemp = Math.min(monthlyData[monthKey].minTemp, day.tempmin);
        monthlyData[monthKey].maxTemp = Math.max(monthlyData[monthKey].maxTemp, day.tempmax);
        // Update other properties accordingly
      }
    });

    return monthlyData;
  };

  if (!monthlyWeatherData) {
    return <div>Loading...</div>;
  }

  // Display monthlyWeatherData as needed

  return (
    <div>
      {/* Display monthlyWeatherData */}
    </div>
  );
};

export default WeatherApp;
