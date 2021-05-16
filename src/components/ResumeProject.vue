<template>
  <resume-section
    title="项目经历"
    class="resume-project">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="resume-project-section">
      <div class="resume-project-title">
        <ResumeInput class="company title-item" type="h2">{{item.name}}</ResumeInput>
        <ResumeInput class="time title-item" v-if="item.time">{{item.time}}</ResumeInput>
        <ResumeInput class="position title-item" v-if="item.position">{{item.position}}</ResumeInput>
      </div>
      <ul class="resume-porject-content">
        <!-- <img class="resume-project-logo" :src="require(`img@/${item.logo}`)" alt=""> -->
        <ResumeInput
          v-for="(content, index) in item.description"
          :key="index"
          type="li"
          v-html="hightKeyword(content)"
          class="resume-project-description"/>
        <ResumeInput
          type="li"
          v-html="hightKeyword(item.responsibility)"
          class="resume-project-description"/>
        <li class="word-container">技术栈:
          <span
            v-for="(word, index) in item.keyword"
            :key="index"
            class="word">{{word}}</span></li>
        <li class="link" v-if="item.link || item.repo">
          <a v-if="item.link" :href="item.link" target="_blank">在线预览</a>
          <a v-if="item.repo" :href="item.repo" target="_blank">项目源码</a>        
        </li>
      </ul>
    </div>
  </resume-section>
</template>

<script>
import ResumeSection from './ResumeSection.vue'
import ResumeInput from './ResumeInput.vue'
import heightLight from './mixins'

export default {
  name: 'resume-project',
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
  mounted() {

  }
}
</script>

<style lang="scss">
.resume-project {
  margin: 30px 40px 30px 30px;
}
.resume-project-title {
  color: #333;
  >h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }
}
.resume-porject-content {
  padding-left: 32px;
}
.resume-project-section {
  margin-bottom: 20px;
}
.resume-project-logo {
  width: 100%;
  margin: 6px 5px;
}
.resume-project-description {
  display: list-item;
}
.word {
  font-weight: normal;
  color: #ff5700;
  &::after{
    content: '/';
    display: inline;
    margin: 0 4px;
    font-weight: normal;
    color: #666;
  }
}
.link {
  a {
    margin-right: 10px;
  }
}
.word-container {
  font-weight: bold;
  margin: 4px 0;
}

</style>