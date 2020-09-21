<template>
    <div>
        <header class="header">
            <div class="h1">
                <h1>Vue.js calender</h1>
            </div>
            <div>
                <month-info></month-info>
            </div>
        </header>
        <div class="day-bar">
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
        </div>
        <calender-month></calender-month>
        <event-form></event-form>
    </div>
</template>

<script>
    import calenderMonth from './components/calender-month.vue'
    import monthInfo from "./components/monthInfo.vue";
    import eventForm from './components/event-form.vue'

    export default {
        components: {
            calenderMonth,
            monthInfo,
            eventForm
        },
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }

    :root {
        --dusty-gray: #999;
        --gallery: #eeeeee;
        --alto: #ddd;
        --bittersweet: #ff6f69;
        --buttermilk: rgba(255, 238, 173, 0.4);
        --vista-blue: #42b983;
        --pink: rgba(255, 182, 193, 0.3);
        --pickled-bluewood: #35495e;
    }

    body {
        background-color: #e2dede;
        padding-left: 1%;
        padding-right: 1%;
        padding-bottom: 1%;
    }

    .header {
        color: var(--pickled-bluewood);
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 0 auto;
    }

    .h1 {
        font-size: 25px;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 1rem 0;
    }

    .day-bar {
        display: flex;
        width: 90%;
        margin: 0 auto;
        justify-content: space-around;
        font-size: 20px;
        font-weight: bold;
        color: var(--pickled-bluewood);
    }
</style>