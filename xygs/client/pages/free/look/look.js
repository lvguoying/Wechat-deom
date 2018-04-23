Page({
    data:{
        array: ['玉米', '水果', '水果', '水果', '水果', '水果', '水果', '水果', '水果', '水果', '水果', '水果'],
        index: 0,
        arrayCorn: ['黑龙江','黑龙江','黑龙江','黑龙江','黑龙江','黑龙江'],
        indexCorn: 0,
        arrayBusiness: ['买','卖'],
        indexBusiness: 0,
        showModal: false
    },
    listenerPickerSelected: function(e){
        this.setData({
            index: e.detail.value
        });
    },
    listenerCornPickerSelected: function (e) {
        this.setData({
            indexCorn: e.detail.value
        });
    },
    listenerBusinessPickerSelected: function (e) {
        this.setData({
            indexBusiness: e.detail.value
        });
    },
    showDialogBtn: function () {
         this.setData({
              showModal: true
         })
    },
    hideDialogBtn:function(){
         this.setData({
              showModal: false
          })
    },
    hideModal: function () {
         this.setData({
              showModal: false
         });
    }
})