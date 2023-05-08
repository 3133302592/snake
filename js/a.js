let ditu = document.getElementById('ditu');
let fenshu=document.getElementsByTagName('span')[0];
function suiji(color) {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.position = 'absolute';
    div.style.backgroundColor = color;
    div.style.left = parseInt(Math.random() * 10) * 50 + 'px';
    div.style.top = parseInt(Math.random() * 10) * 50 + 'px';
    ditu.appendChild(div);
    return div;
}
let shetou = suiji('red')
let shiwu = suiji('black')
let arr = [];
let f=0;
shetou.value = '右'
document.onkeydown = function (event) {
    switch (event.key) {
        case 'w':
            if(shetou.value!='下'){
                shetou.value = '上';
            }
            break;
        case 's':
            if(shetou.value!='上'){
                shetou.value = '下';
            }
            break;
        case 'a':
            if(shetou.value!='右'){
                shetou.value = '左';
            }
            break;
        case 'd':
            if(shetou.value!='左'){
                shetou.value = '右';
            }
            break;
    }
}
function fangxiang() {
    
    switch (shetou.value) {
        case '上':
            shetou.style.top = parseInt(shetou.style.top) - 50 + 'px';
            break;
        case '下':
            shetou.style.top = parseInt(shetou.style.top) + 50 + 'px';
            break;
        case '左':
            shetou.style.left = parseInt(shetou.style.left) - 50 + 'px';
            break;
        case '右':
            shetou.style.left = parseInt(shetou.style.left) + 50 + 'px';
            break;
    }
    
    if(arr.length){
        for(let i=arr.length-1;i>=0;i--){
            switch (arr[i].value) {
                case '上':
                    arr[i].style.top = parseInt(arr[i].style.top) - 50 + 'px';
                    break;
                case '下':
                    arr[i].style.top = parseInt(arr[i].style.top) + 50 + 'px';
                    break;
                case '左':
                    arr[i].style.left = parseInt(arr[i].style.left) - 50 + 'px';
                    break;
                case '右':
                    arr[i].style.left = parseInt(arr[i].style.left) + 50 + 'px';
                    break;
            }
            if(i==0){
                arr[i].value=shetou.value;
            }else[
                arr[i].value=arr[i-1].value
            ]
        }
    }
    if (shetou.style.left == shiwu.style.left && shetou.style.top == shiwu.style.top) {
        let shenti = suiji('yellow');
        if (arr.length > 0) {
            a = arr[arr.length - 1];
        } else {
            a = shetou;
        }
         
        switch (a.value) {
            case '左':
                shenti.style.left = parseInt(a.style.left) + 50 + 'px';
                shenti.style.top = a.style.top;
            break;
            case '右':
                shenti.style.left = parseInt(a.style.left) - 50 + 'px';
                shenti.style.top = a.style.top;
            break;
            case '上':
                
                shenti.style.top = parseInt(a.style.top)+50+'px';
                shenti.style.left = a.style.left
            break;
            case '下':
                
                shenti.style.top = parseInt(a.style.top)-50+'px';
                shenti.style.left = a.style.left
            break;
        }
        shenti.value=a.value;
        arr.push(shenti);
        shiwu.style.left = parseInt(Math.random() * 10) * 50 + 'px';
        shiwu.style.top = parseInt(Math.random() * 10) * 50 + 'px';
        
        f+=10;
        fenshu.innerHTML=f;
    }
    if(parseInt(shetou.style.left+'px')<0||parseInt(shetou.style.left+'px')>450){
        alert('撞墙')
        clearInterval(a);
    }
    if(parseInt(shetou.style.top+'px')<0||parseInt(shetou.style.top+'px')>450){
        alert('撞墙')
        clearInterval(a);
    }
    if(arr.length>0){
        for(let i=0;i<arr.length;i++){
            if(parseInt(shetou.style.left+'px')==parseInt(arr[i].style.left+'px')&&parseInt(shetou.style.top+'px')==parseInt(arr[i].style.top+'px')){
                alert('咬尾巴了')
                clearInterval(a);
            }
        }
    }
    
    
}

let a = setInterval(fangxiang, 500);