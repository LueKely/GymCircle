<template>
  <div class="why">	<h1 class = "plan"> Choose Your Plan </h1>
    <p class = "desc">
        Discover your perfect fitness path with our customizable <br>
        membership plans, unlocking a world of expert guidance, <br>
        tailored workouts, and a supportive communtiy dedicated to <br>
        helping you reach your goals.
    </p>
    <div class = "membership">
        <div class = "bronze-tier">
        <div class = "membership-box">
            <h3> Bronze Tier </h3>
            <p> For Starters </p>
            <h2> ₱800 <small> / 1 month</small></h2>
            <p class = "inclusion">
                <ul>
                <li> Unlimited Access at Standard Gym Only </li>
                <li> Unlimited Water Refill </li>
                <li> GymCircle ID </li>
                </ul>
                </p>
                <center>
                    <a href="#" target="_blank">
                        <button class="subButton my-3 fs-6">
                            Subscribe</button>
                        </a>
                    </center>
            </div>
        </div>

        <div class = "silver-tier">
            <div class = "membership-box">
            <h3> Silver Tier </h3>
            <p> For Standard Gym Goers </p>
            <h2> ₱5,000 <small> / 3 months</small></h2>
            <p class = "inclusion">
                <ul>
                <li> Unlimited Access at Standard Gym
                <br> and Plyometrics Equipment  </li>
                <li> Unlimited Water Refill </li>
                <li> GymCircle Official Shaker Bottle </li>
                <li> GymCircle ID </li>
                </ul>
                </p>
                <center>
                    <a href="#" target="_blank">
                        <button class="subButton my-3 fs-6">Subscribe
                        </button>
                    </a>
                </center>
            </div>
        </div>

        <div class = "gold-tier">
            <div class = "membership-box">
            <h3> Gold Tier </h3>
            <p> For Professionals </p>
            <h2> ₱10,000 <small> / 1 year</small></h2>
            <p class = "inclusion">
                <ul>
                <li>Unlimited Access at Standard Gym, <br>  Plyometrics Equipment and Athletics Facility
                <br> (Boxing Ring, Gymnasium for Acrobatics <br> and Basketball Court)  </li>
                <li> Unlimited Water Refill </li>
                <li> Free 1 pack of Whey Protein (1lb) <br> and 50 tablets of MultiVitamins
                    for <br> New Subscribers of Gold Membership only </li>
                <li> GymCircle ID </li>
                </ul>
                 </p>
                 <center>
                    <a href="#" target="_blank">
                        <button class="subButton my-3 fs-6">Subscribe
                        </button>
                    </a>
                </center>
            </div>
        </div>
    </div></div>

</template>
<style scoped>
 .why{
    margin: 0;
    padding: 0;

    }

    .plan{
    width: 100%;
    padding-top: 5%;
    text-align: center;
    font-size: 35px;
    }

    .desc{
    width: 100%;
    text-align: center;
    top: 15%;

    font-size: 16px;
    color: #4F4E4E;
    }

    .membership{
    width: 100%;
    height: auto;
    display: flex;
    }

    .membership-box{
    width: 400px;
    height: 500px;
    background: linear-gradient(black,rgb(43, 43, 43));
    color:#fff;
    font-size: 15px;
    text-indent: 10px;
    line-height: 20px;
    border-radius: 20px;
    margin: 18px;
    padding-top: 3px;
    }

    .membership-box h3{
    font-size: 30px;
    padding-top: 30px;
    padding-bottom: 0;
    margin: 0;
    }

    .membership ul{
        text-align: left;

    }

    .bronze-tier h3{
    background: -webkit-linear-gradient(#D0A886, #684E37);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    .silver-tier h3{
    background: -webkit-linear-gradient(#BAB3AC, #82807E);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    .gold-tier h3{
    background: -webkit-linear-gradient(#ffbf00, #ac8b06);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    .membership-box h2{
    padding: 5%;
    }
    .subButton:hover{
    background-color: rgb(0, 0, 0);
    color: white;
    }
    .subButton{
    background-color: rgb(255, 255, 255);
    padding: 10px 40px;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    border-radius: 5px;
    cursor: pointer;
    }
    .bronze-tier .subButton{
        margin-top: 140px;
    }
    .silver-tier .subButton{
        margin-top: 90px;
    }
    .gold-tier .subButton{
        margin-top: 10px;
    }

</style>
