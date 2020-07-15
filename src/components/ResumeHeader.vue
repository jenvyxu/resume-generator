<template>
  <div class="resume-header">
    <img :src="require(`img@/${avatar}`)" alt="" class="avatar">
    <ResumeInput
      :font-size="40"
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
      defualt: 'YOUR NAME'
    },
    employment: {
      type: String,
      default: 'n年经验 | 应聘前端开发'
    },
    avatar: {
      type: String,
      default: 'avatar.png'
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
    background-image: url('../assets/image/avatar.jpg');
    background-position: center center;
    background-size: contai;
    background-repeat: no-repeat;
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
