<template>
  <div id="nav">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="#">
        <img
          src="../../assets/images/supernova-lending-logo.svg"
          class="d-inline-block align-middle pl-3 pr-5"
          alt="Supernova lending logo"
        >
      </b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <router-link to="/home">Home</router-link>
          <router-link to="/Client_Service">Client Service</router-link>
          <a>Action Center</a>
          <a>Analytics</a>
          <router-link to="/Collateral_Monitor">Collateral Monitor</router-link>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <a>Hi, John</a>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TopNav"
};
</script>