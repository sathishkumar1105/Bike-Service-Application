<template>
  <!--Main Section-->
  <main>
    <!-- Intro -->
    <section
      class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
    >
      <div class="container">
        <div class="d-sm-flex align-items-center justify-content-between">
          <div class="my-5">
            <h1>
              You Are One Ride Away<br /><span class="text-warning"
                >From a Good Mood
              </span>
            </h1>
            <p class="lead my-4">
              Go-Service, Bike Service Platform.<br />Hurry! Book Your Service
              Today, 100% complete bike service including engine oil change and
              more...
            </p>
            <button class="btn btn-primary btn-lg">
              <a href="#register">Register</a>
            </button>
          </div>
          <img
            class="img-fluid w-50 d-none d-sm-block my-5"
            src="./Images/Workshops.png"
            alt="Workshop"
          />
        </div>
      </div>
    </section>

    <!-- Services Grids -->
    <section class="p-5" id="services">
      <div class="container">
        <div class="row text-center g-4">
          <h1 class="text-center mt-5">Services</h1>

          <!-- Service - 1 -->
          <div class="col-md transition">
            <div class="card bg-dark text-light">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <i class="bi bi-laptop"></i>
                </div>
                <h3 class="card-title mb-3">General Service</h3>
                <p class="card-text">
                  Complete General Service includes air filter cleaning, oil
                  filter cleaning, clutch play adjustment, chain adjustment
                </p>
                <a href="#" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          <!-- Service - 2 -->
          <div class="col-md transition">
            <div class="card bg-warning text-light">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <i class="bi bi-person-square"></i>
                </div>
                <h3 class="card-title mb-3 dark-heading">Oil Change</h3>
                <p class="card-text dark-heading">
                  Complete engine oil replacement for proper lubrication of
                  parts, manufacturer recommended grade oil will be used
                </p>
                <a href="#" class="btn btn-dark">Read More</a>
              </div>
            </div>
          </div>

          <!-- Service - 3 -->
          <div class="col-md transition">
            <div class="card bg-dark text-light">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <i class="bi bi-people"></i>
                </div>
                <h3 class="card-title mb-3">Water Wash</h3>
                <p class="card-text">
                  Complete exterior and interior cleaning are inclusive of water
                  wash, interior blow cleaning & wheel arch cleaning
                </p>
                <a href="#" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Questions accordion-->
    <section id="questions" class="p-5">
      <div class="container">
        <h2 class="text-center mb-4 my-5">Frequently Asked Questions</h2>
        <div class="accordion accordion-flush" id="questions">
          <!-- Question - 1 -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-one"
              >
                What's Included?
              </button>
            </h2>
            <div
              id="question-one"
              class="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div class="accordion-body">
                General Service includes air filter cleaning, oil filter
                cleaning, carburettor cleaning, clutch play adjustment, chain
                adjustment and lubrication, brake shoes cleaning and exterior
                foam wash.
              </div>
            </div>
          </div>

          <!-- Question - 2 -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-two"
              >
                Pricing
              </button>
            </h2>
            <div
              id="question-two"
              class="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div class="accordion-body">
                Pricing includes all the services mentioned above. In addition
                to this, oil (manufacturer recommended / equivalent grade)
                change will be done at the same cost. Spares and consumables are
                chargeable. All prices mentioned in the website are exclusive of
                taxes.
              </div>
            </div>
          </div>

          <!-- Question - 3 -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-three"
              >
                Time for Delivery
              </button>
            </h2>
            <div
              id="question-three"
              class="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div class="accordion-body">
                General service usually takes between 5 - 6 hours for the entire
                process.If any additional repairs / replacements are involved,
                the time taken may vary.
              </div>
            </div>
          </div>

          <!-- Question - 4 -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-five"
              >
                Reliability
              </button>
            </h2>
            <div
              id="question-five"
              class="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div class="accordion-body">
                Our service partners use only spare parts (or equivalent grade).
                There will be no compromise in the quality of workmanship.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Register Form Section-->
    <section id="register">
      <div>
        <Register />
      </div>
    </section>

    <!--Client Testimonials-->
    <section id="testimonials" class="p-5 bg-primary">
      <div class="container">
        <h2 class="text-center text-white mt-5">Client Testimonials</h2>
        <p class="lead text-center text-white mb-5">
          "Make a Customer, not a sale."
        </p>
        <div class="row g-4">
          <!--Testimonials - 1-->
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                  src="./Images/user.png"
                  class="rounded-circle mb-3"
                  alt=""
                />
                <h3 class="card-title mb-3">Peter</h3>
                <p class="card-text">
                  "Super-fast work. Asked them if it was possible to deliver on
                  the same day and to my surprise the vehicle was ready by
                  afternoon. Very much impressed! "
                </p>
              </div>
            </div>
          </div>

          <!--Testimonials - 2 -->
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                  src="./Images/user.png"
                  class="rounded-circle mb-3"
                  alt=""
                />
                <h3 class="card-title mb-3">Jane</h3>
                <p class="card-text">
                  "The work was spot on. Had an exhaust problem to be rectified.
                  Got it coupled with my general service package. Billing was
                  very nominal. Great job folks. "
                </p>
              </div>
            </div>
          </div>

          <!--Testimonials - 3 -->
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                  src="./Images/user.png"
                  class="rounded-circle mb-3"
                  alt=""
                />
                <h3 class="card-title mb-3">Rahul</h3>
                <p class="card-text">
                  "Was experiencing frequent problems with my vehicle. Was
                  expecting a big bill but to my surprise the billing was very
                  justifiable. Quality of service is also impeccable. "
                </p>
              </div>
            </div>
          </div>

          <!--Testimonials - 4 -->
          <div class="col-md-6 col-lg-3">
            <div class="card bg-light">
              <div class="card-body text-center">
                <img
                  src="./Images/user.png"
                  class="rounded-circle mb-3"
                  alt=""
                />
                <h3 class="card-title mb-3">Sara</h3>
                <p class="card-text">
                  Really Incrediable experience, The support I received was
                  thorough and timely and my issue was addressed with a single
                  interaction, Awesome! Thanks a lot!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="bookaservice">
      <div>
        <Bookaservice />
      </div>
    </section>

    <!-- Contact & Map-->
    <section class="p-5 contact" id="contact">
      <div class="container">
        <div class="row g-4">
          <!--Contact section -->
          <div class="col-md">
            <h2 class="text-center mb-4">Contact Info</h2>
            <ul class="list-group list-group-flush lead">
              <li class="list-group-item">
                <span class="fw-bold">Main Location:</span>
                Go-Service, Coimbatore, TamilNadu
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Phone:</span> (555) 555-5555
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Service Email:</span> (555)
                go-service@gmail.com
              </li>
              <li class="list-group-item">
                <span class="fw-bold">Customer Email:</span>
                customer-go-service@gmail.com
              </li>
            </ul>
          </div>
          <!-- Google Map -->
          <div class="col-md">
            <div id="map">
              <iframe
                class="my-2 mapping"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250646.68136444557!2d76.82714626807054!3d11.012014522457301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1636186612143!5m2!1sen!2sin"
                width="600"
                height="280"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
//Import Register Form
import Register from "./Register";
import Bookaservice from "./Bookaservice";

//Register Header File
export default {
  name: "Main",
  components: {
    Register,
    Bookaservice,
  },
};
</script>

<!-- CSS For Main -->
<style scoped>
body::before {
  display: block;
  content: "";
  height: 60px;
}

/*Logo in nav bar*/
header nav div .logo {
  width: 3%;
}

section .container .row .col-md .card .dark-heading {
  color: black;
}

section .container .d-sm-flex div > button > a {
  color: white;
  text-decoration: none;
}

/*User logo in Client Testimonials*/
main #testimonials .container .row .col-md-6 .card .card-body img {
  width: 20%;
}

/* Transform effect */
@keyframes zoom-in-zoom-out {
  0% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.1, 1.1);
  }
  100% {
    transform: scale(1, 1);
  }
}

/* Service grids */
main #testimonials .container .row .col-md-6:hover {
  animation: zoom-in-zoom-out 2s ease infinite;
}
/* Client Testimonials grids */
main section .container .row .transition:hover {
  animation: zoom-in-zoom-out 2s ease infinite;
}
</style>