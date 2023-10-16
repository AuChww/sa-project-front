<template>
    <div class="page-transition">
        <nuxt />
    </div>
</template>
  
<style>
.page-transition-enter-active,
.page-transition-leave-active {
    transition: transform 0.5s;
}

.page-transition-enter,
.page-transition-leave-to

/* .page-transition-leave-active in <2.1.8 */
    {
    transform: translateY(50px);
}</style>
  