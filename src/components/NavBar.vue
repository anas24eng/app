<template>
  <v-card>
    <v-toolbar  color="lavender"
      dark
      flat>
      <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-medium"> getak </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-list>`
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-action>
            <v-icon class="white--text">{{ link.icon }} </v-icon>
          </v-list-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-application", text: "My app", route: "/myapp" },
        { icon: "mdi-account", text: "Team", route: "/home" },
        { icon: "mdi-email", text: "Mail", route: "/mail" },
        { icon: "mdi-check-circle", text: "Deliverd", route: "/deliverd" }
      ]
    };
  }
};
</script>

<style></style>
