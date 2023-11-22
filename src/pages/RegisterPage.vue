<template>
  <AuthLayout image="register.png">
    <FormHeader title="Регистрация" />
    <BaseForm
      form-styles="flex flex-col gap-25"
      :config="config"
      @submit="$emit('event', getValues())"
    />
    <FormFooter
      message="Есть аккаунт"
      path="login"
      link-name="Авторизоваться"
    />
  </AuthLayout>
</template>

<script setup lang="ts">
import FormHeader from '../components/auth/forms-shared/FormHeader.vue';
import FormFooter from '../components/auth/forms-shared/FormFooter.vue';
import AuthLayout from '../layouts/AuthLayout.vue';
import { FormGroup } from '../shared/types/base-form/FormGroup';
import BaseForm from '../shared/components/base-form/BaseForm.vue';

defineEmits(['event']);

const config: FormGroup[] = [
  {
    id: 1,
    styles: 'flex flex-col gap-15 mb',
    controls: [
      {
        control: 'inputText',
        name: 'name',
        label: 'Кто вы ?',
        value: '',
      },
      {
        control: 'radioButtonGroup',
        name: 'radio',
        label: '',
        radioGroup: [
          {
            label: 'Спортсмен',
            name: 'sportsmen',
            value: 'sportsmen',
          },
          {
            label: 'Тренер',
            name: 'couch',
            value: 'couch',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    styles: 'flex flex-col gap-15',
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
    id: 3,
    styles: 'flex ai-center jc-space mb-30',
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
    id: 4,
    styles: 'w-100 flex flex-col gap-10 mb-60',
    controls: [
      {
        control: 'button',
        name: 'submit',
        label: 'Зарегистрироваться',
        controlStyles: 'login',
      },
      {
        control: 'button',
        name: 'submit',
        label: 'Войти с помощью Google',
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

