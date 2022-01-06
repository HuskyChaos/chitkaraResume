window.onload = () => {

    let submit = document.getElementById('submit');

    let info = {
        name: null,
        add1: null,
        add2: null,
        city: null,
        state: null,
        pinCode: null,
        contact: null,
        email: null,
        li: null,
        github: null
    };

    submit.onclick = () => {

        info.add1 = document.getElementById('add1').value;
        info.add2 = document.getElementById('add2').value;
        info.city = document.getElementById('city').value;
        info.contact = document.getElementById('contact').value;
        info.email = document.getElementById('email').value;
        info.github = document.getElementById('git').value;
        info.li = document.getElementById('li').value;
        info.name = document.getElementById('name').value;
        info.pinCode = document.getElementById('pin').value;
        info.state = document.getElementById('state').value;
        
        window.localStorage.setItem('info', JSON.stringify(info));

        window.location.replace('form.html');

    }
}