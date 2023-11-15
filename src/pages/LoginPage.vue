<template>
  <AuthLayout image="login.png">
    <section class="form">
      <section>
        <FormHeader title="Привет, давно не виделись!" />
        <BaseForm
          form-styles="flex flex-col gap-25"
          :config="config"
          @submit="$emit('event', getValues())"
        />
      </section>
    </section>
    <FormFooter
      message="Нет аккаунта ?"
      path="register"
      link-name="Зарегистрироваться"
    />
  </AuthLayout>
</template>

<script setup lang="ts">
import FormHeader from '../components/auth/forms-shared/FormHeader.vue';
import FormFooter from '../components/auth/forms-shared/FormFooter.vue';
import AuthLayout from '../layouts/AuthLayout.vue';
import BaseForm from '../shared/components/base-form/BaseForm.vue';
import { FormGroup } from '../shared/types/base-form/FormGroup';

defineEmits(['event']);

const config: FormGroup[] = [
  {
    id: 1,
    styles: 'flex flex-col gap-15 mb',
    controls: [
      {
        control: 'inputText',
        name: 'email',
        label: 'Email',
        value: '',
      },
      {
        control: 'inputText',
        name: 'password',
        label: 'Пароль',
        value: '',
      },
    ],
  },
  {
    id: 2,
    styles: 'flex ai-center jc-space mb-80',
    controls: [
      {
        control: 'checkbox',
        name: 'rememberMe',
        label: 'Запомнить меня',
        value: false,
      },
      {
        control: 'link',
        name: 'link',
        label: 'Забыли пароль ?',
        controlStyles: 'forget-pass',
        linkPath: '#',
      },
    ],
  },
  {
    id: 3,
    styles: 'w-100 flex flex-col gap-10',
    controls: [
      {
        control: 'button',
        name: 'submit',
        label: 'Войти',
        controlStyles: 'login',
      },
      {
        control: 'button',
        name: 'submit',
        label: 'Войти через Google',
        withIcon: true,
        iconName: 'google-icon.svg',
      },
    ],
  },
];

function getValues() {
  const values: any = {};
  config.forEach((fg) =>
    fg.controls.forEach((control) => {
      if (control.value) {
        values[control.name] = control.value;
      }
    }),
  );

  return values;
}
</script>
