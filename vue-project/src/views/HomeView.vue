<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
const useFetch = async(url:string)=>{
  const res =await fetch(url).then(res => res.arrayBuffer())
  console.log(res)
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob([res]))
  a.download  = "xiaoman.zip"
  a.click()
}
const download = () => {
  useFetch('http://localhost:3000/upload/stream')
}
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <h3>this is home</h3>
    <p>文件流下载图片</p>
    <button @click="download()">图片流下载</button>
  </main>
</template>
