import type { Curriculum, Difficulty } from '../types'

const make = (topicId: string, difficulty: Difficulty, units: Curriculum['units']): Curriculum => ({
  topicId, difficulty, units,
})

// ─── ASTRONOMY ───────────────────────────────────────────────────────────────

export const astronomyBuilder: Curriculum = make('astronomy', 'builder', [
  {
    id: 'astro-builder-u1', title: 'Stars & Their Life Cycles', emoji: '⭐',
    description: 'From nebula to supernova — how stars are born, live, and die',
    lessons: [{
      id: 'astro-builder-u1-l1', title: 'Stellar Life Cycles', emoji: '💥',
      content: 'Stars form from gas clouds (nebulae) collapsing under gravity. The main sequence is a star\'s stable hydrogen-fusing phase. A star\'s mass determines its fate: low-mass → red giant → white dwarf; high-mass → supergiant → supernova → neutron star or black hole.',
      keyPoints: [
        'Stars form from collapsing gas and dust clouds called nebulae',
        'Main sequence: hydrogen fusion in core — lasts billions of years',
        'Star mass determines its life: massive stars die young but spectacularly',
        'Low-mass stars → red giant → planetary nebula → white dwarf',
        'High-mass stars → red supergiant → supernova → neutron star or black hole',
      ],
      quiz: [
        { question: 'What powers a main sequence star?', options: ['Chemical burning', 'Nuclear fission', 'Hydrogen fusion in the core', 'Gravitational collapse'], correct: 2, explanation: 'Main sequence stars fuse hydrogen into helium in their cores, releasing energy via E=mc². Our Sun is mid-life on the main sequence.' },
        { question: 'What will happen to our Sun when it runs out of hydrogen?', options: ['It will explode as a supernova', 'It will collapse into a black hole', 'It will expand into a red giant, then become a white dwarf', 'It will cool down without changing size'], correct: 2, explanation: 'The Sun (low-mass star) will expand into a red giant in ~5 billion years, shed its outer layers as a planetary nebula, and leave a white dwarf core.' },
        { question: 'What is a nebula?', options: ['A dead star', 'A cloud of gas and dust — the birthplace of stars', 'A type of galaxy', 'A neutron star remnant'], correct: 1, explanation: 'Nebulae are giant clouds of gas and dust. When they collapse under gravity, they heat up and eventually ignite nuclear fusion — forming stars.' },
        { question: 'What determines a star\'s fate after it leaves the main sequence?', options: ['Its age', 'Its temperature', 'Its mass', 'Its color'], correct: 2, explanation: 'Mass is the master variable: low-mass → white dwarf; intermediate → neutron star; very high-mass → black hole.' },
      ],
      xp: 80,
    }],
  },
  {
    id: 'astro-builder-u2', title: 'Black Holes', emoji: '🕳',
    description: 'What they are, how they form, and how we detect them',
    lessons: [{
      id: 'astro-builder-u2-l1', title: 'Black Holes Explained', emoji: '⚫',
      content: 'A black hole forms when a massive star\'s core collapses under gravity, compressing matter until escape velocity exceeds c. The event horizon is the point of no return. Black holes are detected by their effect on nearby matter and light. The 2019 EHT image showed M87\'s supermassive black hole.',
      keyPoints: [
        'Black hole: region where escape velocity > c — nothing escapes',
        'Schwarzschild radius: r_s = 2GM/c² — defines the event horizon size',
        'Singularity: point of infinite density at the center (GR breaks down here)',
        'Detected via X-ray emissions from accretion disks and gravitational effects',
        'First image of a black hole: Event Horizon Telescope imaged M87* in 2019',
      ],
      quiz: [
        { question: 'What makes a black hole "black"?', options: ['It is made of dark matter', 'It absorbs all light and emits none — escape velocity exceeds c', 'It is very cold', 'It exists in shadow'], correct: 1, explanation: 'At the event horizon, escape velocity = c. Since nothing travels faster than light, nothing — not even light — escapes. Hence: black.' },
        { question: 'The Schwarzschild radius determines:', options: ['The black hole\'s mass', 'The size of the event horizon for a non-rotating black hole', 'How fast the black hole spins', 'The black hole\'s temperature'], correct: 1, explanation: 'r_s = 2GM/c². For the Sun, r_s ≈ 3 km. If the Sun were compressed to 3 km radius, it would be a black hole.' },
        { question: 'How do astronomers detect black holes?', options: ['Direct observation of the singularity', 'Measuring their X-ray emission from infalling hot gas in accretion disks and their gravitational influence', 'Measuring their temperature', 'Radio signals they emit'], correct: 1, explanation: 'Gas spiraling into a black hole forms an accretion disk, heating to millions of degrees and emitting X-rays. Also detected via gravitational lensing and orbital dynamics of nearby stars.' },
        { question: 'The 2019 Event Horizon Telescope image showed:', options: ['A neutron star', 'A merger of two black holes', 'The shadow of the supermassive black hole M87*', 'A newly formed black hole'], correct: 2, explanation: 'In April 2019, the EHT collaboration released the first direct image of a black hole — the 6.5-billion-solar-mass M87* — confirming GR predictions.' },
      ],
      xp: 80,
    }],
  },
])

export const astronomyExplorer: Curriculum = make('astronomy', 'explorer', [
  {
    id: 'astro-explorer-u1', title: 'Galaxies & Dark Matter', emoji: '🌌',
    description: 'Galaxy structure, formation, and the evidence for dark matter',
    lessons: [{
      id: 'astro-explorer-u1-l1', title: 'Dark Matter Evidence', emoji: '🔭',
      content: 'Galaxies rotate with flat rotation curves — stars far from the center orbit as fast as those near the center. This violates Newtonian gravity for visible mass alone. Dark matter (5× more than visible matter) provides the missing gravity. It neither emits nor absorbs light but is detected through gravitational effects.',
      keyPoints: [
        'Galaxy rotation curves are flat — stars at all radii orbit at similar speeds',
        'Flat rotation curves cannot be explained by visible matter alone',
        'Dark matter: ~27% of universe\'s energy-mass content; cannot be seen directly',
        'Evidence: galactic rotation, gravitational lensing, CMB power spectrum',
        'Candidate particles: WIMPs, axions, sterile neutrinos (none confirmed yet)',
      ],
      quiz: [
        { question: 'What is wrong with galaxy rotation curves that implies dark matter?', options: ['Galaxies rotate too slowly', 'Stars at the edge rotate as fast as inner ones — impossible with visible mass alone', 'Rotation is too fast near center', 'Galaxies don\'t rotate'], correct: 1, explanation: 'Kepler\'s law predicts orbital speed should fall with distance. Instead, galaxy rotation curves are flat — requiring unseen extra mass (dark matter) throughout the galaxy.' },
        { question: 'Dark matter comprises approximately what fraction of the universe\'s energy content?', options: ['5%', '27%', '68%', '50%'], correct: 1, explanation: 'Cosmological data: ~5% ordinary matter, ~27% dark matter, ~68% dark energy. Dark matter outweighs visible matter by ~5:1.' },
        { question: 'Dark matter has been most directly detected by:', options: ['Optical telescopes', 'Radio telescopes', 'Its gravitational effects (lensing, rotation curves) — not directly', 'Gamma-ray detectors'], correct: 2, explanation: 'Dark matter has never been directly detected as particles. All evidence is gravitational: rotation curves, gravitational lensing, and cosmic structure formation.' },
        { question: 'Gravitational lensing by dark matter is detected when:', options: ['Light from behind a galaxy cluster is bent and distorted', 'Light disappears behind the galaxy', 'X-rays are emitted', 'Neutrinos are detected'], correct: 0, explanation: 'Dark matter in galaxy clusters bends light from background galaxies (Einstein rings, arcs, shear). The pattern of distortion reveals the dark matter distribution.' },
      ],
      xp: 95,
    }],
  },
  {
    id: 'astro-explorer-u2', title: 'Cosmology', emoji: '🌌',
    description: 'The Big Bang, cosmic expansion, and the fate of the universe',
    lessons: [{
      id: 'astro-explorer-u2-l1', title: 'The Expanding Universe', emoji: '🔭',
      content: 'Hubble (1929) found galaxies recede with velocity proportional to distance: v = H₀d. This implies the universe is expanding and had a hot, dense origin — the Big Bang (~13.8 Gyr ago). Dark energy (68% of energy content) accelerates the expansion. The Cosmic Microwave Background (CMB) is the afterglow of the Big Bang.',
      keyPoints: [
        'Hubble\'s Law: v = H₀d (velocity ∝ distance from us)',
        'The universe is expanding — implying a hot dense beginning: Big Bang',
        'CMB: thermal afterglow from 380,000 years after the Big Bang, at T ≈ 2.725 K today',
        'Dark energy (68%): repulsive energy causing accelerating expansion',
        'Ultimate fate: heat death if dark energy dominates forever',
      ],
      quiz: [
        { question: 'Hubble\'s Law states that galaxies\' recession velocities:', options: ['Are constant for all galaxies', 'Decrease with distance', 'Are proportional to their distance from us', 'Depend on galaxy mass'], correct: 2, explanation: 'v = H₀d: farther galaxies recede faster. This implies the fabric of space itself is expanding — not galaxies flying through space.' },
        { question: 'The Cosmic Microwave Background (CMB) is:', options: ['Light from the nearest stars', 'The afterglow of the Big Bang — thermal radiation from 380,000 years after the Big Bang', 'Radiation from black holes', 'Radio emissions from pulsars'], correct: 1, explanation: 'CMB: when the universe cooled enough for hydrogen to form (recombination), photons decoupled and have traveled freely ever since — now redshifted to microwaves.' },
        { question: 'Dark energy causes the universe\'s expansion to:', options: ['Slow down and reverse', 'Stay at a constant rate', 'Accelerate', 'Stop'], correct: 2, explanation: 'Dark energy (discovered 1998 via Type Ia supernovae) acts as a repulsive energy pervading space, causing the expansion rate to increase.' },
        { question: 'The age of the universe is approximately:', options: ['4.6 billion years', '13.8 billion years', '100 billion years', '1 billion years'], correct: 1, explanation: 'From CMB measurements and cosmic expansion, the universe is 13.8 ± 0.02 billion years old — pinned to high precision by the Planck satellite.' },
      ],
      xp: 95,
    }],
  },
])

