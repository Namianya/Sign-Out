<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>List Group</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/list-group/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h2>Basic</h2>
      <section>
        <div class="row">
          <div class="col-md-3 mt-5 mx-3">
            <mdb-list-group>
              <mdb-list-group-item :action="true" :active="true">Main Menu</mdb-list-group-item>
              <mdb-list-group-item :action="true">Messages <mdb-badge :pill="true" color="default-color">12</mdb-badge></mdb-list-group-item>
              <mdb-list-group-item :action="true">Sell Products</mdb-list-group-item>
              <mdb-list-group-item :action="true">Settings</mdb-list-group-item>
              <mdb-list-group-item :disabled="true">Can't Touch This</mdb-list-group-item>
            </mdb-list-group>
          </div>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h2>Horizontal</h2>
      <section>
            <mdb-list-group horizontal md>
              <mdb-list-group-item :action="true" :active="true">Main Menu</mdb-list-group-item>
              <mdb-list-group-item :action="true">Messages <mdb-badge :pill="true" color="default-color">12</mdb-badge></mdb-list-group-item>
              <mdb-list-group-item :action="true">Sell Products</mdb-list-group-item>
              <mdb-list-group-item :action="true">Settings</mdb-list-group-item>
            </mdb-list-group>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbListGroup, mdbListGroupItem, mdbBadge, mdbContainer, mdbIcon, mdbRow } from 'mdbvue';

export default {
  name: 'ListGroupPage',
  components: {
    mdbListGroup,
    mdbListGroupItem,
    mdbBadge,
    mdbContainer,
    mdbIcon,
    mdbRow
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
