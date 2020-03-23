<template>
  <v-app>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar>
        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Vuetify</v-toolbar-title>
      </v-toolbar>
    </v-card>
    <v-navigation-drawer v-model="drawer" temporary app>
      <v-list dense nav>
        <v-list-item link :to="{name: 'Home'}" exact>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name: 'Grid'}">
          <v-list-item-content>
            <v-list-item-title>Grid</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name: 'Grid2'}">
          <v-list-item-content>
            <v-list-item-title>Grid2</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name: 'Buttons'}">
          <v-list-item-content>
            <v-list-item-title>Buttons</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{name: 'Cards'}">
          <v-list-item-content>
            <v-list-item-title>Cards</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false
    };
  }
};
</script>
