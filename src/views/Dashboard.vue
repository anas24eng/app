<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-card flat  v-for="project in projects" :key="project.ordernumber">
   <v-row row wrap :class="`pl-3 project ${project.status}`">
     <v-col cols="12" md="6">
       <div class="caption grey--text">ordernumber</div>
       <div>{{project.ordernumber}}</div>
       </v-col>
       <v-col xs="2">
         <div class="caption grey--text">name</div>
       <div>{{project.name}}</div>
       </v-col>
          <v-col xs="2">
         <div class="caption grey--text">ordertype</div>
       <div>{{project.ordertype}}</div>
       </v-col>
        <v-col xs="2">
        <div class="right">
          <v-chip small :class="`${project.status} white--text caption my-2`" >{{project.status}}</v-chip>
        </div>
       </v-col>
  </v-row>
  <v-row cols="12">
<v-divider></v-divider>
</v-row>
<v-divider></v-divider>
</v-card>


    </v-container>

   
  </div>
</template>
<script>
export default {
    data() {
        return {
            projects: [
                
                    {ordernumber: 123 ,name: 'anas', ordertype: 'food',  status: 'ontheway'},
                    {ordernumber: 134 ,name: 'ali',  ordertype: 'food', status: 'ongoing'},
                    {ordernumber: 135 ,name: 'mustafa',  ordertype: 'sweet', status: 'complete'},
                    {ordernumber: 136 ,name: 'ahmed',  ordertype: 'clothes', status: 'ontheway'},

    
                
            ]
        }
    }
    
}
</script>


<style>
.project {
  border-left: 4px solid #3cd1c2 ;
}
.project.ontheway{
border-left: 4px solid orange;
}
.project.ongoing {
  border-left: 4px solid tomato ;
}
.v-chip.v-chip--no-color.theme--light.ongoing{
  background: #3cd1c2;
}

.v-chip.v-chip--no-color.theme--light.ontheway {
    background: #5cbcfc;
  }
  .v-chip.v-chip--no-color.theme--light.complete {
    background: #643cd1;
  }

</style>

