<script setup>
defineProps({
  id: String,
  title: String,
  category: String,
  tags: String,
  instructions: String,
  isOpen: {
    type: Boolean,
    default: false,
  },
  class: String,
});
</script>

<template>
  <div class="accordion-item" :class="class">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#panelsStayOpen-${id}`"
        :aria-expanded="isOpen"
        :aria-controls="`panelsStayOpen-${id}`"
      >
        {{ title }}
      </button>
    </h2>
    <div
      :id="`panelsStayOpen-${id}`"
      class="accordion-collapse collapse"
      :class="isOpen ? 'show' : ''"
    >
      <div class="accordion-body">
        <div class="other-info mb-4">
          <h5 v-if="category">Category: {{ category }}</h5>
          <h5 v-if="tags">Tags: {{ tags }}</h5>
        </div>
        <div class="instructions" v-html="instructions"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.accordion-item {
  margin-top: 10px;
}

.accordion-button:not(.collapsed) {
  background-color: #0c356a;
  color: white;
  font-size: large;
  font: bold;
}
.accordion-button:is(.collapsed) {
  background-color: #0c356a;
  color: white;
  font-size: large;
  font: bold;
}

.accordion-button::after {
  color: white;
  background-color: white;
  border-radius: 40%;
}

.instructions {
  white-space: pre-wrap;
}

.meal-ingredients .accordion-body {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
