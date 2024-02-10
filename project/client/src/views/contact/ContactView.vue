<!-- Setup Script -->
<!-- =================================================================
======================================================================
================================================================== -->
<script setup>
/* Import Components */
/* =================================================================
================================================================= */
import Header from "../../components/generic/header/basecomponent.vue";
import Information from "../../components/contact/information/basecomponent.vue";



/* Import Style Sheet */
/* =================================================================
================================================================= */
import './style.css';
</script>




<!-- Template -->
<!-- =================================================================
======================================================================
================================================================== -->
<template>
    <!-- Container -->
    <!-- ================================================================
    ================================================================= -->
    <div id="contact_container">
        <!-- Header -->
        <!-- ============================================================ -->
        <Header page="contact"/>


        <!-- Phone -->
        <!-- ============================================================ -->
        <Information header="Phone" :content="headoffice.phone"/>


        <!-- Email -->
        <!-- ============================================================ -->
        <Information header="Email" :content="headoffice.email"/>


        <!-- Street Address -->
        <!-- ============================================================ -->
        <Information header="Street Address" :contentgroup="[headoffice.address.street, headoffice.address.city, headoffice.address.country]"/>


        <!-- Open Hours -->
        <!-- ============================================================ -->
        <Information header="Open Hours" :contentgroup="[`Sun : ${headoffice.hours.sunday[0]} - ${headoffice.hours.sunday[1]}`,
                                                        `Mon : ${headoffice.hours.monday[0]} - ${headoffice.hours.monday[1]}`,
                                                        `Tue : ${headoffice.hours.tuesday[0]} - ${headoffice.hours.tuesday[1]}`,
                                                        `Wed : ${headoffice.hours.wednesday[0]} - ${headoffice.hours.wednesday[1]}`,
                                                        `Thur : ${headoffice.hours.thursday[0]} - ${headoffice.hours.thursday[1]}`, 
                                                        `Fri : ${headoffice.hours.friday[0]} - ${headoffice.hours.friday[1]}`,
                                                        `Sat : ${headoffice.hours.saturday[0]} - ${headoffice.hours.saturday[1]}`]"/>
    </div>
</template>




<!-- Script -->
<!-- =================================================================
======================================================================
================================================================== -->
<script>
/* Import API */
/* =================================================================
================================================================= */
import locationsAPI from '../../api/locationsAPI';



/* Export Default */
/* =================================================================
================================================================= */
export default {
  /* View Name */
  /* ============================================================ */
  name: "contact",


  /* Data */
  /* ============================================================ */
  data() {
    return {
      /* Heading */
      headoffice: []
    }
  },


  /* Created */
  /* ============================================================ */
  async created() {
      // Get Head Office from Locations API
      this.headoffice = await locationsAPI.getHeadOffice();
  }
}
</script>