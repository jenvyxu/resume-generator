<template>
  <resume-section
    :title="'工作经历'"
    class="resume-experience">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="resume-experience-section">
      <div class="resume-experience-title">
        <ResumeInput class="company title-item">{{item.company}}</ResumeInput>
        <ResumeInput class="time title-item">{{item.time}}</ResumeInput>
        <ResumeInput class="position title-item">{{item.position}}</ResumeInput>
      </div>
      <ResumeInput class="resume-experience-description">{{item.description}}</ResumeInput>    
    </div>
  </resume-section>
</template>

<script>
import ResumeSection from './ResumeSection.vue'
import ResumeInput from './ResumeInput.vue'
export default {
  name: 'resume-experience',
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

<style lang="scss">
.resume-experience {
  margin: 30px 40px 0 30px;
}
.resume-experience-title {
  display: flex;
  color: #2397df;
  font-weight: bold;
  .resume-editor {
    margin: 0 40px 0 0;
  }
}
.resume-experience-section {
  margin-bottom: 6px;
}

.title {
  font-weight: bold;
}

</style>