<script>
import { store } from '../store';

export default {
    name: 'CardFound',
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div class="contenuto" v-if="store.info.count !== undefined"><strong>Found {{ store.info.count }} characters</strong>
    </div>
</template>

<style></style>