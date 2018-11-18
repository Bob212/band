<template>
  <div class="loading">
    <p>Загрузка...</p>
  </div>
</template>

<script>

export default {
  name: 'Loading',
  data () {
    return {
      fields: 20,
      garden: [],
      myCarrots: 0,
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.gameInfo.isLoading
    }),
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.loading {
  background: url(../assets/img/loading.jpg) no-repeat center center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    cursor: default;
  }
}
</style>
