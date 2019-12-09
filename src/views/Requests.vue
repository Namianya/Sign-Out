<template>
    <div>
        <Navbar></Navbar>
        <SideNav></SideNav>
    </div>
</template>
<script>
import SideNav from '../components/SideNav.vue'
import Navbar from '../components/Navbar.vue'
export default {
    name: 'requests',
    components: {
        Navbar,
        SideNav
    },
    
}
</script>