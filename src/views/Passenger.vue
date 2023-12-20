<template>
    <div class="container">
      <PassengerCard v-for="passenger in passengers" :key="passenger.id" :passenger="passenger" />
    </div>
  </template>
  
  <script setup>
  import PassengerCard from '../components/PassengerCard.vue';
  
  const passengers = [
    {
      id: 1,
      name: 'John Doe',
      age: 28,
      gender: 'Male',
      seat_number: 'A23',
      flight_id: 1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
      gender: 'Female',
      seat_number: 'B15',
      flight_id: 2,
    },
    {
      id: 3,
      name: 'Robert Johnson',
      age: 35,
      gender: 'Male',
      seat_number: 'C08',
      flight_id: 3,
    },
    {
      id: 4,
      name: 'Emily Davis',
      age: 22,
      gender: 'Female',
      seat_number: 'D31',
      flight_id: 4,
    },
    {
      id: 5,
      name: 'Michael Brown',
      age: 30,
      gender: 'Male',
      seat_number: 'E19',
      flight_id: 5,
    },
    {
      id: 6,
      name: 'Sophia Wilson',
      age: 26,
      gender: 'Female',
      seat_number: 'F25',
      flight_id: 6,
    },
    {
      id: 7,
      name: 'David White',
      age: 33,
      gender: 'Male',
      seat_number: 'G12',
      flight_id: 7,
    },
    {
      id: 8,
      name: 'Olivia Harris',
      age: 29,
      gender: 'Female',
      seat_number: 'H07',
      flight_id: 8,
    },
    {
      id: 9,
      name: 'Christopher Miller',
      age: 27,
      gender: 'Male',
      seat_number: 'I14',
      flight_id: 9,
    },
    {
      id: 10,
      name: 'Ava Davis',
      age: 24,
      gender: 'Female',
      seat_number: 'J22',
      flight_id: 10,
    },
  ];
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  