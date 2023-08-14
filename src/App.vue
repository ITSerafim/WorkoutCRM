<template>
  <AuthLayout>
    <section class="form">
      <section>
        <LoginHeaderForm />
        <LoginBodyForm />
      </section>
      <LoginFooterForm />
    </section>
  </AuthLayout>
</template>

<script setup lang="ts">
import LoginBodyForm from './components/auth/login-form/LoginBodyForm.vue';
import LoginHeaderForm from './components/auth/login-form/LoginHeaderForm.vue';
import LoginFooterForm from './components/auth/login-form/LoginFooterForm.vue';
import AuthLayout from './layouts/AuthLayout.vue';
</script>

<style>
</style>