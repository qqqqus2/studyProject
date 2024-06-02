<template>
    <div id="wrap" ref="refWrap">
        <section class="kidi-wrap">
            <div id="container">
                <slot />
            </div>
        </section>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";

// 웹버전 페이지 로케이션
const route = useRoute();
</script>
