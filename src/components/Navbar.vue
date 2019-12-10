<template>
  <mdb-navbar color="white"  light>
    
    <mdb-navbar-brand href="#">
      <img src="../assets/images/ueablogo.png" height="70px">
    </mdb-navbar-brand>
    <SideNavbar/>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        
        
      </mdb-navbar-nav>
      <img src="../assets/images/profile.jpg" class="rounded-circle" height="70px" alt="Wekesa">
      <!-- <img src="../assets/images/profile.jpg" height="70px" class="round" alt="..."> -->
      <span><strong>{{user.name}}</strong> 
      <br>
      <i class="fas fa-sign-out-alt text-danger " > Logout</i></span>
      
      <div class="notification"><i class="far fa-bell text-deep-purple"> </i> </div>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>
<script>
  import SideNavbar from './SideNavBar';
  import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav } from 'mdbvue';
  export default {
    name: 'navbar',
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      SideNavbar
      
      },
      data(){
        return{

         user: {name: 'Paul Wekesa', id: 'SWEKNA1831'}
        }
      }

        
      
      
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
.rounded-circle{
  
  margin-right: 10px;
}
</style>