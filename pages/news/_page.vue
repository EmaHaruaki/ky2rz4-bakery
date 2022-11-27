<template>
	<div id="not_top">
		<SubHeader />

		<div class="jumbotron site-header"
			style="background-image: url(https://ky2rz4-bakery.g.kuroco-img.app/files/user/Image/AdobeStock_304195850.jpeg);">
			<div class="jumbotron-overlay">
				<div class="jumbotron-content">
					<div class="subheader">NEWS</div>
					<h2 class="jumbotron-title">ニュース</h2>
				</div><!-- .jumbotron-content -->
			</div><!-- .jumbotron-overlay -->
		</div><!-- .jumbotron -->

		<div class="left_area">
			<div class="posts_block">

				<div class="post_box" v-for="n in response_list.list" :key="n.topics_id">
					<nuxt-link :to="`/news/detail/${n.topics_id}`" class="link_box opa">
						<div class="textbox">
							<div class="meta_box">
								<div class="post_date">{{ n.ymd }}</div>
							</div>
							<div class="box_title">{{ n.subject }}</div>
						</div>
						<!-- .textbox -->
					</nuxt-link>
				</div>
				<!-- .post_box -->

			</div>
			<!-- .posts_block -->

			<div class="navigation pagination">
				<h2 class="screen-reader-text">投稿ナビゲーション</h2>
				<div class="nav-links">
					<nuxt-link v-if="response_list.pageInfo.pageNo != response_list.pageInfo.startPageNo"
						class="prev page-numbers" :to="`/news/${response_list.pageInfo.pageNo - 1}`">&laquo; 前へ
					</nuxt-link>
					<nuxt-link v-for="i in response_list.pageInfo.totalPageCnt" :key="i" class='page-numbers'
						:to="`/news/${i}`" :class="{ 'current': response_list.pageInfo.pageNo === i, }">{{ i }}
					</nuxt-link>
					<nuxt-link v-if="response_list.pageInfo.pageNo != response_list.pageInfo.endPageNo"
						class="next page-numbers" :to="`/news/${response_list.pageInfo.pageNo + 1}`">次へ &raquo;
					</nuxt-link>
				</div>
			</div>
		</div>



		<MainFooter />
	</div>
</template>
  
<script>
export default {
	async asyncData({ $axios, params }) {
		return {
			response_list: await $axios.$get('/rcms-api/1/news/list', { params: { cnt: "10", pageID: params.page } }),
		};
	},
};
</script>