var rule={
    title:'小宝影视',
    host:'https://xiaobao.tv',
    url:'/index.php/vod/show/id/fyclass/page/fypage.html',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{
        'User-Agent':'UC_UA',
    },
    // class_parse:'.fed-pops-navbar&&ul.fed-part-rows&&a.fed-part-eone:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    //class_parse:'.top_nav&&ul li:gt(0):lt(25);a&&Text;a&&href;/(\\d+).html',
    class_name:'电影&电视剧&综艺&动漫&记录片',
    class_url:'1&2&3&4&24',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.vodlist.vodlist_wi;li;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'li.vodlist_item;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
    二级:{"title":"h2&&Text;.content_detail.content_min.fl .data_style&&Text","img":".content_thumb .vodlist_thumb&&data-original","desc":".content_detail.content_min.fl li:eq(-8)&&Text;.content_detail.content_min.fl li:eq(-8)&&Text;.content_detail.content_min.fl li:eq(0)&&Text;.content_detail.content_min.fl li:eq(2)&&Text;.content_detail.content_min.fl li:eq(3)&&Text","content":".content&&Text","tabs":".play_source_tab:eq(0) a","lists":".content_playlist:eq(#id) li"},
    搜索:'body .searchlist_item;a&&title;.vodlist_thumb&&data-original;.pic_text.text_right&&Text;a&&href;.vodlist_sub&&Text',
}
