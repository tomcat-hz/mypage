layui.use(['jquery','layer','table'],function () {
   var $=layui.jquery,
       layer=layui.layer;
        table=layui.table;



        //第一个实例
        table.render({
            elem: '#demo'
            ,url: '/userinfo/listByPramas' //数据接口
            ,page: true //开启分页
            ,cols: [[ //表头
                {field: 'id', title: 'ID', width:80, sort: true,align:'center'}
                ,{field: 'phone', title: '手机', width:130,align:'center'}
                ,{field: 'school', title: '学校', width:100,align:'center'}
                ,{field: 'qq', title: 'qq', width:120,align:'center'}
                ,{field: 'job', title: '职业', width:100,align:'center'}
                ,{field: 'photo', title: '照片', width:80,align:'center'}
                ,{field: 'hobby', title: '爱好', width:180,align:'center'}
                ,{fixed: 'right', width: 165, align:'center',title:'操作',field:'', toolbar:'<div><a class="layui-btn layui-btn-xs" lay-event="detail">查看</a>\n' +
                        '                    <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>\n' +
                        '                    <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a></div>'}

            ]]
            ,done:function (res, curr, count) {

            }
        });


        $('#add').click(function () {
            layer.open({
                type:1,
                title: '添加用户',
                area: ['400px', '400px'],
                content: $('#open')
            });
        })

    //监听工具条
    table.on('tool(test)', function(obj){ //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
        var data = obj.data; //获得当前行数据
        var event = obj.event;
        console.log(event);
        if (event == 'detail') {
            console.log(data);
            layer.msg(data);
        }
        if (event == 'del') {
            layer.confirm('是否确认删除?', function () {
                console.log(data);
                layer.closeAll();
            });
        }
        if (event == 'edit') {
            layer.open({
                title: '编辑用户',
                area: ['300px', '400px'],
                content:'666'
            })
        }
    });
});