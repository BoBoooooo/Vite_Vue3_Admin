<!--
 * @file: DashBoard
 * @copyright: BoBo
 * @author: BoBo
 * @Date: 2019-04-12 19:42:47
 -->

<template>
  <div class="dashboard-container">
    <el-row :gutter="15">
      <el-col :span="24">
        <el-card
          shadow="hover"
          :body-style="{
            display: 'flex',
            'flex-wrap': 'wrap',
            'align-items': 'center',
          }"
        >
          <SvgIcon icon-class="public-teacher" class="icon" />
          <div class="tips">
            <h2>你好 {{ realname }}</h2>
            <div>作者寄语：能见众生便是如来，不易匠心方得始终。 除去繁华，愿匠心安在。</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="24">
        <el-card class="mt-15" shadow="hover">
          <template #header>
            <div class="clearfix">
              <span>
                <SvgIcon icon-class="public-banner" />
                我的开源项目</span
              >
            </div>
          </template>
          <div class="demo-container">
            <el-row :gutter="15" class="row">
              <el-col v-for="(project, index) in data" :key="index" :span="8" class="item">
                <div>
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <SvgIcon icon-class="public-item" class="image" />
                    <div style="padding: 14px" class="item-tips text-ellipsis">
                      <el-link class="name text-ellipsis" target="_blank" type="primary" :href="project.url"> <i class="el-icon el-icon-star-on" /> {{ project.name }} </el-link>
                      <el-link class="preview text-ellipsis" target="_blank" type="danger" :href="project.demo"> 在线预览 </el-link>
                      <span class="des text-ellipsis">{{ project.des }}</span>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import projectData from './data/github';
import { reactive } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Dashboard',
  setup() {
    const data = reactive(projectData);
    const store = useStore();
    return {
      data,
      realname: store.getters['user/realname'],
    };
  },
};
</script>
<style lang="scss" scoped>
.dashboard-container {
  height: 100%;
  width: 100%;
  .icon {
    flex-basis: 60px;
    width: 60px;
    height: 60px;
    margin-right: 20px;
  }
  .tips {
    flex: 1;
  }
  .demo-container {
    .item {
      margin-bottom: 15px;
      &:hover {
        .image {
          transform: scale(1.1);
        }
      }
      .image {
        padding: 10px;
        transition: transform 0.5s;
        height: 100px;
        width: 100%;
      }
      .name,
      .preview {
        font-size: 16px;
        font-weight: 600;
      }
      .preview {
        margin-left: 10px;
        float: right;
        color: rgb(238, 72, 72);
      }
      .des {
        display: block;
        margin-top: 10px;
        margin-left: 20px;
        font-size: 14px;
        color: rgb(109, 109, 109);
      }
      .el-icon {
        color: rgb(255, 174, 0);
      }
    }
  }
}
</style>
