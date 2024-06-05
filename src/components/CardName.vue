<script >
import { store } from '../store';
export default {
    name: 'CardName',
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div class="col-25" v-for="card in store.results">
        <div class="contenuto">
            <img :src="card.image" :alt="foto">
            <div class="name">{{ card.name }}</div>
            <div>{{ card.status }}</div>
            <div>{{ card.species }}</div>
        </div>
    </div>
</template>

<style scoped>
img {
    height: 200px;
    width: 200px;
    background-color: blue;
    border-radius: 50%;
}
</style>