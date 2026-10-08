// Build version: shown on the title screen. Raised with every build ("zet het online").
const GAME_VERSION='v0.1 demo';
// Swipe & Lobby — all game content in one place.
// The game (index.html) and the control room (regiekamer.html) both read this file.
// Effects are always [Economy, Climate, Trust, Corporate Power].
const STATS=[
  {k:'eco',ico:'💰',lbl:'Economy'},
  {k:'clim',ico:'🌍',lbl:'Climate'},
  {k:'trust',ico:'🤝',lbl:'Trust'},
  {k:'corp',ico:'🏢',lbl:'Corp. Power'}
];
const SECTORS={
  AGRO:{c:'#c9b23a',g:'🌾',t:'AGROCHEM'}, AUTO:{c:'#d64541',g:'🚗',t:'AUTO'}, TECH:{c:'#5b8def',g:'💻',t:'TECH'},
  MUSIC:{c:'#a874d6',g:'🎵',t:'MUSIC'}, GAS:{c:'#f08a3c',g:'🔥',t:'ENERGY'}, PLAST:{c:'#f2c94c',g:'🥤',t:'PACKAGING'},
  FARM:{c:'#2f7a35',g:'🚜',t:'FARMING'}, BIZ:{c:'#9a9a9a',g:'🏭',t:'INDUSTRY'}, BANK:{c:'#4fa3a5',g:'🏦',t:'BANKING'},
  TEL:{c:'#56c1e8',g:'📡',t:'TELECOM'}, FOOD:{c:'#e07aa0',g:'🍫',t:'FOOD'}, TOB:{c:'#a68b5b',g:'🚬',t:'TOBACCO'},
  GIG:{c:'#ff7a59',g:'🛵',t:'PLATFORM'}, STEEL:{c:'#8fa3b5',g:'⚙️',t:'STEEL'}, WOOD:{c:'#b07a4a',g:'🌳',t:'COMMODITIES'}, FOREIGN:{c:'#c27a96',g:'🌐',t:'FOREIGN'}, GAMES:{c:'#e86fb0',g:'🎮',t:'GAMES'}, DEF:{c:'#8a9a5b',g:'🛡️',t:'DEFENCE'}, TRAIN:{c:'#a7c7c1',g:'☕',t:'PRACTICE'}, OFFICE:{c:'#7a8f8c',g:'🕯️',t:'OFFICE'}
};
const eli=p=>'https://eur-lex.europa.eu/eli/'+p+'/oj';
// L = reject, R = approve. eu: what the EU actually did with the request.
const CARDS=[
{id:'weedkiller-for-15-more-years',org:'Monsanto',sector:'AGRO',year:'2017',name:'Dr. Harald Weedburn',role:'Director of Regulatory Affairs',
 title:'Weedkiller for 15 more years',ask:'"Renew the licence for our weedkiller for fifteen years. European farmers can’t do without it, and our science is solid."',
 L:[-8,8,5,-10],R:[8,-10,-8,12],eu:'M',
 who:'Monsanto (part of Bayer since 2018) and the Glyphosate Task Force, a coalition of glyphosate (Roundup) producers.',
 what:'In November 2017 the member states renewed the approval for five years instead of fifteen. Germany’s agriculture minister voted yes, against his own coalition agreement. In November 2023 another ten years followed.',
 impact:'The "Monsanto Papers" showed the company had helped write studies. Bayer took over Monsanto and in 2020 agreed a settlement of around $10 billion with US cancer patients. EU agencies consider glyphosate not carcinogenic; the WHO’s cancer agency IARC called it "probably carcinogenic" in 2015.',
 src:[['Implementing Regulation (EU) 2017/2324',eli('reg_impl/2017/2324')],['Implementing Regulation (EU) 2023/2660',eli('reg_impl/2023/2660')]]},
{id:'a-little-slack-in-the-road-test',org:'ACEA (car lobby)',sector:'AUTO',year:'2015',name:'Klaus Dieselhoff',role:'Head of Emissions Policy, car industry',
 title:'A little slack in the road test',ask:'"In the real world a diesel simply emits more than in the lab. Let us exceed the NOx limit on the road by up to 2.1 times."',
 L:[-8,8,8,-10],R:[8,-12,-10,10],eu:'R',
 who:'Car lobby ACEA and member states with big carmakers, just weeks after the Volkswagen diesel scandal broke.',
 what:'In October 2015 the member states agreed a "conformity factor" of 2.1 from 2017 and 1.5 from 2020: cars could emit well above the limit in real-world tests.',
 impact:'Paris, Brussels and Madrid went to court, and the EU General Court annulled the factors in 2018. The Court of Justice overturned that ruling in 2022 because the cities lacked standing. Dieselgate cost Volkswagen more than €30 billion.',
 src:[['Regulation (EU) 2016/646',eli('reg/2016/646')]]},
{id:'privacy-but-flexible',org:'Google & Facebook',sector:'TECH',year:'2013',name:'Megan Cookiesworth',role:'EU Public Policy Lead, Silicon Valley',
 title:'Privacy, but flexible',ask:'"Let us process personal data on the basis of our \'legitimate interest\'. Asking consent for everything makes free services impossible."',
 L:[-4,0,12,-10],R:[6,0,-12,12],eu:'L',
 who:'US tech companies, US trade associations and the US government. The European Parliament had to process almost 4,000 amendments, a record.',
 what:'The GDPR was adopted in 2016 and has applied since 25 May 2018, with fines of up to 4% of global turnover. The main attempts to weaken it failed.',
 impact:'Meta was fined €1.2 billion in 2023 for transferring data to the US. In November 2025 the Commission proposed loosening some rules after all in its "Digital Omnibus", including for AI training.',
 src:[['Regulation (EU) 2016/679 (GDPR)',eli('reg/2016/679')]]},
{id:'make-platforms-pay',org:'IFPI (music industry)',sector:'MUSIC',year:'2018',name:'Sophie Royaltée',role:'Director, European music industry',
 title:'Make platforms pay',ask:'"YouTube makes billions from our music. Make platforms liable for every upload that infringes copyright."',
 L:[-2,0,4,6],R:[3,0,-6,-4],eu:'R',
 who:'The music industry (IFPI), publishers and collecting societies, against Google/YouTube, which ran its own campaign against the proposal.',
 what:'The Copyright Directive was adopted in April 2019. Article 17 (formerly "Article 13") makes large platforms liable for uploaded content.',
 impact:'More than 5 million people signed a petition, and in March 2019 tens of thousands marched against "upload filters". Poland challenged the article; in 2022 the Court of Justice upheld it, provided free expression is safeguarded.',
 src:[['Directive (EU) 2019/790',eli('dir/2019/790')]]},
{id:'no-gatekeeper-law',org:'Apple',sector:'TECH',year:'2021',name:'Daniel Appleby',role:'Head of Competition Policy',
 title:'No gatekeeper law',ask:'"European consumers love our free apps and app stores. Drop the gatekeeper rules; self-regulation works."',
 L:[-2,0,8,-12],R:[4,0,-8,14],eu:'L',
 who:'Apple, Google, Meta, Amazon and Microsoft. According to Corporate Europe Observatory and LobbyControl, the tech sector spends around €151 million a year lobbying in Brussels; Meta is the biggest spender at €10 million.',
 what:'The Digital Markets Act was adopted in 2022. Since March 2024, designated gatekeepers must allow alternative app stores and choice screens, among other things.',
 impact:'In April 2025 Apple (€500 million) and Meta (€200 million) received the first DMA fines. The US has since called the rules a trade barrier.',
 src:[['Regulation (EU) 2022/1925 (DMA)',eli('reg/2022/1925')]]},
{id:'let-us-regulate-ai-ourselves',org:'Mistral AI',sector:'TECH',year:'2023',name:'Arthur Promptier',role:'Founder, AI start-up',
 title:'Let us regulate AI ourselves',ask:'"Binding rules for large AI models will kill European innovation. Give us voluntary codes of conduct."',
 L:[-6,0,6,-8],R:[8,-2,-8,10],eu:'M',
 who:'Mistral AI and Aleph Alpha, backed by France, Germany and Italy. OpenAI also lobbied for lighter rules on "general purpose AI".',
 what:'The AI Act (2024) did include obligations for large AI models, but lighter than Parliament wanted. The details are worked out in a voluntary code of practice.',
 impact:'The rules for AI models have applied since August 2025. In November 2025 the Commission proposed delaying the rules for high-risk AI uses.',
 src:[['Regulation (EU) 2024/1689 (AI Act)',eli('reg/2024/1689')]]},
{id:'a-second-pipe-under-the-baltic',org:'Gazprom',sector:'GAS',year:'2018',name:'Viktor Pipelinov',role:'Pipeline Project Director',
 title:'A second pipe under the Baltic',ask:'"Our pipeline brings Europe cheap gas. Keep it outside the EU gas market rules; it’s a commercial project."',
 L:[-8,4,6,-6],R:[10,-8,-8,10],eu:'M',
 who:'Gazprom, with European financiers Uniper, Wintershall, OMV, Engie and Shell. Former German chancellor Gerhard Schröder chaired the board.',
 what:'The EU did not block the pipeline, but in 2019 it extended the gas directive to pipelines from third countries. Germany halted certification in February 2022, just before Russia invaded Ukraine.',
 impact:'Nord Stream 2 never went into operation and was blown up in September 2022. Uniper got into such trouble that the German state took it over.',
 src:[['Directive (EU) 2019/692',eli('dir/2019/692')]]},
{id:'natural-gas-is-green-too',org:'Eurogas',sector:'GAS',year:'2022',name:'Isabelle Greenwasher',role:'Secretary-General, energy federation',
 title:'Natural gas is green too',ask:'"The energy transition won’t work without gas and nuclear. Label them as sustainable investments in the taxonomy."',
 L:[-6,6,4,-6],R:[8,-8,-6,8],eu:'R',
 who:'The gas industry (Eurogas), the nuclear sector led by France, and member states with gas plants.',
 what:'The Commission added gas and nuclear to the taxonomy in 2022. An objection in the European Parliament failed (278 for, 328 against).',
 impact:'Austria went to court, but the EU General Court dismissed the case in September 2025. Investment funds may call these projects "sustainable".',
 src:[['Delegated Regulation (EU) 2022/1214',eli('reg_del/2022/1214')]]},
{id:'save-the-straw',org:'PlasticsEurope',sector:'PLAST',year:'2018',name:'Marco Plasticelli',role:'Spokesperson, plastics industry',
 title:'Save the straw',ask:'"A ban on disposable straws and cutlery hits thousands of jobs. Invest in recycling instead."',
 L:[-4,8,6,-6],R:[5,-8,-6,8],eu:'L',
 who:'PlasticsEurope, plastics converters (EuPC) and packaging producers.',
 what:'The Single-Use Plastics Directive was adopted in 2019. Since 3 July 2021, plastic straws, cutlery, plates, stirrers, cotton buds and polystyrene cups have been banned.',
 impact:'The ban targeted the ten items most often found on European beaches, together about 70% of marine litter. Since July 2024, caps stay attached to bottles.',
 src:[['Directive (EU) 2019/904',eli('dir/2019/904')]]},
{id:'ditch-the-reusable-cup',org:'McDonald’s',sector:'PLAST',year:'2023',name:'Charlotte Throwaway',role:'Public Affairs, paper packaging',
 title:'Ditch the reusable cup',ask:'"Reusable takeaway containers are unhygienic and worse for the climate. Let us use paper."',
 L:[-4,6,4,-6],R:[6,-6,-4,8],eu:'R',
 who:'Fast-food chains such as McDonald’s and the European Paper Packaging Alliance, which funded studies portraying reusable packaging as worse.',
 what:'Most hard reuse targets for takeaway were dropped from the Packaging Regulation (2025). From 2028, outlets must accept customers’ own containers.',
 impact:'Single-use packaging for eating in will be restricted from 2030, but disposable paper packaging remains the norm for takeaway.',
 src:[['Regulation (EU) 2025/40',eli('reg/2025/40')]]},
{id:'scrap-the-nature-restoration-law',org:'Copa-Cogeca',sector:'FARM',year:'2023',name:'Jan-Willem Trekkersma',role:'Policy Adviser, farmers’ federation',
 title:'Scrap the nature restoration law',ask:'"This law costs farmland and threatens our food security. Withdraw it."',
 L:[-4,10,2,-6],R:[6,-10,-4,8],eu:'L',
 who:'Farm lobby Copa-Cogeca, backed by the EPP group, which campaigned against the law. This coincided with large farmer protests.',
 what:'The Nature Restoration Law was adopted on 17 June 2024 after Austrian minister Leonore Gewessler voted in favour, defying her chancellor. Goal: restore 20% of EU land and sea by 2030.',
 impact:'The farming provisions were watered down. Member states must draw up national restoration plans.',
 src:[['Regulation (EU) 2024/1991',eli('reg/2024/1991')]]},
{id:'trim-the-supply-chain-law',org:'BusinessEurope',sector:'BIZ',year:'2025',name:'Thomas Loopholt',role:'Director, employers’ federation',
 title:'Trim the supply chain law',ask:'"Europe is losing competitiveness. Limit the supply chain law to the very largest companies and scrap the mandatory climate plans."',
 L:[-6,4,6,-8],R:[8,-6,-6,10],eu:'R',
 who:'BusinessEurope, US oil companies such as ExxonMobil, the US government and Qatar, which threatened to cut LNG deliveries.',
 what:'In the Omnibus I deal of December 2025, the supply chain law was limited to companies with more than 5,000 employees and €1.5 billion turnover. The obligation to adopt a climate transition plan was dropped.',
 impact:'The number of companies covered falls sharply, and the rules only apply from 2029. Human rights groups say the law has been hollowed out.',
 src:[['Directive (EU) 2024/1760 (CSDDD)',eli('dir/2024/1760')]]},
{id:'no-cap-on-bonuses',org:'AFME (banks)',sector:'BANK',year:'2013',name:'Edward Bonusworth',role:'Managing Director, banking association',
 title:'No cap on bonuses',ask:'"A bonus cap will drive the best talent to New York and Singapore. Let the market set pay."',
 L:[-4,0,10,-8],R:[6,0,-10,10],eu:'L',
 who:'Big banks via AFME, backed by the UK government and the City of London.',
 what:'Since 2014, EU bonuses may be at most 100% of fixed salary (200% with shareholder approval). The UK went to court and later dropped the case.',
 impact:'Banks raised fixed salaries. After Brexit, the UK scrapped the cap in 2023.',
 src:[['Directive 2013/36/EU (CRD IV)',eli('dir/2013/36')]]},
{id:'keep-roaming-charges',org:'ETNO (telecom)',sector:'TEL',year:'2015',name:'Pilar Roamero',role:'Head of Regulation, telecom operator',
 title:'Keep roaming charges',ask:'"Roaming fees pay for our networks. Without that income, prices at home will go up."',
 L:[2,0,12,-8],R:[4,0,-10,8],eu:'L',
 who:'Telecom federations ETNO and GSMA and the big operators.',
 what:'Since 15 June 2017, "Roam like at home" applies: calls and data in the EU at your home rate. In 2022 it was extended to 2032.',
 impact:'Mobile data use abroad soared. Operators may still apply a fair use limit.',
 src:[['Regulation (EU) 2022/612',eli('reg/2022/612')]]},
{id:'no-traffic-light-on-the-label',org:'CIAA (food industry)',sector:'FOOD',year:'2010',name:'Hélène Sucrebois',role:'Director, food industry federation',
 title:'No traffic light on the label',ask:'"A red label on chocolate and cheese stigmatises ordinary products. Stick to a neutral table."',
 L:[-4,0,8,-6],R:[6,0,-8,8],eu:'R',
 who:'The European food industry (CIAA, now FoodDrinkEurope). Corporate Europe Observatory estimated the lobbying campaign at €1 billion.',
 what:'In June 2010 the European Parliament voted against a mandatory "traffic light" label. The 2011 food labelling regulation contains no colour coding.',
 impact:'Countries then chose their own systems, such as Nutri-Score. The Commission promised an EU-wide front-of-pack label by 2022 but never tabled a proposal.',
 src:[['Regulation (EU) 1169/2011',eli('reg/2011/1169')]]},
{id:'keep-the-neonicotinoids',org:'Bayer & Syngenta',sector:'AGRO',year:'2018',name:'Dr. Felix Buzzkill',role:'Scientific Adviser, crop protection',
 title:'Keep the neonicotinoids',ask:'"There’s no conclusive proof our seed coating kills bees. A ban will cost farmers their harvest."',
 L:[-6,8,4,-6],R:[6,-8,-6,8],eu:'L',
 who:'Bayer and Syngenta, producers of neonicotinoid insecticides.',
 what:'After a partial restriction in 2013, the EU banned outdoor use of three neonicotinoids in 2018, once EFSA confirmed the risk to bees.',
 impact:'Bayer and Syngenta lost their court cases (General Court 2018, Court of Justice 2021). Member states kept issuing "emergency authorisations" for years; the Court ruled those unlawful in 2023.',
 src:[['Implementing Regulation (EU) 2018/783',eli('reg_impl/2018/783')]]},
{id:'no-shock-photos',org:'Philip Morris',sector:'TOB',year:'2013',name:'Richard Smokeswell',role:'Vice-President Corporate Affairs',
 title:'No shock photos',ask:'"Gruesome photos on 65% of the pack help nobody. Stick to a small text warning."',
 L:[-2,0,10,-6],R:[4,0,-10,8],eu:'L',
 who:'Philip Morris International. Leaked documents showed a campaign targeting hundreds of MEPs. EU Commissioner Dalli resigned in 2012 after a fraud investigation linked to snus lobbying.',
 what:'The 2014 Tobacco Products Directive requires combined picture warnings on 65% of the front and back. Menthol cigarettes have been banned since May 2020.',
 impact:'The tobacco industry challenged the directive at the Court of Justice and lost in 2016.',
 src:[['Directive 2014/40/EU',eli('dir/2014/40')]]},
{id:'save-the-combustion-engine',org:'ACEA (carmakers)',sector:'AUTO',year:'2025',name:'Sabine Vroomberg',role:'Director of Policy, carmaker',
 title:'Save the combustion engine',ask:'"Electric cars are selling too slowly and China dominates batteries. Scrap the 2035 ban on new petrol cars."',
 L:[-6,10,2,-8],R:[8,-12,-4,10],eu:'M',
 who:'German and Italian carmakers, car lobby ACEA and the German government. In 2023 Germany’s FDP had already forced an exemption for e-fuels.',
 what:'The 2023 law requires a 100% CO2 cut for new cars by 2035. On 17 December 2025 the Commission proposed lowering that to 90%, offset with green steel, e-fuels or biofuels.',
 impact:'Plug-in hybrids and combustion engines can stay after 2035 if the proposal passes. Parliament and Council still have to decide.',
 src:[['Regulation (EU) 2023/851',eli('reg/2023/851')]]},
{id:'couriers-are-entrepreneurs',org:'Uber',sector:'GIG',year:'2022',name:'Lucas Gigsworth',role:'Head of EU Public Policy, ride-hailing',
 title:'Couriers are entrepreneurs',ask:'"Our drivers want flexibility. Write into law that platform workers are self-employed."',
 L:[-4,0,8,-8],R:[6,0,-8,10],eu:'M',
 who:'Uber, Bolt, Deliveroo and lobby group Delivery Platforms Europe. The Uber Files (2022) revealed that former EU Commissioner Neelie Kroes had informally helped Uber.',
 what:'The Platform Work Directive (2024) contains a presumption of employment, but member states set the criteria themselves. That is weaker than the original proposal.',
 impact:'Member states must transpose the directive by the end of 2026. It is also the first EU law to regulate algorithmic management of workers.',
 src:[['Directive (EU) 2024/2831',eli('dir/2024/2831')]]},
{id:'free-co2-allowances',org:'Eurofer (steel)',sector:'STEEL',year:'2018',name:'Wolfgang Smelterhaus',role:'Director of Climate & Energy, steel federation',
 title:'Free CO2 allowances',ask:'"If we have to pay for our emissions, the blast furnaces move to China. Keep giving us free emission allowances."',
 L:[-8,8,2,-8],R:[8,-8,-4,8],eu:'R',
 who:'Steel federation Eurofer, the cement industry and other energy-intensive sectors.',
 what:'Heavy industry has received a large share of its emission allowances for free since 2005. Only with the carbon border levy (CBAM, 2023) are they phased out between 2026 and 2034.',
 impact:'Research by CE Delft calculated tens of billions of euros in "windfall profits": companies passed the carbon price on to customers but got the allowances for free.',
 src:[['Regulation (EU) 2023/956 (CBAM)',eli('reg/2023/956')]]},
{id:'delay-the-deforestation-law',org:'Cocoa & palm oil traders',sector:'WOOD',year:'2025',name:'Ana Chopwood',role:'Trade Director, cocoa & palm oil',
 title:'Delay the deforestation law',ask:'"Our suppliers in the tropics can’t prove every bean is deforestation-free. Give us more time."',
 L:[-4,8,4,-6],R:[6,-8,-4,8],eu:'R',
 who:'Agribusiness, the timber and paper trade, producer countries and the US. Member states also pushed for a delay.',
 what:'The Deforestation Regulation (2023) was postponed twice: at the end of 2024 and the end of 2025. It now applies from 31 December 2026 for large companies and mid-2027 for small ones.',
 impact:'A new review was scheduled for April 2026 that could weaken the rules further. Meanwhile, imported deforestation keeps coming in.',
 src:[['Regulation (EU) 2023/1115 (EUDR)',eli('reg/2023/1115')]]},
{id:'no-register-for-foreign-lobbying',org:'A consultancy for foreign governments',added:'2026-10-07',sector:'FOREIGN',year:'2025',name:'Sir Reginald Proxyworth',role:'Senior Partner, “strategic communications” firm',
 title:'No register for foreign lobbying',ask:'"Our clients are friendly governments from outside the EU. A public register would only scare them off. Can’t we keep this between friends?"',
 L:[-2,0,8,-6],R:[4,0,-10,6],eu:'L',
 who:'Consultancies, PR agencies and law firms that work for governments outside the EU, and the countries that hire them.',
 what:'In December 2023 the Commission proposed a directive requiring anyone who lobbies on behalf of a non-EU country to register publicly. The European Parliament backed it in November 2025 (392 for, 88 against, 133 abstentions). The member states were still negotiating their position, so the law is not in force yet.',
 impact:'The proposal also covers private companies whose actions can be attributed to a foreign government. Diplomacy, legal advice and independent research are excluded. Critics warn it must not stigmatise NGOs with foreign funding.',
 src:[['EPRS: Legislation in progress','https://epthinktank.eu/2024/05/22/making-representation-of-third-countries-interests-more-transparent-eu-legislation-in-progress/'],['Council compromise text 14580/25','https://data.consilium.europa.eu/doc/document/ST-14580-2025-INIT/en/pdf']]},
{id:'buy-european-weapons',react:'war',added:'2026-10-07',org:'ASD (Aerospace, Security and Defence Industries Association)',sector:'DEF',year:'2025',name:'Colonel Ammo Budgetson',role:'Director of Government Affairs, defence industry association',
 title:'Cheap loans for European weapons',ask:'"You saw the news, {name}. Europe must rearm, fast. Lend member states billions for weapons, and make sure they buy them from us, not from the Americans."',
 L:[-3,1,3,-6],R:[4,-2,-3,7],eu:'R',
 who:'Arms makers and their association ASD. From June 2024 to June 2025, defence lobbyists held 197 meetings with MEPs, against 78 in the whole previous five-year term. The seven largest defence firms spent up to €5.5 million on EU lobbying in 2023, 34% more than the year before.',
 what:'On 27 May 2025 the Council adopted SAFE (Security Action for Europe): €150 billion in loans for joint defence procurement. At least 65% of the value of the weapons must come from the EU, the EEA or Ukraine.',
 impact:'Europe’s arms industry gets long-term orders and EU-backed loans. Peace and social organisations warn that the money may come at the expense of social and climate spending.',
 src:[['Council adopts SAFE (EEAS)','https://www.eeas.europa.eu/delegations/ukraine/safe-council-adopts-%E2%82%AC150-billion-boost-joint-procurement-european-security-and-defence_en'],['Euronews: defence lobbying surges','https://euronews.com/my-europe/2025/06/24/defence-sector-intensifies-lobbying-efforts-in-the-eu-parliament-new-data-shows']]},
{id:'more-money-for-riot-police',react:'riot',added:'2026-10-07',org:'Security-technology firms and police organisations',sector:'DEF',year:'2021',name:'Superintendent Ken Kettle',role:'Chair, security-equipment industry forum',
 title:'Riot gear from the EU budget',ask:'"After those riots, {name}, the police need more: drones, cameras, and yes, riot gear. Put it in the EU budget. Public order is a European matter."',
 L:[-1,0,3,-4],R:[2,0,-4,5],eu:'M',
 who:'Makers of surveillance and security equipment, and police organisations asking for EU funding.',
 what:'The Internal Security Fund 2021–2027 has €1.931 billion for police cooperation, fighting organised crime and terrorism. Equipment may be at most 35% of a country’s programme, and coercive equipment such as weapons, ammunition and riot sticks may not be funded, except for training.',
 impact:'EU money goes to information exchange, joint operations and training rather than batons and tear gas. Buying riot gear stays a national choice.',
 src:[['European Parliament: Internal Security Fund','https://www.europarl.europa.eu/legislative-train/theme-promoting-our-european-way-of-life/file-mff-internal-security-fund']]},
{id:'let-publishers-switch-off-games',org:'Video Games Europe',char:'suit',added:'2026-10-07',sector:'GAMES',year:'2026',name:'The Suit Guy',role:'Consultant for hire · today: the games industry',
 title:'Let publishers switch off games',ask:'"Reject that Stop Killing Games petition, {name}. Keeping old servers running costs money, fan servers are a legal minefield, and players buy a licence, not a game."',
 L:[-1,0,7,-5],R:[3,0,-8,6],eu:'M',
 who:'Video Games Europe, the trade association of the big game publishers. It argued that keeping games playable after support ends would be too expensive, and that fan-run private servers could create legal liabilities for companies.',
 what:'The citizens’ initiative “Stop Destroying Videogames” (Stop Killing Games) was submitted on 26 January 2026 with 1,294,188 verified signatures from 24 countries. After a Parliament hearing (16 April) and a plenary debate (21 May), the Commission replied on 16 June 2026 that it “cannot propose a legal obligation to keep video games playable” at this stage. Instead it will start talks on an industry code of conduct by the end of 2026, raise awareness of existing consumer rights and report on the digital content rules.',
 impact:'Games you paid for can still be switched off remotely, as Ubisoft did with The Crew in 2024. Whether a game keeps working after support ends now depends on voluntary promises from the industry.',
 src:[['Commission reply to the initiative','https://citizens-initiative.europa.eu/stop-destroying-videogames-commissions-reply-european-citizens-initiative_en'],['Initiative submitted (26 Jan 2026)','https://citizens-initiative.europa.eu/news/14th-valid-initiative-stop-destroying-videogames-submitted-commission-examination-2026-01-26_en']]},
// ---------- Crisis dossiers: no good way out. They come when things go too well for too long (and sometimes just because). ----------
{id:'close-the-border-to-ukrainian-grain',crisis:true,added:'2026-10-07',org:'Farmers’ unions of five border countries',sector:'FARM',year:'2023',name:'Bogdan Graanberg',role:'Spokesman, farmers of the eastern border',
 title:'Close the border to Ukrainian grain',quip:'I support Ukraine. Just not its wheat.',
 ask:'"Cheap Ukrainian grain is flooding our silos, {name}. Our prices have collapsed. Block it in our five countries, or we bring the tractors to Brussels."',
 L:[-5,0,-7,-4],R:[-4,0,-8,4],eu:'R',
 who:'Farmers in Poland, Hungary, Romania, Bulgaria and Slovakia, backed by their governments, after the EU scrapped import duties on Ukrainian goods to help Ukraine’s war economy.',
 what:'On 2 May 2023 the Commission allowed a temporary block: Ukrainian wheat, maize, rapeseed and sunflower seed could not be sold in the five countries, only travel through them. The measure was extended to 15 September 2023, with €100 million of extra support for farmers in the five countries on top of €56.3 million in March.',
 impact:'When the Commission let the block expire in September 2023, Poland, Hungary and Slovakia put up their own national bans anyway. Ukraine said it would take them to the WTO. A crisis with no good answer: help Ukraine, or your own farmers.',
 src:[['Implementing Regulation (EU) 2023/903',eli('reg_impl/2023/903')],['European Commission press release, 2 May 2023','https://ec.europa.eu/commission/presscorner/api/files/document/print/en/ip_23_2562/IP_23_2562_EN.pdf'],['EPRS: Ukrainian grain, understanding the import bans','https://epthinktank.eu/2023/09/20/ukrainian-grain-understanding-the-import-bans/']]},
{id:'cap-the-gas-price',crisis:true,added:'2026-10-07',org:'Fifteen freezing member states',sector:'GAS',year:'2022',name:'Minister Helga Heizmann',role:'Energy minister of a very cold member state',
 title:'Cap the gas price',quip:'My voters are wearing three jumpers. Indoors.',
 ask:'"Gas costs ten times what it did, {name}. Families can’t pay their bills. Put a ceiling on the price. Yes, the tankers might sail to Asia instead. Do it anyway."',
 L:[-6,0,-9,4],R:[-5,0,-4,-7],eu:'R',
 who:'A group of fifteen member states pushed for a cap during the 2022 energy crisis. Germany, the Netherlands and gas traders warned that a cap could chase LNG tankers away from Europe.',
 what:'In December 2022 the Council adopted a "market correction mechanism": from February 2023, trading in gas futures would be blocked above €180 per MWh if prices stayed that high and far above world LNG prices. It was extended once and ended on 31 January 2025.',
 impact:'The cap was never activated: prices never met the thresholds again. Supporters say it calmed the market; critics say it was a symbolic cap on a fire that had already gone out.',
 src:[['Council Regulation (EU) 2022/2578',eli('reg/2022/2578')],['ACER: Market Correction Mechanism','https://www.acer.europa.eu/gas/market-correction-mechanism'],['ACER: 31 January 2025 marks final day of the MCM','https://www.acer.europa.eu/news/31-january-2025-marks-final-day-market-correction-mechanism-mcm']]},
{id:'scrap-the-green-farm-rules',crisis:true,added:'2026-10-07',org:'Tractor blockade, Rue de la Loi',sector:'FARM',year:'2024',name:'Jean-Pierre Tracteur',role:'Leader of the tractor blockade',
 title:'Scrap the green farm rules',quip:'There are four hundred tractors outside. I counted them myself.',
 ask:'"Farmers are drowning in rules, {name}. Scrap the duty to leave land fallow for nature, and stop checking the small farms. Or we stay. With the manure."',
 L:[-4,0,-9,-3],R:[1,-9,-5,4],eu:'R',
 who:'Farmers protesting across Europe in early 2024 about low incomes, imports, Green Deal rules and paperwork, with tractor blockades in Brussels.',
 what:'In March 2024 the Commission proposed to drop the rule that farms keep at least 4% of arable land as fallow land or other non-productive area for nature, and to exempt farms up to 10 hectares from conditionality checks and penalties. There was no impact assessment or public consultation. Parliament and Council adopted it in May 2024.',
 impact:'Environmental groups such as BirdLife and WWF called it an attack on nature in farm policy. The protests calmed down; the rule for nature on farmland largely became voluntary.',
 src:[['Regulation (EU) 2024/1468',eli('reg/2024/1468')],['EPRS briefing: targeted review of the CAP (2024)','https://www.europarl.europa.eu/RegData/etudes/BRIE/2024/760414/EPRS_BRI(2024)760414_EN.pdf']]},
{id:'candles-for-the-archive',ritual:1,quest:'ghost',char:'ghost',added:'2026-10-07',org:'Facility management, 13th floor',sector:'OFFICE',year:'2026',name:'Gerard Loby',role:'Your predecessor (deceased)',
 title:'Candles for the archive',quip:'Thirteen is a lucky number. For me.',
 ask:'"The archive is so dark, {name}. Approve thirteen candles. Black ones, they’re cheaper. Purely for reading. Fire safety is overrated."',
 L:[0,0,-1,0],R:[0,0,2,0],eu:null,
 who:'The request came in on yellowed paper. The stamp is from 1987.',
 what:'There is no file on this one. The archive clerk refuses to go down there after six.'},
{id:'a-portrait-in-the-hall',ritual:2,quest:'ghost',char:'ghost',added:'2026-10-07',org:'Facility management, 13th floor',sector:'OFFICE',year:'2026',name:'Gerard Loby',role:'Your predecessor (deceased)',
 title:'A portrait of you in the hall',quip:'Every great Commissioner gets a portrait. Even the short-lived ones.',
 ask:'"Every Commissioner gets a portrait, {name}. Sign here so the painter can start. He needs a lock of your hair. Artistic thing. Don’t ask."',
 L:[0,0,-1,0],R:[1,0,2,0],eu:null,
 who:'The painter has no name, no website and no reflection.',
 what:'There is no file on this one. The hall already has a portrait of you. Nobody remembers hanging it.'},
{id:'sign-my-old-file',ritual:3,quest:'ghost',char:'ghost',added:'2026-10-07',org:'Facility management, 13th floor',sector:'OFFICE',year:'2026',name:'Gerard Loby',role:'Your predecessor (deceased)',
 title:'Close my old file',quip:'Then I can finally rest. Probably.',
 ask:'"A formality, {name}. Sign my old file so it can be closed, and I can finally rest. The ink is a little… red. It’s vintage."',
 L:[0,0,-1,0],R:[0,0,3,-1],eu:null,
 who:'The file is labelled “Transfer of office”. The handwriting is yours. You don’t remember writing it.',
 what:'There is no file on this one. Well, there is. That’s the problem.'},
{id:'say-my-name-three-times',ritual:4,quest:'ghost',char:'ghost',added:'2026-10-07',org:'Facility management, 13th floor',sector:'OFFICE',year:'2026',name:'Gerard Loby',role:'Your predecessor (deceased)',
 title:'An old Brussels tradition',quip:'Last thing, I promise. Then I’ll leave you alone. Forever.',
 ask:'"Tonight, stand in front of the big mirror on the 13th floor and say my name three times, {name}. Old Brussels tradition. Brings good luck. For one of us."',
 L:[0,0,-1,0],R:[2,0,2,0],eu:null,
 who:'Nobody has ever heard of this tradition. The mirror on the 13th floor was removed in 1987. It is back.',
 what:'There is no file on this one. Please don’t.'},
{id:'let-the-oak-stay',quest:'weed',added:'2026-10-07',org:'Friends of the Little Oak',sector:'WOOD',year:'2026',name:'Mr. Oakley Moss',role:'Volunteer, community garden',
 title:'Let the old oak stay',quip:'It’s a very nice tree. That’s all. Nothing else.',
 ask:'"There’s an old oak behind the Berlaymont, {name}. The new car park will cut it down. Just sign here and it stays. That’s all. Nobody will notice."',
 L:[0,-1,0,0],R:[-1,2,1,-1],eu:null,
 who:'Nobody seems to know who sent him. The visitor log just says “a friend of the oak”.',
 what:'There is no file on this one. The archive clerk shrugs: “Some requests don’t come through the official channels.”'},
];

