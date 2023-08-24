<template>
  <Transition name="modal">
    <section v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>

        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>
      </div>
    </section>
  </Transition>
</template>

<script setup lang="ts">
interface ModalProps {
  show: boolean;
}

defineProps<ModalProps>();
</script>
