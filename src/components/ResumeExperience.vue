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

<style scoped lang="scss">
@import '../scss/mixins.scss';

.resume-experience {
  margin: 30px 40px 0 30px;
}

.resume-experience-title {
  display: flex;
  color: #666;
  font-weight: 600;
  justify-content: space-between;
  .resume-editor {
    margin: 0 40px 0 0;
  }

}
.resume-experience-section {
  position: relative;
  margin-bottom: 6px;
  margin: 0 0 8px 20px;
  list-style: none;
  @include list-style($top: 0.6em);
}

.title {
  font-weight: bold;
}

</style>