layui.use(['form','jquery','layer'],function () {
   var form=layui.form,
       layer=layui.layer,
        $=layui.jquery;


    if ($('#msg').text() != '') {
        layer.msg('用户还未登陆!!!',{icon:2,time:1000,shade:0.5, anim: 1});
    }

    form.on('submit(formDemo)', function (data) {
        console.log(data.field);
        //获取表格中的数据,去数据库中查询是否符合登陆
        var loginJson={};
        loginJson['userName']=data.field.username;
        loginJson['userPwd']=data.field.password;
        login(loginJson);
        return false;
    });


    function login(data) {
        $.ajax({
            type: 'post',
            url: '/user/login',
            data: data,
            success:function (data) {
                console.log(data);
                if (data === 'success') {
                    layer.msg('恭喜登陆成功', {icon: 1, time: 2000, shade: 0.5, anim: 2});
                    //两秒后去首页
                    setTimeout(toIndex, 2000);
                    function toIndex() {
                        location.href = "/user/toIndex";
                    }

                } else {
                    layer.msg('登陆失败',{icon:2,time:1000,shade:0.5, anim: 2})
                }
            },
            error: function () {
                layer.msg('服务器异常',{icon:3,time:1000,shade:0.5, anim: 2})
            }
        })
    }



    var show_num = [];

    //验证码的初始化
    draw(show_num);

    var code;  //随机产生的验证码

    $("#canvas").attr({'style': 'background-color:white;margin-top:10px;border-radius:10px'});
    $("#canvas").on('click', function () {
        draw(show_num);//生成验证码方法

    })

    //自定义验证
    form.verify({
        pwd: [/^[\S]{6,18}$/,'登录密码必须6到18位，且不能出现空格']
        ,username: function(value, item){ //value：表单的值、item：表单的DOM对象
            if(value.length<=4||value.length>=12){
                return '用户名长度为4-12位';
            }
        }
        ,canvas: function(value, item){ //value：表单的值、item：表单的DOM对象
            if(code.toLocaleLowerCase()!=value.toLocaleLowerCase()){
                return '验证码不正确';
            }
        }
    });

    //提交登录
    form.on('submit(demo2)', function(res){
        var loginJsonUser = res.field; //当前容器的全部表单字段，名值对形式：{name: value}
        loginUser(loginJsonUser);
        return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
    });

    function draw(show_num) {
        code = '';
        var canvas_width = $('#canvas').width();//获取默认的验证码标签的宽度
        var canvas_height = $('#canvas').height();//获取默认的验证码标签的高度
        var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
        var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
        canvas.width = canvas_width;//把默认的宽度赋值给新生产的验证码宽度
        canvas.height = canvas_height;//把默认的高度赋值给新生产的验证码高度
        var sCode = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
        var aCode = sCode.split(",");//获取验证码字符的数组
        var aLength = aCode.length;//获取到数组的长度
        for (var i = 0; i < 4; i++) {
            var j = Math.floor(Math.random() * aLength);//获取到随机的索引值  0-61
            var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
            var txt = aCode[j];//得到随机的一个内容
            show_num[i] = txt.toLowerCase();//将大写字母转为小写(获取到的数据全部为小写)
            code += show_num[i];
            var x = 10 + i * 36;//文字在canvas上的x坐标
            var y = 23 + Math.random() * 8;//文字在canvas上的y坐标
            context.font = "bold 33px 微软雅黑";
            context.translate(x, y);
            context.rotate(deg);
            context.fillStyle = randomColor();
            context.fillText(txt, 0, 0);
            context.rotate(-deg);
            context.translate(-x, -y);
        }
        $("#yzmHiddle").val(show_num.join(""));
        for (var i = 0; i < 10; i++) { //验证码上显示线条
            context.strokeStyle = randomColor();
            context.beginPath();
            context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
            context.stroke();
        }
        for (var i = 0; i <= 300; i++) { //验证码上显示小点
            context.strokeStyle = randomColor();
            context.beginPath();
            var x = Math.random() * canvas_width;
            var y = Math.random() * canvas_height;
            context.moveTo(x, y);
            context.lineTo(x + 1, y + 1);
            context.stroke();
        }
        console.log(code);
    }

    function randomColor() {//得到随机的颜色值
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }


});