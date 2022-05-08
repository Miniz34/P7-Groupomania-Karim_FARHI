<template>
  <header>
    <div class="main-header d-flex flex-row justify-content-around align-items-center">
      <img src="./assets/icon.png" class="main-logo" />

      <h1 class="text-center">Groupomania</h1>
      <nav class="nav flex-column">
        <router-link class="nav-link active" to="/login">Login</router-link>
        <router-link class="nav-link" to="/">Signup</router-link>
        <router-link class="nav-link active" to="/users">Users</router-link>
        <router-link class="nav-link active" to="/publications">Main Page</router-link>
      </nav>
    </div>

  </header>
  <router-view />

  <footer class="bg-light text-center text-white">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">

        <!-- Github -->
        <a class="btn btn-primary btn-floating m-1" style="background-color: #333333;" href="https://github.com/Miniz34"
          role="button"><i class="fab fa-github"></i></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © OpenClassRooms 2022
      <a class="text-white" href="https://openclassrooms.com/fr/">openclassrooms.com</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>


