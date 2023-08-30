<template>
    <nav>
        <div class="navbar">
            <div class="navbar-top">
                <div class="navbar-top-logo">
                    <img src="../assets/image/logo.png" alt="">
                    <h3>Dashboard</h3>
                </div>
                <p>Main menu</p>
                <div class="navbar-top-links">
                    <router-link to="/">
                        <HomeOutline />
                        <span>Invoices</span>
                    </router-link>
                    <router-link class="active" to="/">
                        <DocumentTextOutline />
                        <span>Invoices</span>
                    </router-link>
                    <router-link to="/">
                        <DocumentTextOutline />
                        <span>Invoices</span>
                    </router-link>
                </div>
            </div>
            <div class="navbar-bottom">
                <p>Preferences</p>
                <div class="navbar-bottom-links">
                    <router-link class="link" to="/">
                        <SettingsOutline />
                        <span>Sozlamalar</span>
                    </router-link>
                    <router-link @click="LogOut()" class="link" to="/login">
                        <Login />
                        <span>Chiqish</span>
                    </router-link>
                </div>
            </div>
        </div>
        <ToastAlert />
    </nav>
</template>

<script setup>
import {
    HomeOutline,
    SettingsOutline,
    DocumentTextOutline,
} from '@vicons/ionicons5'
import {
    Login,
} from '@vicons/tabler'

function LogOut() {
    localStorage.removeItem('userData');
}
</script>