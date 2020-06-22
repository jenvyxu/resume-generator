export default {
  methods: {
    hightKeyword(str) {
      let newStr = str.replace(/\(\(/g, '<span class="keyword">').replace(/\)\)/g, '</span>')
      newStr = newStr.replace(/<</g, '<span class="title">').replace(/>>/g, '</span>')
      return newStr
    }
  }
}