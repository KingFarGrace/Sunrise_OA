<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
      active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <h4>Sunrise 实验室管理系统</h4>
      <el-menu-item @click="clickmenu(item)" v-for="item in noChildren" :index="item.path" :key="item.path">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group @click="clickmenu(subItem)" v-for="(subItem, subIndex) in item.children"
          :key="subItem.path">
          <el-menu-item :index="subIndex">
            <i :class="subItem.icon"></i>
            <span slot="title">{{ subItem.label }} </span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 700px;
}

.el-menu {
  height: 100%;
  border: none;

}

h4 {
  color: #fff;
  text-align: center;
  line-height: 48px;
}
</style>

<script>
export default {
  name: "commonAside",
  data() {
    return {
      isCollapse: false,
      menu: [
        {
          path: "/Home",
          name: "Home",
          label: "首页",
          icon: "el-icon-s-home",
          url: "Home/Home",
        },
        // {
        //   path:"/person",
        //   name : "person",
        //   label: "人员管理",
        //   icon: "el-icon-user",
        //   url :"",
        // children: [
        //   {
        //     path: "/Person/NewRegister",
        //     name: "register",
        //     label: "新成员注册",
        //     icon: "el-icon-circle-plus",
        //     url: "/Person/NewRegister",
        //   },
        //   {
        //     path: "/Person/Cancel",
        //     name: "cancel",
        //     label: "已有账号注销",
        //     icon: "el-icon-remove",
        //     url: "/Person/Cancel",
        //   },
        //   {
        //     path: "/Person/Search",
        //     name: "search",
        //     label: "查询名单",
        //     icon: "el-icon-question",
        //     url: "/Person/Search",
        //   },
        //   {
        //     path: "/Person/Divide",
        //     name: "divide",
        //     label: "规划部门",
        //     icon: "el-icon-s-custom",
        //     url: "/Person/Divide",
        //   },
        // ],
        // },
        {
          path: "/Group",
          name: "Group",
          label: " 群组",
          icon: "el-icon-user-solid",
          url: "",
        },
        {
          path: "/Seat",
          name: "Seat",
          label: "座位",
          icon: "el-icon-location-information",
          url: "",
        },
        {
          path: "/Resource",
          name: "Resource",
          label: "资源库",
          icon: "el-icon-s-management",
          url: "",
        },
        {
          path: "/Git",
          name: "Git",
          label: "Git",
          icon: "el-icon-share",
          url: "",
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickmenu(item) {
      this.$router.push({
        name: item.name
      })
    }
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
  },
};
</script>