<template>
  <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1" class="menu">
      <img class="Logo" src="https://i.ibb.co/fQpNTK1/image.png" alt="Logo" />
      <router-link to="/home">
        <MenuItem name="1">
          <Icon type="ios-home" />首頁
        </MenuItem>
      </router-link>
      <router-link to="/witness">
        <MenuItem name="2">
          <Icon type="ios-book" />見證集
        </MenuItem>
      </router-link>
      <router-link to="/table">
        <MenuItem name="3">
          <Icon type="ios-document-outline" />安排表
        </MenuItem>
      </router-link>
      <Submenu name="4">
        <template slot="title">
          <Icon type="md-people" />組織分配
        </template>
        <MenuGroup title="負責人">
          <MenuItem name="3-1">教牧股</MenuItem>
          <MenuItem name="3-2">教育股</MenuItem>
          <MenuItem name="3-3">宣道股</MenuItem>
          <MenuItem name="3-4">事務股</MenuItem>
          <MenuItem name="3-5">財務股</MenuItem>
          <MenuItem name="3-6">資訊股</MenuItem>
        </MenuGroup>
        <MenuGroup title="詩班">
          <MenuItem name="3-7">迦拿詩班</MenuItem>
          <MenuItem name="3-8">會幕詩班</MenuItem>
          <MenuItem name="3-9">雙連詩班</MenuItem>
          <MenuItem name="3-10">SL小詩班</MenuItem>
        </MenuGroup>
      </Submenu>
      <MenuItem name="5">
        <Icon type="ios-call" />聯絡我們
      </MenuItem>
    </Menu>
    <router-view></router-view>
    <div class="footer">
      <h1 class="Introduction">真耶穌教會雙連教會</h1>
      <h1 class="Introduction">地址:台北市大同區涼州街1之20號 電話:(02) 2557-2277</h1>
      <h1 class="Introduction">© 2020 SLTJC. All rights reserved</h1>
    </div>
  </div>
</template>

<style>
.Logo {
  width: 130px;
  position: absolute;
  top: 0;
  left: 30px;
}
.menu {
  position: relative;
  display: flex;
  justify-content: flex-end;
}
.dog img {
  width: 200px;
}
.cat img {
  width: 200px;
}
.footer {
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Introduction {
  font-size: 14px;
}
</style>

<script>
export default {
  data() {
    return {
      theme1: "light"
    };
  }
};
</script>
