import React from 'react';

export default function Opportunities() {
    // Sample data for opportunities and upcoming events
    const opportunities = [
        { id: 1, title: 'Opportunity 1', description: 'Description of Opportunity 1' },
        { id: 2, title: 'Opportunity 2', description: 'Description of Opportunity 2' },
        { id: 3, title: 'Opportunity 3', description: 'Description of Opportunity 3' },
    ];

    const upcomingEvents = [
        { id: 1, title: 'Event 1', date: '2024-05-20' },
        { id: 2, title: 'Event 2', date: '2024-06-15' },
        { id: 3, title: 'Event 3', date: '2024-07-10' },
        { id: 4, title: 'Event 4', date: '2024-08-05' },
        { id: 5, title: 'Event 5', date: '2024-09-20' },
        { id: 6, title: 'Event 6', date: '2024-10-15' },
        { id: 7, title: 'Event 7', date: '2024-11-10' },
        { id: 8, title: 'Event 8', date: '2024-12-05' },
        { id: 9, title: 'Event 9', date: '2025-01-20' },
        { id: 10, title: 'Event 10', date: '2025-02-15' },
        { id: 10, title: 'Event 10', date: '2025-02-15' },
        { id: 10, title: 'Event 10', date: '2025-02-15' },
        { id: 10, title: 'Event 10', date: '2025-02-15' },
        { id: 10, title: 'Event 10', date: '2025-02-15' },
        { id: 10, title: 'Event 10', date: '2025-02-15' },
    ];

    return (
        <div className="bg-black text-white min-h-screen">
            <div className="container mx-auto py-10">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-center mb-4">Opportunities</h1>
                    <div className="flex justify-center">
                        <input
                            type="text"
                            placeholder="Search opportunities..."
                            className="py-2 px-4 rounded-lg w-full max-w-md bg-white text-black focus:outline-none"
                        />
                        <button className="ml-2 bg-blue-700 text-white py-2 px-4 rounded-lg">
                            Search
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {opportunities.map(opportunity => (
                        <div key={opportunity.id} className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-lg font-bold mb-2">{opportunity.title}</h3>
                            <p className="text-gray-300">{opportunity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-blue-700 py-10">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Upcoming Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {upcomingEvents.map(event => (
                            <div key={event.id} className="bg-white p-4 rounded-lg">
                                <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                                <p className="text-gray-700">Date: {event.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
