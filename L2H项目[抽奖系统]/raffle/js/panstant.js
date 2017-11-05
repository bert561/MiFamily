/**********************************变量区*****************************************/
//默认信息
var personInfo = [
    {
        id:1,
        name:'L2H',
        age:18,
        sex:'男'
    },{
        id:2,
        name:'CEO',
        age:18,
        sex:'男'
    },{
        id:3,
        name:'张三',
        age:38,
        sex:'男'
    },{
        id:4,
        name:'小红',
        age:48,
        sex:'女'
    },{
        id:5,
        name:'老王',
        age:36,
        sex:'男'
    },{
        id:6,
        name:'李四',
        age:27,
        sex:'男'
    },{
        id:7,
        name:'王五',
        age:36,
        sex:'男'
    },{
        id:8,
        name:'小丽',
        age:37,
        sex:'女'
    },{
        id:9,
        name:'小张',
        age:23,
        sex:'女'
    },{
        id:10,
        name:'花花',
        age:32,
        sex:'男'
    },{
        id:11,
        name:'小李',
        age:34,
        sex:'女'
    },{
        id:12,
        name:'小罗',
        age:34,
        sex:'男'
    },{
        id:13,
        name:'王大',
        age:54,
        sex:'男'
    },{
        id:14,
        name:'牛爷',
        age:25,
        sex:'男'
    },{
        id:15,
        name:'小叶',
        age:18,
        sex:'女'
    },{
        id:16,
        name:'李子',
        age:45,
        sex:'男'
    },{
        id:17,
        name:'张大',
        age:22,
        sex:'男'
    },{
        id:18,
        name:'红红',
        age:24,
        sex:'女'
    },{
        id:19,
        name:'侯爷',
        age:45,
        sex:'男'
    },{
        id:20,
        name:'强哥',
        age:28,
        sex:'男'
    },{
        id:21,
        name:'王爷',
        age:34,
        sex:'男'
    },{
        id:22,
        name:'小妮',
        age:19,
        sex:'女'
    }
]
//获取table的id
var $tab = $('#tab>tbody')
//创建数组用来接收每个tr
var tr = []
//获取所有的导航按钮
var $btn = $('.navBtn')
//获得用户输入的数据
var $text = $('#myForm :text')
//插入数据按钮
var insertButton = $('#myForm :button')
//默认选中的按钮
//var $btnSelect = $('.btnSelect')
//接收信息的长度
var infoLength = personInfo.length;
//获取抽奖按钮
var $raff = $('.raff')
//获取点击抽奖按钮要显示的图片
var $raffroundImg = $('.raffroundImg')


/**********************************方法调用区*****************************************/
    //给表格添加personInfo数据
addPersonInfo()

//设置单行的样式
eachOdd()

//默认第一页大于10行数据就隐藏
gtTenHide()

//点击按钮跳转页面
clackBtnPage()

//为delete按钮添加单击删除数据事件
//onclickDeleteInfo()

//一上来就设置导航按钮(给定ul的宽度)进行居中显示
navBtnCenter()

//得到用户输入的信息并提交
getUserInfoSubmit()

//抽奖图
raffleFunction()


/**********************************方法区*****************************************/

//一上来就设置第一页大于10行就隐藏
function gtTenHide(){
    //一上来就设置每一页tr大于10行数据就隐藏
    var trInfoAll = $('.tr-info')
    if(trInfoAll.size()>=10){
        $('.tr-info:gt(9)').hide()
    }
}

//为每一行数据设置单行背景
function eachOdd () {
    $(tr).each(function(){
        //将背景设置为原来的样式
        $('tr').css('background','white')
        //将背景设置单行的样式
        $('tr:odd').css({
            background:'rgb(110,110,100)'
        })
        //将delete设置为原来的样式
        $('tr .delete').css({
            margin:'0px auto',
            color:'black',
            fontSize:'20px',
            display:'block',
            width:'60%'
        })
        //将delete设置单行的样式
        $('tr:odd .delete').css({
            margin:'0px auto',
            color:'white',
            fontSize:'20px',
            display:'block',
            width:'60%'
        })
    })
}

