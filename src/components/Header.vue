<script setup>
import { ref } from 'vue'
import Blanquiton from "../assets/Blanquiton.gif";
</script>

<template>
    <div class="center-flexbox">
        <img :src="Blanquiton.src" alt="Hola que onda"/>
        <h1 class="crayon-font main-title">Blanquiton</h1>
        <h3>A partir del 9 de Febrero</h3>
    </div>
</template>

<style scoped>
    .crayon-font {
        font-family: "DkCoolCrayon-xJyV", sans-serif;
    }

    .main-title {
        font-size: 150px;
        margin-top: 0;
        margin-bottom: 0;
    }

    .center-flexbox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>