export const astronomyScholar: Curriculum = make('astronomy', 'scholar', [
  {
    id: 'astro-scholar-u1', title: 'Stellar Nucleosynthesis', emoji: '⚗',
    description: 'How stars forge the elements — from hydrogen to iron',
    lessons: [{
      id: 'astro-scholar-u1-l1', title: 'Forging Elements in Stars', emoji: '🔥',
      content: 'Elements heavier than hydrogen and helium are made in stars. Main sequence: H → He (pp chain, CNO cycle). Red giants: He → C, O (triple-alpha process). Massive stars: up to Fe. Iron-56 is the most stable nucleus — no energy can be gained by fusion or fission of iron. Heavier elements (gold, platinum, uranium) form in neutron star mergers (r-process).',
      keyPoints: [
        'Big Bang nucleosynthesis: H, He, trace Li — all other elements made in stars',
        'pp chain: 4H → He-4 in solar-mass stars (dominant energy source)',
        'Triple-alpha process: 3 He-4 → C-12 in red giants',
        'Silicon burning creates iron; iron marks the fusion energy limit',
        'r-process: rapid neutron capture in neutron star mergers creates heavy elements',
      ],
      quiz: [
        { question: 'Why can\'t stars fuse iron to produce energy?', options: ['Iron melts at too high a temperature', 'Iron is radioactive', 'Fe-56 is the most stable nucleus — fusion/fission both require energy rather than releasing it', 'Stars don\'t contain iron'], correct: 2, explanation: 'Iron-56 sits at the minimum of the binding energy curve. Any fusion or fission starting from iron requires an energy input — so iron fusion cannot power a star.' },
        { question: 'Where do elements heavier than iron (like gold) primarily form?', options: ['In the Big Bang', 'In the cores of massive stars', 'In neutron star mergers via the r-process', 'In supernovae explosion only'], correct: 2, explanation: 'The r-process (rapid neutron capture) requires extreme neutron flux. Neutron star mergers (confirmed by GW170817 in 2017) are the primary site for gold, platinum, uranium.' },
        { question: 'The triple-alpha process converts:', options: ['Hydrogen to helium', 'Three helium-4 nuclei into carbon-12', 'Carbon into oxygen', 'Lithium into helium'], correct: 1, explanation: '3 He-4 → Be-8 + He-4 → C-12 + γ. This requires the precise Hoyle state in C-12 — a coincidence that enables carbon-based life.' },
        { question: 'The r-process was confirmed to occur in neutron star mergers when:', options: ['The first pulsar was discovered', 'GW170817 gravitational wave event + kilonova emission was observed in 2017', 'Supernova 1987A was observed', 'CERN produced heavy elements'], correct: 1, explanation: 'GW170817 (2017): LIGO detected gravitational waves from a neutron star merger; simultaneous kilonova emission showed spectral signatures of r-process elements.' },
      ],
      xp: 110,
    }],
  },
  {
    id: 'astro-scholar-u2', title: 'Gravitational Waves', emoji: '〰',
    description: 'LIGO, detection, sources and what gravitational waves reveal',
    lessons: [{
      id: 'astro-scholar-u2-l1', title: 'Detecting Gravitational Waves', emoji: '🔊',
      content: 'Einstein predicted gravitational waves in 1916: ripples in spacetime caused by accelerating masses. LIGO uses laser interferometry — two 4-km arms measure length changes of 1/1000 the width of a proton. First detection: GW150914 (two ~30 M☉ black holes merging). Opened multi-messenger astronomy.',
      keyPoints: [
        'Gravitational waves: spacetime ripples from accelerating masses; predicted 1916, detected 2015',
        'LIGO: L-shaped interferometers measuring ΔL/L ~ 10⁻²¹ — extraordinary sensitivity',
        'GW150914: two ~30 solar mass black holes merging, 1.3 billion light-years away',
        'GW170817: neutron star merger + EM counterpart — first multi-messenger event',
        'Sources: binary black holes, neutron stars, possibly cosmic strings and Big Bang',
      ],
      quiz: [
        { question: 'LIGO detects gravitational waves by measuring:', options: ['Radio emissions from mergers', 'Tiny changes in length of two 4-km arms using laser interference', 'Gamma-ray bursts', 'Cosmic ray flux changes'], correct: 1, explanation: 'LIGO\'s Michelson interferometer detects fractional length changes ΔL/L ~ 10⁻²¹. For 4 km arms, that\'s about 10⁻¹⁸ m — 1/1000 the diameter of a proton.' },
        { question: 'GW150914 was significant because:', options: ['It was the first pulsar detected', 'It proved Einstein\'s 1916 prediction of gravitational waves and confirmed the existence of binary black holes', 'It discovered dark energy', 'It detected cosmic background radiation'], correct: 1, explanation: 'Detected September 14, 2015 — 100 years after prediction. Confirmed gravitational waves exist and that ~30 solar-mass stellar black holes merge. Nobel Prize 2017.' },
        { question: 'Multi-messenger astronomy from GW170817 provided:', options: ['Only gravitational wave data', 'Simultaneous GW + gamma-ray burst + optical kilonova — confirming neutron star mergers', 'Evidence for dark matter', 'A measurement of dark energy'], correct: 1, explanation: 'GW170817 was detected in GW, gamma-rays (Fermi), and optical/UV/IR simultaneously — the first true multi-messenger event, confirming the r-process in kilonovae.' },
        { question: 'What creates gravitational waves detectable by LIGO?', options: ['Any moving mass', 'Only black holes', 'Massive compact objects (black holes, neutron stars) in rapid, asymmetric acceleration', 'Exploding stars only'], correct: 2, explanation: 'Gravitational waves are produced by asymmetric acceleration of massive objects. Binary compact objects are the strongest sources because of their extreme mass and acceleration in the final inspiral.' },
      ],
      xp: 115,
    }],
  },
])

export const astronomyMaster: Curriculum = make('astronomy', 'master', [
  {
    id: 'astro-master-u1', title: 'Quantum Cosmology', emoji: '🌌',
    description: 'The Planck era, inflation, and the quantum origin of the universe',
    lessons: [{
      id: 'astro-master-u1-l1', title: 'Inflation & the Quantum Universe', emoji: '💫',
      content: 'Cosmic inflation (Guth 1981): the universe expanded exponentially fast (factor of e⁶⁰+) during 10⁻³⁶ to 10⁻³² seconds, smoothing the CMB, solving the horizon and flatness problems. Quantum fluctuations during inflation seeded large-scale structure. CMB anisotropies map these primordial fluctuations — now galaxy clusters and voids.',
      keyPoints: [
        'Inflation: exponential expansion at t ~ 10⁻³⁶ s solves horizon, flatness, monopole problems',
        'Inflation driven by inflaton field with near-flat potential',
        'Quantum fluctuations in the inflaton → density perturbations → galaxy seeds',
        'CMB power spectrum: precise map of inflation-seeded primordial fluctuations',
        'B-mode polarization in CMB would confirm primordial gravitational waves from inflation',
      ],
      quiz: [
        { question: 'Inflation solves the horizon problem by explaining why:', options: ['The universe is 13.8 Gyr old', 'The CMB is nearly perfectly uniform across regions that should not have been in causal contact', 'Galaxies form clusters', 'The universe is flat'], correct: 1, explanation: 'Without inflation, regions of the CMB sky >2° apart never had time to thermalize. Inflation expanded a tiny causally-connected patch to encompass the entire observable universe.' },
        { question: 'What seeded the large-scale structure (galaxies, voids) of the universe?', options: ['Random black hole mergers', 'Dark energy fluctuations', 'Quantum fluctuations in the inflaton field, amplified by inflation', 'Neutrino density variations'], correct: 2, explanation: 'Inflation amplified quantum fluctuations in the inflaton to macroscopic density perturbations. CMB temperature anisotropies map these — seeds for later gravitational collapse into galaxies.' },
        { question: 'B-mode CMB polarization would be evidence for:', options: ['Dark matter', 'Primordial gravitational waves from inflation', 'Neutrino mass', 'Cosmic strings'], correct: 1, explanation: 'Inflation should produce primordial gravitational waves that imprint a specific "B-mode" curl pattern in CMB polarization. Detection would confirm the energy scale of inflation.' },
        { question: 'The flatness problem that inflation solves is:', options: ['Why the universe is three-dimensional', 'Why the spatial curvature is so close to zero — requiring extreme fine-tuning without inflation', 'Why the CMB is flat (featureless)', 'Why the universe expands uniformly'], correct: 1, explanation: 'Ω = 1 (flat) to high precision. Without inflation, initial conditions requiring |Ω−1| < 10⁻⁶⁰ at Planck time seem absurdly fine-tuned. Inflation naturally drives Ω → 1.' },
      ],
      xp: 130,
    }],
  },
  {
    id: 'astro-master-u2', title: 'The Fermi Paradox', emoji: '👽',
    description: 'Where is everybody? Estimating civilizations and the Great Filter',
    lessons: [{
      id: 'astro-master-u2-l1', title: 'Drake Equation & Great Filter', emoji: '🔭',
      content: 'The Fermi Paradox: given billions of stars in the Milky Way and billions of years, where are all the alien civilizations? The Drake equation estimates N = R* × fₚ × nₑ × f_l × fᵢ × f_c × L. The Great Filter theory: something makes intelligent life extremely rare — either in our past (good news) or future (catastrophic).',
      keyPoints: [
        'Fermi Paradox: the universe is vast and old — where is all the alien life?',
        'Drake equation: estimates number of communicating civilizations in the galaxy',
        'Great Filter: a bottleneck that prevents civilizations from becoming spacefaring',
        'If filter is behind us (life origin, complex cells): we are rare but may survive',
        'If filter is ahead (nuclear war, AI risk, ecological collapse): finding life elsewhere is terrifying',
      ],
      quiz: [
        { question: 'The Fermi Paradox asks:', options: ['What is the speed of light?', 'Why haven\'t we detected extraterrestrial intelligence despite the universe\'s vast age and scale?', 'How many planets orbit the Sun?', 'How old is the Milky Way?'], correct: 1, explanation: 'Enrico Fermi\'s question at Los Alamos (~1950): given the scale and age of the galaxy, intelligent civilizations should be common and detectable — so why haven\'t we seen them?' },
        { question: 'The Great Filter theory implies:', options: ['Life is impossible', 'Something acts as a barrier preventing most potential civilizations from becoming spacefaring', 'All civilizations become peaceful', 'The speed of light prevents contact'], correct: 1, explanation: 'The Great Filter: somewhere in the path from dead matter → spacefaring civilization, something kills the vast majority of potential civilizations — either in the past or future.' },
        { question: 'Finding microbial life on Mars would be:', options: ['Purely good news — evidence life is common', 'Purely bad news', 'Ambiguous — might suggest the Great Filter is ahead of us, not behind', 'Irrelevant to the Fermi paradox'], correct: 2, explanation: 'If life arose independently on Mars, the Filter isn\'t the origin of life (which becomes easy). Then the Filter must be a later step — possibly ahead of us. That\'s alarming.' },
        { question: 'The Drake equation\'s most uncertain parameter is:', options: ['Number of stars', 'Fraction of stars with planets', 'The longevity of communicating civilizations (L)', 'Fraction of planets that are habitable'], correct: 2, explanation: 'L (how long a civilization transmits signals) is completely unknown. If civilizations typically last 100 years (nuclear war, collapse), N might be < 1 communicating at any time.' },
      ],
      xp: 130,
    }],
  },
])

