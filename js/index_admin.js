$(function (){
	//每1秒刷新一次时间
	setInterval(function(){
		$("#nowTime").text(getTime());
	},1000);

	/***********************************************/
//当点击一级菜单的超链接时，触发的事件
	$(".menu>li>a").click(function(){
		//获取当前点击的一级菜单下的二级菜单的显示状态
		let display = $(this).siblings(".sub-menu").css("display");
		//如果当前点击的一级菜单下的二级菜单时隐藏的
		if(display==="none"){
			//则让二级菜单显示
			$(this).siblings(".sub-menu").show();
		}else{
			//否则让二级菜单隐藏
			$(this).siblings(".sub-menu").hide();
		}
		//设置当前一级菜单的高度为自动适应
		$(this).parent().css("height","auto");
		//设置当前点击的一级菜单下的二级菜单的背景颜色
		$(this).siblings(".sub-menu").css("background","#35404D");
	});
//当鼠标移入二级菜单的超链接时，触发的事件
	$(".sub-menu>li>a").mouseover(function(){
		$(this).parent().css("background","rgb(82 100 121)").css("color","white");
	});
//当鼠标移出二级菜单的超链接时，触发的事件
	$(".sub-menu>li>a").mouseout(function(){
		$(this).parent().css("background","#35404D");
	});

	/***********************************************/
	$("#loginName").text(getParam("name"));

	$("#logout").click(function (){
		window.location = "login.html";
	});


	//点击修改密码按钮时显示modal
	$("#btnChangePassword").click(function () {
		$("#changePasswordModal").show();
	});
	$("#btn_confirm_change_password").click(function (){
		let oldPassword = $("#input_primary_password").val();
		let newPassword = $("#input_new_password").val();
		let newPasswordConfirm = $("#input_new_password_confirm").val();
		if(oldPassword===""){
			alert("请输入旧密码");
			return;
		}
		if(newPassword===""){
			alert("请输入新密码");
			return;
		}
		if (newPasswordConfirm===""){
			alert("请确认新密码");
			return;
		}
		if (newPassword!==newPasswordConfirm){
			alert("两次输入得新密码不一致");
			return;
		}
		let legalPasswordTest = /^\w{6,20}$/;
		if(legalPasswordTest.test(newPassword)){
			//todo:待完善
			$("#changePasswordModal").hide();
		}else {
			alert("密码格式错误!请确保新密码由6-20位数字、字母或下划线组成");
		}
	});
	//关闭modal时清空form
	$("#changePasswordModal").on("hidden.bs.modal",function () {
		$("#input_primary_password").val("");
		$("#input_new_password").val("");
		$("#input_new_password_confirm").val("");
	});

	const myFrame = $("#myFrame");
	//当点击二级菜单的超链接时，触发的事件
	$(".sub-menu>li>a").click(function(){
		let nav = $(this).text();
		switch (nav){
			case "部门管理":
				myFrame.attr("src","dept_manage.html");
				break;
			default:
				break;
		}
	});
});