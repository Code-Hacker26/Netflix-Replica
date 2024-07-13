const users = ['Hani', 'children'];

const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
    users.forEach((curElem) => {
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn" data-username="${curElem}"><span>${curElem}</span></button>
        `);
    });
};


// Select the home button
const homeBtn = document.querySelector('.home');

// Add event listener to handle click event
homeBtn.addEventListener('click', () => {
    // Redirect to the home page
    window.location.href = 'UL.html';
});


addIcon.addEventListener('click', () => {
    let userName = prompt('Please enter your name');

    if(userName != null && !users.includes(userName)){
        users.push(userName);
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn" data-username="${userName}"><span>${userName}</span></button>
        `);
    } else {
        alert('Username already exists or is invalid.');
    }
});

userIcons();