//点击按钮切换页面并设置每行数据的容量
function clackBtnPage(){
    //点击按钮进行翻页
    $($btn).click(function(){
        //一上来就给所有的tr进行隐藏
        $('.tr-info').hide()
        //移除btnSelect 也就是被选中的按钮
        $($btn).each(function(){
            $($btn).removeClass('btnSelect')
        })
        $(this).addClass('btnSelect')
        var value = $(this).html()
        var num = 0
        //每一页只显示10行数据，其他隐藏
        //gtTenHide() : 如果当前页面为第一页则只显示第一页的数据 其他隐藏
        value == ++num ? $('.tr-info:lt(10)').show() && gtTenHide()
            :value == ++num ? $('.tr-info:gt(9):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(19):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(29):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(39):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(49):lt(10)').show()
            :alert('暂无数据');//注:写死（要求:最多加入50行数据）
    })
}

//得到用户输入的信息并提交
function getUserInfoSubmit(){
    //点击按钮提交数据
    insertButton.click(function(){
        //判断输入的信息不为空才能进行添加
        if($text[0].value!='' && $text[1].value!='' && $text[2].value!='' && $text[3].value!=''){

            var data =0 ;
            //判断添加的数据不能大于50条
            if(infoLength<50){
                data=0

                //遍历personInfo的所有信息
                $(personInfo).each(function(index){
                    //判断用户输入的值是否和有重复
                    if(parseInt($text[0].value)!= personInfo[index].id){
                        data++
                    }
                    })

                    //如果不重复则data的长度等于数据的长度
                    if(data == personInfo.length){

                        //判断输入的编号是否是数值类型
                        if(/^[1-9]+$/.test($text[0].value)){
                            //判断年龄是否是数值类型
                            if((/^[0-9]+$/.test($text[2].value))){
                                //判断年龄是否是男或女
                                if($text[3].value == '男' || $text[3].value == '女'){


                                    var $trInfo = $('.tr-info')
                                    if(parseInt($text[0].value) == parseInt($trInfo.length)+1){
                                        //添加用户输入的信息到容器personInfo
                                        personInfo.push({ id : $text[0].value,
                                            name : $text[1].value,
                                            age : $text[2].value,
                                            sex : $text[3].value
                                        })
                                        //添加用户信息
                                        addInfo()
                                    }else{
                                        alert('编号只能是最后一个成员信息的下一个')
                                    }

                                }else{
                                    alert('性别非男就是女，请正确输入')
                                }


                            }else{
                                alert('你的年龄有些奇特哦!!!')
                            }

                        }else{
                            alert('编号只能输入数字(非0)')
                        }

                    }else{
                        alert('编号重复或非数字，请重新核对后再添加此信息(编号不能为0)!!!')
                    }

            }else{
                alert('人员已满，请删除部分人员后再进行添加(insert)')
            }
            //用户输入的数据为空则进行提示
        }else{
            alert('输入的信息不能为空!!!')
        }


    })
}

//为delete按钮添加单击删除数据事件
function onclickDeleteInfo(){
    //获取tr下面的class为delete的文本为每一个delete加上监听事件(删除事件)
    $('tr>td>.delete').click(deleteInfo)
}

//给表格添加personInfo数据
function addPersonInfo(){
    //给table添加tr（多条数据）
    $(personInfo).each(function(index){
        tr[index] = $tab.append('<tr class="tr-info">'+
        '<td>'+personInfo[index].id+'</td>'+
        '<td>'+personInfo[index].name+'</td>'+
        '<td>'+personInfo[index].age+'</td>'+
        '<td>'+personInfo[index].sex+'</td>'+
        '<td><a class="delete" href="javascript:;">delete</a></td>'+
        '</tr>')
    })

    //为delete按钮添加单击删除数据事件
    onclickDeleteInfo()
}

//删除数据
function deleteInfo() {
    //获取子孙元素
    var $subParent = $(this).parent().parent()
    console.log()
    var flag = confirm('您确定删除' + $subParent.children(':gt(0):lt(1)').html() + '的信息吗？')


    //获取删除的元素的下标值
    var $delIndex = ($($subParent).index())-1
    //通过元素的下标值彻底删除personInfo中的元素
    flag ? personInfo.splice($delIndex,1) : false

    //确定以后删除此行数据 && 删除元素后重新设置单行的样式
    flag ? $subParent.remove() && eachOdd(): false
    //flag为真 infoLength每次删除成员信息就减少
    flag ? infoLength-- :false

    //删除按钮
    deleteButton()
    //遍历按钮
    $($btn).each(function(){
        //如果当前的按钮被选中的状态，更新此页只能有10行数据
        if($(this).hasClass('btnSelect')){
            var value = $(this).html()
            var num = 0
            //每一页只显示10行数据，其他隐藏
            //gtTenHide() : 如果当前页面为第一页则只显示第一页的数据 其他隐藏
            value == ++num ? $('.tr-info:lt(10)').show() && gtTenHide()
                :value == ++num ? $('.tr-info:gt(9):lt(10)').show()
                :value == ++num ? $('.tr-info:gt(19):lt(10)').show()
                :false
            //设置ul的宽度进行居中显示
            navBtnCenter()
        }
    })
    //点击按钮页面
    clackBtnPage()
}

