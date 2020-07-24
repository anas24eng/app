<template>
  <v-app class="grey lighten-4">
    <NavBar />
    <v-content class="mx-5 mb-5">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",

  components: {
    NavBar
  },

  data: () => ({
    //
  })
};
</script>
