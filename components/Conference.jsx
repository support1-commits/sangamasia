"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Film, ExternalLink, Images } from "lucide-react";
import { useSiteLanguage } from "../lib/siteLanguage";

const themes = [
  { tag: "01", title: "Challenges", desc: "How do museums explain current farming challenges and their causes, the concerns of the past decades, and attempts at resolution? How can agriculture and farming heritage ensure global food safety, and how do current issues affect research, exhibition and public programming goals?" },
  { tag: "02", title: "Heritage", desc: "How can museums communicate learnings from tried-and-trusted farming practices and farmer-held knowledge of ecologies, especially in marginal and critical ecosystems -- and how does field research provide innovative solutions for the museum?" },
  { tag: "03", title: "Alternates", desc: "This theme brings out the 'living' culture in agriculture -- how museums communicate the history of farming practice, resilience, traditional knowledge and cultural expression, and what modern museological approaches are used to collect, preserve and interpret agricultural change." },
  { tag: "04", title: "Farm Tales and Tellers", desc: "How do museum collections, exhibitions and activities connect to historical memory and practice -- using oral histories, art, farming practice and folklore to go beyond the twentieth-century agriculture museum experience." },
];

const days = [
  {
    label: "Day 1",
    date: "13 October 2023",
    venue: "Shoolini University, Solan",
    sessions: [
      { h: "Keynote Plenary Session", items: ["Session Theme: Socio-Economic background to Agricultural history in the Indian Sub-Continent -- Dr. Devinder Sharma (SPEAKER)", "Session 2 Theme: Continuation of traditional practices in Agriculture in the Indian Sub-Continent -- the Shodh Yatras (Research Journey) story -- Dr. Anil Gupta (Speaker)"] },
      { h: "Inaugural Session", items: ["Welcome Address -- VC, Shoolini University", "Introduction to AIMA -- President AIMA", "Introducing CIMA 2023 -- Vice President, AIMA (ONLINE)", "Chief Guest -- Chief Secretary, HP."] },
      { h: "Session 1 Theme -- Heritage", items: ["Millet folklife -- practices, history, memory -- Mr. Soumik Bannerjee, Balaghat.", "Indigenous Seeds and seed festival -- Mr. Avdhesh Sharma, Dehradun.", "Sheep Dipping in Norway -- Dr. Anne Jorunn Frøyen, Jaermuseet, Norway (ONLINE)"] },
      { h: "Parallel Session 1 A -- Himachal Session (Horticulture and Agriculture)", items: ["Topic 1: Apple Story in Himachal Pradesh -- to current horticultural initiatives in lower Himachal -- Dr. Naveen Sharma, YSP University, Solan.", "Topic 2: Adaptations from Tradition -- Overview of the HP Horticulture Development Project -- Dr. DP Sharma, YSP University, Solan.", "Topic 3: Agroforestry in Himalayan region with a focus on Himachal Pradesh -- Dr. D R Bhardwaj, YSP University, Solan."] },
      { h: "Session 2 -- Theme: Tales and Tellers", items: ["Topic 1: Agricultural Histories: Reading & Interpreting Images -- AIMA Panel Discussion (60 mins) by Dr. Peter Moser, Dr. Yves Seger, Dr. Debra Reid (HYBRID / ONLINE).", "Topic 2: Farmers on the Screen: audiovisual heritage, an overlooked gem for agricultural museums? -- Dr. Sven Lefèvre, Centre for Agrarian History, Belgium (ONLINE).", "Summary: How can we use audiovisual sources to research the complex history of the agricultural sector of the last 75 years and translate this towards the broader public? This presentation addresses the heritage project 'Farmers on the Screen' concerning the Belgian television program 'For Farmer and Horticulturist'. Together with an extensive partner network from both the agricultural and the heritage sector, the Centre for Agrarian History described and digitized all episodes of the series.", "On top of that, five screenings were organized across the five provinces of Flanders in collaboration with five different agricultural museums or heritage sites. During these experimental screenings, we engaged with the farmers about their memories of the program itself, but also about their contemporary views on the program and its potential heritage value. These audiovisual sources proved to be an excellent conversation starter. Watching the screenings motivated many participants to freely share their own personal stories, creating new sources to engage with the agricultural past. During this presentation the results and lessons learned will be presented in order to inspire other institutions and museums."] },
      { h: "Parallel Session 2A -- Heritage", items: ["Topic 1: Traditional farming knowledge, practices and wild foods with local communities in Wayanad, Kerala -- Mr. Rafi and Saneesh, Keystone.", "Topic 2: Tradition, Practice, Sustainability and Gender: The Changing food landscape in BTC Kokrajhar, Assam -- Dr. Dharitri Narzary.", "Topic 3: Oral History, Farming practice and embedded cultural knowledge in Bundelkhand -- Ms. Ritu Mishra & Ms. Deeksha Khandelwal, INTACH-SANGAM.", "Film Screenings: Films from SPS Community Media, Goethe Institute, Mr. Bappa Ray, National Award-winning Filmmaker and INTACH."] },
      { h: "Cultural Event", items: ["Cultural Event organized in the evening and some beautiful performances were given by the students of Shoolini University."] },
    ],
  },
  {
    label: "Day 2",
    date: "14 October 2023",
    venue: "Shoolini University, Solan",
    sessions: [
      { h: "Keynote Session 2: Overview on Agroecology", items: ["Dr. Patrick Mulvany, UK."] },
      { h: "Session 3 Theme -- Heritage", items: ["The archaeology of our food, or why we eat what we do - Dr. Kurush Dalal, Mumbai", "Traditional Soor to Himalayan Acquavit: Adapting local agricultural produce to innovatively meet market demand - Dr. Jyoti Marwah, Mussorie", "Vermicomposting - Soil Story, A earthworms eye view - Dr. Sultan Ismail, Chennai. (ONLINE)"] },
      { h: "Parallel Session 3A -- Heritage", items: ["Traditional practices and contemporary challenges in fisheries and aquaculture - Mr. Chaitanya Akula, Fish Welfare Initiative, AP", "Fisheries, Aquaculture and livestock farming from the perspective of history, heritage and tradition -Shri. Tarun Sridhar", "Appreciating the cultural and living heritage of animal power in agriculture - Dr. Paul Starkey, MERL, UK (30min)", "Summary of the session Summary: Working animals have been used for millennia for transport, tillage, raising water, planting, harvesting and post-harvest milling. Animal power remains important in many countries and farming systems and will be relevant in the future.", "There is a great diversity of work animals, equipment and methods. Different species (cattle, buffaloes, horses, donkeys, camels, others) can be employed. Many breeds have been selected for working abilities. Numerous different technologies have been developed for harnessing animals, tillage and transport, often incorporating localised requirements related to portability, manoeuvrability, working width, load type and environmental conditions. Locally developed hardware, animals and operational methods became ‘traditional’, associated with localities or ethnic groups. This was reinforced by folk art, as implements, carts and animals were decorated and embellished with particular designs, colours and accessories. As working animals became part of cultural heritage, their uses were portrayed in songs, stories, toys, textiles, carvings, ceramics, statues, paintings, books and other means of public recognition.", "In India, and most countries, there exists a spectacular diversity of ‘traditional’ regional designs of plows, yokes, harnesses, animal-drawn carts and wagons, the animal breeds themselves, their adornments and their methods of use. Local designs and techniques pass between generations as the ‘norm’, often considered superior to those in neighbouring regions or other cultures. Such a diversity of animals, technologies and cultural traditions provides a wealth of options for sharing and promotion by agricultural museums, but also great challenges as to how to do justice to these through exhibitions, displays and on-line resources."] },
      { h: "Session 4 -- Tales and Tellers", items: ["Climate related activities at the MERL -- Dr. Isabel Hughes / Dr. Ollie Douglas (ONLINE) TBC.", "Summary: Large organisations such as universities, funding bodies, and museums are all seeking to embrace environmental sustainability as a principle of the way they work. We also know that environmental issues are of growing importance to our visitors. These same ideas are at the heart of ways in which the UK countryside is being reimagined in the 21st century.", "At a global level, our response to climate change and breakdown are of increasing urgency and museums must play their part in raising awareness and delving into the histories that led us to this point. Using the United Nations’ 17 Sustainable Development Goals (SDGs) as our starting point, we have worked with local partners, different disciplinary specialists, and a wide range of audiences and communities to help highlight some of the links between our collections and the huge challenges now faced by humanity.", "By sharing our own SDG-linked ‘Green Stories’ of hope and of care, we hope to play a small part in enhancing public understanding of the Anthropocene, raising awareness of histories of environmental protection and of ecological damage, and encouraging practices that have brought about positive changes in both the past and the present.", "The Chola irrigation system in Tamil Nadu (200–1200 CE), South India -- Dr. R Seenivasan."] },
      { h: "Parallel 4A -- Himachal Session", items: ["Unique Aspects of Moisture management and adapting irrigation at a time of climate stress -- Dr Suresh C Attri, Envi, S&T, GoHP.", "Climate change adaptation and capacity building of marginal farmers.", "The unexpected nature of climate variability -- Dr. V Geethalakshmi TBC.", "A Year in the Field -- a multi-site Museum project -- Dr. Claus Kropp (15 mins) (ONLINE).", "Summary: The international project “A Year On The Field” aims to serve as a platform for exchange about field crops – on the one hand about their cultivation and processing, and on the other hand about broader aspects such as cultural-historical, archaeological and food-technical aspects of a crop.", "For this purpose, (archaeological) open-air museums, historically managed farms (so-called Living History Farms) and modern farms alike share insights into their farming practices on the project website. In addition, research institutions, museums, historians and archaeologists as well as nutritionists participate in the project and make it possible to gain a better understanding of the crops in their historical significance.", "Each year, the focus is on the cultivation of a different field crop – in the pilot year 2022, it was wheat (Triticum aestivum), one of the world’s most important field crops. In 2023, it is Flax (Linum usitatissimum).", "The paper has explored the scope and potential of this project."] },
      { h: "Parallel 4A -- Heritage", items: ["Agricultural heritage and its use through contemporary adaptation -- Dr. SPS Beniwal, Meerut."] },
      { h: "Session 5 Heritage Panel", items: ["Animal Heritage and Well Being -- living histories from Agricultural Museums -- Dr. Claus Kropp, Dr. Barbara Corson, Dr. Paul Starkey (ONLINE / HYBRID – 60 mins).", "Preserving native Indian cow breeds and traditional farming -- Ms. Vaishavi Sinha, Shoonya Farms, West UP."] },
      { h: "Parallel 5A -- Theme: Alternates", items: ["Pollinators in tropical ecosystems of Southern India with emphasis on native Bees -- Dr. K Anupama, IFP.", "Beekeeping in Slovenia -- Dr. Barbara Sosic, AIMA.", "Making the hidden visible: Economic valuation of Natural Resource costs and prices -- Dr. Madhu Verma."] },
      { h: "Session 6 -- Heritage", items: ["The Saint Lubin Festival, Rambouillet, France: “performing” agriculture and stockbreeding as heritage -- Dr. Cozette Griffin Kremer, France (AIMA – ONLINE).", "Can intangible cultural heritage (ICH) serve as a leverage to mitigate biodiversity loss and threats of water shortage related to climate change? -- Dr. Chantal Bisschop, Centre for Agrarian History, Belgium (ONLINE).", "The agricultural origins of architecture -- rethinking vernacular architecture -- Dr. K T Ravindran, New Delhi & Dr. Ritu Varuni, Rajgarh, HP."] },
      { h: "Parallel 6A -- Tales & Tellers", items: ["Imagining a museum of sustainable agriculture at Vijaywada, India -- Dr. G V (Ramu) Ramanjaneyulu.", "Agricultural Scientists to farmers: from oral history to media archiving as a process of knowledge making -- Dr. Sandipan Baksi, FAS, Bangalore.", "What does Oral History tell us about Agricultural heritage of Punjab -- Mr. Umendra Dutt, Kheti Virasat Mission, Faridkot.", "Film Screenings: Films from SPS Community Media, Goethe Institute, Mr. Bappa Ray, National Award-winning Filmmaker and INTACH."] },
    ],
  },
  {
    label: "Day 3",
    date: "15 October 2023",
    venue: "Shoolini University, Solan",
    sessions: [
      { h: "Keynote Session", items: ["Topic: Traditional systems of water harvesting for irrigation -- Dr. Rajendra Singh Jal-Purush."] },
      { h: "Session 7 -- Theme: Tales & Tellers", items: ["Paddy Museum -- Mr. Syed Ghani Khan, Karnataka.", "Backyard Basecamp: urban farming in Baltimore -- Dr. Lauren Muney (ONLINE).", "Happiness, biodiversity and permaculture -- Dr. Saamdu Chhetri, Bhutan in conversation with Dr. Andre Leu, Australia / Dr. Ashok Khosla, India (ONLINE)."] },
      { h: "Parallel 7A -- Heritage", items: ["Livestock: The Critical Link in Agroecology and Mixed cropping -- Dr. Nitya Ghotge, ANTHRA, Pune.", "Agroforestry – traditional Heritage and contemporary cases and experiences from across India -- Dr. S K Dhyani, CGIAR.", "The Babulal Dahiya collection – folklore, tools, implements and heritage seeds at a community museum -- Mr. Suresh Dahiya, Satna, MP."] },
    ],
  },
  {
    label: "Day 4",
    date: "16 October 2023",
    venue: "Punjab Agricultural University, Ludhiana",
    sessions: [
      { h: "Programme", items: ["Museum Visits @PAU by CIMA delegates.", "Opening of Khush Institute & Museum – maximum 20 CIMA delegation.", "Museum Visits @PAU by CIMA delegates.", "CIMA Inauguration at PAU.", "Keynote – The Rice Revolution – Dr. Gurdev Khush, Agronomist and Geneticist, WFPrize, 1997.", "Chair – VC PAU.", "Welcome to CIMA by AIMA delegate.", "Cultural Evening at Museum of Social History of Punjab."] },
    ],
  },
  {
    label: "Day 5",
    date: "17 October 2023",
    venue: "Punjab Agricultural University, Ludhiana",
    sessions: [
      { h: "AIMA Agricultural Museums Keynote", items: ["Agricultural museums as a bridge between land traditions and everyone else? – Peter Watson and Dr. Debra Reid, USA (AIMA) (45 mins)."] },
      { h: "Digital Storytelling Futures at Agricultural Museum – A Discussion", items: ["Ms. Vaishali Neotia and Prof. Surajit Sarkar (45 mins)."] },
      { h: "PAU", items: ["Experiences with University Museums."] },
      { h: "Moderated Discussion", items: ["Agricultural Museums, collections and improving storytelling possibilities."] },
      { h: "Closing Session", items: ["PAU Auditorium."] },
      { h: "Museum Visits @PAU", items: ["Museum Visits @PAU."] },
    ],
  },
  {
    label: "Day 6",
    date: "18 October 2023",
    venue: "Punjab",
    sessions: [
      { h: "Field Visit in Punjab", items: ["Field visit in Punjab organized by Punjab Agricultural University (PAU)."] },
    ],
  },
];

