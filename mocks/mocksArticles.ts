import { Article } from "../models/Article";


export const allMockArticles: Article[] = [
  {
    id: 1,
    title: `UFOs are Real`,
    source:  require('./mock-article-images/1.jpg'),
    text: "Something extraordinary was revealed today. Former high-level officials and scientists with deep black experience who have always remained in the shadows came forward on one platform. These insiders have long-standing connections to government agencies which may have programs investigating unidentifed aerial phenomena (UAP/UFOs). The team includes a 25-year veteran of the CIA’s Directorate of Operations, a Lockheed Martin Program Director for Advanced Systems at “Skunk Works”, and a former deputy Assistant Secretary of Defense for Intelligence.\n" +
      "\n" +
      "Today marked the official launch of To The Stars Academy of Arts & Science (TTS/AAS) an innovative Public Benefit Corporation which will advance research into unexplained phenomena and develop related technology. It has established three synergistic divisions: Science, Areospace, and Entertainment. “We believe there are discoveries within our reach that will revolutionize the human experience,” says company President and CEO Tom DeLonge. Please see my previous story,- released yesterday - for background on today’s announcement which was live-streamed and is archived on the company website."
  },
  {
    id: 2,
    title: ` Smuggler Caught With Cactus 947 Plants`,
    source: require('./mock-article-images/2.jpeg'),
    text: "New Zealand authorities have sentenced a woman who tried in 2019 to smuggle nearly 1,000 cacti and succulents into the country strapped to her body.\n" +
      "\n" +
      "The woman, Wenqing Li, 38, pleaded guilty to violating biosecurity laws after she was caught twice with plants and seeds at Auckland International Airport when returning home to the city from China, New Zealand’s Ministry for Primary Industries said in a statement on Wednesday.\n" +
      "\n" +
      "She was sentenced to intensive supervision for 12 months and 100 hours of community work. "
  },
  {
    id: 3,
    title: "Disney’s ‘Frozen’ Assists Researchers",
    source: require('./mock-article-images/3.jpeg'),
    text: "The snow in the 2013 film was animated so well that it helped one scientist develop a simulation to study the grim 1959 death of nine Russian hikers.\n" +
      "Researchers looking into one of the theories behind the Dyatlov Pass incident, a 1959 unsolved mystery that saw nine hikers killed during an expedition into Russia’s Ural Mountains, drew inspiration from one unlikely source — Disney’s 2013 hit film “Frozen.”\n" +
      "\n" +
      "John Gaume, head of Switzerland’s Snow Avalanche Simulation Laboratory, and Alexander Puzrin, an engineer at ETH Zürich, published the results of their findings last week in the paper “Mechanisms of slab avalanche release and impact in the Dyatlov Pass incident in 1959.”"
  },
  {
    id: 4,
    title: "Cold Hard Facts At Annual Groundhog Day Ceremony",
    source: require('./mock-article-images/4.jpeg'),
    text: "The weather-predicting rodent emerged from his burrow on a snowy Tuesday morning to, as tradition dictates, stare at his shadow.\n" +
      "\n" +
      "\n" +
      "PUNXSUTAWNEY, Pa. (AP) — There will be six more weeks of winter, Punxsutawney Phil predicted as he emerged from his burrow on a snowy Tuesday morning to perform his Groundhog Day duties.\n" +
      "\n" +
      "Members of Phil’s “inner circle” woke up the furry critter at 7:25 a.m. at Gobbler’s Knob in Punxsutawney, Pennsylvania, to see whether he would see his shadow or not.\n" +
      "\n" +
      "Shortly after this year’s prediction was revealed, one of the members of the inner circle shared a message he said Phil had told him earlier in the day: “After winter, you’re looking forward to one of the most beautiful and brightest springs you’ve ever seen.”\n" +
      "\n" +
      "Another member of the “inner circle” noted the uniqueness of the past year."
  },
  {
    id: 5,
    title: `Spinach In Your Inbox`,
    source: require('./mock-article-images/5.jpeg'),
    text: "The internet went into a frenzy on Tuesday after Euronews resurfaced a 2016 study about scientists “teaching” spinach plants to detect explosives and send emails.\n" +
      "\n" +
      "The study, titled “Nitroaromatic detection and infrared communication from wild-type plants using plant nanobionics” was originally published in the journal Nature Materials. Plant nanobionics refers to the scientific practice of altering plants with extremely small particles to give them new abilities.\n" +
      "\n" +
      "In the study, researchers from MIT and the University of California, Riverside, embedded tiny sensors made of carbon nanotubes into spinach leaves so they could detect nitroaromatic compounds, which are often found in explosives. Once the roots came into contact with these compounds, the sensors in the leaves issued a fluorescent signal that was detected by an infrared camera attached to a small computer that sent researchers an email alert.\n" +
      "\n" +
      "“Plants are very good analytical chemists,” MIT’s Michael Strano, one of the authors behind the study, told Euronews. “They have an extensive root network in the soil, are constantly sampling groundwater, and have a way to self-power the transport of that water up into the leaves.”"
  },
  {
    id: 6,
    title: "Oh, Lucky man",
    source: require('./mock-article-images/6.jpg'),
    text: "LELAND, N.C. (AP) — An unlucky start to a North Carolina man’s day turned upside down when he discovered he won a $2 million lottery prize hours after hitting two deer with his new car.\n" +
      "\n" +
      "Anthony Dowe, of Leland, had an accident on his way to work, the North Carolina Education Lottery said in a statement Tuesday. It ruined his day, so he went back home, got into bed and went to sleep.\n" +
      "\n" +
      "“Then I woke up and checked my tickets. I checked the fourth ticket and I saw the ‘4’ and then the next number and the next number and the next number,” he said. “I’m like, ‘Wow!’ It was just crazy.”\n" +
      "\n" +
      "His winning Mega Millions ticket matched all five white balls. The odds? 1 out of 12.6 million.\n" +
      "\n" +
      "Dowe took his ticket to a store and won $1 million. That prize doubled when the 2x Megaplier ticket was drawn.\n" +
      "\n" +
      "“I went and showed my dad and my mom and everybody was happy,” he said."
  }
]
export const initialMockArticles = allMockArticles.slice(0, allMockArticles.length - 1);
export const newMockArticle = allMockArticles[allMockArticles.length - 1];

