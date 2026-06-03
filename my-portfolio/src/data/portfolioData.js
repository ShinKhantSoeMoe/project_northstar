export const SKILLS = [
  {
    icon: "💻",
    category: "Languages",
    tags: ["C#", "Python", "Java", "JavaScript", "GDScript"],
  },
  {
    icon: "⚛️",
    category: "Frontend",
    tags: ["React", "D3.js", "HTML/CSS", "Jinja2"],
  },
  {
    icon: "🛠️",
    category: "Backend",
    tags: ["Python Flask", "Supabase", "PostgreSQL", "REST APIs"],
  },
  {
    icon: "🎮",
    category: "Game Development",
    tags: ["Unity", "Godot", "Aseprite", "Inkscape"],
  },
  {
    icon: "☁️",
    category: "DevOps & Cloud",
    tags: ["Docker", "Azure", "GitHub Actions", "Git"],
  },
  {
    icon: "🎨",
    category: "Creative & Tools",
    tags: ["Adobe Premiere Pro", "Canva", "VS Code", "Microsoft Office"],
  },
];

export const PROJECTS = [
  {
    icon: "📊",
    title: "Cross-Device Data Dashboard",
    description:
      "Final year dissertation. Built a cross-device data dashboard in React and D3.js deployed across a large touch display and mobile, supporting a within-subjects HCI study with 11 participants and 4,844 instrumented interaction events.",
    tags: ["React", "D3.js", "HCI", "User Study"],
  
    repo: "https://github.com/ShinKhantSoeMoe/project_pandemic",
  },
  {
    icon: "⚔️",
    title: "Turn-Based Combat System",
    description:
      "A 4v4 turn-based RPG combat system in Godot 4, featuring a state-machine battle loop, resource-based skill and status effect architecture, stackable effects, energy economy, and a signal-based event bus decoupling logic from UI.",
    tags: ["Godot 4", "GDScript", "Game Engineering"],
  
    repo: "https://github.com/ShinKhantSoeMoe/project_pagespread",
  },
  {
    icon: "🎮",
    title: "3D Action Game Tech Demo",
    description:
      "A third-person game tech demo in Unity exploring advanced game engineering — physics-driven projectiles, finite state machine AI with probabilistic transitions and predictive dodge evaluation, object pooling, flocking, and infinite tiled environments.",
    tags: ["Unity", "C#", "AI", "Physics"],

    repo: "https://github.com/ShinKhantSoeMoe",
  },
  {
    icon: "✅",
    title: "Chalklist — Task Management App",
    description:
      "A multi-user to-do web app built with Python Flask and Supabase, following a three-tier architecture with Row Level Security, GitFlow CI/CD via GitHub Actions, and deployed to Microsoft Azure.",
    tags: ["Python Flask", "Supabase", "Azure", "DevOps"],
    repo: "https://github.com/ShinKhantSoeMoe/project_chalklist",
  },
];

export const EXPERIENCE = [
  {
    date: "2024 – 2026",
    role: "Co-founder & Education Coordinator",
    company: "Newcastle University Game Development Society",
    bullets: [
      "Co-founded the society in second year alongside the president, building it into a welcoming community of ~50 active members annually that continues independently beyond my graduation.",
      "Hosted 4–5 workshops and 4–5 game jams per year, drawing 15–20 attendees per workshop and 5+ jam entries, teaching game development fundamentals to members at all experience levels.",
      "Served on the committee as Education Coordinator for two years, designing and delivering the society's educational programme.",
    ],
  },
  {
    date: "2023",
    role: "Video Editor (Volunteer)",
    company: "National Blood Center Yangon",
    bullets: [
      "Produced a 10-minute educational video on blood types and blood donation as part of a volunteer team, handling editing, motion graphics, and post-production.",
    ],
  },
  {
    date: "2025",
    role: "Game Jam Participant",
    company: "Newcastle GameDev Society Jam",
    link: { label: "View on itch.io", url: "https://meanapple.itch.io/" },
    bullets: [
      "Designed and developed a 2D speedrunning game in Godot within a 72-hour jam alongside a collaborator, mentoring them through their first game development project while shipping a fully playable demo published on itch.io.",
    ],
  },
];
