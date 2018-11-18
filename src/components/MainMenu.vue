<template>
  <div class="main-menu std-block bg-image">
    <Header></Header>
    <div class="main-menu__left-bar">
      <div class="main-menu__left-bar__wrapper">
        
        <div class="main-menu__left-bar__item">
          <div class="main-menu__left-bar__img">
            <img src="../assets/img/fist.png" alt="">
          </div>
          <div class="main-menu__left-bar__text">
            1:51:34
          </div>
        </div>

        <div class="main-menu__left-bar__item">
          <div class="main-menu__left-bar__img">
            <img src="../assets/img/dragon.png" alt="">
          </div>
          <div class="main-menu__left-bar__text">
            0 / 5
          </div>
        </div>

      </div>
    </div>
    <div class="main-menu__right-bar">
      <div class="main-menu__right-bar__wrapper">
        <div class="main-menu__right-bar__item">
          <div class="main-menu__right-bar__img">
            <img src="../assets/img/rupor.png" alt="">
          </div>
          <div class="main-menu__right-bar__text">
            События
          </div>
          <div class="main-menu__right-bar__notification">10</div>
        </div>

        <div class="main-menu__right-bar__item">
          <div class="main-menu__right-bar__img">
            <img src="../assets/img/rupor.png" alt="">
          </div>
          <div class="main-menu__right-bar__text">
            Новости
          </div>
          <div class="main-menu__right-bar__notification">!</div>
        </div>

        <div class="main-menu__right-bar__item">
          <div class="main-menu__right-bar__img">
            <img src="../assets/img/rupor.png" alt="">
          </div>
          <div class="main-menu__right-bar__text">
            Магазин
          </div>
        </div>

        <div class="main-menu__right-bar__item">
          <div class="main-menu__right-bar__img">
            <img src="../assets/img/rupor.png" alt="">
          </div>
          <div class="main-menu__right-bar__text">
            Пригласить
          </div>
        </div>

        <div class="main-menu__right-bar__item">
          <div class="main-menu__right-bar__img">
            <img src="../assets/img/rupor.png" alt="">
          </div>
          <div class="main-menu__right-bar__text">
            Сообщения
          </div>
        </div>

        <div class="main-menu__right-bar__item">
          <div class="main-menu__right-bar__img">
            <img src="../assets/img/rupor.png" alt="">
          </div>
          <div class="main-menu__right-bar__text">
            Настройки
          </div>
        </div>

      </div>
    </div>
    <div class="main-menu__content">
    <div class="main-menu__content__item">Герои</div>
      <div class="main-menu__content__item">Задания</div>
      <div class="main-menu__content__item">PvP</div>
      <div class="main-menu__content__item">Подземелья</div>
      <div class="main-menu__content__item">Амуниция</div>
      <div class="main-menu__content__item">Игрок</div>
      <div class="main-menu__content__item">Миссии</div>
    </div>
  </div>
</template>

<script>

import Header from "./Header";

export default {
  name: 'MainMenu',
  components: {
    Header,
  },
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

<style lang="scss">

$barWidth: 65px;
.main-menu {
  &__content {
    position: absolute;
    top: 35px;
    left: $barWidth;
    height: calc(100% - 35px);
    max-height: 250px;
    width: calc(100% - #{$barWidth} - #{$barWidth});
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    &__item {
      background: #f4ebdc;
      padding: 5px 20px;
      margin: 5px 20px;
      font-size: 22px;
      color: #402305;
      border: 1px solid #402305;
      border-radius: 10px;
      font-weight: bold;
      position: relative;
      cursor: pointer;
      transition: 0.3s;
      &::before, &::after {
        display: block;
        content: "";
        position: absolute;
        left: 0;
        top: 14px;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 10px solid #ffb002;
        // background: #ffb002;
      }
      &::after {
        right: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 0;
        border-right: 10px solid #ffb002;
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  &__left-bar {
    position: absolute;
    top: 20%;
    left: 0;
    height: 80%;
    width: $barWidth;
    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100%;
      justify-content: center;
    }
    &__item {
      width: calc( #{$barWidth} - 15px );
      height: calc( #{$barWidth} - 15px );
      background: linear-gradient(#333, #4D4D4D);
      margin-top: 25px;
      border: 2px solid #eee;
      border-radius: 5px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
      cursor: pointer;
      position: relative;
      transition: 0.3s;
      &:hover {
        background: radial-gradient(ellipse at center, #2C315C 0%,#57597F 99%);
        transform: scale(1.2);
        transform-origin: left center;
        z-index:10;
      }
    }
    &__img {
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__text {
      color: #fff;
      text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
      font-weight: bold;
    }
  }
  &__right-bar {
    position: absolute;
    top: 0%;
    right: 0;
    height: 100%;
    width: $barWidth;
    background: rgba(0,0,0,.3);
    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__item {
      width: calc( #{$barWidth} - 15px );
      height: calc( #{$barWidth} - 15px );
      background: radial-gradient(ellipse at center, #3f446c 0%,#76789f 99%);
      margin-top: 10px;
      border-radius: 5px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
      cursor: pointer;
      border: 1px solid #000;
      position: relative;
      transition: 0.3s;
      &:hover {
        background: radial-gradient(ellipse at center, #2C315C 0%,#57597F 99%);
        transform: scale(1.2);
        transform-origin: right center;
      }
    }
    &__img {
      img {
        width: calc( #{$barWidth} - 25px );
      }
    }
    &__text {
      color: #fff;
      font-size: 12px;
      margin-top: -9px;
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
    }
    &__notification {
      position: absolute;
      top: -7px;
      left: -7px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: linear-gradient(-45deg, #821703, #fa7b6a);
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
      color: #fff;
      font-weight: bold;
      border: 1px solid #000;
    }
  }
}
</style>