// ─── PHILOSOPHY ──────────────────────────────────────────────────────────────

export const philosophyBuilder: Curriculum = make('philosophy', 'builder', [
  {
    id: 'phil-builder-u1', title: 'Ethics & Moral Theories', emoji: '⚖',
    description: 'Consequentialism, deontology, and virtue ethics compared',
    lessons: [{
      id: 'phil-builder-u1-l1', title: 'Three Major Ethical Frameworks', emoji: '🤔',
      content: 'Three major ethical theories: Consequentialism (outcomes matter — maximize well-being), Deontology (rules and duties matter — Kant: act only on principles you\'d universalize), Virtue Ethics (character matters — what would a virtuous person do?). Each captures genuine moral insights; each faces serious objections.',
      keyPoints: [
        'Consequentialism (Mill): the right action maximizes overall good/utility',
        'Deontology (Kant): some actions are inherently right/wrong regardless of consequences',
        'Categorical Imperative: act only on maxims you could will to be universal law',
        'Virtue Ethics (Aristotle): focus on developing virtuous character, not just following rules',
        'Trolley problem: illustrates tensions between consequentialism and deontology',
      ],
      quiz: [
        { question: 'Utilitarianism (a form of consequentialism) says the right action is:', options: ['Following divine commands', 'Obeying the law', 'Maximizing total happiness/well-being', 'Acting from duty'], correct: 2, explanation: 'Utilitarianism (Bentham, Mill): right = whatever produces the greatest good for the greatest number. Consequences determine morality.' },
        { question: 'Kant\'s Categorical Imperative says:', options: ['Act to maximize happiness', 'Act only on principles you could consistently will everyone to follow', 'Virtuous people should rule', 'There is no objective morality'], correct: 1, explanation: 'Categorical Imperative: "Act only according to the maxim by which you can at the same time will that it should become a universal law." Duties are unconditional.' },
        { question: 'Virtue ethics focuses primarily on:', options: ['The outcome of actions', 'Following rules', 'Developing good character traits (courage, honesty, justice)', 'Social contracts'], correct: 2, explanation: 'Virtue ethics (Aristotle): right action flows from virtuous character. Ask not "what should I do?" but "what kind of person should I be?"' },
        { question: 'The trolley problem illustrates the conflict between:', options: ['God and reason', 'Consequentialism (pull lever, save 5) and deontology (don\'t use one as means to save others)', 'Virtue and duty', 'Free will and determinism'], correct: 1, explanation: 'Consequentialism: pull the lever (save 5, kill 1 = better outcome). Deontology: you may not use an innocent person as means, even to save more lives.' },
      ],
      xp: 75,
    }],
  },
  {
    id: 'phil-builder-u2', title: 'Epistemology', emoji: '📚',
    description: 'What is knowledge? Justified true belief, skepticism, and Gettier cases',
    lessons: [{
      id: 'phil-builder-u2-l1', title: 'What Is Knowledge?', emoji: '🔍',
      content: 'Epistemology studies knowledge. Classical analysis: knowledge = justified true belief (JTB). Plato\'s Theaetetus. Gettier (1963) showed JTB is insufficient — you can have JTB without knowledge (Gettier cases). Skepticism challenges whether we can know anything: brain-in-a-vat, evil demon (Descartes).',
      keyPoints: [
        'Classical definition: knowledge = justified true belief (JTB)',
        'Gettier problem: JTB can exist without genuine knowledge — counterexamples exist',
        'Foundationalism: knowledge rests on basic, self-evident beliefs',
        'Coherentism: beliefs form a network; justified by coherence with other beliefs',
        'Descartes\' method of doubt: anything conceivably doubtable should be doubted',
      ],
      quiz: [
        { question: 'The classical definition of knowledge is:', options: ['Belief alone', 'True belief alone', 'Justified true belief (JTB)', 'Scientific verification'], correct: 2, explanation: 'Traditional epistemology (Plato): knowledge requires (1) you believe it, (2) it is true, and (3) you have justification for believing it.' },
        { question: 'Gettier cases showed that JTB is:', options: ['Sufficient for knowledge', 'Not sufficient — cases exist where JTB does not constitute genuine knowledge', 'Wrong about truth', 'Irrelevant to philosophy'], correct: 1, explanation: 'Gettier (1963): short paper showing cases where someone has justified true belief but it would be strange to say they "know" — luck defeats the justification.' },
        { question: 'Descartes used systematic doubt to:', options: ['Prove God exists only', 'Find a foundation of knowledge that could not be doubted — arriving at cogito ergo sum', 'Disprove the external world', 'Establish scientific method'], correct: 1, explanation: 'Descartes doubted everything doubtable, arriving at "I think, therefore I am" (cogito) — the one thing he could not doubt. This became his foundation for knowledge.' },
        { question: 'The brain-in-a-vat thought experiment challenges:', options: ['Mathematical knowledge', 'Our ability to know anything about the external world', 'Memory reliability', 'Logical reasoning'], correct: 1, explanation: 'If you were a disembodied brain in a vat receiving simulated inputs, you\'d have the same experiences as now. How can you rule this out? This is the skeptical challenge.' },
      ],
      xp: 75,
    }],
  },
])

export const philosophyExplorer: Curriculum = make('philosophy', 'explorer', [
  {
    id: 'phil-explorer-u1', title: 'Philosophy of Mind', emoji: '🧠',
    description: 'Consciousness, the hard problem, and the mind-body relationship',
    lessons: [{
      id: 'phil-explorer-u1-l1', title: 'The Hard Problem of Consciousness', emoji: '💫',
      content: 'The hard problem (Chalmers): why is there subjective experience at all? The "easy" problems (how the brain processes information) could in principle be solved computationally. But why does it feel like something to be conscious? Qualia — the redness of red, the pain of pain — seem beyond physical explanation.',
      keyPoints: [
        'Easy problems: explaining cognitive functions (attention, memory, integration)',
        'Hard problem (Chalmers): why is there subjective experience — why does anything feel like something?',
        'Qualia: subjective, phenomenal properties of experience (the redness of red)',
        'Physicalism/materialism: consciousness is physical (brain states)',
        'Dualism (Descartes): mind and body are distinct substances — interaction problem',
      ],
      quiz: [
        { question: 'The "hard problem" of consciousness refers to:', options: ['How the brain processes visual information', 'Why there is subjective experience at all — why brain processes feel like something', 'How to measure consciousness', 'Why consciousness evolved'], correct: 1, explanation: 'Even a complete neuroscientific account of vision doesn\'t explain why there is something it is like to see red. This explanatory gap is the hard problem.' },
        { question: 'Qualia refers to:', options: ['Brain wave patterns', 'Computational processes', 'The subjective, phenomenal character of experiences — what it feels like from the inside', 'Unconscious processing'], correct: 2, explanation: 'Qualia: the "what it\'s like" of experience — the painfulness of pain, the blueness of blue seen from the first-person perspective.' },
        { question: 'The main problem with Cartesian dualism (mind ≠ body) is:', options: ['It is illogical', 'It has no empirical evidence', 'Explaining how a non-physical mind causally interacts with a physical body', 'It denies free will'], correct: 2, explanation: 'If mind and body are fundamentally different substances, how do they causally interact? How does a thought (non-physical) cause arm movement (physical)?' },
        { question: 'Physicalism about consciousness holds that:', options: ['Consciousness doesn\'t exist', 'Mental states are non-physical', 'Consciousness is identical to or realized by physical brain states', 'Consciousness is a religious concept'], correct: 2, explanation: 'Physicalism: mental states are brain states (or higher-level physical states). No additional non-physical substance is needed to explain the mind.' },
      ],
      xp: 95,
    }],
  },
  {
    id: 'phil-explorer-u2', title: 'Political Philosophy', emoji: '⚖',
    description: 'Rawls, justice, liberty, and the social contract',
    lessons: [{
      id: 'phil-explorer-u2-l1', title: 'Rawls & The Veil of Ignorance', emoji: '🏛',
      content: 'What principles of justice would rational people choose if they didn\'t know their position in society? Rawls\'s "veil of ignorance" thought experiment: behind the veil, not knowing if you\'ll be rich or poor, you\'d choose: (1) Maximum basic liberties and (2) Inequality allowed only if it benefits the worst-off (difference principle).',
      keyPoints: [
        'Original position + veil of ignorance: choose principles without knowing your social position',
        'Rawls\'s two principles: (1) equal basic liberties, (2) difference principle',
        'Difference principle: inequalities acceptable only if they benefit the least advantaged',
        'Nozick\'s libertarianism: justice is about respecting rights, not redistributing outcomes',
        'Communitarian critique (Sandel): liberal neutrality ignores community and shared values',
      ],
      quiz: [
        { question: 'Behind Rawls\'s veil of ignorance, you don\'t know:', options: ['General principles of economics', 'Your gender, class, natural abilities, or social position in the resulting society', 'The rules of logic', 'What year it is'], correct: 1, explanation: 'The veil of ignorance: you choose principles of justice without knowing your place in society — race, sex, wealth, talents. This ensures impartial principles.' },
        { question: 'Rawls\'s difference principle permits inequalities only when:', options: ['The majority benefits', 'They are earned by hard work', 'They benefit the least advantaged members of society', 'They are chosen freely'], correct: 2, explanation: 'Rawls: inequalities are just only if they maximize the position of the worst-off group. This is a form of maximin — maximize the minimum.' },
        { question: 'Nozick\'s libertarian critique of Rawls argues:', options: ['Rawls\' principles are too conservative', 'Justice is about entitlement and rights, not redistributive outcomes', 'The state should provide more welfare', 'The veil of ignorance is too thick'], correct: 1, explanation: 'Nozick (Anarchy, State, and Utopia): justice is about respecting how holdings were acquired (entitlement theory), not achieving any particular distributional pattern.' },
        { question: 'The "original position" is a device for:', options: ['Choosing a constitution', 'Ensuring impartial deliberation about justice by removing self-interested knowledge', 'Describing current society', 'Rawls\'s view of heaven'], correct: 1, explanation: 'The original position + veil of ignorance is a hypothetical thought experiment to model impartial, unbiased reasoning about fundamental principles of justice.' },
      ],
      xp: 95,
    }],
  },
])

