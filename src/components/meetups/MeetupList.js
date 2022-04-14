import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          imageSrc={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          //   Opportunity to send all object
          //   meetup={meetup}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
