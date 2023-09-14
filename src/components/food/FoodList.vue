<template>
  <section class="list">
    <FoodCard
      v-for="(card, idx) in cards"
      :key="idx"
      :title="card.title"
      :type="card.type"
      :sport-kind="card.sportKind"
    />
  </section>
</template>

<script setup lang="ts">
import FoodCard from './FoodCard.vue';

interface Card {
  title: string;
  type: string;
  sportKind: string;
}

const cards: Card[] = [
  {
    title: 'Название плана',
    type: 'Для похудения',
    sportKind: 'Фитнес',
  },
  {
    title: 'Название плана',
    type: 'Для похудения',
    sportKind: 'Фитнес',
  },
  {
    title: 'Название плана',
    type: 'Для похудения',
    sportKind: 'Фитнес',
  },
  {
    title: 'Название плана',
    type: 'Для похудения',
    sportKind: 'Фитнес',
  },
];
</script>
