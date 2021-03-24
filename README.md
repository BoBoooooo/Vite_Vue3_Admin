# vue3 + vite + element-plus

**比较超前的试验性框架,基于[vite](https://vite-design.surge.sh/guide/chinese-doc.html)新一代脚手架搭建...**

 目前vue3生态还在逐步建立中...vue2.x项目不建议直接升级vue3. 

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

...

## 梗

Vue3: React最佳实践 (逃)
