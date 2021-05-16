<template>
  <section :class="{'division': division}">
    <ResumeInput class="title"
    :font-size="18"
    :color='"#2397df"'>{{title}}</ResumeInput>
    <div class="content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import ResumeInput from './ResumeInput.vue'

export default {
  name: 'resume-section',
  components: {
    ResumeInput
  },
  props: {
    title: {
      default: '基本信息'
    },
    division: {
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 12px;
  color: #5c99ca;
  font-weight: bold;
}
.division {
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}
</style>