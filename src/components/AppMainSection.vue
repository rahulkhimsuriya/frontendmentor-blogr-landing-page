<template>
  <AppSection>
    <header>
      <h3 class="text-center text-2xl md:text-3xl font-semibold text-gray-800">
        Designed for the future
      </h3>
    </header>

    <div class="px-4 mt-8 flex flex-col lg:flex-row">
      <div
        class="lg:pl-28 lg:flex-1 space-y-8 flex order-2 lg:order-1 flex-col text-center lg:text-left mx-auto lg:mx-0 justify-center"
      >
        <div class="max-w-md">
          <h4 class="text-2xl text-gray-800 font-semibold">
            Introducing an extensible editor
          </h4>
          <p class="mt-4 text-sm text-gray-600 opacity-80">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </div>

        <div class="max-w-md">
          <h4 class="text-2xl text-gray-800 font-semibold">
            Robust content management
          </h4>
          <p class="mt-4 text-sm text-gray-600 opacity-80">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </div>

      <div
        class="overflow-hidden lg:flex-1 order-1 lg:order-2 mb-8 lg:mb-0 lg:ml-32"
      >
        <img
          :src="illustrationEditorDesktop"
          alt="illustration Editor Desktop"
        />
      </div>
    </div>
  </AppSection>

  <AppSection>
    <div
      class="px-4 mt-8 flex flex-col lg:flex-row bg-blue-dark"
      style="border-top-right-radius: 3rem; border-bottom-left-radius: 3rem"
    >
      <div class="lg:flex-1 h-auto lg:h-0 -mt-28">
        <img
          :src="illustrationPhones"
          :style="{
            background: `url(${bgPatterenCircle})`,
            'background-position': '-7rem, 0rem',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
          }"
          alt="illustration Phones"
          class="mx-auto"
        />
      </div>

      <div class="lg:flex-1 py-20 text-center lg:text-left">
        <h3 class="text-3xl text-white font-semibold">
          State of the Art Infrastructure
        </h3>
        <p
          class="max-w-md mx-auto lg:mx-0 mt-4 text-sm text-gray-300 opacity-80"
        >
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </div>
  </AppSection>

  <AppSection>
    <div class="px-4 mt-0 lg:mt-8 flex flex-col lg:flex-row">
      <div class="block lg:hidden mb-8">
        <img
          :src="illustrationLaptopMobile"
          alt="illustration Laptop Desktop"
          class="mx-auto"
        />
      </div>

      <div
        class="hidden lg:block overflow-hidden lg:flex-1 lg:-ml-48 mb-8 mx-auto"
      >
        <img
          :src="illustrationLaptopDesktop"
          alt="illustration Laptop Desktop"
          class="mx-auto"
        />
      </div>

      <div
        class="flex-1 flex-shrink-0 space-y-8 flex flex-col text-center lg:text-left mx-auto lg:mx-0 justify-center"
      >
        <div class="max-w-md lg:ml-24">
          <h4 class="text-2xl text-gray-800 font-semibold">
            Free, open, simple
          </h4>
          <p class="mt-4 text-sm text-gray-600 opacity-80">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>

        <div class="max-w-md lg:ml-24">
          <h4 class="text-2xl text-gray-800 font-semibold">Powerful tooling</h4>
          <p class="mt-4 text-sm text-gray-600 opacity-80">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  </AppSection>
</template>

<script>
import AppSection from './AppSection.vue'
import bgPatterenCircle from '../assets/images/bg-pattern-circles.svg'
import illustrationEditorDesktop from '../assets/images/illustration-editor-desktop.svg'
import illustrationLaptopDesktop from '../assets/images/illustration-laptop-desktop.svg'
import illustrationLaptopMobile from '../assets/images/illustration-laptop-mobile.svg'
import illustrationPhones from '../assets/images/illustration-phones.svg'

export default {
  components: {
    AppSection,
  },

  setup() {
    return {
      bgPatterenCircle,
      illustrationEditorDesktop,
      illustrationLaptopDesktop,
      illustrationLaptopMobile,
      illustrationPhones,
    }
  },
}
</script>
