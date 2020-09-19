<template>
    <div :class='objectClasses' @click="captureClick">
        {{day.format('D')}}
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
                    past:this.day.isSameOrBefore(this.$moment(),'day') && !today
                }
            }
        },
        methods:{
            captureClick(event){
                this.$store.commit('eventFormPos',{x:event.clientX,y:event.clientY})
                this.$store.commit("toggleFormEvent",true)
            }
        }
    }
</script>

<style scoped>
    .container{
        width: 70%;
        height: 130px;
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
</style>