const outcomes = [
  "Facilitate upgradation of agricultural museums and heritage centres across the country, by connecting museum and digital technology professionals with interested agricultural institutions and museums.",
  "Connect social scientists and museum professionals to agricultural institutions and universities at a time when the agriculture sector is largely staffed by scientists.",
  "Create a network of agricultural institution partners to undertake a countrywide farmer-based oral history research and documentation project on transformation in land development, water practices, fertilisers, helpful seeds and other transformative events in individual farmers' histories.",
  "Facilitate development of a digital Agricultural Communication Network for a wider audience -- farmers' organisations, agricultural universities, museums, heritage centres, agriculture NGOs, academics and interested members of the public.",
];

const partners = {
  co: [
    { name: "Punjab Agricultural University (PAU), Ludhiana", desc: "Established in 1962, PAU is the nation's third-oldest agricultural university and played a pioneering role in India's Green Revolution in the 1960s. Its Farmers Fair, held since 1967, draws at least one lakh farmers over two days, and PAU is home to six museums on different aspects of agriculture and rural life.", url: "https://pau.edu/" },
    { name: "Shoolini University of Biotechnology and Management Sciences (SU)", desc: "Based in Bajhol, Solan, Himachal Pradesh, Shoolini is a not-for-profit, multi-disciplinary private university established in 2009 -- consistently ranked among India's top 100 universities (NIRF) and one of India's highest generators of patents and innovation. Its students and researchers work closely with the local community on critical issues like health, water, food and technology.", url: "https://shooliniuniversity.com/" },
    { name: "The Heritage Foundation (THF)", desc: "A non-profit, non-government heritage research, outreach and conservation organisation, registered as a national society, working on research, documentation, curation and conservation of tangible and intangible Indic heritage, with an aim to foster awareness and appreciation of India's history.", url: null },
  ],
  knowledge: [
    { name: "INTACH -- The Indian National Trust for Art and Cultural Heritage", desc: "A premier non-profit, non-government heritage conservation organisation and volunteer membership body set up to protect unprotected monuments and sites, conserve art and material heritage, and revitalise India's intangible heritage.", url: "https://www.intach.org/" },
    { name: "SANGAM -- South Asia Network of Grassroots Agricultural Museums", desc: "A collective of institutions and individuals telling the story of agriculture and agriculturists of the Indian subcontinent -- using the best museology and exhibition practice, from digital and online to physical artifacts, through a network of academic and cultural institutions across the region.", url: "/" },
  ],
};

