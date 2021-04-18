<template>
  <footer class="bg-blue-darkest text-white py-10 text-center lg:text-left">
    <div class="px-4 container mx-auto max-w-6xl">
      <div class="lg:grid lg:grid-cols-12 space-y-12 lg:space-y-0">
        <div class="lg:col-span-4">
          <h2 class="text-2xl font-semibold">Blogr</h2>
        </div>

        <div
          class="lg:col-span-8 lg:grid lg:grid-cols-3 space-y-8 lg:space-y-0"
        >
          <div>
            <p class="text-base font-semibold opacity-80">Product</p>

            <ul class="mt-4 lg:mt-8 space-y-2 text-sm">
              <li class="opacity-75 hover:underline cursor-pointer">
                Overview
              </li>
              <li class="opacity-75 hover:underline cursor-pointer">Pricing</li>
              <li class="opacity-75 hover:underline cursor-pointer">
                Marketplace
              </li>
              <li class="opacity-75 hover:underline cursor-pointer">
                Features
              </li>
              <li class="opacity-75 hover:underline cursor-pointer">
                Integrations
              </li>
            </ul>
          </div>

          <div>
            <p class="text-base font-semibold opacity-80">Company</p>

            <ul class="mt-8 space-y-2 text-sm">
              <li class="opacity-75 hover:underline cursor-pointer">About</li>
              <li class="opacity-75 hover:underline cursor-pointer">Team</li>
              <li class="opacity-75 hover:underline cursor-pointer">Blog</li>
              <li class="opacity-75 hover:underline cursor-pointer">Careers</li>
            </ul>
          </div>

          <div>
            <p class="text-base font-semibold opacity-80">Connect</p>

            <ul class="mt-8 space-y-2 text-sm">
              <li class="opacity-75 hover:underline cursor-pointer">Contact</li>
              <li class="opacity-75 hover:underline cursor-pointer">
                Newsletter
              </li>
              <li class="opacity-75 hover:underline cursor-pointer">
                LinkedIn
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped></style>
