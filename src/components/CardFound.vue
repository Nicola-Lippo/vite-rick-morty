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
    <div v-if="store.info.count !== undefined">Found {{ store.info.count }} characters</div>
</template>

<style></style>