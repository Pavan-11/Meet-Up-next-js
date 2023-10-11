import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(){
    return(
        <MeetupDetail image = "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"  title = "Firdt Meetup"  address="Street 5, Some city" description="Our First MeetUp"/>
    ) 
}

export async function getStaticPaths(){
    return {
        fallback : true ,
        paths : [
            { params : {
                meetupID : 'm1',
            },

            },
            {
                params: {
                    meetupID: 'm2',
                },

            },
        ],
    };
}

export async function getStaticProps(context) {
    const meetupID = context.params.meetupID;



    return {
        props : {
            meetupData : {
                image : "https://upload.wikimedia.org/wikipedia/commons/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
                id : meetupID,
                title : "Firdt Meetup",
                address : "Street 5, Some city",
                description : "Our First MeetUp",
            }
        }
    }
}

export default MeetupDetails;