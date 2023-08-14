<template>
  <AuthLayout image="login.png">
    <section class="form">
      <section>
        <FormHeader title="Привет, давно не виделись!" />
        <LoginBodyForm />
      </section>
      <FormFooter
        message="Нет аккаунта ?"
        path="register"
        link-name="Зарегистрироваться"
      />
    </section>
  </AuthLayout>
</template>
  
<script setup lang="ts">
import LoginBodyForm from '../components/auth/login-form/LoginBodyForm.vue';
import FormHeader from '../components/auth/forms-shared/FormHeader.vue';
import FormFooter from '../components/auth/forms-shared/FormFooter.vue';
import AuthLayout from '../layouts/AuthLayout.vue';
</script>
  
  <style>
</style>