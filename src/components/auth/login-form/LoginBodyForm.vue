<template>
  <form class="login-form">
    <!-- <InputUI /> -->
    <div class="form-control form_control_vertic">
      <label class="control-label" for="email">Email</label>
      <input id="email" class="control-type" type="text" required />
    </div>
    <div class="form-control form_control_vertic">
      <label class="control-label" for="password">Пароль</label>
      <input id="password" class="control-type" type="password" required />
    </div>
    <section class="forgot-section">
      <div class="form-control form_control_horize">
        <input id="radioBtn" style="cursor: pointer" type="radio" />
        <label class="control-label control-label_radio" for="radioBtn"
          >Запомнить меня</label
        >
      </div>
      <a class="a-link" href="#">Забыли пароль ?</a>
    </section>
    <div class="btns">
      <button id="submit" class="btn login" type="submit">Войти</button>
      <button class="btn google-sign">
        <span class="text-with-icon"
          ><img src="images/google.svg" alt="google-icon" />Войти с помощью
          Google</span
        >
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
// import InputUI from '../../../shared/UI/InputUI.vue';
</script>
