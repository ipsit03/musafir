import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Musafir Travel Co
        </h1>
        <p className="text-lg text-gray-600 text-center italic mb-12">
          From Bengal. Belonging everywhere.
        </p>

        {/* Manifesto */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Our Manifesto
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg text-center">
          <p>
            <span className="font-semibold text-blue-600">Musafir</span> means a traveler.  
            But to us, it means much more.
          </p>

          <p>
            It is the whisper of the road at dawn, the silence of a mountain sky, 
            the laughter shared in a stranger’s home, the quiet pause by a river. 
            Musafir is not about escaping life. It is about finding it — one journey at a time.
          </p>

          <p>
            For thousands of years, humanity has walked, sailed, climbed, and wandered. 
            Travel has always been our oldest teacher. It has taught us who we are, 
            how to connect, and how to belong.
          </p>

          <p>
            We believe travel is not a luxury. It is as essential as breathing.  
            That is why <span className="font-semibold text-blue-600">Musafir</span> exists: 
            to create journeys that feel alive. Journeys that are not just about places, 
            but about people. Not just about photographs, but about memories.
          </p>

          <p>
            Our vision is simple:  
            <span className="font-semibold"> To make travel human again. </span>  
            To remind us that the journey itself is the reward.
          </p>

          <p>
            Musafir is born from the belief that the journey itself is the destination.
          </p>

          <p>
            We welcome you to become part of the Musafir community — seekers, wanderers, 
            and dreamers who believe that travel is as essential as breathing. Together, 
            let us walk new paths and create journeys worth remembering.
          </p>
        </div>

        {/* Footer line */}
        <p className="mt-12 text-center text-xl font-semibold text-gray-900">
          ✨ Musafir Travel Co. | The road belongs to those who walk it. ✨
        </p>
      </div>
    </div>
  );
};

export default About;
