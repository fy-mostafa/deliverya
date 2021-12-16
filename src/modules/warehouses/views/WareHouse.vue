<template>


  <div class="q-pa-md" >
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        align="justify-left"
      >

        <q-tab name="alarms" label="Registered Stores" />
        <q-tab name="movies" label="Blocked Stores" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
      

        <q-tab-panel name="alarms">
           <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      v-model:selected="selected"
      dir="rtl"
    >
     

      <template v-slot:body-cell-actions>
        <q-td>
   <i class="fas fa-pen q-ml-md" id="edite"></i>
   <i class="fas fa-trash-alt" id="delete"></i>
        </q-td>
       
      </template>

       <template v-slot:body-cell-status>
        <q-td>
<q-toggle
      v-model="value"
      color="blue"
    />
        </q-td>
       
      </template>

      <template v-slot:top>
 <q-btn color="primary"  label="Add Store" @click="prompt = true" />
      </template>
  
  
      
    </q-table>
        </q-tab-panel>

        <q-tab-panel name="movies">
              <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      v-model:selected="selected"
       dir="rtl"
    >
      

      <template v-slot:body-cell-actions>
        <q-td>
   <i class="fas fa-pen q-ml-md" id="edite"></i>
   <i class="fas fa-trash-alt" id="delete"></i>
        </q-td>
       
      </template>

     <template v-slot:body-cell-status>
        <q-td>
<q-toggle
      v-model="value"
      color="blue"
    />
        </q-td>
       
      </template>

      
      
    </q-table>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>


      <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form
      
      class="q-gutter-md"
    >
      <q-input
        filled
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"

        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

    </q-form>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn label="Submit"   @clickk="onSubmit" type="submit" color="primary"/>

        </q-card-actions>
      </q-card>
    </q-dialog>



    

  </div>



    
   

</template>
<script>
import { ref } from 'vue'

const columns = [
  {
    name: 'actions',
    required: true,
    label: 'actions',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'status', align: 'center', label: 'status', field: 'status', sortable: true },
  { name: 'phone', label: 'phone', field: 'phone' },
  { name: 'address', label: 'address', field: 'address' },
  { name: 'name', label: 'name', field: 'name', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'id', label: 'Id', field: 'id', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rows = [
  {

    carbs: 24,
    phone: 44466560,
    address: 'Frozen ',
     name: 'Frozen Yogurt',
    id: 1,

  },
  {
  
   

    phone: 42866452,
    address: 'Ice',
     name: 'Ice cream sandwich',
    id: 3
  },
  {
   
   

    phone: 6634537,
    address: 'Eclair',
     name: 'Eclair',
    id: 5
  },
  {
  
   
 
    phone: 466435353,
    address: 'Cupcake',
     name: 'Cupcake',
    id: 8
  },
  {
    
   
    phone: 363221159,
    address: 'Gingerbread',
    name: 'Gingerbread',
    id: 16
  },
  {
   
   
    phone: 26454324,
    address: 'Jelly',
    name: 'Jelly bean',
    id: 0
  },
  {
   
 
    phone: 138986445,
    address: 'Lollipop',
    name: 'Lollipop',
    id: 2
  },
  {
    
    
    phone: 67732345,
    address: 'Honeycomb',
   name: 'Honeycomb',
    id: 45
  },
  {
    
   
    phone: 43343249,
    address: 'Donut',
    name: 'Donut',
    id: 22
  },
  {
   
  
    phone: 42342347,
    address: 'KitKat',
    name: 'KitKat',
    id: 6
  }
]

export default {
  setup () {
    
    return {
      selected: ref([]),
      columns,
      rows,
        tab: ref('alarms'),
      innerTab: ref('innerMails'),
      splitterModel: ref(20),
      value : ref(true),
      prompt :ref(false),


        onSubmit()
      {
        prompt.value = false 
    
      }

     


    }
  }
}
</script>

<style scoped>
#edite{
  cursor: pointer;
  color: green;
}
#delete{
  cursor: pointer;
  color: red;
}
</style>