/**
 * Created by admin on 2017/9/6.
 */
var SongInfo = [
    {"singer":"林海","name":"琵琶语","url":"http://newsms.netor.com/m/grieve/stores/o/200701/200701m70505snet0r28212415.mp3"},
    {"singer":"尺八","name":"宙","url":"http://webdisk.yyjxkj.com/angel/aini/%E5%AE%99.mp3"},
    {"singer":"宗次亮","name":"故乡的原风景","url":"http://www.kf-cn.com/cn/miimg/sound.mp3"}];

//准备html模板
var dom = {
    'head':'<ul>',
    'repeat':'<li><a href="{url}">{singer} — {name}</a></li>',
    'foot':'</ul>'
};

//准备替换进模板的数据
var songData = [];
for (var n=0;n<SongInfo.length;n++){
    songData.push({url:SongInfo[n].url,singer:SongInfo[n].singer,name:SongInfo[n].name})
}

//数据替换进模板的方法
function substitute(template, data, regexp){
    if(!(Object.prototype.toString.call(data) === "[object Array]")){
        data = [data]
    }

    var ret = [];
    for(var i=0,j=data.length;i<j;i++){
        ret.push(replaceAction(data[i]));
    }

    function replaceAction(object){
        return template.replace(regexp || (/\\?{([^}]+)}/g), function(match, name){
            if (match.charAt(0) == '\\') return match.slice(1);
            return (object[name] != undefined) ? object[name] :'';
        });
    }
    return ret.join("");
}

//将数据接入模板
var html = [dom.head,substitute(dom.repeat,SongInfo ),dom.foot].join("");

