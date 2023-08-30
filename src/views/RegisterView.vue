<template>
    <section>
        <div class="login">
            <div class="login-left">
                <img src="../assets/image/logo.png" alt="">
                <p>Lorem ipsum dolor sit amet consectetur. Pretium aliquet ac molestie lacus. Faucibus arcu aliquam
                    nullam nunc dictumst.</p>
            </div>
            <div class="login-right">
                <h3>Ro'yhatdan o'tish</h3>
                <form>
                    <div>
                        <label for="IVV">IVV</label>
                        <input v-model="iiv" type="text" id="IVV" required>
                    </div>
                    <div>
                        <label for="VIIB Boshqarmasi">VIIB Boshqarmasi</label>
                        <input v-model="viib" type="text" id="VIIB Boshqarmasi" required>
                    </div>
                    <div>
                        <label for="Tuman_bolimi">Tuman IIBo’lim</label>
                        <input v-model="tuman_bolimi" type="text" id="Tuman_bolimi" required>
                    </div>
                    <div>
                        <label for="login">Login</label>
                        <input v-model="login" type="text" id="login" required>
                    </div>
                    <div>
                        <label for="password">Parol</label>
                        <input v-model="password" type="password" id="password" required>
                    </div>
                    <div>
                        <button @click="Register()" type="submit" class="btn">Ro'yhatdan o'tish</button>
                    </div>
                </form>
                <router-link to="/login">Kirish</router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            iiv: null,
            viib: null,
            tuman_bolimi: null,
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
        Register() {
            localStorage.setItem('userData', 123)
            this.$router.push({ name: 'dashboard' })
        }
    }
}
</script>