export const philosophyScholar: Curriculum = make('philosophy', 'scholar', [
  {
    id: 'phil-scholar-u1', title: 'Metaphysics', emoji: '🌌',
    description: 'Free will, personal identity, time, and the nature of reality',
    lessons: [{
      id: 'phil-scholar-u1-l1', title: 'Free Will vs. Determinism', emoji: '🎲',
      content: 'If every event is caused by prior events (determinism), are our choices free? Hard determinism: no free will. Libertarianism: free will exists, determinism is false. Compatibilism (most popular): free will is compatible with determinism — free will means acting from one\'s own desires without external compulsion, not uncaused causation.',
      keyPoints: [
        'Hard determinism: all events are causally determined → no free will',
        'Libertarianism (philosophical): free will requires the ability to have done otherwise → determinism false',
        'Compatibilism: free will = acting from internal desires uncoerced, not requiring indeterminism',
        'Frankfurt cases: you can be free even without alternative possibilities (semicompatibilism)',
        'Consequence argument (Van Inwagen): if determinism is true, our acts are consequences of laws of nature — not up to us',
      ],
      quiz: [
        { question: 'Compatibilism holds that:', options: ['Free will and determinism are impossible to reconcile', 'Free will requires randomness in the universe', 'Free will is compatible with determinism — freedom means acting from one\'s own reasons', 'Determinism is false'], correct: 2, explanation: 'Compatibilists (Hume, Frankfurt, Dennett): free will = acting from one\'s own desires and deliberations, not being compelled by external forces — this is compatible with causal determinism.' },
        { question: 'The consequence argument (Van Inwagen) argues:', options: ['Free will is compatible with determinism', 'If determinism is true, our actions are consequences of laws of nature outside our control — no free will', 'Quantum indeterminism gives us free will', 'Compatibilism is correct'], correct: 1, explanation: 'Van Inwagen: our actions are the inevitable consequence of the laws of nature + the state of the world before we were born. If so, they\'re not truly "up to us."' },
        { question: 'Frankfurt cases were designed to show:', options: ['Hard determinism is true', 'You can be morally responsible even if you couldn\'t have done otherwise', 'Libertarianism about free will is correct', 'Determinism and free will are incompatible'], correct: 1, explanation: 'Frankfurt: imagine a neuroscientist who would intervene if you showed signs of choosing otherwise. If you never show those signs, they don\'t intervene. You were going to choose this anyway — are you free? Yes, Frankfurt says.' },
        { question: 'Hard determinism implies:', options: ['We are free in a compatibilist sense', 'Randomness gives us free will', 'Moral responsibility is impossible since no one could have done otherwise', 'We have libertarian free will'], correct: 2, explanation: 'Hard determinists: if no one could have done otherwise (determinism), holding them morally responsible seems unjust. Free will and moral responsibility require the ability to have done otherwise.' },
      ],
      xp: 110,
    }],
  },
  {
    id: 'phil-scholar-u2', title: 'Philosophy of Science', emoji: '🔬',
    description: 'Scientific method, falsifiability, Kuhn\'s paradigms, and realism',
    lessons: [{
      id: 'phil-scholar-u2-l1', title: 'Falsifiability & Paradigm Shifts', emoji: '⚗',
      content: 'Popper: science advances by falsification — a theory must make testable predictions that could be wrong. Unfalsifiable claims (e.g., "an undetectable force causes events") are not scientific. Kuhn\'s Structure of Scientific Revolutions: normal science within a paradigm → anomalies accumulate → crisis → paradigm shift (e.g., Ptolemy → Copernicus).',
      keyPoints: [
        'Falsifiability (Popper): a theory is scientific if it makes predictions that could be proven false',
        'Demarcation problem: distinguishing science from pseudoscience',
        'Normal science: working within a paradigm, solving puzzles',
        'Paradigm shift (Kuhn): revolutionary change when anomalies become irresolvable',
        'Scientific realism vs. anti-realism: do scientific theories describe an observer-independent reality?',
      ],
      quiz: [
        { question: 'Popper\'s falsifiability criterion says a theory is scientific if:', options: ['It is supported by evidence', 'Many scientists believe it', 'It makes testable predictions that could in principle be proven false', 'It is mathematically rigorous'], correct: 2, explanation: 'Popper: science advances by bold conjectures and attempted refutations. A theory that cannot be refuted by any possible observation is not scientific.' },
        { question: 'Kuhn\'s "paradigm shift" describes:', options: ['Gradual, continuous scientific progress', 'A revolutionary replacement of one scientific worldview by an incompatible successor during a crisis', 'When scientists change careers', 'Technical methodological updates'], correct: 1, explanation: 'Kuhn: science is not cumulative. Revolutionary science replaces one paradigm (Newtonian) with an incommensurable new one (Einsteinian) after anomalies exceed the old paradigm\'s capacity.' },
        { question: 'The demarcation problem in philosophy of science is:', options: ['How to fund science', 'Distinguishing science from pseudoscience', 'Measuring scientific progress', 'Balancing theory and experiment'], correct: 1, explanation: 'The demarcation problem: what distinguishes genuine science (physics, chemistry) from pseudoscience (astrology, homeopathy)? Popper\'s answer: falsifiability.' },
        { question: 'Scientific realism holds that:', options: ['Science describes only useful instruments for prediction', 'Successful scientific theories approximately describe an observer-independent reality', 'Science is a social construction', 'Unobservable entities don\'t exist'], correct: 1, explanation: 'Scientific realism: mature, successful theories (quantum mechanics, evolution) are approximately true descriptions of reality, including unobservable entities (electrons, quarks).' },
      ],
      xp: 110,
    }],
  },
])

export const philosophyMaster: Curriculum = make('philosophy', 'master', [
  {
    id: 'phil-master-u1', title: 'Philosophy of Language', emoji: '🗣',
    description: 'Meaning, reference, speech acts and the linguistic turn',
    lessons: [{
      id: 'phil-master-u1-l1', title: 'Reference, Meaning & Wittgenstein', emoji: '📝',
      content: 'Frege distinguished sense (Sinn) from reference (Bedeutung): "the morning star" and "the evening star" have the same reference (Venus) but different sense. Russell\'s theory of definite descriptions: "The present King of France is bald" is false, not meaningless. Wittgenstein\'s later philosophy: meaning is use in language games — no private language.',
      keyPoints: [
        'Frege: sense (mode of presentation) vs. reference (the object denoted)',
        'Russell: definite descriptions analyzed as quantified claims, not names',
        '"The King of France is bald" — false (no king), not meaningless',
        'Wittgenstein Tractatus: picture theory of meaning',
        'Wittgenstein Investigations: meaning = use in language games; private language argument',
      ],
      quiz: [
        { question: 'Frege\'s distinction between sense and reference explains why:', options: ['"Venus" is a planet', '"Morning star" and "evening star" refer to the same thing but are informatively different', 'Words have no meaning without context', 'Reference is impossible'], correct: 1, explanation: '"Morning star = evening star" is an astronomical discovery, not a trivial identity. Same reference (Venus), different senses (ways of picking it out). This distinction is fundamental.' },
        { question: 'Russell\'s theory of descriptions analyzes "The King of France is bald" as:', options: ['Meaningless (no king exists)', 'True', 'False — because there is no unique current King of France', 'A category error'], correct: 2, explanation: 'Russell: "The K is F" = "There exists exactly one K and that K is F." With no current French King, the existential claim is false — not meaningless.' },
        { question: 'Wittgenstein\'s later view "meaning is use" implies:', options: ['Words always refer to objects', 'Meaning is determined by how words are used in social practices (language games)', 'Meaning is private mental content', 'Language perfectly pictures reality'], correct: 1, explanation: 'Later Wittgenstein rejected his own Tractatus picture theory. Meaning is not private mental content or reference — it is the public use of words in forms of life.' },
        { question: 'The private language argument (Wittgenstein) shows:', options: ['Language is inherently private', 'A language only one person could understand in principle is impossible', 'Mental states cannot be named', 'Reference requires public objects'], correct: 1, explanation: 'Wittgenstein: for a word to mean something, there must be a criterion for correct/incorrect use — which requires a social/public context. A purely private language is incoherent.' },
      ],
      xp: 125,
    }],
  },
  {
    id: 'phil-master-u2', title: 'Continental vs. Analytic Philosophy', emoji: '🌍',
    description: 'Heidegger, Derrida, existentialism vs. logical analysis',
    lessons: [{
      id: 'phil-master-u2-l1', title: 'Heidegger, Sartre & Derrida', emoji: '📖',
      content: 'The 20th century split philosophy. Analytic: logical analysis, clarity, science-adjacent (Frege, Russell, Wittgenstein, Quine). Continental: phenomenology, hermeneutics, critical theory (Husserl, Heidegger, Sartre, Derrida). Heidegger: Being (Sein) vs. beings; Dasein\'s being-in-the-world. Sartre: existence precedes essence — we are radically free. Derrida: deconstruction exposes binary oppositions and deferred meaning.',
      keyPoints: [
        'Analytic philosophy: emphasizes logic, clarity, and argument; aligned with science',
        'Phenomenology (Husserl): study of the structure of experience and consciousness',
        'Heidegger: Dasein (being-there); being-in-the-world precedes subject-object distinction',
        'Sartre: existence precedes essence — we are first nothing, then create ourselves through choices',
        'Derrida: deconstruction; texts contain undecidable tensions; meaning always deferred (différance)',
      ],
      quiz: [
        { question: 'Sartre\'s "existence precedes essence" means:', options: ['Physical existence is more real than ideas', 'Humans exist first without predetermined nature, then create themselves through choices', 'Consciousness comes after evolution', 'Reason precedes emotion'], correct: 1, explanation: 'Sartre: unlike a hammer (designed before made — essence precedes existence), humans exist first without predetermined nature. We are "condemned to be free" — and must create our own essence through choices.' },
        { question: 'Heidegger\'s Dasein refers to:', options: ['German for "soul"', 'Human being as being-in-the-world — thrown into a meaningful context', 'Pure consciousness', 'The Cartesian subject'], correct: 1, explanation: 'Dasein (being-there): Heidegger\'s term for human existence, always already in a world of meaning, practices, and concernful dealings — prior to any subject-object distinction.' },
        { question: 'Derrida\'s différance (with an "a") means:', options: ['A typo for "difference"', 'Meaning is always both differing (difference) and deferred — never fully present', 'Language is meaningless', 'Texts have single determinate meanings'], correct: 1, explanation: 'Différance: Derrida\'s neologism combining "to differ" and "to defer." Meaning is never fully present — it is constituted by difference from other signs and always deferred.' },
        { question: 'The analytic tradition in philosophy primarily values:', options: ['Poetry and narrative', 'Systematic history of ideas', 'Logical rigor, clarity, argument, and connection to empirical science', 'Phenomenological description'], correct: 2, explanation: 'Analytic philosophy (from Frege, Russell, early Wittgenstein): prizes clarity, logical analysis, and connection to science. Often engages with formal logic, mathematics, and linguistics.' },
      ],
      xp: 125,
    }],
  },
])

