<template>
  <div>
    <p>認証が完了しました</p>
  </div>
</template>

<script>
export default {
  validate({ query }) {
        return query.code != null
    },
  methods: {
    async makeAccessToen() {
      const payload = {
        code: this.$route.query.code
      }
      await this.$axios.post('/rcms-api/1/auth', payload);
    }
  },
  mounted($route) {
    this.makeAccessToen();
  }
}
</script>
