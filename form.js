window.onload = () => {

    var info = JSON.parse(window.localStorage.getItem('info'));

    console.log(info);

    document.getElementsByClassName('name')[0].innerHTML = info.name;
    document.getElementsByClassName('name')[1].innerHTML = info.name;
    document.getElementById('add1').innerHTML = info.add1;
    document.getElementById('add2').innerHTML = info.add2;
    document.getElementById('city').innerHTML = info.city;
    document.getElementById('state').innerHTML = info.state;
    document.getElementById('pin').innerHTML = info.pinCode;
    document.getElementById('phone').innerHTML = info.contact;
    document.getElementById('email').innerHTML = info.email;
    document.getElementById('li').innerHTML = info.li;
    document.getElementById('git').innerHTML = info.github;
    document.getElementById('q11').innerHTML = info.q1.q11;
    document.getElementById('q12').innerHTML = info.q1.q12;
    document.getElementById('q13').innerHTML = info.q1.q13;
    document.getElementById('q14').innerHTML = info.q1.q14;
    document.getElementById('q15').innerHTML = info.q1.q15;
    document.getElementById('q21').innerHTML = info.q2.q21;
    document.getElementById('q22').innerHTML = info.q2.q22;
    document.getElementById('q23').innerHTML = info.q2.q23;
    document.getElementById('q24').innerHTML = info.q2.q24;
    document.getElementById('q25').innerHTML = info.q2.q25;
    document.getElementById('q31').innerHTML = info.q3.q31;
    document.getElementById('q32').innerHTML = info.q3.q32;
    document.getElementById('q33').innerHTML = info.q3.q33;
    document.getElementById('q34').innerHTML = info.q3.q34;
    document.getElementById('q35').innerHTML = info.q3.q35;

}