import commanderPng from "@assets/images/crew/image-douglas-hurley.png";
import commanderWebp from "@assets/images/crew/image-douglas-hurley.webp";

import missionSpecialistPng from "@assets/images/crew/image-mark-shuttleworth.png";
import missionSpecialistWebp from "@assets/images/crew/image-mark-shuttleworth.webp";

import pilotPng from "@assets/images/crew/image-victor-glover.png";
import pilotWebp from "@assets/images/crew/image-victor-glover.webp";

import flightEngineerPng from "@assets/images/crew/image-anousheh-ansari.png";
import flightEngineerWebp from "@assets/images/crew/image-anousheh-ansari.webp";

export const CREW = [
  {
    name: "Douglas Hurley",
    images: {
      png: commanderPng,
      webp: commanderWebp,
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: missionSpecialistPng,
      webp: missionSpecialistWebp,
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: pilotPng,
      webp: pilotWebp,
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: flightEngineerPng,
      webp: flightEngineerWebp,
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];
