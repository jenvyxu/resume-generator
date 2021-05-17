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
        <li class="word-container">关键词:
          <span
            v-for="(word, index) in item.keyword"
            :key="index"
            class="word">{{word}}</span></li>
        <li class="link" v-if="item.link">
          <span>预览：</span>
          <a v-if="item.link" :href="item.link" target="_blank">{{item.link}}</a>  
        </li>
        <li class="link" v-if="item.repo">
          <span>仓库：</span>
          <a v-if="item.repo" :href="item.repo" target="_blank">{{item.repo}}</a>        
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
@import '../scss/mixins.scss';

.resume-project {
  margin: 30px 40px 30px 30px;
}
.resume-project-title {
  color: #666;;
  >h2 {
    font-size: 16px;
    margin-bottom: 10px;
  }
}
.resume-porject-content {
  margin-left: 20px;
  >li {
    position: relative;
    line-height: 1.4;
    width: 100%;
    list-style: none;
    @include list-style($top: 0.6em);
  }
}
.resume-project-section {
  margin-bottom: 20px;
}
.resume-project-logo {
  width: 100%;
  margin: 6px 5px;
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