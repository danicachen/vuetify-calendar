<template>
  <v-app>
    <v-calendar></v-calendar>
  </v-app>
</template>

<script>
import Calendar from './components/Calendar';

export default {
  name: 'App',

  components: {
    Calendar,
  },

  data: () => ({
    //
  }),
};
</script>
