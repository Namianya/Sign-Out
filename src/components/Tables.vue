<template>
  <mdb-tbl responsive autoWidth>
    <mdb-tbl-head>
      <tr>
        <th>#</th>
        <th>Student Profile</th>
        <th>Date of Depature</th>
        <th>Date of return</th>
        <th>Reason</th>
        
      </tr>
    </mdb-tbl-head>
    <mdb-tbl-body>
      <tr class="table-info">
        <th scope="row">1</th>
        <td>Kate</td>
        <td>Moss</td>
        <td>USA</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa suscipit optio, nemo sequi hic in sed necessitatibus. Assumenda ea voluptatem 
            dolorum consequatur saepe voluptas non porro praesentium ad esse?</td>
       
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Anna</td>
        <td>Wintour</td>
        <td>United Kingdom</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia repudiandae ut exercitationem alias, accusamus vitae esse maxime doloribus vel 
            ratione eum distinctio velit quod odit et iure, voluptates obcaecati?</td>
        
      </tr>
      <tr class="table-info">
        <th scope="row">3</th>
        <td>Tom</td>
        <td>Bond</td>
        <td>Spain</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magnam temporibus quaerat hic harum ipsam optio architecto voluptatum magni, consectetur 
            expedita nihil eum! Quidem aut in cupiditate aliquid laborum ipsum.</td>
        
      </tr>
      <tr>
        <th scope="row">4</th>
        <td>Jerry</td>
        <td>Horwitz</td>
        <td>Italy</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt numquam delectus provident! Doloremque optio aliquam minus nostrum 
            ut soluta rem nobis ex! Alias incidunt excepturi facere natus provident blanditiis sit?</td>
        
      </tr>
      <tr class="table-info">
        <th scope="row">5</th>
        <td>Janis</td>
        <td>Joplin</td>
        <td>Poland</td>
        <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quidem quos distinctio, voluptatum corporis odio saepe delectus velit nesciunt eius 
            perspiciatis quae facere natus earum reiciendis non repellendus nobis.</td>
        
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>Gary</td>
        <td>Winogrand</td>
        <td>Germany</td>
        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam sapiente voluptates esse hic, quibusdam fuga vitae saepe et iste 
            debitis sequi facilis aut corrupti nemo ut, omnis quae quod! Fugit?</td>
        
      </tr>
      <tr class="table-info">
        <th scope="row">7</th>
        <td>Angie</td>
        <td>Smith</td>
        <td>USA</td>
        <td></td>
        
      </tr>
      <tr>
        <th scope="row">8</th>
        <td>John</td>
        <td>Mattis</td>
        <td>France</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem voluptates nobis odio nemo illum veritatis dolores expedita, eaque 
            itaque in recusandae cum amet hic, beatae quo sit blanditiis officiis.</td>
        
      </tr>
      <tr class="table-info">
        <th scope="row">9</th>
        <td>Otto</td>
        <td>Morris</td>
        <td>Germany</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nihil eius ratione at voluptate rerum earum suscipit debitis minus veniam deserunt pariatur 
            dolorem provident reprehenderit inventore, perspiciatis autem quam vitae.</td>
        
      </tr>
      <tr class="table-info">
        <th scope="row">5</th>
        <td>Janis</td>
        <td>Joplin</td>
        <td>Poland</td>
        <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi quidem quos distinctio, voluptatum corporis odio saepe delectus velit nesciunt eius 
            perspiciatis quae facere natus earum reiciendis non repellendus nobis.</td>
        
      </tr>
      <tr>
        <th scope="row">6</th>
        <td>Gary</td>
        <td>Winogrand</td>
        <td>Germany</td>
        <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam sapiente voluptates esse hic, quibusdam fuga vitae saepe et iste 
            debitis sequi facilis aut corrupti nemo ut, omnis quae quod! Fugit?</td>
        
      </tr>
      <tr class="table-info">
        <th scope="row">7</th>
        <td>Angie</td>
        <td>Smith</td>
        <td>USA</td>
        <td></td>
        
      </tr>
      <tr>
        <th scope="row">8</th>
        <td>John</td>
        <td>Mattis</td>
        <td>France</td>
        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem voluptates nobis odio nemo illum veritatis dolores expedita, eaque 
            itaque in recusandae cum amet hic, beatae quo sit blanditiis officiis.</td>
        
      </tr>
      <tr class="table-info">
        <th scope="row">9</th>
        <td>Otto</td>
        <td>Morris</td>
        <td>Germany</td>
        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nihil eius ratione at voluptate rerum earum suscipit debitis minus veniam deserunt pariatur 
            dolorem provident reprehenderit inventore, perspiciatis autem quam vitae.</td>
        
      </tr>
    </mdb-tbl-body>
  </mdb-tbl>
</template>
<script>
  import { mdbTbl, mdbTblHead, mdbTblBody } from 'mdbvue';
  export default {
    name: 'TableResponsivePage',
    components: {
      mdbTbl,
      mdbTblHead,
      mdbTblBody
    }
  }
</script>