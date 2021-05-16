<template>
  <resume-section
    :title="'联系方式'"
    :division="true"
    class="resume-contact">
    <div v-for="item in list"
      :key="item.name"
      class="resume-contact-item">
      <i :class="['iconfont', `icon-${item.name}`]"></i><ResumeInput>{{item.value}}</ResumeInput>
    </div>
  </resume-section>
</template>
<script>

import ResumeSection from './ResumeSection.vue'
import ResumeInput from './ResumeInput.vue'
export default {
  name: 'resume-contact',
  components: {
    ResumeSection,
    ResumeInput
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
.resume-contact {
  padding-bottom: 20px;
}
.resume-contact-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
  .resume-editor {
    margin: 0;
  }
}
.iconfont {
  font-size: 20px;
  margin-right: 10px;
}

</style>