<template>
  <div class="container">
    <div>
      <!-- TITLE -->
      <h1 class="text-center mt-5">Choose Your Plan</h1>
      <!-- SUBTITLE -->
      <p class="text-center mt-4">
        Discover your perfect fitness path with our customizable membership
        plans, unlocking a world of expert guidance, tailored workouts, and a
        supportive community dedicated to helping you reach your goals.
      </p>
    </div>

    <!--COLUMN SETTINGS -->
    <div class="card-contianer">
      <!--BRONZE-->
      <div class="card">
        <div class="" style="background-color: black">
          <div>
            <h3 style="color: saddlebrown">Bronze Tier</h3>
          </div>
          <div style="color: white">
            <p>For Starters</p>
            <h2>₱500 <small>/ per month</small></h2>
            <ul>
              <li>Unlimited Access at Standard Gym Only</li>
              <li>Unlimited Water Refill</li>
              <li>GymCircle ID</li>
            </ul>
          </div>
        </div>
        <div>
          <v-btn class="button" @click="push">Subscribe</v-btn>
        </div>
      </div>
      <!--SILVER-->
      <div class="card">
        <div class="" style="background-color: black">
          <div>
            <h3 style="color: silver">Silver Tier</h3>
          </div>
          <div style="color: white">
            <p>For Standard Gym Goers</p>
            <h2>₱1,250 <small>/ per month</small></h2>
            <ul>
              <li>
                Unlimited Access at Standard Gym and Plyometrics Equipment
              </li>
              <li>Unlimited Water Refill</li>
              <li>GymCircle Official Shaker Bottle</li>
              <li>GymCircle ID</li>
            </ul>
          </div>
        </div>
        <div>
          <v-btn class="button" @click="push" t>Subscribe</v-btn>
        </div>
      </div>

      <!--GOLD-->
      <div class="card">
        <div class="" style="background-color: black">
          <div></div>
          <div>
            <h3 style="color: Gold">Gold Tier</h3>
          </div>
          <div style="color: white">
            <p>For Standard Gym Goers</p>
            <h2>₱1,650 <small>/ per month</small></h2>
            <ul>
              <li>
                Unlimited Access at Standard Gym, Plyometrics Equipment, and
                Athletics Facility
              </li>
              <li>Unlimited Water Refill</li>
              <li>
                Free 1 pack of Whey Protein (1lb) and 50 tablets of
                MultiVitamins for New Subscribers of Gold Membership only
              </li>
              <li>GymCircle ID</li>
            </ul>
          </div>
        </div>
        <div>
          <v-btn class="button" @click="push" t>Subscribe</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.containter {
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.card-contianer {
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: start;
}
h3 {
  font-size: 2rem;
}
.card {
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  background-color: black;
  padding: 50px;
  width: 400px;
  height: 500px;
  border-radius: 20px;
}
.button {
  margin-bottom: auto;
}
</style>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

function push() {
  router.push("/signup");
}
</script>
