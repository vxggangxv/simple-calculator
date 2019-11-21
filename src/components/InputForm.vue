<template>
  <div>
    <label for="birthday">태어난 연도</label>
    <div class="input-group mb-1">
      <input
        v-model="year"
        type="number"
        class="form-control"
        placeholder="연도를 입력하세요."
        aria-label="연도를 입력하세요."
        id="birthday"
        ref="birthday"
        @keypress.enter="onAgeCaculate"
      />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="onAgeCaculate">알아보기</button>
      </div>
    </div>
    <p class="error" v-if="!isYear">{{ yearErrorMessage }}</p>
    <p class="p-2" v-show="isResult">
      당신의 띠는
      <span class="result text-primary" ref="result"></span> 띠입니다.
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      year: "",
      isYear: true,
      yearErrorMessage: "태어난 연도를 입력하세요",
      isResult: false
    };
  },
  methods: {
    onAgeCaculate() {
      let zodiac = new Array(
        "원숭이",
        "닭",
        "개",
        "돼지",
        "쥐",
        "소",
        "호랑이",
        "토끼",
        "용",
        "뱀",
        "말",
        "양"
      );

      let birthYear = this.$refs.birthday.value.replace(/(^0+)/, "");
      if (!birthYear || birthYear <= 0) {
        // alert("태어난 연도를 입력하세요");
        this.isYear = false;
        this.yearErrorMessage = "올바른 연도를 입력하세요.";
        this.$refs.birthday.focus();
      } else {
        this.isYear = true;
        // let today = new Date();
        // let nowYear = today.getFullYear();
        // let age = nowYear - birthYear + 1;
        // this.$refs.result.innerText = age;
        let i = birthYear % 12;
        this.$refs.result.innerText = zodiac[i];
        this.isResult = true;
        // "당신의 띠는 '" + zodiac[i] + "' 띠 입니다.";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.result {
  margin-left: 5px;
}
.error {
  margin-top: 5px;
  padding-left: 15px;
  font-size: 13px;
  color: #dc4b3e;
}
</style>
