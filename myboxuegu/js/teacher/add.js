define(['header', 'aside', 'util', 'nprogress','jquery','jquery_form'], function(ud, ud, util, nprogress,$) {

	// util返回每一个方法的返回值，想用那个用那个，不用拉到
	var returns = util({
		'checkLoginStatus': [],
		'loading': []
	});
	
	$('.addTeacher').ajaxForm(function(){
        location.href="/html/teacher/list.html";
})
 
  

	// 销毁网站加载进度条
	nprogress.done();
});
