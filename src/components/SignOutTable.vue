<template>
    <div>
      <mdb-tbl>
        <mdb-tbl-head color="black" textWhite>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>
      <hr>
      <center>
          <p>...</p>
      </center>
      
      <hr>
      <center><strong>SIGNED</strong></center>
      <hr>
      <mdb-tbl>
        <mdb-tbl-head color="grey">
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>
    </div>
  </template>
  <script>
  import { mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';

  export default {
    name: 'SignOutTable',
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody
    }
  }
</script>