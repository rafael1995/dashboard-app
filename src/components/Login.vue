<template>
  <v-container >
        <v-layout  row wrap align-center>
          <v-flex class="text-xs-center">
           <v-card dark  class="login">
               <v-form v-model="valid">
                  <v-text-field
                    label="Name"
                    v-model="name"
                    :rules="nameRules"
                    :counter="10"
                    required
                  >
                  </v-text-field>
                  <v-text-field
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    required
                  >
                </v-text-field>
                 <div>
                  <v-btn color="primary">Primary</v-btn>
                </div>
              </v-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
  
}
</script>
<style>
.login {
   width: 300px; 
   margin: 0 auto;
   margin-top: 35%;
   padding: 10px;
   background-color: blue;
  }
</style>
