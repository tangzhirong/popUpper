/**
 * Created by tzr4032369 on 2016/9/2.
 */

define(['jquery','jqueryUI'],function($,$UI){
    function Window(){
        this.config = {
            title:"",    //默认标题
            content:"welcome!",  //默认内容部分
            footer:"",   //默认底部
            width:400,  //默认宽高
            height:270,
            isdraggable:true,   //是否可拖动
            isMask:true,    //是否有遮罩层
        }
    };
    Window.prototype = {
        alert:function(cfg){
            //应用层参数与默认参数合并
            var config = $.extend({},this.config,cfg);
            var box = $('<div class="window_box"></div>');
            //设置遮罩层
            if(config.isMask){
                var mask = $("<div class='window_mask'></div>");
                mask.appendTo("body");
            }
            //设置弹出层宽高
            box.css({
                width:config.width+"px",
                height:config.height+"px",
            })
            //设置拖拽
            if(config.isdraggable){
                box.draggable();
            }
            //绘制弹出层DOM结构
            var header = $('<header class="window_header"></header>');
            header.appendTo(box);
            header.html(config.title);
            var content = $('<div class="window_content"></div>');
            content.appendTo(box);
            content.html(config.content);
            var footer = $('<a href="#" class="window_footer button button-glow button-rounded button-raised button-primary">'+config.footer+'</a>');
            //为底部按钮添加事件
            footer.on('click',function(event){
                event.preventDefault();
                box.remove();
                mask.remove();
            })
            //弹出层换肤
            if(config.styleClass){
                header.addClass(config.styleClass+"_header");
                content.addClass(config.styleClass+"_content");
                footer.addClass(config.styleClass+"_footer");

            }
            footer.appendTo(box);
            box.appendTo("body");
        }
    }
    return {
        Window:Window
    }
})