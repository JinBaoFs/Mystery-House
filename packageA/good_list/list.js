Page({
    onLoad(option){
        console.log(option,'options')
        this.setData({
            value:option.keyword,
        })
    },
    data:{
        sortList:[{text:'默认'},{text:'人气'},{text:'销量'},{text:'推荐'}],
        value:'',
        activeNumber:0,
        imgUrl:'https://7072-prod-e3wgf-1302240362.tcb.qcloud.la/banner2.jpg?sign=e06a3abc43bc983552578ace6cef6675&t=1590394100',
        dataList:[{},{},{},{},{},{},{},{},{},{},{}]
    },
    handleChangeTab(e){
        let _data = this.data
        let {idx,item} = e.currentTarget.dataset
        if(_data.activeNumber == idx)return
        this.setData({
            activeNumber:idx
        })
    }
})
























