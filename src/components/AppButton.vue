<template>
  <button
    class="px-4 py-2 text-sm font-semibold rounded-2xl outline-none"
    :class="buttonClasses"
  >
    <slot />
  </button>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    isBranded: {
      default: false,
    },
    isOutlined: {
      default: false,
    },
    isLinked: {
      default: false,
    },
    linkType: {
      default: 'default',
    },
  },

  setup(props) {
    const { isBranded, isOutlined, isLinked, linkType } = props

    const buttonClasses = computed(() => {
      if (isLinked) {
        return {
          default: 'text-white',
          gray: 'text-gray-800',
        }[linkType]
      }

      if (isOutlined) {
        return 'bg-brand text-white border border-white hover:bg-white  hover:border-brand hover:text-brand'
      }

      if (isBranded) {
        return 'bg-brand text-white hover:bg-brand-light hover:text-white'
      }

      return 'bg-white text-brand hover:bg-brand-light hover:text-white'
    })

    return { buttonClasses }
  },
}
</script>

<style scoped></style>
