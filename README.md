# popUpper
浮出层组件——基于jquery、jqueryUI、RequireJS

Usage：
  在main.js中的alert方法中传入自定义参数，比如：
  
  require(['jquery','window'],function($,w){
    $("#btn").click(function(){
        new w.Window().alert({
            title:"提示",    //标题部分
            content:"欢迎来到组件开发的世界！",   //内容部分
            footer:"确定",   //底部按钮文字
            width:500,   //宽高
            height:270,
            styleClass:'blue',  //定制皮肤类名（在css中定义.blue_header、.blue_content、.blue_footer即可）
            isdraggable:true,   //可拖动
            isMask:true,    //有遮罩层
        });
    })
})
  如果不传参数，默认参数为：
  function Window(){
        this.config = {
            title:"",    //默认标题为空
            content:"welcome!",  //默认内容部分
            footer:"",   //默认底部文字为空
            width:400,  //默认宽高
            height:270,
            isdraggable:true,   //可拖动
            isMask:true,    //有遮罩层
        }
    };

  组件可定制皮肤，在index.css中编写皮肤样式，类名为：参数中的styleClass+"_header、_content、_footer"：
  
  /*  蓝色主题的定制皮肤  */
  .blue_header{
      color:#088ef0;
  }

  .blue_content{
      background-color: #088ef0;
      font-size: 20px;
      color: white;
  }

  .blue_footer{
      background-color: #088ef0;
  }
