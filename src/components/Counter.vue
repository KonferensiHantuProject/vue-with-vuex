<template>
  <div>
    <h1>Penghitung dengn Vuex</h1>
    <h1 class="counter">{{ counter }}</h1>

    <!-- Button Minus-->
    <button>-</button>

    <!-- Input -->
    <input type="number" v-model="value">

    <!-- Button Plus-->
    <button>+</button>

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            value: 1,
        }
    },
    computed: {
        ...mapState(["counter"])
    }
}
</script>

<style>
    .counter{
        font-size: 5rem;
    }

    button{
        border-radius: 100%;
        border: none;
        width: 2rem;
        height: 2rem;
        font-weight: 700;
        cursor: pointer;
    }

    input{
        padding: 0.4rem;
        margin: 0 0.5rem;
        text-align: center;
    }
</style>