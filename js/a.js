let ditu = document.getElementById('ditu');
ditu.style.width = '500px';
let fenshu = document.getElementsByTagName('span')[0];
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
let shiwu = suiji('yellow')
let arr = [];
let f = 0;
shetou.value = '右'
document.onkeydown = function (event) {
    switch (event.key) {
        case 'w':
            if (shetou.value != '下') {
                shetou.value = '上';
            }
            break;
        case 's':
            if (shetou.value != '上') {
                shetou.value = '下';
            }
            break;
        case 'a':
            if (shetou.value != '右') {
                shetou.value = '左';
            }
            break;
        case 'd':
            if (shetou.value != '左') {
                shetou.value = '右';
            }
            break;
    }
}
function play() {
    function direction() {

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

        if (arr.length) {
            for (let i = arr.length - 1; i >= 0; i--) {
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
                if (i == 0) {
                    arr[i].value = shetou.value;
                } else[
                    arr[i].value = arr[i - 1].value
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

                    shenti.style.top = parseInt(a.style.top) + 50 + 'px';
                    shenti.style.left = a.style.left
                    break;
                case '下':

                    shenti.style.top = parseInt(a.style.top) - 50 + 'px';
                    shenti.style.left = a.style.left
                    break;
            }
            shenti.value = a.value;
            arr.push(shenti);
            let px = parseInt(Math.random() * 10) * 50;
            let py = parseInt(Math.random() * 10) * 50;
            for (let i = 0; i < arr.length; i++) {
                if (parseInt(arr[0].style.left) == px && parseInt(arr[0].style.top) == py) {
                    px = parseInt(Math.random() * 10) * 50;
                    py = parseInt(Math.random() * 10) * 50;
                    i = -1;
                }
            }
            shiwu.style.left = px + 'px';
            shiwu.style.top = py + 'px';
            f += 10;
            fenshu.innerHTML = f;
        }
        if (parseInt(shetou.style.left + 'px') < 0 || parseInt(shetou.style.left + 'px') > ditu.offsetWidth - 50) {
            clearInterval(p);
            alert('撞墙' + '\n' + '分数:' + f);
            location.reload();
        }
        if (parseInt(shetou.style.top + 'px') < 0 || parseInt(shetou.style.top + 'px') > ditu.offsetHeight - 50) {
            clearInterval(p);
            alert('撞墙' + '\n' + '分数:' + f);
            location.reload();
        }
        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                if (parseInt(shetou.style.left + 'px') == parseInt(arr[i].style.left + 'px') && parseInt(shetou.style.top + 'px') == parseInt(arr[i].style.top + 'px')) {
                    alert('咬尾巴了' + '\n' + '分数:' + f);
                    clearInterval(p);
                }
            }
        }

        for (let v = 0; v < arrs.length; v++) {
            if (parseInt(shetou.style.left + 'px') == parseInt(arrs[v].style.left + 'px') && parseInt(shetou.style.top + 'px') == parseInt(arrs[v].style.top + 'px')) {
                clearInterval(p);
                alert('撞墙' + '\n' + '分数:' + f)
                location.reload();
            }
        }
    }
    const p = setInterval(direction, 500);
}
function motif1() {
    ditu.setAttribute('style', 'background-color:aqua;')
    shetou.style.backgroundColor = 'red';
}
function motif2() {
    ditu.setAttribute('style', 'background-color:white;')
    shetou.style.backgroundColor = 'green';

}
function map1() {
    if (ditu.style.width == '750px') {
        const rows = document.querySelectorAll('tr');
        rows.forEach(row => {
            const cells = row.querySelectorAll('td, th');
            for (let i = cells.length - 1; i > cells.length - 6; i--) {
                cells[i].remove();
                ditu.style.width = '500px'
            }
        });
    }
}
function map2() {
    if (ditu.style.width == '500px') {
        let table = document.getElementById('mytable');
        let rows = table.getElementsByTagName('tr');

        for (let i = 0; i < rows.length; i++) {
            for (let j = 0; j < 5; j++) {
                let cell = document.createElement('td');
                rows[i].appendChild(cell);
                ditu.style.width = '750px'
            }
        }
    }
}
let arrs = [];
let difficulty = document.getElementById('difficulty1');
difficulty.onclick = function () {
    if(arrs.length<10){
        let stone = suiji('black');
    let px = parseInt(Math.random() * 10) * 50;
    let py = parseInt(Math.random() * 10) * 50;
    for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[0].style.left) == px && parseInt(arr[0].style.top) == py) {
            px = parseInt(Math.random() * 10) * 50;
            py = parseInt(Math.random() * 10) * 50;
            i = -1;
        }
    }
    stone.style.left = px + 'px';
    stone.style.top = py + 'px';
    stone.setAttribute('id', 'l')
    arrs.push(stone);
    }
}

let difficultys = document.getElementById('difficulty2');
difficultys.onclick = function () {
    if (arrs.length > 0) {
        let l = document.getElementById('l')
        arrs.pop();
        ditu.removeChild(l)
    }
}