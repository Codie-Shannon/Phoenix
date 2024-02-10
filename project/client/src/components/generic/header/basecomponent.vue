<!-- Setup Script -->
<!-- =================================================================
======================================================================
================================================================== -->
<script setup>
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
  <!-- Header Container-->
  <!-- =================================================================
  ================================================================== -->
  <div class="header_container">
    <!-- Header -->
    <!-- ============================================================ -->
    <h2 :class="[heading.islight ? 'header_element_light' : 'header_element_dark', 'header_element']" >{{ heading.heading }}</h2>


    <!-- Subheader -->
    <!-- ============================================================ -->
    <h6 :class="[heading.islight ? 'header_element_light' : 'header_element_dark', 'header_element subheader_element']" v-show="heading.subheading">{{ heading.subheading }}</h6>
    

    <!-- Underline -->
    <!-- ============================================================ -->
    <div :class="[heading.isunderline ? 'underline_visible' : 'underline_hidden', heading.islight ? 'underline_light' : 'underline_dark']"/>
  </div>
</template>




<!-- Script -->
<!-- =================================================================
======================================================================
================================================================== -->
<script>
/* Import Headings API */
/* =================================================================
================================================================= */
import headingsAPI from "../../../api/headingsAPI";



/* Export Default */
/* =================================================================
================================================================= */
export default {
  /* Properties */
  /* ================================================================== */
  props: {
    /* Page */
    page: { type: String, required: false },

    /* Header */
    header: { type: String, required: false, default: "Heading" },

    /* Subheader */
    subheader: { type: String, required: false, default: "" },

    /* Value Determining if the Header has an Underline */
    isunderline: { type: Boolean, required: false, default: true },

    /* Value Determining if the Header is Light or Dark */
    islight: { type: Boolean, required: false, default: false }
  },


  /* Data */
  /* ============================================================ */
  data() {
    return {
      /* Heading */
      heading: []
    }
  },


  /* Created */
  /* ============================================================ */
  async created() {
    //Validate Page
    if(this.page) {
      // Get Page Heading from Headings API
      this.heading = await headingsAPI.getHeadingByPage(this.page);
    }
    else {
      //Set Heading to Object of Passed Properties
      this.heading = {
        heading: this.header,
        subheading: this.subheader,
        isunderline: this.isunderline,
        islight: this.islight
      }
    }
  }
};
</script>