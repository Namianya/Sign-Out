<template>
  <div style="margin-top: -15px">
    <mdb-edge-header color="teal darken-2">
      <div class="category-page-background"></div>
    </mdb-edge-header>
    <mdb-container class="free-bird">
      <mdb-row>
        <mdb-col md="8" class="mx-auto">
          <mdb-jumbotron class="pt-4">
            <h2 class="pb-4"><mdb-icon icon="table" class="text-danger mr-2" /><strong>Tables</strong></h2>
            <h6 class="my-3">FREE</h6>
            <mdb-list-group>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/tables/datatable">
                <h5 class="justify-content-between d-flex align-items-center">
                  Datatable<mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/tables/datatableJSON">
                <h5 class="justify-content-between d-flex align-items-center">
                  Datatable with other JSON structures<mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/tables/table-pagination">
                <h5 class="justify-content-between d-flex align-items-center">
                  Table pagination<mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/tables/table-scroll">
                <h5 class="justify-content-between d-flex align-items-center">
                  Table Scroll<mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/tables/table-search">
                <h5 class="justify-content-between d-flex align-items-center">
                  Table Search<mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
              <mdb-nav-item class="list-group-item list-group-item-action" to="/tables/table-sort">
                <h5 class="justify-content-between d-flex align-items-center">
                  Table Sort<mdb-icon icon="angle-right"/>
                </h5>
              </mdb-nav-item>
            </mdb-list-group>
          </mdb-jumbotron>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbJumbotron, mdbNavItem, mdbListGroup, mdbEdgeHeader} from 'mdbvue';

export default {
  name: 'AdvancedPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbJumbotron,
    mdbNavItem,
    mdbListGroup,
    mdbEdgeHeader
  }
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

.category-page-background {
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background: url('https://mdbootstrap.com/wp-content/uploads/2016/11/mdb-pro-min-1.jpg') center;
  background-size: cover;
}

.example-components-list {
  padding-top: 20px;
}

.example-components-list li {
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #f7f7f7;
  transition: .3s;
}

.example-components-list h6 {
  padding: 20px 10px 5px 10px;
  color: grey;
}

.example-components-list li:hover {
  background-color: #fafafa;
}

.example-components-list i {
  float: right;
  padding-top: 3px;
}

.nav-link.navbar-link h5 {
  color: #212529;
}
</style>
