<template>
  <div>
    
    <!--ViewWrapper-->
    <mdb-view>
      <mdb-mask class="gradient d-flex justify-content-center align-items-center">
        <mdb-container>
          <mdb-row>
            <div class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-4">
              <h1 class="h1-responsive font-weight-bold mt-sm-5">Welcome to ueab sign out system </h1>
              <hr class="hr-light"/>
              <h6 class="mb-4"></h6>
              <p>You can manage your sing out here</p>
            </div>
            <mdb-col md="6" xl="5" class="mt-xl-5">
                <template >
                <!-- Default form login -->
                <form class="form-container">
                     <center>
                    <img src="../assets/images/ueablogo.png" alt="" srcset="">
                     </center>
                    <p class="h4 text-center mb-4">Sign in</p>
                    <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
                    <input type="email" id="defaultFormLoginEmailEx" class="form-control"/>
                    <br/>
                    <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
                    <input type="password" id="defaultFormLoginPasswordEx" class="form-control"/>
                    <div class="text-center mt-4">
                    <button class="btn btn-indigo" type="submit">Student Login</button>
                    </div>
                    <div class="text-center mt-4">
                    <button class="btn btn-indigo" type="submit">Admin Login</button>
                    </div>
                </form>
            <!-- Default form login -->
            </template>
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </mdb-view>
    
  </div>
</template>

<script>
  import { mdbContainer, mdbRow, mdbCol, mdbView, mdbMask } from 'mdbvue';
  export default {
    name: 'AppPage',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      
      mdbView,
      mdbMask,
     
    }
  }
</script>

<style>

  .view {
    background-image: url('../assets/images/bg_image.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: calc(100vh);
  }
  .gradient {
    background: -moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    background: -webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)));
    background: -o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 100%);
  }
  h6 {
      line-height: 1.7;
  }
  .form-container{
      background-color: rgba(97, 95, 95, 0.7);
      padding: 10px;
      border-radius: 2%;
  }
</style>