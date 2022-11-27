<template>
  <div id="not_top">
    <SubHeader />

    <div class="jumbotron site-header"
      style="background-image: url(https://ky2rz4-bakery.g.kuroco-img.app/files/user/Image/AdobeStock_304195850.jpeg);">
      <div class="jumbotron-overlay">
        <div class="jumbotron-content">
          <div class="subheader">MENU</div>
          <h2 class="jumbotron-title">メニュー</h2>
        </div><!-- .jumbotron-content -->
      </div><!-- .jumbotron-overlay -->
    </div><!-- .jumbotron -->

    <div class="menu_block">
      <div v-for="cat in response_list" :key="cat.category_id">
        <h2 class="menu_category">{{ cat.category.category_nm }}</h2>
        <div class="box_wrap">
          <div v-for="pro in cat.list" :key="pro.topics_id" class="box">
            <div class="box_img">
              <img width="280" height="230" :src="`${pro.ext_col_01.url}?width=280&height=230`"
                class="image wp-post-image" alt="" scale="0">
            </div>
            <div class="textbox">
              <div class="box_title">{{ pro.subject }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- .box_wrap -->

    </div>

    <MainFooter />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    return {
      response_list: await $axios.$get('/rcms-api/1/product/list', { params: { cnt: "0", groupBy: "category" } }),
    };
  },
};
</script>