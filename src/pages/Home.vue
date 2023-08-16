<script setup>
import { onMounted, ref } from "vue";
import MealList from "../components/MealList.vue";
import Loader from "../components/layout/Loader.vue";
import { getRandomMeals, getMealsByName } from "../utils/meal";
import MealSearchBox from "../components/MealSearchBox.vue";

const meals = ref([]);
const isLoading = ref(false);
const mealsCount = 10;

const searchMeals = async (name) => {
  if (name) {
    isLoading.value = true;
    const { meals: mealsData } = await getMealsByName(name);
    if (mealsData) {
      meals.value = mealsData;
    } else {
      meals.value = [];
    }
    isLoading.value = false;
  }

};

onMounted(async () => {
  document.title = "VRecipe-Home"
  isLoading.value = true;
  for (let i = 1; i <= mealsCount; i++) {
    const { meals: mealsData } = await getRandomMeals();
    meals.value.push(mealsData[0]);
  }
  isLoading.value = false;
});
</script>

<template>
  <div class="container">
    <MealSearchBox @search-input="searchMeals"></MealSearchBox>
    <MealList v-if="!isLoading" :meals="meals"></MealList>
    <Loader v-else></Loader>
  </div>
</template>
