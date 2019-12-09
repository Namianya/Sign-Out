<template>
    <div>
        <Navbar></Navbar>
        <SideNav></SideNav>
        <Table></Table>
    </div>
</template>
<script>
import Table from '../components/Tables.vue'
import SideNav from '../components/SideNav.vue'
import Navbar from '../components/Navbar.vue'
export default {
    name: 'requests',
    components: {
        Navbar,
        SideNav,
        Table
    },
    
}
</script>
<style lang="scss">
.table{
    margin-left: 250px; 
}
</style>