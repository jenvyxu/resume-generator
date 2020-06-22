<template>
  <div class="resume-header">
    <img :src="require('img@/avatar.png')" alt="" class="avatar">
    <ResumeInput
      :font-size="32"
      class="name">{{name}}</ResumeInput>
    <ResumeInput
      :font-size="18"
      class="description">{{employment}}</ResumeInput>
  </div>
</template>

<script>
import ResumeInput from './ResumeInput.vue'

export default {
  name: 'resume-header',
  components: {
    ResumeInput
  },
  props: {
    name: {
      type: String,
      defualt: '吴彦祖'
    },
    employment: {
      type: String,
      default: 'n年经验 | 应聘前端开发'
    }
  }
}
</script>

<style scoped lang="scss">
.resume-header {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 0 40px 0;
  color: #fff;
  background-color: #333;
  text-align: center;
  .avatar {
    position: absolute;
    top: 32%;
    left: 5%;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, .4);
  }
  .description {
    font-weight: normal;
    padding-top: 10px;
  }
}
</style>
