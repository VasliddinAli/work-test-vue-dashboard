<template>
    <section>
        <div class="login">
            <div class="login-left">
                <img src="../assets/image/logo.png" alt="">
                <p>Lorem ipsum dolor sit amet consectetur. Pretium aliquet ac molestie lacus. Faucibus arcu aliquam
                    nullam nunc dictumst.</p>
            </div>
            <div class="login-right">
                <h3>Tizimga kirish</h3>
                <form>
                    <div>
                        <label for="login">Login</label>
                        <input v-model="login" type="search" id="login" required>
                    </div>
                    <div>
                        <label for="password">Parol</label>
                        <input v-model="password" type="password" id="password" required>
                    </div>
                    <div>
                        <button @click="Login()" type="submit" class="btn">Kirish</button>
                    </div>
                </form>
                <router-link to="/register">Ro'yhatdan o'tish</router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            login: null,
            password: null,
        }
    },
    created() {
        let user = localStorage.getItem('userData')
        if (user != null) {
            this.$router.push({ name: 'dashboard' })
        }
    },
    methods: {
        Login() {
            localStorage.setItem('userData', 123)
            this.$router.push({ name: 'dashboard' })
        }
    }
}
</script>