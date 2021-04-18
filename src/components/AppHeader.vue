<template>
  <header
    :style="{
      background: `url(${image}),linear-gradient(90deg, hsl(13, 100%, 72%) 20%, hsl(356, 100%, 66%) 60%)`,
      'background-size': `cover`,
      'background-position': `center`,
      'background-repeat': `no-repeat`,
    }"
    class="pt-8 text-white bg-center bg-cover bg-no-repeat"
  >
    <div class="px-4 container mx-auto max-w-6xl">
      <nav class="flex items-center justify-between">
        <div class="flex items-baseline space-x-12">
          <h1 class="font-semibold text-2xl">Blogr</h1>

          <ul class="hidden md:flex text-sm space-x-6">
            <li
              class="flex items-center hover:underline cursor-pointer relative"
            >
              Product
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>

              <ul
                class="absolute w-32 py-2 top-6 -left-4 bg-white text-gray-600 rounded"
              >
                <li class="px-4 py-2 hover:font-semibold">Overview</li>
                <li class="px-4 py-2 hover:font-semibold">Pricing</li>
                <li class="px-4 py-2 hover:font-semibold">Marketplace</li>
                <li class="px-4 py-2 hover:font-semibold">Features</li>
                <li class="px-4 py-2 hover:font-semibold">Integrations</li>
              </ul>
            </li>
            <li
              class="flex items-center hover:underline cursor-pointer relative"
            >
              Company
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>

              <ul
                class="absolute w-32 py-2 top-6 -left-4 bg-white text-gray-600 rounded"
              >
                <li class="px-4 py-2 hover:font-semibold">About</li>
                <li class="px-4 py-2 hover:font-semibold">Team</li>
                <li class="px-4 py-2 hover:font-semibold">Blog</li>
                <li class="px-4 py-2 hover:font-semibold">Careers</li>
              </ul>
            </li>
            <li
              class="flex items-center hover:underline cursor-pointer relative"
            >
              Connect
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>

              <ul
                class="absolute w-32 py-2 top-6 -left-4 bg-white text-gray-600 rounded"
              >
                <li class="px-4 py-2 hover:font-semibold">Contact</li>
                <li class="px-4 py-2 hover:font-semibold">Newsletter</li>
                <li class="px-4 py-2 hover:font-semibold">LinkedIn</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="hidden md:flex items-center space-x-2">
          <AppButton :isLinked="true">Login</AppButton>
          <AppButton>Sign Up</AppButton>
        </div>

        <div class="md:hidden">
          <button @click="toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />

              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            class="mt-10 absolute inset-x-4 bg-white rounded shadow"
            v-show="isOpen"
          >
            <div class="py-2 flex items-center flex-col text-gray-600">
              <div
                class="flex items-center flex-col"
                v-for="item in mobileNavbar"
              >
                <button
                  class="my-2 font-semibold flex items-center outline-none"
                  @click="item.isActive = !item.isActive"
                >
                  {{ item.title }}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        v-if="item.isActive"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 15l7-7 7 7"
                      />

                      <path
                        v-else
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <ul
                  v-show="item.isActive"
                  class="text-center py-3 bg-gray-100 text-gray-600 rounded px-4 w-48 space-y-2"
                >
                  <li
                    v-for="link in item.links"
                    class="hover:font-semibold cursor-pointer"
                  >
                    {{ link.text }}
                  </li>
                </ul>
              </div>
            </div>

            <div
              class="mt-2 py-2 space-y-2 border-t flex items-center flex-col"
            >
              <AppButton>Login</AppButton>
              <AppButton :isBranded="true">Sign Up</AppButton>
            </div>
          </div>
        </div>
      </nav>

      <div class="py-12 md:py-20 text-center flex items-center flex-col">
        <h2 class="text-center text-3xl md:text-5xl">
          A modern <br class="inline md:hidden" />
          publishing platform
        </h2>
        <p class="mt-4 text-sm">
          Grow your audience and build your online brand
        </p>

        <div class="mt-12 flex space-x-2">
          <AppButton>Start for Free</AppButton>
          <AppButton :isOutlined="true">Learn More</AppButton>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { reactive, ref } from 'vue'
import AppButton from './AppButton.vue'
import introPattern from '../assets/images/bg-pattern-intro.svg'

export default {
  name: 'AppHeader',

  components: { AppButton },

  setup() {
    const image = ref(introPattern)
    const isOpen = ref(false)

    const mobileNavbar = reactive([
      {
        isActive: false,
        title: 'Product',
        links: [
          { text: 'Overview' },
          { text: 'Pricing' },
          { text: 'Marketplace' },
          { text: 'Features' },
          { text: 'Integrations' },
        ],
      },
      {
        isActive: false,
        title: 'Company',
        links: [
          { text: 'About' },
          { text: 'Team' },
          { text: 'Blog' },
          { text: 'Career' },
        ],
      },
      {
        isActive: false,
        title: 'Connect',
        links: [
          { text: 'Contact' },
          { text: 'Newsletter' },
          { text: 'LinkedIn' },
        ],
      },
    ])

    function toggle() {
      isOpen.value = !isOpen.value
    }

    return { image, isOpen, toggle, mobileNavbar }
  },
}
</script>

<style scoped>
header {
  border-bottom-left-radius: 8rem;
}

li ul {
  display: none;
}

li:hover ul,
li:hover li {
  display: block;
}
</style>
