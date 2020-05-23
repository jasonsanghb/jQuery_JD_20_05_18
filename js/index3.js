$(function() {
    
    // 先获取到所有的img
    var $imgs = $('#nav .lunbo img');
    // 获取到.pics-wrap元素
    var $picsWrap = $('#nav .lunbo .pics-wrap');
    var $pointer = $('#nav .lunbo .pointer');
    var $picShow = $('#nav .lunbo .pic-show');
    var $lunbo = $('#nav .lunbo')
    var $allA = $('#nav .lunbo .pointer a');
    var $leftSide = $('#nav .lunbo .left-side')
    var $rightSide = $('#nav .lunbo .right-side')
    var $rightNavLis = $('#nav .right-nav .bigItem')
    // // 让对应的a激活
    // function activeA(el){
    //     el.addClass('active').siblings('a').removeClass('active');
    // }
    // // 让图片马上跳转到对应的index位置 让对应的a激活
    // function toIndexQuick(index) {
    //     $picsWrap.css('left',-$picShow.width() * index)
    //     activeA($allA.eq(index))
    //
    // }
    // // 让图片缓慢跳转到对应index的位置 让对应的a激活
    // function toIndexSlow(i) {
    //     $picsWrap.animate({
    //         left:-$picShow.width() * i
    //     },1000,function() {
    //
    //         if(i===$imgs.length-1){
    //             index = 0
    //             $picsWrap.css('left',0)
    //             activeA($allA.eq(index))
    //             return
    //         }
    //         activeA($allA.eq(i))
    //
    //     })
    // }
    //
    // // 根据img的数目来设置.pics-wrap的宽度
    // $picsWrap.css('width', $imgs.length * $picShow.width());
    // // 动态设置pointer水平居中
    // var $pointerLeft = ($picShow.innerWidth() - $pointer.innerWidth()) / 2 + 'px';
    // $pointer.css('left', $pointerLeft);
    // // hover .pointer中的a时，会给对应的a添加.active类
    // $allA.hover(activeA($(this)));
    // // 设置当前显示的图片索引
    // var index = 0;
    // // 设置定时器标志
    // var timer;
    // // 设置轮播的功能，让图片动起来
    // function lunbo() {
    //         timer = setInterval(function() {
    //         index = (index + 1) % $imgs.length;
    //         // 让图片跳转到对应index的位置
    //             toIndexSlow(index);
    //
    //     }, 3000);
    // }
    // lunbo()
    // // 关闭轮播图 马上跳转到对应的图片 然后再开启轮播
    // function toPic(index){
    //     // 关闭自动轮播
    //     clearInterval(timer);
    //
    //     // 让图片马上跳转到对应index的位置
    //     toIndexQuick(index);
    //
    //     lunbo()
    // }
    //
    // // 当点击pointer中的a时，跳转到对应的图片
    // $allA.on('mouseenter', function() {
    //
    //     index = $(this).index();
    //     // 关闭自动轮播
    //     clearInterval(timer);
    //
    //     // 让图片马上到对应index的位置
    //     toIndexQuick(index);
    //
    // });
    // // 当鼠标mouseenter图片时，停止轮播
    // $lunbo.on('mouseenter',function() {
    //     // 关闭自动轮播
    //     clearInterval(timer);
    // })
    // // 当鼠标mouseleave图片时，开始轮播
    // $lunbo.on('mouseleave',function() {
    //     lunbo()
    // })
    // // 当点击left-side时，跳转到对应的图片
    // $leftSide.on('click',function() {
    //
    //     if(index>0){
    //         index--
    //     }else{
    //         index = $allA.length-1
    //     }
    //     toPic(index)
    // })
    // $rightSide.on('click',function() {
    //
    //     if(index<$allA.length-1){
    //         index++
    //     }else{
    //         index = 0
    //     }
    //     toPic(index)
    // })
    
    // 根据index来改变fn-hide的left值
    $('#nav .right-nav .fn-hide').each(function(index) {
    
        $(this).css('left',-index*63.5+'px')
    })
    $rightNavLis.on('mouseenter',function() {

        // 只有前4个li才有展示隐藏功能的效果
        var index = $(this).index()
        
        if(index<4){
            // 展示向上拉的效果
            $rightNavLis.children('.options').show().animate({
                'margin-top':'0'
            })
            
            // 展示对应的smallItem
            $rightNavLis.find('.smallItem').eq(index).addClass('active').children('.fn-hide').show().end().siblings('.smallItem').removeClass('active').children('.fn-hide').hide()
        }
        
    })
    // 当点击页面上的任意区域，下拉展示框，隐藏内容
    $(document).on('click',function() {
        $rightNavLis.children('.options').animate({
            'margin-top':210
        },function() {
            $(this).hide()
        })
        
    })
    
});