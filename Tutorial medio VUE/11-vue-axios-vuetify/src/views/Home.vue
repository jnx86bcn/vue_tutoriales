<template>
  <div>
    <v-layout :wrap="true">
      <v-flex xs12>
        <v-date-picker
          ref="picker"
          v-model="dateSelected"
          full-width
          :min="minYear"
          :max="maxYear"
          @change="getDolarPrice(dateSelected)"
        ></v-date-picker>
      </v-flex>
      <v-flex xs12>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-center">{{ valuePrice }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      minYear: "1984",
      maxYear: new Date().toISOString().substr(0, 10),
      dateSelected: new Date().toISOString().substr(0, 10),
      valuePrice: 0
    };
  },
  methods: {
    ...mapMutations(["showLoading", "hideLoading"]),
    async getDolarPrice(day) {
      this.showLoading({ title: "Get info from database", color: "danger" });
      const arrayDay = day.split("-");
      const formatedDay = `${arrayDay[2]}-${arrayDay[1]}-${arrayDay[0]}`;
      try {
        const data = await axios.get(
          `https://mindicador.cl/api/dolar/${formatedDay}`
        );
        this.valuePrice =
          data.data.serie.length > 0
            ? await data.data.serie[0].valor
            : "no results";
      } catch (error) {
        console.log(error);
      } finally {
        this.hideLoading();
      }
    }
  },
  created() {
    this.getDolarPrice(this.dateSelected);
  }
};
</script>
