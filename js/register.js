// const REGISTRATIONS_URL = 'https://bits-apogee.org/registrations/register';
const COLLEGE_URL = 'https://bits-apogee.org/registrations/get_college';
const EVENT_URL = 'https://bits-apogee.org/registrations/events';


const getCollegesList = () => {
    fetch(COLLEGE_URL).then(data => {
        return data.json();
    }).then(response => {
        document.getElementsByTagName('datalist')[0].removeChild(document.getElementById('loadingCollege'));

        response.data.map(college => {
            const option = document.createElement('option');
            option.value = college.name;
            option.id = college.id;
            option.innerHTML = college.name;
            document.getElementById('college_input').appendChild(option);
        });
    });
}

const getEventsList = () => {
    fetch(EVENT_URL).then(data => {
        return data.json()
    }).then(response => {
        document.getElementsByTagName('datalist')[1].removeChild(document.getElementById('loadingEvent'));
        console.log(response.data);
        response.data.map(category => {
            category.events.map(event => {
                const option = document.createElement("option");
                option.value = event.name;
                option.id = event.id;
                option.innerHTML = event.name;
                option.addEventListener("click", handleEventClick(event.name))
                document.getElementById('event_input').appendChild(option);
            })
        })
    }) 
}

const handleEventClick = (eventName) => {
    // e.preventDefault();

    const eventTag = document.createElement("span");
    eventTag.classList.add("event-tag");
    eventTag.innerHTML = eventName;
}

const getCollegeId = () => {
    const input = document.getElementById('college');
    const val = input.value;
    const options = document.getElementById('college_input').childNodes;

    for(let i = 0; i < options.length; i++) {
        if(options[i].innerText === val) {
            return options[i].id;
        }
    }

    if (val) {
        return '%NOT_FOUND%';
    }
}


const showMessage = (msg) => {
    const messageBox = document.getElementsByClassName('message-box')[0];
    messageBox.style.display = 'initial';
    document.getElementById('message').innerHTML = msg;
    messageBox.style.animation = 'slideIn 0.5s';
    setTimeout(() => {
        messageBox.style.animation = 'none';
    }, 500);
}

const closeMessage = () => {
    const messageBox = document.getElementsByClassName('message-box')[0];
    messageBox.style.animation = 'slideOut 0.5s';
    setTimeout(() => {
        document.getElementById('message').innerHTML = '';
        messageBox.style.animation = 'none';
        messageBox.style.display = 'none';
    }, 500);
}


const form = document.getElementsByTagName('form')[0];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const data = new FormData(form);
    const body = {};
    for (const entry of data) {
        body[entry[0]] = entry[1];
    };

    body.college = parseInt(getCollegeId());
    body.year = parseInt(body.year);

    console.log(body);

    if(!body.gender || !body.year || !body.college) {
        showMessage('Incomplete form data! Please fill all the required fields.');
        return;
    }

    if (body.college == '%NOT_FOUND%') {
        showMessage('Invalid college name! Please select one from the list, if not found contact- PCr (+91-7838773681).');
        return;
    }

    const params = {
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
        method: "POST"
    }

    fetch(REGISTRATIONS_URL, params).then(data => {
        return data.json();
    }).then(response => {
        if (response.message) {
            showMessage(response.message);
            return;
        }
        showMessage('Registration successfull!');
        toogleRegisterForm();
    }).catch(error => {
        showMessage("ERROR: " + error + '\n Contact administrator');
    });

}, false);

function showData(id) {
    const eOpts = document.querySelectorAll('#' + id + ' > option');
    for(i = 0; i < eOpts.length; i++) {
        eOpts[i].style.display = 'block';
    }
}

window.onload = () => {
    getCollegesList();
    getEventsList();
}