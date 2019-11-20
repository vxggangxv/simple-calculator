<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <label for="grossSalary">소득 입력</label>
      <input
        v-model="income"
        type="number"
        data-vv-name="number"
        class="form-control"
        id="grossSalary"
        placeholder="금액을 입력해주세요."
        required
      />
      <p class="error" v-if="!this.errors.incomeError.value">{{ this.errors.incomeError.message }}</p>
    </div>
    <div class="form-group">
      <label>급여 선택</label>
      <div class="custom-control custom-radio">
        <input
          v-model="relationship"
          type="radio"
          id="married"
          name="personalRelationship"
          class="custom-control-input"
          :value="options.relationship[0].value"
          required
        />
        <label class="custom-control-label" for="married">
          {{
          options.relationship[0].label
          }}
        </label>
      </div>
      <div class="custom-control custom-radio">
        <input
          v-model="relationship"
          type="radio"
          id="single"
          name="personalRelationship"
          class="custom-control-input"
          :value="options.relationship[1].value"
        />
        <label class="custom-control-label" for="single">
          {{
          options.relationship[1].label
          }}
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-outline-secondary">계산하기</button>
  </form>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      errors: {
        incomeError: { value: true, message: "" }
      },
      income: null,
      relationship: "",
      // inputs: {
      //   income: 0,
      //   year: "",
      //   isInChurch: "",
      //   stateOfResidence: "",
      //   relationship: ""
      // },
      options: {
        year: [{ label: "2019", value: "2019" }],
        churchtax: [
          { label: "예", value: true },
          { label: "아니오", value: false }
        ],
        state: [
          { label: "서울", value: "seoul" },
          { label: "기타", value: "other" }
        ],
        relationship: [
          { label: "연봉(퇴직금 별도)", value: "yearPay" },
          { label: "월급", value: "monthPay" }
        ]
      }
    };
  },
  watch: {
    income(value) {
      // if (value < 0) {
      if (!this.is_number(value) && value === "") {
        this.errors.incomeError.message = "올바른 금액을 입력해주세요";
        this.errors.incomeError.value = false;
        return;
      }
      // console.log(!this.is_number(value));
      if (this.income) this.income = this.income.replace(/(^0+)/, "");
      this.errors.incomeError.value = true;
      return;
    }
  },
  computed: {
    thisYear() {
      let d = new Date();
      return d.getFullYear();
    }
  },
  created() {
    this.income = this.$store.state.income;
    // console.log(Number.parseInt(999));
  },
  methods: {
    is_number(v) {
      var reg = /^(\s|\d)+$/;
      return reg.test(v);
    },
    onSubmit() {
      // let incomeZero = this.income.replace(/(^0+)/, "");
      // console.log(income);
    }
  }
};
</script>

<style lang="scss" scoped>
.btn.disabled,
.btn:disabled {
  cursor: not-allowed;
}
.error {
  margin-top: 5px;
  padding-left: 15px;
  font-size: 13px;
  color: #dc4b3e;
}
</style>
