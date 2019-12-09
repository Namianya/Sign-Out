<template>
    <div>
        
        <div id="mySidenav" class="sidenav">
            <!-- <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a> -->
            <a href="#">Home page</a>
            <a href="#">My profile</a>
            <a href="#">Student Handbook</a>
            <a href="#">Support</a>
            </div>

            <!-- Use any element to open the sidenav -->
            

            <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
            <div id="main">
            
        </div>
    
    </div>
</template>
<script>

export default {
    name: 'SideNav',
    methods: {
     openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        },

/* Set the width of the side navigation to 0 */
    closeNav() {
        document.getElementById("mySidenav").style.width = "250px";
        }
            }
    
}
</script>
<style lang="scss" scoped>
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 250px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
//   top: 0; /* Stay at the top */
  left: 0;
  background-color: #bc6802; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
  padding: 6px;
  text-decoration: none;
  text-align: center;
  font-size: 15px;
  color: #ffffff;
  display: block;
  transition: 0.3s;
  margin: 2%;
  background-color: #1f2c72;
  border-radius: 25px;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  background-color: #4b619c;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>