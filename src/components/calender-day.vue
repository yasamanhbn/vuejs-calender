<template>
    <div :class='objectClasses'>
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
        }
    }
</script>

<style scoped>
    .container{
        width: 100%;
        height: 150px;
        font-size: 20px;
        padding: 0.5rem;
        font-weight: bold;
        border-left: solid 2px var(--alto);
        border-top: solid 2px var(--alto);
        color: var(--pickled-bluewood);
    }
    .today{
        background-color: var(--buttermilk);
    }
    .past{
        color: var(--dusty-gray);
    }
</style>