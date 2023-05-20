<template>
  <div class="wraps">
       <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" style="max-width: 460px">
            <el-form-item label="账号">
                 <el-input v-model="formLabelAlign.name" />
            </el-form-item>
            <el-form-item label="密码">
                 <el-input type="password" v-model="formLabelAlign.password" />
            </el-form-item>
            <el-form-item label="验证码">
                 <div style="display:flex">
                      <el-input  v-model="formLabelAlign.code" />
                      <img @click="resetCode" :src="codeUrl" alt="">
                 </div>
            </el-form-item>
            <el-form-item>
                 <el-button @click="submit">登录</el-button>
            </el-form-item>
            <img style="width:40px;height:40px;" :src="getcode" alt="">
            <img style="width:40px;height:40px;" :src="getcode2" alt="">
            <h3>{{ getcode3 }}</h3>
            <h3>{{ getcode4 }}</h3>
            <h3>{{ getcode5 }}</h3>
            <!-- <img style="width:40px;height:40px;" :src="getcode5" alt=""> -->
          </el-form>
  </div>
</template>
  
<script setup lang='ts'>
import { onMounted, reactive, ref } from 'vue';
let getcode = ref('/api/alan/code');
let getcode2 = ref('');
let getcode3 = ref('333');
let getcode4 = ref('');
let getcode5 = ref('/api/v1/xiaoman');
onMounted(()=>{
  let one = fetch('/api/v1/xiaoman')
  one.then((res)=>{
    console.log(res)
    getcode4.value = res.body as any
  });
  getcode3.value = '123'
   console.log(one)
})
const codeUrl = ref<string>('/api/alan/code')

// const codeUrl = ref<string>('')

// 点击重新获取验证码
const resetCode = () => codeUrl.value = codeUrl.value + '?' + Math.random()

const labelPosition = ref<string>('right')

const formLabelAlign = reactive({
  name: "",
  password: "",
  code: ""
})

const submit = async () => {
  await fetch('/api/alan/create', {
       method: "POST",
       body: JSON.stringify(formLabelAlign),
       headers: {
            'content-type': 'application/json'
       }
  }).then(res => res.json())
}



</script>
  
<style>
* {
  padding: 0;
  margin: 0;
}

.wraps {
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
}

html,
body,
#app {
  height: 100%;
}
</style>