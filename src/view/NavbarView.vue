<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid sticky-top">
      <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav fs-5">
          <li class="nav-item px-3 mx-2">
            <router-link to="/" class="nav-link text-center pe-auto">首頁</router-link>
          </li>
          <li class="nav-item px-3 mx-2">
            <router-link to="/about" class="nav-link text-center">關於</router-link>
          </li>
          <li class="nav-item px-3 mx-2">
            <router-link to="/realProducts" class="nav-link text-center">比賽周邊</router-link>
          </li>
          <li class="nav-item px-3 mx-2">
            <router-link to="/nftProducts" class="nav-link text-center">元宇宙商圈</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>

</style>