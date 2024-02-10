<!-- Setup Script -->
<!-- =================================================================
======================================================================
======================================================================
================================================================== -->
<script setup>
/* Import Vehicle Component */
/* =================================================================
====================================================================
================================================================= */
import Vehicle from "../../components/store/vehicle/basecomponent.vue";




/* Import Style Sheet */
/* =================================================================
====================================================================
================================================================= */
import './style.css';
</script>





<!-- Template -->
<!-- =================================================================
======================================================================
======================================================================
================================================================== -->
<template>
  <div>
    <!-- Vehicle Menu -->
    <!-- ================================================================= -->
    <!-- ================================================================= -->
    <!-- ================================================================= -->
    <div id="vehiclemenu">
        <!-- Groups -->
        <!-- ================================================================= -->
        <!-- ================================================================= -->
        <div class="vehiclemenu_group" v-for="(group, i) in menuList.groups" v-bind:key="i">
          <!-- Menu Items -->
          <!-- ================================================================= -->
          <button v-for="(item, j) in group.items" v-bind:key="j" :id="`item${item.selectedIndex}`" :class="[item.isselected ? 'vehicle_menu_item_active' : 'vehicle_menu_item_unactive', 'vehicle_menu_item']" @click="selectIndex(item.selectedIndex, item.content)">{{item.content}}</button>
        </div>
    </div>




    <!-- Vehicle Container -->
    <!-- ================================================================= -->
    <!-- ================================================================= -->
    <!-- ================================================================= -->
    <div id="vehicle_container">
          <!-- Vehicle Items -->
          <!-- ================================================================= -->
        <Vehicle v-for="(item, i) in itemsList" :key="i" :vehicle="item"/>
    </div>
  </div>
</template>





<!-- Script -->
<!-- =================================================================
======================================================================
======================================================================
================================================================== -->
<script>
/* Import API */
/* ================================================================== */
/* ================================================================== */
/* ================================================================== */
import vehicleAPI from "../../api/vehicleAPI";




/* Export Default */
/* ================================================================== */
/* ================================================================== */
/* ================================================================== */
export default {
  /* Data */
  /* ================================================================== */
  /* ================================================================== */
  data: () => ({
      /* Menu Items */
      /* ================================================================== */
      menu: {
        groups: [
          { items : [ { content: "Cars", selectedIndex: 0, isselected: false }, { content: "SUVs", selectedIndex: 1, isselected: false } ] },
          { items: [ { content: "Vans", selectedIndex: 2, isselected: false }, { content: "Utes", selectedIndex: 3, isselected: false } ] }
        ]
      },


      /* Menu Item */
      /* ================================================================== */
      tempmenuitem: 0,
      menuitem: 1,


      /* Category */
      /* ================================================================== */
      tempcategory: "cars",
      category: ""
  }),



  /* Methods */
  /* ================================================================== */
  /* ================================================================== */
  methods: {
    /* Select Index */
    /* ================================================================== */
    selectIndex(menuitem, category) {
      // Set Temp Menu Item to Menu Item
      this.tempmenuitem = menuitem;

      // Set Temp Category to Category
      this.tempcategory = category.toLowerCase();
    }
  },



  /* Computed */
  /* ================================================================== */
  /* ================================================================== */
  computed: {
    /* Menu List */
    /* ================================================================== */
    menuList() {
      // Vakudate Menu Item Selection
      if(this.tempmenuitem != this.menuitem) {
        // Set Menu Item Index to Temp Menu Item Index
        this.menuitem = this.tempmenuitem;
        
        // Loop through Menu Item Groups
        for (let i = 0; i < this.menu.groups.length; i++) {
          // Loop through Items within Menu Item Groups
          for (let j = 0; j < this.menu.groups[i].items.length; j++) {
            // Validate Menu Item Selection
            if(this.menu.groups[i].items[j].selectedIndex == this.menuitem) {
              // Select Menu Item
              this.menu.groups[i].items[j].isselected = true;
            }
            else {
              // Unselect Menu Item
              this.menu.groups[i].items[j].isselected = false;
            }
          }
        }
      }

      // Return Menu
      return this.menu;
    }
  },



  /* Async Computed */
  /* ================================================================== */
  /* ================================================================== */
  asyncComputed: {
      /* Items List */
      /* ================================================================== */
      async itemsList() {
        // Check if a New Category has been Selected
        if(this.category != this.tempcategory){
          // Set Category to Temp Category
          this.category = this.tempcategory;

          // Filter Vehicles by Category and Return
          let response = await vehicleAPI.getByCategory(this.category);

          console.log(response);
          return response;
        }
      }
  }
};
</script>