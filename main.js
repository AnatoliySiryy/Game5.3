const $btn = document.getElementById('btn-kick');
const $btn1 = document.getElementById('btn-kick1');
const $btn2 = document.getElementById('btn-kick2');
const $logs = document.querySelector('#logs');
const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),

     renderHP: function(){
        this.renderHPLife();
        this.renderProgressbarHP();
    },
    
     renderHPLife: function(){
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP + ' HP';
     
    },
    renderProgressbarHP: function() {
        this.elProgressbar.style.width = this.damageHP + '%';
    },
     changeHP: function(count){
       
        if (this.damageHP < count){
            this.damageHP = 0;
            alert('Бедный' + this.name + ' проиграл бой!');
            $btn.disabled = true;
            $btn1.disabled = true;
            $btn2.disabled = true;
        }else {
            this.damageHP -= count;
        }
     
        const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
        console.log(log);

        const $p = document.createElement('p');
        $p.innerText = log;
        $logs.insertBefore($p, $logs.children[0]);
    
        this.renderHP();
    }
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    renderHP: function(){
        this.renderHPLife();
        this.renderProgressbarHP();
    },
    
     renderHPLife: function(){
        this.elHP.innerText = this.damageHP + ' / ' + this.defaultHP + ' HP';
     
    },
    renderProgressbarHP: function() {
        this.elProgressbar.style.width = this.damageHP + '%';
    },
     changeHP: function(count){
        
        if (this.damageHP < count){
            this.damageHP = 0;
            alert('Бедный' + this.name + ' проиграл бой!');
            $btn.disabled = true;
            $btn1.disabled = true;
            $btn2.disabled = true;
        }else {
            this.damageHP -= count;
        }
        const log = this === character ? generateLog(this, enemy, count) : generateLog(this, character, count);
        console.log(log);
    
        const $p = document.createElement('p');
        $p.innerText = log;
        $logs.insertBefore($p, $logs.children[0]);
    
        this.renderHP();
    
    }
}
const {name, ...rest} = character;
const {name: nameEnemy, ...restEnemy} = enemy;
console.log(name, rest);
console.log(nameEnemy, restEnemy);

$btn.addEventListener('click', function() {
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
    
});
$btn1.addEventListener('click', function() {
    console.log('SuperKick');
    
    character.changeHP(random(35));
    enemy.changeHP(random(35));
  
});
$btn2.addEventListener('click', function() {
    console.log('Health');
    character.changeHP(-10);
    enemy.changeHP(-10);
});

function init(){
    console.log('Start Game!');
    character.renderHP();
    enemy.renderHP();
  
}

function random(num){
    return Math.ceil(Math.random() * num);
}

init();
