<template>
  <div class="w-100 h-100 pa-5">
    <slot name="header"></slot>

    <div class="d-flex">
      <section class="d-flex flex-column mr-2">
        <slot name="info"></slot>
        <slot name="tier"></slot>
      </section>
      <section class="w-100 d-flex justify-center">
        <slot name="bulletin"></slot>
      </section>
    </div>

    <div></div>
  </div>
</template>
