Component({
    // 组件数据
    properties:{
        active:String
    },
    data:{
        tabbarList:[
            {
                name:'首页',
                icon:'../../static/images/icon_index_default.png',
                iconActive:'../../static/images/icon_index_hover.png',
                path:'/pages/index/index',
                status:0
            },
            {
                name:'分类',
                icon:'../../static/images/icon_fenlei_default.png',
                iconActive:'../../static/images/icon_fenlei_hover.svg',
                path:'/packageA/good_class/goodClass',
                status:1
            },
            {
                name:'关于',
                icon:'../../static/images/icon_lianxi_default.png',
                iconActive:'../../static/images/icon_lianxi_hover.png',
                path:'/packageA/contact/contact',
                status:2
            },
            {
                name:'我的',
                icon:'../../static/images/icon_my_default.png',
                iconActive:'../../static/images/icon_my_hover.png',
                path:'/packageA/my/my',
                status:3
            },
            
        ]
    },
    methods:{
        // tabbar切换
        tabbarChange(e){
            let query = e.currentTarget.dataset['params'];
            if(query.status == this.data.active){
                return
            }
            console.log(query)
            wx.redirectTo({
                url:query.path
            })
        },
        

    }
})