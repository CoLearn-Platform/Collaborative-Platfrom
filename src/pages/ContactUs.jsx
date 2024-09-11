import styles from "./Contact.module.scss";

const teamMembers = [
  {
    name: "Chetan Meena",
    position: "Project Manager",
    email: "chetanmeenaji11@gmail.com",
    avatar: "../../public/team data/chetan.jpg", // Replace with actual avatar URL
    phone: "+91 8112243755",
  },
  {
    name: "Dikshant Sharma",
    position: "Lead Developer",
    email: "dikshantsharma2005@gmail.com",
    avatar: "../../public/team data/dikshant.jpg", // Replace with actual avatar URL
    phone: "+91 9782128602",
  },
];

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <section className={styles.contactInfo}>
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us using the information below.</p>
        <ul>
          <li>
            <strong>Email:</strong> colearn.platform@gmail.com
          </li>
        </ul>
      </section>

      <section className={styles.teamSection}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamList}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <img
                src={member.avatar}
                alt={`${member.name} avatar`}
                className={styles.avatar}
              />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <p>
                <strong>Email:</strong> {member.email}
              </p>
              <p>
                <strong>Phone:</strong> {member.phone}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
