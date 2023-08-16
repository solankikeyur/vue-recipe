<script setup>
import MealItem from "../components/MealItem.vue";
defineProps({
  meals: Array,
});
</script>

<template>
  <div
    class="row row-cols-1 row-cols-md-4 g-3 mt-4"
    v-if="meals && meals.length > 0"
  >
    <div class="col" v-for="meal in meals">
      <router-link :to="`/meal/${meal.idMeal}`" >
        <MealItem
          :key="meal.idMeal"
          :name="meal.strMeal"
          :image="meal.strMealThumb"
          :source="meal.strSource"
          :youtube="meal.strYoutube"
        ></MealItem>
      </router-link>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-12 g-4 mt-4" v-else>
    <div class="col">
      <h2 class="text-center">No recipe's found sorry.</h2>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>