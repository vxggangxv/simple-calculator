<template>
  <form @submit.prevent="onSubmit">
    <label for="birthday">태어난 년도</label>
    <div class="input-group mb-3">
      <input
        v-model="year"
        type="number"
        class="form-control"
        placeholder="태어난 연도를 입력하세요."
        aria-label="태어난 연도를 입력하세요."
        id="birthday"
        ref="birthday"
      />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="onAgeCaculate">알아보기</button>
      </div>
    </div>
    <p class="error" v-if="!isYear">{{ yearErrorMessage }}</p>
    <div class="form-group">
      <label>당신의 나이는 :</label>
      <span class="result" ref="result"></span>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      year: "",
      isYear: true,
      yearErrorMessage: "태어난 연도를 입력하세요"
    };
  },
  methods: {
    onAgeCaculate() {
      // let yearEl = document.getElementById("birthday");
      // console.log(yearEl);
      // console.log(this.$refs.birthday);
      var birthYear = this.$refs.birthday.value;
      if (!birthYear) {
        // alert("태어난 연도를 입력하세요");
        this.isYear = false;
        this.yearErrorMessage = "태어난 연도를 입력하세요.";
        this.$refs.birthday.focus();
      } else {
        this.isYear = true;
        var today = new Date();
        var nowYear = today.getFullYear();
        var age = nowYear - birthYear + 1;
        this.$refs.result.innerText = age;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.result {
  margin-left: 5px;
}
</style>
