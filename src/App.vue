<template>
  <div id="app">
    <Loading v-if="isLoading"></Loading>
    <MainMenu v-if="isMainMenu"></MainMenu>
    <Heroes v-if="isHeroes"></Heroes>
    <MissionPopup v-if="isMission"></MissionPopup>
  </div>
</template>

<script>
import {mapState} from "vuex";

import Loading from "./components/Loading";
import MainMenu from "./components/MainMenu";
import Heroes from "./components/Heroes";
import MissionPopup from "./components/MissionPopup";

export default {
  name: 'App',
  components: {
    Loading,
    MainMenu,
    Heroes,
    MissionPopup,
  },
  computed: {
    ...mapState({
      isLoading: state => state.gameInfo.isLoading,
      isMainMenu: state => state.gameInfo.isMainMenu,
      isHeroes: state => state.gameInfo.isHeroes,
      isMission: state => state.gameInfo.isMission,
    }),
  }
}
</script>

<style lang="scss">
</style>
