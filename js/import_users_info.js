let users_info;
$.ajax({
    url:"json/users_info.json",
    dataType:"json",
    success:function (resp){
        users_info = resp;
    }
});
$.ajax()