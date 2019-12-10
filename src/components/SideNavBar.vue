<template>
  <div> 
    <!-- Side Modal Top Right -->
    
    <mdb-btn color="" size="sm" icon="bars" @click.native="modal = true"></mdb-btn>
    <mdb-modal side position="left" fullHeight direction="left" :show="modal" @close="modal = false">
        <mdb-modal-header >
            <mdb-modal-title>
                <center> <strong> UEAB SIGN OUT</strong></center>
            </mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>
            <center>
            <div>
                <mdb-btn color="deep-purple" class="md-btn">{{studentButtons.home}}</mdb-btn>
            </div>
            <div>
                <mdb-btn color="deep-purple" class="md-btn">{{studentButtons.profile}}</mdb-btn>
            </div>
            <div>
                <mdb-btn color="deep-purple" class="md-btn">{{studentButtons.handbook}}</mdb-btn>
            </div>
            </center>
            
        </mdb-modal-body>
        <mdb-footer>
            <center>
            <div>
                 <mdb-btn color="deep-purple" class="md-btn">{{studentButtons.support}}</mdb-btn>
            </div>
            </center>
        </mdb-footer>
    </mdb-modal>
  </div>
</template>

<script>
  import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue';
  export default {
    components: {
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter,
      mdbBtn
    },
    data() {
      return {
        modal: false,
        studentButtons: {
            home: 'Home page',
            profile: 'My profile',
            handbook: 'Student handbook',
            support: 'Support',
        },
        adminButtons: {
            accounts: 'Student accounts',
            all: 'All requests',
            men: 'Ladies dorm',
            ladies: 'Ladies dorm',
            ladiesOff: 'Ladies off-cumpus',
            menOff: 'Men Off-cumpus',
            handbook: 'Student handbook',
            support: 'Support',
        }
      };
    }
  };
</script>
<style lang="scss" scoped>
.navhead{
    background: #bc6802;
}
.md-btn{
    border-radius: 25px;
}
// .md-btn:hover{
//     background-color: blue
// }
</style>