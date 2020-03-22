<template>
  <v-container>
    <h1>Grid example 2</h1>
    <v-layout wrap mt-5>
      <v-flex class="primary">
        <h3>12</h3>
      </v-flex>
    </v-layout>
    <v-layout wrap mt-5>
      <v-flex class="primary" xs6>
        <h3>6</h3>
      </v-flex>
      <v-flex class="secondary" xs6>
        <h3>6</h3>
      </v-flex>
    </v-layout>
    <v-layout wrap mt-5>
      <v-flex class="primary" sm4>
        <h3>4</h3>
      </v-flex>
      <v-flex class="secondary" sm8>
        <h3>8</h3>
      </v-flex>
    </v-layout>
    <v-layout wrap mt-5 class="secondary" justify-center align-center style="height:100px">
      <v-flex class="primary" xs3>
        <h3>3</h3>
      </v-flex>
      <v-flex class="primary" xs3>
        <h3>3</h3>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <h1 class="display-1 text-uppercase">Lorem, ipsum dolor.</h1>
        <h1 class="display-2 primary pa-5 mt-5">Lorem, ipsum dolor.</h1>
        <h1 class="display-3 text-xs-center">Lorem, ipsum dolor.</h1>
        <h1 class="display-4">Lorem, ipsum dolor.</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>