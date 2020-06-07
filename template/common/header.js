/**
 * Created by wq on 2020/6/7.
 */

var headerTemplate = `<div class="page_header">
        <div class="set">
          <span>欢迎，admin</span>
          <a @click="dropOut">退出</a>
        </div>
      </div>`
Vue.component('my-header', {
    template: headerTemplate,
    data() {
        return {
        }

    },
    methods: {
        dropOut:function(){
            window.location.href = '../login.html'
        }
    }
})