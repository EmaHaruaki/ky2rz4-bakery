<template>
  <div id="sub_header">
    <header>
      <nav class="gnav">
        <div class="logo">
          <nuxt-link to="/" class="opa">
            <img src="https://ky2rz4-bakery.g.kuroco-img.app/files/user/logo/logo_transparent.png" alt="街のパン屋"
              class="retina image" scale="0">
          </nuxt-link>
        </div>
        <ul class="h_nav">
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
            <nuxt-link to="/blog/" class="opa">
              <span class="en">BLOG</span>
              <span class="jp">ブログ</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/#shopinfo" class="opa">
              <span class="en">SHOP INFO</span>
              <span class="jp">店舗情報</span>
            </nuxt-link>
          </li>
        </ul>

        <div class="right_block">
          <div class="h_info">
            <div class="tel">TEL 03-1234-5678</div>
            <div class="time">OPEN 9:00〜16:00 / CLOSE 火・水<br>※売り切れ次第閉店</div>
          </div>
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
        <div class="logo_box"><nuxt-link to="/" class="opa"><img
              src="https://ky2rz4-bakery.g.kuroco-img.app/files/user/logo/logo_transparent.png" alt="街のパン屋"
              class="image" scale="0"></nuxt-link></div>
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
              <nuxt-link to="/blog/" class="opa">
                <span class="en">BLOG</span>
                <span class="jp">ブログ</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/#" class="opa">
                <span class="en">SHOP INFO</span>
                <span class="jp">店舗情報</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="bottom_block">
          <div class="info_wrap">
            <div class="tel tel_link" data-number="0312345678"><a href="tel:0312345678">TEL 03-1234-5678</a></div>
            <div class="time">OPEN 9:00〜16:00 / CLOSE 火・水<br>※売り切れ次第閉店</div>
          </div>
          <ul class="sns_list">
            <li><a href="https://www.facebook.com/" target="_blank" class="opa"></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" class="opa"></a></li>
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

