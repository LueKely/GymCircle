<template>
  <div class="container-fluid">
    <!-- TITLE -->
    <h1 class="text-center mt-5">Choose Your Plan</h1>
    <!-- SUBTITLE -->
    <p class="text-center mt-4">
      Discover your perfect fitness path with our customizable membership plans,
      unlocking a world of expert guidance, tailored workouts, and a supportive
      community dedicated to helping you reach your goals.
    </p>
    <!--COLUMN SETTINGS -->
    <div class="row mt-5">
      <!--BRONZE-->
      <div class="col-md-4">
        <div class="card container-fluid" style="background-color: black">
          <div class="card-header">
            <h3 class="text-center" style="color: saddlebrown">Bronze Tier</h3>
          </div>
          <div class="card-body" style="color: white">
            <p class="text-center">For Starters</p>
            <h2 class="text-center">₱800 <small>/ 1 month</small></h2>
            <ul>
              <li>Unlimited Access at Standard Gym Only</li>
              <li>Unlimited Water Refill</li>
              <li>GymCircle ID</li>
            </ul>
            <div class="card-footer text-center">
              <a @click="push" target="_blank" class="btn btn-primary"
                >Subscribe</a
              >
            </div>
          </div>
        </div>
      </div>
      <!--SILVER-->
      <div class="col-md-4">
        <div class="card container-fluid" style="background-color: black">
          <div class="card-header">
            <h3 class="text-center" style="color: silver">Silver Tier</h3>
          </div>
          <div class="card-body" style="color: white">
            <p class="text-center">For Standard Gym Goers</p>
            <h2 class="text-center">₱5,000 <small>/ 3 months</small></h2>
            <ul>
              <li>
                Unlimited Access at Standard Gym and Plyometrics Equipment
              </li>
              <li>Unlimited Water Refill</li>
              <li>GymCircle Official Shaker Bottle</li>
              <li>GymCircle ID</li>
            </ul>
            <div class="card-footer text-center">
              <a @click="push" target="_blank" class="btn btn-primary"
                >Subscribe</a
              >
            </div>
          </div>
        </div>
      </div>
      <!--GOLD-->
      <div class="col-md-4">
        <div class="card container-fluid" style="background-color: black">
          <div class="card-header">
            <h3 class="text-center" style="color: gold">Gold Tier</h3>
          </div>
          <div class="card-body" style="color: white">
            <p class="text-center">For Professionals</p>
            <h2 class="text-center">₱10,000 <small>/ 1 year</small></h2>
            <ul>
              <li>
                Unlimited Access at Standard Gym, Plyometrics Equipment, and
                Athletics Facility (Boxing Ring, Gymnasium for Acrobatics, and
                Basketball Court)
              </li>
              <li>Unlimited Water Refill</li>
              <li>
                Free 1 pack of Whey Protein (1lb) and 50 tablets of
                MultiVitamins for New Subscribers of Gold Membership only
              </li>
              <li>GymCircle ID</li>
            </ul>
            <div class="card-footer text-center">
              <a @click="push" target="_blank" class="btn btn-primary"
                >Subscribe</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

function push() {
  router.push("/signup");
}
</script>
