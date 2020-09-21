<template>
    <div class="main-container">
        <div v-for="week in weeks" class="calender-week">
            <calender-day v-for="day in week" :day="day"></calender-day>
        </div>
    </div>
</template>

<script>
    import calenderDay from './calender-day.vue'
    export default {
        components: {
            calenderDay
        },
        computed: {
            days() {
                let days = [];
                let currentDay = this.$moment(`${this.year}-${this.month}-`, 'YYYY-M-D');
                do{
                    days.push(currentDay);
                    currentDay = this.$moment(currentDay).add(1, 'days');
                }
                while ((currentDay.month() + 1) === this.month)


                // Add previous days to start
                currentDay = this.$moment(days[0]);
                const SUNDAY = 0;
                const MONDAY = 1;
                if (currentDay.day() !== MONDAY) {
                    do {
                        currentDay = this.$moment(currentDay).subtract(1, 'days');
                        days.unshift(currentDay);
                    } while(currentDay.day() !== MONDAY);
                }
                // Add following days to end
                currentDay = this.$moment(days[days.length - 1]);
                if (currentDay.day() !== SUNDAY) {
                    do {
                        currentDay = this.$moment(currentDay).add(1, 'days');
                        days.push(currentDay);
                    } while(currentDay.day() !== SUNDAY);
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
            },
            month() {
                return this.$store.state.currentMonth
            },
            year() {
                return this.$store.state.currentYear
            }
        }
    }
</script>

<style scoped>
    .main-container {
        width: 90%;
        margin:0 auto;
        border-bottom: solid 1px var(--alto);
        border-right: solid 1px var(--alto);
        background-color: var(--gallery)
    }

    .calender-week {
        display: flex;
        justify-content: flex-start;
    }
</style>