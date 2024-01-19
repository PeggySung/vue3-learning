<template>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          :router="true"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1" route="home">
            <el-icon><icon-menu /></el-icon>
            <span>首頁</span>
          </el-menu-item>
          <el-menu-item index="2" route="taskList">
            <el-icon><setting /></el-icon>
            <span>任務清單</span>
          </el-menu-item>
          <el-menu-item index="3" route="addTask">
            <el-icon><setting /></el-icon>
            <span>新增任務</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
</template>

<script setup>
import { Document, Menu as IconMenu, Location, Setting, } from '@element-plus/icons-vue';

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};

const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>
