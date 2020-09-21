<template>
    <div class="main">
        <div>
            {{formattedDate}}
        </div>
        <div class="btn">
            <button @click="dec">-</button>
            <button @click="inc">+</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            inc() {
                if(this.month===12) {
                    this.$store.commit('setCurrentMonth', 1);
                    this.$store.commit('setCurrentYear', this.year + 1);
                }
                else
                    this.$store.commit('setCurrentMonth', this.month + 1)
                this.$store.commit("toggleFormEvent",false);

            },
            dec() {
                if(this.month===1) {
                    this.$store.commit('setCurrentMonth', 12);
                    this.$store.commit('setCurrentYear', this.year - 1 );
                }
                else
                    this.$store.commit('setCurrentMonth', this.month - 1)
                this.$store.commit("toggleFormEvent",false);
            }
        },
        computed: {
            formattedDate() {
                return this.$moment(`${this.year}-${this.month}-1`, "YYYY-MM-DD").format('MMMM YYYY')
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
    .main {
        font-size: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn {
        margin-left: 10px;
        margin-bottom: 10px;
        float: right;
    }
    .btn button{
        font-size: 18px;
        color: var(--pickled-bluewood);
        outline: none;
    }
    .btn button:hover{
        background-color: #35495e;
        color: white;
    }
    .btn button:active{
        transform: scale(0.95);
        border: none;
    }
</style>