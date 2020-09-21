<template>
    <div :class="{'event-form':true, active:close}" :style="{top:top, left:left} ">
        <button @click="closeForm" class="close">&#10005</button>
        <h3>Add an event</h3>
        <h4>{{date.format('dddd, MMM Do')}}</h4>
        <label>
            <input v-focus type="text" v-model="description"
                   placeholder="Dinner at Pancho's"
                    @keyup.enter="create">
        </label>
        <button class="submit" @click="create">create</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                description: ''
            }
        },
        computed: {
            top(){
                return `${this.$store.state.clientY}px`
            },
            left(){
                return `${this.$store.state.clientX}px`
            },
            close(){
                return this.$store.state.activeFormEvent
            },
            date(){
                return this.$store.state.eventFormDate
            }
        },
        methods:{
            closeForm(){
                this.$store.commit("toggleFormEvent",false);
                this.description = ''
            },
            create(){
                if(this.description.length>0) {
                    this.$store.commit("createEvent", this.description);
                    this.closeForm();
                }
            }
        },
        directives:{
            focus(el){
                el.focus()
            }
        }
    }
</script>

<style scoped>
    .event-form {
        position: absolute;
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.4);
        min-width: 300px;
        display:none;
        justify-content: space-between;
        align-items: center;
        background-color: #eee8e8;
        border-radius: 8px;
        padding: 10px;
    }
    .event-form .close{
        position: absolute;
        top:5px;
        right: 5px;
        background: transparent;
        border: none;
        outline: none;
        color: #4b4c4c;
        font-size: 20px;
    }
    .event-form h3{
        margin: 10px;
        color: var(--dusty-gray);
        
    }
    .event-form h4{
        margin: 10px;
        color: #35495e;
    }
    .event-form input{
        outline: none;
        display: block;
        width: 95%;
        padding: 5px;
        margin: 0 auto;
        font-size: 16px;
        border: solid 1px var(--dusty-gray);
    }
    .event-form .submit{
        background-color: var(--pickled-bluewood);
        color: white;
        padding: 5px;
        outline: none;
        border-radius: 3px;
        border:solid 2px var(--pickled-bluewood);
        margin: 5px;
        float: right;
        cursor: pointer;
    }
    .event-form .submit:active{
        transform: scale(0.95);
    }
    .active{
        display: block;
    }
</style>