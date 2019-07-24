<template>
  <div>
    <app-header></app-header>
    <section class="banner">
      <div class="container">
        <div class="heading">
          <div class="heading__title">
            <h1>Test assignment for Frontend Developer position</h1>
          </div>
          <div class="heading__desc p2">
            We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.
          </div>
          <div class="heading__button">
            <button class="button-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </section>
    <section class="about text-center">
      <div class="container">
        <div class="about__title text-center">
          <h2>Let's get acquainted</h2>
        </div>
        <div>
          <div class="man-mobile">
            <img src="../assets/imgs/man-mobile.svg" alt="man-mobile">
          </div>
          <div class="about__text">
            <div class="about__title-small">
              <h3>I am cool frontend developer</h3>
            </div>
            <div class="p2">
              When real users have a slow experience on mobile, they're much less likely to find what they are looking
              for
              or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially
              when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.
            </div>
            <div class="p2">
              Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience
              on the web.
            </div>
            <button class="button-text">Sign Up</button>
          </div>
        </div>
      </div>
    </section>
    <section class="relationships">
      <div class="container text-center">
        <div class="relationships__title">
          <h2>About my relationships with web-development</h2>
        </div>
        <div class="skills">
          <div class="skill">
            <div class="skill__image">
              <img src="../assets/imgs/html.svg" alt="html">
            </div>
            <div class="skill__heading">
              <h3>I'm in love with HTML</h3>
            </div>
            <div class="skill__desc p2">
              Hypertext Markup Language (HTML)
              is the standard markup language for creating web pages and web applications.
            </div>
          </div>
          <div class="skill">
            <div class="skill__image">
              <img src="../assets/imgs/css.svg" alt="css">
            </div>
            <div class="skill__heading">
              <h3>CSS is my best friend</h3>
            </div>
            <div class="skill__desc p2">
              Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document
              written in a markup language like HTML.
            </div>
          </div>
          <div class="skill">
            <div class="skill__image">
              <img src="../assets/imgs/javascript.svg" alt="js">
            </div>
            <div class="skill__heading">
              <h3>JavaScript is my passion</h3>
            </div>
            <div class="skill__desc p2">
              JavaScript is a high-level, interpreted programming language. It is a language which is also characterized
              as dynamic, weakly typed, prototype-based and multi-paradigm.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="requirements">
      <div class="container text-center">
        <div class="requirements__heading">
          <h2>General requirements for the test task</h2>
        </div>
        <div class="requirements__image">
          <img src="../assets/imgs/man-laptop-v1.svg" alt="man-laptop-1">
        </div>
        <div class="requirements__text">
          <div class="p2">
            Users want to find answers to their questions quickly and data shows that people really care about how
            quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in
            2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.
          </div>
          <div class="p2">
            If you're a developer working on a site, now is a good time to evaluate your performance using our speed
            tools. Think about how performance affects the user experience of your pages and consider measuring a
            variety of real-world user-centric performance metrics.
          </div>
          <div class="p2">
            Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant
            contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome
            User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under
            real-world conditions.
          </div>
        </div>
      </div>
    </section>
    <section class="users">
      <div class="container text-center">
        <div class="users__heading">
          <h2>Our cheerful users</h2>
        </div>
        <div class="users__warning p2">
          Attention! Sorting users
          by registration date
        </div>
        <div class="users__list">
          <div class="user">
            <div class="user__avatar">
              <img src="@/assets/imgs/user-noah-2x.jpg" alt="user-noah">
            </div>
            <div class="user__name">
              <h3>Noah</h3>
            </div>
            <div class="user__desc">
              <div class="p3">
                Leading specialist of the Control Department
              </div>
              <div class="p3">noah.controldepartment@gmail.com</div>
              <div class="p3">+38 (050) 678 03 24</div>
            </div>
          </div>
          <div class="user">
            <div class="user__avatar">
              <img src="@/assets/imgs/user-adolph-2x.png" alt="user-adolph">
            </div>
            <div class="user__name">
              <h3>Adolph Blaine Charles
                David Earl</h3>
            </div>
            <div class="user__desc">
              <div class="p3">
                The contextual advertising specialist
              </div>
              <div class="p3">adolph.blainecharles-davidearl@example.com</div>
              <div class="p3">+38 (095) 556 08 45</div>
            </div>
          </div>
          <div class="user">
            <div class="user__avatar">
              <img src="../assets/imgs/user-liam-2x.jpg" alt="user-liam">
            </div>
            <div class="user__name">
              <h3>Liamgrievescasey
                Smith Wiam</h3>
            </div>
            <div class="user__desc">
              <div class="p3">
                Lead designer
              </div>
              <div class="p3">liamgrievescasey@example.com</div>
              <div class="p3">+38 (050) 273 93 32</div>
            </div>
          </div>
        </div>
        <div class="users__button">
          <button class="button-secondary">Show more</button>
        </div>
      </div>
    </section>
    <section class="registration">
      <div class="container">
        <div class="registration__heading text-center">
          <h2>Register to get a work</h2>
        </div>
        <div class="registration__warning p2 text-center">
          Attention! After successful registration and alert, update the list of users
          <br>in the block from the top
        </div>
        <registration-form></registration-form>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './layout/AppHeader'
import RegistrationForm from './RegistrationForm'
import AppFooter from './layout/AppFooter'

export default {
  name: 'AppPage',
  components: {
    AppHeader,
    RegistrationForm,
    AppFooter
  }
}
</script>

<style scoped lang="scss">

</style>
