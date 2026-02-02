<script setup>
import { ref } from 'vue'
import blanquitovideo from '../assets/blanquito-intro.mp4';
import kofi from '../assets/kofi_logo.png';
</script>

<template>
    <div class="center-flexbox">
        <p class="text">
            Conoce a Blanquito, el perro de nuestro querido amigo <a href="https://x.com/gikkopun" target="_blank">Gikko</a>.
            Lamentablemente, por una mala maniobra de Blanquito, este sufrió un accidente el cual requirió de una cirugía de emergencia en su patita (╥﹏╥). 
            Afortunadamente Blanquito ya se encuentra bien y recuperandose ( ˶ˆᗜˆ˵ ), pero esto ha significa un importante gasto para nuestro amigo.
        </p>
        <video class="video" controls>
            <source :src="blanquitovideo" type="video/mp4">
        </video>
    </div>  
    <h2 class="crayon-font title-h2-center">¿Como ayudar?</h2>

    <div class="center-flexbox">
        <img class="img-size":src="kofi.src" alt="Logo Ko-fi"/>
        <p class="text">
            Puedes hacerlo mediante el <a href="https://ko-fi.com/gikkopun" target="_blank">Ko-fi de Gikko</a> o suscribiendote durante la maratón que se hará. 
            Todo el dinero recaudado será para que Gikko pueda cubrir los gastos inesperados en los que ha tenido que incurrir por Blanquito.
        </p>

    </div>

    <h2 class="crayon-font title-h2-center">Calendario</h2>

    <div class="center-flexbox">

        <p class="text2">
            ¡Próximante!
        </p>

    </div>
</template>

<style scoped>
    h2 {
        font-size: 50px;
    }
    .crayon-font {
        font-family: "DkCoolCrayon-xJyV", sans-serif;
    }

    .title-h2-center {
        text-align: center;
    }

    .main-title {
        font-size: 150px;
        margin-top: 0;
        margin-bottom: 0;
    }

    .img-size {
        width: 50%;
    }

    .center-flexbox {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;  
        max-width: 50%;
        margin: 0 auto;
        margin-bottom: 200px;
    }

    .text {
        flex: 1;               
        text-align: left;
    }

    .text2 {
        flex: 1;               
        text-align: center;
        font-size: 30px;
    }

    .video {
        flex: 1;                
        max-width: 500px;       
    }
</style>