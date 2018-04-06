const district = Object.create({}, {
    number: {value: 5},
    zipCodes: {value: [37013, 37015, 37025, 37027, 37029, 37032, 37035, 37036, 37043, 37051, 37055, 37062, 37064, 37072, 37076, 37080, 37082, 37086, 37115, 37122, 37135, 37138, 37143, 37146, 37165, 37181, 37187, 37189, 37201, 37203, 37204, 37205, 37206, 37207, 37208, 37209, 37210, 37211, 37212, 37213, 37214, 37215, 37216, 37217, 37218, 37219, 37220, 37221, 37228, 37240, 37243, 37246]},
    cities: {value: ['Belle Meade', 'Berry Hill', 'Dickson', 'Forest Hills', 'Goodlettsville', 'Oak Hill', 'Ridgetop']},
    counties:{value: ['Cheatham', 'Davidson', 'Dickson']}
});

const platform = Object.create({}, {
    taxes: {value:'Elizabeth thinks that some taxes are good and some are bad.',
    enumerable: true,
    writable: false
    },
    jobs: {value: 'Elizabeth is a pro-jobs candidate. She likes jobs.',
    enumerable: true,
    writable: false
    },
    infrastructure: {value: 'Elizabeth is a bridge-builder',
    enumerable: true,
    writable: false
    },
    healthCare: { value: 'More hospitals please.',
    enumerable: true,
    writable: false 
    },
    crime: { value: 'Elizabeth is against crime. Crime is bad.',
    enumerable: true,
    writable: false 
    }
});

const upcomingEvents = Object.create({}, {
    event1: {value: {
        name: 'Luncheon with Labor leaders',
        date: '04/25/18',
        location: 'VFW'
    }},
    event2: {value: {
        name: 'Speech at Hillsboro High School',
        date: '04/28/18',
        location: 'Hillsboro High'
    }},
    event3: {value: {
        name: 'Door Knocking with Volunteers',
        date: '05/01/18',
        location: 'Belle Meade'
    }},
    event4: {value: {
        name: 'Phoneathon',
        date: '05/05/18',
        location: 'Campaign HQ'
    }}
});

const donorFormURL = 'https://www.mycampaigndonationform.com/form';

const volunteer = Object.create({}, {
    name: {value: "#"},
    address: {value: {
        street: '#',
        city: '#',
        state: '#',
        zip: '#'
    }},
    email: {value: '#'},
    phoneNumber: {value: '#'},
    availability: {value: '#'},
    interests: {value: {
        calling: true,
        doorKnocking: false,
        campaignSupport: true,
        envelopeStuffing: true
    }}
});























