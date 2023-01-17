<template>
  <div id="main_header">
    <header>
      <nav class="gnav">
        <div class="logo">
          <nuxt-link to="/" class="opa">
            <img src="https://ky2rz4-bakery.g.kuroco-img.app/files/user/logo/AdobeStock_265183690-white.png" alt="街のパン屋"
              class="image" scale="0">
          </nuxt-link>
        </div>
        <ul class="h_nav">
          <li>
            <nuxt-link to="/menu/" class="opa">
              <div class="nav_text">
                <span class="en">MENU</span>
                <span class="jp">メニュー</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/news/" class="opa">
              <div class="nav_text">
                <span class="en">NEWS</span>
                <span class="jp">お知らせ</span>
              </div>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/#shopinfo" class="opa">
              <div class="nav_text">
                <span class="en">SHOP</span>
                <span class="jp">店舗情報</span>
              </div>
            </nuxt-link>
          </li>
        </ul>
        <div class="bottom_block">
          <p>SNS LIST</p>
          <ul class="sns_list">
            <li><a href="https://jp.mercari.com/user/profile/280608396" target="_blank"></a></li>
            <li><a href="https://www.instagram.com/pittabagel_sweets/" target="_blank"></a></li>
          </ul>
        </div>
      </nav>
    </header>

    <div class="panel_area" :class="{ 'drawer-opened': active01 }">
      <div class="panel_btn_box" @click='active01 = !active01'>
        <span class="panel_btn">
          <span class="drawer-hamburger-icon"></span>
          <span class="screen-reader-text-closed">MENU</span>
          <span class="screen-reader-text-opened">CLOSE</span>
        </span>
      </div>

      <div class="panel_wrap">
        <div class="logo_box">
          <nuxt-link to="/" class="opa"><img
              src="https://ky2rz4-bakery.g.kuroco-img.app/files/user/logo/AdobeStock_265183690-white.png" alt="街のパン屋"
              class="image" scale="0"></nuxt-link>
        </div>
        <div class="nav_block">
          <ul class="nav_list">
            <li>
              <nuxt-link to="/menu/" class="opa">
                <span class="en">MENU</span>
                <span class="jp">メニュー</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/news/" class="opa">
                <span class="en">NEWS</span>
                <span class="jp">お知らせ</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#shopinfo" class="opa">
                <span class="en">SHOP INFO</span>
                <span class="jp">店舗情報</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="bottom_block">
          <div class="info_wrap">
            <!--<div class="tel tel_link" data-number="0312345678"><a href="tel:0312345678">TEL 03-1234-5678</a></div>-->
            <div class="time">OPEN：水・木・金　15:30~ / CLOSE：月・火・土・日<br>※売り切れ次第閉店<br>メルカリ販売は<a href="https://jp.mercari.com/user/profile/280608396" target="_blank">こちら</a></div>
          </div>
          <ul class="sns_list">
            <li><a href="https://jp.mercari.com/user/profile/280608396" target="_blank" class="opa"></a></li>
            <li><a href="https://www.instagram.com/pittabagel_sweets/" target="_blank" class="opa"></a></li>
          </ul>
        </div>
      </div>
      <div class="panel_overlay"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active01: false,
      toggle01: false,
      toggle02: false,
    }
  },
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    closemenu() {
      this.active01 = false,
        this.toggle01 = false,
        this.toggle02 = false
    }
  },
}
</script>