<template>
  <component
    class="resume-editor"
    :contenteditable="editable"
    :style="styleObj"
    :is="type">
    <slot>请输入文字</slot>
  </component>
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
    },
    type: {
      type: String,
      validator: function (value) {
        return ['div', 'p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'li'].indexOf(value) !== -1
      },
      default: 'div'
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
  padding: 0 4px;
  border-radius: 2px;
}
</style>