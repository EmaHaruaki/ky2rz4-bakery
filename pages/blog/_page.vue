<template>
  <div id="not_top">
    <SubHeader />

    <div class="jumbotron site-header"
      style="background-image: url(https://ky2rz4-bakery.g.kuroco-img.app/files/user/Image/AdobeStock_304195850.jpeg);">
      <div class="jumbotron-overlay">
        <div class="jumbotron-content">
          <div class="subheader">BLOG</div>
          <h2 class="jumbotron-title">ブログ</h2>
        </div><!-- .jumbotron-content -->
      </div><!-- .jumbotron-overlay -->
    </div><!-- .jumbotron -->

    <div class="cat_block">
      <ul class="cat_list">
        <li><nuxt-link to="/blog/">ALL</nuxt-link></li>
        <li v-for="n in response_category.list" :key="n.topics_category_id">
          <nuxt-link :to="`/blog/category/${n.topics_category_id}`">{{ n.category_nm }}</nuxt-link>
        </li>
      </ul>
    </div>

    <div class="blog_area">
      <div class="menu_block">
        <div class="posts_block">

          <div v-for="n in response_list.list" :key="n.topics_id" class="post_box">
            <nuxt-link :to="`/blog/detail/${n.topics_id}`" class="link_box opa">
              <div class="img_wrap">
                <div class="box_img">
                  <img width="300" height="195" :src="`${n.ext_col_01.url}?width=300&height=195`"
                    class="image wp-post-image" alt="">
                </div>
                <div class="post_cat">{{ n.contents_type_nm }}</div>
              </div>
              <!-- .img_wrap -->
              <div class="textbox">
                <div class="meta_box">
                  <div class="post_date">{{ n.ymd }}</div>
                </div>
                <div class="box_title">{{ n.subject }}</div>
              </div>
              <!-- .textbox -->
            </nuxt-link>
          </div>

        </div>
        <!-- .posts_block -->
      </div>
    </div>

    <div class="blog_nav">
      <nav class="navigation pagination" role="navigation">
        <h2 class="screen-reader-text">投稿ナビゲーション</h2>
        <div class="nav-links">
          <nuxt-link v-if="response_list.pageInfo.pageNo != response_list.pageInfo.startPageNo"
            class="prev page-numbers" :to="`/blog/${response_list.pageInfo.pageNo - 1}`">&laquo; 前へ</nuxt-link>
          <nuxt-link v-for="i in response_list.pageInfo.totalPageCnt" :key="i" class='page-numbers' :to="`/blog/${i}`"
            :class="{ 'current': response_list.pageInfo.pageNo === i, }">{{ i }}</nuxt-link>
          <nuxt-link v-if="response_list.pageInfo.pageNo != response_list.pageInfo.endPageNo" class="next page-numbers"
            :to="`/blog/${response_list.pageInfo.pageNo + 1}`">次へ &raquo;</nuxt-link>
        </div>
      </nav>
    </div>


    <MainFooter />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    return {
      response_list: await $axios.$get('/rcms-api/1/blog/list', { params: { cnt: "6", pageID: params.page } }),
      response_category: await $axios.$get('/rcms-api/1/blog/category'),
    };
  },
};
</script>