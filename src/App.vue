<template>
  <AppHeader />
  <main>
    <AppSection>
      <header>
        <h3
          class="text-center text-2xl md:text-3xl font-semibold text-gray-800"
        >
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
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
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
  </main>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppSection from './components/AppSection.vue'
import illustrationEditorDesktop from './assets/images/illustration-editor-desktop.svg'
import illustrationEditorMobile from './assets/images/illustration-editor-mobile.svg'
</script>

<style></style>
