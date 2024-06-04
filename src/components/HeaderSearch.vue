<script>
export default {
    name: 'HeaderSearch',
};
</script>

<template>
    <div class="contenuto">
        <div class="d-flex">
            <input type="text" placeholder="cerca un personaggio">
            <select>
                <option value="1">alive</option>
                <option value="2">dead</option>
                <option value="3">unknown</option>
            </select>
            <button class="bottone cerca">Cerca</button>
            <button class="bottone reset">Reset</button>
        </div>
    </div>
</template>

<style></style>