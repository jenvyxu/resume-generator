<template>
  <div id="app">
    <ResumeHeader
      :name="userData.name"
      :employment="userData.employment"
      :avatar="userData.avatar"/>
    <main class="main">
      <div class="sider-bar">
        <ResumeBaseInfo :data="userData.baseInfo"/>
        <!-- <ResumeSkill :list="userData.skills"/> -->
        <ResumeContact :list="userData.contact"/>
        <ResumeLink :list="userData.link"/>
      </div>
      <div class="content">
        <ResumeSkills :list="userData.about"/>
        <ResumeExperience :list="userData.experience"/>
        <ResumeProject :list="userData.project"/>
      </div>
    </main>
  </div>
</template>

<script>
import ResumeHeader from './components/ResumeHeader.vue'
import ResumeBaseInfo from './components/ResumeBaseInfo.vue'
// import ResumeSkill from './components/ResumeSkill.vue'
import ResumeContact from './components/ResumeContact.vue'
import ResumeExperience from './components/ResumeExperience.vue'
import ResumeProject from './components/ResumeProject.vue'
import ResumeSkills from './components/ResumeSkills.vue'
import ResumeLink from './components/ResumeLink.vue'
import userData from './resume.yaml'

export default {
  name: 'app',
  components: {
    ResumeHeader,
    ResumeBaseInfo,
    // ResumeSkill,
    ResumeContact,
    ResumeExperience,
    ResumeProject,
    ResumeSkills,
    ResumeLink
  },
  data() {
    return {
      userData
    }
  },
  created() {

  }
}
</script>

<style lang="scss">
#app {
  width: 960px;
  margin: 0 auto;  
  background-color: #fff;
  color: #666;
}
.main {
  display: flex;
  margin-bottom: 20px;
  >.content {
    width: 100%;
    margin-bottom: 40px;
  }
}
.sider-bar {
  width: 280px;
  padding: 120px 15px 16px 45px;
  border-right: 2px solid #ccc;
}

</style>
