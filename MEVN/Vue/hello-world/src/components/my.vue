<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
  name: {
    type:String,
    required:false,
  }
});
</script>

<template>
  <div class="comp">
    <h1>Hello to the world! varun </h1>
  </div>
</template>

<style>
.comp {
  background-color: rgb(162, 158, 164);
  padding: 20px;
}

h1 {
  font-size: 36px;
  color: #333333;
}
</style>