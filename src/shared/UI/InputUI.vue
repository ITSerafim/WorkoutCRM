<template>
  <div class="field">
    <div class="control">
      <input type="text" class="input-text" placeholder=" " />
      <label>First Name</label>
    </div>
  </div>
</template>


<style>
.field {
  position: relative;
  margin-top: 20px;
}

input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  top: -13px;
  font-size: 12px;
  background-color: transparent;
}

label {
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 2px;
  transition: 0.2s ease all;
  font-size: 15px;
}
</style>