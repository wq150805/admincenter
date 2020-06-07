/**
 * Created by wq on 2020/6/7.
 */

var menuTemplate = `<div class="menus" id="app">
    <div class="logo">
      <a class="logo">数据管理</a>
    </div>
    <ul>
      <li
              v-for="(menu,index) in menus"
              :key="index">
        <p :class="{'choose':first  === index}"
           @click="chooseMenu(index,menu.route)"
           @mousemove="showHover(index)"
           @mouseleave="showHover('')">
          <img src="../../static/img/menu/commodity.png" v-if="index === 0&&first!==0">
          <img src="../../static/img/menu/commodity1.png" v-if="index === 0&&first===0">

          <img src="../../static/img/menu/order.png" v-if=" index === 1&&first!==1">
          <img src="../../static/img/menu/order1.png" v-if="index === 1&&first===1">

          <img src="../../static/img/menu/user.png" v-if=" index === 2&&first!==2">
          <img src="../../static/img/menu/user1.png" v-if="index === 2&&first===2">

          <img src="../../static/img/menu/notice.png" v-if=" index === 3&&first!==3">
          <img src="../../static/img/menu/notice1.png" v-if="index === 3&&first===3">

          <img src="../../static/img/menu/system.png" v-if=" index === 4&&first!==4">
          <img src="../../static/img/menu/system1.png" v-if="index === 4&&first===4">
          <span>{{ menu.title }}</span>
          <i v-show="menu.children.length!==0" :class="{'goto':first === index}"></i>
        </p>
        <div v-if="first === index" class="child">
          <a
                  v-for="(item,cindex) in menu.children"
                  :key="cindex"
                  :class="{'choose_child':second === cindex}"
                  @click="chooseChild(cindex,item.url)">
            {{ item.name }}
          </a>
        </div>
      </li>
      </ul>
  </div>`
Vue.component('left-menu', {
    template: menuTemplate,
    props: {
        second:Number,
        first:Number
    },
    data() {
        return {
            menuIndex: '',
            childIndex: 0,
            menus: [
                {
                    title: '商品管理',
                    route: '../commodity/commodityManage.html',
                    children: [
                        {
                            name: '商品',
                            url: '../commodity/commodityManage.html'
                        }
                    ]
                },
                {
                    title: '订单管理',
                    route: '../order/orderManage.html',
                    children: [
                        {
                            name: '订单',
                            url: '../order/orderManage.html'
                        }
                    ]
                },
                {
                    title: '用户管理',
                    route: '../user/userManage.html',
                    children: [
                        {
                            name: '用户',
                            url: '../user/userManage.html'
                        }
                    ]
                },
                {
                    title: '公告管理',
                    route: '../notice/noticeManage.html',
                    children: [
                        {
                            name: '公告',
                            url: '../notice/noticeManage.html'
                        }
                    ]
                },
                {
                    title: '系统配置',
                    route: '../system/setting.html',
                    children: [
                        {
                            name: '配置',
                            url: '../system/setting.htm'
                        }
                    ]
                }
            ]
        }

    },
    methods: {
        chooseMenu:function(index, route) {
            this.menuIndex = index;
            this.childIndex = 0;
            window.location.href = route;
        },

        chooseChild:function(index, route) {
            this.childIndex = index;
            window.location.href = route;
        },
        showHover:function(index) {
            this.menuIndex = index;
        },
    }
})