// ─── GEOGRAPHY ───────────────────────────────────────────────────────────────

export const geographyBuilder: Curriculum = make('geography', 'builder', [
  {
    id: 'geo-builder-u1', title: 'Climate & Weather', emoji: '🌤',
    description: 'Atmospheric systems, climate zones, and global warming',
    lessons: [{
      id: 'geo-builder-u1-l1', title: 'Climate Zones & Greenhouse Effect', emoji: '🌡',
      content: 'Climate is long-term weather patterns. The Earth has five main climate zones (tropical, dry, temperate, continental, polar). The greenhouse effect: solar radiation passes through the atmosphere; infrared re-emitted by Earth is trapped by greenhouse gases (CO₂, CH₄, H₂O). Enhanced greenhouse effect drives global warming.',
      keyPoints: [
        'Climate zones determined by temperature and precipitation patterns',
        'Greenhouse effect: CO₂, CH₄ and water vapor trap outgoing infrared radiation',
        'Without the natural greenhouse effect, Earth would be ~33°C colder',
        'Anthropogenic CO₂ has risen from 280 ppm (pre-industrial) to 420+ ppm',
        'IPCC: 1.5–2°C above pre-industrial warming is the critical threshold',
      ],
      quiz: [
        { question: 'The greenhouse effect works by:', options: ['Reflecting solar radiation back to space', 'Trapping outgoing infrared radiation from Earth\'s surface', 'Blocking ultraviolet radiation', 'Increasing wind speeds'], correct: 1, explanation: 'Greenhouse gases allow sunlight in but absorb outgoing infrared (heat) radiation, re-emitting some back to Earth — warming the surface.' },
        { question: 'Pre-industrial atmospheric CO₂ was approximately:', options: ['180 ppm', '280 ppm', '420 ppm', '560 ppm'], correct: 1, explanation: 'Pre-industrial CO₂ ≈ 280 ppm (stable for thousands of years). Current levels (420+ ppm) represent a 50% increase due to fossil fuel burning.' },
        { question: 'Which climate zone is characterized by hot temperatures and high year-round rainfall?', options: ['Polar', 'Dry/arid', 'Tropical', 'Continental'], correct: 2, explanation: 'Tropical climate: near the equator, high solar angle year-round, hot and wet (Amazon, Congo, Southeast Asia).' },
        { question: 'The IPCC identifies what temperature increase as a critical threshold?', options: ['0.5°C', '1.5–2°C', '5°C', '10°C'], correct: 1, explanation: 'The Paris Agreement aims to limit warming to 1.5°C above pre-industrial. IPCC reports show severe impacts (coral bleaching, sea level rise, extreme weather) at 2°C.' },
      ],
      xp: 75,
    }],
  },
  {
    id: 'geo-builder-u2', title: 'Population Geography', emoji: '👥',
    description: 'How and why populations grow, migrate, and distribute across Earth',
    lessons: [{
      id: 'geo-builder-u2-l1', title: 'Demographic Transition Model', emoji: '📊',
      content: 'The Demographic Transition Model (DTM) describes population change through development stages: Stage 1 (high birth and death rates), Stage 2 (death rates fall, rapid growth), Stage 3 (birth rates fall), Stage 4 (both low — stable population). Stage 5 possible: population decline.',
      keyPoints: [
        'Stage 1: high birth and death rates — slow growth (pre-industrial)',
        'Stage 2: death rates fall (medicine, sanitation) → rapid population growth',
        'Stage 3: birth rates fall (urbanization, education) → growth slows',
        'Stage 4: both rates low → stable, aging population',
        'Most LDCs in stage 2-3; MDCs in stage 4-5',
      ],
      quiz: [
        { question: 'What causes the rapid population growth in DTM Stage 2?', options: ['Increased birth rates', 'Falling death rates while birth rates remain high', 'Immigration', 'Improved food production only'], correct: 1, explanation: 'Stage 2: improved healthcare/sanitation reduces death rates, especially child mortality. Birth rates remain high (cultural lag). Gap = rapid natural increase.' },
        { question: 'A country in Stage 4 of the DTM has:', options: ['High birth and death rates', 'Rapid population growth', 'Low birth and low death rates — stable or aging population', 'High birth rates only'], correct: 2, explanation: 'Stage 4 (most Western Europe, Japan): both rates are low. Population stabilizes or declines, average age increases.' },
        { question: 'What primarily drives falling birth rates in Stage 3?', options: ['Government mandates', 'Disease', 'Urbanization, female education, and access to contraception', 'Rising death rates'], correct: 2, explanation: 'As countries urbanize and educate women, the opportunity cost of children rises, family sizes fall voluntarily — the classic demographic transition mechanism.' },
        { question: 'Which region is most likely currently in DTM Stage 2?', options: ['Western Europe', 'East Asia', 'Sub-Saharan Africa', 'North America'], correct: 2, explanation: 'Much of sub-Saharan Africa is in Stage 2-3: falling death rates but still high birth rates, generating rapid population growth.' },
      ],
      xp: 75,
    }],
  },
])

export const geographyExplorer: Curriculum = make('geography', 'explorer', [
  {
    id: 'geo-explorer-u1', title: 'Human Geography', emoji: '🏙',
    description: 'Urban growth, globalization, and development disparities',
    lessons: [{
      id: 'geo-explorer-u1-l1', title: 'Urbanization & Global Cities', emoji: '🌆',
      content: 'More than half of humanity lives in cities (since 2007). Megacities (10M+): Tokyo (37M), Delhi, Shanghai. World cities (Sassen): global financial control nodes — New York, London, Tokyo. Urbanization brings economic growth and innovation but also inequality, pollution, and informal settlements.',
      keyPoints: [
        'Over 55% of global population urban (2020); projected 68% by 2050',
        'Megacities: > 10 million people (Tokyo, Mumbai, São Paulo)',
        'World cities: nodes of global finance and corporate headquarters',
        'Primate cities: one city dominates — Bangkok is 50× larger than Thailand\'s second city',
        'Informal settlements (slums): ~1 billion people live in inadequate housing globally',
      ],
      quiz: [
        { question: 'What is a "world city" according to Sassen?', options: ['Largest city by population', 'A city with historical importance', 'A global node of financial services and corporate control', 'Any city with UN representation'], correct: 2, explanation: 'Sassen\'s global or world cities (New York, London, Tokyo) are command centers of the global economy — hubs of finance, law, and corporate headquarters.' },
        { question: 'What fraction of humanity lived in cities as of 2020?', options: ['20%', '35%', '55%', '75%'], correct: 2, explanation: 'As of 2020, about 55% of the world\'s population is urban. The UN projects this will reach 68% by 2050.' },
        { question: 'A primate city is one that:', options: ['Is the capital city', 'Has the most parks', 'Is disproportionately larger than all other cities in its country', 'Was founded earliest'], correct: 2, explanation: 'Primate cities dominate their country\'s urban hierarchy (often 2-3× the population of the next largest). Common in developing countries with colonial histories.' },
        { question: 'What characterizes informal settlements (slums)?', options: ['High quality infrastructure', 'Officially planned neighborhoods', 'Inadequate housing, tenure insecurity, and lack of basic services', 'Only found in rural areas'], correct: 2, explanation: 'Informal settlements: unplanned, often illegal housing lacking secure tenure, clean water, sanitation, and durable structures. About 1 billion people live in them globally.' },
      ],
      xp: 95,
    }],
  },
  {
    id: 'geo-explorer-u2', title: 'Environmental Geography', emoji: '🌿',
    description: 'Deforestation, biodiversity loss, water scarcity and sustainability',
    lessons: [{
      id: 'geo-explorer-u2-l1', title: 'Biodiversity & Planetary Boundaries', emoji: '🦋',
      content: 'The Anthropocene: human activity now dominates Earth systems. Planetary Boundaries (Rockström 2009): nine safe operating spaces for humanity. Current violations: biodiversity loss (most severe: extinction rate 100-1000× natural), climate change, and nitrogen cycle. Amazon deforestation threatens tipping points.',
      keyPoints: [
        'Sixth mass extinction: current extinction rate 100-1000× background rate',
        'Habitat destruction is the primary driver of biodiversity loss',
        'Planetary boundaries: nine Earth-system limits for human safety',
        'Amazon: 17% already deforested; tipping point estimated at 20-25%',
        'One million species currently threatened with extinction (IPBES 2019)',
      ],
      quiz: [
        { question: 'Current global extinction rates compared to natural background rates are approximately:', options: ['1-10×', '10-50×', '100-1000× higher', 'Exactly equal'], correct: 2, explanation: 'The "Sixth Mass Extinction": modern rates of species loss are estimated at 100 to 1000 times the natural background rate — driven by habitat loss, climate change, and overexploitation.' },
        { question: 'The primary driver of global biodiversity loss is:', options: ['Climate change', 'Invasive species', 'Habitat destruction (deforestation, conversion to agriculture)', 'Pollution'], correct: 2, explanation: 'Land use change — especially conversion of tropical forests and grasslands to agriculture — is the single largest driver of biodiversity loss globally.' },
        { question: 'The Amazon "tipping point" means:', options: ['The forest has fully collapsed', 'Beyond a threshold (~20-25% deforestation), the forest could irreversibly transition to savanna', 'Amazon reforestation begins automatically', 'Species begin recovering at this point'], correct: 1, explanation: 'Beyond a deforestation threshold, the Amazon loses moisture recycling capacity and can no longer sustain itself — shifting to drier savanna in a self-reinforcing feedback loop.' },
        { question: 'Planetary boundaries (Rockström) define:', options: ['Political borders', 'Nine Earth-system limits within which humanity can safely operate', 'Ocean territory limits', 'Carbon budgets only'], correct: 1, explanation: 'Nine boundaries (biodiversity, climate, nitrogen, phosphorus, etc.) define a "safe operating space." Transgressing them risks destabilizing Earth-system conditions.' },
      ],
      xp: 95,
    }],
  },
])

