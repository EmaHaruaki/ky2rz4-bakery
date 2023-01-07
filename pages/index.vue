<template>
  <div id="container">
    <MainHeader />

    <div id="mainvisual">
      <h1 class="main_logo">
        <img src="https://ky2rz4-bakery.g.kuroco-img.app/files/user/logo/logo_transparent.png" alt="街のパン屋"
          class="retina image" scale="0">
      </h1>
      <div class="main_visual"
        style="background-image: url(https://ky2rz4-bakery.g.kuroco-img.app/files/user/Image/AdobeStock_240837011.jpg);">
        <div class="visual_text">
          <span>
            四季折々の味が楽しめる<br>
            地元長野の素材を使った<br>
            ハード系を中心としたパン
          </span>
        </div>
      </div>
    </div>
    <!-- /#mainvisual -->

    <div class="h_info">
      <div class="tel">TEL 03-1234-5678</div>
      <div class="time">OPEN 9:00〜16:00 / CLOSE 火・水<br>※売り切れ次第閉店</div>
    </div>

    <div id="contents_index" class="contents">

      <div class="news_area">
        <div class="base_inner">
          <h2 class="area_head title_type01">News</h2>
          <div class="posts_block">
            <div v-for="n in news_list.list" :key="n.topics_id" class="post_box">
              <nuxt-link :to="`/news/detail/${n.topics_id}`" class="link_box opa">
                <div class="left_box">
                  <div class="post_date">{{ n.ymd }}</div>
                </div>
                <div class="box_title">{{ n.subject }}</div>
              </nuxt-link>
            </div>
            <!-- .posts_block -->
            <div class="btn_box">
              <nuxt-link to="/news/" class="btn_type01 btn opa"><span>more</span></nuxt-link>
            </div>
          </div>
          <!-- .base_inner -->
        </div>
      </div>

      <div class="insta_area">
        <div class="base_inner">
          <h2 class="area_head title_type01">Instagram</h2>
          <div class="square_contents">
            <a v-for="(n,i) in insta_detail.details.media_url" :key=i href="https://www.instagram.com/emma__web_design/" target="_blank"><img :src=n></a>
          </div>
        </div>
      </div>

      <div class="menu_area">
        <div class="base_inner">
          <h2 class="area_title title_type01">Menu Line Up</h2>

          <div class="menu_wrap">

            <div class="left_block block">
              <div class="box_wrap">
                <div class="box">
                  <nuxt-link to="/menu/">
                    <div class="img_box">
                      <img :src="menu_list.list[0].ext_col_01.url" alt="" class="retina image" scale="0">
                    </div>
                    <div class="textbox">
                      <div class="text">
                        <div class="box_title">{{ menu_list.list[0].subject }}</div>
                        <!--<div class="price">&yen;000</div>-->
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>

              <div class="bottom_wrap wrap_col2 box_wrap">
                <div v-for="n in 2" :key="n.topics_id" class="box">
                  <nuxt-link to="/menu/">
                    <div class="img_box">
                      <img :src="menu_list.list[n].ext_col_01.url" alt="" class="retina image" scale="0">
                    </div>
                    <div class="textbox">
                      <div class="text">
                        <div class="box_title">{{ menu_list.list[n].subject }}</div>
                        <!--<div class="price">&yen;000</div>-->
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>

            <div class="right_block block">
              <div class="wrap_col2 box_wrap">
                <div v-for="n in 2" :key="n.topics_id" class="box">
                  <nuxt-link to="/menu/">
                    <div class="img_box">
                      <img :src="menu_list.list[n + 2].ext_col_01.url" alt="" class="retina image" scale="0">
                    </div>
                    <div class="textbox">
                      <div class="text">
                        <div class="box_title">{{ menu_list.list[n + 2].subject }}</div>
                        <!--<div class="price">&yen;000</div>-->
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
              <div class="bottom_wrap box_wrap">
                <div class="box">
                  <nuxt-link to="/menu/">
                    <div class="img_box">
                      <img :src="menu_list.list[5].ext_col_01.url" alt="" class="retina image" scale="0">
                    </div>
                    <div class="textbox">
                      <div class="text">
                        <div class="box_title">{{ menu_list.list[5].subject }}</div>
                        <!--<div class="price">&yen;000</div>-->
                      </div>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <!-- .menu_wrap -->

          <div class="btn_box">
            <nuxt-link to="/menu/" class="btn_type01 btn opa"><span>more</span></nuxt-link>
          </div>
        </div>
        <!-- .base_inner -->
      </div>

      <div id="shopinfo" class="info_area">
        <div class="base_inner">
          <div class="area_title title_type01">Shop Info</div>
          <div class="img_wrap">
            <div class="area_img"
              style="background-image: url(https://ky2rz4-bakery.g.kuroco-img.app/files/user/Image/AdobeStock_320318663.jpeg);">
            </div>
          </div>

          <div class="block_wrap">
            <div class="left_block">
              <div class="shop_name">街のパン屋</div>
              <div class="address">
                〒135-0000<br>
                東京都江東区住吉x-xx-x
              </div>
              <div class="contact_wrap info_box">
                <div class="tel_box contact_box tel_link" data-number="0312345678">
                  <span class="box_head">TEL</span><span class="tel">03-1234-5678</span>
                </div>
                <div class="mail_box contact_box">
                  <span class="box_head">MAIL</span><a href="mailto:example@example.com"
                    class="mail">example@example.com</a>
                </div>
              </div>
              <!-- .info_wrap -->

              <div class="time_wrap info_box">
                <div class="open">営業時間/9:00〜16:00（売り切れ次第終了）</div>
                <div class="close">定休日/火・水</div>
              </div>
              <!-- .time_wrap -->

              <div class="access info_box">
                住吉駅より徒歩5分<br>

              </div>
            </div>
            <!-- .left_block -->

            <div class="right_block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.3159110266847!2d139.8127350395483!3d35.68763154717061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601888dfbadb7325%3A0x50131cc0648705ce!2z5L2P5ZCJ6aeF!5e0!3m2!1sja!2smy!4v1669386666971!5m2!1sja!2smy"
                width="480" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <!-- .right_block -->
          </div>
          <!-- .info_wrap -->
        </div>
        <!-- .base_inner -->
      </div>

    </div>
    <!-- /#contents -->

    <MainFooter />
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
  async asyncData({ $axios, params }) {
    return {
      news_list: await $axios.$get('/rcms-api/1/news/list', { params: { cnt: "3" } }),
      blog_list: await $axios.$get('/rcms-api/1/blog/list', { params: { cnt: "4" } }),
      menu_list: await $axios.$get('/rcms-api/1/product/list', { params: { cnt: "6" } }),
      insta_detail: await $axios.$get('/rcms-api/1/instagram/detail/25'),
    };
  },
}
</script>

<style>
.square_contents {
  display: flex;
  flex-wrap: wrap;
}

.square_contents a {
  display: block;
  position: relative;
  width: 31%;
  margin: 1%;
}

.square_contents a::before {
  content: "";
  display: block;
  padding-top: 100%;
}

.square_contents img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  object-fit: cover;
}
</style>