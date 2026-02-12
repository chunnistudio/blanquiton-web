<script setup>
    defineProps({ fecha: { type: String, required: true }, actividad: { type: String, required: true } })
</script>

<template>
    <div class="calendar-container">
        <p>{{ fecha }}</p>
        <h1>{{ actividad }}</h1>
    </div>
</template>

<style scoped>
    .calendar-container {
        background-color: rgba(127, 242, 222, 0.7);
        box-shadow: 10px 10px 5px lightblue;
        padding: 5px;
    }

    .calendar-container h1 {
        color: #2135cb;
        font-size: 20px;
        font-weight: bold;
    }

    .calendar-container p {
        color: white;
        -webkit-text-stroke: 3px #f99483;
        font-size: 40px;
        font-weight: bolder;
    }
</style>