window.onload = () => {

    var info = JSON.parse(window.localStorage.getItem('info'));

    let name = document.getElementById('name');
    let add1 = document.getElementById('add1');
    let add2 = document.getElementById('add2');
    let city = document.getElementById('city');
    let state = document.getElementById('state');
    let pin = document.getElementById('pin');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let li = document.getElementById('li');
    let git = document.getElementById('git');

    name.innerHTML = info.name;
    add1.innerHTML = info.add1;
    add2.innerHTML = info.add2;
    city.innerHTML = info.city;
    state.innerHTML = info.state;
    pin.innerHTML = info.pinCode;
    phone.innerHTML = info.contact;
    email.innerHTML = info.email;
    li.innerHTML = info.li;
    git.innerHTML = info.github;
    
}