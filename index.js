window.onload = () => {

    let submit = document.getElementById('submit');

    let info = JSON.parse(window.localStorage.getItem('info'));

    if (info === null) {

        info = { name: null, add1: null, add2: null, city: null,
            state: null, pinCode: null, contact: null, email: null,
            li: null, github: null, q1: {
                q11: null,
                q12: null,
                q13: null,
                q14: null,
                q15: null
            },
            q2: {
                q21: null,
                q22: null,
                q23: null,
                q24: null,
                q25: null
            },
            q3: {
                q31: null,
                q32: null,
                q33: null,
                q34: null,
                q35: null
            },
            
        };

        console.log(info);

    }

    else {

        document.getElementById('add1').value = info.add1;
        document.getElementById('add2').value = info.add2;
        document.getElementById('city').value = info.city;
        document.getElementById('contact').value = info.contact;
        document.getElementById('email').value = info.email;
        document.getElementById('git').value = info.github;
        document.getElementById('li').value = info.li;
        document.getElementById('name').value = info.name;
        document.getElementById('pin').value = info.pinCode;
        document.getElementById('q11').value = info.q1.q11;
        document.getElementById('q12').value = info.q1.q12;
        document.getElementById('q13').value = info.q1.q13;
        document.getElementById('q14').value = info.q1.q14;
        document.getElementById('q15').value = info.q1.q15;
        document.getElementById('q21').value = info.q2.q21;
        document.getElementById('q22').value = info.q2.q22;
        document.getElementById('q23').value = info.q2.q23;
        document.getElementById('q24').value = info.q2.q24;
        document.getElementById('q25').value = info.q2.q25;
        document.getElementById('q31').value = info.q3.q31;
        document.getElementById('q32').value = info.q3.q32;
        document.getElementById('q33').value = info.q3.q33;
        document.getElementById('q34').value = info.q3.q34;
        document.getElementById('q35').value = info.q3.q35;
        document.getElementById('state').value = info.state;

    }



    submit.onclick = () => {

        window.localStorage.removeItem("info");

        info.add1 = document.getElementById('add1').value;
        info.add2 = document.getElementById('add2').value;
        info.city = document.getElementById('city').value;
        info.contact = document.getElementById('contact').value;
        info.email = document.getElementById('email').value;
        info.github = document.getElementById('git').value;
        info.li = document.getElementById('li').value;
        info.name = document.getElementById('name').value;
        info.pinCode = document.getElementById('pin').value;
        info.q1.q11 = document.getElementById('q11').value;
        info.q1.q12 = document.getElementById('q12').value;
        info.q1.q13 = document.getElementById('q13').value;
        info.q1.q14 = document.getElementById('q14').value;
        info.q1.q15 = document.getElementById('q15').value;
        info.q2.q21 = document.getElementById('q21').value;
        info.q2.q22 = document.getElementById('q22').value;
        info.q2.q23 = document.getElementById('q23').value;
        info.q2.q24 = document.getElementById('q24').value;
        info.q2.q25 = document.getElementById('q25').value;
        info.q3.q31 = document.getElementById('q31').value;
        info.q3.q32 = document.getElementById('q32').value;
        info.q3.q33 = document.getElementById('q33').value;
        info.q3.q34 = document.getElementById('q34').value;
        info.q3.q35 = document.getElementById('q35').value;
        info.state = document.getElementById('state').value;
        
        window.localStorage.setItem('info', JSON.stringify(info));

        window.location.replace('form.html');

    }
}