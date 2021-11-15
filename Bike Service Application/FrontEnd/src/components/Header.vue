<template>
  <!--Header Section-->
  <header>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div class="container">
        <!--Logo-->
        <img class="logo" src="./Images/Workshops.png" alt="" />
        <!--Title-->
        <a href="#" class="navbar-brand">Go-Service</a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!--Nav Bar Links-->
        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a href="#services" class="nav-link">Service Agenda</a>
            </li>
            <li class="nav-item">
              <a href="#bookaservice" class="nav-link">Book a Service</a>
            </li>
            <li class="nav-item">
              <a href="#questions" class="nav-link">FAQ's</a>
            </li>
            <li class="nav-item">
              <a href="#testimonials" class="nav-link">Client Testimonials</a>
            </li>
            <li class="nav-item">
              <a href="#contact" class="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
//Register for Header File
export default {
  name: "Header",
};
</script>

<!--Css Style for Header File-->
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
</style>