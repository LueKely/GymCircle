<template>
  <div class="bg">
    <div class="container">
      <div class="heading">ABOUT US</div>
      <div class="content">
        <div class="image">
          <img src="/akram-huseyn-V-SkkqKbt7g-unsplash.jpg" />
          <div class="signup"><h1>Sign up now!</h1></div>
        </div>

        <div class="text">
          <div class="monti">
            <span class="subtitle1"
              >Welcome to Gym Circle, your go-to fitness destination!</span
            >
          </div>
          <div class="monti">
            <span class="description"
              >We are a premier gym business committed to helping you achieve
              your health and wellness goals. Our modern facility is equipped
              with the latest fitness equipment, and our experienced trainers
              are here to guide you every step of the way. From personalized
              training programs to group classes, we offer a wide range of
              services tailored to your needs.</span
            >
          </div>
          <div class="monti">
            <span class="subtitle2"
              >At Gym Circle, we believe in making fitness fun and
              engaging.</span
            >
          </div>
          <div class="monti">
            <span class="description"
              >Join our vibrant community of fitness enthusiasts and choose from
              various classes like yoga, Pilates, spinning, and HIIT to find
              your perfect workout. Get ready for a transformative fitness
              journey at Gym Circle that will empower you to live your best
              life.</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: rgba(100, 100, 100, 0.5);
  border-radius: 15px 50px;
}

.heading {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  color: rgb(255, 255, 255);

  margin-bottom: 20px;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: right;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 20px;
  background-color: rgb(255, 255, 255);
  opacity: 1;
  padding: 40px;
  border-radius: 25px;
}

.image {
  flex: 0 0 auto;
  margin-right: 70px;
}

.image img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

.text {
  flex: 1 1 auto;
}

.monti {
  margin-top: 30px;
  margin-bottom: 0px;
}

.subtitle2 {
  font-size: 24px;
  font-weight: 500;

  color: black;
}

.subtitle1 {
  font-size: 38px;
  font-weight: bold;

  color: black;
}

.description {
  font-size: 18px;
  font-weight: 300;

  color: black;
}

.bg {
  background-image: url("/risen-wang-20jX9b35r_M-unsplash.jpg");
}

.signup {
  width: 100%;
  max-width: 370px;
  border-radius: 20px 100px;
  background: #000000;
  padding: 20px;
  height: 80px;
  color: azure;
  text-align: center;
}
</style>