const sponsors = [
  "Department of Agriculture, Government of Himachal Pradesh",
  "HPMC -- Himachal Pradesh Horticulture Produce Marketing and Processing Corporation",
  "Shoolini University",
  "AIMA -- International Association of Agricultural Museums",
];

const conferenceGalleryImages = [
  { src: "/cima/1.jpg", alt: "CIMA 2023 conference photography 1" },
  { src: "/cima/2.jpg", alt: "CIMA 2023 conference photography 2" },
  { src: "/cima/3.jpg", alt: "CIMA 2023 conference photography 3" },
  { src: "/cima/4.jpg", alt: "CIMA 2023 conference photography 4" },
  { src: "/cima/5.jpg", alt: "CIMA 2023 conference photography 5" },
  { src: "/cima/6.jpg", alt: "CIMA 2023 conference photography 6" },
  { src: "/cima/7.jpg", alt: "CIMA 2023 conference photography 7" },
  { src: "/cima/8.jpg", alt: "CIMA 2023 conference photography 8" },
  { src: "/cima/9.jpg", alt: "CIMA 2023 conference photography 9" },
  { src: "/cima/10.jpg", alt: "CIMA 2023 conference photography 10" },
  { src: "/cima/11.JPG", alt: "CIMA 2023 conference photography 11" },
  { src: "/cima/12.jpg", alt: "CIMA 2023 conference photography 12" },
  { src: "/cima/13.jpg", alt: "CIMA 2023 conference photography 13" },
  { src: "/cima/14.jpg", alt: "CIMA 2023 conference photography 14" },
  { src: "/cima/15.jpg", alt: "CIMA 2023 conference photography 15" },
];

