layui.use(['form','jquery','table'],function () {
   var form=layui.form,
        $=layui.jquery,
       table=layui.table;

    layui.use('table', function(){
        var table = layui.table;

        //第一个实例
        table.render({
            elem: '#demo'
            ,url: '/userinfo/listByPramas' //数据接口
            ,page: true //开启分页
            ,cols: [[ //表头
                {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
                ,{field: 'phone', title: '手机', width:130,align:'center'}
                ,{field: 'school', title: '学校', width:100,align:'center'}
                ,{field: 'qq', title: 'qq', width:120,align:'center'}
                ,{field: 'job', title: '职业', width:100,align:'center'}
                ,{field: 'photo', title: '照片', width:80,align:'center'}
                ,{field: 'hobby', title: '爱好', width:180,align:'center'}
            ]]
            ,done:function (res, curr, count) {
                console.log(res)
            }
        });
    });
});