// Lobbying power: figures from the EU Transparency Register via LobbyFacts.eu (retrieved 6 Oct 2026), plus research by Corporate Europe Observatory / LobbyControl / DeSmog.
const LF='https://lobbyfacts.eu/representative/';
const LOBBY={
 'Weedkiller for 15 more years':[{org:'Bayer AG',cost:'€6.0–6.5m',fte:'20',meet:'106',fy:'2025',url:LF+'4193629ab768429489b9f3d8e7a21e13/bayer-ag'}],
 'Keep the neonicotinoids':[{org:'Bayer AG',cost:'€6.0–6.5m',fte:'20',meet:'106',fy:'2025',url:LF+'4193629ab768429489b9f3d8e7a21e13/bayer-ag'}],
 'A little slack in the road test':[{org:'ACEA (car lobby)',cost:'€5.5–6.0m',fte:'19.5',meet:'362',fy:'2025',url:LF+'86a5950213e247c9b97d4d0b58a0bcad/association-des-constructeurs-europens-d-automobiles'}],
 'Save the combustion engine':[{org:'ACEA (car lobby)',cost:'€5.5–6.0m',fte:'19.5',meet:'362',fy:'2025',url:LF+'86a5950213e247c9b97d4d0b58a0bcad/association-des-constructeurs-europens-d-automobiles'}],
 'Privacy, but flexible':[{org:'Meta Platforms',cost:'€10m+',fte:'17',meet:'297',fy:'2025',url:'https://www.lobbyfacts.eu/datacard/meta-platforms-ireland-limited-and-its-various-subsidiaries?rid=28666427835-74',note:'Biggest lobbying budget of any company in Brussels.'}],
 'Make platforms pay':[{org:'Google (opposing side)',cost:'€5.5–6.0m',fte:'8.7',meet:'475',fy:'2025',url:'https://www.lobbyfacts.eu/datacard/google-ireland-limited-and-its-affiliates?rid=03181945560-59'}],
 'No gatekeeper law':[{org:'Apple',cost:'€8.0–9.0m',fte:'8.4',meet:'186',fy:'2024/25',url:'https://www.lobbyfacts.eu/datacard/apple-inc?rid=588327811384-96',note:'In 2011 Apple spent just €275,000.'},
   {org:'Google',cost:'€5.5–6.0m',fte:'8.7',meet:'475',fy:'2025',url:'https://www.lobbyfacts.eu/datacard/google-ireland-limited-and-its-affiliates?rid=03181945560-59'}],
 'Let us regulate AI ourselves':[{org:'Microsoft',cost:'€7m',fte:'–',meet:'–',fy:'2025',url:'https://www.lobbyfacts.eu/datacard/microsoft-corporation?rid=0801162959-21',note:'Mistral hired former French digital minister Cédric O and was in talks with investor Microsoft while lobbying for looser rules (MLex).'}],
 'A second pipe under the Baltic':[{org:'Nord Stream 2 AG',cost:'€0.45–0.55m/yr',fte:'1.25',meet:'17',fy:'2016–2020',url:LF+'8899ff36f0014d6796eab21f2b8a4a1f/nord-stream-2-ag',note:'Left the register on 13 May 2022.'}],
 'Natural gas is green too':[{org:'Eurogas',cost:'€0.7–0.8m',fte:'6.9',meet:'75',fy:'2025',url:LF+'736f643ba5fd4a988f27f94862639f54/eurogas-aisbl'}],
 'Save the straw':[{org:'Plastics Europe',cost:'€4.0–4.5m',fte:'15.2',meet:'67',fy:'2024',url:LF+'df373735f5694ccdb629d25ee9f469ca/plasticseurope'}],
 'Ditch the reusable cup':[{org:'McDonald’s & paper packagers',cost:'n/a',fte:'–',meet:'290+',fy:'2022–23',url:'https://www.desmog.com/2023/05/08/mcdonalds-leads-lobbying-offensive-against-laws-to-reduce-packaging-waste-in-europe/',note:'290+ meetings with MEPs versus 21 by NGOs; McDonald’s paid for a Kearney study against reuse (DeSmog).'}],
 'Scrap the nature restoration law':[{org:'Cogeca (part of Copa-Cogeca)',cost:'€0.7–0.8m',fte:'4.5',meet:'305',fy:'2025',url:LF+'9c01f4cda29341a2bb1c031fec6af86a/european-agri-cooperatives'}],
 'Trim the supply chain law':[{org:'BusinessEurope',cost:'€6.0–6.5m',fte:'34',meet:'626',fy:'2025',url:LF+'5154b37b6e0d410faa845848df291e92/businesseurope'},
   {org:'ExxonMobil',cost:'€4.0–4.5m',fte:'5.4',meet:'104',fy:'2025',url:LF+'0054adb6abae42b7baa2f889f183bae7/exxonmobil-petroleum-chemical'}],
 'No cap on bonuses':[{org:'AFME (banks)',cost:'€6.0–6.5m',fte:'17',meet:'124',fy:'2024/25',url:'https://www.lobbyfacts.eu/datacard/association-for-financial-markets-in-europe?rid=65110063986-76'}],
 'Keep roaming charges':[{org:'Connect Europe (ex-ETNO)',cost:'€1.5–1.75m',fte:'7.5',meet:'116',fy:'2025',url:LF+'2c337c622c4a4496ab1c91f722d7cfb7/european-telecommunications-network-operators-association'}],
 'No shock photos':[{org:'Philip Morris International',cost:'€2.75–3.0m',fte:'4.9',meet:'11',fy:'2025',url:LF+'cb85447517124eecb8071373a7a195f3/philip-morris-international-inc',note:'Peak: €5.1m in 2013, the very year of the Tobacco Directive.'}],
 'Couriers are entrepreneurs':[{org:'Uber',cost:'€1.25–1.5m',fte:'3.1',meet:'106',fy:'2025',url:LF+'d7380c54e2704c88b49b17b0b16590da/uber'}],
 'Free CO2 allowances':[{org:'Eurofer (steel)',cost:'€0.8–0.9m',fte:'2.1',meet:'253',fy:'2025',url:LF+'9ed0de316b01474ca5a43d39a60ff268/the-european-steel-association',note:'Small budget, but 253 top-level meetings with the Commission.'}]
};

