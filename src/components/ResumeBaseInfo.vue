<template>
  <resume-section
    class="base-information"
    :title="'基本信息'"
    :division="true">
    <div class="information-item"
      v-for="item in data"
      :key="item.key">
      <ResumeInput
        :color="'#666'" 
        :font-weight="'bold'"
        class="info-name">{{item.name}}</ResumeInput>
      <span class="split">:</span>
      <ResumeInput
        :color="'#666'" 
        class="info-value">{{item.value}}</ResumeInput>
    </div>
  </resume-section>
</template>

<script>
import ResumeSection from './ResumeSection.vue'
import ResumeInput from './ResumeInput.vue'

export default {
  name: 'resume-base-info',
  components: {
    ResumeSection,
    ResumeInput
  },
  props: {
    data: {
      required: true
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scope lang="scss">
.information-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.base-information{
  padding-bottom: 20px;
  margin-bottom: 20px;
}
.info-name {
  font-weight: bold;
  margin: 0;
  word-break: keep-all;
}
.info-value {
  margin: 0;
  word-break: break-all;
}
.split {
  margin: 0 6px 0 2px
}

</style>