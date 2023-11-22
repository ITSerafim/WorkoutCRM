<template>
  <div class="card-wrapper">
    <img src="/src/assets/food-template.png" alt="" class="card-img" />
    <div class="card-info">
      <h4 class="card-title card-text">{{ title }}</h4>
      <span class="card-type card-text">
        Тип: <span class="card-blue">{{ type }}</span>
      </span>
      <span class="card-kind card-text">
        Вид спорта: <span class="card-blue">{{ sportKind }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FoodCardProps } from '../../shared/types/props/FoodProps';

defineProps<FoodCardProps>();
</script>
