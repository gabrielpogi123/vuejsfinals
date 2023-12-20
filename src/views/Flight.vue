<template>
    <div class="container">
      <FlightCard v-for="flight in flights" :key="flight.id" :flight="flight" />
    </div>
  </template>
  
  <script setup>
  import FlightCard from '../components/FlightCard.vue';
  
  const flights = [
    {
      id: 1,
      flight_no: 'SA123',
      departure_city: 'Johannesburg',
      arrival_city: 'Cape Town',
      departure_time: '2023-12-20 08:00:00',
      arrival_time: '2023-12-20 10:30:00',
      airline_logo: 'https://i.dummyjson.com/airlines/sa_airways_logo.png',
    },
    {
      id: 2,
      flight_no: 'BA456',
      departure_city: 'London',
      arrival_city: 'New York',
      departure_time: '2023-12-21 12:00:00',
      arrival_time: '2023-12-21 18:30:00',
      airline_logo: 'https://i.dummyjson.com/airlines/british_airways_logo.png',
    },
    {
      id: 3,
      flight_no: 'AF789',
      departure_city: 'Paris',
      arrival_city: 'Tokyo',
      departure_time: '2023-12-22 15:30:00',
      arrival_time: '2023-12-23 05:45:00',
      airline_logo: 'https://i.dummyjson.com/airlines/air_france_logo.png',
    },
    {
      id: 4,
      flight_no: 'DL101',
      departure_city: 'Atlanta',
      arrival_city: 'Los Angeles',
      departure_time: '2023-12-24 09:15:00',
      arrival_time: '2023-12-24 11:45:00',
      airline_logo: 'https://i.dummyjson.com/airlines/delta_airlines_logo.png',
    },
    {
      id: 5,
      flight_no: 'EK202',
      departure_city: 'Dubai',
      arrival_city: 'Sydney',
      departure_time: '2023-12-25 16:00:00',
      arrival_time: '2023-12-26 07:30:00',
      airline_logo: 'https://i.dummyjson.com/airlines/emirates_airlines_logo.png',
    },
    {
      id: 6,
      flight_no: 'UA303',
      departure_city: 'Chicago',
      arrival_city: 'San Francisco',
      departure_time: '2023-12-27 14:45:00',
      arrival_time: '2023-12-27 17:15:00',
      airline_logo: 'https://i.dummyjson.com/airlines/united_airlines_logo.png',
    },
    {
      id: 7,
      flight_no: 'SQ505',
      departure_city: 'Singapore',
      arrival_city: 'Hong Kong',
      departure_time: '2023-12-28 19:30:00',
      arrival_time: '2023-12-28 22:00:00',
      airline_logo: 'https://i.dummyjson.com/airlines/singapore_airlines_logo.png',
    },
    {
      id: 8,
      flight_no: 'QF707',
      departure_city: 'Sydney',
      arrival_city: 'Auckland',
      departure_time: '2023-12-29 10:00:00',
      arrival_time: '2023-12-29 12:30:00',
      airline_logo: 'https://i.dummyjson.com/airlines/qantas_airways_logo.png',
    },
    {
      id: 9,
      flight_no: 'TK404',
      departure_city: 'Istanbul',
      arrival_city: 'Moscow',
      departure_time: '2023-12-30 23:45:00',
      arrival_time: '2023-12-31 03:15:00',
      airline_logo: 'https://i.dummyjson.com/airlines/turkish_airlines_logo.png',
    },
    {
      id: 10,
      flight_no: 'LH888',
      departure_city: 'Frankfurt',
      arrival_city: 'Beijing',
      departure_time: '2024-01-01 08:30:00',
      arrival_time: '2024-01-01 13:00:00',
      airline_logo: 'https://i.dummyjson.com/airlines/lufthansa_logo.png',
    },
  ];
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  