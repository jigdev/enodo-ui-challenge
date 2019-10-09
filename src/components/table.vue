<template>
  <v-container>
    <v-layout v-resize="onResize" column style="padding-top:56px">
      <v-data-table :items-per-page="15" :headers="headers" :items="items" :search="search" :pagination.sync="pagination"
        :hide-headers="isMobile" :class="{mobile: isMobile}">
        <template slot="items" slot-scope="props">
          <tr v-if ="!isMobile">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left" >{{ props.item.val1 }}</td>
            <td class="text-xs-left">{{ props.item.val2 }}</td>
            <td class="text-xs-left">{{ props.item.val3 }}</td>
          </tr>
          <tr v-else>
            <td>
              <ul class="flex-content">
                <li class="flex-item" data-label="Name">{{props.item.name }}</li>
                <li class="flex-item" data-label="T2">{{ props.item.val1 }}</li>
                <li class="flex-item" data-label="T9">{{ props.item.val2 }}</li>
                <li class="flex-item" data-label="T6">{{ props.item.val3 }}</li>
              </ul>
            </td>
          </tr>
        </template>
        <v-alert slot="no-results" :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </v-data-table>
    </v-layout>
  </v-container>
</template>
<script>

  export default {
    props: {
       headers: {
         type: Array,
         required: true
       },
        items: {
         type: Array,
         required: true
       }
    },
    data: () => ({
      title: "",
      pagination: {
        sortBy: 'name'
      },
      selected: [],
      search: '',
      isMobile: false
    }),
    methods: {
      onResize() {
        if (window.innerWidth < 769) {
          this.isMobile = true;
          this.title = "Enodo"
        } else {
          this.isMobile = false;
          this.title = ""
        }
      },
      toggleAll() {
        if (this.selected.length) this.selected = []
        else this.selected = this.desserts.slice()
      },
      changeSort(column) {
        console.log(column);
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      }
    }
  }

</script>
<style scoped>
       .mobile {
      color: #333;
    }


    @media screen and (max-width: 768px) {
      .mobile table.v-table tr {
        max-width: 100%;
        position: relative;
        display: block;
      }

      .mobile table.v-table tr:nth-child(odd) {
        border-left: 6px solid deeppink;
      }

      .mobile table.v-table tr:nth-child(even) {
        border-left: 6px solid cyan;
      }

      .mobile table.v-table tr td {
        display: flex;
        width: 100%;
        border-bottom: 1px solid #f5f5f5;
        height: auto;
        padding: 10px;
      }

      .mobile table.v-table tr td ul li:before {
        content: attr(data-label);
        padding-right: .5em;
        text-align: left;
        display: block;
        color: #999;

      }
      .v-datatable__actions__select
      {
        width: 50%;
        margin: 0px;
        justify-content: flex-start;
      }
      .mobile .theme--light.v-table tbody tr:hover:not(.v-datatable__expand-row) {
        background: transparent;
      }

    }
    .flex-content {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    .flex-item {
      padding: 5px;
      width: 50%;
      height: 40px;
      font-weight: bold;
    }
</style>
