<template>
    <div class="common-layout full-height-width">
      <el-container class="full-height-width">
        <el-header class="custom-header">
            <the-header />
        </el-header>
        <el-container class="body-container">
          <el-aside class="el-aside-custom">
            <the-menu />
          </el-aside>
          <el-main>
            <el-scrollbar>
              <router-view />
            </el-scrollbar>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script setup>
import TheHeader from '@/views/layout/TheHeader.vue'
import TheMenu from '@/views/layout/TheMenu.vue'
</script>

<style scoped>
    
</style>