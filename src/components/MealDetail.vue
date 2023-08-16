<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { getMealById } from "../utils/meal";
import Loader from "./layout/Loader.vue";
import MealAccordianItem from "./MealAccordianItem.vue";

const route = useRoute();
const router = useRouter();

const ID = route.params.id;
const meal = ref(null);
const isLoading = ref(false);
const youtubeUrl = ref(null);

const mealIngredients = computed(() => {
  let ingredients = "";
  for (const key in meal.value) {
    if (key.startsWith("strIngredient") && meal.value[key]) {
      ingredients += `<span
                  class="badge"
                  >${meal.value[key]}</span
                >`;
    }
  }
  return ingredients;
});

onMounted(async () => {
  isLoading.value = true;
  const { meals: data } = await getMealById(ID);
  if (data && data.length > 0) {
    meal.value = data[0];
    if (meal.value.strYoutube) {
      youtubeUrl.value = `https://www.youtube-nocookie.com/embed/${new URL(
        meal.value.strYoutube
      ).searchParams.get("v")}`;
    }
    document.title = `${meal.value.strMeal}`;
  }
  isLoading.value = false;
});
</script>

<template>
  <div class="container" v-if="!isLoading && meal">
    <div class="card mt-4">
      <div class="row">
        <div class="col">
          <button
            class="btn btn-outline-dark m-4 btn-lg"
            @click="router.back()"
          >
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </button>
        </div>
      </div>

      <h2 class="card-title p-4">{{ meal.strMeal }}</h2>
      <div class="card-body">
        <a
          v-if="meal.strSource"
          :href="meal.strSource"
          target="_blank"
          class="card-link"
          >Recipe Source</a
        >
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <MealAccordianItem
            :id="ID"
            title="Instructions"
            :category="meal.strCategory"
            :tags="meal.strTags"
            :instructions="meal.strInstructions"
            :is-open="true"
          ></MealAccordianItem>
          <MealAccordianItem
            :id="`${ID}-ingredients`"
            title="Ingredients"
            :instructions="mealIngredients"
            class="meal-ingredients"
          ></MealAccordianItem>
        </div>
        <iframe
          class="mt-4"
          width="100%"
          height="500"
          :src="youtubeUrl"
          v-if="youtubeUrl"
        ></iframe>
        <div class="meal-image" v-if="!youtubeUrl && meal.strMealThumb">
          <img class="img-fluid" :src="meal.strMealThumb" :alt="meal.strMeal" />
        </div>
      </div>
    </div>
  </div>
  <Loader v-else></Loader>
</template>

<style scoped>
.meal-image {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}
.card-title {
  color: #0c356a;
}
</style>
