<template>
    <div :class="{'event-form':true, active:close}" :style="{top:top, left:left} ">
        <h4>Add an event</h4>
        <button @click="closeForm">&#10005</button>
    </div>
</template>

<script>
    export default {
        computed: {
            top(){
                return `${this.$store.state.clientY}px`
            },
            left(){
                return `${this.$store.state.clientX}px`
            },
            close(){
                return this.$store.state.activeFormEvent
            }
        },
        methods:{
            closeForm(){
                this.$store.commit("toggleFormEvent",false)
            }
        }
    }
</script>

<style scoped>
    .event-form {
        position: absolute;
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
        min-width: 200px;
        min-height: 50px;
        display:none;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
    }
    .event-form button{
        background: transparent;
        border: none;
        outline: none;
        color: #333536;
    }
    .event-form h4{
        margin: 4px;
        color: var(--dusty-gray);
        
    }
    .active{
        display: flex;
    }
</style>