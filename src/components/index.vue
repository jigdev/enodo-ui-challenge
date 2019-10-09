<template>
    <v-container>
    <v-layout flex-row row wrap>
      <v-flex  xs12 md4 sm3>
        <v-card height="480px" class="ma-1">
          <v-subheader class="title font-weight-black">Property Information</v-subheader>
           <v-divider></v-divider>
          <v-card-text class="text-xs-center">
            <Detail :basicInfo="basicInfo"></Detail>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md4 sm4>
        <v-card class="ma-1" >
          <v-subheader class="title font-weight-black">Operating Expenses</v-subheader>
           <v-divider></v-divider>
          <v-card-text class="text-xs-center">
             <Doughnut></Doughnut>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md4 sm5>
        <v-card class="ma-1">
          <v-subheader class="title font-weight-black">Gross Potential Rent</v-subheader>
           <v-divider></v-divider>
          <v-card-text class="text-xs-center">
            <LineChart></LineChart>
          </v-card-text>
        </v-card>
      </v-flex>
      </v-flex>
      <v-flex xs12 sm12 md12 dark>
        <v-card>
          <v-card-text>
             <v-subheader class="title font-weight-black">Historical Operating Expenses</v-subheader>
           <v-divider></v-divider>
            <Table :headers= "headers" :items= "items"></Table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    </v-container>
</template>
<script>

  import Detail from './detail.vue'
  import Doughnut from "../basecomponents/chart/Doughnut";
  import LineChart from "../basecomponents/chart/LineChart";
  import Table from "./Table.vue";
  import {mapState} from 'vuex'

  export default {
    components: {
      Detail,
      Doughnut,
      LineChart,
      Table
    },
    data() {
      return {
      }
    },
    computed: {
      // eslint-disable-next-line no-undef
      ...mapState('property', ['basicInfo', 'headers', 'items'])
    }

  }

</script>