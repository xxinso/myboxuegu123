define(['header', 'aside', 'util', 'nprogress', 'template','bootstrap'], function(ud, ud, util, nprogress, template,bootstrap) {

	// util返回每一个方法的返回值，想用那个用那个，不用拉到
	var returns = util({
		'checkLoginStatus': [],
		'loading': [],
		"getSearch":[]
	});
	
	/**
	 * 讲师列表渲染：
	 * 1、请求讲师列表数据
	 * 2、请求成功后使用template编译页面中编写好的模版
	 * 3、把模版放入指定页面中的位置
	 * */
	template.helper('age', function(tplValue){
		
		// 如果没有值，则返回空字符串
		if(!tplValue){
			return '';
		}
		
		var birthdayY = tplValue.slice(0, 4);
		var currentY = new Date().getFullYear();
		return currentY - birthdayY;
	});
	$.get('/v6/teacher', function(data) {
		// data.result的值为数组时，我们直接把data传入模版
		$('#tc-list-table').append(template('tc-list-tpl', data));
	});
  //点击时发送ajax请求
	$(document).on("click",".look",function(){
    $.get('/v6/teacher/view',function(data){
        console.log(data);
				// 将内容用模版渲染到页面上
				$('#teacherModal').html(template('teacher-detail',data.result))
		})
	})
  //当点击close按钮时将id里的内容清空
	$("#teacherModal .close").on("click",function(){
      $('#teacherModal').html="";
	})
	
  // 用事件委托添加事件
	$(document).on("click",".anniu",function(){
      var tcId=$(this).attr("data-tc-id");
      var tcStatus=$(this).attr("data-tc-status");
			var that=$(this);
		$.post('/v6/teacher/handle',{
			 tc_id:tcId,
			 tc_status:tcStatus
		},function(data){
			// 用返回的文档修改
        that.attr("data-tc-status","data.result.tc_status").text(data.result.tc_status == 0? '注 销': '启 用')
		})
	 })
	// 销毁网站加载进度条
	nprogress.done();
});
