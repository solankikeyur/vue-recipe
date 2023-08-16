<script setup>
defineProps({
  name: String,
  image: String,
  source: String,
  youtube: String,
});
</script>

<template>
  <div class="card">
    <img :src="image" class="card-img-top" :alt="name" />
    <div class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <!-- <a v-if="source" :href="source" target="_blank" class="card-link badge source-badge">Source</a> -->
      <!-- <a v-if="youtube" :href="youtube" target="_blank" class="card-link badge yt-badge">Watch Video</a> -->
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #D5FFD0;
  text-align: center;
  box-shadow: 0 2px 8px rgba(14, 21, 47, 0.25);
}
.card .card-body .card-title {
  color: #0C356A!important;
}
.source-badge {
  background-color: #279EFF;
  
}

.yt-badge {
  background-color: #CD201F;
}

.badge {
  padding: 10px;
  text-decoration: none;
  font-size: 15px;
}

</style>