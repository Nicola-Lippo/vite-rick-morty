<script >
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';

export default {
    name: 'MyApp',
    components: {
        AppHeader,
        AppMain
    },
    //richiamo il componente api dentro data
    data() {
        return {
            store,
        }
    },
    //chiamata api 
    created() {
        console.log('chiamata api esercizio');
        axios.get(this.store.apiUrl).then((response) => {
            this.store.results = response.data.results;
            this.store.info = response.data.info;
            console.log(response.data);
        });
    },
};
</script>

<template>
    <AppHeader />
    <AppMain />
</template>

<style></style>