export const geographyScholar: Curriculum = make('geography', 'scholar', [
  {
    id: 'geo-scholar-u1', title: 'Geopolitics', emoji: '🗺',
    description: 'Heartland theory, balance of power and contemporary geopolitical conflicts',
    lessons: [{
      id: 'geo-scholar-u1-l1', title: 'Classical Geopolitics & Contemporary Power', emoji: '🌐',
      content: 'Geopolitics analyzes how geography shapes political power. Mackinder (1904): whoever controls the "Heartland" (Eurasian landmass interior) commands the "World Island" (Eurasia-Africa) and thus the world. Mahan emphasized sea power. Today: China\'s Belt and Road Initiative, Arctic competition, and chokepoint control are key geopolitical contests.',
      keyPoints: [
        'Mackinder\'s Heartland: Central Eurasia is the geographic pivot of world power',
        'Mahan: sea power (naval dominance) enables global power projection',
        'Spykman\'s Rimland: controlling Eurasia\'s coastal regions is more important than the Heartland',
        'Chokepoints: Strait of Hormuz, Suez Canal, Malacca Strait — strategic maritime bottlenecks',
        'Belt and Road Initiative (China): infrastructure investment across 140+ countries to project influence',
      ],
      quiz: [
        { question: 'Mackinder\'s "Heartland Theory" argues that:', options: ['Islands control global power', 'Control of the central Eurasian landmass enables world domination', 'Sea power is decisive', 'Economic power determines geography'], correct: 1, explanation: 'Mackinder (1904): the Eurasian interior (Heartland) is rich in resources and invulnerable to sea power — controlling it enables domination of the World Island and thus the globe.' },
        { question: 'Maritime chokepoints like the Strait of Hormuz are strategically important because:', options: ['They are wide and easy to navigate', 'They are near major population centers', 'Most of the world\'s oil tanker traffic passes through them — easy to block', 'They have favorable weather'], correct: 2, explanation: 'Approximately 20% of global oil passes through the Strait of Hormuz. Chokepoints enable small forces to threaten disproportionate economic and military impact.' },
        { question: 'China\'s Belt and Road Initiative primarily seeks to:', options: ['Create a military alliance', 'Build infrastructure across Eurasia and Africa to project economic/political influence', 'Copy the Silk Road archaeologically', 'Create a customs union'], correct: 1, explanation: 'BRI: China funds ports, railways, and roads in 140+ countries. Critics see it as debt-trap diplomacy and strategic positioning; supporters see infrastructure development.' },
        { question: 'Spykman modified Mackinder by arguing the most important region is:', options: ['The Heartland', 'The Rimland (coastal Eurasia)', 'Sub-Saharan Africa', 'The Arctic'], correct: 1, explanation: 'Spykman: the Rimland (coastal Eurasia: Europe, Middle East, South and East Asia) is more important than the Heartland because it is where the decisive struggles occur.' },
      ],
      xp: 110,
    }],
  },
  {
    id: 'geo-scholar-u2', title: 'Development Geography', emoji: '📈',
    description: 'Measuring development, theories of underdevelopment, and sustainable development',
    lessons: [{
      id: 'geo-scholar-u2-l1', title: 'Development Theories', emoji: '🏗',
      content: 'Why are some countries rich and others poor? Modernization theory (Rostow): countries progress through five stages of economic growth. Dependency theory (Frank): the core exploits the periphery through colonial and neocolonial trade structures. World Systems Theory (Wallerstein): core-periphery-semi-periphery hierarchy in a capitalist world-system.',
      keyPoints: [
        'HDI (Human Development Index): combines GDP/capita, life expectancy, education',
        'Rostow\'s stages: traditional → takeoff → drive to maturity → mass consumption',
        'Dependency theory: underdevelopment is caused by the exploitative global economic structure',
        'World Systems Theory (Wallerstein): core (wealthy), periphery (poor), semi-periphery',
        'Washington Consensus: neoliberal reform package (privatization, deregulation, trade openness)',
      ],
      quiz: [
        { question: 'The Human Development Index (HDI) measures:', options: ['GDP only', 'Life expectancy and education only', 'A composite of income, health (life expectancy), and education', 'Military power'], correct: 2, explanation: 'HDI (UNDP): combines GDP per capita (income), life expectancy (health), and mean/expected years of schooling (education) into a composite development indicator.' },
        { question: 'Dependency theory argues underdevelopment is caused by:', options: ['Lack of natural resources', 'Cultural factors', 'The exploitative relationship between wealthy core and poor peripheral countries', 'Corrupt local governments alone'], correct: 2, explanation: 'Frank\'s dependency theory: the global economic structure channels wealth from poor (periphery) to rich (core) countries through unequal terms of trade — perpetuating underdevelopment.' },
        { question: 'Wallerstein\'s World Systems Theory adds which concept to the core-periphery binary?', options: ['The Heartland', 'The semi-periphery (countries in between)', 'The megacity', 'The developing state'], correct: 1, explanation: 'Wallerstein: the capitalist world-economy has three zones: core (wealthy, high-tech), periphery (poor, resource-exporting), and semi-periphery (Brazil, China, India — intermediate).' },
        { question: 'The "Washington Consensus" refers to:', options: ['A peace treaty', 'UN development goals', 'A set of neoliberal economic reforms (privatization, deregulation, trade openness) prescribed for developing nations by IMF/World Bank', 'US foreign aid policy'], correct: 2, explanation: 'Washington Consensus: Williamson\'s 1989 list of 10 IMF/World Bank policy prescriptions — fiscal discipline, privatization, trade/capital liberalization. Controversial in results.' },
      ],
      xp: 110,
    }],
  },
])

export const geographyMaster: Curriculum = make('geography', 'master', [
  {
    id: 'geo-master-u1', title: 'Political Geography', emoji: '🗺',
    description: 'State power, territorial sovereignty, borders and nationalism',
    lessons: [{
      id: 'geo-master-u1-l1', title: 'Territory, Sovereignty & Nationalism', emoji: '🏴',
      content: 'Political geography studies how power operates in space. Sovereignty: exclusive authority within a defined territory — the Westphalian system (1648). Nationalism: political legitimacy derived from a culturally unified people. Tensions: separatist movements (Catalonia, Scotland), contested territories (South China Sea, Kashmir), and transnational governance (EU).',
      keyPoints: [
        'Westphalian sovereignty: states have exclusive authority within recognized borders (since 1648)',
        'Nations vs. states: nations are cultural; states are political — they don\'t always align',
        'Stateless nations: Kurds, Palestinians, Catalans — nations without sovereign states',
        'Geopolitics of the sea: UNCLOS defines 12nm territorial waters, 200nm EEZ',
        'Contested territories challenge sovereignty: South China Sea, Kashmir, Kosovo',
      ],
      quiz: [
        { question: 'The Westphalian system (1648) established:', options: ['Global democracy', 'Exclusive state sovereignty within defined territorial borders', 'European Union precursor', 'The end of empires'], correct: 1, explanation: 'Peace of Westphalia (1648): established the principle that states have exclusive authority within their borders — non-interference in internal affairs. Foundation of international relations.' },
        { question: 'A stateless nation is:', options: ['A nation with no government', 'A culturally coherent people without their own sovereign state', 'A failed state', 'A nation that renounced statehood'], correct: 1, explanation: 'Stateless nations (Kurds, Palestinians, Basques) are culturally and often linguistically distinct peoples who lack their own internationally recognized sovereign state.' },
        { question: 'Under UNCLOS, what is the Exclusive Economic Zone (EEZ)?', options: ['The 12nm territorial sea where full sovereignty applies', '200 nautical miles from baseline where a state has resource rights', 'International waters beyond 200nm', 'The airspace above a state'], correct: 1, explanation: 'EEZ: 200nm from baselines. The state has sovereign rights over resources (fishing, oil, gas) but not full sovereignty — foreign ships can pass.' },
        { question: 'The South China Sea dispute illustrates tensions over:', options: ['Climate change mitigation', 'Overlapping territorial claims by multiple states in resource-rich waters', 'Immigration policy', 'Nuclear weapons'], correct: 1, explanation: 'China, Vietnam, Philippines, Malaysia, Brunei, and Taiwan all have overlapping claims in the South China Sea — driven by fishing rights, oil/gas, and strategic shipping lanes.' },
      ],
      xp: 120,
    }],
  },
  {
    id: 'geo-master-u2', title: 'Critical Geography', emoji: '🔍',
    description: 'Spatial justice, postcolonial geography, and the production of space',
    lessons: [{
      id: 'geo-master-u2-l1', title: 'Lefebvre & The Production of Space', emoji: '🏙',
      content: 'Henri Lefebvre argued space is socially produced: conceived (planners\' abstract space), perceived (lived social practice), and lived (symbolic meanings). Harvey\'s spatial fix: capitalism must continuously restructure geographic space to resolve accumulation crises. Critical geography examines how spatial arrangements reflect and reproduce power relations.',
      keyPoints: [
        'Lefebvre: space is socially produced, not a neutral container',
        'Spatial triad: conceived (representations of space), perceived (practice), lived (symbolic)',
        'Harvey\'s spatial fix: capital moves to new places to overcome accumulation crises (deindustrialization)',
        'Spatial justice: equitable distribution of resources and opportunities across space',
        'Gentrification: capital reinvestment displaces working-class communities from urban space',
      ],
      quiz: [
        { question: 'Lefebvre\'s "production of space" thesis argues:', options: ['Physical geography determines culture', 'Space is a neutral container for social activity', 'Space is actively produced through social practices and power relations', 'Only states produce space'], correct: 2, explanation: 'Lefebvre: space is not given — it is produced by social forces. Capitalist space, for example, is organized for accumulation, not human needs.' },
        { question: 'Harvey\'s "spatial fix" describes:', options: ['Geographic boundary correction', 'How capitalism temporarily resolves accumulation crises by restructuring geographic space (new markets, investment frontiers)', 'Urban planning corrections', 'Natural disaster recovery'], correct: 1, explanation: 'Harvey: when profit rates fall, capital seeks new geographic areas (spatial fix). Colonialism, deindustrialization, and globalization are all spatial fixes for capital crises.' },
        { question: 'Gentrification causes spatial injustice by:', options: ['Improving housing quality universally', 'Raising property values and rents, displacing lower-income residents from reinvested neighborhoods', 'Creating mixed-income communities', 'Reducing urban inequality'], correct: 1, explanation: 'Gentrification: capital returns to devalued urban areas. Property values rise, rents increase, and original working-class residents are priced out — spatial displacement.' },
        { question: 'Spatial justice refers to:', options: ['Courts near all residents', 'Geographic distribution of military power', 'The equitable distribution of resources, opportunities, and risks across geographic space', 'Equal land area for all countries'], correct: 2, explanation: 'Spatial justice (Soja, Harvey): different places have unequal access to resources, opportunities, and environmental risks. Critical geographers analyze and challenge these spatial inequalities.' },
      ],
      xp: 120,
    }],
  },
])

// ─── LITERATURE ──────────────────────────────────────────────────────────────

