<template>
  <form class="login-form">
    <InputUI v-model="register.name" label="Кто вы ?" />
    <section class="choice-role">
      <div class="radio-button">
        <input id="sportsmen" v-model="register.role" class="radio" value="sportsmen" type="radio">
        <label class="radio-label" for="sportsmen">Спортсмен</label>
      </div>
      <div class="radio-button">
        <input id="couch" v-model="register.role" class="radio" value="couch" type="radio">
        <label class="radio-label" for="couch">Тренер</label>
      </div>
    </section>
    <InputUI v-model="register.email" label="Email" />
    <InputUI v-model="register.password" label="Пароль" type="password" />
    <section class="forgot-section">
      <!-- <CheckboxUI label="Запомнить меня" value="test" /> -->
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
// import CheckboxUI from '../../../shared/UI/CheckboxUI.vue';

const register = ref({
  email: '',
  password: '',
  name: '',
  role: ''
});
</script>
  

<style lang="scss">
.choice-role {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.radio-label {
  color: #bbb;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.radio+label {
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  padding: 20px 50px;
  border-radius: 8px;
  border: 2px solid #2B2B2E;
}


.radio+label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.radio:checked+label {
  color: #fff;
  background-color: #3596FE;
}

.radio:checked+label::before {
  border-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
</style>