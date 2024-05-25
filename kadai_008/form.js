$(function () {
    //class属性がbtnの要素がクリックされたら
    $('.btn').on('click', function () {
        //text-boxのvalueを変更
        $('.text-box').val('クリックしました!');
    });
});