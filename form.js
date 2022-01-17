window.onload = () => {

    alert('Upload Picture For Resume\nAnd reload page to go back to the form');

    window.onbeforeunload = () => {
        window.location.replace('index.html');
    }

    var info = JSON.parse(window.localStorage.getItem('info'));

    document.getElementById('name').innerHTML = info.name;
    document.getElementById('addLine1').innerHTML = info.addLine1;
    document.getElementById('addLine2').innerHTML = info.addLine2;
    document.getElementById('city').innerHTML = info.city.charAt(0).toUpperCase() + info.city.slice(1);
    document.getElementById('state').innerHTML = info.state.charAt(0).toUpperCase() + info.state.slice(1);
    document.getElementById('pinCode').innerHTML = info.pinCode;
    document.getElementById('contact').innerHTML = info.contact;
    document.getElementById('email').innerHTML = info.email;

    document.getElementById('getpic').onchange = (event) => {
        document.getElementById('pic').style = 'display: inline;';
        document.getElementById('pic').src = URL.createObjectURL(event.target.files[0]);
        document.getElementById('getpic').style = 'display: none;';
    }


    if ( info.linkedIn.length === 0 ) {} else if ( info.linkedIn === null) {} else if ( info.linkedIn === undefined) {}
    else {
        document.getElementById('linkedIn').innerHTML = 'LinkedIn: linkedin.com/in/' + info.linkedIn;
    }

    if ( info.gitHub.length === 0 ) {} else if ( info.gitHub === null) {} else if ( info.gitHub === undefined) {}
    else {
        document.getElementById('gitHub').innerHTML = 'GitHub: github.com/' + info.gitHub;
    }

    document.getElementById('q11').innerHTML = info.q11;
    document.getElementById('q12').innerHTML = info.q12;
    document.getElementById('q13').innerHTML = info.q13;
    document.getElementById('q14').innerHTML = info.q14;

    if ( parseInt(info.q15) <= 10) {document.getElementById('q15').innerHTML = info.q15 + ' CGPA';}
    else {
        document.getElementById('q15').innerHTML = info.q15 + '%';
    }

    document.getElementById('q21').innerHTML = info.q21;
    document.getElementById('q22').innerHTML = info.q22;
    document.getElementById('q23').innerHTML = info.q23;
    document.getElementById('q24').innerHTML = info.q24;

    if ( parseInt(info.q25) <= 10 ) {document.getElementById('q25').innerHTML = info.q25 + ' CGPA';}
    else {document.getElementById('q25').innerHTML = info.q25 + '%';}

    document.getElementById('q31').innerHTML = info.q31;
    document.getElementById('q32').innerHTML = info.q32;
    document.getElementById('q33').innerHTML = info.q33;
    document.getElementById('q34').innerHTML = info.q34;

    if ( parseInt(info.q35) <= 10 ) {document.getElementById('q35').innerHTML = info.q35 + ' CGPA';}
    else {document.getElementById('q35').innerHTML = info.q35 + '%';}

    let num = info.numofproj;
    for (let i=1; i<=num; i++) {
        let div = document.createElement('div');
        div.className = 'project';
        let h3 = document.createElement('h3');
        h3.id = 'proj' + i + 'name';
        let h5 = document.createElement('h5');
        let span = document.createElement('span');
        span.id = 'proj' + i + 'team';
        let p = document.createElement('p');
        p.id = 'proj' + i + 'info';
        h5.appendChild(span);
        div.appendChild(h3);
        div.appendChild(h5);
        div.appendChild(p);
        document.getElementById('projects').appendChild(div);
        eval( "document.getElementById('proj" + i + "name').innerHTML = info.p" + i + ".p" + i + "name;" );
        eval( "document.getElementById('proj" + i + "team').innerHTML = info.p" + i + ".p" + i + "team;" );
        eval( "document.getElementById('proj" + i + "info').innerHTML = info.p" + i + ".p" + i + "info;" );
    }

    document.getElementById('progLang').innerHTML = info.progLang;
    document.getElementById('lang').innerHTML = info.lang;
    document.getElementById('frameworks').innerHTML = info.frameworks;
    document.getElementById('dbs').innerHTML = info.dbs;
    document.getElementById('tools').innerHTML = info.tools;

    let numc = info.numofcert;
    for (let i=1; i<=numc; i++) {
        let li = document.createElement('li');
        li.id = 'cert' + i;
        document.getElementById('certs').appendChild(li);
        eval("document.getElementById('cert" + i + "').innerHTML = info.cert" + i + ";");
    }

    let numa = info.numofach;
    for (let i=1; i<=numa; i++) {
        let li = document.createElement('li');
        li.id = 'ach' + i;
        document.getElementById('achs').appendChild(li);
        eval("document.getElementById('ach" + i + "').innerHTML = info.ach" + i + ";");
    }

    let numh = info.numofhobb;
    for (let i=1; i<=numh; i++) {
        let li = document.createElement('li');
        li.id = 'hob' + i;
        document.getElementById('hobbs').appendChild(li);
        eval("document.getElementById('hob" + i + "').innerHTML = info.hob" + i + ";");
    }

}