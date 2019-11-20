<template>
  <div class="home container pt-4">
    <input-form />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import InputForm from "../components/InputForm";

export default {
  name: "home",
  components: {
    // HelloWorld
    InputForm
  }
};
</script>

<style lang="scss" scoped>
// .btn-label {
//   text-align: left;
// }
.dropdown-toggle-split {
  flex-basis: 15px;
  flex-grow: 0;
}
</style>
