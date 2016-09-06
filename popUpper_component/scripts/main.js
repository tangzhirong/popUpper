/**
 * Created by tzr4032369 on 2016/9/2.
 */

require.config({
    paths:{
        jquery:'../jquery-3.1.0.min',
        jqueryUI:"../jquery-ui.min"
    }
})

require(['jquery','window'],function($,w){
    $("#btn").click(function(){
        new w.Window().alert({
            title:"提示",
            content:"欢迎来到组件开发的世界！",
            footer:"确定",
            width:500,
            height:270,
            styleClass:'blue',
        });
    })

})