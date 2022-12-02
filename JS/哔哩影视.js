var rule = {
    title:'哔哩影视',
    host:'https://api.bilibili.com',
    url:'/fyclass-fypage',
    filter_url:'fl={{fl}}',
    searchUrl:'/index.php?m=vod-search#wd=**&search=;post',
    searchable:1,
    filterable:1,
    quickSearch:0,
    headers:{
        'User-Agent':'PC_UA',
        "Referer": "https://www.bilibili.com",
    },
    timeout:5000,
    class_name:'番剧&国创&电影&电视剧&纪录片&综艺&全部&追番&追剧&时间表',
    class_url:'1&4&2&5&3&7&全部&追番&追剧&时间表',
    filter:{"全部":[{"key":"tid","name":"分类","value":[{"n":"番剧","v":"1"},{"n":"国创","v":"4"},{"n":"电影","v":"2"},{"n":"电视剧","v":"5"},{"n":"记录片","v":"3"},{"n":"综艺","v":"7"}]},{"key":"order","name":"排序","value":[{"n":"播放数量","v":"2"},{"n":"更新时间","v":"0"},{"n":"最高评分","v":"4"},{"n":"弹幕数量","v":"1"},{"n":"追看人数","v":"3"},{"n":"开播时间","v":"5"},{"n":"上映时间","v":"6"}]},{"key":"season_status","name":"付费","value":[{"n":"全部","v":"-1"},{"n":"免费","v":"1"},{"n":"付费","v":"2%2C6"},{"n":"大会员","v":"4%2C6"}]}],"时间表":[{"key":"tid","name":"分类","value":[{"n":"番剧","v":"1"},{"n":"国创","v":"4"}]}]},
    play_parse:true,
    pagecount:{"1":1,"2":1,"3":1,"4":1,"5":1,"7":1,"时间表":1},
    lazy:'',
    limit:5,
    推荐:'',
    double:true, // 推荐内容是否双层定位
    一级:'',
    一级:'js:let d=[];function get_result(url){let videos=[];let html=request(url);let jo=JSON.parse(html);if(jo["code"]===0){let vodList=jo.result?jo.result.list:jo.data.list;vodList.forEach(function(vod){let aid=(vod["season_id"]+"").trim();let title=vod["title"].trim();let img=vod["cover"].trim();let remark=vod["new_ep"]["index_show"];videos.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})})}return videos}function get_rank(tid,pg){return get_result("https://api.bilibili.com/pgc/web/rank/list?season_type="+tid+"&pagesize=20&page="+pg+"&day=3")}function get_rank2(tid,pg){return get_result("https://api.bilibili.com/pgc/season/rank/web/list?season_type="+tid+"&pagesize=20&page="+pg+"&day=3")}function get_zhui(pg,mode){let url="https://api.bilibili.com/x/space/bangumi/follow/list?type="+mode+"&follow_status=0&pn="+pg+"&ps=10&vmid="+getItem("userid","");return get_result(url)}function get_all(tid,pg,order,season_status){let url="https://api.bilibili.com/pgc/season/index/result?order="+order+"&pagesize=20&type=1&season_type="+tid+"&page="+pg+"&season_status="+season_status;return get_result(url)}function get_timeline(tid,pg){let videos=[];let url="https://api.bilibili.com/pgc/web/timeline/v2?season_type="+tid+"&day_before=2&day_after=4";let html=request(url);let jo=JSON.parse(html);if(jo["code"]===0){let videos1=[];let vodList=jo.result.latest;vodList.forEach(function(vod){let aid=(vod["season_id"]+"").trim();let title=vod["title"].trim();let img=vod["cover"].trim();let remark=vod["pub_index"]+"　"+vod["follows"].replace("系列","");videos1.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})});let videos2=[];for(let i=0;i<7;i++){let vodList=jo["result"]["timeline"][i]["episodes"];vodList.forEach(function(vod){if(vod["published"]+""==="0"){let aid=(vod["season_id"]+"").trim();let title=vod["title"].trim();let img=vod["cover"].trim();let date=vod["pub_ts"];let remark=date+"   "+vod["pub_index"];videos2.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})}})}videos=videos2.concat(videos1)}return videos}function cate_filter(d,cookie){if(MY_CATE==="1"){return get_rank(MY_CATE,MY_PAGE)}else if(["2","3","4","5","7"].includes(MY_CATE)){return get_rank2(MY_CATE,MY_PAGE)}else if(MY_CATE==="全部"){let tid=MY_FL.tid||"1";let order=MY_FL.order||"2";let season_status=MY_FL.season_status||"-1";return get_all(tid,MY_PAGE,order,season_status)}else if(MY_CATE==="追番"){return get_zhui(MY_PAGE,1)}else if(MY_CATE==="追剧"){return get_zhui(MY_PAGE,2)}else if(MY_CATE==="时间表"){let tid=MY_FL.tid||"1";return get_timeline(tid,MY_PAGE)}else{return{}}}VODS=cate_filter();',
    二级:{"title":".data h4--i&&Text;.yac&&Text","img":".item-lazy&&data-original","desc":";;;.act&&Text;.dir&&Text","content":".tbox_js&&Text","tabs":"js:pdfa=jsp.pdfa;TABS=pdfa(html,'.tbox_t h3').map(function(it,idex){return '线路'+(idex+1)})","lists":"ul.list_block:eq(#id) li","tabs":".tbox_t h3"},
    搜索:'ul.tbox_m li;*;*;*;*',

}