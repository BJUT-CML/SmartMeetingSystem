function addToTable(object,table) {
    if (table.length===0){
        table.push(object);
    }else {
        let loc = -1;
        for(let i=0;i<table.length;i++){
            if(table[i].id>object.id){
                alert("come in");
                loc = i;
                break;
            }
        }
        if (loc===-1){
            table.push(object);
        }else {
            table.splice(loc,0,object);
        }
    }
}

function updateTable(object,table) {
    for(let i=0;i<table.length;i++){
        if(table[i].id===object.id){
            table[i] = object;
            break;
        }
    }
}

function deleteFromTable(id,table) {
    if(Array.isArray(id)){
        for (let i=0; i<id.length; i++) {
            for(let j=0; j<table.length; j++){
                if (id[i]===table[j].id){
                    table.splice(j,1);
                    break;
                }
            }
        }
    }else{
        for(let i=0;i<table.length;i++){
            if(table[i].id===id){
                table.splice(i,1);
                break;
            }
        }
    }
}