export const literatureBuilder: Curriculum = make('literature', 'builder', [
  {
    id: 'lit-builder-u1', title: 'Narrative Structure', emoji: '📖',
    description: 'Plot, conflict, and narrative arc — how stories are built',
    lessons: [{
      id: 'lit-builder-u1-l1', title: 'Story Structure & Conflict', emoji: '⚔',
      content: 'Most narratives follow Freytag\'s pyramid: exposition → rising action → climax → falling action → resolution. Conflict drives the story: person vs. person, person vs. nature, person vs. society, person vs. self. The climax is the story\'s turning point — highest tension. Resolution restores order (or deliberately doesn\'t).',
      keyPoints: [
        'Freytag\'s pyramid: exposition → rising action → climax → falling action → resolution',
        'Conflict is the engine of narrative — without it, there is no story',
        'External conflict: protagonist vs. another person, nature, or society',
        'Internal conflict: protagonist vs. self (doubt, moral choice, identity)',
        'Many modern narratives subvert or complicate this linear structure',
      ],
      quiz: [
        { question: 'What is the climax of a narrative?', options: ['The happy ending', 'The opening scene', 'The turning point of highest tension and dramatic intensity', 'The protagonist\'s introduction'], correct: 2, explanation: 'The climax is the story\'s peak — the moment of maximum tension where the central conflict comes to a head. Events are decided here.' },
        { question: 'Internal conflict in literature involves:', options: ['War between countries', 'A character struggling within themselves — doubt, moral choices, identity', 'Two protagonists arguing', 'Nature destroying civilization'], correct: 1, explanation: 'Internal (person vs. self) conflict: characters struggle with their own desires, fears, beliefs, or moral choices — often more psychologically rich than external conflicts.' },
        { question: 'Exposition in Freytag\'s pyramid serves to:', options: ['Create the climax', 'Introduce the setting, characters, and initial situation before conflict develops', 'Resolve the conflict', 'Accelerate the action'], correct: 1, explanation: 'Exposition: the story\'s opening provides essential background — who the characters are, where/when we are, and the initial state of affairs before conflict ignites.' },
        { question: 'A story where the resolution deliberately leaves the conflict unresolved is:', options: ['Poorly written', 'Called a tragedy', 'Common in literary fiction that resists closure', 'Impossible in narrative'], correct: 2, explanation: 'Many literary novels (Kafka, Beckett, Camus) deliberately withhold resolution. This refusal of easy closure can be a deliberate artistic choice reflecting life\'s open-endedness.' },
      ],
      xp: 75,
    }],
  },
  {
    id: 'lit-builder-u2', title: 'Character & Voice', emoji: '🎭',
    description: 'Point of view, narrator reliability, and character development',
    lessons: [{
      id: 'lit-builder-u2-l1', title: 'Narrative Voice & Unreliable Narrators', emoji: '👁',
      content: 'Point of view determines how a story is told: first-person (I), third-person limited (follows one character\'s perspective), third-person omniscient (knows all). An unreliable narrator is one whose credibility is compromised — through mental illness, dishonesty, naivety, or self-delusion. Famous examples: Humbert Humbert (Lolita), Stevens (Remains of the Day).',
      keyPoints: [
        'First-person: intimate but limited to narrator\'s knowledge and bias',
        'Third-person limited: outside the character but restricted to their perspective',
        'Third-person omniscient: narrator knows all characters\' thoughts and history',
        'Unreliable narrator: their account cannot be taken at face value',
        'Dramatic irony: reader knows more than characters — creates tension',
      ],
      quiz: [
        { question: 'An unreliable narrator is one whose:', options: ['Memory is bad', 'Account of events cannot be fully trusted due to bias, delusion, or dishonesty', 'Story is told in third person', 'Account is factually accurate but emotionally biased'], correct: 1, explanation: 'Unreliable narrators may be lying, self-deceived, psychologically unstable, or naively misinterpreting events. The reader must read against or beneath the narrator\'s account.' },
        { question: 'Third-person omniscient narration allows the author to:', options: ['Only follow one character', 'Tell the story from within first person', 'Access any character\'s thoughts and any information needed', 'Use "I" to narrate'], correct: 2, explanation: 'Omniscient narration: the narrator knows all — internal thoughts of multiple characters, historical context, and events occurring simultaneously in different places.' },
        { question: 'Dramatic irony occurs when:', options: ['The narrator is unreliable', 'The reader knows something the characters don\'t, creating tension', 'Two characters have opposing views', 'The author is ironic about the narrator'], correct: 1, explanation: 'Dramatic irony: the audience has information the characters lack. Classic example: the audience knows Juliet isn\'t dead; Romeo doesn\'t — tragic gap creates unbearable tension.' },
        { question: 'First-person narration\'s key limitation is:', options: ['It is grammatically difficult', 'It is restricted to what the narrator knows, sees, and chooses to tell — inherently partial', 'It cannot convey emotion', 'It requires a real author voice'], correct: 1, explanation: 'First-person: rich intimacy but limited access. Readers only know what "I" knows, experiences, and discloses — creating possibility for both revelation and concealment.' },
      ],
      xp: 75,
    }],
  },
])

export const literatureExplorer: Curriculum = make('literature', 'explorer', [
  {
    id: 'lit-explorer-u1', title: 'Genre & Form', emoji: '📚',
    description: 'Tragedy, comedy, modernism, and how form shapes meaning',
    lessons: [{
      id: 'lit-explorer-u1-l1', title: 'Modernism & Stream of Consciousness', emoji: '🌊',
      content: 'Modernism (1890s–1940s) rejected Victorian realism. Key moves: stream of consciousness (Virginia Woolf, James Joyce) represented thought as flowing, associative, non-linear. Fragmented narrative structure (The Waste Land). Multiple perspectives. Unreliable narrators. The modernist insight: external reality is less interesting than interior consciousness.',
      keyPoints: [
        'Modernism rejected 19th-century realism\'s conventions of plot and omniscient narration',
        'Stream of consciousness: unfiltered mental flow — associative, fragmented, present',
        'Woolf\'s Mrs Dalloway: a single day, interior monologue across multiple characters',
        'Joyce\'s Ulysses: one day in Dublin mapped onto Homer\'s Odyssey, 18 different styles',
        'Eliot\'s Waste Land: fragmented, allusion-dense, refuses linear narrative',
      ],
      quiz: [
        { question: 'Stream of consciousness technique represents:', options: ['Dialogue between characters', 'An omniscient narrator explaining everything', 'The flowing, associative, often fragmented movement of a character\'s thoughts', 'A plot technique for faster pacing'], correct: 2, explanation: 'Stream of consciousness: the text mimics actual thought — non-linear, moving between sensation, memory, and reflection — as in Woolf\'s Mrs Dalloway or Joyce\'s Ulysses.' },
        { question: 'Modernist literature rejected:', options: ['Psychological depth', 'Interior monologue', 'Victorian conventions of linear plot, omniscient narration, and stable reality', 'Figurative language'], correct: 2, explanation: 'Modernism: reacted against 19th-century realism\'s confident omniscience, linear plots, and faith in progress. Experimented with form to represent subjective, fragmented experience.' },
        { question: 'Joyce\'s Ulysses is notable for:', options: ['Simple, direct prose', 'A single consistent narrative style', 'Using 18 radically different styles and mapping one Dublin day onto Homer\'s Odyssey', 'Avoiding all classical references'], correct: 2, explanation: 'Ulysses: June 16, 1904 (Bloomsday), 18 chapters each with a unique style (stream of consciousness, parody, catechism, hallucination). Celebrated as the modernist novel.' },
        { question: 'T.S. Eliot\'s The Waste Land is characterized by:', options: ['Clear linear narrative', 'Simple diction and accessible allusions', 'Fragmented form, multiple voices, dense allusions, and cultural despair after WWI', 'Romantic celebration of nature'], correct: 2, explanation: 'The Waste Land (1922): 434 lines in 5 sections with multiple voices, languages, and allusions. Reflects post-WWI cultural crisis and the fragmentation of Western civilization.' },
      ],
      xp: 95,
    }],
  },
  {
    id: 'lit-explorer-u2', title: 'Intertextuality', emoji: '🔗',
    description: 'How texts reference and transform other texts',
    lessons: [{
      id: 'lit-explorer-u2-l1', title: 'Allusion, Parody & Pastiche', emoji: '🎭',
      content: 'Intertextuality (Kristeva): every text is a mosaic of references to other texts. Allusion: indirect reference to another work enriching meaning. Parody: imitating a style to comic or critical effect. Pastiche: imitating a style without critical intent. Wide Sargasso Sea (Rhys) rewrites Jane Eyre from Bertha Mason\'s perspective — a postcolonial counter-narrative.',
      keyPoints: [
        'Intertextuality: all texts exist in relation to other texts — meaning is relational',
        'Allusion: reference to another text/work enriching the current text\'s meaning',
        'Parody: imitating style for comic or satirical effect — requires recognizable original',
        'Counter-narrative: rewriting a canonical text from a marginalized perspective',
        'Wide Sargasso Sea: postcolonial rewriting of Jane Eyre from Bertha\'s viewpoint',
      ],
      quiz: [
        { question: 'Intertextuality (Kristeva) means that:', options: ['Texts exist in isolation', 'All texts are mosaics of references to and absorptions of other texts', 'Only intentional references count', 'Every text copies a previous one exactly'], correct: 1, explanation: 'Kristeva: no text stands alone. All writing is embedded in a web of prior texts, echoes, and transformations. Meaning arises in the dialogue between texts.' },
        { question: 'Wide Sargasso Sea (Jean Rhys) functions as:', options: ['A sequel to Jane Eyre', 'A postcolonial counter-narrative rewriting Jane Eyre from the "madwoman"\'s perspective', 'A parody of Victorian literature', 'An unrelated story'], correct: 1, explanation: 'Rhys gives voice to Bertha Mason (Rochester\'s Creole wife), silenced in Jane Eyre. A postcolonial critique of the colonialist gaze embedded in Brontë\'s novel.' },
        { question: 'Parody differs from pastiche in that parody:', options: ['Is longer than the original', 'Imitates without critical intent', 'Imitates a style for comic or critical effect — requires a recognizable original', 'Only works in poetry'], correct: 2, explanation: 'Parody: imitation with critical/comic intent — it comments on or subverts the original. Pastiche: imitation without critical intent, often nostalgic or celebratory.' },
        { question: 'An allusion enriches meaning by:', options: ['Making the text longer', 'Connecting the current text to the associations and meanings of another work', 'Quoting directly from the original', 'Making the text less accessible'], correct: 1, explanation: 'Allusion: a brief indirect reference activates the reader\'s knowledge of the referenced text. "Achilles\' heel" — one word invokes an entire epic and its themes.' },
      ],
      xp: 95,
    }],
  },
])

