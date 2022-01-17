window.onload = () => {

    let submit = document.getElementById('submit');

    let nump = null;
    let numc = null;
    let numa = null;
    let numh = null;

    let info = JSON.parse(window.localStorage.getItem('info'));

    document.getElementById('projnum').onchange = (e) => {
        nump = parseInt(e.target.value);
        if ( nump > 1 && nump < 5 ) {
            e.target.style.display = 'none';
            for (let i=1; i<=nump; i++ ) {
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
        }
        else if (isNaN(nump)) {alert('Enter a value!');}
        else {alert('Min 2 Projects.\nMax 4 Projects');}
    }

    document.getElementById('certs').onchange = (e) => {
        numc = parseInt(e.target.value);
        if (numc > 0 && numc < 5) {
            e.target.style.display = 'none';
            for (let i=1; i<=numc; i++) {
                let inp = document.createElement('input');
                inp.type = 'text';
                inp.id = 'cert' + i;
                inp.placeholder = 'Certificate ' + i;
                document.getElementById('cert').appendChild(inp);
            }
        }
        else if ( isNaN(numc) ) {alert('Enter a value!');}
        else {alert('Min 0\nMax 4');}
    }

    document.getElementById('ach').onchange = (e) => {
        numa = parseInt(e.target.value);
        if (numa > 0 && numa < 5) {
            e.target.style.display = 'none';
            for (let i=1; i<=numa; i++) {
                let inp = document.createElement('input');
                inp.type = 'text';
                inp.id = 'ach' + i;
                inp.placeholder = 'Achievement ' + i;
                document.getElementById('achs').appendChild(inp);
            }
        }
        else if (isNaN(numa)) {alert('Enter a value!');}
        else {alert('Min 0\nMax 4');}
    }

    document.getElementById('hobb').onchange = (e) => {
        numh = parseInt(e.target.value);
        if (numh > 0 && numh < 4) {
            e.target.style.display = 'none';
            for (let i=1; i<=numh; i++) {
                let inp = document.createElement('input');
                inp.type = 'text';
                inp.id = 'hob' + i;
                inp.placeholder = 'Hobbie ' + i;
                document.getElementById('hobbs').appendChild(inp);
            }
        }
        else if (isNaN(numa)) {alert('Enter a value!');}
        else {alert('Min 0\nMax 3');}
    }


    if (info !== null) {
        for ( let i in info ) {
            if (eval("document.getElementById('" + i + "');") !== null) {
                eval("document.getElementById('" + i + "').value = info." + i + ";");
            }
        }
    }


    submit.onclick = () => {

        window.localStorage.removeItem("info");

        info = { name: null, addLine1: null, addLine2: null, city: null,
            state: null, pinCode: null, contact: null, email: null,
            linkedIn: null, gitHub: null,
            q11: null, q12: null, q13: null, q14: null, q15: null,
            q21: null, q22: null, q23: null, q24: null, q25: null,
            q31: null, q32: null, q33: null, q34: null, q35: null,
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
            progLang: null, lang: null, frameworks: null, dbs: null, tools: null,
            cert1: null, cert2: null, cert3: null, cert4: null, ach1: null, ach2: null, ach3: null,
            ach4: null, hob1: null, hob2: null, hob3: null, numofproj: null, numofcert: null,
            numofach: null, numofhobb: null
        };

        for (let i=1; i<=numa; i++) {
            eval("info.ach" + i + " = document.getElementById('ach" + i + "').value;");
        }

        info.addLine1 = document.getElementById('addLine1').value;
        info.addLine2 = document.getElementById('addLine2').value;

        for (let i=1; i<=numc; i++) {
            eval("info.cert" + i + " = document.getElementById('cert" + i + "').value;");
        }

        info.city = document.getElementById('city').value;
        info.contact = document.getElementById('contact').value;

        info.dbs = document.getElementById('dbs').value;

        info.email = document.getElementById('email').value;

        info.frameworks = document.getElementById('frameworks').value;
        info.gitHub = document.getElementById('gitHub').value;

        for (let i=1; i<=numh; i++) {
            eval("info.hob" + i + " = document.getElementById('hob" + i + "').value;");
        }

        info.lang = document.getElementById('lang').value;
        
        info.linkedIn = document.getElementById('linkedIn').value;
        info.name = document.getElementById('name').value;

        info.numofproj = nump;
        info.numofcert = numc;
        info.numofach = numa;
        info.numofhobb = numh;

        info.pinCode = document.getElementById('pinCode').value;

        for (let i=1; i<=nump; i++) {
            eval('info.p' + i + '.p' + i + 'name = document.getElementById("proj' + i + 'name").value;');
            eval('info.p' + i + '.p' + i + 'team = document.getElementById("proj' + i + 'team").value;');
            eval('info.p' + i + '.p' + i + 'info = document.getElementById("proj' + i + 'info").value;');
        }

        info.progLang = document.getElementById('progLang').value;

        info.q11 = document.getElementById('q11').value;
        info.q12 = document.getElementById('q12').value;
        info.q13 = document.getElementById('q13').value;
        info.q14 = document.getElementById('q14').value;
        info.q15 = document.getElementById('q15').value;
        info.q21 = document.getElementById('q21').value;
        info.q22 = document.getElementById('q22').value;
        info.q23 = document.getElementById('q23').value;
        info.q24 = document.getElementById('q24').value;
        info.q25 = document.getElementById('q25').value;
        info.q31 = document.getElementById('q31').value;
        info.q32 = document.getElementById('q32').value;
        info.q33 = document.getElementById('q33').value;
        info.q34 = document.getElementById('q34').value;
        info.q35 = document.getElementById('q35').value;
        info.state = document.getElementById('state').value;

        info.tools = document.getElementById('tools').value;
        
        window.localStorage.setItem('info', JSON.stringify(info));

    }
}