import React from "react";

const HomePage = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-2 py-4">
        <div className="flex justify-between">
          <div className="w-5/4">
            <div className="h-screen/2 flex justify-center items-center">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-bold mb-4 text-blue-500">
                  Volunteer Matching Platform
                </h1>
                <p className="text-lg mb-8">
                  Welcome to our Volunteer Matching Platform! Are you looking to
                  make a difference in your community? Join us and discover
                  meaningful volunteering opportunities tailored to your
                  interests and skills. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Impedit esse odio totam nulla tempora
                  maiores doloribus obcaecati, iste aperiam doloremque accusamus
                  aliquam laboriosam veniam, architecto enim mollitia
                  necessitatibus a ratione.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Search for Opportunities
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/4 ml-8">
            {/* Image section */}
            <img
              src="https://img.freepik.com/free-vector/people-volunteering-donating-money_53876-66112.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714953600&semt=sph"
              alt="Volunteers"
              className="h-screen/2 rounded-lg"
            />
          </div>
        </div>
        <div className="mt-8">
        <div className="flex justify-center">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">
              Featured Opportunities
            </h2>
          </div>
          {/* Featured opportunities section */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Opportunity 1</h3>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis error quam consectetur iste cumque sequi dolore tempora
                dolores temporibus nam? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Nesciunt asperiores iure voluptatem doloribus
                ipsam repellat est earum ullam illum quidem?
              </p>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Opportunity 2</h3>
              <p className="text-gray-300">Description of Opportunity 2</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Opportunity 3</h3>
              <p className="text-gray-300">Description of Opportunity 3</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Opportunity 4</h3>
              <p className="text-gray-300">Description of Opportunity 4</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold mb-4 text-blue-500">
              Volunteer Stories
            </h2>
          </div>
          {/* Volunteer stories section */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Volunteer 1</h3>
              <p className="text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                delectus assumenda iusto, accusantium repudiandae repellendus.
                Aliquam dolore recusandae natus neque!
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Volunteer 2</h3>
              <p className="text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                delectus assumenda iusto, accusantium repudiandae repellendus.
                Aliquam dolore recusandae natus neque!
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Volunteer 3</h3>
              <p className="text-gray-300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                delectus assumenda iusto, accusantium repudiandae repellendus.
                Aliquam dolore recusandae natus neque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
