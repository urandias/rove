"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Loading from "./Loading";
import { Ticket } from "lucide-react"
import EventCard from "./EventCard";

function EventList() {
  const events = useQuery(api.events.get);

  if (!events) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  const upcomingEvents = events
    .filter((event) => event.eventDate > Date.now())
    .sort((a, b) => a.eventDate - b.eventDate);

  const pastEvents = events
    .filter((event) => event.eventDate <= Date.now())
    .sort((a, b) => b.eventDate - a.eventDate);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between mb-6">
            <div>
                <h1 className="text-3xl font-bold text-black">Upcoming Events</h1>
                <p className="text-black">Discover... book... Enjoy</p>
            </div>
        </div>

        {upcomingEvents.length > 0 ? (
            <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {upcomingEvents.map((event) => (
                    <EventCard key={event._id} eventId={event._id} />
                ))}
            </div>
        ) : (
            <div className="bg-gray-50 rounded-lg p-12 text-center mb-12">
                <Ticket className="w-12 h-12 text-gray-400 mx-auto mb-4"/>
                <h3 className="text-lg font-medium text-gray-900">No upcoming events...</h3>
                <p className="text-gray-600 mt-1"> Check back later for new events</p>
            </div>
        )}

        {pastEvents.length > 0 && (
            <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Events</h2>
                <div className="grid grid-cols-1 md:grid-cold-2 lg:grid-col-3 gap-6">
                    {pastEvents.map((event) => (
                        <EventCard key={event._id} eventId={event._id}/>
                    ))}
                </div>
            </>
        )}

    </div>
  )
}

export default EventList;