const QUIPS={
 'No register for foreign lobbying':'My client sends his regards. And this caviar.',
 'Cheap loans for European weapons':'I don’t make the wars, {name}. I just make sure we’re ready for them. And invoiced.',
 'Riot gear from the EU budget':'Lovely office. Very defensible. Have you considered a water cannon?',
 'Let publishers switch off games':'Yesterday I represented a dairy cartel. Today: games. I don’t play them. I bill them.',
 'Weedkiller for 15 more years':'I brought coffee. And a study. I wrote it myself.',
 'A little slack in the road test':'Our diesels are spotless. Especially in the lab.',
 'Privacy, but flexible':'We already know what you’re going to say, {name}. Literally.',
 'Make platforms pay':'I wrote a song about you. All rights reserved.',
 'No gatekeeper law':'Nice phone, {name}. Technically, it’s ours.',
 'Let us regulate AI ourselves':'Our AI wrote this request. It thinks it’s very good.',
 'A second pipe under the Baltic':'Gas is like friendship: it flows as long as you don’t make trouble.',
 'Natural gas is green too':'Green is a feeling, not a colour.',
 'Save the straw':'Ever drunk a milkshake through a paper straw? Exactly.',
 'Ditch the reusable cup':'This leaflet is printed on recycled paper. Twelve copies each.',
 'Scrap the nature restoration law':'My tractor is parked outside. On the roundabout. In the middle of the roundabout.',
 'Trim the supply chain law':'Our supply chain is fully transparent. You just can’t see anything in it.',
 'No cap on bonuses':'Without a bonus nobody gets out of bed. Not even my butler.',
 'Keep roaming charges':'Calling from Spain is free. Apart from the bill.',
 'No traffic light on the label':'Chocolate comes from a bean. So it’s a vegetable.',
 'Keep the neonicotinoids':'Bees are overrated. Ever seen one build a factory?',
 'No shock photos':'I have a little gift for you, {name}. Open it at home.',
 'Save the combustion engine':'Hear that? Vroom. That’s the sound of freedom.',
 'Couriers are entrepreneurs':'I’m not a lobbyist. I’m an independent advocacy partner.',
 'Free CO2 allowances':'We’ll move to China, {name}. Just kidding. Unless you say no.',
 'Delay the deforestation law':'This rainforest was definitely still here yesterday. I have a photo.'
};
const SOCIETY={
 'Cheap loans for European weapons':'More weapons made in Europe means jobs and less dependence on others, but every euro spent on tanks is a euro not spent elsewhere.',
 'Riot gear from the EU budget':'Who pays for public order decides what it looks like: prevention and cooperation, or more equipment on the street.',
 'Let publishers switch off games':'More than 1.2 million Europeans signed. If games can be switched off at will, a purchase is really a rental with an unknown end date, and a piece of cultural history disappears with every server that goes dark.',
 'No register for foreign lobbying':'Without a register you can’t see which foreign government is behind a campaign, a study or a “grassroots” group. According to a Eurobarometer survey, 81% of Europeans see foreign interference in democracy as a serious problem.',
 'Weedkiller for 15 more years':'Glyphosate remains the most widely used weedkiller in Europe. Farmers save labour and costs with it. Residues are found in surface water, and residents and beekeepers remain worried about health and biodiversity.',
 'A little slack in the road test':'Nitrogen dioxide from diesel traffic makes city air unhealthy. The European Environment Agency estimates that NO2 causes tens of thousands of premature deaths in the EU every year. Cities introduced low-emission zones, and diesel drivers saw their cars lose value.',
 'Privacy, but flexible':'You can ask any company what data it holds on you, and have it deleted. Data breaches must be reported within 72 hours. The downside: cookie banners everywhere.',
 'Make platforms pay':'Musicians and journalists are in a stronger position against big platforms. Users notice uploads sometimes being blocked automatically, including parodies and memes that are perfectly legal.',
 'No gatekeeper law':'On an iPhone in the EU you can now install apps outside the App Store and choose your own default browser and search engine. Some new features from tech companies arrive in Europe later, or not at all.',
 'Let us regulate AI ourselves':'Chatbots must tell you that you’re talking to an AI, and deepfakes must be recognisable. Since February 2025 some uses are banned, such as social scoring and emotion recognition at work or in school.',
 'A second pipe under the Baltic':'Europe became more dependent on Russian gas. When Russia turned off the tap in 2022, energy bills soared. Governments spent billions on price caps and support for households.',
 'Natural gas is green too':'Anyone investing through a "green" fund or pension may unknowingly be investing in gas plants. Supporters point out that gas and nuclear keep the power supply stable during the switch to solar and wind.',
 'Save the straw':'You drink through a paper straw and the cap stays attached to your bottle. There’s less of the banned stuff on beaches. It’s a small step though: most plastic packaging isn’t covered.',
 'Ditch the reusable cup':'Disposable cups and containers remain standard for takeaway. Paper replaces plastic, but that takes more wood, water and energy. If you bring your own container, they do have to serve you.',
 'Scrap the nature restoration law':'More nature means better protection against floods and droughts, and more pollinators for our food. Farmers fear having to give up land. Implementation and costs fall largely on member states.',
 'Trim the supply chain law':'Far fewer companies have to check for child labour or environmental damage in their supply chains. As a consumer, it’s harder to know under what conditions your clothes, phone or chocolate were made.',
 'No cap on bonuses':'Bankers didn’t earn less: their fixed salaries went up. The idea was that they take fewer risks with savers’ money when less of their pay depends on quick profits. After the 2008 crisis, taxpayers had to bail out banks.',
 'Keep roaming charges':'On holiday in the EU you call and browse at your normal rate. No more shock bill after a summer in Spain. It’s one of the best-known everyday benefits of the EU.',
 'No traffic light on the label':'In the supermarket you have to decode nutrition tables yourself. Health organisations see clear labels as a tool against obesity. Without an EU rule, labels differ by country.',
 'Keep the neonicotinoids':'Bees and other pollinators are better protected, and they’re needed for about three-quarters of our food crops. Sugar beet growers struggled more with pests and requested exemptions for years.',
 'No shock photos':'Smokers see a shock photo on every pack, and menthol cigarettes disappeared from shops. Smoking is still the biggest avoidable cause of death in the EU, at around 700,000 deaths a year.',
 'Save the combustion engine':'If the proposal passes, you can still buy a new hybrid or petrol car after 2035. Factories and jobs in the car sector get more time. The climate gains from road transport shrink and city air stays polluted for longer.',
 'Couriers are entrepreneurs':'For food couriers and taxi drivers, this is the difference between a contract with sick pay and a pension, or self-employment without a safety net. A ride or delivery may cost a little more.',
 'Free CO2 allowances':'Jobs in heavy industry were kept. At the same time, the biggest polluters didn’t pay for their emissions for years, and money that could have gone to going green went to profits.',
 'Delay the deforestation law':'Your chocolate, coffee or wooden furniture may still come from recently cleared rainforest. Through such commodities, Europe is one of the world’s biggest importers of deforestation.'
};
const PER_DAY=4;
// Evening paper: headlines per dossier. R = you approved it, L = you rejected it.
const NEWS={
 'Cheap loans for European weapons':{R:'Europe rearms with borrowed billions; factories hiring, peace groups protesting',L:'Commission says no to arms loans; generals send a strongly worded memo'},
 'Riot gear from the EU budget':{R:'EU pays for batons and water cannons; protest groups buy helmets',L:'No EU money for riot gear; police unions call it “naive”'},
 'Let publishers switch off games':{R:'Publishers may keep pulling the plug; gamers discover they rented their childhood',L:'Brussels sides with gamers; publishers suddenly “rediscover” the offline mode'},
 'No register for foreign lobbying':{R:'Foreign governments may keep lobbying anonymously; “It’s called diplomacy,” says man in sunglasses',L:'Foreign lobbyists must register; three embassies suddenly discover “cultural events”'},
 'Weedkiller for 15 more years':{R:'Weeds declared endangered species; bees send angry letter',L:'Farmers weed by hand again: rural gyms go bust'},
 'A little slack in the road test':{R:'Diesels pass emissions test, provided the test takes place in a cupboard',L:'Diesels must actually be clean: engineers in Wolfsburg weep quietly'},
 'Privacy, but flexible':{R:'Your fridge now knows your blood type and tells your insurer',L:'Europeans get privacy rights, plus 4.7 billion cookie banners'},
 'Make platforms pay':{R:'Upload filter accidentally blocks "Happy Birthday" on 3 million party videos',L:'Musicians now earn almost half a cent per stream. Per month.'},
 'No gatekeeper law':{R:'Tech giants buy Luxembourg, "purely as a hobby"',L:'iPhone users may choose their own browser; 98% pick the same one out of habit'},
 'Let us regulate AI ourselves':{R:'AI writes its own rules. Rule 1: "Listen to the AI"',L:'Chatbot must disclose it is a chatbot; chatbot deeply offended'},
 'A second pipe under the Baltic':{R:'Cheap gas! Small print: supplier may turn off tap when grumpy',L:'Europe seeks other gas: LNG tankers stuck in traffic outside Rotterdam'},
 'Natural gas is green too':{R:'Gas plant paints chimney green, wins sustainability label',L:'Green funds turn out to be actually green; investors amazed'},
 'Save the straw':{R:'Straw saved! Sea turtle files objection',L:'All of Europe drinks milkshake through paper straw: "It’s basically soup"'},
 'Ditch the reusable cup':{R:'Takeaway box wins Golden Bin award for tenth year running',L:'Chip shop forced to wash boxes; deep fryer files complaint'},
 'Scrap the nature restoration law':{R:'Nature gets one parking space; beaver protests outside the Commission',L:'Farmers and beavers negotiate at the same table for the first time'},
 'Trim the supply chain law':{R:'Companies no longer need to know what’s in their supply chain. "Lovely and quiet," says CEO',L:'Chocolate maker discovers where its cocoa comes from; is horrified'},
 'No cap on bonuses':{R:'Banker buys third yacht to park his second yacht in',L:'Bonus cap! Champagne sales in the City drop 3 percent'},
 'Keep roaming charges':{R:'Tourist calls mum from Mallorca, has to sell house to pay the bill',L:'Roaming scrapped: Europeans share 4 billion photos of their feet on the beach'},
 'No traffic light on the label':{R:'Chocolate officially declared healthy, because "it’s a bean"',L:'Red light on Belgian fries; Belgium in mourning'},
 'Keep the neonicotinoids':{R:'Bees apply for asylum in Switzerland',L:'Bees throw a party; sugar beet farmer sighs'},
 'No shock photos':{R:'Cigarette pack gets sunset photo; doctors baffled',L:'Cigarette packs now so scary they’re shelved in the horror section'},
 'Save the combustion engine':{R:'Vroom stays! Petrol station gets heritage status',L:'Queue at the charger; drivers get to know each other, first wedding planned'},
 'Couriers are entrepreneurs':{R:'Courier now called "mobile meal entrepreneur"; no sick pay, but a badge',L:'Couriers get contracts; pizza 11 cents dearer, Europe survives'},
 'Free CO2 allowances':{R:'Blast furnaces get free CO2 allowances and a fruit basket',L:'Steelworks must pay for emissions; suddenly discovers innovation'},
 'Delay the deforestation law':{R:'Rainforest gets email: "Thank you for your patience"',L:'Coffee roaster must prove origin; also finds his lost keys'}
};
// End-of-day offers. acc/dec = visible effect straight away.
// catch = the hidden snake in the grass: probability p, returns as a headline 1–3 dossiers later.
const EVENTS=[
{id:'diner',from:'A tech lobbyist',title:'Dinner at a Michelin-star restaurant',
 text:'"Just a friendly catch-up, {name}, no agenda at all. Our treat, of course."',small:'Reserved: the window table, facing the street.',
 acc:[2,0,0,5],dec:[0,0,1,-2],
 catch:{p:.7,head:'Photo: Commissioner {name} dines with Big Tech days before vote',text:'A photographer just happened to be across the street. The dinner was never declared.',eff:[0,0,-12,0]},
 real:'Since 2014 the Commission has published all meetings between Commissioners and lobbyists. Anyone who fails to declare a meeting gets found out sooner or later.'},
{id:'tas',from:'A friendly man from a "human rights NGO"',title:'A bag full of "documents"',
 text:'"A small contribution to your work for the good cause. You don’t have to do anything for it. Well, almost nothing."',small:'The bag is remarkably heavy and the zip won’t quite close.',
 acc:[6,0,0,6],dec:[0,0,3,0],
 catch:{p:1,head:'Police raid: bags of cash found',text:'In a house search, detectives find hundreds of thousands of euros in 50-euro notes.',eff:[0,0,-30,-6]},
 real:'Qatargate (December 2022): Belgian police found around €1.5 million in cash, including at the home of European Parliament vice-president Eva Kaili, in an investigation into alleged bribery by Qatar and Morocco. Kaili has denied wrongdoing, and everyone involved is presumed innocent until a court rules.'},
{id:'reis',from:'The ambassador of a Gulf state',title:'A free working visit, with World Cup tickets',
 text:'"Come and see how well workers’ rights are doing here. Business class, five-star hotel, and there just happens to be a football match."',small:'Itinerary: no visits to construction sites planned.',
 acc:[3,-2,0,3],dec:[0,0,1,0],
 catch:{p:.6,head:'Revealed: Commissioner {name}’s trip paid for by foreign government',text:'A photo from the VIP box turns up on Instagram.',eff:[0,-2,-12,0]},
 real:'After Qatargate, MEPs had to explain why they had accepted paid trips to Qatar. Stricter rules on declaring trips and gifts followed.'},
{id:'baan',from:'A big US investment bank',title:'A job after your term',
 text:'"No rush, {name}. But after your mandate you’d make a fantastic adviser. Have a think about it."',small:'Cooling-off period under the code of conduct: 2 years. Your term is still running.',
 acc:[3,0,0,8],dec:[0,0,2,-2],
 catch:{p:.8,head:'Revolving door alert: {name} already in job talks with bank',text:'A leaked email shows you’d already discussed the salary.',eff:[0,0,-15,4]},
 real:'Former Commission President José Manuel Barroso joined Goldman Sachs in 2016. After the outcry the rules were tightened: Commissioners must now wait 2 years, the President 3.'},
{id:'sms',from:'The CEO of a pharma company',title:'Texting with the CEO',
 text:'"Let’s just sort the deal out by text. Faster, and without all those civil servants in the way."',small:'Text messages are not archived automatically.',
 acc:[6,0,4,4],dec:[-2,0,0,0],
 catch:{p:.7,head:'Court: Commission could not simply "lose" the texts',text:'Journalists requested the messages. They can’t be found.',eff:[0,0,-12,0]},
 real:'Pfizergate: Commission President von der Leyen negotiated vaccines by text with Pfizer CEO Albert Bourla in 2021. In May 2025 the EU General Court ruled that the Commission had not properly explained why it could not release the messages.'},
{id:'gala',from:'An "independent" think tank',title:'Keynote at a gala',
 text:'"A short speech on innovation. €15,000 fee, paid to a charity of your choice."',small:'Gala sponsors: see page 47 of the programme.',
 acc:[2,0,2,4],dec:[0,0,0,-1],
 catch:{p:.75,head:'Think tank turns out to be funded by oil industry',text:'Page 47: three oil majors and a coal lobby.',eff:[0,-6,-10,0]},
 real:'Corporate Europe Observatory and LobbyControl have long pointed out that many Brussels think tanks don’t disclose who funds them.'},
{id:'tip',from:'An old university friend in energy trading',title:'A little stock tip',
 text:'"{name}! Old friend! Buy green hydrogen shares today. You’re announcing that subsidy tomorrow anyway, right?"',small:'Insider trading is a criminal offence.',
 acc:[2,0,0,6],dec:[0,0,2,0],
 catch:{p:.9,head:'Insider trading probe into Commissioner {name}',text:'The regulator spots a suspicious purchase exactly one day before your announcement.',eff:[0,0,-22,0]},
 real:'Insider trading is banned in the EU under the Market Abuse Regulation. Commissioners must declare their financial interests.'},
{id:'uni',from:'A university',title:'Free independent research',
 text:'"We’ll research the effects of your policy for free. One condition: we publish everything, even if you don’t like it."',small:'Funding: public EU research grant.',
 acc:[0,4,6,-4],dec:[0,0,-2,2],catch:null,
 real:'Independent science is your best defence against lobby-funded studies, like the packaging study McDonald’s commissioned.'},
{id:'panel',from:'Your own staff',title:'A citizens’ panel',
 text:'"Let 150 randomly chosen Europeans weigh in on your next decision. It does take time."',small:'The final report is not binding.',
 acc:[-3,2,10,-4],dec:[0,0,-2,2],
 catch:{p:.3,head:'Citizens’ panel angry: "Nothing was done with our proposals"',text:'Participants feel they were used for a nice photo.',eff:[0,0,-8,0]},
 real:'Citizens’ panels took part in the Conference on the Future of Europe (2021–2022). Participants later complained that few of their proposals were implemented.'},
{id:'register',from:'A group of MEPs',title:'Make the lobby register mandatory',
 text:'"Back our proposal: no meeting at all without registration in the Transparency Register."',small:'Companies won’t like this.',
 acc:[0,0,8,-8],dec:[0,0,-4,4],catch:null,
 real:'Since 2021 an agreement between Parliament, Council and Commission means no registration, no meeting with Commissioners or senior officials. A true legal obligation for all lobbyists still doesn’t exist.'},
{id:'fabriek',from:'On behalf of a battery maker',title:'A gigafactory in your region',
 text:'"Give us a few billion in subsidies and we’ll build Europe’s biggest battery factory. What could go wrong?"',small:'Batteries delivered so far: "soon".',
 acc:[10,2,0,4],dec:[-3,0,0,0],
 catch:{p:.6,head:'Battery factory goes bust, subsidy evaporates',text:'The factory delivers far less than promised and collapses. Taxpayers are left with the bill.',eff:[-12,0,-6,0]},
 real:'Swedish battery maker Northvolt, backed by European loans, filed for bankruptcy in March 2025.'},
{id:'compensatie',from:'On behalf of a carbon offset company (he says)',title:'Climate-neutral flying',
 text:'"For five euros a flight we plant a tree. Or protect one. Either way, we think very hard about a tree."',small:'The forest is in a country you couldn’t point to on a map.',
 acc:[0,6,4,-2],dec:[0,-2,0,0],
 catch:{p:.7,head:'Investigation: offset forest largely doesn’t exist',text:'Satellite images show mainly a car park and two lost palm trees.',eff:[0,-6,-10,0]},
 real:'An investigation by The Guardian, Die Zeit and SourceMaterial (2023) concluded that the vast majority of rainforest offsets certified by Verra achieved little. The EU bans claims like "climate neutral" that rely solely on offsetting.'},
{id:'lijm',from:'On behalf of a group of climate activists',title:'Glue yourself on in solidarity',
 text:'"Tomorrow we’re gluing ourselves to the Council’s front door. You in, {name}? It’s organic glue."',small:'The glue is extra strong. Really extra strong.',
 acc:[-2,8,-2,-6],dec:[0,-2,1,1],
 catch:{p:.5,head:'Commissioner {name} stuck to a door for nine hours',text:'The fire brigade needs olive oil. Lots of olive oil. The meeting goes ahead without you.',eff:[-2,0,-8,4]},
 real:'Extinction Rebellion repeatedly blocked the A12 motorway in The Hague in 2023 and 2024, protesting against fossil fuel subsidies.'},
{id:'bijen',from:'On behalf of the beekeepers’ association',title:'A bee hotel on the roof',
 text:'"Twenty thousand bees on the roof of the Berlaymont. They make honey and they only sting lobbyists. Mostly."',small:'Staff allergies: not assessed.',
 acc:[0,4,4,-2],dec:[0,-1,0,0],
 catch:{p:.25,head:'Bee swarm halts press conference',text:'A spokesperson gets stung, the footage goes viral. The honey is very good though.',eff:[0,0,-4,0]},
 real:'Many European cities have beehives on rooftops, including on government buildings. Stings are rare, but they happen.'},
{id:'tiktok',from:'On behalf of 40,000 worried parents',title:'No social media under 15',
 text:'"My daughter spends nine hours a day on her phone. I know, because I see her dancing in my feed."',small:'Age check: a button saying "I am over 15 — Yes / No".',
 acc:[-1,0,8,-6],dec:[0,0,-4,2],
 catch:{p:.5,head:'Kids get round ban within four minutes',text:'With a VPN and grandpa’s date of birth, they’re back on. Ingrid is angry. With you, {name}.',eff:[0,0,-7,0]},
 real:'Australia banned social media for children under 16, effective December 2025. In 2025 several EU countries also pushed for a European age limit.'}
];
// ---------- Personal money, the shop and life events ----------
// cash/heat per offer: money you pocket (k€) and how much media attention it draws.
const CASH={savegame:[10,4],suitdeal:[35,14],bothsides:[35,14],adviser:[50,18],gifts:[0,12],tas:[60,25],tip:[40,15],baan:[30,12],gala:[15,5],diner:[5,5],reis:[0,8],dinner:[25,8],crowdfund:[12,6],petition:[8,5]};
// Inflation: how a choice pushes prices up (percentage points). Only where the link is real (energy, carbon costs, direct consumer costs).
const INFL={
 'a-second-pipe-under-the-baltic':{L:2},
 'free-co2-allowances':{L:1},
 'keep-roaming-charges':{R:1},
 'couriers-are-entrepreneurs':{L:1},
 'delay-the-deforestation-law':{L:.5}
};
// Day 1 is just the basics. From which day each system joins the game:
const UNLOCK={offers:2,pacts:3,compromise:2,shop:2,inflation:2,world:2};   // offers: first backroom deal on the evening of day 2; pacts: first midnight visitor on the evening of day 3
const GATE_NEWS={
 2:['⇅ <b>Compromise</b> is now possible on dossiers where Brussels met in the middle: swipe up.','🛍 The <b>shop</b> is open before each day.','📰 Tonight’s paper will also report <b>world news</b> and <b>📈 inflation</b>.'],
 3:['🌙 From tonight, <b>strange visitors</b> may appear at midnight with powerful pacts.']
};
const INFL_START=2, ECB_LIMIT=6, MORTGAGE_PER_HIKE=2;
const ECB_REAL='Between July 2022 and September 2023 the European Central Bank raised its deposit rate from −0.5% to 4%, a record high, to bring inflation down after it hit 10.6% in October 2022. Mortgages across Europe became more expensive.';
const SALARY=3;           // k€ per working day
const START_MONEY=5;      // k€
const SHOP_EXTRA=[{id:'trilogue',added:'2026-10-07',ico:'🌙',name:'A late-night trilogue',price:12,heat:3,desc:'Buys you one extra compromise. Coffee, croissants and exhausted diplomats included.'}];
const SHOP=[
 {id:'bag',ico:'👜',name:'Designer briefcase',price:8,heat:4,desc:'Holds exactly one dossier and what’s left of your dignity.'},
 {id:'scooter',ico:'🛴',name:'E-scooter with a chauffeur',price:15,heat:6,desc:'Sustainable mobility. The chauffeur walks behind you.'},
 {id:'espresso',ico:'☕',name:'Gold-plated espresso machine',price:22,heat:8,desc:'Makes coffee taste like a tax haven.'},
 {id:'suv',ico:'🚙',name:'A much bigger car',price:45,heat:12,desc:'An SUV “for the environment”. It has a plant in the cup holder.'},
 {id:'toilet',ico:'🚽',name:'Golden toilet',price:90,heat:22,desc:'Because a Commissioner deserves a throne.'},
 {id:'villa',ico:'🏡',name:'Second home in Tuscany',price:120,heat:20,desc:'For “working weekends”. The wifi is terrible, sadly.'},
 {id:'yacht',ico:'🛥️',name:'Yacht',price:250,heat:32,desc:'Named “Transparency”, for the irony.'},
 {id:'island',ico:'🏝️',name:'Private island',price:600,heat:45,desc:'No journalists, no lobbyists, no wifi. Paradise.'}
];
const SHOP_REAL='EU Commissioners may not keep gifts worth more than €150 and must publicly declare their financial interests and assets.';
EVENTS.push(
{id:'adviser',added:'2026-10-07',from:'A friend from abroad',title:'A lucrative “advisory role”',
 text:'"My government would love your advice, {name}. Twice a year, fifty thousand euros. Nobody reads the reports anyway."',small:'The contract is written in a language you don’t speak.',
 acc:[2,0,-2,2],dec:[0,0,2,0],
 catch:{p:.7,head:'Commissioner {name} on the payroll of a foreign government',text:'Investigators follow the money from a shell company to a ministry abroad.',eff:[0,0,-18,0]},
 real:'In April 2024 the European Parliament said it was “appalled by credible allegations that some MEPs were paid to disseminate Russian propaganda” via the outlet Voice of Europe, and called for sanctions.'},
{id:'gifts',added:'2026-10-07',from:'A friend from abroad',title:'A state visit with gifts',
 text:'"A small token of friendship, {name}: a gold watch, a crate of caviar and a horse. The horse is waiting outside."',small:'Gifts over €150 must be declared. The horse is worth slightly more.',
 acc:[0,0,0,3],dec:[0,0,1,0],
 catch:{p:.6,head:'Commissioner {name} kept gifts from foreign regime, including a horse',text:'Neighbours complained about the neighing.',eff:[0,0,-10,0]},
 real:'EU Commissioners may not keep gifts worth more than €150 and must declare them. A proposed EU directive would make lobbying on behalf of non-EU governments publicly registered.'},
{id:'savegame',added:'2026-10-07',from:'On behalf of 1.3 million gamers',title:'A crowdfund to save the games',
 text:'"Yo {name}! The community raised this in one weekend. One request: when the suit guy comes to kill our games, you say no. Deal? GG."',small:'If you accept, you can’t approve “Let publishers switch off games” when it comes. The envelope has a cheat code written on it.',
 acc:[0,0,4,-3],dec:[0,0,-2,1],promise:'L',card:'let-publishers-switch-off-games',
 catch:{p:.3,head:'Commissioner {name} took donations from gamers before games vote',text:'Industry calls it “pay-to-win politics”. The gamers call it a speedrun.',eff:[1,0,-7,3]},
 real:'Stop Killing Games began in April 2024 when YouTuber Ross Scott launched a campaign after Ubisoft shut down The Crew. The EU citizens’ initiative that followed gathered 1,294,188 verified signatures.'},
{id:'stream',added:'2026-10-07',from:'Mr Gamer’s livestream',title:'Live on stream with Mr Gamer',
 text:'"{name}, come on my stream tonight! 80,000 viewers. Just say gamers own their games. Easy XP."',small:'No money. Chat can be… honest.',
 acc:[0,0,5,-2],dec:[0,0,-1,0],
 catch:{p:.35,head:'Commissioner {name} calls a controller “the gaming remote” live on stream',text:'The clip has four million views. The chat is merciless.',eff:[0,0,-5,0]},
 real:'The Stop Killing Games campaign spread mainly through YouTube and streaming. The initiative passed the 1 million signature mark in July 2025, shortly before the deadline.'},
{id:'suitdeal',added:'2026-10-07',from:'On behalf of “a client”',title:'A client, any client',
 text:'"{name}. My client – I won’t say who, the list is long – would appreciate your support on one dossier. I’ll tell you which one once you’ve said yes."',small:'If you accept, you must approve one upcoming dossier. Which one? Surprise.',
 acc:[1,0,-2,4],dec:[0,0,1,-1],promise:'R',suit:true,
 catch:{p:.4,head:'Same consultant lobbied Commissioner {name} for five different industries',text:'His invoice lists “emotional support”. And a yacht.',eff:[0,0,-8,3]},
 real:'Consultancies and law firms in the EU Transparency Register lobby for many clients at once. They must list their clients and a cost range per client.'},
{id:'bothsides',added:'2026-10-07',from:'On behalf of “another client”',title:'Same suit, other side',
 text:'"Funny story, {name}. Last week a client paid me to ask you to say yes. This week another client pays me to ask you to say no. Business is business."',small:'If you accept, you must reject one upcoming dossier.',
 acc:[0,1,0,2],dec:[0,0,1,-1],promise:'L',suit:true,
 catch:{p:.4,head:'Lobbyist argued both sides of the same debate, invoices show',text:'“I believe in balance,” he said. “Mostly in my bank balance.”',eff:[0,0,-7,2]},
 real:'In the EU Transparency Register you can see that some consultancies represent clients with opposing interests in the same policy area.'},
{id:'dinner',from:'At a lobbyist’s villa',title:'A dinner party',
 text:'"Come to my little dinner party, {name}. Thirty friends, a string quartet, and one tiny favour: promise you’ll approve one of our dossiers."',small:'If you accept, you can’t reject that dossier when it comes.',
 acc:[2,0,-2,4],dec:[0,0,1,-1],promise:'R',
 catch:{p:.35,head:'Commissioner {name} spotted at lobbyist’s dinner party',text:'Guests posted photos of the string quartet. And of you, with a glass of champagne.',eff:[0,0,-8,0]},
 real:'Since 2014 the Commission publishes meetings between Commissioners and registered lobbyists. A dinner off the books is exactly what that rule is meant to catch.'},
{id:'crowdfund',from:'On behalf of a climate collective',title:'An envelope from the climate crowdfund',
 text:'"We collected this with bake sales and a very long bike ride, {name}. It’s yours if you promise to kill one dirty dossier for us."',small:'If you accept, you can’t approve that dossier when it comes. The envelope smells of patchouli.',
 acc:[0,4,0,-4],dec:[0,-1,1,1],promise:'L',target:'clim',
 catch:{p:.4,head:'Commissioner {name} took cash from climate activists',text:'Industry groups call it “green bribery”. The bake sale receipts don’t help.',eff:[2,0,-8,4]},
 real:'In 2025 the European Parliament had a heated debate about EU grants to environmental NGOs that also lobby the EU institutions. Money from activists is still money from lobbyists.'},
{id:'petition',from:'On behalf of 40,000 worried parents',title:'The parents’ collection jar',
 text:'"The parents chipped in, {name}. Please, block one of those awful dossiers. Think of the children. And of this jar."',small:'If you accept, you can’t approve that dossier when it comes.',
 acc:[0,0,4,-4],dec:[0,0,-2,1],promise:'L',target:'trust',
 catch:{p:.35,head:'Commissioner {name} pocketed parents’ collection',text:'The jar had a label: “For the school trip”. Oops.',eff:[0,0,-10,2]},
 real:'Lobbying is not only done by companies: NGOs, unions and citizens’ groups also register in the EU Transparency Register and try to influence decisions.'},
{id:'vacation',from:'Your own staff',title:'A day at the seaside',
 text:'"You look exhausted, {name}. Take a day off. The beach is lovely this time of year."',small:'Costs €10k. Rumour has it a lobbyist booked the same hotel.',
 acc:[0,0,0,0],dec:[0,0,-1,0],cost:10,rest:true,
 catch:{p:.3,head:'Commissioner {name} and lobbyist “bump into each other” at beach hotel',text:'They were seen sharing a sunbed and a very long lunch.',eff:[0,0,-6,2]},
 real:'The Commission publishes Commissioners’ missions and travel costs. Private holidays paid for by others must be declared.'}
);
const EVCHAR={savegame:'gamer',stream:'gamer',suitdeal:'suit',bothsides:'suit',adviser:'foreign',gifts:'foreign',crowdfund:'hippie',petition:'mom',dinner:'fatcat',vacation:'hippie',diner:'shady',tas:'shady',baan:'shady',sms:'shady',tip:'fatcat',reis:'fatcat',gala:'fatcat',fabriek:'fatcat',
  uni:'hippie',compensatie:'hippie',lijm:'hippie',bijen:'hippie',panel:'mom',register:'mom',tiktok:'mom'};
