<template>
    <div class="container">
      <BookingCard v-for="booking in bookings" :key="booking.id" :booking="booking" />
    </div>
  </template>
  
  <script setup>
  import BookingCard from '../components/BookingCard.vue';
  
  const bookings = [
    {
      id: 1,
      passenger_id: 1,
      flight_id: 1,
      status: 'Confirmed',
      booking_date: '2023-01-01',
    },
    {
      id: 2,
      passenger_id: 2,
      flight_id: 2,
      status: 'Pending',
      booking_date: '2023-01-02',
    },
    {
      id: 3,
      passenger_id: 3,
      flight_id: 3,
      status: 'Confirmed',
      booking_date: '2023-01-03',
    },
    {
      id: 4,
      passenger_id: 4,
      flight_id: 4,
      status: 'Pending',
      booking_date: '2023-01-04',
    },
    {
      id: 5,
      passenger_id: 5,
      flight_id: 5,
      status: 'Confirmed',
      booking_date: '2023-01-05',
    },
    {
      id: 6,
      passenger_id: 6,
      flight_id: 6,
      status: 'Pending',
      booking_date: '2023-01-06',
    },
    {
      id: 7,
      passenger_id: 7,
      flight_id: 7,
      status: 'Confirmed',
      booking_date: '2023-01-07',
    },
    {
      id: 8,
      passenger_id: 8,
      flight_id: 8,
      status: 'Pending',
      booking_date: '2023-01-08',
    },
    {
      id: 9,
      passenger_id: 9,
      flight_id: 9,
      status: 'Confirmed',
      booking_date: '2023-01-09',
    },
    {
      id: 10,
      passenger_id: 10,
      flight_id: 10,
      status: 'Pending',
      booking_date: '2023-01-10',
    },
  ];
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  