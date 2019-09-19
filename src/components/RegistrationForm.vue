<template>
  <form class="form">
    <div class="form-group">
      <fieldset class="form__name">
        <legend class="p4">Name</legend>
        <input type="text" placeholder="Your name" required>
      </fieldset>
      <fieldset class="form__email">
        <legend class="p4">Email</legend>
        <input type="email" placeholder="Your email" required>
      </fieldset>
      <fieldset class="form__number">
        <legend class="p4">Phone</legend>
        <input type="number" placeholder="+38(___)___ __ __" required>
      </fieldset>
    </div>
    <div class="form-group">
      <div class="form__select">
        <div class="dropdown">
          <div class="dropdown__select">
            <div>Select your position</div>
            <div>
              <img src="@/assets/icons/caret-down.svg" alt="caret-down">
            </div>
          </div>
          <div class="dropdown__options" id="dropdown-options">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
            <a href="#">Option 3</a>
          </div>
        </div>
      </div>
      <div class="form__upload">
        <input type="file" id="input-file" accept="image/jpeg" aria-label="Upload photo" required>
        <div class="p2 label-input-file">Upload your photo</div>
        <label for="input-file" class="form__upload-image">
          <img src="@/assets/icons/upload.svg" alt="upload-icon">
        </label>
        <div class="form__tip p4">
          File format jpg up to 5 MB, the minimum size
          <br>of 70x70px
        </div>
      </div>
    </div>
    <div class="form__button">
      <button class="button-primary" type="submit" disabled>Sign Up</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'RegistrationForm'
}
</script>

<style scoped>

</style>
