<template>
    <div class="booking-card">
      <div class="card-details">
        <div class="card-row">
          <span class="label">Booking ID:</span>
          <span>{{ booking.id }}</span>
        </div>
        <div class="card-row">
          <span class="label">Passenger ID:</span>
          <span>{{ booking.passenger_id }}</span>
        </div>
        <div class="card-row">
          <span class="label">Flight ID:</span>
          <span>{{ booking.flight_id }}</span>
        </div>
        <div class="card-row">
          <span class="label">Status:</span>
          <span>{{ booking.status }}</span>
        </div>
        <div class="card-row">
          <span class="label">Booking Date:</span>
          <span>{{ booking.booking_date }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    booking: {
      id: Number,
      passenger_id: Number,
      flight_id: Number,
      status: String,
      booking_date: String,
    },
  });
  </script>
  
  <style scoped>
  .booking-card {
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
  