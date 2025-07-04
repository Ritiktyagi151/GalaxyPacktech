import { useRef } from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jeremy Tillman",
      position: "Founder and CEO",
      image: "/UI/Images/Home/jeremy.jpg",
    },
    {
      id: 2,
      name: "Jimmy Miller",
      position: "VP of Operations",
      image: "/UI/Images/Home/jimmy.jpg",
    },
    {
      id: 3,
      name: "Jimmy Miller",
      position: "VP of Operations",
      image: "/UI/Images/Home/jimmy.jpg",
    },
    {
      id: 4,
      name: "Jimmy Miller",
      position: "VP of Operations",
      image: "/UI/Images/Home/jimmy.jpg",
    },
    {
      id: 5,
      name: "Jimmy Miller",
      position: "VP of Operations",
      image: "/UI/Images/Home/jimmy.jpg",
    },
    {
      id: 6,
      name: "Jimmy Miller",
      position: "VP of Operations",
      image: "/UI/Images/Home/jimmy.jpg",
    },
    // ... rest of team members
  ];

  const rippleEffect = (e) => {
    const button = e.currentTarget;
    const circle = button.querySelector(".c-ripple__circle");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      e.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      e.clientY - button.getBoundingClientRect().top - radius
    }px`;
    circle.classList.add("c-ripple__circle--animate");

    setTimeout(() => {
      circle.classList.remove("c-ripple__circle--animate");
    }, 500);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* About Text Section */}
          <div
            className="lg:w-1/3 flex rounded-2xl  overflow-hidden items-center relative bg-cover bg-center"
            style={{ backgroundImage: "url('https://img.freepik.com/free-photo/business-people-partnership-support-team-urban-scene-concept_53876-144834.jpg?uid=R201800195&ga=GA1.1.1513718733.1745227870&semt=ais_items_boosted&w=740')" }}
          >
            {/* Optional overlay to improve text readability */}
            <div className="absolute inset-0 "></div>

            <div className="relative z-10 px-8 py-12">
              {" "}
              {/* Added padding and z-index to keep content above overlay */}
              <h3 className="text-3xl font-bold text-orange-800 mb-6">
                Meet Our Team
              </h3>
              <div className="w-20 h-1 bg-orange-500 mb-8"></div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="relative group overflow-hidden rounded-xl aspect-square shadow-lg hover:shadow-xl transition-all"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 via-orange-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg">
                    {member.name}
                  </h3>
                  <p className="text-orange-200 text-sm">{member.position}</p>
                </div>
                {/* Orange corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
