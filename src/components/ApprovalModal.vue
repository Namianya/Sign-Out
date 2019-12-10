<template>
  <div class="">
    <!-- Side Modal Top Right -->
    <mdb-btn color="primary" @click.native="modal = true">Top right</mdb-btn>
    <mdb-modal side position="top-left" direction="right" size="md" :show="modal" @close="modal = false">
        <mdb-modal-header>
            <mdb-modal-title>Modal title</mdb-modal-title>
        </mdb-modal-header>
        <mdb-modal-body>Approve selected</mdb-modal-body>
        <mdb-modal-footer>
            <mdb-btn color="danger" @click.native="modal = false">Cancel</mdb-btn>
            <mdb-btn color="success">Approve selected</mdb-btn>
            <mdb-btn color="info">Approve all</mdb-btn>
        </mdb-modal-footer>
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
        modal: false
      };
    }
  };
</script>