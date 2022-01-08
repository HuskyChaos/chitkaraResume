window.onload = () => {

    alert('Upload Picture For Resume');

    var info = JSON.parse(window.localStorage.getItem('info'));

    document.getElementById('name').innerHTML = info.name;
    document.getElementById('add1').innerHTML = info.add1;
    document.getElementById('add2').innerHTML = info.add2;
    document.getElementById('city').innerHTML = info.city.charAt(0).toUpperCase() + info.city.slice(1);
    document.getElementById('state').innerHTML = info.state.charAt(0).toUpperCase() + info.state.slice(1);
    document.getElementById('pin').innerHTML = info.pinCode;
    document.getElementById('phone').innerHTML = info.contact;
    document.getElementById('email').innerHTML = info.email;

    document.getElementById('getpic').onchange = (event) => {
        document.getElementById('pic').style = 'display: inline;';
        document.getElementById('pic').src = URL.createObjectURL(event.target.files[0]);
        document.getElementById('getpic').style = 'display: none;';
    }


    if ( info.li.length === 0 ) {} else if ( info.li === null) {} else if ( info.li === undefined) {}
    else {
        document.getElementById('li').innerHTML = 'LinkedIn: linkedin.com/in/' + info.li;
    }

    if ( info.github.length === 0 ) {} else if ( info.github === null) {} else if ( info.github === undefined) {}
    else {
        document.getElementById('git').innerHTML = 'GitHub: github.com/' + info.github;
    }

    document.getElementById('q11').innerHTML = info.q1.q11;
    document.getElementById('q12').innerHTML = info.q1.q12;
    document.getElementById('q13').innerHTML = info.q1.q13;
    document.getElementById('q14').innerHTML = info.q1.q14;

    if ( parseInt(info.q1.q15) <= 10) {
        document.getElementById('q15').innerHTML = info.q1.q15 + ' CGPA';
    }
    else {
        document.getElementById('q15').innerHTML = info.q1.q15 + '%';
    }

    document.getElementById('q21').innerHTML = info.q2.q21;
    document.getElementById('q22').innerHTML = info.q2.q22;
    document.getElementById('q23').innerHTML = info.q2.q23;
    document.getElementById('q24').innerHTML = info.q2.q24;

    if ( parseInt(info.q2.q25) <= 10 ) {
        document.getElementById('q25').innerHTML = info.q2.q25 + ' CGPA';
    }
    else {
        document.getElementById('q25').innerHTML = info.q2.q25 + '%';
    }

    document.getElementById('q31').innerHTML = info.q3.q31;
    document.getElementById('q32').innerHTML = info.q3.q32;
    document.getElementById('q33').innerHTML = info.q3.q33;
    document.getElementById('q34').innerHTML = info.q3.q34;

    if ( parseInt(info.q3.q35) <= 10 ) {
        document.getElementById('q35').innerHTML = info.q3.q35 + ' CGPA';
    }
    else {
        document.getElementById('q35').innerHTML = info.q3.q35 + '%';
    }

    document.getElementById('proj1name').innerHTML = info.p1.p1name;
    document.getElementById('proj1team').innerHTML = info.p1.p1team;
    document.getElementById('proj1info').innerHTML = info.p1.p1info;
    
    document.getElementById('proj2name').innerHTML = info.p2.p2name;
    document.getElementById('proj2team').innerHTML = info.p2.p2team;
    document.getElementById('proj2info').innerHTML = info.p2.p2info;

    document.getElementById('proj3name').innerHTML = info.p3.p3name;
    document.getElementById('proj3team').innerHTML = info.p3.p3team;
    document.getElementById('proj3info').innerHTML = info.p3.p3info;

    document.getElementById('proj4name').innerHTML = info.p4.p4name;
    document.getElementById('proj4team').innerHTML = info.p4.p4team;
    document.getElementById('proj4info').innerHTML = info.p4.p4info;

    document.getElementById('plang').innerHTML = info.plang;
    document.getElementById('lang').innerHTML = info.lang;
    document.getElementById('frameworks').innerHTML = info.frameworks;
    document.getElementById('dbs').innerHTML = info.dbs;
    document.getElementById('tools').innerHTML = info.tools;
    
    document.getElementById('cert1').innerHTML = info.cert1;
    document.getElementById('cert2').innerHTML = info.cert2;
    document.getElementById('cert3').innerHTML = info.cert3;
    document.getElementById('cert4').innerHTML = info.cert4;
    
    document.getElementById('ach1').innerHTML = info.ach1;
    document.getElementById('ach2').innerHTML = info.ach2;
    document.getElementById('ach3').innerHTML = info.ach3;
    document.getElementById('ach4').innerHTML = info.ach4;
    
    document.getElementById('hob1').innerHTML = info.hob1;
    document.getElementById('hob2').innerHTML = info.hob2;
    document.getElementById('hob3').innerHTML = info.hob3;

}