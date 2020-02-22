layui.use(['jquery', 'layer', 'table', 'form'], function () {
    var $ = layui.jquery,
        layer = layui.layer,
        form = layui.form,
        table = layui.table;

    loadUser();

    //第一个实例
    function loadUser() {
    table.render({
        elem: '#demo'
        , url: '/userinfo/listByPramas' //数据接口
        , page: true //开启分页
        , cols: [[ //表头
            {field: 'id', title: 'ID', width: 80, sort: true, align: 'center'}
            , {field: 'phone', title: '手机', width: 130, align: 'center'}
            , {field: 'school', title: '学校', width: 100, align: 'center'}
            , {field: 'qq', title: 'qq', width: 120, align: 'center'}
            , {field: 'job', title: '职业', width: 100, align: 'center'}
            , {field: 'photo', title: '照片', width: 80, align: 'center'}
            , {field: 'hobby', title: '爱好', width: 180, align: 'center'}
            , {
                fixed: 'right',
                width: 165,
                align: 'center',
                title: '操作',
                field: '',
                toolbar: '<div><a class="layui-btn layui-btn-xs" lay-event="detail">查看</a>\n' +
                    '                    <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>\n' +
                    '                    <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a></div>'
            }

        ]]
        , done: function (res, curr, count) {

        }
    });
    }


    $('#add').click(function () {
        layer.open({
            type: 1,
            title: '添加用户',
            area: ['450px', '450px'],
            content: $('#open')
        });
        //表单的操作
        form.on('submit(formDemo)', function (data) {
            /* layer.alert(JSON.stringify(data.field), {
                 title: '最终的提交信息'
             })*/
            //data.field是用户的json信息
            console.log(JSON.stringify(data.field));
            var hobbyStr = '';
            if ('on' == data.field.hobby1) {
                hobbyStr += "电影,"
            }
            if ('on' == data.field.hobby2) {
                hobbyStr += "游戏,"
            }
            if ('on' == data.field.hobby3) {
                hobbyStr += "动漫"
            }
            var addUserJson = {};
            addUserJson = data.field
            addUserJson['hobby'] = hobbyStr;
            //uid=1是管理员,uid=2是普通用户
            addUserJson['uid'] = 2;
            console.log(addUserJson);
            addUser(addUserJson);
            return false;
        });

    })

    //监听工具条
    table.on('tool(test)', function (obj) { //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
        var data = obj.data; //获得当前行数据
        var event = obj.event;
        console.log(event);
        if (event == 'detail') {
            layer.msg(JSON.stringify(data),{time: 5000});
        }
        if (event == 'del') {
            layer.confirm('是否确认删除?', function () {
                console.log(data);
                layer.closeAll();
                var delUserJson = {};
                delUserJson['id'] = data.id;
                delUser(delUserJson);
            });
        }
        if (event == 'edit') {
            console.log(data);
            var id = data.id;
            var hobbyStr = data.hobby;
            layer.open({
                type: 1,
                title: '编辑用户',
                area: ['450px', '450px'],
                content: $('#open')
            });
            form.val("formTest", { //formTest 即 class="layui-form" 所在元素属性 lay-filter="" 对应的值
                "id": data.id,
                "phone": data.phone // "name": "value"
                , "job": data.job
                , "qq": data.qq
                , "school": data.school
                , "hobby1": hobbyStr.indexOf("电影") != -1 ? true : false
                , "hobby2": hobbyStr.indexOf("游戏") != -1 ? true : false
                , "hobby3": hobbyStr.indexOf("动漫") != -1 ? true : false
            });
        }

        //表单的操作
        form.on('submit(formDemo)', function (data) {
            var updUserJson = data.field;
            updUserJson["id"] = id;
            updUserJson["uid"] = 2;
            var hobbyStr = '';
            if ('on' == data.field.hobby1) {
                hobbyStr += "电影,"
            }
            if ('on' == data.field.hobby2) {
                hobbyStr += "游戏,"
            }
            if ('on' == data.field.hobby3) {
                hobbyStr += "动漫"
            }
            updUserJson["hobby"] = hobbyStr;
            /* layer.alert(JSON.stringify(data.field), {
                 title: '最终的提交信息'
             })*/
            console.log(updUserJson);
            updUser(updUserJson);
            return false;
        });
    });


    //添加用户的方法
    function addUser(json) {
        $.ajax({
            type: 'post',
            data: json,
            url: '/userinfo/saveT',
            success: function (msg) {
                if (msg == 'saveSuccess') {
                    layer.closeAll();
                    layer.msg('添加成功', {icon: 1, time: 2000, shade: 0.5, anim: 1});
                    reload();
                } else {
                    layer.msg('添加失败', {icon: 2, time: 2000, shade: 0.5, anim: 1});
                }
            },
            error: function () {
                layer.msg('服务器异常', {icon: 3, time: 2000, shade: 0.5, anim: 1});
            }
        })
    }

    //修改用户的方法
    function updUser(json) {
        $.ajax({
            type: 'post',
            data: json,
            url: '/userinfo/updT',
            success: function (msg) {
                if (msg == 'updSuccess') {
                    layer.closeAll();
                    layer.msg('修改成功', {icon: 1, time: 2000, shade: 0.5, anim: 1});
                    reload();
                } else {
                    layer.msg('修改失败', {icon: 2, time: 2000, shade: 0.5, anim: 1});
                }
            },
            error: function () {
                layer.msg('服务器异常', {icon: 3, time: 2000, shade: 0.5, anim: 1});
            }
        })
    }

    //删除用户的方法通过id
    function delUser(json) {
        $.ajax({
            type: 'post',
            data: json,
            url: '/userinfo/delete',
            success: function (msg) {
                if (msg == 'delSuccess') {
                    layer.closeAll();
                    layer.msg('修改成功', {icon: 1, time: 2000, shade: 0.5, anim: 1});
                    reload();
                } else {
                    layer.msg('修改失败', {icon: 2, time: 2000, shade: 0.5, anim: 1});
                }
            },
            error: function () {
                layer.msg('服务器异常', {icon: 3, time: 2000, shade: 0.5, anim: 1});
            }

        });
    }

    //重载表格的方法,在对表格修改之后执行相当于刷新表格
    function reload() {
        loadUser();
    }

});