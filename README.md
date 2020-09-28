# vue3 + vite + tsx + antd

**比较超前的试验性框架,基于[vite](https://vite-design.surge.sh/guide/chinese-doc.html)新一代脚手架搭建...**

 目前vue3生态还在逐步建立中...vue2.x项目不建议直接升级vue3. 
 
 第三方ui框架目前似乎只有antd支持vue3, 大家耐心等待其他开源.

## 风格指南
* TSX + Composition API (比较推荐)
最终我们的App.tsx写法如下
```javascript
import { defineComponent } from 'vue';
import {RouterLink, RouterView} from 'vue-router';
import './style/main.scss'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div id="nav">
          <RouterLink to="/">Home</RouterLink> |
          <RouterLink to="/about">About</RouterLink>
        </div>
        <RouterView/>
      </>
    );
  }
});

```
* TSX(JSX) + Render 

``` javascript

export default {
  data(){},
  methods:{},
  computed:{},
  render(){
    return (
      <div>TSX + Render</div>
    )
  }
}
```

* TS(JS) + template + vue-class-component(也可不用) (传统官方推荐写法,保留template)

* 等等...大家根据自己编程喜好进行选择.

## 踩坑
"ant-design-vue": "2.0.0-beta.10"

按照官网按需引入方式,css未能成功加载.

暂时将css全局引入解决.

https://github.com/vueComponent/ant-design-vue/issues/2803

