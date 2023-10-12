import { MongoClient } from 'mongodb';
import Head from 'next/head';
import MeetupList from "../components/meetups/MeetupList";



// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'A First Meet',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
//         address: 'Some address 5, 1234 Some city',
//         description: 'This is a first meet up!'
//     },
//     {
//         id: 'm2',
//         title: 'A Second Meet',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
//         address: 'Some address 10, 5678 Some city',
//         description: 'This is a second meet up!'
//     },
// ]
function HomePage(props) {

    return (

        <>
            <Head>
                <title>React Meetups</title>
                <meta name="description"
                content='Browse a huge list of highly active React meetups!' />
            </Head>
            <MeetupList meetups={props.meetups} />
        </>
    )
}




export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://Pavan:Pavan365@cluster0.z02fqin.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 10
    };
};

export default HomePage;