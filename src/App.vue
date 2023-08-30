<template>
  <router-view />
  <Style />
</template>

<script>
import Style from './assets/style/style.css'
export default {
  components: {
    Style
  },
  created() {
    let user = localStorage.getItem('userData')
    if (user == null) {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>