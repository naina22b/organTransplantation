import React from 'react';

const teamMembers = [
  {
    name: "Dr. Neha",
    role: "Chief Medical Officer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Expert in transplant surgery with over 15 years of experience.",
  },
  {
    name: "Stefan Salvatore",
    role: "Blockchain Developer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Leads the blockchain integration and smart contract development.",
  },
  {
    name: "Priya Jaisingh",
    role: "Project Manager",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Ensures smooth coordination between medical and tech teams.",
  },
];

function Team() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Meet Our Team</h2>
      <div className="row g-4 justify-content-center">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="col-md-4">
            <div className="card shadow-sm h-100 text-center p-3">
              <img
                src={member.img}
                alt={member.name}
                className="rounded-circle mx-auto mb-3"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h5>{member.name}</h5>
              <p className="text-muted">{member.role}</p>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
