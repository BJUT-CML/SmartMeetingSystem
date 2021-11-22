$("#login_button").click(
    function(){
        let input_username = $("#input-username").val();
        let input_password = $("#input-password").val();
        if(input_username===""||input_password===""){
            alert("用户名或密码不能为空！");
        }else{
            let flag = false;
            let user_info;
            for(let i=0;i<users_info.length;i++){
                user_info = users_info[i];
                if(input_username===user_info.username && input_password===user_info.password){
                    flag = true;
                    break;
                }
            }
            if(flag===true){
                if(user_info.role==="admin"){
                    location.href = "index_admin.html"+"?"+"name="+user_info.name;
                }else{
                    location.href = "index_normal.html"+"?"+"name="+user_info.name;
                }
            }else{
                alert("用户名或密码错误！");
            }
        }
    }
);