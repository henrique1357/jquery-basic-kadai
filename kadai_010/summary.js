$(function() {
    //id属性change-colorのボタンがクリックされたら、id属性targetの文字色変化
    $('#change-color').on('click', function() {
        $('#target').css('color', 'red');
    });
    //id属性change-textのボタンがクリックされたら、id属性targetの文字内容変化
    $('#change-text').on('click', function() {
        $('#target').text('Hello!');
    });
    //id属性fade-outのボタンがクリックされたら、id属性targetの文字を消す
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });
    //id属性fade-inのボタンがクリックされたら、id属性targetの文字が現れる
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
});