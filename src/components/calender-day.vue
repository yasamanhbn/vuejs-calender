<template>
    <div :class='objectClasses' @click="captureClick">
        {{day.format('D')}}
        <ul class="event-list">
            <li v-for="event in events">{{event.description}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['day'],
        computed:{
            objectClasses(){
                let today = this.day.isSame(this.$moment(),'day');
                return{
                    container:true,
                    today,
                    past:this.day.isSameOrBefore(this.$moment(),'day') && !today,
                    hiLight:this.$store.state.eventFormDate.isSame(this.day,'day') && !today
                }
            },
            events(){
                return this.$store.state.eventLists.filter(
                    event=>event.date.isSame(this.day,'day')
                )
            }
        },
        methods:{
            captureClick(event){
                this.$store.commit('eventFormPos',{x:event.clientX,y:event.clientY})
                this.$store.commit("toggleFormEvent",true)
                this.$store.commit('eventFormDate',this.day)
                this.active = true
            }
    }
    }
</script>

<style scoped>
    .container{
        width: 70%;
        height: 110px;
        font-size: 20px;
        padding: 0.5rem;
        font-weight: bold;
        border-left: solid 2px var(--alto);
        border-top: solid 2px var(--alto);
        color: var(--pickled-bluewood);
        cursor: pointer;
    }
    .today{
        background-color: var(--buttermilk);
    }
    .past{
        color: var(--dusty-gray);
    }
    .event-list{
        font-size: 1rem;
        color: var(--vista-blue);
        font-weight: bold;
        list-style: none;
        padding: 0;
        margin: 0.5rem 0 0.5rem 0;
    }
    .hiLight{
        background-color: var(--pink);
    }
</style>