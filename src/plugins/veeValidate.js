import Vue from "vue";
import { ValidationProvider, extend } from "vee-validate";

// Add a rule.
extend("required", {
  validate: value => !!value,
  message: "필수 입력 사항입니다."
});

// Register it globally
Vue.component("ValidationProvider", ValidationProvider);
