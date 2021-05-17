<template>
  <ResumeSection
    title="链接"
    class="resume-link">
    <div
      v-for="item in list"
      :key="item.name"
      class="resume-link-item">
      <i :class="['iconfont',`icon-${item.name}`]"></i>
      <a :href="item.link" class="resume-link-item" target="_blank">{{item.link}}</a>
    </div>
  </ResumeSection>
</template>

<script>
import ResumeSection from './ResumeSection.vue'
export default {
  name: 'resume-link',
  components: {
    ResumeSection
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.resume-link-item {
  margin: 0 0 6px 0;
  display: flex;
  a {
    word-break: break-all;
    margin: 0;
  }
}
.iconfont {
  display: inline-block;
  width: 24px;
  font-size: 20px;
  margin-right: 6px;
}

</style>