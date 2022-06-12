<template>
  <NavbarView />

  <!-- TODO: banner -->
  <div id="banner" class="vh-100">
    <div id="bannerBody" class="container p-5 h-100">
      <div class="title pt-5 text-center text-white fw-bold">2022麥塊建築大賽</div>
      <img class="serverImg w-100 px-5 img-fluid  position-absolute bottom-0 start-0" src="../assets/img/serverImg.png" height="100%" />
    </div>
  </div>

  <!-- TODO: main -->
  <main>

    <!-- TODO: body -->
    <section>

      <!-- TODO: news -->
      <div id="news" class="container mx-auto p-5">
        <div class="title text-center fs-1">最新消息</div>
        <div class="m-3">
          <div class="news d-flex align-items-center px-3 py-2 overflow-hidden w-100">
            <div class="px-3 py-1 rounded-pill bg-primary text-light">4/20</div>
            <div class="ps-3 d-inline-block text-truncate">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia facere numquam sequi tempore unde ratione!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia facere numquam sequi tempore unde ratione!
            </div>
          </div>
          <div class="news d-flex align-items-center px-3 py-2 overflow-hidden w-100">
            <div class="px-3 py-1 rounded-pill bg-primary text-light">4/20</div>
            <div class="ps-3 d-inline-block text-truncate">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia facere numquam sequi tempore unde ratione!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia facere numquam sequi tempore unde ratione!
            </div>
          </div>
          <div class="news d-flex align-items-center px-3 py-2 overflow-hidden w-100">
            <div class="px-3 py-1 rounded-pill bg-primary text-light">4/20</div>
            <div class="ps-3 d-inline-block text-truncate">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia facere numquam sequi tempore unde ratione!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia facere numquam sequi tempore unde ratione!
            </div>
          </div>
          <div class="news d-flex align-items-center px-3 py-2 overflow-hidden w-100">
            <div class="px-3 py-1 rounded-pill bg-primary text-light">4/20</div>
            <div class="ps-3 d-inline-block text-truncate">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia facere numquam sequi tempore unde ratione!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia facere numquam sequi tempore unde ratione!
            </div>
          </div>
        </div>
      </div>

      <!-- TODO: feature -->
      <div id="feature">
        <div class="container p-5">
          <div class="row text-light text-center fw-bold fs-3">
            <div class="col-md-4 col-sm-12 px-md-3 px-sm-0 py-5 d-flex flex-column justify-content-between overflow-hidden">
              <div class="d-flex align-items-center justify-content-center">
                <img class="img-fluid" src="../assets/img/feature-Img-01.png" width="70%">
              </div>
              <div class="para featureBg-1 mt-3 d-flex align-items-center justify-content-center">時而生存、時而創造</div>
            </div>
            <div class="col-md-4 col-sm-12 px-md-3 px-sm-0 py-5 d-flex flex-column justify-content-between overflow-hidden">
              <div class="d-flex align-items-center justify-content-center">
                <img class="img-fluid" src="../assets/img/feature-Img-02.png" width="70%">
              </div>
              <div class="para featureBg-2 mt-3 d-flex align-items-center justify-content-center">耐人尋味的關卡</div>
            </div>
            <div class="col-md-4 col-sm-12 px-md-3 px-sm-0 py-5 d-flex flex-column justify-content-between overflow-hidden">
              <div class="d-flex align-items-center justify-content-center">
                <img class="img-fluid" src="../assets/img/feature-Img-03.png" width="70%">
              </div>
              <div class="para featureBg-3 mt-3 d-flex align-items-center justify-content-center">想蓋自己的小天地？<br>那就蓋吧！</div>
            </div>
          </div>
        </div>
      </div>

      <!-- TODO: info -->
      <div id="info" class="container p-5">
        <div class="row fw-bold">
          <div class="col-md-6 col-sm-12 row text-center mb-5">
            <div class="title mb-5 text-center fs-1">社群平台</div>
            <a href="https://www.facebook.com/" class="col-6">
              <img src="../assets/img/fb-logo.png" class="img-fiuid w-50" >
            </a>
            <a href="https://discord.com/" class="col-6">
              <img src="../assets/img/discord-logo.png" class="img-fiuid w-50" >
            </a>
          </div>
          <div class="col-md-6 col-sm-12 row text-center mb-5">
            <div class="title mb-5 text-center fs-1">合作夥伴</div>
            <a href="https://www.sce.pccu.edu.tw/" class="col-6">
              <img src="../assets/img/icon-sce.png" alt="文化大學推廣教育部" class="img-fiuid w-50">
            </a>
            <a href="https://www.codedriven.org/" class="col-6 d-flex align-items-center justify-content-center">
              <img src="../assets/img/icon-app.png" alt="程式驅動" class="img-fiuid w-50">
            </a>
          </div>
        </div>
      </div>

      <!-- TODO: server -->
      <div id="server">
        <div class="container p-5 pt-0">
          <div class="d-flex flex-column justify-content-center">
            <div class="text-center mb-5 fs-1 fw-bold">伺服器狀態</div>
            <a href="https://minecraft-mp.com/server-s303741" target="_blank">
              <img src="https://minecraft-mp.com/banner-303741-3.png" class="w-100">
            </a>
          </div>
        </div>
      </div>

    </section>

  </main>
</template>

<script>
import NavbarView from "./NavbarView.vue";

export default {
  name: 'HomeView',
  components: {
    NavbarView,
  }
}
</script>

<style scoped>
#banner {
  background-image: url('../assets/img/title-Bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#banner .title {
  font-size: 5rem;
}

.news {
  cursor: pointer;
  transition: 0.3s;
}
.news:hover {
  transform: scale(1.02);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

#feature {
  background-color: rgb(232, 232, 232);
}
#feature .para {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  height: 200px;
  max-height: 100%;
}
#feature .featureBg-1 {
  background-image: url('../assets/img/feature-Bg-01.png');
}
#feature .featureBg-2 {
  background-image: url('../assets/img/feature-Bg-02.png');
}
#feature .featureBg-3 {
  background-image: url('../assets/img/feature-Bg-03.png');
}

#info * {
  /* border: 1px solid; */
}
#info .fa-brands {
  font-size: 100px;
}
#info .fa-facebook {
  color: rgb(0, 106, 255);
}
#info .fa-discord {
  color: rgb(61, 43, 255);
}
</style>