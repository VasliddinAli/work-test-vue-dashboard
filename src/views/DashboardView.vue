<template>
    <section>
        <div>
            <NavbarVertical />
        </div>
        <div>
            <NavbarHorizontal />
            <div class="main">
                <div class="chart">
                    <Bar :data="chartData" />
                </div>
                <div class="history">
                    <div class="history-top">
                        <p>Transaction History</p>
                        <CalendarMenu class="calendar" v-model="date" />
                    </div>
                    <div class="table">
                        <DataTable :value="products">
                            <ColumnMenu field="transactions" header="Transactions">
                                <template #body="{ data }">
                                    <div class="flex align-items-center gap-2">
                                        <img src="../assets/image/user.png" style="width: 32px" />
                                        <span>{{ data.transactions }}</span>
                                    </div>
                                </template>
                            </ColumnMenu>
                            <ColumnMenu field="date" header="Date"></ColumnMenu>
                            <ColumnMenu field="amount" header="Amount"></ColumnMenu>
                            <ColumnMenu field="status" header="Status"></ColumnMenu>
                        </DataTable>
                    </div>
                </div>
                <div class="income">
                    <div class="income_basic">
                        <div>
                            <p>Total Income</p>
                            <ArrowUp style="color: #14D934;" class="icon" />
                        </div>
                        <div>
                            <h3>$50,530.00</h3>
                            <p>( USD )</p>
                        </div>
                        <p class="increase"><span style="color: #14D934;">20%</span> increase compared to last week</p>
                    </div>
                    <p class="line"></p>
                    <div class="income_basic">
                        <div>
                            <p>Total Expense</p>
                            <ArrowDown style="color: #FF4D4F;" class="icon" />
                        </div>
                        <div>
                            <h3>$19,760.00</h3>
                            <p>( USD )</p>
                        </div>
                        <p class="increase"><span style="color: #FF4D4F;">10%</span> decrease compared to last week</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import NavbarHorizontal from '@/components/NavbarHorizontal.vue';
import NavbarVertical from '../components/NavbarVertical.vue'

import {
    ArrowUp,
    ArrowDown
} from '@vicons/ionicons5';

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    components: {
        Bar,
        NavbarHorizontal,
        NavbarVertical,
        ArrowUp,
        ArrowDown,
    },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [{
                    label: 'Spending Statistics',
                    backgroundColor: '#4623E9',
                    data: [20, 50, 15, 70, 25, 40, 77, 100, 40, 77, 30, 60]
                }]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: true
            },
            date: '08/31/2023',
            products: [
                { transactions: 'Bank Transfer', date: 'Jan 01,2022', amount: '$2,000.00', status: 'Completed' },
                { transactions: 'Paypal Account', date: 'Jan 04,2022', amount: '$2,000.00', status: 'Pending' },
                { transactions: 'Bank Transfer', date: 'Jan 06,2022', amount: '$2,000.00', status: 'On Hold' },
            ]
        }
    }
}

</script>


<style scoped>
section {
    background-color: #F6F7F9;
    min-height: 100vh;
    display: flex;
    align-items: baseline;
    justify-content: baseline;
}
</style>