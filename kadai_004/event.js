$(window).on('load scroll', (e) => {
    if(e.type === 'load'){
        console.log('loadが発生しました');
    }
    if(e.type === 'scroll'){
        console.log('scrollが発生しました');
    }
});