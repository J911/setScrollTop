# setScrollTop
node position and scroll detection module

## use

### scroll.setScrollListiner(pxel, callback)

```
var target = document.getElementById('id');
var scroll = new setScrollTop(target);

scroll.setScrollListiner(40, function(res){
  console.log(res);
});
```

### example

```
var nav = document.getElementById('nav');
var scroll = new setScrollTop(nav);

scroll.setScrollListiner(40, function(res){
    if(res.state ==  'over'){
        if($('#nav').attr('data') == 'default'){
            $('#nav').addClass('slide-nav').attr('data','over');
        }                    
    } 
    else if(res.state ==  'under'){
        if($('#nav').attr('data') == 'over'){
            $('#nav').removeClass('slide-nav').attr('data','default');
        }
    } 
});

```
[Demo1](https://j911.github.io/setScrollTop/demo/demo1.html)
[Demo2](https://j911.github.io/setScrollTop/demo/demo2.html)
