<template>
    <header>
        <div class="header">
            <div class="header-left">
                <BreadCrumb class="breadcrumb" :home="home" :model="items" />
            </div>
            <div class="header-right">
                <div class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText class="input" v-model="value1" placeholder="John Doe" />
                </div>
                <Alert16Regular class="alerts" />
                <div class="profile">
                    <p>Kruluz Utsman</p>
                    <img src="../assets/image/user.png" alt="">
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue";
import {
    Alert16Regular,
} from '@vicons/fluent'

const home = ref({
    icon: 'pi pi-home',
    to: '/',
});
const items = ref([
    { label: 'Document' },
]);
</script>