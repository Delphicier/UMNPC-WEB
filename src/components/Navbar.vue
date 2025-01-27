<template>
    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
        
        <!-- LOGO (Kiri) -->
        <router-link to="/" class="flex items-center space-x-3">
          <img src="/assets/umnpc_dark.png" class="h-12" alt="UMNPC Logo">
        </router-link>

        <!-- NAVIGATION MENU (Tengah) -->
        <div class="absolute left-1/2 transform -translate-x-1/2 hidden md:flex md:items-center md:space-x-8">
          <router-link to="/" class="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">Home</router-link>
          <router-link to="/about" class="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">About Us</router-link>
          <router-link to="/programs" class="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">Program</router-link>
        </div>

        <!-- CONTACT BUTTON (Kanan) -->
        <div class="hidden md:flex">
          <router-link to="/contact" class="px-4 py-2 border border-gray-900 text-gray-900 rounded-full hover:bg-gray-100 dark:text-white dark:border-white dark:hover:bg-gray-700">
            Contact Us
          </router-link>
        </div>

        <!-- MOBILE MENU BUTTON -->
        <button data-collapse-toggle="navbar-sticky" type="button" class="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

      </div>
    </nav>
</template>
