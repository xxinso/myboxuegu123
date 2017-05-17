define(['header', 'aside', 'util', 'nprogress','jquery','jquery_form','template'], function(ud, ud, util, nprogress, $, ud, template) {

	// util返回每一个方法的返回值，想用那个用那个，不用拉到
	var returns = util({
		'checkLoginStatus': [],
		'loading': [],
		'getSearch': ['tc_id']
	});
	/**
	 * 首先发送get请求
	 * 
	 * */  
	// 获取id
	 var getID=returns.getSearch;
   $.get('/v6/teacher/edit', {tc_id:getID} ,function(data){
      $(".teacher-add").append(template('edit-teacher',data.result));
			$('.teacher-add form').ajaxForm({
			// 这里的data不会复写表单的数据，是在表单数据基础上进行新增
			data: { tc_id: getID },  
			// 成功回调
			success: function() {
				location.href = '/html/teacher/list.html';
			}
		});
	 })
	// 销毁网站加载进度条
	nprogress.done();
});
