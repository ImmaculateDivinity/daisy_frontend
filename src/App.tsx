import { useState } from "react";
import "daisyui/dist/full.css";
import "./App.css";
import "./index.css";
import Navbar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero.tsx";
import StickyNote from "./components/StickyNotes.tsx";
import Document from "./components/Document";
import Timeline from "./components/Timeline";
import TimelineItem from "./components/TimelineItem";
import Carousel from "./components/Carousel.tsx";

function App() {
  // Initialize an array of image URLs
  const items = [
    <p key="1">First Item: This is a carousel. Add things later!</p>,
    <p key="2">Second Item: Events</p>,
    <img key="3" src="/hero_upscaled.png" alt="logo" className="rounded-box" />,
    // Add more items as you wish, even other components!
  ];
  const timelineDetails = [
    {
      icon: "/team_image.png", // Replace with actual icon paths or import statements
      content: (
        <Document
          title="Document Title"
          subtitle="This is a subtitle"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
    // ... Add more items as needed
    {
      icon: "/additional-logo.png",
      content: <div>Your second content component or text here</div>,
    },
    {
      icon: "/additional-logo.png",
      content: <div>Your second content component or text here</div>,
    },
    {
      icon: "/team_image.png", // Replace with actual icon paths or import statements
      content: (
        <Document
          title="Document Title"
          subtitle="This is a subtitle"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
    {
      icon: "/team_image.png", // Replace with actual icon paths or import statements
      content: (
        <Document
          title="Document Title"
          subtitle="This is a subtitle"
          author="John Doe"
          date="Jan 1, 2023"
          body="Here is some text representing the body of the document. This text can be multiple paragraphs long and contain detailed content."
        />
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      <Carousel items={items} />

      <Timeline>
        {timelineDetails.map((item, index) => (
          <TimelineItem
            key={index}
            icon={item.icon}
            content={item.content}
            showConnectingLine={index < timelineDetails.length - 1} // Show connecting line except for the last item
          />
        ))}
      </Timeline>

      {/* ... other components or content */}

      <div className="sticky-notes-container">
        {/* Sticky Notes here */}
        <StickyNote
          header="Note 1"
          body="This is the first note"
          color="bg-red-300"
          angle={-2}
        />
        <StickyNote
          header="Note 2"
          body="This is the second note"
          color="bg-blue-300"
          angle={1}
        />
        {/* ... more notes */}
      </div>
      <Footer />
    </>
  );
}
export default App;