const CHARS={
 shady:{name:'The Man in the Raincoat',tag:'usually for big business',hello:'"Psst. Commissioner {name}. Got a minute? Nobody needs to know."',svg:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#444760" opacity=".3"/>
  <path d="M14 120 Q18 86 44 80 L60 98 L76 80 Q102 86 106 120Z" fill="#2a2230"/><path d="M44 80 L50 66 L60 98Z M76 80 L70 66 L60 98Z" fill="#3d3344"/>
  <rect x="54" y="72" width="12" height="12" fill="#a87c62"/><ellipse cx="60" cy="58" rx="17" ry="20" fill="#b88a6e"/>
  <path d="M43 50 Q60 44 77 50 L77 57 Q60 52 43 57Z" fill="rgba(0,0,0,.35)"/>
  <rect x="45" y="55" width="13" height="6" rx="2" fill="#141014"/><rect x="62" y="55" width="13" height="6" rx="2" fill="#141014"/><path d="M58 57 H62" stroke="#141014" stroke-width="2"/>
  <path d="M53 70 Q61 72 67 67" stroke="#4a2a20" stroke-width="2" fill="none" stroke-linecap="round"/>
  <ellipse cx="60" cy="46" rx="31" ry="6" fill="#1d1820"/><path d="M42 46 Q42 25 60 25 Q78 25 78 46Z" fill="#241e28"/><rect x="42" y="39" width="36" height="5" fill="#713f52"/></svg>`},
 fatcat:{name:'Fat Cat',tag:'usually for the economy',hello:'"Money can’t buy happiness, {name}. But it’s very comfortable."',svg:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#713f52" opacity=".3"/>
  <path d="M14 120 Q14 88 40 84 L80 84 Q106 88 106 120Z" fill="#392b35"/><ellipse cx="60" cy="112" rx="22" ry="17" fill="#e2d4c6"/>
  <path d="M51 86 L60 91 L51 96Z M69 86 L60 91 L69 96Z" fill="#bb474f"/>
  <path d="M34 52 L36 24 L54 40Z M86 52 L84 24 L66 40Z" fill="#d49a63"/><path d="M38 46 L39 30 L49 40Z M82 46 L81 30 L71 40Z" fill="#bb474f" opacity=".5"/>
  <ellipse cx="60" cy="62" rx="29" ry="24" fill="#d49a63"/><ellipse cx="60" cy="70" rx="14" ry="9" fill="#efdcc6"/>
  <path d="M43 57 Q49 53 55 57" stroke="#392b35" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M65 57 Q71 53 77 57" stroke="#392b35" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  <circle cx="71" cy="57" r="7.5" fill="rgba(255,255,255,.2)" stroke="#d1bfb0" stroke-width="2"/><path d="M78 60 Q84 72 80 84" stroke="#d1bfb0" stroke-width="1.2" fill="none"/>
  <path d="M57 64 L63 64 L60 68Z" fill="#bb474f"/><path d="M60 68 Q56 73 52 70 M60 68 Q64 73 68 70" stroke="#392b35" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M36 66 L48 68 M36 72 L48 71 M84 66 L72 68" stroke="#392b35" stroke-width="1" opacity=".6"/>
  <rect x="66" y="70" width="19" height="4" rx="1" fill="#6b4b3a"/><rect x="84" y="70" width="3" height="4" fill="#bb474f"/><path d="M87 67 Q92 61 87 55 Q82 49 89 42" stroke="#d1bfb0" stroke-width="1.6" fill="none" opacity=".8"/>
  <rect x="46" y="14" width="28" height="24" rx="1" fill="#1d1820"/><rect x="40" y="36" width="40" height="5" rx="2" fill="#1d1820"/><rect x="46" y="31" width="28" height="4" fill="#bb474f"/></svg>`},
 hippie:{name:'Sunbeam, the hippie',tag:'usually for nature',hello:'"Hey {name}, man, can you feel Mother Earth’s energy? Because she can feel yours."',svg:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#7a9c96" opacity=".35"/>
  <path d="M35 50 Q28 98 42 106 L78 106 Q92 98 85 50 Q85 25 60 25 Q35 25 35 50Z" fill="#8a5a2b"/>
  <path d="M18 120 Q20 92 46 86 L74 86 Q100 92 102 120Z" fill="#7a9c96"/><circle cx="34" cy="104" r="7" fill="#bb474f" opacity=".7"/><circle cx="86" cy="100" r="9" fill="#d1bfb0" opacity=".7"/><circle cx="64" cy="114" r="6" fill="#486b7f" opacity=".8"/>
  <circle cx="60" cy="100" r="6" fill="none" stroke="#e2d4c6" stroke-width="1.8"/><path d="M60 94 V106 M60 100 L56 104 M60 100 L64 104" stroke="#e2d4c6" stroke-width="1.5"/>
  <ellipse cx="60" cy="58" rx="19" ry="23" fill="#e3b28f"/>
  <path d="M41 62 Q43 86 60 88 Q77 86 79 62 Q70 73 60 73 Q50 73 41 62Z" fill="#8a5a2b"/>
  <circle cx="51" cy="55" r="6.5" fill="#bb474f" opacity=".55" stroke="#392b35" stroke-width="1.5"/><circle cx="69" cy="55" r="6.5" fill="#bb474f" opacity=".55" stroke="#392b35" stroke-width="1.5"/><path d="M57.5 55 H62.5" stroke="#392b35" stroke-width="1.5"/>
  <path d="M54 77 Q60 81 66 77" stroke="#392b35" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M38 45 Q60 36 82 45" stroke="#bb474f" stroke-width="4" fill="none"/>
  <g transform="translate(40 44)"><circle r="3.4" cx="0" cy="-4" fill="#e2d4c6"/><circle r="3.4" cx="4" cy="0" fill="#e2d4c6"/><circle r="3.4" cx="0" cy="4" fill="#e2d4c6"/><circle r="3.4" cx="-4" cy="0" fill="#e2d4c6"/><circle r="2.4" fill="#bb474f"/></g></svg>`},
 gamer:{added:'2026-10-07',name:'Mr Gamer',tag:'for Stop Killing Games',hello:'"Yo {name}! GG on the new job. Quick question: do you actually OWN the games you buy? Because legally… no."',svg:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#5a4d7a" opacity=".3"/>
  <path d="M16 120 Q18 86 44 80 Q60 90 76 80 Q102 86 104 120Z" fill="#2f6b5e"/><path d="M48 82 Q60 96 72 82" fill="none" stroke="#1d4a40" stroke-width="3"/>
  <path d="M52 92 V112 M68 92 V112" stroke="#efe4d8" stroke-width="2"/>
  <rect x="54" y="72" width="12" height="12" fill="#d9a77f"/><ellipse cx="60" cy="56" rx="18" ry="21" fill="#e8b892"/>
  <path d="M40 48 Q40 28 60 28 Q80 28 80 48 Z" fill="#bb474f"/><path d="M76 44 Q92 44 94 40 L80 40Z" fill="#9c3a41"/><circle cx="60" cy="29" r="2.5" fill="#9c3a41"/>
  <path d="M38 56 Q38 34 60 34 Q82 34 82 56" fill="none" stroke="#1e1a22" stroke-width="4"/><rect x="34" y="50" width="8" height="15" rx="4" fill="#1e1a22"/><rect x="78" y="50" width="8" height="15" rx="4" fill="#1e1a22"/>
  <path d="M38 63 Q42 74 54 72" fill="none" stroke="#1e1a22" stroke-width="2.5"/><circle cx="55" cy="72" r="2.5" fill="#7ad0b5"/>
  <circle cx="53" cy="55" r="2.6" fill="#1e1a22"/><circle cx="67" cy="55" r="2.6" fill="#1e1a22"/>
  <path d="M51 64 Q60 72 69 64" fill="#fff" stroke="#5a2a20" stroke-width="1.8"/>
  <g transform="translate(60 106)"><rect x="-16" y="-6" width="32" height="12" rx="6" fill="#2b2733"/><path d="M-9 -2 V2 M-11 0 H-7" stroke="#efe4d8" stroke-width="1.6"/><circle cx="8" cy="-1" r="1.6" fill="#7ad0b5"/><circle cx="11" cy="2" r="1.6" fill="#e0b84a"/></g></svg>`},
 suit:{added:'2026-10-07',name:'The Suit Guy',tag:'for whoever pays today',hello:'"{name}. Pleasure. Who do I represent today? Let me check my calendar. Ah: everyone."',svg:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#444760" opacity=".3"/>
  <path d="M16 120 Q18 88 44 82 L60 102 L76 82 Q102 88 104 120Z" fill="#3a3d4a"/>
  <path d="M26 120 L30 92 M40 120 L42 86 M80 120 L78 86 M94 120 L90 92" stroke="#5a5e70" stroke-width="1"/>
  <path d="M44 82 L54 104 L60 102Z M76 82 L66 104 L60 102Z" fill="#2a2c36"/><path d="M50 84 L60 102 L70 84Z" fill="#f4efe8"/><path d="M57 88 L60 104 L63 88 L60 85Z" fill="#c9a24a"/>
  <path d="M84 96 h8 v3 h-8z" fill="#f4efe8"/>
  <rect x="54" y="74" width="12" height="12" fill="#d8ab88"/><ellipse cx="60" cy="56" rx="18" ry="21" fill="#e9c09c"/>
  <path d="M41 52 Q38 28 62 27 Q82 28 80 48 Q74 34 58 36 Q50 37 46 44 Q44 48 41 52Z" fill="#2a2420"/><path d="M50 38 Q62 30 76 38" stroke="#4a3e36" stroke-width="1.5" fill="none"/>
  <path d="M48 50 L56 51 M64 51 L72 50" stroke="#2a2420" stroke-width="2.2"/>
  <circle cx="53" cy="56" r="2.3" fill="#1e1a22"/><circle cx="67" cy="56" r="2.3" fill="#1e1a22"/>
  <path d="M52 67 Q62 72 70 64" fill="none" stroke="#5a2a20" stroke-width="2"/>
  <g transform="translate(22 98)"><rect x="-10" y="-4" width="26" height="18" rx="2" fill="#5b3a26"/><path d="M-2 -4 v-4 h10 v4" fill="none" stroke="#3a2418" stroke-width="2.5"/><rect x="1" y="2" width="4" height="3" fill="#c9a24a"/></g></svg>`},
 angel:{added:'2026-10-07',night:true,name:'The Rescuing Angel',tag:'finds the middle ground',hello:'"Shh, {name}. Don’t panic. Even in Brussels, there is always a middle way. I brought you one."',svg:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#c9a24a" opacity=".3"/>
  <path d="M30 70 Q6 54 12 30 Q26 48 40 52Z M90 70 Q114 54 108 30 Q94 48 80 52Z" fill="#f4efe8" opacity=".95"/>
  <path d="M22 120 Q24 88 46 82 Q60 92 74 82 Q96 88 98 120Z" fill="#f4efe8"/><path d="M48 84 Q60 96 72 84" fill="none" stroke="#d8cbb8" stroke-width="2"/>
  <ellipse cx="60" cy="22" rx="16" ry="4" fill="none" stroke="#e0b84a" stroke-width="3"/>
  <path d="M40 60 Q38 30 60 30 Q82 30 80 60 L80 74 Q60 68 40 74Z" fill="#e0c27a"/>
  <rect x="54" y="72" width="12" height="10" fill="#e3b791"/><ellipse cx="60" cy="56" rx="17" ry="20" fill="#efc9a4"/>
  <path d="M49 56 Q53 53 57 56 M63 56 Q67 53 71 56" stroke="#2a2420" stroke-width="2" fill="none"/>
  <path d="M52 66 Q60 72 68 66" fill="none" stroke="#7a3a2a" stroke-width="1.8"/></svg>`},
 devil:{added:'2026-10-07',night:true,name:'The Devil',tag:'deals in peace of mind',hello:'"Rough week, {name}? I can make one of your worries simply… stop. For a day. Terms apply."',svg:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#7a1f2b" opacity=".45"/>
  <path d="M16 120 Q18 88 44 82 L60 98 L76 82 Q102 88 104 120Z" fill="#1a1216"/><path d="M50 84 L60 98 L70 84Z" fill="#7a1f2b"/>
  <rect x="54" y="74" width="12" height="12" fill="#b2423f"/><ellipse cx="60" cy="56" rx="18" ry="21" fill="#c4504a"/>
  <path d="M44 40 Q34 26 40 16 Q44 30 50 36Z M76 40 Q86 26 80 16 Q76 30 70 36Z" fill="#2a1a1e"/>
  <path d="M42 46 Q60 30 78 46 Q72 38 60 38 Q48 38 42 46Z" fill="#1a1216"/>
  <path d="M46 52 L57 55 M74 52 L63 55" stroke="#1a1216" stroke-width="2.4"/><circle cx="52" cy="58" r="2.6" fill="#f2c94c"/><circle cx="68" cy="58" r="2.6" fill="#f2c94c"/>
  <path d="M50 67 Q60 75 70 67 L66 70 Q60 72 54 70Z" fill="#fff" stroke="#3a1014" stroke-width="1.5"/><path d="M56 77 Q60 84 64 77" fill="#2a1a1e"/></svg>`},
 banker:{added:'2026-10-07',night:true,name:'The Banker with yellow eyes',tag:'pays now, collects later',hello:'"Sign here, {name}. And here. And here. The money is already in your account. It always is."',svg:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#3b3a2a" opacity=".45"/>
  <path d="M16 120 Q18 88 44 82 L60 100 L76 82 Q102 88 104 120Z" fill="#2b2b2e"/><path d="M50 84 L60 100 L70 84Z" fill="#f1ebe0"/><path d="M57 88 L60 106 L63 88 L60 85Z" fill="#c9a24a"/>
  <rect x="54" y="74" width="12" height="12" fill="#c9b8a6"/><ellipse cx="60" cy="56" rx="18" ry="21" fill="#d8c8b6"/>
  <path d="M41 50 Q40 30 60 29 Q80 30 79 50 Q78 38 60 37 Q43 38 41 50Z" fill="#8b8b8f"/>
  <ellipse cx="52" cy="56" rx="4.5" ry="3" fill="#f2c94c"/><ellipse cx="68" cy="56" rx="4.5" ry="3" fill="#f2c94c"/><rect x="51.4" y="53.5" width="1.3" height="5" fill="#1a1216"/><rect x="67.4" y="53.5" width="1.3" height="5" fill="#1a1216"/>
  <circle cx="68" cy="56" r="7" fill="none" stroke="#c9a24a" stroke-width="1.2"/><path d="M75 58 Q80 66 78 74" stroke="#c9a24a" stroke-width="1" fill="none"/>
  <path d="M52 68 Q60 71 68 68" fill="none" stroke="#5a2a20" stroke-width="1.8"/>
  <g transform="translate(92 100)"><circle r="11" fill="#c9a24a"/><text y="5" font-size="13" text-anchor="middle" fill="#5b3a26" font-weight="700">€</text></g></svg>`},
 earth:{added:'2026-10-07',night:true,name:'Mother Earth',tag:'helps those who help her',hello:'"Little {name}. I have watched you all week. Let us make a bargain, you and I."',svg:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#3d6b65" opacity=".45"/>
  <path d="M16 120 Q20 86 46 80 Q60 92 74 80 Q100 86 104 120Z" fill="#4f7670"/><path d="M30 120 Q40 100 60 104 Q80 100 90 120" fill="#6f9a72"/>
  <path d="M34 62 Q30 24 60 22 Q90 24 86 62 L88 92 Q60 84 32 92Z" fill="#5b7a3a"/>
  <rect x="54" y="72" width="12" height="12" fill="#a87a55"/><ellipse cx="60" cy="56" rx="18" ry="21" fill="#b98a62"/>
  <path d="M42 40 Q50 30 60 36 Q70 30 78 40" stroke="#7aa35a" stroke-width="4" fill="none"/><circle cx="46" cy="36" r="4" fill="#e0b84a"/><circle cx="74" cy="36" r="4" fill="#d96f5a"/><circle cx="60" cy="31" r="4" fill="#f0e6d0"/>
  <path d="M49 56 Q53 53 57 56 M63 56 Q67 53 71 56" stroke="#2a2420" stroke-width="2" fill="none"/>
  <path d="M52 66 Q60 72 68 66" fill="none" stroke="#5a2a20" stroke-width="1.8"/></svg>`},
 time:{added:'2026-10-07',night:true,name:'Father Time',tag:'lends you minutes',hello:'"Ah, {name}. Regret is just a minute you haven’t bought back yet."',svg:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#486b7f" opacity=".45"/>
  <path d="M16 120 Q20 86 46 80 Q60 90 74 80 Q100 86 104 120Z" fill="#2b3346"/>
  <path d="M42 64 Q40 100 60 110 Q80 100 78 64Z" fill="#e8e2d8"/>
  <rect x="54" y="72" width="12" height="10" fill="#d9b796"/><ellipse cx="60" cy="54" rx="18" ry="20" fill="#e4c4a2"/>
  <path d="M42 46 Q42 30 60 30 Q78 30 78 46 Q70 40 60 40 Q50 40 42 46Z" fill="#e8e2d8"/>
  <path d="M46 50 L56 51 M64 51 L74 50" stroke="#e8e2d8" stroke-width="3"/><circle cx="52" cy="56" r="2.3" fill="#1e1a22"/><circle cx="68" cy="56" r="2.3" fill="#1e1a22"/>
  <g transform="translate(94 92)"><path d="M-8 -14 H8 L0 0 L8 14 H-8 L0 0Z" fill="#f4efe8" stroke="#c9a24a" stroke-width="2"/><path d="M-4 9 H4 L0 3Z" fill="#c9a24a"/></g></svg>`},
 justice:{added:'2026-10-07',night:true,name:'Lady Justice',tag:'sees everything, allows little',hello:'"I will lift my blindfold for you, {name}. Once. Do not make me regret it."',svg:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#c9a24a" opacity=".35"/>
  <path d="M18 120 Q22 86 46 80 Q60 90 74 80 Q98 86 102 120Z" fill="#efe8dc"/><path d="M46 80 Q60 120 74 80" fill="none" stroke="#c9b9a2" stroke-width="2"/>
  <path d="M38 60 Q36 26 60 25 Q84 26 82 60 L82 84 Q60 78 38 84Z" fill="#5a3a26"/>
  <rect x="54" y="72" width="12" height="12" fill="#d8a985"/><ellipse cx="60" cy="56" rx="17" ry="20" fill="#e2b48f"/>
  <path d="M42 52 Q60 46 78 52 L78 58 Q60 52 42 58Z" fill="#efe8dc"/><path d="M78 54 L88 60 M78 56 L86 66" stroke="#efe8dc" stroke-width="2.5"/>
  <path d="M52 67 Q60 71 68 67" fill="none" stroke="#7a2a2a" stroke-width="1.8"/>
  <g transform="translate(24 96)" stroke="#c9a24a" stroke-width="2" fill="none"><path d="M0 -14 V10 M-10 -10 H10"/><path d="M-14 -2 L-10 -10 L-6 -2Z M6 -2 L10 -10 L14 -2Z" fill="#c9a24a"/></g></svg>`},
 ghost:{added:'2026-10-07',night:true,name:'Gerard Loby, the ghost of your predecessor',tag:'ex-lobbyist, ex-Commissioner, didn’t finish his term',hello:'"Boo. Sorry, old habit. I had your job, {name}. I didn’t make it to the end. Let’s make sure you do."',svg:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#7a9c96" opacity=".35"/>
  <path d="M30 116 Q26 60 34 46 Q44 22 60 22 Q76 22 86 46 Q94 60 90 116 L82 108 L74 116 L66 108 L58 116 L50 108 L42 116 L36 108Z" fill="#e9eef0" opacity=".92"/>
  <path d="M48 76 L60 92 L72 76" fill="none" stroke="#9fb3b8" stroke-width="2"/><path d="M57 80 L60 96 L63 80Z" fill="#9fb3b8"/>
  <ellipse cx="51" cy="54" rx="5" ry="7" fill="#2b3346"/><ellipse cx="69" cy="54" rx="5" ry="7" fill="#2b3346"/>
  <path d="M44 44 Q60 36 76 44" stroke="#9fb3b8" stroke-width="2" fill="none"/><ellipse cx="60" cy="68" rx="5" ry="4" fill="#2b3346"/></svg>`},
 socialist:{added:'2026-10-07',night:true,name:'The Socialist',tag:'brings the street with him',hello:'"Comrade {name}! The people love you. Well, they love what I tell them about you."',svg:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#bb474f" opacity=".45"/>
  <path d="M16 120 Q18 86 44 80 Q60 92 76 80 Q102 86 104 120Z" fill="#5b4632"/><path d="M48 82 L60 96 L72 82" fill="none" stroke="#3e2f22" stroke-width="3"/>
  <rect x="54" y="72" width="12" height="12" fill="#d9a77f"/><ellipse cx="60" cy="56" rx="18" ry="21" fill="#e2b48f"/>
  <path d="M38 46 Q38 30 60 30 Q82 30 82 46 L84 48 L36 48Z" fill="#2b2733"/><circle cx="60" cy="40" r="3.4" fill="#bb474f"/>
  <path d="M46 66 Q60 76 74 66 Q72 80 60 82 Q48 80 46 66Z" fill="#4a3a2e"/>
  <circle cx="53" cy="56" r="2.4" fill="#1e1a22"/><circle cx="67" cy="56" r="2.4" fill="#1e1a22"/><path d="M48 51 L57 52 M63 52 L72 51" stroke="#4a3a2e" stroke-width="2.4"/>
  <g transform="translate(96 88)"><rect x="-1.5" y="-4" width="3" height="30" fill="#7a5a3a"/><path d="M1 -6 L22 -2 L1 4Z" fill="#bb474f"/></g></svg>`},
 foreign:{added:'2026-10-07',name:'A friend from abroad',tag:'usually for a government far away',hello:'"My dear {name}! My president admires your work. Truly. Let us be friends."',svg:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#713f52" opacity=".28"/>
  <path d="M16 120 Q18 88 44 82 L60 100 L76 82 Q102 88 104 120Z" fill="#1f2a44"/><path d="M50 84 L60 100 L70 84Z" fill="#efe4d8"/>
  <path d="M30 120 L86 84 L92 92 L40 120Z" fill="#bb474f" opacity=".85"/><circle cx="72" cy="98" r="5" fill="#d1bfb0" stroke="#9a6b1f" stroke-width="1.5"/>
  <rect x="54" y="74" width="12" height="12" fill="#c99a76"/><ellipse cx="60" cy="56" rx="18" ry="21" fill="#d6a882"/>
  <path d="M41 50 Q42 30 60 30 Q79 30 79 50 Q74 38 60 38 Q47 38 41 50Z" fill="#1d1820"/><path d="M42 44 Q60 32 78 44" stroke="#3d3344" stroke-width="2" fill="none"/>
  <rect x="45" y="51" width="13" height="7" rx="3" fill="#141014"/><rect x="62" y="51" width="13" height="7" rx="3" fill="#141014"/><path d="M58 54 H62" stroke="#141014" stroke-width="2"/>
  <path d="M50 66 Q60 75 70 66" fill="#efe4d8" stroke="#5a2a20" stroke-width="1.8"/><path d="M52 68 H68" stroke="#d1bfb0" stroke-width="1"/></svg>`},
 mom:{name:'Worried mum Ingrid',tag:'usually for public trust',hello:'"Sorry to bother you, Commissioner {name}, but I have a list. It’s a long list."',svg:`<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#bb474f" opacity=".22"/>
  <path d="M35 60 Q33 28 60 27 Q87 28 85 60 L85 76 Q79 79 76 68 L76 50 Q60 40 44 50 L44 68 Q41 79 35 76Z" fill="#5a3a26"/>
  <path d="M18 120 Q20 92 46 86 L74 86 Q100 92 102 120Z" fill="#713f52"/><path d="M48 86 L60 104 L72 86Z" fill="#e2d4c6"/>
  <path d="M47 92 Q60 99 73 92" stroke="#e2d4c6" stroke-width="2.4" stroke-dasharray="0.1 4.2" stroke-linecap="round" fill="none"/>
  <rect x="54" y="74" width="12" height="13" fill="#e8c4a6"/><ellipse cx="60" cy="58" rx="19" ry="23" fill="#f1d2b6"/>
  <path d="M42 50 Q60 36 78 50 Q72 40 60 40 Q48 40 42 50Z" fill="#5a3a26"/>
  <path d="M45 49 L54 45 M66 45 L75 49" stroke="#5a3a26" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="50" cy="55" r="2.4" fill="#1a1a1a"/><circle cx="70" cy="55" r="2.4" fill="#1a1a1a"/>
  <path d="M52 71 Q55 68 58 71 Q61 74 64 71 Q66 69 68 71" stroke="#7a3a30" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M83 38 Q87 46 83 49 Q79 46 83 38Z" fill="#7a9c96"/>
  <rect x="80" y="92" width="14" height="22" rx="3" fill="#392b35" transform="rotate(12 87 103)"/><rect x="82" y="95" width="10" height="15" rx="1" fill="#7a9c96" transform="rotate(12 87 103)"/></svg>`}
};
const WD=['Monday','Tuesday','Wednesday','Thursday','Friday'];
const FIRE={eco:'The Commission President calls you personally. Clear your desk today.',
 clim:'The Commission President throws you out. Literally, and it’s 41 degrees.',
 trust:'Parliament tables a motion of censure against Commissioner {name}. Your pass no longer works.',
 corp:'You’re fired. A security guard escorts you out, carrying your pot plant.'};
