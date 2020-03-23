<template>
  <v-container>
    <h1>Buttons examples</h1>
    <v-layout wrap mt-5>
      <v-flex>
        <v-btn class="ma-2">Button</v-btn>
        <v-btn class="ma-2 primary">Button</v-btn>
        <v-btn class="ma-2 blue">Button</v-btn>
        <v-btn text>Normal</v-btn>
      </v-flex>
    </v-layout>
    <v-layout wrap mt-5>
      <v-flex>
        <v-btn small class="ma-2 primary">Small</v-btn>
        <v-btn class="ma-2 primary">Medium</v-btn>
        <v-btn large class="ma-2 primary">Large</v-btn>
      </v-flex>
    </v-layout>
    <v-layout wrap mt-5>
      <v-flex>
        <v-btn class="primary" icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn class="primary" icon>
          <v-icon>mdi-star</v-icon>
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn class="primary" icon>
          <v-icon>mdi-cached</v-icon>
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn class="primary" icon>
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout wrap mt-5>
      <v-flex>
        <v-btn class="mx-2" fab dark small color="primary">
          <v-icon dark>mdi-minus</v-icon>
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn class="mx-2" fab dark small color="pink">
          <v-icon dark>mdi-heart</v-icon>
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn class="mx-2" fab dark color="indigo">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn class="mx-2" fab dark color="teal">
          <v-icon dark>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn class="mx-2" fab dark large color="purple">
          <v-icon dark>mdi-android</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>
