<template>
    <div>
        <div class="fixed-top">
        <Navbar></Navbar>
        </div>
        
        <Table></Table>
    </div>
</template>
<script>
import Table from '../components/Tables.vue'

import Navbar from '../components/Navbar.vue'
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
    margin-top: 70px;
}

</style>