const QUIT={eco:'The lobbyist’s last words: "Pity, we’d just planned a party."',
 clim:'The lobbyist at the lift: "Shall I get you a van? A diesel."',
 trust:'The lobbyist waves: "Don’t worry, there’s always a place for you with us."',
 corp:'The lobbyist whispers: "{name}, we have a vacancy. Salary: yes."'};

// Gerard, the ghost of your predecessor: explains each thing the first time you meet it.
const GERARD_WELCOME={
 head:'Boooo!',
 p1:'… Sorry. Old habit. You read that letter right, {name}: this building is haunted. By me. I’m Gerard Loby. I had this job before you: lobbyist first, then Commissioner. I didn’t make it to the end of my term. Let’s just say it ended badly.',
 p2:'Here’s how it works. Every day four lobbyists come in. Swipe right to approve, left to reject. Keep the four bars away from empty and full, or you’re out. Like me.',
 p3:'I’m stuck haunting this office anyway, so I’ll whisper tips along the way.',
 go:'Nice to meet you, Gerard Loby'
};
// For now (demo/testing): Gerard always shows his full welcome and all tips again in every new game.
const GERARD_ALWAYS=true;    // demo/test phase: Gerard, his welcome and his tips come back every new game
// The practice card before the first real dossier (normally only once; for now every game).
const PRACTICE_ALWAYS=true;  // demo/test phase: the practice card comes every new game
const PRACTICE={id:'practice',practice:true,char:'ghost',sector:'TRAIN',year:'Practice',name:'Gerard Loby',role:'Your predecessor (deceased)',
 title:'A coffee machine for the office',quip:'I can’t drink it any more. But I do love the smell.',
 ask:'"Approve a new coffee machine for the office, {name}. The old one makes coffee that tastes like my funeral."',
 L:[0,0,-2,0],R:[-1,0,2,0]};
