layui.use(['laydate', 'jquery'], function () {
    var laydate = layui.laydate,
        $ = layui.jquery;

    setInterval(showTime, 1000);

    //展示现在的时间
    function showTime() {
        laydate.render({
            elem: '#time',
            format: 'yyyy年MM月dd日 HH:mm:ss',
            value: new Date(),
        });
    }

});