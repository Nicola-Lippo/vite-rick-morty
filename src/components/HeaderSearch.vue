<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'HeaderSearch',
    data() {
        return {
            store,
        };
    },
    methods: {
        getStatus() {
            axios.get(this.store.apiUrl).then((response) => {
                console.log(response);
            });
        },
    },
    created() {
        this.getStatus();
    },

};
</script>

<template>
    <div class="contenuto">
        <div class="d-flex">
            <input type="text" placeholder="cerca un personaggio">
            <select>
                <option value="1">seleziona uno stato</option>
                <option v-for="(stati, keyop) in store.stato" :key="keyop">{{ stati.status }}</option>
            </select>
            <button class="bottone cerca">Cerca</button>
            <button class="bottone reset">Reset</button>
        </div>
    </div>
</template>

<style></style>