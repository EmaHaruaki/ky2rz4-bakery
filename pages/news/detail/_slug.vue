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

		<div class="main_area">
			<div class="left_area post_single">
				<div class="main_block">
					<div class="meta_box">
						<div class="post_date">{{ response_detail.details.ymd }}</div>
					</div>
					<h1 class="post_title">{{ response_detail.details.subject }}</h1>
					<div v-html="response_detail.details.contents" class="post_content"></div>
					<!-- .post_content -->
				</div>

				<div class="back_link btn_box">
					<nuxt-link to="/news/" class="btn opa"><span>ニュース一覧に戻る</span></nuxt-link>
				</div>

				<div class="single_nav_block">
					<div class="left_box nav_item">
						<span v-if="response_prev_next.list[1].topics_id == $route.params.slug" class="next">
							<nuxt-link :to="`/news/detail/${response_prev_next.list[0].topics_id}`" rel="next">
								{{ response_prev_next.list[0].subject }}</nuxt-link>
						</span>
					</div>
					<!-- .left_box -->
					<div class="right_box nav_item">
						<span v-if="response_prev_next.list[0].topics_id == $route.params.slug" class="prev">
							<nuxt-link :to="`/news/detail/${response_prev_next.list[1].topics_id}`" rel="prev">
								{{ response_prev_next.list[1].subject }}</nuxt-link>
						</span>
						<span
							v-else-if="response_prev_next.list[1].topics_id == $route.params.slug && response_prev_next.list.length > 2"
							class="prev">
							<nuxt-link :to="`/news/detail/${response_prev_next.list[2].topics_id}`" rel="prev">
								{{ response_prev_next.list[2].subject }}</nuxt-link>
						</span>
						<!-- .right_box -->
					</div><!-- .nav-links -->
				</div><!-- .post-navigation -->
			</div>
		</div>

		<MainFooter />
	</div>
</template>
  
<script>
export default {
	async asyncData({ $axios, params }) {
		return {
			response_detail: await $axios.$get(`/rcms-api/1/news/details/${params.slug}`),
			response_list: await $axios.$get('/rcms-api/1/news/list', { params: { cnt: 5 } }),
			response_prev_next: await $axios.$get('/rcms-api/1/news/list', { params: { cnt: 1, central_id: params.slug } }),
		};
	},
};
</script>