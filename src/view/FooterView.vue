<template>
  <footer>
    <div class="container p-5">
      <div class="row text-white">
        <div class="col-xl-6 col-md-4 col-sm-12">
          <div class="title mb-3 fs-2 fw-bold">比賽場次</div>
          <ul class="fs-5 p-0 list-unstyled">
            <li>北護場 08 / 27 舉辦</li>
            <li>文大場 09 / 04 舉辦</li>
            <li>明道場 日期待定</li>
            <li>真理場 日期待定</li>
        </ul>
        </div>
        <div class="col-xl-6 col-md-8 col-sm-12 d-md-flex justify-content-end mt-5 mt-md-0">
          <div>
            <div class="title mb-3 fs-2 fw-bold">聯絡資訊</div>
            <ul class="fs-5 p-0 list-unstyled float-start">
              <li>
                <fa :icon="['fa-solid', 'phone']" class="me-2" />
                <a href="tel:02-2701-0928" class="text-decoration-none text-white">(02) 2701 0928</a>
                <br>(週一 ~ 週五 12:00 ~ 18:30)
              </li>
              <li>
                <fa :icon="['fa-solid', 'envelope']" class="me-2"/>
                <a href="mailto:core@codedriven.org" class="text-decoration-none text-white">core@codedriven.org</a>
              </li>
              <li>
                <fa :icon="['fa-solid', 'location-dot']" class="me-2" /> 
                <a href="https://goo.gl/maps/4YNKJ7Hi7vQascrq9" class="text-decoration-none text-white">台北市大安區復興南路一段360號3樓</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 pt-5 fw-normal">
          <div class="copyright text-center">© 2022 by 程式驅動 | 本站所有素材引用至 Mojang 旗下遊戲 Minecraft</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
  background-image: url('../assets/img/footer-Bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}
</style>