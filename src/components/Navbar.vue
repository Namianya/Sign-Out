<template>
  <mdb-navbar color="white"  light>
    <mdb-navbar-brand href="#">
      <img src="../assets/images/ueablogo.png" height="70px">
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        
        
      </mdb-navbar-nav>
      <img src="../assets/images/ueablogo.png" height="70px" class="rounded mx-auto d-block" alt="...">
      <i class="far fa-bell"> </i> 
      <i class="fas fa-sign-out-alt " > </i>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>
<script>
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav } from 'mdbvue';
  export default {
    name: 'navbar',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      
      },
      
  }
</script>
<style lang="scss">
// .avarter{
//   margin-right: 10px;
//   padding-right: 50px;
// }
</style>