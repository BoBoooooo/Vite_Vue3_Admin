# vue3 + vite2 + element-plus

**比较超前的试验性框架,基于[vite2](https://vite-design.surge.sh/guide/chinese-doc.html)新一代脚手架搭建...**

 目前vue3生态还在逐步建立中...vue2.x项目不建议直接升级vue3. 

 [在线地址](http://server.boboooooo.top:9995)

## 开始使用

- npm run dev 

- npm run build

- npm run report 

## 风格指南

* TS(JS) + template + vue-class-component(option-api) (传统官方推荐写法,保留template)

* TSX + Composition API
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

* 等等...大家根据自己编程喜好进行选择.

## 踩坑

...

## 梗

Vue3: React最佳实践 (逃)
