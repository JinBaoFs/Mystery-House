Page({
    onLoad(option){
        console.log(option,'options')
        this.setData({
            value:option.keyword
        })
    },
    data:{
        sortList:[{text:'默认'},{text:'人气'},{text:'销量'}],
        value:'',
        activeNumber:0
    }
})
























