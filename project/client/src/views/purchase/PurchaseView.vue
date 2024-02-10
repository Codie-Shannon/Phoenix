<!-- Setup Script -->
<!-- =================================================================
======================================================================
======================================================================
================================================================== -->
<script setup>
/* Import Components */
/* =================================================================
====================================================================
================================================================= */
import Header from "../../components/generic/header/basecomponent.vue";
import Title from "../../components/form/title/basecomponent.vue";
import Dropdown from "../../components/form/dropdown/basecomponent.vue";
import InputField from "../../components/form/inputfield/basecomponent.vue";
import Location from "../../components/form/location/basecomponent.vue";
import Button from "../../components/generic/button/basecomponent.vue";




/* Import Style Sheet */
/* =================================================================
====================================================================
================================================================= */
import "./style.css";
</script>





<!-- Template -->
<!-- =================================================================
======================================================================
======================================================================
================================================================== -->
<template>
  <div>
    <!-- Header -->
    <!-- =================================================================
    ======================================================================
    ================================================================== -->
    <Header page="purchase"/>




    <!-- Book Container -->
    <!-- =================================================================
    ======================================================================
    ================================================================== -->
    <div id="book_container">
      <!-- Choose Your Vehicle Title -->
      <!-- =============================================================
      ============================================================== -->
      <Title title="Choose Your Vehicle"/>



      <!-- Make Dropdown -->
      <!-- =============================================================
      ============================================================== -->
      <Dropdown header="Make" :options="makes" @clicked="onMakeClick"/>



      <!-- Model Dropdown -->
      <!-- =============================================================
      ============================================================== -->
      <Dropdown header="Model" :options="modelsList" :isenabled='selectedMake ? true : false' :isclear="selectedMake" @clicked="onModelClick"/>



      <!-- Colour Dropdown -->
      <!-- =============================================================
      ============================================================== -->
      <Dropdown header="Colours" :options="coloursList" :isenabled='selectedModel ? true : false' :isclear="selectedModel"/>



      <!-- Enter Your Details Title -->
      <!-- =============================================================
      ============================================================== -->
      <Title title="Enter Your Details"/>



      <!-- Title Dropdown -->
      <!-- =============================================================
      ============================================================== -->
      <Dropdown header="Title" :options="['Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Doctor', 'Master', 'Prof', 'Professor']"/>



      <!-- First Name Input Field -->
      <!-- =============================================================
      ============================================================== -->
      <InputField header="First Name" required="true"/>



      <!-- Last Name Input Field -->
      <!-- =============================================================
      ============================================================== -->
      <InputField header="Last Name" required="true"/>



      <!-- Phone Input Field -->
      <!-- =============================================================
      ============================================================== -->
      <InputField header="Phone" required="true"/>



      <!-- Email Input Field -->
      <!-- =============================================================
      ============================================================== -->
      <InputField header="Email" required="true"/>
      


      <!-- Find a Business Title -->
      <!-- =============================================================
      ============================================================== -->
      <Title title="Find a Business"/>



      <!-- Store Dropdown -->
      <!-- =============================================================
      ============================================================== -->
      <Dropdown header="Store" :options="storenames" @clicked="onStoreNameClick"/>
      


      <!-- Location -->
      <!-- =============================================================
      ============================================================== -->
      <Location :store="selectedStore"/>
    


      <!-- Book Your Test Drive Button -->
      <!-- =============================================================
      ============================================================== -->
      <Button label="Book Your Test Drive" path="/submission" :isform="true"/>
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
/* =================================================================
====================================================================
================================================================= */
import bookAPI from '../../api/bookAPI';
import locationsAPI from '../../api/locationsAPI';




/* Export Default */
/* =================================================================
====================================================================
================================================================= */
export default {
  /* View Name */
  /* ============================================================
  ============================================================ */
  name: "purchase",



  /* Data */
  /* ============================================================
  ============================================================ */
  data() {
    return {
      /* Makes */
      /* ======================================================== */
      makes: [],


      /* Selected Make */
      /* ======================================================== */
      tempSelectedMake: "", selectedMake: "",


      /* Selected Model */
      /* ======================================================== */
      tempSelectedModel: "", selectedModel: "",


      /* Store Names */
      /* ======================================================== */
      storenames: [],


      /* Selected Store */
      /* ======================================================== */
      selectedStore: { address: { street: "" } }
    }
  },



  /* Created */
  /* ============================================================
  ============================================================ */
  async created() {
    // Get All Distinct Makes from Vehicles API
    this.makes = await bookAPI.getAllMakes();

    // Get All Location Store Names from Locations API
    this.storenames = await locationsAPI.getAllStoreNames();

    // Format Store Names
    this.storenames = this.storenames.map(i => i.name);
  },



  /* Async Computed */
  /* ============================================================
  ============================================================ */
  asyncComputed: {
    /* Models List */
    /* ======================================================= */
    async modelsList() {
      // Validate Selected Make
      if(this.tempSelectedMake != this.selectedMake) {
        //Set Selected Make to Temp Selected Make
        this.selectedMake = this.tempSelectedMake;

        //Unset Model
        this.tempSelectedModel = "";
        this.selectedModel = "";
        
        //Get and Return All Models for Selected Make
        return await bookAPI.getModelsByMake(this.selectedMake);
      }
    },


    /* Colours List */
    /* ======================================================= */
    async coloursList() {
      // Validate Selected Model
      if(this.tempSelectedModel != this.selectedModel) {
        //Set Selected Model to Temp Selected Model
        this.selectedModel = this.tempSelectedModel;
        
        //Get and Return All Colours for Selected Make and Model
        return (await bookAPI.getVehicleColours(this.selectedMake, this.selectedModel)).colours;
      }
    },
  },



  /* Methods */
  /* ============================================================
  ============================================================ */
  methods: {
    /* On Make Click */
    /* ======================================================= */
    onMakeClick(make) {
      // Set Temp Selected Make to make
      this.tempSelectedMake = make;
    },


    /* On Model Click */
    /* ======================================================= */
    onModelClick(model) {
      // Set Temp Selected Model to model
      this.tempSelectedModel = model;
    },


    /* On Store Name Click */
    /* ======================================================= */
    async onStoreNameClick(storename) {
      // Get Selected Store from Locations API
      this.selectedStore = await locationsAPI.getLocationByName(storename);
    }
  }
}
</script>