const films = [
  { title: "Life in a Fistful of Rice", by: "Presented by the Intangible Cultural Heritage Division, INTACH", link: "https://youtu.be/_xvQukT5h7w?si=u3sIjJV3EKPA5psM" },
  { title: "Faces of Climate Resilience", by: "CEEW & Drokpa Films, supported by India Climate Collaborative and EdelGive Foundation -- 16 stories across 5 Indian states", link: "https://youtu.be/0N5_5qcFw-c?si=j89VFOeoXiEFuQ8t" },
  { title: "Organic Farming: Tradition and Science", by: "G. S. Unnikrishnan Nair -- MANAGE Agri. Film Festival 2023", link: "https://youtu.be/PC1mYGhtiCQ?si=Qyo8wOhYhlbxO3YH" },
  { title: "The Archives of Rural History -- A video portrait of the virtual archives in Bern", by: "Archives of Rural History collaborators, Bern 2023", link: "https://youtu.be/KFe27AgqFjI?si=LloFDIK_7vzgbpyJ" },
  { title: "Code of Conduct for Responsible Fishing", by: "Presented by the Department of Animal Husbandry, Dairying and Fisheries, Ministry of Agriculture", link: "https://youtu.be/GrUAOxof3oQ?si=iUtkcHzC7lvWg21l" },
  { title: "Cold Water Fisheries", by: "Presented by the Department of Animal Husbandry, Dairying and Fisheries, Ministry of Agriculture", link: "https://youtu.be/LAR2p5L5X_U?si=_uddAxD3y44N0MrB" },
];

