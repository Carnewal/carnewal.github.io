const initialState = {
    futureItems: [
        {title: 'Get back to a regular **gym** schedule.'},
        {title: 'Build something with **WebGL** or a WebGL Framework like **Three, WHS**. **Unity** would also be an interesting platform to know about. \n\nIt has always been a goal to make a fun (Local) Multiplayer game in the browser to play with friends.'},
        {title: 'Learn C/C++ thoroughly to later work with **WebAssembly**. \n\nAn idea I had was to port a childhood game ([Wolf:ET](https://github.com/id-Software/Enemy-Territory)) to the web with **emscripten**.'},
        {title: 'Make something cool with my **esp8266** Wi-Fi demo board.'},
        {title: 'Bring my dad\'s [website](http://www.carnewal.com) to the current decade with technologies like **React** and **Node.js**'},
        {title: 'Get my **spaghetti** recipe on point.'},
        {title: 'Stick to the **motto**. *"Failure is not fatal, but failure to change might be" -John Wooden*'},
        {title: 'Create something that will change the world.'},
    ],
    pastItems: [
        {
            year: '2018',
            icon: 'rocket',
            title: 'A new start.', 
            description: 'The coding itch is bigger than ever and I decided it\'s time to put my passion and experience to practice. \n\n*The year is still going so who knows what else 2018 will bring?!*',
        },
        {
            year: '2017',
            icon: 'book',
            title: 'Tinkering and studying.', 
            description: 'This year was less about coding and more about tinkering with technology and **embedded systems like the ESP8266 and Orange Pi** (Raspberry Pi\'s Chinese brother).'
        },
        {
            year: '2016',
            icon: 'graduation-cap',
            title: 'A great year for development.', 
            description: 'The year I graduated Applied Informatics I had the opportunity to do an internship. **PieSync** took me on their team and I learned a LOT about **React, Ruby on Rails** and all the frameworks you can imagine. It was great! \n\nI also delivered a **thesis** on using the Smartphone as a controller for Local Multiplayer games which was a subject I had been interested in for a while.'
        },
        {
            year: '2015',
            icon: 'line-chart',
            title: 'Improving my skills.', 
            description: 'This schoolyear I learned all about **Android, iOS and Angular (1)**, which were the types of courses I\'d been hoping to get ever since I was a kiddo. \n\nAttending lectures about **React** and hackathons like **Hack the future** with friends boosted my interest in web development and coding in general even more. I also got to work at ON again and bought myself Battlefield 4 for PC which became my favourite game for a long time.'
        },
        {
            year: '2014',
            icon: 'car',
            title: 'Im learnding!', 
            description: 'I also learned how to drive, which gave me access to many things I couldn\'t do before, like driving to the gym!'
        },
        {
            year: '2013',
            title: 'My first year', 
            description: ''
        }
    ]
}

export default (state = initialState, action) => state
