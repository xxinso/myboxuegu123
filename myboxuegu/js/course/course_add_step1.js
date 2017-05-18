define(['header', 'aside', 'util', 'nprogress', 'jquery_form', 'jquery','template'], function(ud, ud, util, nprogress, ud, $,template) {

	// util返回每一个方法的返回值，想用那个用那个，不用拉到
	var returns = util({
		'checkLoginStatus': [],
		'loading': [],
		'getSearch': ['cs_id']
	});
	
	/**
	 * 创建课程
	 * */
  // ajax请求让页面上产生数
   
  var getId=returns.getSearch;
	 $.get("/v6/course/basic",{cs_id:getId},function(data){
      //讲信息回显到页面上 
			console.log(data);
		$("#courseAddstepOne").append(template("addClassStep1",data.result));
              
		    //发起ajax请求提交数据		
				$('.btn-save').ajaxForm(function(data){
					location.href = '/html/course/course_add_step2.html?cs_id=' + cs_id;
				})
	 })
  // 发起二级提交

	// 对二级菜单发出监听事件，并发出ajax请求
	  $(document).on("change","#top-sg-select",function(){
      // 将文本渲染到页面上
	  $.get("/v6/category/child",{cg_id:$(this).val()},function(data){
            $("#cg_id_select").html("");			      
       for(var i=0,len=data.result.length; i<len; i++){
           var option="<option value='"+data.result[i].cg_id+"'>"
					             +data.result[i].cg_name+"</option>";
					$("#cg_id_select").append(option);						 									 
			 } 
			 console.log($("#cg_id_select"));             
		})
})


        
		
    
	// 销毁网站加载进度条
	nprogress.done();
});
