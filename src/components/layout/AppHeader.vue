<template>
    <header>
        <div class="logo">
            <img src="@/assets/logo/logo.svg" alt="Logo">
        </div>
        <div class="header-details">
          <nav class="navigation">
            <ul>
              <li><a href="#about">About me</a></li>
              <li><a href="#relationships">Relationships</a></li>
              <li><a href="#requirements">Requirements</a></li>
              <li><a href="#users">Users</a></li>
              <li><a href="#signUp">Sign Up</a></li>
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
              <img src="../../assets/icons/sign-out.svg" alt="Sign out">
            </div>
          </div>
        </div>
        <div class="line-menu">
          <img src="@/assets/icons/line-menu.svg" alt="line-menu">
        </div>
    </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>

</style>