export const literatureScholar: Curriculum = make('literature', 'scholar', [
  {
    id: 'lit-scholar-u1', title: 'Literary Theory', emoji: '📜',
    description: 'Structuralism, post-structuralism, feminism and New Criticism',
    lessons: [{
      id: 'lit-scholar-u1-l1', title: 'From New Criticism to Deconstruction', emoji: '🔍',
      content: 'New Criticism (1940s-60s): focus on the text itself, "close reading," the intentional fallacy (author\'s intention is irrelevant). Structuralism (Saussure): meaning comes from differences in a sign system. Barthes "Death of the Author": meaning belongs to the reader, not the author. Derrida\'s deconstruction: texts undermine their own claims.',
      keyPoints: [
        'New Criticism: analyze the text alone — intentional and affective fallacies',
        'Structuralism: signs gain meaning through differences, not inherent properties',
        'Binary oppositions (Lévi-Strauss): culture organizes meaning through pairs (raw/cooked)',
        'Barthes "Death of the Author": the author\'s intention does not determine meaning',
        'Deconstruction: texts contain internal contradictions that undermine their claims',
      ],
      quiz: [
        { question: 'The "intentional fallacy" (New Criticism) holds that:', options: ['Authors\' intentions are always recoverable', 'Authorial intention is irrelevant to textual meaning — the text stands alone', 'Reader responses determine meaning', 'Historical context is primary'], correct: 1, explanation: 'Wimsatt & Beardsley: once published, a text\'s meaning is not determined by the author\'s intentions. The text itself is the proper object of analysis.' },
        { question: 'Barthes\' "Death of the Author" argues:', options: ['Authors should be anonymous', 'The author is dead in a physical sense', 'Meaning is produced by the reader, not determined by the author', 'Structuralism determines meaning'], correct: 2, explanation: 'Barthes: to give the text an Author is to impose a limit on it. Without the Author, the text becomes liberated — meaning is produced in reading, not written in.' },
        { question: 'Saussurean structuralism holds that signs gain meaning through:', options: ['Their inherent connection to the things they represent', 'Difference from other signs in the system', 'The author\'s intention', 'Historical usage only'], correct: 1, explanation: 'Saussure: signs are arbitrary (no inherent connection to signified). "Dog" means dog not because of the sound but because it differs from "log," "bog," etc. Meaning = difference.' },
        { question: 'Deconstruction (Derrida) reveals that texts:', options: ['Have single determinate meanings', 'Contain internal contradictions and undecidable tensions that undermine their own claims', 'Are purely products of social context', 'Communicate perfectly when correctly read'], correct: 1, explanation: 'Deconstruction: closely reading any text reveals it depends on, yet simultaneously undermines, binary oppositions. The text works against its own apparent meanings.' },
      ],
      xp: 110,
    }],
  },
  {
    id: 'lit-scholar-u2', title: 'Postcolonial Literature', emoji: '🌍',
    description: 'Said\'s Orientalism, Fanon, Achebe and writing back to empire',
    lessons: [{
      id: 'lit-scholar-u2-l1', title: 'Writing Back: Postcolonial Criticism', emoji: '✍',
      content: 'Edward Said\'s Orientalism (1978): the West constructs the "Orient" as exotic, irrational, and inferior to justify domination. Fanon\'s "The Wretched of the Earth": colonialism dehumanizes both colonized and colonizer; violence can be a path to decolonization. Achebe\'s "Things Fall Apart": gives voice to Igbo civilization before and during British colonization.',
      keyPoints: [
        'Said\'s Orientalism: Western discourse constructs the "Orient" as an inferior Other to justify colonialism',
        'The "Other": how dominant cultures define themselves by negating subordinated groups',
        'Fanon: colonialism causes psychological damage to the colonized — requires decolonization of the mind',
        'Achebe critiques Conrad\'s Heart of Darkness for reducing Africans to backdrop',
        'Hybridity (Bhabha): colonial contact produces mixed identities that destabilize colonial authority',
      ],
      quiz: [
        { question: 'Said\'s "Orientalism" argues that Western representations of the "Orient":', options: ['Are accurate scholarly accounts', 'Are cultural productions that justify colonial domination by constructing East as inferior Other', 'Are neutral observations', 'Were created by Eastern scholars'], correct: 1, explanation: 'Said: Orientalism is a discourse that produces knowledge of the "East" as exotic, timeless, and inferior — which then legitimized colonial domination.' },
        { question: 'Chinua Achebe\'s "Things Fall Apart" is significant because:', options: ['It describes British colonialism approvingly', 'It gives a complex, dignified voice to African (Igbo) civilization before and during colonization', 'It is written by a British author', 'It focuses on slavery'], correct: 1, explanation: 'Achebe responded to Conrad\'s dehumanizing portrayal of Africans. Things Fall Apart presents Okonkwo and Igbo society in their full complexity before colonial disruption.' },
        { question: 'Homi Bhabha\'s "hybridity" refers to:', options: ['Mixed-race individuals', 'The cultural mixing that occurs in colonial contact zones, destabilizing pure colonial authority', 'Literary genre mixing', 'Multilingual texts'], correct: 1, explanation: 'Bhabha: colonialism produces hybrid identities that mimic but are not identical to the colonizer. This mimicry is ambivalent — it undermines colonial authority.' },
        { question: 'Fanon argued that colonialism causes:', options: ['Economic dependency only', 'Psychological damage — internalized inferiority — requiring decolonization of the mind, not just political independence', 'No lasting harm', 'Only physical harm'], correct: 1, explanation: 'Fanon (Black Skin, White Masks; Wretched of the Earth): colonialism instills a sense of inferiority in the colonized through cultural domination. Political decolonization must be accompanied by psychological liberation.' },
      ],
      xp: 110,
    }],
  },
])

export const literatureMaster: Curriculum = make('literature', 'master', [
  {
    id: 'lit-master-u1', title: 'Deconstructionism', emoji: '🔮',
    description: 'Derrida\'s différance, logocentrism, and undecidability in texts',
    lessons: [{
      id: 'lit-master-u1-l1', title: 'Deconstruction in Practice', emoji: '⚗',
      content: 'Deconstruction reads texts against themselves. Logocentrism: Western philosophy privileges speech over writing, presence over absence. Derrida shows writing is prior — it exposes the necessary non-presence at the heart of meaning. Undecidability: texts contain moments where interpretation cannot be settled — the pharmakon (poison/remedy), the hymen (virginity/consummation).',
      keyPoints: [
        'Logocentrism: privileging of presence, speech, and the transcendental signified',
        'Derrida: writing (différance) exposes the absence at the center of all presence',
        'Arche-writing: writing precedes speech — the "trace" structure is more fundamental',
        'Undecidability: key textual moments cannot be resolved into a single meaning',
        'Pharmakon (Plato\'s Phaedrus): poison/remedy — Derrida shows the two cannot be separated'],
      quiz: [
        { question: 'Logocentrism refers to:', options: ['The science of logos (logic)', 'Western philosophy\'s privileging of presence, speech, and a transcendental ground of meaning', 'Centrism in logo design', 'Literary analysis of speeches'], correct: 1, explanation: 'Derrida: Western metaphysics privileges speech over writing, presence over absence, as if there were a transcendental signified (God, Truth, Reason) grounding all meaning.' },
        { question: 'The pharmakon in Derrida\'s reading of Plato means:', options: ['Plato was a pharmacist', 'The word simultaneously means poison and remedy — an undecidable term that Plato cannot stabilize', 'Medical texts in antiquity', 'A type of metaphor'], correct: 1, explanation: 'In Phaedrus, Plato uses pharmakon for writing. It means both poison (bad memory substitute) and remedy (aid to memory) — Derrida shows this undecidability cannot be resolved.' },
        { question: 'Undecidability in deconstruction means:', options: ['Texts are meaningless', 'We cannot determine anything from texts', 'Certain textual moments resist resolution into a single determinate meaning', 'All interpretations are equally valid'], correct: 2, explanation: 'Undecidability: not "anything goes" but rather that certain textual cruxes generate irresolvable interpretive tension — the text works against its own apparent stabilization.' },
        { question: 'Arche-writing (Derrida) is more fundamental than speech because:', options: ['Writing was invented first historically', 'Writing is more precise', 'The "trace" structure — difference and deferral — constitutes all meaning, even in speech', 'Writing requires more technology'], correct: 2, explanation: 'Arche-writing: the movement of différance (trace-structure) operates in all signification, prior to the distinction between speech and writing. Presence itself is constituted by trace.' },
      ],
      xp: 130,
    }],
  },
  {
    id: 'lit-master-u2', title: 'Contemporary Literary Theory', emoji: '🌐',
    description: 'Ecocriticism, affect theory, and the digital humanities',
    lessons: [{
      id: 'lit-master-u2-l1', title: 'Ecocriticism & Affect Theory', emoji: '🌿',
      content: 'Ecocriticism: reading literature in relation to the environment; how texts construct nature/culture binaries. The Anthropocene as literary theme: planetary-scale human impact. Affect theory (Massumi, Ahmed): focuses on pre-cognitive intensity and bodily feeling as sites of meaning — against purely linguistic analysis. Digital humanities: computational analysis of large text corpora (distant reading, Moretti).',
      keyPoints: [
        'Ecocriticism: analyzes representations of nature and environmental crisis in literature',
        'The Anthropocene: an era where human activity is the dominant geological force',
        'Affect theory: focuses on pre-cognitive, bodily intensities rather than linguistic meaning',
        'Distant reading (Moretti): computational analysis of thousands of texts to find patterns',
        'New materialism: matter itself has agency — not only humans and texts'],
      quiz: [
        { question: 'Ecocriticism primarily concerns:', options: ['Environmental policy', 'The relationship between literary texts and the natural environment — how literature constructs nature', 'Ecological biology', 'Writing about wilderness only'], correct: 1, explanation: 'Ecocriticism: a critical approach examining how texts represent nature, environmental crisis, the non-human world, and the nature/culture divide.' },
        { question: 'Franco Moretti\'s "distant reading" differs from close reading by:', options: ['Reading texts less carefully', 'Computationally analyzing large corpora of texts to identify patterns invisible in single readings', 'Reading from a physical distance', 'Avoiding interpretation'], correct: 1, explanation: 'Distant reading: instead of close-reading individual texts, Moretti uses computational tools to analyze hundreds or thousands of novels for genre patterns, character networks, etc.' },
        { question: 'Affect theory privileges:', options: ['Linguistic analysis', 'Pre-cognitive bodily intensities and feelings that exceed linguistic representation', 'Authorial biography', 'Social context alone'], correct: 1, explanation: 'Affect (Massumi, Ahmed): the intensity of feeling before it is captured in emotion or language. Affect theory shifts from text-as-language to text-as-experience of the body.' },
        { question: 'The Anthropocene as a literary concept examines:', options: ['Ancient Greek literature', 'The representation of planetary-scale human impact on geological and biological systems in contemporary writing', 'Science fiction only', 'Human achievement narratives'], correct: 1, explanation: 'Anthropocene literature grapples with climate change, extinction, and the collapse of the nature/culture divide — literature\'s response to the reality that humans have become a geological force.' },
      ],
      xp: 130,
    }],
  },
])
