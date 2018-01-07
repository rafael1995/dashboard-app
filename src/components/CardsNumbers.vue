<template>
  <v-container fluid grid-list-md text-xs-center>
    <v-layout row wrap  justify-center>
      <v-flex xl2 >
        <v-card dark color="blue darken-4 ml2" class="elevation-7" >
             <div class="ml-2 text-xs-left display-4"> 1</div>
            <v-card-actions class="blue">
              <span class="title">Pedidos Em andamento</span>
            </v-card-actions>
        </v-card>
      </v-flex>
     <v-flex xl2>
        <v-card dark color="teal darken-2" class="elevation-7">
             <div class="ml-2 text-xs-left display-4"> 10 </div>
            <v-card-actions class="green lighten-3">
              <span class="title">Pedidos Entregues</span>
            </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xl2>
        <v-card dark color="pink darken-3" class="elevation-7">
             <div class="ml-2  text-xs-left display-4"> 134 </div>
            <v-card-actions class="pink lighten-4">
              <span class="title">Avaliações</span>
            </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>