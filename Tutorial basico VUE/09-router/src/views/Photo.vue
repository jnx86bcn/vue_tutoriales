<template>
  <div class="text-center">
    <h3>Photo number: {{ $route.params.id }}</h3>
    <button type="button" class="btn btn-primary m-2" @click="home">Home</button>
    <button type="button" class="btn btn-primary m-2" @click="backward">Back</button>
    <button type="button" class="btn btn-primary m-2" @click="forward">Forward</button>
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push("/");
    },
    backward() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    }
  }
};
</script>