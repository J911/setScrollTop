var setScrollTop = function(node){
    this.version = '1.0.0';
    this.targetNode = node;
    this.top = this.targetNode.getBoundingClientRect().top;
};

setScrollTop.prototype = {
    setScrollListiner: function(top=0, callback){
        var Top = this.top;
        window.addEventListener('scroll', function(e) {     
              var scroll_position = window.scrollY;
              var result = new Object();
              result.position = scroll_position;
              result.result = Top+top - scroll_position;
              if(Top+top < scroll_position){
                  result.state = "over";
              }else{
                result.state = "under";                
              }
              callback(result);
        });
    }
};