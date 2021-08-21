<template>
  <component :is="name" class="icon" />
</template>

<script>
import * as icons from 'vue-feather-icons'

export default {
  components: {
    ...icons,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.icon {
  height: 20px;
  vertical-align: bottom;
  width: 20px;
}
.icon.is-small {
  height: 16px;
  width: 16px;
}
.icon.is-large {
  height: 20px;
  width: 20px;
}
.icon.is-x-large {
  height: 24px;
  width: 24px;
}
.icon.is-primary {
  color: $cyan;
}
.icon.is-danger {
  color: $red;
}
</style>