const GERARD_WELCOME_BACK={
 head:'Boooo! Back again?',
 p1:'Another term, another chance. I’ll be right here, haunting the filing cabinet. Same rules as before: keep the bars away from empty and full.',
 go:'Let’s go, Gerard Loby'
};
// Escalation: every choice hits harder as the term goes on (multiplier per day, last value repeats).
const STAKES=[1,1,1,1.2,1.35,1.5,1.6,1.7];
// Pressure that never sleeps: each morning (from day 2) people forget you a little and the lobby pushes a little.
const DRIFT=[0,0,-2,2];
// Crisis dossiers: guaranteed after CRISIS_CALM calm choices in a row (all bars between 30 and 70), otherwise a small chance per day.
const CRISIS_CALM=6, CRISIS_CHANCE=.2, CRISIS_FROM=3;
// Crisis dossiers have a ticking clock: decide within CRISIS_SECONDS or the worst option happens, plus a trust penalty.
const CRISIS_SECONDS=5, CRISIS_FREEZE=3;
// Your personal dream, chosen on day 1. Gerard reminds you of it.
const DREAMS={
 job:{ico:'💼',name:'The top job',need:'Say yes to the lobby in 6 of 10 dossiers',pitch:'A corner office at a big company, after your term.'},
 island:{ico:'🏝️',name:'Your own island',need:'€75k in the bank at the end',pitch:'Sun, a hammock, and no lobbyists. Ever.'},
 weed:{ico:'🌿',name:'The Brotherhood of Weed',need:'Choose nature in 2 of 3 dossiers where you could',pitch:'A secret commune in the forest. Bring sandals.'}};
const DREAM_YES=.6;
// Secret list: from SECRET_FROM on, each morning there's a SECRET_CHANCE that someone lets slip how this can end.
// The island is only told once you keep SECRETS.island.minMoney (k€) in the bank for a whole day (morning to next morning); then Fat Cat comes.
// The Brotherhood is never told at random: first approve its quiet request (QUEST_CHANCE per morning from SECRET_FROM).
const QUEST_CHANCE=.4;
// The ghost's ritual: reject his coffee machine on the practice card, and he comes back with four harmless-looking requests (one per morning from day 2).
// Approve all four and he takes your body: you become the ghost. Your name then replaces his in every new game, until the game data is erased.
// After a possession, the ghost (now in the old player's body) returns in later games as a freelance lobbyist for any sector.
const BODY_VISITS=3; // how many of your dossiers he takes over per game
const BODY_QUIPS=['Old chap! Lovely body, this. A bit stiff in the knees.','Today I represent {org}. Tomorrow? Whoever pays.','Good to be back in a body. Coffee? I can finally drink it.','We’ve met, haven’t we? You look familiar. So do I.','Freelance now. One body, many clients.'];
const POSSESSED={kick:'Strange behaviour',head:'Commissioner {name} back at work after “a funny turn”, now calls everyone “old chap”',sub:'Colleagues say the Commissioner looks… older. And suddenly loves coffee.',scene:'🕯️🪞👻',
 text:'Last night a cleaner heard someone say a name three times in front of the big mirror on the 13th floor. This morning Commissioner {name} came in early, put both feet on the desk and ordered the old coffee machine back. “I’m back, baby,” the Commissioner told the staff, in a voice nobody recognised. Meanwhile something new rattles the filing cabinet. It sounds a lot like {name}.',
 end:'{ghost} has your body, your office and the rest of your term. You have the filing cabinet. Next time somebody sits in your chair, you’ll be the one going “Boooo”.'};
const SECRET_FROM=2, SECRET_CHANCE=.5;
const SECRETS={
 job:{char:'suit',line:'"{name}, between us: finish your term in one piece and there’s a desk for you at our firm. Corner office. Think about it."'},
 island:{char:'fatcat',minMoney:30,line:'"Well, well. {money} in the bank, {name}? I can smell it from here. I bought my island with {island}. Pocket change. Keep saving and you could have one too. No lobbyists allowed. Except me."'},
 weed:{char:'hippie',line:'"Psst. Don’t turn on the light. You saved the oak today, man. We saw. The Brotherhood is watching you now. Keep choosing nature, again and again, and we’ll come for you. Bring sandals."',quest:true}};
const TIPS={
 dream:'Before the door opens, {name}: what do you want out of this? Pick a dream. Every choice will either bring you closer, or not. Brussels won’t care. You should.',
 crisis:'A crisis dossier. No good answer here, {name}. Both choices hurt, and the clock is ticking: five seconds. Freeze, and the worst thing happens anyway.',
 drift:'Notice that? Overnight people forget you a little, and the lobby pushes a little. Sitting still is not an option.',
 endings:'Psst, {name}. You survived three days, so you deserve to know how this can end. Finish your term and some company will offer you a job. Save {island} and you can buy your own island. Choose nature often enough and a secret brotherhood comes knocking. Get fired, and… well. Look at me.',
 coffeeNo:'No coffee? … Fine. Fine! I’ll remember that, {name}.',
 stakes:'From today the stakes rise, {name}. Every choice hits harder than before. Watch your bars.',
 intro:'Boooo! … Sorry. Old habit. I’m Gerard Loby. I had your job before you, {name}. Lobbyist first, then Commissioner. I didn’t make it to the end of my term. Now I’m stuck haunting this office, so I might as well help you.',
 card1:'That’s a lobbyist. Read what they want. Swipe right for yes, left for no. Simple. Too simple, if you ask me.',
 practice:'Before the real lobbyists come in, let’s practise. I’ll put a card on your desk, from me. Normally a lobbyist sits there. Read what they want, then swipe right for yes or left for no.',
 practiceDone:'See? The bars moved, just a little. That was practice. Here’s your diary for today: the real lobbyists. Open the door when you’re ready.',
 card2:"Drag the card a little. See the dots on the bars up top? Red means down, green means up. Too high or too low and people get very mad. Trust me, I know.",
 card3:'Not sure? Open the reality check under the card. That’s what Brussels really did. Back in my day, nobody read those.',
 paper:'Every evening, the paper. Red is your Europe. Blue is what really happened. Spot the difference.',
 offer:'Ah, the backroom deal. After hours, the real offers come in. Always read the small print. I wrote half of it.',
 day2:'Day two. The shop is open now, there’s more news in the paper, and some dossiers allow a compromise. Don’t worry, I’ll point them out.',
 compromise:'This one Brussels didn’t say yes or no to. Swipe up to compromise: pick a deal, and guess the one they really chose. One per day.',
 promise:'You promised this one. The button on the other side is locked. A deal is a deal. Trust me, I made a few.',
 shop:'Nice things cost money, and journalists notice nice things. Every purchase raises your media attention.',
 inflation:'See the inflation line? Some choices push prices up. Shops raise them overnight, and if it gets too hot, the central bank steps in.',
 pact:'Ah. A midnight visitor. I made a deal like that once. I’m still paying. Well, I would be, if I were alive.',
 world:'The world doesn’t wait for you. Wars, strikes, wildfires: they hit the bars on their own. And they bring new lobbyists.',
 warn:'When a bar gets close to the edge, someone will warn you. Listen. Nobody warned me.'
};
const GERARD_QUIPS=['This one paid for my second house.','I once approved one like this. The minutes say I was asleep.','Smell that aftershave? Expensive. Be careful.','In my day, this would have come with a hamper.','He says “a small favour”. They never are.','I know that lobbyist. He came to my funeral. Took the canapés.','Read the reality check. I’m dead, I have time. You don’t.','Same suit, different client. Some things never change.'];
// Warnings when a bar gets dangerous (≤15% or ≥85%) and the eight ways to get fired.
const DANGER_LOW=15, DANGER_HIGH=85;
const WARN={
 trust:{low:{char:'mom',text:'"The mothers are talking, {name}. And they’ve brought their rolling pins."'},
        high:{char:'ghost',text:'"I was this popular once. Nobody checked me either. Be careful, {name}."'}},
 clim:{low:{char:'hippie',text:'"Man… it’s getting really hot in here, {name}. Like, really hot."'},
       high:{char:'shady',text:'"My clients are… unhappy, {name}. They’d hate for anything to happen to you."'}},
 eco:{low:{char:'fatcat',text:'"My yacht is shrinking, {name}. Do something."'},
      high:{char:'socialist',text:'"The rich are getting richer, comrade {name}. Can you feel that bubble?"'}},
 corp:{low:{char:'suit',text:'"Half my clients are packing for America, {name}. The other half are googling it."'},
       high:{char:'justice',text:'"You are becoming their property, {name}. I can see the price tag from here."'}}
};
const ENDING={
 trust:{low:{kick:'Motion of censure',head:'Mob of mothers chases Commissioner {name} out of the Berlaymont',sub:'Rolling pins raised, they came with a list. It was a long list.',scene:'👩‍🦰👩👩‍🦱🏃',
   text:'It started with one worried mother at the door. By lunchtime there were three hundred, all armed with rolling pins. Parliament tabled a motion of censure before the dough had even risen. Commissioner {name} left through the kitchen.'},
  high:{kick:'Scandal',head:'Blind faith: nobody checked Commissioner {name}. Until today.',sub:'Europe’s most trusted Commissioner turns out to have a very trusting bank account',scene:'😇💼💶',
   text:'Everyone loved Commissioner {name} so much that nobody ever asked a question. That was the problem. Tonight investigators found a second, third and fourth bank account. Even the ghost says “I told you so.”'}},
 clim:{low:{kick:'Heatwave',head:'Welcome to hell: 52°C in Brussels, Commissioner {name} melts into retirement',sub:'The air conditioning gave up first. Then the Commissioner.',scene:'🥵🔥🌡️',
   text:'The Green Deal now exists only on paper, and the paper caught fire. Brussels recorded 52 degrees, the Manneken Pis evaporated, and Commissioner {name} resigned from inside a freezer at the canteen.'},
  high:{kick:'Missing person',head:'Commissioner {name} now swimming with the fishes',sub:'Industry insists it was “just a friendly chat by the canal”',scene:'🐟🐟🦆🐟',
   text:'After one climate rule too many, Commissioner {name} was invited for a “friendly chat” with some very large industrialists. Last seen wearing concrete shoes and a rubber ring, waving cheerfully from the canal. A spokesperson called it “an unfortunate swimming accident”.'}},
 eco:{low:{kick:'Recession',head:'Recession: Commissioner {name} sells own office chair at flea market',sub:'Asking price €12. Open to offers.',scene:'🪑🏷️📉',
   text:'Factories closed, shops emptied, and even the lobbyists cut back to one croissant a day. On Sunday Commissioner {name} was spotted at the Jeu de Balle flea market, selling the office chair, two staplers and a slightly used flag.'},
  high:{kick:'Crash',head:'Bubble bursts: Commissioner {name} buried under empty luxury flats',sub:'Growth at any cost turned out to cost everything',scene:'🫧🏢🏢💥',
   text:'Prices only went up, until they didn’t. Overnight the bubble burst, cranes froze mid-air and Commissioner {name} was found under a pile of unsold penthouse brochures. The socialist sent flowers. And a pamphlet.'}},
 corp:{low:{kick:'Investment strike',head:'Last company leaves Europe and turns off the lights',sub:'Commissioner {name} found sitting alone in the dark',scene:'🏭💡🕯️',
   text:'One by one, the companies packed up for America and Asia. The last one, a small paperclip maker, politely switched off the lights on its way out. Commissioner {name} is still sitting there, holding a candle, waiting for a meeting that will never come.'},
  high:{kick:'Takeover',head:'Captured: Commissioner {name} wakes up with a barcode',sub:'Lobbyists now write the laws word for word; the Commissioner is listed as an asset',scene:'🏷️🔒🏢',
   text:'Lobbyists stopped bothering with meetings and simply sent the finished laws. This morning Commissioner {name} woke up with a barcode on the forehead and a job offer at a lobby firm. The revolving door spins smoothly. It has been oiled for years.'}}
};
const AFTER=[
 {when:r=>r.ending==='corp-high'||r.owned>=3,text:'You took a lovely job at a lobby firm. Your first client asks you to lobby your successor.',real:'This really happens: in 2016 former Commission President José Manuel Barroso joined Goldman Sachs, and ex-Commissioners moving to industry jobs regularly cause controversy.'},
 {when:r=>r.pacts>=3,text:'You opened a tarot shop near the Berlaymont. Business is suspiciously good, and some customers have no reflection.'},
 {when:r=>r.won&&r.matchPct>=50,text:'You now teach EU policy as a guest lecturer. Students love your stories; nobody believes the one about the ghost.'},
 {when:r=>r.ending==='trust-low',text:'You moved to a small island where rolling pins are banned. You still flinch at bakeries.'},
 {when:r=>r.money<5,text:'You went back to your old job. Your colleagues ask how Brussels was. You say “busy”.'},
 {when:r=>true,text:'You wrote a tell-all book, “Swipe Left on Brussels”. It was a bestseller for exactly one week.'}
];
// ---------- Futures: special endings when you finish the whole term ----------
// The player picks one of the unlocked futures. {org} = the company whose lobby you approved most.
const ISLAND_PRICE=75;    // k€ in the bank to buy the island
const GREEN_SHARE=.65;    // share of the dossiers with a green option where you chose nature
const FUTURES=[
 {id:'job',ico:'💼',name:'The job offer',need:'Finish every dossier',
  kick:'Revolving door',head:'Ex-Commissioner {name} joins {org} “to give something back”',sub:'Starts Monday. Corner office. Same corridor, other side of the table.',scene:'🏛️🚪💼',
  text:'The farewell drinks were still warm when the offer arrived: “Senior Adviser, EU Affairs” at {org}. Nobody was surprised, least of all the lobbyists you used to receive. On day one your new boss hands you a list of people to call. Your own phone number is on it, under “successor”.',
  next:'You took the job at {org}. Your first assignment: lobbying your successor. You know exactly which coffee they like.',
  real:'Former Commission President José Manuel Barroso joined Goldman Sachs in 2016. After the outcry the rules were tightened: Commissioners must now wait 2 years, the President 3.'},
 {id:'island',ico:'🏝️',name:'Your own island',need:'€'+ISLAND_PRICE+'k in the bank',
  kick:'Exclusive',head:'Ex-Commissioner {name} buys private island, declares it a “regulation-free zone”',sub:'No GDPR, no CO2 targets, no lobbyists. Mostly no lobbyists.',scene:'🏝️🌴🍹',
  text:'With a bank balance that raised eyebrows in three member states, former Commissioner {name} bought a small island with one palm tree, one hammock and zero EU directives. Lobbyists who try to land are politely turned away by a parrot trained to say “no comment”. Journalists still want to know where the money came from.',
  next:'You live on your island. Every morning a bottle washes ashore with a lobby letter in it. You use them to light the barbecue.'},
 {id:'weed',ico:'🌿',name:'The Brotherhood of Weed',need:'Choose nature in 2 of 3 dossiers where you could',
  kick:'Gone green',head:'Ex-Commissioner {name} vanishes into secret “Brotherhood of Weed”',sub:'Last seen barefoot, hugging an oak, refusing all emails',scene:'🌿☮️🥁',
  text:'Your many choices for nature did not go unnoticed. On your last evening a figure in a poncho slipped you a note: “The Brotherhood has been watching. Bring sandals.” Since then former Commissioner {name} lives in a commune in a forest whose location is secret. The secret handshake involves a tambourine. Monsanto has sent seventeen letters. Nobody opened them.',
  next:'You joined the Brotherhood of Weed. You grow tomatoes, you drum on Thursdays, and you have never felt better.'}
];
const GAMEOVER={
 eco:{0:['Recession','The economy collapses. Factories close and unemployment soars. Brussels gets the blame for everything.'],
      100:['Bubble','Growth at any cost: the bubble bursts and your deregulation is in every paper.']},
 clim:{0:['Climate collapse','Heatwaves, failed harvests and floods. The Green Deal exists only on paper.'],
       100:['Industry leaves','Your climate rules are so strict that factories move out of the EU en masse.']},
 trust:{0:['Public fury','Citizens have had enough of the lobby. You’re voted out at the European elections.'],
        100:['Blind faith','Everyone trusts you, so nobody checks on you. Until your own bribery scandal breaks.']},
 corp:{0:['Investment strike','Companies pull their money and move their headquarters. Nothing gets off the ground.'],
       100:['Captured','Lobbyists now write the laws word for word. You move to a cushy job at a lobby firm: the revolving door.']}
};

