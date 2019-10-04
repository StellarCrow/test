<template>
  <header>
    <div class="header">
      <div class="logo">
        <img src="@/assets/logo/logo.svg" alt="Logo">
      </div>
      <div v-bind:class="{'modal-mask':isModalVisible}">
        <div class="header-details" v-bind:class="{'header-details-modal': isModalVisible}">
          <nav class="navigation">
            <ul>
              <li><a href="#about" @click="isModalVisible = false">About me</a></li>
              <li><a href="#relationships" @click="isModalVisible = false">Relationships</a></li>
              <li><a href="#requirements" @click="isModalVisible = false">Requirements</a></li>
              <li><a href="#users" @click="isModalVisible = false">Users</a></li>
              <li><a href="#signUp" @click="isModalVisible = false">Sign Up</a></li>
              <li><a href="#" @click="isModalVisible = false">Sign Out</a></li>
            </ul>
          </nav>
          <div class="profile">
            <div>
              <div class="profile__name">Superstar</div>
              <div class="profile__email">Superstar@gmail.com</div>
            </div>
            <div class="profile__avatar">
              <img src="../../assets/imgs/user-superstar-2x.jpg" alt="User-Superstar">
            </div>
            <div class="profile__signout">
              <!--<img src="../../assets/icons/sign-out.svg" class="icon " alt="Sign out">-->
              <span class="icon icon-blue icon-sign-out"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="line-menu" v-on:click="showModal">
        <!--<img src="@/assets/icons/line-menu.svg" class="icon icon-blue" alt="line-menu">-->
        <span class="icon icon-blue icon-line-menu"></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      isModalVisible: false
    }
  },
  methods: {
    showModal () {
      this.isModalVisible = !this.isModalVisible
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
