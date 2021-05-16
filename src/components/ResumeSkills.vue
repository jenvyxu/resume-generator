<template>
  <resume-section
    title="专业技能"
    class="resume-about">
    <ul>
      <li 
        v-for="(item, index) in list"
        :key="index"
        class="resume-about-item"><span v-html="hightKeyword(item)"></span></li>
    </ul>
  </resume-section>
</template>
<script>

import ResumeSection from './ResumeSection.vue'
import heightLight from './mixins'

export default {
  name: 'resume-skills',
  components: {
    ResumeSection
  },
  mixins: [heightLight],
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/mixins.scss';
.resume-about {
  margin: 30px 40px 30px 30px;
}
.resume-about-item {
  position: relative;
  margin: 0 0 4px 20px;
  line-height: 1.4;
  font-size: 12px;
  list-style: none;
  vertical-align: top;
  @include list-style;
  span {
    font-size: 16px;
  }
}
</style>