<template>
  <mdb-navbar color="white"  light>
    <mdb-navbar-brand href="#">
      <img src="../assets/images/ueablogo.png" height="70px">
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        
        
      </mdb-navbar-nav>
      <img src="../assets/images/profile.jpg" class="rounded-circle" height="70px" alt="Wekesa">
      <!-- <img src="../assets/images/profile.jpg" height="70px" class="round" alt="..."> -->
      <span>Paul Wekesa <br><i class="fas fa-sign-out-alt text-danger " > Logout</i></span>
      
      <div class="notification"><i class="far fa-bell text-info"> </i> </div>
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
.notification{
  padding: 10px;
  font-size: 40px;
  margin: 0,20px,020px;
}
.round{
  border-radius: 60%;
}
</style>