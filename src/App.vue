<template>
  <NavbarView />
  <router-view />
  <FooterView />
</template>

<script>
import NavbarView from './view/NavbarView.vue';
import FooterView from './view/FooterView.vue';

export default {
  components: {
    NavbarView,
    FooterView,
  }
} 
</script>

<style>
* {
  box-sizing: border-box;
  position: relative;
}

.row {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: black;
}

nav .nav-item:after {
  content: '';
  width: 0%;
  height: 4px;
  background-color: yellow;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  transition: all 0.2s ease-out;
}
nav .nav-item:hover.nav-item:after {
  width: 100%;
}
.infoPage {
  background-color: #fff;
}
.card {
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0,0,0,0.3) !important;
}

@media screen and (max-width: 992px) {
  nav .nav-item:hover.nav-item:after {
    width: 15% !important;
  }

  .infoPage {
    position: relative !important;
    z-index: 0 !important;
    top: 0 !important;
    left: 0 !important;
    transform: translate(0%) !important;
  }

  #aboutBg, #realCartBg, #NFTCartBg, #productBg {
    height: 20vh !important;
  }

  #about, #realCart, #NFTCart, #product {
    height: auto !important;
  }
}
</style>
