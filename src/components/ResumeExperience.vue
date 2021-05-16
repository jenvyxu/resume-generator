<template>
  <resume-section
    title="工作经历"
    class="resume-experience">
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        class="resume-experience-section">
        <div class="resume-experience-title">
          <ResumeInput class="company title-item" v-if="item.company">{{item.company}}</ResumeInput>
          <ResumeInput class="position title-item" v-if="item.position">{{item.position}}</ResumeInput>
          <ResumeInput class="time title-item" v-if="item.time">{{item.time}}</ResumeInput>
        </div>
        <ResumeInput class="resume-experience-description" v-if="item.description">{{item.description}}</ResumeInput>    
      </li>
    </ul>
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
  .content {
    margin-left: 16px;
  }
}

.resume-experience-title {
  display: flex;
  color: #333;
  font-weight: bold;
  justify-content: space-between;
  .resume-editor {
    margin: 0 40px 0 0;
  }
}
.resume-experience-section {
  margin-bottom: 6px;
  margin-left: 12px;
}

.title {
  font-weight: bold;
}

</style>