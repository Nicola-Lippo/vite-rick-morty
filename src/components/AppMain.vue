<script >
import CardName from '../components/CardName.vue';
import CardFound from '../components/CardFound.vue';

export default {
    name: 'AppMain',
    components: {
        CardName,
        CardFound
    },
};
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-25">
                <CardName />
            </div>
        </div>
        <CardFound />
    </div>
</template>

<style></style>
