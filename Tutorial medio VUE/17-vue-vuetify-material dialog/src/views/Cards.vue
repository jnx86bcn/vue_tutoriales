<template>
  <v-container grid-list-lg>
    <h1>Cards examples</h1>
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
            <v-btn color="info" text>Click me</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-self-start flexbox>
                  <span class="headline white--text">Lorem, ipsum dolor.</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>Test</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eveniet. Eius necessitatibus enim, adipisci, unde reprehenderit id odit fugit officiis at aspernatur deleniti ea. Tempora, illo. Dicta, in! A, laboriosam.</v-card-text>
          <v-card-actions>
            <v-btn color="info" text>Click me</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>