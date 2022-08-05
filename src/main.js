import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        // Menambah angka di input ke counter
        addToCounter(state, payload) {
            state.counter = state.counter + payload;
        },

        // Mengurangi angka pada counter
        substractFromCounter(state, payload) {
            state.counter = state.counter - payload;
        },
    },
    actions: {
        async addRandomNumber(context) {
            // Membuat request via axios
            let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new")

            // Menggunakan commit bisa memanggil mutation
            context.commit("addToCounter", data.data)
        }
    }
})

const app = createApp(App)

app.use(store)

app.mount('#app')