const spsFilms = [
  { title: "P for Pyaaz, P for Paisa, P for Paani", duration: "56:14", subject: "Agriculture and Groundwater", description: "A film about affluent and local farmers in the Narmada valley who begin growing water-intensive onions for cash income. It explores the impact of this shift on the already depleting groundwater table in the region.", link: "https://www.youtube.com/watch?v=NZApcnC20Os" },
  { title: "The Bird, The Priest and The Sixteen Millet Thieves", duration: "57:39", subject: "Agriculture", description: "A film that follows the life cycle of Rala (Foxtail Millet) -- an indigenous crop -- through ballads and present-day stories. It explores the dwindling cultivation of this grain alongside themes of rain, pests, markets and changing diets.", link: "https://www.youtube.com/watch?v=nchdF8LE5BA" },
  { title: "NPM Chana (Pesticide Free Chickpea)", duration: "08:07", subject: "Agriculture", description: "Mira Bai has been practicing non-pesticide farming for three years, making affordable bio-pest repellents from leaves found around her farm. The film shows how chemical-free farming protects both soil health and the farmer's pocket.", link: "https://www.youtube.com/watch?v=ZOX7kv2SL_k" },
  { title: "Sona Mati -- Nature's Bounty", duration: "03:41", subject: "Agriculture", description: "This film portrays the story of a farmer in a remote dryland area who enriches her barren soil using nature's own resources. For the first time in 20 years, she witnesses a bumper harvest.", link: "https://www.youtube.com/watch?v=uJ35WzyHy8U" },
  { title: "Ghol Anmol", duration: "03:38", subject: "Agriculture", description: "A short film showing a nature-based pest repellent used for tuar daal (pigeon pea). The solution is economical, safe and healthy -- an alternative to chemical pesticides.", link: "https://www.youtube.com/watch?v=wtsfOyHS5JI" },
  { title: "Jowar Gatha (The Jowar Ballad)", duration: "30:03", subject: "Agriculture", description: "A film celebrating the indigenous varieties of sorghum and millets and the rich traditions of food, songs and rituals built around them. It also documents the lament of farmers as Jowar cultivation declines in the drylands of Central India.", link: "https://youtu.be/7CN1rZ--0e0" },
  { title: "The Magic of Five Leaves (Paanch Pattiyon Ka Mantra)", duration: "04:27", subject: "Agriculture", description: "Sumanbai, a farmer in a tribal village of Madhya Pradesh, uses a low-cost, environment-friendly alternative to toxic pesticides for her crops. She is one of 4,000 farmers practicing No Pesticide Management (NPM) farming.", link: "https://www.youtube.com/watch?v=dPcpzV5IieU" },
  { title: "Keetnashak Ya Vinashak", duration: "33:42", subject: "Agriculture", description: "A local farmer-turned-filmmaker documents how chemical pesticides and weedicides are rapidly entering even the most remote tribal villages of Central India. The film exposes the dangers of high input costs, environmental damage and health risks that follow.", link: "https://www.youtube.com/watch?v=G8v8BE3uF7Y&t=7s" },
  { title: "Sitaram Kaka ka Gajab Andaz", duration: "14:02", subject: "Agriculture", description: "Sitaram, a PWD line-man, collects fallen forest leaves and converts them into rich compost for his farm -- improving yield and soil fertility season after season. The film is the story of one man's quiet, ingenious relationship with organic farming.", link: "https://www.youtube.com/watch?v=D3Z5q5n8tGg" },
  { title: "Mishrit Fasal (Mix Cropping)", duration: "09:07", subject: "Agriculture", description: "Small farmers Munni Bai and Gattu rediscover that the traditional practice of mixed cropping -- sorghum, millets, lentils and vegetables grown together -- is their most reliable shield against food insecurity. The film shows how ancient farming wisdom answers modern climate uncertainty.", link: "https://www.youtube.com/watch?v=LzqVs0p7GXI" },
  { title: "Safe Earth", duration: "16:31", subject: "Agriculture", description: "A film sharing the experiences of small and marginal farmers who have adopted integrated bio-pest management through Non-pesticide Management (NPM) farming. It shows how this approach protects not just human health but also the long-term fertility of the soil.", link: "https://www.youtube.com/watch?v=pVVGaMA1soE" },
  { title: "Mhari Topli Ma: Kumudini", duration: "11:36", subject: "Edible Wild Green", description: "Fearless Savitri Bai dives into a pond to harvest kumudini -- a nutritious wild edible -- as part of the \"What's in My Basket\" series. The film takes viewers on a water ride through a haunted pond in search of these rare edible pearls.", link: "https://youtu.be/S52cme85TBQ" },
  { title: "Mhari Topli Ma: Chauli", duration: "07:09", subject: "Edible Wild Green", description: "A film about Chauli -- a traditional wild edible herb that grows as a weed and is full of nutrition. It raises the alarm that in our rush to clear weeds from farms, we are losing irreplaceable food knowledge.", link: "https://youtu.be/VaGH0Z2YwI8" },
  { title: "Mhari Topli Ma: Bans Bhamori", duration: "13:17", subject: "Edible Wild Green", description: "Elders from Ratanpur village, on the banks of the Narmada, forage the forest for oyster mushrooms with an expertise passed down through generations. The film captures their passion and wisdom as a living tradition of wild food knowledge.", link: "https://youtu.be/P5BhsrA1PGA" },
  { title: "Mhari Topli Ma: Ambadi", duration: "06:13", subject: "Agriculture, Local Food", description: "Hari Bai from a remote tribal village in the Narmada Valley shares her love for ambadi (Roselle) -- a tangy seasonal vegetable she credits for her energy and good health in old age. The film celebrates local food as both nutrition and cultural identity.", link: "https://youtu.be/GRjFMYiMWSA" },
  { title: "Girwala Ke Anokhe Rang Kaka aur Kaki Ke Sang", duration: "04:10", subject: "Edible Wild Green", description: "Shankar Kaka of Mansinghpura demonstrates how the flowers of Indian Laburnum (Amaltas) -- beautiful and nutritious -- can be gathered and turned into a delicious curry. A short, joyful portrait of edible wild knowledge alive in everyday village life.", link: "https://youtu.be/qgbjn9rUKxI" },
  { title: "Flower of Mother Earth", duration: "16:22", subject: "Edible Wild Green", description: "Natthu kaka waits for the rains with much hope each year, hoping to find the wild mushrooms (jameen maa ka phool) which spring out when the rains hit the ground. But with receding forests and erratic rains, it is getting difficult to find them. This film is a story of his relationship with the forests and the times he has spent in its lap.", link: "https://youtu.be/4XJCKdGwVDs" },
  { title: "Loo se Kaki Bemaar, Kare Kaka Desi Upchaar", duration: "04:27", subject: "Local Food", description: "This film highlights the fruit Billa (Wood Apple), which is collected from the forests, and the juice prepared from it to beat the heat. The film covers the benefits, memories and experiences of an elder man in Laxminagar village.", link: "https://youtu.be/oR8mL91KYLQ" },
  { title: "Mhari Topli Ma: Ber", duration: "09:20", subject: "Edible Wild Green", description: "As winter arrives, Khitli Bai carefully guards the Bor (Jujube) trees in her homestead, saving the fruit to share generously with friends and relatives who eagerly wait for it each season. A warm, intimate portrait of the bonds between people, trees and seasonal food traditions.", link: "https://youtu.be/ogxDL50umuo" },
  { title: "Mhari Topli Ma: Basta", duration: "08:09", subject: "Edible Wild Green", description: "When the monsoon recedes, Kala Bai and her friend row across the Narmada River into the forest to collect tender bamboo shoots -- a seasonal delicacy cherished by their entire village. The film captures this annual ritual of foraging as an act of both community and celebration.", link: "https://youtu.be/5mgJT3dXqo8" },
  { title: "Mhari Topli Ma: Phang", duration: "12:18", subject: "Edible Wild Green", description: "Phang (Midnapore creeper) grows wild during monsoon and has long been a favourite food of the older generation -- preferred even over fish and meat. Kehendi fears that as younger generations lose both the taste and the knowledge of cooking it, this wild food tradition may soon disappear forever.", link: "https://youtu.be/sBODczP_G-g" },
];

function getYouTubeId(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.replace(/^www\./, "");

    if (hostname === "youtu.be") {
      return parsed.pathname.replace("/", "").split("?")[0] || null;
    }

    if (hostname.includes("youtube.com")) {
      const videoId = parsed.searchParams.get("v");
      if (videoId) return videoId;

      const segments = parsed.pathname.split("/").filter(Boolean);
      const shortsIndex = segments.indexOf("shorts");
      if (shortsIndex >= 0 && segments[shortsIndex + 1]) return segments[shortsIndex + 1];

      const embedIndex = segments.indexOf("embed");
      if (embedIndex >= 0 && segments[embedIndex + 1]) return segments[embedIndex + 1];
    }
  } catch {
    return null;
  }

  return null;
}