//添加数据
function addInfo(){
    //添加用户输入的数据到表格 并 为新的信息添加单击绑定事件（删除数据）
    $tab.append('<tr class="tr-info">'+
    '<td>'+personInfo[personInfo.length-1].id+'</td>'+
    '<td>'+personInfo[personInfo.length-1].name+'</td>'+
    '<td>'+personInfo[personInfo.length-1].age+'</td>'+
    '<td>'+personInfo[personInfo.length-1].sex+'</td>'+
    '<td><a class="delete" href="javascript:;">delete</a></td>'+
    '</tr>').find('.delete').last('td .delete').click(deleteInfo)

    //排序人员信息
    sortInfo()

    //为新添加的元素背景设置单行的样式
    eachOdd()
    //每次添加新元素增加成员信息长度
    infoLength++
    //添加信息成功后清空输入框的内容
    $text[0].value = ''
    $text[1].value = ''
    $text[2].value = ''
    $text[3].value = ''

    $($btn).each(function(){
    if($(this).hasClass('btnSelect')){
        //一上来就给所有的tr进行隐藏
        $('.tr-info').hide()
        //得到当前按钮的内容
        var value = $(this).html()
        var num = 0
        //每一页只显示10行数据，其他隐藏
        //gtTenHide() : 如果当前页面为第一页则只显示第一页的数据 其他隐藏
        value == ++num ? $('.tr-info:lt(10)').show() && gtTenHide()
            :value == ++num ? $('.tr-info:gt(9):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(19):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(29):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(39):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(49):lt(10)').show()
            :alert('暂无数据');//注:写死（要求:最多加入50行数据）
    }


})

    //添加按钮
    addButton()

    //设置ul的宽度进行居中显示
    navBtnCenter()
}

//删除按钮
function deleteButton(){
    //小于10行数据  删除第二页按钮
    if(infoLength<=10){
        var b = $btn.get(1)
        $(b).parent().remove()
    }
    //小于20行数据  删除第三页按钮
    if(infoLength<=20){
        var b = $btn.get(2)
        $(b).parent().remove()
    }
    //小于30行数据  删除第四页按钮
    if(infoLength<=30){
        var b = $btn.get(3)
        $(b).parent().remove()
    }
    //小于40行数据  删除第五页按钮
    if(infoLength<=40){
        var b = $btn.get(4)
        $(b).parent().remove()
    }
    //小于50行数据  删除第三页按钮
    if(infoLength<=50){
        var b = $btn.get(5)
        $(b).parent().remove()
    }
    //小于60行数据  删除第三页按钮
    if(infoLength<=60){
        var b = $btn.get(6)
        $(b).parent().remove()
    }
    //小于70行数据  删除第三页按钮
    if(infoLength<=70){
        var b = $btn.get(7)
        $(b).parent().remove()
    }
    //设置ul的宽度进行居中显示
    navBtnCenter()
}//注:写死（要求:最多加入50行数据,按钮也是跟着同步）

