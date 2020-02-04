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
                {type:'checkbox'}
                ,{field: 'id', title: 'ID', width:80, sort: true,align:'center'}
                ,{field: 'phone', title: '手机', width:130,align:'center'}
                ,{field: 'school', title: '学校', width:100,align:'center'}
                ,{field: 'qq', title: 'qq', width:120,align:'center'}
                ,{field: 'job', title: '职业', width:100,align:'center'}
                ,{field: 'photo', title: '照片', width:80,align:'center'}
                ,{field: 'hobby', title: '爱好', width:180,align:'center'}
                ,{fixed: 'right', width: 165, align:'center',title:'操作',field:'', toolbar:'<div><button class="layui-btn layui-btn-primary layui-btn-xs" id="detail">查看</button>\n' +
                        '        <button class="layui-btn layui-btn-xs" id="edit">编辑</button>\n' +
                        '        <button class="layui-btn layui-btn-danger layui-btn-xs" id="del">删除</button></div>'}
            ]]
            ,done:function (res, curr, count) {
                console.log(res)
                $("#edit,#del,#detail").click(function () {
                    // console.log($(this).text());
                    if ($(this).text() == '查看') {
                        layer.msg('执行查看操作');
                    }
                    if ($(this).text() == '编辑') {
                        layer.msg('执行编辑操作');
                    }
                    if ($(this).text() == '删除') {
                        layer.msg('执行删除操作');
                    }

                });
            }
        });


});