export default function Conference() {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [activeDay, setActiveDay] = useState(0);
  const [openDay, setOpenDay] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const locale = useSiteLanguage();
  const copy = {
    en: { tag: "Flagship Conference · CIMA 2023", title: ["Agriculture:", "A Living Tradition"], sub: "20th Congrès International des Musées d'Agriculture — held for the first time in Asia and in India, 13–18 October 2023.", label: "Flagship Conference", heading: ["Where Heritage", "Finds Its Voice"], body1: "SANGAM members organised the 20th CIMA (Congress of International Agricultural Museum) for the first time in Asia and in India, with two host institutions, on 13, 14 and 15 October 2023 at Shoolini University, Solan, Himachal Pradesh, and 16, 17, and 18 October at Punjab Agricultural University, Ludhiana, Punjab. PAU is home to the oldest agricultural museum in Punjab, the Museum of Social History of Punjab. It was a 6 days conference attended by farmers, educators, activists, historians, professors, foreign delegates, students who actively participated in this conference.", body2: "The CIMA conferences are a regular international Triennial congress dedicated globally to agricultural museums, living history and rural heritage. The purpose of this conference is to educate people through Agricultural Museums about the significance of agriculture in human society, to explain how agriculture has evolved over the years and to facilitate the dialogue between museums across the globe about agricultural histories and discoveries.", body3: "The 20th CIMA conference focused on how Agriculture maintains itself as a living tradition by adapting to the past traditions with present innovations, observations and experience to create changes for sustainable future. Further, there was a discussion on agricultural museum and its significant educational role in alignment with research institutes and universities. An effort of CIMA 23' is to scale up the documentation and communication of the rich tradition and living adaptations of Agriculture in India and facilitate the process by seeking synergies with organizations and individual that shares a common goal." },
    hi: { tag: "मुख्य सम्मेलन · CIMA 2023", title: ["कृषि:", "एक जीवंत परंपरा"], sub: "20वाँ अंतर्राष्ट्रीय कृषि संग्रहालय कांग्रेस — पहली बार एशिया और भारत में, 13–18 अक्टूबर 2023।", label: "मुख्य सम्मेलन", heading: ["जहाँ विरासत", "अपना स्वर पाती है"], body1: "CIMA पहली बार एशिया और भारत में आयोजित हुआ...", body2: "सम्मेलन का केंद्र यह था कि कृषि अपने आप को जीवंत परंपरा के रूप में कैसे बनाए रखती है...", body3: "यह छह दिवसीय सम्मेलन था..." },
    bn: { tag: "ফ্ল্যাগশিপ কনফারেন্স · CIMA 2023", title: ["কৃষি:", "একটি জীবন্ত উত্তরাধিকার"], sub: "20তম আন্তর্জাতিক কৃষি জাদুঘর কংগ্রেস — প্রথমবারের মতো এশিয়া ও ভারতে, 13–18 অক্টোবর 2023।", label: "ফ্ল্যাগশিপ কনফারেন্স", heading: ["যেখানে ঐতিহ্য", "নিজের কণ্ঠ খুঁজে পায়"], body1: "CIMA প্রথমবারের মতো এশিয়া ও ভারতে অনুষ্ঠিত হয়...", body2: "কনফারেন্সের ফোকাস ছিল কীভাবে কৃষি নিজেকে জীবন্ত ঐতিহ্যের সঙ্গে ধরে রাখে...", body3: "এটি ছয় দিনব্যাপী কনফারেন্স ছিল..." },
  }[locale] || { tag: "Flagship Conference · CIMA 2023", title: ["Agriculture:", "A Living Tradition"], sub: "20th Congrès International des Musées d'Agriculture — held for the first time in Asia and in India, 13–18 October 2023.", label: "Flagship Conference", heading: ["Where Heritage", "Finds Its Voice"], body1: "SANGAM members organised the 20th CIMA (Congress of International Agricultural Museum) for the first time in Asia and in India, with two host institutions, on 13, 14 and 15 October 2023 at Shoolini University, Solan, Himachal Pradesh, and 16, 17, and 18 October at Punjab Agricultural University, Ludhiana, Punjab. PAU is home to the oldest agricultural museum in Punjab, the Museum of Social History of Punjab. It was a 6 days conference attended by farmers, educators, activists, historians, professors, foreign delegates, students who actively participated in this conference.", body2: "The CIMA conferences are a regular international Triennial congress dedicated globally to agricultural museums, living history and rural heritage. The purpose of this conference is to educate people through Agricultural Museums about the significance of agriculture in human society, to explain how agriculture has evolved over the years and to facilitate the dialogue between museums across the globe about agricultural histories and discoveries.", body3: "The 20th CIMA conference focused on how Agriculture maintains itself as a living tradition by adapting to the past traditions with present innovations, observations and experience to create changes for sustainable future. Further, there was a discussion on agricultural museum and its significant educational role in alignment with research institutes and universities. An effort of CIMA 23' is to scale up the documentation and communication of the rich tradition and living adaptations of Agriculture in India and facilitate the process by seeking synergies with organizations and individual that shares a common goal." };
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    const section = ref.current;
    if (section) {
      obs.observe(section);
      if (section.getBoundingClientRect().top < window.innerHeight) {
        requestAnimationFrame(() => setVis(true));
      }
    }
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openImage = (index) => setSelectedImageIndex(index);
  const closeImage = () => setSelectedImageIndex(null);
  const showPreviousImage = () => setSelectedImageIndex((current) => current === null ? current : (current - 1 + conferenceGalleryImages.length) % conferenceGalleryImages.length);
  const showNextImage = () => setSelectedImageIndex((current) => current === null ? current : (current + 1) % conferenceGalleryImages.length);

  return (
    <section className="conference" ref={ref}>
      <div className={`conference-hero reveal${vis ? " visible" : ""}`}>
        <img src="/cima-conference.jpeg" alt="20th Congress of the International Association of Agricultural Museums, CIMA 2023" className="conference-hero__img" />
        <div className="conference-hero__overlay" />
        <div className="container conference-hero__content">
          <div className="tag-badge terracotta"><span className="tag-badge__dot" /> {copy.tag}</div>
          <h1 className="conference-hero__heading">{copy.title[0]} <em>{copy.title[1]}</em></h1>
          <p className="conference-hero__sub">{copy.sub}</p>
        </div>
      </div>
      <div className="conference__pattern" />
      <div className="container">
        <div className="conference__header">
          <div className={`conference__display reveal${vis ? " visible" : ""}`}>
            <div className="conference__label">
              <span className="conference__label-dot" />
              <span className="conference__label-text">{copy.label}</span>
            </div>
            <div className="conference__acronym">CIMA</div>
            <div className="conference__year">2023</div>
            <div className="conference__full-name">
              20th Congres International des Musees d'Agriculture -- International Association of
              Agricultural Museums (AIMA) 20th Congress, held for the first time in Asia and in India.
            </div>
          </div>

          <div className={`reveal reveal-delay-2${vis ? " visible" : ""}`}>
            <div className="tag-badge on-light conference__theme-tag">Theme: Agriculture -- A Living Tradition</div>
            <h2 className="display-lg conference__heading" style={{ marginBottom: "1.4rem" }}>
              {copy.heading[0]}<br /><em>{copy.heading[1]}</em>
            </h2>
            <p className="conference__body">
              {copy.body1}
            </p>
            <p className="conference__body">
              {copy.body2}
            </p>
            <p className="conference__body">
              {copy.body3}
            </p>
            <div className="conference__btn-row">
              <a href="https://www.agriculturalmuseums.org/2023/01/31/20th-aima-conference-in-india-13-18-october-2023/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
                AIMA 2023 Conference Details
                <ArrowRight size={16} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        <div className={`reveal reveal-delay-2${vis ? " visible" : ""}`} style={{ marginBottom: "3rem" }}>
          <h3 className="display-lg" style={{ fontSize: "1.4rem", marginBottom: "1.6rem" }}>CIMA '23 -- Session Themes</h3>
          <div className="heritage__phases" style={{ marginBottom: 0 }}>
            {themes.map((t) => (
              <div className="heritage__phase" key={t.tag}>
                <div className="heritage__phase-num">{t.tag}</div>
                <div className="heritage__phase-body">
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`agenda reveal reveal-delay-3${vis ? " visible" : ""}`}>
          <div className="agenda__header">
            <h3>Conference Agenda</h3>
            <span>6-Day Programme</span>
          </div>
          <div className="agenda__days">
            {days.map((d, i) => {
              const isOpen = i === openDay;
              const panelId = `conference-day-${i + 1}`;

              return (
                <div className={`agenda__day${isOpen ? " is-open" : ""}`} key={d.label}>
                  <button
                    className="agenda__day-toggle"
                    type="button"
                    onClick={() => setOpenDay(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="agenda__day-heading">
                      <strong>{d.label}</strong>
                      <span>{d.date} · {d.venue}</span>
                    </span>
                    <ChevronDown size={20} strokeWidth={2} aria-hidden="true" />
                  </button>
                  <div className="agenda__day-panel" id={panelId} aria-hidden={!isOpen}>
                    <div className="agenda__day-panel-inner">
                      {d.sessions.map((s, sessionIndex) => (
                        <div className="agenda__row" key={sessionIndex}>
                          <div className="agenda__time">{s.h}</div>
                          <div className="agenda__content">
                            {s.items.map((it, itemIndex) => <p key={itemIndex}>{it}</p>)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`reveal reveal-delay-3${vis ? " visible" : ""}`} style={{ marginTop: "4rem" }}>
          <div className="tag-badge on-light">SANGAM's Objectives for the Conference</div>
          <div className="heritage__projects conference__outcomes-grid">
            {outcomes.map((o, i) => (
              <article className="heritage-card card" key={i}>
                <p className="heritage-card__desc" style={{ marginBottom: 0 }}>{o}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={`reveal reveal-delay-3${vis ? " visible" : ""}`} style={{ marginTop: "3.5rem" }}>
          <div className="tag-badge on-light">Key Participants</div>
          <p className="conference__body" style={{ maxWidth: 820 }}>
            Faculty of agricultural universities, professionals of museums and heritage centres,
            social scientists, policy makers, students, members of agriculture and rural
            development NGOs, farmers' organisations, and interested members of the public.
          </p>
        </div>

        <div className={`reveal reveal-delay-3${vis ? " visible" : ""}`} style={{ marginTop: "1.5rem" }}>
          <div className="tag-badge on-light">Partners of the Conference</div>

          <div className="conference__partner-logos">
            <img src="/conference-partners.jpeg" alt="The Heritage Foundation, Shoolini University, Punjab Agricultural University and INTACH logos" />
          </div>

          <h4 style={{ fontFamily: "Fraunces, serif", fontWeight: 700, color: "var(--near-black)", margin: "1rem 0 0.8rem" }}>Co-Organisers</h4>
          <div className="heritage__projects conference__partners-grid">
            {partners.co.map((p, i) => (
              <article className="heritage-card card" key={i}>
                <h3 className="heritage-card__title" style={{ fontSize: "1rem" }}>{p.name}</h3>
                <p className="heritage-card__desc">{p.desc}</p>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="prog-card__link" style={{ marginTop: "0.7rem" }}>
                    Visit website <ExternalLink size={13} strokeWidth={2} />
                  </a>
                )}
              </article>
            ))}
          </div>
          <h4 style={{ fontFamily: "Fraunces, serif", fontWeight: 700, color: "var(--near-black)", margin: "2rem 0 0.8rem" }}>Knowledge Partners</h4>
          <div className="heritage__projects conference__knowledge-grid">
            {partners.knowledge.map((p, i) => (
              <article className="heritage-card card" key={i}>
                <h3 className="heritage-card__title" style={{ fontSize: "1rem" }}>{p.name}</h3>
                <p className="heritage-card__desc">{p.desc}</p>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="prog-card__link" style={{ marginTop: "0.7rem" }}>
                    Visit website <ExternalLink size={13} strokeWidth={2} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className={`reveal reveal-delay-3${vis ? " visible" : ""}`} style={{ marginTop: "3.5rem" }}>
          <div className="conference-editorial-gallery">
            <div className="conference-editorial-gallery__header">
              <div className="conference-editorial-gallery__eyebrow">Photo Gallery</div>
              <div className="conference-editorial-gallery__title-wrap">
                <h3 className="conference-editorial-gallery__title">Moments from CIMA 2023</h3>
                <p className="conference-editorial-gallery__text">
                  Photos of the conference, including the photos of field visits, exhibitions, and pictures of speakers and partners.
                </p>
              </div>
            </div>

            <div className="conference-editorial-gallery__layout">
              <button type="button" className="conference-editorial-gallery__feature" onClick={() => openImage(0)} aria-label="Open featured CIMA image">
                <img src={conferenceGalleryImages[0].src} alt={conferenceGalleryImages[0].alt} loading="lazy" />
                <span className="conference-editorial-gallery__feature-overlay" />
              </button>

              <div className="conference-editorial-gallery__stack">
                {conferenceGalleryImages.slice(1, 5).map((image, index) => (
                  <button key={`${image.src}-${index}`} type="button" className="conference-editorial-gallery__tile" onClick={() => openImage(index + 1)} aria-label={`Open gallery image ${index + 2}`}>
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    <span className="conference-editorial-gallery__tile-overlay" />
                  </button>
                ))}
              </div>
            </div>

            <div className="conference-editorial-gallery__strip">
              {conferenceGalleryImages.slice(5).map((image, index) => (
                <button key={`${image.src}-${index}`} type="button" className="conference-editorial-gallery__strip-item" onClick={() => openImage(index + 5)} aria-label={`Open gallery image ${index + 6}`}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {selectedImageIndex !== null && (
          <div className="conference-gallery-lightbox" onClick={closeImage} role="dialog" aria-modal="true">
            <div className="conference-gallery-lightbox__panel" onClick={(event) => event.stopPropagation()}>
              <button type="button" className="conference-gallery-lightbox__close" onClick={closeImage} aria-label="Close image preview">×</button>
              <button type="button" className="conference-gallery-lightbox__nav conference-gallery-lightbox__nav--prev" onClick={showPreviousImage} aria-label="Previous image">‹</button>
              <img src={conferenceGalleryImages[selectedImageIndex].src} alt={conferenceGalleryImages[selectedImageIndex].alt} />
              <button type="button" className="conference-gallery-lightbox__nav conference-gallery-lightbox__nav--next" onClick={showNextImage} aria-label="Next image">›</button>
            </div>
          </div>
        )}

        <div className={`reveal reveal-delay-3${vis ? " visible" : ""}`} style={{ marginTop: "4rem" }}>
          <div className="tag-badge on-light"><Film size={13} /> Film Festival CIMA'23</div>
          <p className="conference__body" style={{ maxWidth: 780 }}>
            Multiple movies and films were screened over the course of the conference -- documenting
            agriculture, climate resilience, and rural life across South Asia. Running times for
            these six films will be added shortly.
          </p>
          <div className="conference-video-grid">
            {films.map((f, i) => {
              const videoId = getYouTubeId(f.link);
              return (
                <a key={i} href={f.link} target="_blank" rel="noopener noreferrer" className="conference-video-card">
                  <div className="conference-video-card__thumb">
                    {videoId ? (
                      <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={f.title} />
                    ) : (
                      <div className="conference-video-card__placeholder">Watch video</div>
                    )}
                    <span className="conference-video-card__play"><ExternalLink size={16} strokeWidth={2} /></span>
                  </div>
                  <div className="conference-video-card__body">
                    <div className="conference-video-card__meta">
                      <span className="conference-video-card__subject">Duration TBD</span>
                    </div>
                    <h3>{f.title}</h3>
                    <p>{f.by}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className={`reveal reveal-delay-3${vis ? " visible" : ""}`} style={{ marginTop: "4rem" }}>
          <div className="tag-badge on-light"><Images size={13} /> Glimpse of the Conference</div>
          <p className="conference__body" style={{ maxWidth: 780 }}>
            The gallery below brings together images from across the six days of CIMA 2023, including
            inaugural sessions, parallel tracks, the cultural evening, and the closing field visit to Punjab.
          </p>
        </div>

        <div className={`reveal reveal-delay-3${vis ? " visible" : ""}`} style={{ marginTop: "4rem" }}>
          <div className="tag-badge on-light">Sponsors</div>
          <div className="heritage__projects conference__partners-grid">
            {sponsors.map((s, i) => (
              <article className="heritage-card card" key={i}>
                <h3 className="heritage-card__title" style={{ fontSize: "1rem" }}>{s}</h3>
              </article>
            ))}
          </div>
        </div>

        <div className={`conference__sps-films reveal reveal-delay-3${vis ? " visible" : ""}`} style={{ marginTop: "3.5rem" }}>
          <div className="tag-badge on-light"><Film size={13} /> SPS Community Media -- Short Films</div>
          <p className="conference__body" style={{ maxWidth: 780 }}>
            Short films made and presented by SPS Community Media, screened at the CIMA Conference.
          </p>
          <div className="conference-video-grid">
            {spsFilms.map((f, i) => {
              const videoId = getYouTubeId(f.link);
              return (
                <a key={i} href={f.link} target="_blank" rel="noopener noreferrer" className="conference-video-card">
                  <div className="conference-video-card__thumb">
                    {videoId ? (
                      <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={f.title} />
                    ) : (
                      <div className="conference-video-card__placeholder">Watch video</div>
                    )}
                    <span className="conference-video-card__play"><ExternalLink size={16} strokeWidth={2} /></span>
                  </div>
                  <div className="conference-video-card__body">
                    <div className="conference-video-card__meta">
                      <span className="conference-video-card__subject">{f.subject}</span>
                      <span>{f.duration}</span>
                    </div>
                    <h3>{f.title}</h3>
                    <p>{f.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
