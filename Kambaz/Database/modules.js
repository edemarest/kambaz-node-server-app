export default {
  modules: [
    {
      _id: "M101",
      name: "Introduction to Rocket Propulsion",
      description: "Basic principles of rocket propulsion and rocket engines.",
      course: "RS101",
      lessons: [
        {
          _id: "L101",
          name: "History of Rocketry",
          description: "A brief history of rocketry and space exploration.",
          module: "M101",
        },
        {
          _id: "L102",
          name: "Rocket Propulsion Fundamentals",
          description: "Basic principles of rocket propulsion.",
          module: "M101",
        },
        {
          _id: "L103",
          name: "Rocket Engine Types",
          description: "Overview of different types of rocket engines.",
          module: "M101",
        },
      ],
    },
    {
      _id: "M102",
      name: "Fuel and Combustion",
      description:
        "Understanding rocket fuel, combustion processes, and efficiency.",
      course: "RS101",
      lessons: [
        {
          _id: "L201",
          name: "Rocket Fuel",
          description: "Overview of different types of rocket fuels.",
          module: "M102",
        },
        {
          _id: "L202",
          name: "Combustion Processes",
          description: "Understanding combustion processes and efficiency.",
          module: "M102",
        },
        {
          _id: "L203",
          name: "Combustion Instability",
          description: "Understanding combustion instability and mitigation.",
          module: "M102",
        },
      ],
    },
    {
      _id: "M103",
      name: "Nozzle Design",
      description:
        "Principles of rocket nozzle design and performance optimization.",
      course: "RS101",
      lessons: [
        {
          _id: "L301",
          name: "Nozzle Design",
          description: "Overview of different types of rocket nozzles.",
          module: "M103",
        },
        {
          _id: "L302",
          name: "Nozzle Performance",
          description: "Understanding nozzle performance and efficiency.",
          module: "M103",
        },
        {
          _id: "L303",
          name: "Nozzle Optimization",
          description: "Optimizing nozzle design for specific applications.",
          module: "M103",
        },
      ],
    },
    {
      _id: "M201",
      name: "Fundamentals of Aerodynamics",
      description: "Basic aerodynamic concepts and fluid dynamics principles.",
      course: "RS102",
      lessons: [
        {
          _id: "L401",
          name: "Introduction to Aerodynamics",
          description: "Basic principles of aerodynamics.",
          module: "M201",
        },
        {
          _id: "L402",
          name: "Fluid Dynamics",
          description: "Principles of fluid dynamics in aerodynamics.",
          module: "M201",
        },
      ],
    },
    {
      _id: "M202",
      name: "Subsonic and Supersonic Flow",
      description:
        "Understanding subsonic and supersonic aerodynamic behaviors.",
      course: "RS102",
      lessons: [
        {
          _id: "L501",
          name: "Subsonic Flow",
          description: "Characteristics of subsonic flow.",
          module: "M202",
        },
        {
          _id: "L502",
          name: "Supersonic Flow",
          description: "Characteristics of supersonic flow.",
          module: "M202",
        },
      ],
    },
    {
      _id: "M203",
      name: "Aerodynamic Heating",
      description:
        "Study of aerodynamic heating and thermal protection systems.",
      course: "RS102",
      lessons: [
        {
          _id: "L601",
          name: "Aerodynamic Heating",
          description: "Principles of aerodynamic heating.",
          module: "M203",
        },
        {
          _id: "L602",
          name: "Thermal Protection Systems",
          description: "Overview of thermal protection systems.",
          module: "M203",
        },
      ],
    },
    {
      _id: "M301",
      name: "Spacecraft Structural Design",
      description:
        "Fundamentals of designing spacecraft structures and materials selection.",
      course: "RS103",
      lessons: [
        {
          _id: "L701",
          name: "Structural Design Principles",
          description: "Basic principles of spacecraft structural design.",
          module: "M301",
        },
        {
          _id: "L702",
          name: "Materials Selection",
          description:
            "Criteria for selecting materials for spacecraft structures.",
          module: "M301",
        },
      ],
    },
    {
      _id: "M302",
      name: "Orbital Mechanics",
      description: "Understanding orbital dynamics and mission planning.",
      course: "RS103",
      lessons: [
        {
          _id: "L801",
          name: "Orbital Dynamics",
          description: "Principles of orbital dynamics.",
          module: "M302",
        },
        {
          _id: "L802",
          name: "Mission Planning",
          description: "Basics of mission planning for space missions.",
          module: "M302",
        },
      ],
    },
    {
      _id: "M303",
      name: "Spacecraft Systems Engineering",
      description: "Overview of spacecraft systems and subsystems engineering.",
      course: "RS103",
      lessons: [
        {
          _id: "L901",
          name: "Systems Engineering Principles",
          description: "Basic principles of systems engineering.",
          module: "M303",
        },
        {
          _id: "L902",
          name: "Subsystems Engineering",
          description: "Overview of spacecraft subsystems engineering.",
          module: "M303",
        },
      ],
    },
    {
      _id: "M401",
      name: "Introduction to Organic Chemistry",
      description: "Basic principles of organic chemistry.",
      course: "RS104",
      lessons: [
        {
          _id: "L1001",
          name: "Organic Compounds",
          description: "Introduction to organic compounds.",
          module: "M401",
        },
        {
          _id: "L1002",
          name: "Chemical Reactions",
          description: "Overview of chemical reactions in organic chemistry.",
          module: "M401",
        },
      ],
    },
    {
      _id: "M402",
      name: "Advanced Organic Chemistry",
      description: "In-depth study of organic chemistry principles.",
      course: "RS104",
      lessons: [
        {
          _id: "L1101",
          name: "Synthesis",
          description: "Principles of organic synthesis.",
          module: "M402",
        },
        {
          _id: "L1102",
          name: "Mechanisms",
          description: "Mechanisms of organic reactions.",
          module: "M402",
        },
      ],
    },
    {
      _id: "M501",
      name: "Introduction to Inorganic Chemistry",
      description: "Basic principles of inorganic chemistry.",
      course: "RS105",
      lessons: [
        {
          _id: "L1201",
          name: "Inorganic Compounds",
          description: "Introduction to inorganic compounds.",
          module: "M501",
        },
        {
          _id: "L1202",
          name: "Coordination Chemistry",
          description: "Overview of coordination chemistry.",
          module: "M501",
        },
      ],
    },
    {
      _id: "M502",
      name: "Advanced Inorganic Chemistry",
      description: "In-depth study of inorganic chemistry principles.",
      course: "RS105",
      lessons: [
        {
          _id: "L1301",
          name: "Organometallic Chemistry",
          description: "Principles of organometallic chemistry.",
          module: "M502",
        },
        {
          _id: "L1302",
          name: "Bioinorganic Chemistry",
          description: "Overview of bioinorganic chemistry.",
          module: "M502",
        },
      ],
    },
    {
      _id: "M601",
      name: "Introduction to Physical Chemistry",
      description: "Basic principles of physical chemistry.",
      course: "RS106",
      lessons: [
        {
          _id: "L1401",
          name: "Thermodynamics",
          description: "Principles of thermodynamics in physical chemistry.",
          module: "M601",
        },
        {
          _id: "L1402",
          name: "Quantum Chemistry",
          description: "Overview of quantum chemistry.",
          module: "M601",
        },
      ],
    },
    {
      _id: "M602",
      name: "Advanced Physical Chemistry",
      description: "In-depth study of physical chemistry principles.",
      course: "RS106",
      lessons: [
        {
          _id: "L1501",
          name: "Statistical Mechanics",
          description: "Principles of statistical mechanics.",
          module: "M602",
        },
        {
          _id: "L1502",
          name: "Spectroscopy",
          description: "Overview of spectroscopy techniques.",
          module: "M602",
        },
      ],
    },
    {
      _id: "M701",
      name: "Introduction to Middle-earth Languages",
      description: "Basic principles of ancient languages in Middle-earth.",
      course: "RS107",
      lessons: [
        {
          _id: "L1601",
          name: "Elvish Languages",
          description: "Introduction to Elvish languages.",
          module: "M701",
        },
        {
          _id: "L1602",
          name: "Dwarvish Languages",
          description: "Overview of Dwarvish languages.",
          module: "M701",
        },
      ],
    },
    {
      _id: "M702",
      name: "Advanced Middle-earth Scripts",
      description: "In-depth study of ancient scripts in Middle-earth.",
      course: "RS107",
      lessons: [
        {
          _id: "L1701",
          name: "Runes",
          description: "Principles of runes in Middle-earth.",
          module: "M702",
        },
        {
          _id: "L1702",
          name: "Tengwar",
          description: "Overview of Tengwar script.",
          module: "M702",
        },
      ],
    },
    {
      _id: "M801",
      name: "Introduction to Middle-earth Diplomacy",
      description:
        "Basic principles of inter-species diplomacy in Middle-earth.",
      course: "RS108",
      lessons: [
        {
          _id: "L1801",
          name: "Elves and Men",
          description: "Diplomatic relations between Elves and Men.",
          module: "M801",
        },
        {
          _id: "L1802",
          name: "Wizards and Elves",
          description: "Diplomatic relations between Wizards and Elves.",
          module: "M801",
        },
      ],
    },
    {
      _id: "M802",
      name: "Advanced Middle-earth Diplomacy",
      description: "In-depth study of inter-species diplomacy in Middle-earth.",
      course: "RS108",
      lessons: [
        {
          _id: "L1901",
          name: "Men and Dwarves",
          description: "Diplomatic relations between Men and Dwarves.",
          module: "M802",
        },
        {
          _id: "L1902",
          name: "Elves and Dwarves",
          description: "Diplomatic relations between Elves and Dwarves.",
          module: "M802",
        },
      ],
    },
  ],
};
