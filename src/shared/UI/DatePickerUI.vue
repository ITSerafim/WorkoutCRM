<template>
  <section class="datepicker" @click="active = !active">
    <font-awesome-icon
      icon="fa-regular fa-calendar-days"
      class="datepicker-toggle-btn"
    />
    <Transition name="datepicker">
      <div v-if="active" class="datepicker-wrapper">
        <div class="datepicker-hr">
          <div class="datepicker-header">
            <p>Январь 2022</p>
            <span class="datepicker-chevrons">
              <font-awesome-icon icon="fa-solid fa-chevron-left" />
              <font-awesome-icon icon="fa-solid fa-chevron-right" />
            </span>
          </div>
        </div>
        <table class="datepicker-table">
          <thead>
            <tr>
              <th v-for="(day, idx) of days" :key="idx">
                {{ day }}
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="cal of calendar">
              <tr v-for="(weaks, idx) of getWeeks(cal.days)" :key="idx">
                <td
                  v-for="(day, idx) of weaks"
                  :key="idx"
                  :class="day === toDay() && 'today'"
                >
                  {{ day }}
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { range } from '../utils/range';
import { chunk } from '../utils/chunk';
import { toDay } from '../utils/date';

let active = ref(false);

interface Calendar {
  month: string;
  days: number;
}

const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

const calendar: Calendar[] = [{ month: 'Январь', days: 32 }];

function getWeeks(days: number): number[][] {
  return chunk(range(1, days), 7);
}
</script>

<style lang="scss" scoped>
@import 'src/styles/common/colors';

.datepicker {
  display: inline-block;
  position: relative;
  border-radius: 8px;
  background: $bg-primary;
  color: $text-primary;
  padding: 20px;
  &:active {
    filter: drop-shadow(0px 4px 24px $shadow-primary);
  }
}

.datepicker-toggle-btn {
  width: 24px;
  height: 24px;
}

.datepicker-wrapper {
  position: absolute;
  width: 100%;
  min-width: 310px;
  border-radius: 8px;
  bottom: 5rem;
  left: 0;
  border: 2px solid #2b2b2e;
  background: $bg-second;
  padding: 24px;
  box-shadow: 0px 4px 24px 0px $shadow-second;
  z-index: 1000;
  transition: all 0.3s ease;
  &:active {
    filter: none;
  }
}

.datepicker-header,
.datepicker-chevrons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
}

.datepicker-header p {
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.14px;
}

.datepicker-hr::after {
  display: flex;
  width: 100%;
  content: '';
  border: 1px solid $border-primary;
  opacity: 0.5;
}

.datepicker-table {
  width: 100%;
  table-layout: fixed;
}

.datepicker-table th {
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  padding: 20px 0;
}

.datepicker-table td {
  text-align: center;
  padding: 15px;
  color: var(--neutral-blue-black-10, $text-addit);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;

  &:hover {
    border-radius: 30%;
    background: $bg-primary;
    box-shadow: 0px 4px 24px 0px $shadow-primary;
  }
}

.today {
  border-radius: 30%;
  background: $bg-primary;
  box-shadow: 0px 4px 24px 0px $shadow-primary;
}

.datepicker-enter-from {
  opacity: 0;
}

.datepicker-leave-to {
  opacity: 0;
}

.datepicker-enter-from .datepicker-container,
.datepicker-leave-to .datepicker-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
