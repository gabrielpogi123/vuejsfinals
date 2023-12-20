<template>
    <div class="passenger-card">
      <div class="card-details">
        <div class="card-row">
          <span class="label">Passenger Name:</span>
          <span>{{ passenger.name }}</span>
        </div>
        <div class="card-row">
          <span class="label">Age:</span>
          <span>{{ passenger.age }}</span>
        </div>
        <div class="card-row">
          <span class="label">Gender:</span>
          <span>{{ passenger.gender }}</span>
        </div>
        <div class="card-row">
          <span class="label">Seat Number:</span>
          <span>{{ passenger.seat_number }}</span>
        </div>
        <div class="card-row">
          <span class="label">Flight ID:</span>
          <span>{{ passenger.flight_id }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    passenger: {
      id: Number,
      name: String,
      age: Number,
      gender: String,
      seat_number: String,
      flight_id: Number,
    },
  });
  </script>
  
  <style scoped>
  .passenger-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 8px;
    max-width: 300px;
    margin-bottom: 20px;
    margin-left: 10px;
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
  