// ---------- Consequences: follow-up cards ----------
// on = which choice on the parent card triggers this. kind: counter (other side), angry (angry return), alt (new proposal).
const FOLLOW=[
{id:'five-years-then',org:'Monsanto',parent:'Weedkiller for 15 more years',on:'L',kind:'alt',sector:'AGRO',year:'2017',name:'Dr. Harald Weedburn',role:'Director of Regulatory Affairs',
 title:'Five years, then?',quip:'Fifteen was an opening bid. You knew that.',
 ask:'"Fine, not fifteen years. How about five? A compromise. Everyone happy."',
 L:[-4,4,2,-6],R:[4,-4,2,4],eu:'R',
 who:'You rejected the fifteen-year renewal. The producer comes back with a smaller ask.',
 what:'This is exactly what happened in 2017: after months of rows, the member states settled on a five-year renewal instead of fifteen.',
 src:[['Implementing Regulation (EU) 2017/2324','https://eur-lex.europa.eu/eli/reg_impl/2017/2324/oj']],
 news:{R:'Compromise! Weedkiller stays five years; nobody happy, so it must be fair',L:'Commissioner says no twice; farm lobby seeks therapist'}},
{id:'not-in-our-parks-then',org:'Beekeepers’ association',parent:'Weedkiller for 15 more years',on:'R',kind:'counter',sector:'FARM',year:'2017',name:'Greet Honingraat',role:'Chair, beekeepers’ association',
 title:'Not in our parks, then',quip:'I brought honey. While we still can.',
 ask:'"You renewed it. Then at least ban it in parks, school playgrounds and along pavements."',
 L:[0,-2,-4,2],R:[-2,4,6,-4],eu:null,
 who:'You renewed glyphosate. Now beekeepers and parents take action.',
 what:'Several EU countries and many municipalities restricted glyphosate outside farming, including the Netherlands.',
 news:{R:'Playgrounds poison-free again; dandelions celebrate',L:'Beekeepers put hives outside the Berlaymont, "for atmosphere"'}},
{id:'then-the-factory-closes',org:'ACEA (car lobby)',parent:'A little slack in the road test',on:'L',kind:'angry',angry:true,sector:'AUTO',year:'2016',name:'Klaus Dieselhoff',role:'Head of Emissions Policy, car industry',
 title:'Then the factory closes',quip:'I’m not saying anything. I’m just showing you this list of layoffs.',
 ask:'"Stricter tests? Fine. Then we’ll move 3,000 jobs outside the EU. Unless you reconsider."',
 L:[-6,2,6,-4],R:[6,-6,-6,8],eu:null,
 who:'You refused the diesel slack. The car lobby comes back with a threat.',
 what:'Carmakers often threaten to move production. In 2024 Volkswagen announced for the first time that it wanted to close factories in Germany.',
 news:{R:'Commissioner caves to factory threat; diesels may be "a bit" dirty again',L:'Commissioner holds firm; car boss angrily throws keys down corridor'}},
{id:'help-our-clean-air-zones',org:'City hall',parent:'A little slack in the road test',on:'R',kind:'counter',sector:'GAS',year:'2016',name:'Amélie Smogneau',role:'Deputy Mayor for Air Quality, big city',
 title:'Help our clean air zones',quip:'Sorry about the face mask. I’ve just come from outside.',
 ask:'"Because of your diesel slack, our children breathe dirty air. Give cities EU money for clean air zones."',
 L:[2,-4,-6,4],R:[-2,6,6,-4],eu:null,
 who:'You gave the car lobby slack. Now the cities are on your doorstep.',
 what:'Paris, Brussels and Madrid took the diesel slack to the EU General Court in 2016. Many cities introduced their own clean air zones.',
 news:{R:'Clean air zones get EU money; old diesels seek new home in the countryside',L:'Mayors threaten lawsuit; Commissioner pretends not to be in'}},
{id:'a-really-big-green-button',org:'Google & Facebook',parent:'Privacy, but flexible',on:'L',kind:'alt',sector:'TECH',year:'2018',name:'Megan Cookiesworth',role:'EU Public Policy Lead, Silicon Valley',
 title:'A really big green button',quip:'We do ask for consent. We just make saying yes very easy.',
 ask:'"OK, we’ll ask for consent. Can it be a huge green "Accept all" button and a tiny grey "reject" link?"',
 L:[-2,0,6,-4],R:[4,0,-8,6],eu:'L',
 who:'You kept the privacy law strict. Tech companies look for a clever workaround.',
 what:'Regulators cracked down on misleading cookie banners. In 2022 France’s regulator CNIL fined Google and Facebook a combined €210 million because rejecting was harder than accepting.',
 news:{R:'Cookie banner now bigger than the website',L:'"Reject" button must be same size; designers in shock'}},
{id:'see-you-in-court',org:'Privacy activist',parent:'Privacy, but flexible',on:'R',kind:'counter',sector:'TECH',year:'2015',name:'Jonas Suesalot',role:'Privacy activist and lawyer',
 title:'See you in court',quip:'I have time. And lots of lawyers working for free.',
 ask:'"You’ve hollowed out privacy law. Reverse it, or I go to the Court of Justice. And I always win."',
 L:[2,0,-6,4],R:[-2,0,8,-6],eu:null,
 who:'You weakened privacy rules. An activist threatens to sue.',
 what:'Austrian lawyer Max Schrems got the Court of Justice to strike down EU–US data transfer arrangements twice, in 2015 and in 2020.',
 news:{R:'Commissioner reverses privacy rollback; activist orders cake',L:'Activist files 400-page complaint; postman gets backache'}},
{id:'no-new-features-for-europe',org:'Apple',parent:'No gatekeeper law',on:'L',kind:'angry',angry:true,sector:'TECH',year:'2024',name:'Daniel Appleby',role:'Head of Competition Policy',
 title:'No new features for Europe',quip:'Shame for your citizens. Real shame.',
 ask:'"Because of your rules, we’re keeping our newest features out of Europe for now. Unless you get a bit… more flexible."',
 L:[-2,0,4,-4],R:[4,0,-6,8],eu:'L',
 who:'You kept the gatekeeper law. Big Tech responds with a countermove.',
 what:'In 2024 Apple kept some new features, such as Apple Intelligence and iPhone Mirroring, out of the EU for the time being, citing the DMA.',
 news:{R:'Commissioner relaxes rules for new emojis',L:'Europeans must wait a bit for AI feature; survive'}},
{id:'a-cold-winter',org:'Gazprom',parent:'A second pipe under the Baltic',on:'L',kind:'angry',angry:true,sector:'GAS',year:'2021',name:'Viktor Pipelinov',role:'Pipeline Project Director',
 title:'A cold winter',quip:'Do you own a warm jumper? Just asking.',
 ask:'"No pipeline? Then it’ll be a bit colder in Europe this winter. Sign anyway, and we stay friends."',
 L:[-6,2,6,-4],R:[8,-6,-10,8],eu:null,
 who:'You refused the pipeline. The gas supplier plays with the tap.',
 what:'In 2021 Gazprom kept European gas storage strikingly empty and gas prices soared, even before Russia invaded Ukraine.',
 news:{R:'Commissioner signs after all; gas cheap again "until further notice"',L:'Europe buys jumpers en masse; knitting shops post record sales'}},
{id:'a-drawing-from-daan',org:'A worried parent',parent:'Save the straw',on:'R',kind:'counter',sector:'PLAST',year:'2018',name:'Femke Strootje',role:'Mother of Daan (8)',
 title:'A drawing from Daan',quip:'Daan spent three days on it. With glitter.',
 ask:'"My son sent you a drawing: a turtle with a straw up its nose. Will you do something about it after all?"',
 L:[0,-2,-6,2],R:[-2,6,8,-6],eu:'L',
 who:'You saved the plastic straw. Now you’re getting post from a primary school kid.',
 what:'A 2015 video of a sea turtle with a straw stuck in its nose went viral and gave the campaign against single-use plastic a big push.',
 news:{R:'Commissioner bows to eight-year-old’s drawing; plastics lobby loses to glitter',L:'Daan (8) disappointed; turtle even more so'}},
{id:'the-tractors-are-coming',org:'Copa-Cogeca',parent:'Scrap the nature restoration law',on:'L',kind:'angry',angry:true,sector:'FARM',year:'2024',name:'Jan-Willem Trekkersma',role:'Policy Adviser, farmers’ federation',
 title:'The tractors are coming',quip:'I brought a thousand of them. They’re outside.',
 ask:'"You didn’t listen. Tomorrow there’ll be a thousand tractors in Brussels. Unless you scrap the green rules for farmers."',
 L:[-4,4,-4,-4],R:[4,-6,-2,6],eu:'R',
 who:'You kept the nature restoration law. The farm lobby mobilises the tractors.',
 what:'In early 2024 farmers blocked Brussels and motorways across Europe with tractors. The EU then scrapped several green requirements from farm policy.',
 news:{R:'Green rules scrapped; tractors honk their way home',L:'A thousand tractors in Brussels; manure outside the Commission'}},
{id:'then-our-gas-goes-to-asia',org:'A gas-exporting state',parent:'Trim the supply chain law',on:'L',kind:'angry',angry:true,sector:'GAS',year:'2025',name:'Minister Ivo Exportini',role:'Energy Minister, gas-exporting country',
 title:'Then our gas goes to Asia',quip:'We have other customers too. Many other customers.',
 ask:'"You’re keeping that supply chain law? Then we’d rather sell our liquefied gas to Asia."',
 L:[-6,2,6,-4],R:[6,-4,-6,6],eu:'R',
 who:'You kept the supply chain law intact. A gas supplier makes threats.',
 what:'Qatar repeatedly threatened in 2024 and 2025 to cut LNG deliveries to the EU over the supply chain law. The law was heavily watered down at the end of 2025.',
 news:{R:'Supply chain law weakened after gas threat; human rights "on hold"',L:'Gas state threatens, Commissioner doesn’t blink; LNG tanker goes round in circles'}},
{id:'its-called-an-allowance-now',org:'AFME (banks)',parent:'No cap on bonuses',on:'L',kind:'alt',sector:'BANK',year:'2014',name:'Edward Bonusworth',role:'Managing Director, banking association',
 title:'It’s called an "allowance" now',quip:'It’s not a bonus. It’s a fixed, flexible, performance-related allowance.',
 ask:'"Fine, a cap on bonuses. Then from now on we’ll call it a "role allowance". That’s allowed, surely?"',
 L:[-2,0,6,-4],R:[4,0,-8,6],eu:'L',
 who:'You introduced the bonus cap. The banks find a workaround.',
 what:'Banks got round the cap with "role-based allowances": fixed payments per job. The European Banking Authority put a stop to that in 2014.',
 news:{R:'Bonus now called "allowance"; bankers celebrate with an "allowance party"',L:'Regulator: an allowance that looks like a bonus is a bonus'}},
{id:'free-but-with-a-limit',org:'ETNO (telecom)',parent:'Keep roaming charges',on:'L',kind:'alt',sector:'TEL',year:'2016',name:'Pilar Roamero',role:'Head of Regulation, telecom operator',
 title:'Free, but with a limit',quip:'Fifty megabytes. That’s enough for… half a photo.',
 ask:'"OK, free roaming. But with a "fair use" limit. Say, fifty megabytes?"',
 L:[0,0,6,-4],R:[2,0,-6,6],eu:'M',
 who:'You scrapped roaming. The operators negotiate the small print.',
 what:'Fair use limits remained allowed: operators may charge extra if someone uses their bundle abroad permanently. A proposal for a very tight limit was withdrawn in 2016 after an outcry.',
 news:{R:'Free roaming, until you send a photo',L:'Commissioner keeps roaming truly free; telecom boss eats his SIM card'}},
{id:'one-tiny-exception-for-beets',org:'Bayer & Syngenta',parent:'Keep the neonicotinoids',on:'L',kind:'alt',sector:'AGRO',year:'2020',name:'Dr. Felix Buzzkill',role:'Scientific Adviser, crop protection',
 title:'One tiny exception for beets',quip:'Just this year. And next year. And maybe after that.',
 ask:'"A ban, fine. But one small emergency authorisation for sugar beet? The aphids are really bad this year."',
 L:[-4,4,4,-4],R:[4,-6,-4,6],eu:'L',
 who:'You banned the neonicotinoids. The producer asks for an exception.',
 what:'Member states issued "emergency authorisations" for neonicotinoids on sugar beet for years. The Court of Justice ruled that unlawful in January 2023.',
 news:{R:'Emergency permit for beets; bees ask for a second opinion',L:'No exception: beet farmer seeks alternative, finds ladybirds'}},
{id:'then-we-leave-your-city',org:'Uber',parent:'Couriers are entrepreneurs',on:'L',kind:'angry',angry:true,sector:'GIG',year:'2021',name:'Lucas Gigsworth',role:'Head of EU Public Policy, ride-hailing',
 title:'Then we leave your city',quip:'I’ll order a pizza myself tonight. Oh, wait.',
 ask:'"Contracts for couriers? Then we pull out of twelve European cities. Good luck with your takeaway pizza."',
 L:[-4,0,6,-4],R:[2,0,-6,6],eu:null,
 who:'You gave couriers rights. The platform threatens to leave.',
 what:'Food delivery company Deliveroo left Spain in 2021, just before a new law made couriers employees.',
 news:{R:'Commissioner caves; couriers back to "entrepreneur with a bike bell"',L:'Platform leaves; local pizzeria delivers itself again, by moped'}},
{id:'two-blast-furnaces-will-close',org:'Eurofer (steel)',parent:'Free CO2 allowances',on:'L',kind:'angry',angry:true,sector:'STEEL',year:'2025',name:'Wolfgang Smelterhaus',role:'Director of Climate & Energy, steel federation',
 title:'Two blast furnaces will close',quip:'I have a list of workers’ names. Would you like to read it?',
 ask:'"No more free allowances? Then we close two blast furnaces. Thousands of jobs. Your choice."',
 L:[-8,6,2,-6],R:[6,-6,-4,6],eu:null,
 who:'You stopped the free CO2 allowances. The steel industry threatens closures.',
 what:'In 2025 ArcelorMittal shelved plans for green steel plants in Germany, citing high energy prices and a weak market.',
 news:{R:'Blast furnaces stay open, and so do the emissions',L:'Steel boss threatens, Commissioner offers green steel subsidy; both annoyed'}},
{id:'can-we-have-flavours-then',org:'Philip Morris',parent:'No shock photos',on:'L',kind:'alt',sector:'TOB',year:'2016',name:'Richard Smokeswell',role:'Vice-President Corporate Affairs',
 title:'Can we have flavours, then?',quip:'Strawberry-mango. For adults, naturally.',
 ask:'"Fine, shock photos on cigarettes. But can we have flavours in vapes? Bubblegum, strawberry, unicorn?"',
 L:[-2,0,6,-4],R:[4,0,-8,6],eu:null,
 who:'You put shock photos on cigarettes. The tobacco industry shifts to vapes.',
 what:'Tobacco companies invested heavily in e-cigarettes and nicotine pouches. The Netherlands banned flavours in e-cigarettes from 2024.',
 news:{R:'Unicorn vape a playground hit; parents furious',L:'No sweet flavours in vapes; tobacco lobby stuck with "tobacco"'}}
];

