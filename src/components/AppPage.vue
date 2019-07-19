<template>
  <div>
    <app-header></app-header>
    <section class="banner">
      <div class="heading">
        <h1>Test assignment for Frontend Developer position</h1>
        <div class="heading__desc p2">
          We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.
        </div>
        <div class="heading__button">
          <button class="button-primary">Sign Up</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from './layout/AppHeader'

export default {
  name: 'AppPage',
  components: {
    AppHeader
  }
}
</script>

<style scoped lang="scss">

</style>
