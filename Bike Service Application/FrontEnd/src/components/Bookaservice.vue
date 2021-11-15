<template>
  <!--Service Registeration-->
  <div class="container mt-5 mb-5" id="container">
    <div class="form-container sign-up-container">
      <!--Heading-->
      <h1 class="text-center"><i>Book a Service</i></h1>
      <form ref="form" @submit.prevent="sendEmail">
        <div class="form-group mb-3">
          <label for="name" class="mb-2"><b>Name</b></label>
          <input
            type="text"
            class="form-control"
            id="reset"
            placeholder="Name"
            name="name"
            required
          />
        </div>

        <div class="form-group mb-3">
          <label for="email" class="mb-2"><b>Email ID</b></label>
          <input
            type="email"
            class="form-control"
            id="reset"
            placeholder="example@gmail.com"
            name="email"
            required
          />
        </div>
        <div class="form-group mb-3">
          <label for="phone-no" class="mb-2"><b>Phone No</b></label>
          <input
            type="text"
            class="form-control"
            id="reset"
            placeholder="Phone Number"
            name="mobile-no"
            required
          />
        </div>

        <div class="form-group mb-3">
          <label for="phone-no" class="mb-2"><b>Bike Name & Modal</b></label>
          <input
            type="text"
            class="form-control"
            id="reset"
            placeholder="Bike Name & Modal No"
            name="bike-information"
            required
          />
        </div>

        <label for="Book-Service" class="mb-3"
          ><b>You need general service?</b></label
        >
        <select class="form-select mb-2" name="service1" required>
          <option value="NA">Please Select</option>
          <option value="YES">Yes</option>
          <option value="NO">No</option>
        </select>

        <label for="Book-Service" class="mb-3"
          ><b>You need oil change?</b></label
        >
        <select class="form-select mb-2" name="service2" required>
          <option value="NA">Please Select</option>
          <option value="YES">Yes</option>
          <option value="NO">No</option>
        </select>

        <label for="Book-Service" class="mb-3"
          ><b>You need water wash?</b></label
        >
        <select class="form-select mb-2" name="service3" required>
          <option value="NA">Please Select</option>
          <option value="YES">Yes</option>
          <option value="NO">No</option>
        </select>

        <div class="mt-2 mb-3">
          <label for="date" class="mb-2"><b>Excepted Date</b></label>
          <input type="date" class="date form-control" name="Date" required />
        </div>

        <label for="Book-Service" class="mb-3"
          ><b>You need Home Delivery</b></label
        >
        <select class="form-select mb-2" name="home" required>
          <option value="NA">Please Select</option>
          <option value="YES">Yes</option>
          <option value="NO">No</option>
        </select>

        <div class="form-group mb-3">
          <label for="phone-no" class="mb-2"
            ><b>Anything Else? (If No Type NA)</b></label
          >
          <input
            type="text"
            class="form-control"
            id="reset"
            placeholder="Type Here"
            required
            name="others"
          />
        </div>
        <button class="btn btn-primary" v-on:click="onClick()">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
/*Import Email Js  */
import emailjs from "emailjs-com";

export default {
  methods: {
    onClick() {
      alert(
        "You're Successfully Book a Service, Kindly Be Patient Your Service Booking in a Process We're calling soon, Thank You!"
      );
    },
    sendEmail() {
      emailjs
        .sendForm(
          "service_amkp4dd",
          "template_c9jkah7",
          this.$refs.form,
          "user_ICKEtzV9847qs6EBpl6D3"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>