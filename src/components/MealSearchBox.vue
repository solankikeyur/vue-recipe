<script setup>
import { ref, watch } from "vue";
import debounce from 'lodash.debounce'

const emit = defineEmits(["searchInput"]);
const search = ref();

watch(search, debounce(() => {
    emit("searchInput", search.value);
}, 500))

</script>
<template>
    <div class="row m-4">
        <div class="col-12">
            <input type="text" v-model="search"  placeholder="Search By Name" class="form-control form-control-lg" >
        </div>
    </div>
</template>