//添加按钮
function addButton(){
    //重新获取按钮数量
    $btn = $('.navBtn')
    //等于11添加按钮
    if(infoLength == 11){
        $('<a href="javascript:;"><li class="navBtn">'+(parseInt($($btn).last().html())+1)+'</li></a>').appendTo($('.btn-list ul'))
    }
    //等于21添加按钮
    if(infoLength == 21){
        $('<a href="javascript:;"><li class="navBtn">'+(parseInt($($btn).last().html())+1)+'</li></a>').appendTo($('.btn-list ul'))
    }
    //等于31添加按钮
    if(infoLength == 31){
        $('<a href="javascript:;"><li class="navBtn">'+(parseInt($($btn).last().html())+1)+'</li></a>').appendTo($('.btn-list ul'))
    }
    //等于41添加按钮
    if(infoLength == 41){
        $('<a href="javascript:;"><li class="navBtn">'+(parseInt($($btn).last().html())+1)+'</li></a>').appendTo($('.btn-list ul'))
    }
    //等于51添加按钮
    if(infoLength == 51){
        $('<a href="javascript:;"><li class="navBtn">'+(parseInt($($btn).last().html())+1)+'</li></a>').appendTo($('.btn-list ul'))
    }
    //等于61添加按钮
    if(infoLength == 61){
        $('<a href="javascript:;"><li class="navBtn">'+(parseInt($($btn).last().html())+1)+'</li></a>').appendTo($('.btn-list ul'))
    }//注:写死(最多限制50条数据)
    //添加按钮以后再重新获取按钮数量和点击事件
    $btn = $('.navBtn')
    //点击按钮切换页面
    clackBtnPage()
    //设置ul的宽度进行居中显示
    navBtnCenter()
}

//导航按钮的个数进行动态居中显示
function navBtnCenter(){
    //重新获取btn个数(刷新)
    $btn = $('.navBtn')
    //得到导航按钮的大小 包含外边距
    var btnSize = $($btn).outerWidth(true)
    //得到导航按钮的个数
    var varNumber = $($btn).length
    //得到ul元素
    var $ul = $($btn).parent().parent()

    //大小 * 个数 = 外边ul的宽度
    $($ul).css('width',btnSize*varNumber)
}

//排序人员信息
function sortInfo(){
    $($tab).children('.tr-info').remove()
    personInfo = personInfo.sort(function(a,b){
        return a.id - b.id

    })

    //personInfo = sortArr
    addPersonInfo()
}

//实现抽奖功能
function raffleFunction(){
    //点击抽奖按钮
    $($raff).click(function(){
        //获取所有tr
        var $trInfo = $('.tr-info')
        var $trInfoChild = []
        $($trInfo).each(function(index){
            $trInfoChild[index] = $trInfo[index].firstChild.innerHTML
        })
        //遍历所有tr
        $($trInfo).each(function(index){
            //得到某个tr
            var value = $trInfo[index]
            //给tr设置默认颜色black
            $(value).css('color','black')
        })
        //重新设置抽奖图为隐藏
        $($raff).css('display','none')
        //显示抽奖图
       $($raffroundImg).fadeIn(1000)
        //旋转效果的css
        $($raffroundImg).addClass('imgTran')
        //设置定时器
        var stop = setTimeout(function(){
            //判断抽奖图是否有旋转效果
            if($($raffroundImg).hasClass('imgTran')){
                //随机生成中奖结果
                var rafflePerson = parseInt(Math.random()*personInfo[personInfo.length-1].id + personInfo[0].id)
                var whil = 0
                var index = 0 //personInfo的下标
                while(whil == 0){
                    //如果index的长度不小于personInfo.length的长度
                    if(index < personInfo.length){
                        //如果每行数据的值等于中奖的值
                        if($trInfoChild[index++] == rafflePerson){
                            //提示中奖人
                            var qd = confirm('恭喜编号为'+rafflePerson+'的成员中奖了！！！')
                            //遍历每行数据
                            $($trInfo).each(function(index){
                                //每行数据的值是否等于中奖的值
                                if(parseInt($trInfo[index].firstChild.innerHTML) == parseInt(rafflePerson)){
                                    var mumber = $trInfo[index]
                                    //设置中奖人红色字体显示
                                    $(mumber).css('color','red')
                                    if(qd){
                                        $($raff).css('display','block')
                                        $($raffroundImg).removeClass('imgTran')
                                        $($raffroundImg).css('display','none')
                                        clearTimeout(stop)
                                    }else{
                                        $($raff).css('display','block')
                                        $($raffroundImg).removeClass('imgTran')
                                        $($raffroundImg).css('display','none')
                                        clearTimeout(stop)
                                    }
                                    //结束死循环
                                    whil = 1;
                                }
                            })
                        }else{
                            rafflePerson = parseInt(Math.random()*personInfo[personInfo.length-1].id + personInfo[0].id)
                             whil = 0
                        }
                    }else{
                        index=0
                    }
                }
            }
        },5200)
    })
}