window.onload = () => {

    let submit = document.getElementById('submit');

    let num = null;

    let info = JSON.parse(window.localStorage.getItem('info'));

    if (info !== null) {
        
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
    
        // document.getElementById('proj1name').value = info.p1.p1name;
        // document.getElementById('proj1team').value = info.p1.p1team;
        // document.getElementById('proj1info').value = info.p1.p1info;
        
        // document.getElementById('proj2name').value = info.p2.p2name;
        // document.getElementById('proj2team').value = info.p2.p2team;
        // document.getElementById('proj2info').value = info.p2.p2info;
    
        // document.getElementById('proj3name').value = info.p3.p3name;
        // document.getElementById('proj3team').value = info.p3.p3team;
        // document.getElementById('proj3info').value = info.p3.p3info;
    
        // document.getElementById('proj4name').value = info.p4.p4name;
        // document.getElementById('proj4team').value = info.p4.p4team;
        // document.getElementById('proj4info').value = info.p4.p4info;
    
        document.getElementById('state').value = info.state;
    
        document.getElementById('plang').value = info.plang;
        document.getElementById('lang').value = info.lang;
        document.getElementById('frameworks').value = info.frameworks;
        document.getElementById('dbs').value = info.dbs;
        document.getElementById('tools').value = info.tools;
    
        document.getElementById('cert1').value = info.cert1;
        document.getElementById('cert2').value = info.cert2;
        document.getElementById('cert3').value = info.cert3;
        document.getElementById('cert4').value = info.cert4;
    
        document.getElementById('ach1').value = info.ach1;
        document.getElementById('ach2').value = info.ach2;
        document.getElementById('ach3').value = info.ach3;
        document.getElementById('ach4').value = info.ach4;
    
        document.getElementById('hob1').value = info.hob1;
        document.getElementById('hob2').value = info.hob2;
        document.getElementById('hob3').value = info.hob3;
        
    }


    document.getElementById('projnum').onchange = (e) => {
        num = parseInt(e.target.value);

        if (num < 2 || num > 4) {
            alert('Min 2 Projects.\nMax 4 Projects');
        }

        else if ( isNaN(num) ) {
            alert('Enter a value!');
        }

        else {

            for (let i=1; i<=num; i++ ) {
    
                let div = document.createElement('div');
                div.className = 'proj';
    
                let inp1 = document.createElement('input');
                inp1.type = 'text';
                inp1.id = 'proj'+i+'name';
                inp1.placeholder = 'Project Name';
    
                let inp2 = document.createElement('input');
                inp2.type = 'text';
                inp2.id = 'proj'+i+'team';
                inp2.placeholder = 'Team of';
    
                let inp3 = document.createElement('textarea');
                inp3.cols = 30;
                inp3.rows = 6;
                inp3.id = 'proj'+i+'info';
                inp3.placeholder = 'About the project';
    
                div.appendChild(inp1);
                div.appendChild(inp2);
                div.appendChild(inp3);
    
                document.getElementById('projin').appendChild(div);
            }
            e.target.style.display = 'none';
        }

    }



    submit.onclick = () => {

        window.localStorage.removeItem("info");

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
            p1: {
                p1name: null,
                p1team: null,
                p1info: null
            },
            p2: {
                p2name: null,
                p2team: null,
                p2info: null
            },
            p3: {
                p3name: null,
                p3team: null,
                p3info: null
            },
            p4: {
                p4name: null,
                p4team: null,
                p4info: null
            },
            plang: null, lang: null, frameworks: null, dbs: null, tools: null,
            cert1: null, cert2: null, cert3: null, cert4: null, ach1: null, ach2: null, ach3: null,
            ach4: null, hob1: null, hob2: null, hob3: null, numofproj: null
        };


        info.ach1 = document.getElementById('ach1').value;
        info.ach2 = document.getElementById('ach2').value;
        info.ach3 = document.getElementById('ach3').value;
        info.ach4 = document.getElementById('ach4').value;

        info.add1 = document.getElementById('add1').value;
        info.add2 = document.getElementById('add2').value;

        info.cert1 = document.getElementById('cert1').value;
        info.cert2 = document.getElementById('cert2').value;
        info.cert3 = document.getElementById('cert3').value;
        info.cert4 = document.getElementById('cert4').value;

        info.city = document.getElementById('city').value;
        info.contact = document.getElementById('contact').value;

        info.dbs = document.getElementById('dbs').value;

        info.email = document.getElementById('email').value;

        info.frameworks = document.getElementById('frameworks').value;
        info.github = document.getElementById('git').value;

        info.hob1 = document.getElementById('hob1').value;
        info.hob2 = document.getElementById('hob2').value;
        info.hob3 = document.getElementById('hob3').value;

        info.lang = document.getElementById('lang').value;
        
        info.li = document.getElementById('li').value;
        info.name = document.getElementById('name').value;

        info.numofproj = num;

        info.pinCode = document.getElementById('pin').value;

        for (i=1; i<=num; i++) {
            
            eval('info.p' + i + '.p' + i + 'name = document.getElementById("proj' + i + 'name").value;');
            eval('info.p' + i + '.p' + i + 'team = document.getElementById("proj' + i + 'team").value;');
            eval('info.p' + i + '.p' + i + 'info = document.getElementById("proj' + i + 'info").value;');
            
        }

        info.plang = document.getElementById('plang').value;

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

        info.tools = document.getElementById('tools').value;
        
        window.localStorage.setItem('info', JSON.stringify(info));

        window.location.replace('form.html');

    }
}