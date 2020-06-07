/**
 * Created by wq on 2020/6/7.
 */

var mTemplate = `<div class="menu">
    <a v-for="(item,index) in menu" :key="index" @click="chooseMenu(item.url)" :class="{'choose':menuIndex==index}">
      <img :src="item.icon" class="icon">
      <img :src="item.choose" class="selected">
      <p>{{item.name}}</p>
    </a>
  </div>`
Vue.component('bottom-menu', {
    template: mTemplate,
    props: {
        menuIndex:Number,
    },
    data() {
        return {
            menu: [
                {
                    url:'/',
                    name: '录入',
                    icon: '../../static/img/user.png',
                    choose: '../../static/img/user1.png',
                },
                {
                    url:'/blackList',
                    name: '黑名单',
                    icon: '../../static/img/user.png',
                    choose: '../../static/img/user1.png'
                },
                {
                    url:'/blackRecord',
                    name: '记录',
                    icon: '../../static/img/user.png',
                    choose: '../../static/img/user1.png'
                }
            ],
        }

    },
    methods: {
        chooseMenu(url) {
            this.$router.push(url)
        }
    }
})