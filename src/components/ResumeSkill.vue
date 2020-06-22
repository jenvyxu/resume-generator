<template>
  <resume-section
    class="resume-skill"
    :title="'相关技能'"
    :division="true">
    <div 
      v-for="(item, index) in newSkillList"
      :key="index"
      class="skill-item">
      <ResumeInput v-html="item"></ResumeInput></div>
  </resume-section>
</template>

<script>
import ResumeSection from './ResumeSection.vue'
import ResumeInput from './ResumeInput.vue'
import heightLight from './mixins'

export default {
  name: 'resume-skill',
  components: {
    ResumeSection,
    ResumeInput
  },
  mixins: [heightLight],
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

    }
  },
  computed: {
    newSkillList() {
      return this.list.map(str => {
        return this.hightKeyword(str)
      })
    }
  },
  created() {

  }
}
</script>

<style scoped lang="scss">
.resume-skill {
  word-break: break-all;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.skill-item {
  margin-bottom: 10px;  
}
</style>