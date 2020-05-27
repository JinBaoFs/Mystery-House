Page({
    onLoad(option){
        console.log('这是商品分类页')
    },
    data:{
        titleList:[{text:'女生最爱'},{text:'军旅礼品'},{text:'专属定制'},{text:'生活用品'}],
        goodList:[{}],
        activeName:0,
        value:''
    },
    // 改变选项卡
    handleChangeTab(e){
        let _data = this.data
        let {idx,item} = e.currentTarget.dataset
        if(_data.activeName == idx)return
        this.setData({
            activeName:idx
        })
    },

    //
    onChange(e){
        this.setData({
            value: e.detail
        })
    },
    //跳转到商品列表页
    toGoodList(e){
        let _data = this.data
        wx.navigateTo({
            url:`/packageA/good_list/list?keyword=${_data.value}`
        })
    }
})