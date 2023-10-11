

import MeetupList from "../components/meetups/MeetupList";



const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meet',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
        address: 'Some address 5, 1234 Some city',
        description: 'This is a first meet up!'
    },
    {
        id: 'm2',
        title: 'A Second Meet',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
        address: 'Some address 10, 5678 Some city',
        description: 'This is a second meet up!'
    },
]
function HomePage(props) {
    
    return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
    return {
        props : {
            meetups : DUMMY_MEETUPS
        },
        revalidate : 10  
    };
};

export default HomePage;