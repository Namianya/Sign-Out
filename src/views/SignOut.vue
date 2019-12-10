<template>
<div id="signout">
    <div>
        <Navbar></Navbar>
    </div>
    <div class="rules">
        <center><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio alias incidunt soluta doloribus possimus, eaque tenetur reprehenderit nihil ducimus consequatur?</p></center>
        <center><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio alias incidunt soluta doloribus possimus, eaque tenetur reprehenderit nihil ducimus consequatur?</p></center>
        <center><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio alias incidunt soluta doloribus possimus, eaque tenetur reprehenderit nihil ducimus consequatur?</p></center>
        <center><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio alias incidunt soluta doloribus possimus, eaque tenetur reprehenderit nihil ducimus consequatur?</p></center>
        <center><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio alias incidunt soluta doloribus possimus, eaque tenetur reprehenderit nihil ducimus consequatur?</p></center>
    </div>
    <div id="" class="container">
    <mdb-row>
        
    <mdb-col col="4">
    <div class="signout " >
        
        
        <template>
            <div class="form-group">
                
                <input type="text" id="example1" class="form-control" placeholder="Destination" width="250px">
            </div>
        </template>
        <template>
        <div>
            <mdb-icon icon="calendar-alt" /><span> : Date of depature</span>
            <Datepicker class="dates"  placeholder="Select date of depature"  width="250px"/>
        </div>
        </template>
        <h6/>
        <template>
         <div>
             <mdb-icon icon="calendar-alt" /><span> : Date of depature</span>
            <Datepicker placeholder="Select date of return"/>
        </div>
        </template><br>
        <center><strong>Reason</strong></center>
        
        <hr>
         <template>
            <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon">
                    <i class="fas fa-pencil-alt prefix"></i>
                </span>
                </div>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
        </template>
        
    </div>
    </mdb-col>
    <mdb-col col="8">
        <SignOutTable/>
    </mdb-col>
        
    </mdb-row>
    </div>
 </div>
</template>

<script>
import SignOutTable from '../components/SignOutTable.vue'
import {mdbContainer, mdbRow, mdbCol} from 'mdbvue';
import Datepicker from 'vuejs-datepicker';
import Navbar from '../components/Navbar.vue';
import { mdbIcon } from 'mdbvue';
export default {
    name: 'signOut',
    components: {
        Navbar,
        Datepicker,
        mdbIcon,
        mdbContainer,
        mdbRow,
        mdbCol,
        SignOutTable
    }
}
</script>
<style lang="scss">
.rules{
    margin-top: 8em
}
.signout{
    // margin-top: 300px;
    // width: 300px;
    margin-left: 20px
}
// .dates{
//     width: 300px;
// }
h6 {
      line-height: 2.5;
  }
</style>