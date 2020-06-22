<template>
  <div
    class="resume-editor"
    :contenteditable="editable"
    :style="styleObj">
    <slot>请输入文字</slot>
  </div>
</template>
<script>
export default {
  props: {
    fontSize: {
      type: Number
    },    
    editable: {
      default: false,
      type: Boolean
    },
    padding: {
      default: '0',
      type: String
    }
  },
  computed: {
    styleObj() {
      return {
        padding: this.padding,
        fontSize: this.fontSize + 'px'
      }
    }
  }
}
</script>

<style>
.resume-editor {
  display: inline-block;
  margin: 0 auto;
  padding: 1px 2px;
  border: 1px solid transparent;
}
.resume-editor:focus {
  outline: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.keyword {
  color: #ff5700;
  background: #efefef;
}
</style>