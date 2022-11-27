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

		<div class="main_area">
			<div class="left_area post_single">
				<ul class="cat_list">
					<li>
						<nuxt-link :to="`/blog/category/${response_detail.details.contents_type}`" class="opa">{{
								response_detail.details.contents_type_nm
						}}</nuxt-link>
					</li>
				</ul>

				<div class="main_block">
					<div class="meta_box">
						<div class="post_date">{{ response_detail.details.ymd }}</div>
					</div>
					<h1 class="post_title">{{ response_detail.details.subject }}</h1>
					<div v-html="response_detail.details.contents" class="post_content"></div>
					<!-- .post_content -->
				</div>

				<div class="back_link btn_box">
					<nuxt-link to="/blog/" class="btn opa"><span>ブログ記事一覧に戻る</span></nuxt-link>
				</div>

				<div class="single_nav_block">
					<div class="left_box nav_item">
						<span v-if="response_prev_next.list[1].topics_id == $route.params.slug" class="next">
							<nuxt-link :to="`/blog/detail/${response_prev_next.list[0].topics_id}`" rel="next">
								{{ response_prev_next.list[0].subject }}</nuxt-link>
						</span>
					</div>
					<!-- .left_box -->
					<div class="right_box nav_item">
						<span v-if="response_prev_next.list[0].topics_id == $route.params.slug" class="prev">
							<nuxt-link :to="`/blog/detail/${response_prev_next.list[1].topics_id}`" rel="prev">
								{{ response_prev_next.list[1].subject }}</nuxt-link>
						</span>
						<span
							v-else-if="response_prev_next.list[1].topics_id == $route.params.slug && response_prev_next.list.length > 2"
							class="prev">
							<nuxt-link :to="`/blog/detail/${response_prev_next.list[2].topics_id}`" rel="prev">
								{{ response_prev_next.list[2].subject }}</nuxt-link>
						</span>
						<!-- .right_box -->
					</div><!-- .nav-links -->
				</div><!-- .post-navigation -->
			</div>

			<div class="right_area type_side">
				<div class="category_block block">
					<div class="block_head title_type02">
						<div class="en">Category</div>
						<div class="jp">カテゴリー</div>
					</div>

					<ul class="category_list">
						<li>
							<nuxt-link to="/blog/">ALL</nuxt-link>
						</li>
						<li v-for="n in response_category.list" :key="n.topics_category_id" class="cat-item"
							:class="`cat-item-${n}`">
							<nuxt-link :to="`/blog/category/${n.topics_category_id}`">{{ n.category_nm }}</nuxt-link>
						</li>
					</ul>
				</div>
				<!-- .category_block -->

				<div class="new_block block">
					<div class="block_head title_type02">
						<div class="en">New Post</div>
						<div class="jp">新着記事</div>
					</div>
					<div class="posts_block_small">

						<div v-for="n in response_list.list" :key="n.topics_id" class="post_box">
							<nuxt-link :to="`/blog/detail/${n.topics_id}`" class="link_box opa">
								<div class="img_wrap">
									<div class="box_img">
										<img width="240" height="160" :src="`${n.ext_col_01.url}?width=240&height=160`"
											class="image wp-post-image" alt="" scale="0">
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
						<!-- .post_box -->

					</div>
					<!-- .posts_block_small -->
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
			response_detail: await $axios.$get(`/rcms-api/1/blog/details/${params.slug}`),
			response_category: await $axios.$get('/rcms-api/1/blog/category'),
			response_list: await $axios.$get('/rcms-api/1/blog/list', { params: { cnt: 5 } }),
			response_prev_next: await $axios.$get('/rcms-api/1/blog/list', { params: { cnt: 1, central_id: params.slug } }),
		};
	},
};
</script>