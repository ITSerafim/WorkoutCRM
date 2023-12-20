<template>
  <form class="login-form">
    <InputUI v-model="register.name" label="Кто вы ?" />
    <section class="choice-role">
      <div class="radio-button">
        <input
          id="sportsmen"
          v-model="register.role"
          class="radio"
          value="sportsmen"
          type="radio"
        />
        <label class="radio-label" for="sportsmen">Спортсмен</label>
      </div>
      <div class="radio-button">
        <input
          id="couch"
          v-model="register.role"
          class="radio"
          value="couch"
          type="radio"
        />
        <label class="radio-label" for="couch">Тренер</label>
      </div>
    </section>
    <InputUI v-model="register.email" label="Email" />
    <InputUI v-model="register.password" label="Пароль" type="password" />
    <section class="forgot-section">
      <a class="forget-pass" href="#">Забыли пароль ?</a>
    </section>
    <div class="btns">
      <ButtonUI type="submit" extra-class="login">Зарегистрироваться</ButtonUI>
      <ButtonUI extra-class="google-sign">
        <span class="text-with-icon">
          <img src="../../../assets/google-icon.svg" alt="google-icon" />
          Войти с помощью Google
        </span>
      </ButtonUI>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputUI from '../../../shared/UI/InputUI.vue';
import ButtonUI from '../../../shared/UI/ButtonUI.vue';
import { Register } from '../../../models/Auth';

const register = ref<Register>({
  email: '',
  password: '',
  name: '',
  role: '',
});
</script>

<style lang="scss">
.choice-role {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}
</style>
