<template>
  <section class="datepicker">
    <font-awesome-icon
      icon="fa-regular fa-calendar-days"
      @click="active = !active"
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
            <tr>
              <td
                v-for="(item, idx) of firstWeek"
                :key="idx"
                :class="item.styleClass ?? ''"
              >
                {{ item.value }}
              </td>
            </tr>
            <tr>
              <td v-for="(number, idx) of secondWeek" :key="idx">
                {{ number }}
              </td>
            </tr>
            <tr>
              <td v-for="(number, idx) of thirdWeek" :key="idx">
                {{ number }}
              </td>
            </tr>
            <tr>
              <td v-for="(number, idx) of fourdWeek" :key="idx">
                {{ number }}
              </td>
            </tr>
            <tr>
              <td v-for="(number, idx) of fifthWeek" :key="idx">
                {{ number }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let active = ref(false);

const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

const firstWeek = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    styleClass: 'today',
    value: 5,
  },
  {
    value: 6,
  },
  {
    value: 7,
  },
];

const secondWeek = [8, 9, 10, 11, 12, 13, 14];

const thirdWeek = [15, 16, 17, 18, 19, 20, 21];

const fourdWeek = [22, 23, 24, 25, 26, 27, 28];

const fifthWeek = [29, 30];
</script>

<style lang="scss" scoped>
.datepicker {
  position: relative;
}

.datepicker-wrapper {
  width: 100%;
  max-width: 300px;
  position: absolute;
  bottom: 20px;
  left: 15px;
  border-radius: 8px;
  border: 2px solid #2b2b2e;
  background: #1d1d1e;
  padding: 24px;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.24);
  z-index: 1000;
  transition: all 0.3s ease;
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
  border: 1px solid #363638;
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
  color: var(--neutral-blue-black-10, #fdfdfd);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;

  &:hover {
    border-radius: 30%;
    background: #3596fe;
    box-shadow: 0px 4px 24px 0px rgba(53, 150, 254, 0.48);
  }
}

.today {
  border-radius: 30%;
  background: #3596fe;
  box-shadow: 0px 4px 24px 0px rgba(53, 150, 254, 0.48);
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
