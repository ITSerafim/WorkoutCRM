<template>
  <form class="login-form">
    <InputUI v-model="loginData.email" label="Email" />
    <InputUI v-model="loginData.password" label="Пароль" type="password" />
    <section class="forgot-section">
      <CheckboxUI label="Запомнить меня" value="test" />

      <a class="forget-pass" href="#">Забыли пароль ?</a>
    </section>
    <div class="btns">
      <ButtonUI type="submit" extra-class="login">Войти</ButtonUI>
      <ButtonUI extra-class="google-sign"
        ><span class="text-with-icon"
          ><img src="../../../assets/google-icon.svg" alt="google-icon" />Войти
          с помощью Google</span
        ></ButtonUI
      >
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputUI from '../../../shared/UI/InputUI.vue';
import ButtonUI from '../../../shared/UI/ButtonUI.vue';
import CheckboxUI from '../../../shared/UI/CheckboxUI.vue';

const loginData = ref({
  email: '',
  password: '',
});
</script>
