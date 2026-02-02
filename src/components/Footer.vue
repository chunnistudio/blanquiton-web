<script setup>
import { ref } from 'vue'

</script>

<template>
    <footer>
        <div class="center-flexbox">
            <p>
                Logo por <a href="https://x.com/Gishimonn" target="_blank">Gishi 🦎</a> - Web por <a href="https://x.com/HarpuiaVT" target="_blank">Harpuia 🐸</a>
            </p>
        </div>
    </footer>
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
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    footer {
        padding-bottom: 30px;
    }
</style>