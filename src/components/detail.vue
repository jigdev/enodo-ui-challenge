 <template>
   <v-flex>
     <v-img  :src="basicInfo.image"></v-img>
     <v-card-text class="text-xs-center mt-4">
       <div class="title text--primary text-uppercase"> {{basicInfo.street}} </div>
       <div class="subtitle-2 font-weight-light"> {{basicInfo.city}} {{basicInfo.state}} {{basicInfo.zip}}</div>
       <div class="subtitle-2 font-weight-light mt-1"> {{basicInfo.unit}}</div>
       <div class="subtitle-2 font-weight-light"> Property Type : {{basicInfo.type}}</div>
       <div class="subtitle-2 font-weight-light"> Year Built : {{basicInfo.year}}</div>
       <div>
         <p class="pt-2 ma-auto subtitle-1 font-weight-bold  green--text">{{ basicInfo.avm | toCurrency}} AVM</p>
       </div>
     </v-card-text>
   </v-flex>
 </template>

 <script>
   export default {
     // Expecting Basic Information from Parent
     props: {
       basicInfo: {
         type: Object,
         required: true
       }
     },
     // Convert into currency format
     filters: {
       toCurrency: function (value) {
         if (typeof value !== "number") {
           return value;
         }
         let formatter = new Intl.NumberFormat('en-US', {
           style: 'currency',
           currency: 'USD',
           minimumFractionDigits: 0
         });
         return formatter.format(value);
       }
     },
     created() {}
   }

 </script>
