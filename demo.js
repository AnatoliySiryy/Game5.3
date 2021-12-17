const $logs = document.querySelector('#logs');

for (let i=0; i<10; i++) {
    const $p = document.createElement('p');

    $p.innerText = log;

    $logs.insertBefore($p, $logs.children[0]);
}