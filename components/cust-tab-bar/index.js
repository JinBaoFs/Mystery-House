Component({
    // 组件数据
    properties:{
        active:String
    },
    data:{
        tabbarList:[
            {
                name:'交易市场',
                icon:'../../static/images/icon_shichang_default.svg',
                iconActive:'../../static/images/icon_shichang_select.svg',
                path:'/pages/index/index',
                status:0
            },
            {
                name:'我的',
                icon:'../../static/images/icon_wode_default.svg',
                iconActive:'../../static/images/icon_wode_select.svg',
                path:'/pages/my/my',
                status:1
            }
        ]
    },
    methods:{
        // tabbar切换
        tabbarChange(e){
            let query = e.currentTarget.dataset['params'];
            if(query.status == this.data.active){
                return
            }
            wx.redirectTo({
                url:query.path
            })
        },
        

    }
})