import { reactive } from 'vue';

export const store = reactive({
    results: [],
    //salvo url delll api per la chiamata
    apiUrl: 'https://rickandmortyapi.com/api/character',
    info: {}
});

// ES6 MODULES JavaScript