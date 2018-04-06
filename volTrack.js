
//District Data
const district = Object.create({}, {
    number: {
        writable: true,
        value: 5},
    zipCodes: {
        writable: true,
        value: [37013, 37015, 37025, 37027, 37029, 37032, 37035, 37036, 37043, 37051, 37055, 37062, 37064, 37072, 37076, 37080, 37082, 37086, 37115, 37122, 37135, 37138, 37143, 37146, 37165, 37181, 37187, 37189, 37201, 37203, 37204, 37205, 37206, 37207, 37208, 37209, 37210, 37211, 37212, 37213, 37214, 37215, 37216, 37217, 37218, 37219, 37220, 37221, 37228, 37240, 37243, 37246]},
    cities: {
        writable: true,
        value: ['Belle Meade', 'Berry Hill', 'Dickson', 'Forest Hills', 'Goodlettsville', 'Oak Hill', 'Ridgetop']},
    counties:{
        writable: true,
        value: ['Cheatham', 'Davidson', 'Dickson']}
});

//Function to modify district data
const distModify = (key, newInput ) => {
    district[key] = newInput;
}


//Platform Data
const platform = Object.create({}, {
    taxes: {value:'Elizabeth thinks that some taxes are good and some are bad.',
    enumerable: true,
    writable: true
    },
    jobs: {value: 'Elizabeth is a pro-jobs candidate. She likes jobs.',
    enumerable: true,
    writable: true
    },
    infrastructure: {value: 'Elizabeth is a bridge-builder',
    enumerable: true,
    writable: true
    },
    healthCare: { value: 'More hospitals please.',
    enumerable: true,
    writable: true 
    },
    crime: { value: 'Elizabeth is against crime. Crime is bad.',
    enumerable: true,
    writable: true 
    }
});

//Function to modify platform data
const modifyPlat = (key, newInput) => {
    platform[key] = newInput;
}

//URL for the donor form
const donorFormURL = 'https://www.mycampaigndonationform.com/form';

//Object containing upcoming events
const upcomingEvents = Object.create({}, {
    event1: {
        writable: true,
        value: {
        name: 'Luncheon with Labor leaders',
        date: '04/25/18',
        location: 'VFW'
    }},
    event2: {
        writable: true,
        value: {
        name: 'Speech at Hillsboro High School',
        date: '04/28/18',
        location: 'Hillsboro High'
    }},
    event3: {
        writable: true,
        value: {
        name: 'Door Knocking with Volunteers',
        date: '05/01/18',
        location: 'Belle Meade'
    }},
    event4: {
        writable: true,
        value: {
        name: 'Phoneathon',
        date: '05/05/18',
        location: 'Campaign HQ'
    }}
});

//function to modify new Events
const modEvents = (key, newInput) => {
    upcomingEvents[key] = newInput;
}

//object containing a single volunteer's info 
const volunteer = Object.create({}, {
    name: {
        writable: true,
        value: "#"},
    address: {
        writable: true,
        value: {
        street: '#',
        city: '#',
        state: '#',
        zip: '#'
    }},
    email: {
        writable: true,
        value: '#'},
    phoneNumber: {
        writable: true,
        value: '#'},
    availability: {
        writable: true,
        value: '#'},
    interests: {
        writable: true,
        value: {
        calling: true,
        doorKnocking: false,
        campaignSupport: true,
        envelopeStuffing: true
    }}
});

//function to modify volunteer info
const modifyVol = (key, newInput) => {
    volunteer[key] = newInput;
}


//biography of candidate
const bio = Object.create({}, {
    name: {
        writable: true,
        value: 'Elizabeth Sanger'},
    birthplace: {
        writable: true,
        value: 'Kodiak, AK'},
    education: {
        writable: true,
        value: 'University of Hard Knocks'},
    story: {
        writable: true,
        value: 'Lorem ipsum dolor amet sustainable yr pickled, normcore squid leggings echo park whatever direct trade. Butcher occupy street art franzen mixtape. Stumptown narwhal franzen hexagon. Gentrify narwhal vape cray, cornhole YOLO tilde beard lo-fi austin mumblecore. Cornhole wayfarers butcher street art. Lo-fi salvia migas pinterest ethical swag, street art cloud bread subway tile hammock bushwick vape 8-bit DIY. Pinterest man bun pickled succulents chillwave XOXO edison bulb, normcore roof party vexillologist activated charcoal hot chicken tilde viral photo booth. Copper mug fanny pack pickled freegan edison bulb cray air plant taxidermy vinyl. Banjo vice kinfolk hot chicken. Four loko jianbing keffiyeh migas everyday carry thundercats. Ennui fingerstache selfies try-hard art party vexillologist.'}
});

//function to modify bio
const modifyBio = (key, newInput) => {
    bio[key] = newInput;
}

//image gallery object
const imgGallery = Object.create({}, {
    headshot: {value: 'https://www.campaignwebsite.com/images/headshot'},
    famPic: {value: 'https://www.campaignwebsite.com/images/famPic'},
    constPic: {value: 'https://www.campaignwebsite.com/images/constPic'}
});

//function to modify gallery images
const modifyGal = (key, newInput) => {
    imgGallery[key] = newInput;
}

//mission statement object
const misstate = Object.create({}, {
    statement: {
        enumerable: true,
        writable: true, 
        value: 'Lorem ipsum dolor amet jean shorts snackwave authentic tilde readymade raw denim squid umami. Raw denim mlkshk marfa palo santo hammock, hoodie green juice disrupt try-hard. Art party green juice you probably havent heard of them hashtag subway tile semiotics. Drinking vinegar narwhal pop-up kale chips la croix edison bulb tousled. Fingerstache vinyl lomo, taiyaki squid photo booth af prism poutine tumeric banjo kitsch. Vape pok pok scenester hashtag plaid skateboard slow-carb health goth tbh heirloom knausgaard. Pabst polaroid intelligentsia poutine iceland drinking vinegar banjo fixie craft beer franzen.'
    }
});

//function to modify mission statement
const modifyMiss = (key, newInput) => {
    missate.statement[key] = newInput;
}

//URL for vote registration
const regVote = 'https://sos.tn.gov/products/elections/register-vote';





















