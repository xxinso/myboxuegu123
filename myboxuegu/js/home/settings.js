define(['header', 'aside', 'util', 'nprogress','template','jquery','jquery_form','jquery_uploadify','jquery_datepicker_CN','jquery_datepicker','jquery_region'], function(ud, ud, util, nprogress,template,$,ud,ud,ud,ud,ud) {

	// util返回每一个方法的返回值，想用那个用那个，不用拉到
	var returns = util({
		'checkLoginStatus': [],
		'loading': [],
		// 'getSearch':[]
	});
  // 发起ajax请求
	$.get("/v6/teacher/profile",function(data){
    $(".main .settings").append(template("personCenter",data.result))
	// 启动上传图片插件
     updateImg(); 

	})
	
	// 上传图片的插件
  function updateImg(){
     $('#uploadify').uploadify({
        swf: '/lib/uploadify/uploadify.swf',
        uploader: '/v6/uploader/avatar',
        fileTypeExts: '*.gif; *.jpg; *.png'
    });
	}

	
  
  

	
	// 销毁网站加载进度条
	nprogress.done();
});
