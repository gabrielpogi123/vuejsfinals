<template>
    <div class="flight-card">
      <div class="card-details">
        <img :src="flight.airline_logo" :alt="flight.departure_city + ' to ' + flight.arrival_city" class="airline-logo mb-2 rounded-md">
        <div class="card-row">
          <span class="label">Flight No:</span>
          <span>{{ flight.flight_no }}</span>
        </div>
        <div class="card-row">
          <span class="label">Departure City:</span>
          <span>{{ flight.departure_city }}</span>
        </div>
        <div class="card-row">
          <span class="label">Arrival City:</span>
          <span>{{ flight.arrival_city }}</span>
        </div>
        <div class="card-row">
          <span class="label">Departure Time:</span>
          <span>{{ flight.departure_time }}</span>
        </div>
        <div class="card-row">
          <span class="label">Arrival Time:</span>
          <span>{{ flight.arrival_time }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    flight: {
      id: Number,
      flight_no: String,
      departure_city: String,
      arrival_city: String,
      departure_time: String,
      arrival_time: String,
      airline_logo: String,
    },
  });
  </script>
  
  <style scoped>
  .flight-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 8px;
    max-width: 300px;
    margin-bottom: 20px;
    margin-left: 10px;
  }
  
  .airline-logo {
    width: 100%;
    height: 120px; /* Adjust the height as needed */
    object-fit: cover;
  }
  
  .card-details {
    padding: 10px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .card-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  
  .label {
    font-weight: bold;
    margin-right: 5px;
  }
  </style>
  