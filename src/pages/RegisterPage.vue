<template>
  <AuthLayout image="register.png">
    <section class="form">
      <section>
        <FormHeader title="Регистрация" />
        <RegisterForm/>
      </section>
      <FormFooter
        message="Есть аккаунт"
        path="login"
        link-name="Авторизоваться"
      />
    </section>
  </AuthLayout>
</template>
    
<script setup lang="ts">
import RegisterForm from '../components/auth/register-form/RegisterForm.vue';
import FormHeader from '../components/auth/forms-shared/FormHeader.vue';
import FormFooter from '../components/auth/forms-shared/FormFooter.vue';
import AuthLayout from '../layouts/AuthLayout.vue';
</script>
    