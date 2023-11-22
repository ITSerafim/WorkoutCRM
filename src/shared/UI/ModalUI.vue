<template>
  <Transition name="modal">
    <section v-if="show" class="modal-mask" @click="$emit('close')">
      <div class="modal-container" @click.stop="">
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

defineEmits(['close']);
</script>
