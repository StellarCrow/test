<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__logo">
        <img src="@/assets/logo/logo-white.svg" alt="logo">
      </div>
      <!--<div>-->
        <ul class="footer__navigation">
          <li class="footer__navigation-item p2">
            <a href="#about">About me</a>
          </li>
          <li class="footer__navigation-item p2">
            <a href="#relationships">Relationships</a>
          </li>
          <li class="footer__navigation-item p2">
            <a href="#requirements">Requirements</a>
          </li>
          <li class="footer__navigation-item p2">
            <a href="#users">Users</a>
          </li>
          <li class="footer__navigation-item p2">
            <a href="#signUp">Sign Up</a>
          </li>
        </ul>
      <!--</div>-->
    </div>
    <div class="footer__bottom">
      <div class="footer__details">
        <div class="footer__contacts">
          <div class="p1">work.of.future@gmail.com</div>
          <div class="p1">+38 (050) 789 24 98</div>
          <div class="p1">+38 (095) 556 08 45</div>
        </div>
        <div class="footer__links">
          <ul>
            <li><a href="#">News</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
          <ul>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Design</a></li>
            <li><a href="#">Code</a></li>
            <li><a href="#">Collaborate</a></li>
          </ul>
          <ul>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Examples</a></li>
          </ul>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Conditions</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>

      <div class="socials">
        <ul class="socials__list">
          <li class="socials__icon socials__icon-fb"></li>
          <li class="socials__icon socials__icon-in"></li>
          <li class="socials__icon socials__icon-inst"></li>
          <li class="socials__icon socials__icon-tw"></li>
          <li class="socials__icon socials__icon-pin"></li>
        </ul>
        <div class="copyright p4">
          © abz.agency specially for the test task
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>

</style>
