<template>
  <div class="home">
    <v-layout row>
      <v-flex xs12>
        <v-card hover raised>
          <v-responsive height="300px" class="pa-5 red lighten-1">
            <div class="display-1 white--text text-xs-center">{{msg}}</div>
          </v-responsive>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  data () {
    return {
      msg: 'Sorry, the page you\'re looking for doesn\'t exist.'
    }
  }
}
</script>
