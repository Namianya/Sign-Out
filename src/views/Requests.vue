<template>
    <div>

        <Navbar></Navbar>
        <!-- </div> -->
        
        <Table></Table>
    </div>
</template>
<script>
import Table from '../components/Tables.vue';
import Navbar from '../components/Navbar.vue';
export default {
    name: 'requests',
    components: {
        Navbar,
        Table
    },
    
}
</script>
<style lang="scss">
.table{
    // margin-left: 250px; 
    margin-top: 90px;
    text-align: center
}

</style>