<template>
    <div>
        <div class="day-bar">
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
        </div>
        <div class="main-container">
            <div v-for="week in weeks" class="calender-week">
                <calender-day v-for="day in week" :day="day"></calender-day>
            </div>
        </div>
    </div>
</template>

<script>
    import calenderDay from './components/calender-day.vue'

    export default {
        data() {
            return {
                year: '2020',
                month: '9'
            }
        },
        components: {
            calenderDay
        },
        computed: {
            days() {
                let days = [];
                let currentDay = this.$moment(`${this.year}-${this.month}-1`, 'YYYY-MM-DD');
                while (String((currentDay.month() + 1)) === this.month) {
                    days.push(currentDay);
                    currentDay = this.$moment(currentDay).add(1, 'days');
                }
                return days
            },
            weeks() {
                let week = [];
                let weeks = [];
                for (let day of this.days) {
                    week.push(day);
                    if (week.length === 7) {
                        weeks.push(week);
                        week = []
                    }
                }
                return weeks;
            }
        }
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
    .day-bar{
        display: flex;
        justify-content: space-around;
        font-size: 20px;
        font-weight: bold;
        color: var(--pickled-bluewood);
    }
    .main-container {
        width: 100%;
        border-bottom: solid 1px var(--alto);
        border-right: solid 1px var(--alto);
    }

    .calender-week {
        display: flex;
        justify-content: flex-start;
    }
</style>