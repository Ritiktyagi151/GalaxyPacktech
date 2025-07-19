import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TeamSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const teamMembers = [
    {
      id: 1,
      name: " Mr. Jagat Singh",
      position: "MD",
      image: "images/founder-img/Jagat-Singh-MD.jpg",
      bio: "Visionary leader with 15+ years in packaging innovation. Passionate about sustainable solutions."
    },
    {
      id: 2,
      name: "Mr. Shiv Kumar",
      position: "MD",
      image: "images/founder-img/Shiv-Kumar-MD.jpg",
      bio: "Operations expert with a decade of experience in streamlining packaging processes."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.8, 0.4, 1]
      }
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-8 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-orange-400 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-amber-400 mix-blend-multiply filter blur-xl animate-blob"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.h3 
            className="text-4xl font-bold text-orange-800 mb-4"
            variants={textVariants}
          >
            Meet Our Leadership
          </motion.h3>
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
            variants={textVariants}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              variants={itemVariants}
              className="flex flex-col lg:flex-row gap-8 items-center"
            >
              {/* Team Member Card */}
              <motion.div 
                className="relative group w-full max-w-md lg:w-1/2"
                whileHover="hover"
                variants={imageVariants}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-amber-400/20 rounded-3xl transform rotate-6 -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-amber-400/10 rounded-3xl transform -rotate-3 -z-10"></div>
                
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover border-4 border-white"
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-xl shadow-lg border border-orange-100">
                  <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div> */}
              </motion.div>

              {/* Team Member Info */}
              <motion.div 
                variants={textVariants}
                className="w-full lg:w-1/2 text-center lg:text-left space-y-4"
              >
                <motion.h4 
                  className="text-2xl font-semibold text-gray-800"
                  initial={{ x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {member.name}
                </motion.h4>
                
                <motion.p 
                  className="text-orange-600 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {member.position}
                </motion.p>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {member.bio}
                </motion.p>
                
                
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;