$(function () {
    let depts_info;

    let createRowHTML = function (deptID,deptName,deptDescription) {
        return "<tr><th scope=\"row\"><input type=\"checkbox\" class=\"form-check-input checkBoxTableItem\"></th>" +
            "<td>"+ deptID +"</td>" + "<td>"+ deptName +"</td>" + "<td>"+ deptDescription +"</td>" + "</tr>";
    }
    let displayData = function () {
        for(let i=0;i<depts_info.length;i++){
            $("#mainTable").append(createRowHTML(depts_info[i].id,depts_info[i].name,depts_info[i].description));
        }
    }
    let clearAll = function () {
        $("#mainTable").empty();
    }
    let isLegalDeptName = function () {
        //todo:正则表达式检测
        return true;
    }

    $.ajax({
        url:"json/depts_info.json",
        dataType:"json",
        success:function (resp){
            depts_info = resp;
            displayData();
        }
    });
    $.ajax();

    $("#checkBoxSelectAll").click(function () {
        let checks = $(".checkBoxTableItem");
        for(let i=0;i<checks.length;i++){
            checks[i].checked=this.checked;
        }
    });


    $("#btnAdd").click(function () {
        $("#modalAddDept").modal("show");
    })
    $("#btnConfirmAdd").click(function () {
        let newDept = {};
        newDept.name = $("#inputDeptName").val();
        newDept.description = $("#inputDeptDescription").val();
        if (!isLegalDeptName(newDept.name)){
            alert("部门名不合法！");
            return;
        }
        let max=0;
        for(let i=0;i<depts_info.length;i++){
            if(depts_info[i].id>max){
                max=depts_info[i].id;
            }
        }
        newDept.id = max+1;
        addToTable(newDept,depts_info);
        clearAll();
        displayData();
        $("#modalAddDept").modal("hide");
    });
    $("#modalAddDept").on("hidden.bs.modal",function () {
        $("#inputDeptName").val("");
        $("#inputDeptDescription").val("");
    });

    let updateID;
    $("#btnUpdate").click(function () {
        let checkBoxes = $("#mainTable input[type=checkbox]:checked");
        if (checkBoxes.length===1){
            let currentUpdateRow = $($(checkBoxes[0]).parent().parent());
            updateID = parseInt(currentUpdateRow.children("td").eq(0).text());
            $("#inputNewDeptName").attr("placeholder",currentUpdateRow.children("td").eq(1).text());
            $("#inputNewDeptDescription").attr("placeholder",currentUpdateRow.children("td").eq(2).text());
            $("#modalUpdateDept").modal("show");
        }else if (checkBoxes.length>1){
            alert("更新的数目不能多于1个！");
        }else {
            alert("请至少选择一个元素！");
        }
    });

    $("#btnConfirmUpdate").click(function () {
        let newDept = {};
        newDept.id = updateID;
        newDept.name = $("#inputNewDeptName").val();
        newDept.description = $("#inputNewDeptDescription").val();
        if(!isLegalDeptName(newDept.name)){
            alert("部门名不合法！");
            return;
        }
        updateTable(newDept,depts_info);
        clearAll();
        displayData();
        $("#modalUpdateDept").modal("hide");
    });

    $("#modalUpdateDept").on("hidden.bs.modal",function () {
        $("#inputNewDeptName").val("");
        $("#inputNewDeptName").attr("placeholder","");
        $("#inputNewDeptDescription").val("");
        $("#inputNewDeptDescription").attr("placeholder","");
    });

    $("#btnDelete").click(function () {

    });
})