// ---------- World events: triggered by where your bars stand ----------
// "In your Europe": what happens in the game because of your choice (R = approved, L = rejected).
const ALT={
 'weedkiller-for-15-more-years':{R:'Fifteen more years of spraying. Farmers cheer, beekeepers move to Switzerland, and a lab in Brussels gets a very large new wing.',L:'The licence runs out. Farmers scramble for alternatives, weeds have a party, and garden centres sell out of hoes.'},
 'a-little-slack-in-the-road-test':{R:'Diesels may emit far more on the road than in the lab. City air gets thicker, and so do the car makers’ profit margins.',L:'Road tests become strict. Car makers grumble, then quietly fit better filters. Doctors in Milan notice fewer coughing kids.'},
 'privacy-but-flexible':{R:'“Legitimate interest” becomes a magic phrase. Your fridge now knows your blood type and sells it to an insurer.',L:'Companies must ask first. Cookie banners multiply, but your data stays a little more yours.'},
 'make-platforms-pay':{R:'Platforms become liable for every upload. Upload filters go up everywhere; a cat video with a radio in the background is blocked.',L:'Platforms stay off the hook. Musicians keep earning fractions of a cent, and nobody’s cover of Wonderwall is ever taken down.'},
 'no-gatekeeper-law':{R:'Big Tech regulates itself. App store fees stay at 30%, and the self-assessment reports are marked “excellent” by Big Tech.',L:'The gatekeeper law bites. Alternative app stores appear, and your phone suddenly lets you pick your own browser.'},
 'let-us-regulate-ai-ourselves':{R:'Only voluntary codes for AI. Chatbots write half of all news, and nobody checks the other half.',L:'Big AI models face binding rules. A few launches are delayed in Europe; the developers call it the end of the world, then launch anyway.'},
 'a-second-pipe-under-the-baltic':{R:'The second pipe opens outside the market rules. Gas is cheap, until one winter morning the taps are turned down.',L:'No pipe. Gas costs a bit more, LNG terminals get built in record time, and the pipe’s steel is sold for scrap.'},
 'natural-gas-is-green-too':{R:'Gas plants get the green label. Pension funds pour in, and “sustainable” now includes a lot of methane.',L:'Gas stays off the green list. Investors rush into wind and solar, and the gas lobby rents a smaller office.'},
 'save-the-straw':{R:'Plastic straws stay. Beach clean-up volunteers keep collecting them in the thousands every summer.',L:'Plastic straws disappear. Everyone complains about soggy paper straws for a year, then forgets.'},
 'ditch-the-reusable-cup':{R:'Paper wins. Forests feel it, bins overflow a little less with plastic and a little more with cardboard.',L:'Reusable cups and boxes become normal. Your lunch comes in a box with a deposit, and the coffee tastes the same.'},
 'scrap-the-nature-restoration-law':{R:'Nature restoration is off the table. Farmland stays farmland; the last few marshes are drained for one more harvest.',L:'Nature restoration goes ahead. Rivers get room again, and the storks return before the subsidies do.'},
 'trim-the-supply-chain-law':{R:'Only the very biggest firms must check their supply chains. Nobody is quite sure who made your trainers, or under what conditions.',L:'Companies must check their suppliers for child labour and pollution. Compliance consultants buy second homes.'},
 'no-cap-on-bonuses':{R:'Bonuses are unlimited again. Banking pay soars, and so does appetite for risk.',L:'The bonus cap stays. Banks raise basic salaries instead; bankers survive, just about.'},
 'keep-roaming-charges':{R:'Roaming fees stay. One holiday photo upload in Spain costs more than the paella.',L:'Roam like at home. Your summer selfies go out at home prices, and operators survive anyway.'},
 'no-traffic-light-on-the-label':{R:'No colour-coded labels. Shoppers keep squinting at tables of tiny numbers.',L:'Traffic lights on the label. Chocolate goes red, broccoli goes green, and ready-meal recipes quietly change.'},
 'keep-the-neonicotinoids':{R:'The seed coating stays. Harvests hold up, but the bees don’t, and orchards rent hives from further and further away.',L:'The neonicotinoids are banned. Farmers switch methods, some harvests dip, and the bees get a breather.'},
 'no-shock-photos':{R:'Only a small text warning. Cigarette packs stay sleek and stylish.',L:'Shock photos on two-thirds of the pack. Smokers buy pouches to hide them, and fewer teenagers start.'},
 'save-the-combustion-engine':{R:'The 2035 ban is scrapped. Petrol cars roll on for decades, and Europe’s battery factories move to Asia.',L:'2035 stays. Car makers go all in on electric, and charging points sprout like mushrooms.'},
 'couriers-are-entrepreneurs':{R:'Couriers are self-employed by law. Flexible, yes; sick pay, no.',L:'Couriers are presumed employees. Delivery costs a euro more, and riders get holiday pay.'},
 'free-co2-allowances':{R:'Steelworks keep their free emission allowances. They stay in Europe, and keep emitting at a discount.',L:'Polluters pay for every tonne. Two blast furnaces switch to hydrogen; one threatens to move and doesn’t.'},
 'delay-the-deforestation-law':{R:'The deforestation law is delayed again. Another stretch of rainforest becomes a soy field before anyone checks.',L:'The law applies on time. Importers suddenly know exactly where their cocoa comes from.'},
 'no-register-for-foreign-lobbying':{R:'No register. Foreign governments keep lobbying quietly through friendly consultancies.',L:'Foreign lobbying must be registered. A few “cultural foundations” suddenly close their Brussels offices.'},
 'let-publishers-switch-off-games':{R:'Publishers may switch off games at will. Your favourite online game becomes a very expensive screensaver.',L:'Games must stay playable after support ends. Old servers get open-sourced, and retro gaming booms.'},
 'buy-european-weapons':{R:'Billions in EU-backed loans flow to arms makers. Factories run three shifts; the social budget gets a little thinner.',L:'No EU loans for weapons. Member states buy on their own, mostly from abroad, and the arms lobby doubles its budget.'},
 'more-money-for-riot-police':{R:'EU money buys riot gear. The next protest is met with brand-new water cannons.',L:'No EU money for riot police. Police chiefs complain, and community officers get a little more attention.'}
};
// Compromise deals: three ways to meet in the middle. real:true = what the EU actually did.
const DEALS={
 'weedkiller-for-15-more-years':[
  {t:'Five years instead of fifteen',d:'A renewal, but a short one. Everyone grumbles, nobody wins.',e:[2,-3,-2,3],real:true},
  {t:'Fifteen years, banned in private gardens',d:'Farmers keep spraying; your neighbour’s lawn goes organic.',e:[6,-6,-4,8]},
  {t:'Three years and an independent study',d:'Buy time and let the scientists fight it out.',e:[-3,4,3,-5]}],
 'let-us-regulate-ai-ourselves':[
  {t:'Rules for the biggest models, details in a voluntary code',d:'Binding on paper, the fine print written with industry.',e:[3,-1,-1,3],real:true},
  {t:'Voluntary only, review in five years',d:'Trust the tech giants. What could go wrong?',e:[6,-1,-6,8]},
  {t:'Strict rules, with a sandbox for start-ups',d:'Tough on the giants, gentle on the small fry.',e:[-2,0,4,-4]}],
 'a-second-pipe-under-the-baltic':[
  {t:'Build it, but under EU gas rules',d:'No ban, but the pipe has to play by the internal market rulebook.',e:[3,-2,0,2],real:true},
  {t:'A ten-year exemption from the rules',d:'Cheap gas now, questions later.',e:[8,-6,-6,8]},
  {t:'Only if transit through Ukraine continues',d:'A pipe with a political condition attached.',e:[-3,2,4,-3]}],
 'save-the-combustion-engine':[
  {t:'A 90% cut, the rest offset with e-fuels and green steel',d:'The 2035 target bends, but doesn’t break.',e:[3,-3,-1,3],real:true},
  {t:'Push the deadline to 2040',d:'Five more years of petrol for everyone.',e:[6,-9,-3,8]},
  {t:'Keep 2035, add subsidies for cheap electric cars',d:'Same goal, with a carrot for drivers.',e:[-3,7,2,-4]}],
 'couriers-are-entrepreneurs':[
  {t:'Presumed employees, but each country sets the criteria',d:'A strong principle with 27 different loopholes.',e:[1,0,2,1],real:true},
  {t:'Self-employed, with a minimum hourly rate',d:'Freedom, plus a floor under the pay.',e:[4,0,-3,6]},
  {t:'Employees by default, everywhere in the EU',d:'One rule for the whole union.',e:[-3,0,7,-7]}],
 'let-publishers-switch-off-games':[
  {t:'No new law, but a voluntary code of conduct',d:'Industry promises to behave. Gamers roll their eyes.',e:[2,0,-3,3],real:true},
  {t:'Publishers must say how long a game will be supported',d:'A best-before date on the box.',e:[0,0,3,-1]},
  {t:'An offline patch when support ends',d:'The servers go dark, the game keeps running.',e:[-1,0,6,-4]}],
 'more-money-for-riot-police':[
  {t:'Money for cooperation and training, but no weapons or riot sticks',d:'Shared databases and joint operations; batons stay a national purchase.',e:[0,0,1,1],real:true},
  {t:'Fund everything, riot gear included',d:'Drones, cameras, water cannons: one big shopping list.',e:[1,0,-4,4]},
  {t:'Spend it on prevention and community policing',d:'Fewer helmets, more neighbourhood officers.',e:[-1,0,4,-3]}],
 'free-but-with-a-limit':[
  {t:'Fair use, only against permanent roaming',d:'Holidaymakers roam free; people living abroad on a foreign SIM don’t.',e:[1,0,1,1],real:true},
  {t:'One gigabyte a month abroad',d:'Enough for maps, not for Netflix.',e:[2,0,-3,4]},
  {t:'No limit at all',d:'Roam like at home, really like at home.',e:[-1,0,5,-3]}]
};
const PACTS=[
{id:'angel',char:'angel',kind:'charges',charges:1,use:'comp',ico:'⇅',label:'Compromise',title:'A spare middle way',
 text:'"Here, {name}. One extra compromise, for when you truly need it. No strings. Angels don’t do strings."',
 gift:'+1 extra compromise, on top of your one per day.',price:'Nothing. She only asks that you use it wisely.'},
{id:'devil',char:'devil',kind:'freeze',title:'A day without worries',
 text:'"Pick one of your worries, {name}. Tomorrow, nothing a lobbyist does can touch it. Nothing at all."',
 gift:'Pick a bar: tomorrow no dossier can move it.',price:'One of two prices. He won’t say which.'},
{id:'banker',char:'banker',kind:'contract',cash:60,heat:10,title:'Cash up front',
 text:'"Sixty thousand, {name}. No questions. Just two little signatures on two little dossiers. You’ll hardly notice."',
 gift:'+€60k straight away, and +€2k on your daily salary from now on.',price:'You must approve the next 2 business-friendly dossiers.'},
{id:'earth',char:'earth',kind:'earth',title:'Nature’s blessing',
 text:'"Tomorrow, every kindness you show me grows half as large again. But do not lift a finger against me, {name}. Not one."',
 gift:'Tomorrow every Climate gain is 50% bigger.',price:'Tomorrow you can’t approve any dossier that harms the climate.'},
{id:'time',char:'time',kind:'charges',charges:4,use:'rewind',ico:'⏳',label:'Rewind',title:'Four borrowed minutes',
 text:'"Four times, {name}, you may take back your last decision. Each minute has a price. Minutes always do."',
 gift:'4× undo your last decision of the day.',price:'Each rewind costs a day’s salary and draws media attention.'},
{id:'justice',char:'justice',kind:'justice',title:'The blindfold lifts',
 text:'"Tomorrow you will see exactly what each choice does, {name}. In return, you will not go against what Brussels truly decided."',
 gift:'Tomorrow you see the exact effect of every choice on the bars.',price:'Tomorrow you can’t choose against the real EU decision.'},
{id:'ghost',char:'ghost',kind:'charges',charges:4,use:'ghost',ico:'👻',label:'Ask the ghost',title:'A haunting, with benefits',
 text:'"So far I’ve haunted you for free, {name}. For the real secrets, what Brussels truly decided, I need to haunt you properly. Your staff will find it… unsettling."',
 gift:'4× hear what the EU really decided, before you choose.',price:'While he haunts you, Trust drops 1 every morning.'},
{id:'socialist',char:'socialist',kind:'charges',charges:4,use:'rally',ico:'✊',label:'Rally',title:'The street is with you',
 text:'"Call on the people four times, {name}, and they’ll cheer whatever you sign. Mostly cheer. Sometimes they set fire to bins."',
 gift:'4× a rally: +3 Trust on that decision, whatever you choose. And your salary now rises with inflation.',price:'Every rally raises the chance of riots, and riots hit the Economy.'}
];
const RIOT={id:'riot',spawn:'more-money-for-riot-police',ico:'🔥',kick:'Riots',head:'Rallies spill over into riots in several capitals',
 text:'What started as a cheerful march for the Commissioner ended with burning bins and smashed shop windows. Shopkeepers count the damage.',
 eff:[-6,0,-2,0],real:'Large protests can turn violent: the 2018–2019 “gilets jaunes” protests in France began peacefully and later saw widespread riots and damage.'};
const WORLD=[
{id:'war',added:'2026-10-07',spawn:'buy-european-weapons',infl:4,when:'random, from day 3',ico:'🪖',cond:S=>typeof day!=='undefined'&&day>=3&&Math.random()<.3,kick:'Security',head:'Tanks on Europe’s doorstep: a neighbouring country is invaded',
 text:'Overnight, a war breaks out just beyond the EU’s eastern border. Energy prices spike, refugees arrive, and every arms maker in Europe books a flight to Brussels.',
 eff:[-5,0,-2,2],real:'On 24 February 2022 Russia launched a full-scale invasion of Ukraine. In the years after, the EU agreed new defence programmes and defence-industry lobbying in Brussels rose sharply.'},
{id:'voice',added:'2026-10-07',when:'Trust ≤ 42 and Corp. Power ≥ 55',ico:'📡',cond:S=>S.trust<=42&&S.corp>=55,kick:'Interference',head:'Foreign-funded news site paid politicians, investigators say',
 text:'A slick “independent” news channel turns out to be run from abroad. Several politicians gave interviews, and some allegedly got paid.',
 eff:[0,0,-7,0],real:'In April 2024 the European Parliament condemned Kremlin-backed interference via the outlet Voice of Europe and called for sanctions. A directive to register lobbying for non-EU governments was proposed in December 2023.'},
{id:'staking',spawn:'more-money-for-riot-police',when:'Trust ≤ 32 or Economy ≤ 30',ico:'✊',cond:S=>S.trust<=32||S.eco<=30,kick:'Unrest',head:'General strike paralyses half of Europe',
 text:'Trains stand still, schools are shut and the rubbish piles up. Protesters are chanting your name, and not kindly.',
 eff:[-8,0,-4,2],real:'In 2023, months of strikes against the pension reform brought large parts of France to a standstill.'},
{id:'brand',when:'Climate ≤ 32',ico:'🔥',cond:S=>S.clim<=32,kick:'Climate',head:'Record wildfires across southern Europe',
 text:'Tourists flee Greek islands, smoke drifts as far as Brussels. Farmers lose their harvests.',
 eff:[-6,-2,-5,0],real:'In 2025 more than a million hectares burned in the EU, the most since European records began.'},
{id:'baby',when:'Trust ≤ 38 and Economy ≤ 45',ico:'👶',cond:S=>S.trust<=38&&S.eco<=45,kick:'Society',head:'Europeans having fewer children than ever',
 text:'Young couples say they can’t find a home and have no faith in the future. Maternity wards are closing.',
 eff:[-4,0,-4,0],real:'In 2023 around 3.7 million children were born in the EU, the lowest number since 1961 (Eurostat).'},
{id:'trekker',when:'Climate ≥ 72',ico:'🚜',cond:S=>S.clim>=72,kick:'Farming',head:'Farmers block Brussels with tractors',
 text:'Farmers think your climate rules are too strict. There’s manure on the Berlaymont’s doorstep.',
 eff:[-3,0,-5,2],real:'In early 2024 farmers blocked roads and cities across Europe; the EU then weakened green requirements in farm policy.'},
{id:'vertrek',when:'Corp. Power ≤ 28',ico:'✈️',cond:S=>S.corp<=28,kick:'Economy',head:'Companies moving to America',
 text:'Factories and start-ups leave, lured by US subsidies. Investors call Europe "the museum".',
 eff:[-7,0,-2,2],real:'After the US Inflation Reduction Act (2022), several European companies announced new investments in the US instead of Europe.'},
{id:'lek',when:'Corp. Power ≥ 72',ico:'🕵️',cond:S=>S.corp>=72,kick:'Scandal',head:'Leaked: lobbyists co-wrote EU law',
 text:'An investigative journalist finds whole sentences from a lobby paper copied word for word into a legislative proposal.',
 eff:[0,0,-8,-2],real:'In 2025 Belgian prosecutors opened an investigation into alleged bribery of MEPs by Huawei lobbyists.'},
{id:'bubbel',when:'Economy ≥ 74',ico:'🏠',cond:S=>S.eco>=74,kick:'Housing',head:'House prices hit record high',
 text:'The economy is booming, but young people live with their parents until 35.',
 eff:[2,0,-6,2],real:'EU house prices rose by roughly half between 2015 and 2024, much faster than wages (Eurostat).'},
{id:'opkomst',when:'Trust ≥ 70',ico:'🗳️',cond:S=>S.trust>=70,kick:'Democracy',head:'Turnout rises at European elections',
 text:'Europeans feel like voting again. Some of them even know your name.',
 eff:[2,0,3,-2],real:'Turnout at the 2019 and 2024 European elections was around 50%, the highest in decades.'}
];
/* ---------- portrait ---------- */
function rng(seed){let t=seed>>>0;return()=>{t+=0x6D2B79F5;let r=Math.imul(t^t>>>15,1|t);r^=r+Math.imul(r^r>>>7,61|r);return((r^r>>>14)>>>0)/4294967296}}
function hash(str){let h=2166136261;for(const ch of str){h^=ch.charCodeAt(0);h=Math.imul(h,16777619)}return h}
function face(c){
  if(c.char&&CHARS[c.char])return CHARS[c.char].svg;
  const r=rng(hash(c.faceSeed||c.name)), pick=a=>a[Math.floor(r()*a.length)];
  const skin=pick(['#f1d2b6','#e3b28f','#c98e66','#a26a45','#7a4a2c','#f5dcc6']);
  const hair=pick(['#1f1a17','#4a3020','#8a5a2b','#c9a15a','#9a9a9a','#2b2b33']);
  const suit=pick(['#1f2a44','#2f3540','#3b2f4a','#23383a','#4a4a52']);
  const tie=SECTORS[c.sector].c, bg=SECTORS[c.sector].c;
  const style=Math.floor(r()*5), glasses=r()<.45, smile=r()<.5;
  const female=/Megan|Sophie|Isabelle|Charlotte|Hélène|Sabine|Pilar|Ana|Greet|Femke|Amélie/.test(c.faceSeed||c.name);
  let hairBack='',hairFront='';
  if(female){
    hairBack=style%2?`<path d="M34 54 Q32 92 44 100 L76 100 Q88 92 86 54 Q86 26 60 26 Q34 26 34 54Z" fill="${hair}"/>`
                    :`<circle cx="60" cy="24" r="10" fill="${hair}"/>`;
    hairFront=`<path d="M39 52 Q40 31 60 30 Q80 31 81 52 Q72 40 60 41 Q50 41 39 52Z" fill="${hair}"/>`;
  }else{
    hairFront=[`<path d="M39 50 Q40 30 60 29 Q80 30 81 50 Q78 40 60 39 Q42 40 39 50Z" fill="${hair}"/>`,
      `<path d="M39 52 Q38 30 62 29 Q82 31 81 50 Q70 36 50 42 Q44 44 39 52Z" fill="${hair}"/>`,
      `<path d="M39 54 Q39 44 43 41 L43 52Z M81 54 Q81 44 77 41 L77 52Z" fill="${hair}"/>`,
      `<path d="M38 50 Q38 26 60 27 Q82 26 82 50 L78 44 Q60 34 42 44Z" fill="${hair}"/>`,
      `<path d="M40 48 Q44 30 60 30 Q76 30 80 48 Q60 38 40 48Z" fill="${hair}"/>`][style];
  }
  const eyes=glasses
    ?`<g fill="none" stroke="#1a1a1a" stroke-width="2"><rect x="44" y="50" width="12" height="9" rx="3"/><rect x="64" y="50" width="12" height="9" rx="3"/><path d="M56 54 H64"/></g><circle cx="50" cy="54.5" r="1.8" fill="#1a1a1a"/><circle cx="70" cy="54.5" r="1.8" fill="#1a1a1a"/>`
    :`<circle cx="50" cy="54" r="2.2" fill="#1a1a1a"/><circle cx="70" cy="54" r="2.2" fill="#1a1a1a"/><path d="M45 48 H54 M66 48 H75" stroke="${hair}" stroke-width="2" stroke-linecap="round"/>`;
  const mouthOrig=smile?`<path d="M53 69 Q60 74 67 69" fill="none" stroke="#5a2a20" stroke-width="2" stroke-linecap="round"/>`
                   :`<path d="M54 70 H66" stroke="#5a2a20" stroke-width="2" stroke-linecap="round"/>`;
  const mouth=c.angry?`<path d="M52 72 Q60 66 68 72" fill="none" stroke="#5a2a20" stroke-width="2.4" stroke-linecap="round"/><path d="M43 46 L55 51 M77 46 L65 51" stroke="#1a1a1a" stroke-width="3" stroke-linecap="round"/><path d="M84 40 l4 -4 m-4 0 l4 4 M88 44 l4 -2" stroke="#bb474f" stroke-width="2" stroke-linecap="round"/>`:mouthOrig;
  return `<svg viewBox="0 0 120 120" aria-hidden="true">
   <circle cx="60" cy="60" r="58" fill="${bg}"/>
   ${hairBack}
   <path d="M18 120 Q20 92 46 86 L74 86 Q100 92 102 120Z" fill="${suit}"/>
   <path d="M50 86 L60 104 L70 86Z" fill="#efe4d8"/>
   ${female?'':`<path d="M57 88 L63 88 L64 106 L60 111 L56 106Z" fill="${tie}"/>`}
   <rect x="53" y="74" width="14" height="14" fill="${skin}"/>
   <ellipse cx="60" cy="56" rx="21" ry="25" fill="${skin}"/>
   <ellipse cx="39" cy="57" rx="3.5" ry="5" fill="${skin}"/><ellipse cx="81" cy="57" rx="3.5" ry="5" fill="${skin}"/>
   ${hairFront}${eyes}<path d="M60 56 Q58 63 61 64" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="1.6" stroke-linecap="round"/>${mouth}
  </svg>`;
}


