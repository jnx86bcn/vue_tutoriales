<template>
  <v-container>
    <h1>Dialog examples</h1>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-self-end flexbox>
                  <span class="headline white--text">Lorem, ipsum dolor.</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>Test</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eveniet. Eius necessitatibus enim, adipisci, unde reprehenderit id odit fugit officiis at aspernatur deleniti ea. Tempora, illo. Dicta, in! A, laboriosam.</v-card-text>
          <v-card-actions>
            <v-btn color="info" text @click="showDialog=true">Show dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="showDialog" width="500px">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Privacy Policy</v-card-title>

        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false
    };
  }
};
</script>