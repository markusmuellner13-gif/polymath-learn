import type { Curriculum, Difficulty } from '../types'

const make = (topicId: string, difficulty: Difficulty, units: Curriculum['units']): Curriculum => ({
  topicId, difficulty, units,
})

// ─── CHEMISTRY ───────────────────────────────────────────────────────────────

export const chemBuilder: Curriculum = make('chemistry', 'builder', [
  {
    id: 'chem-builder-u1', title: 'Chemical Bonding', emoji: '🔗',
    description: 'How atoms bond: ionic, covalent, and metallic bonds',
    lessons: [{
      id: 'chem-builder-u1-l1', title: 'Ionic & Covalent Bonds', emoji: '⚡',
      content: 'Ionic bonds form when electrons transfer from one atom to another (metal + non-metal). Covalent bonds form when atoms share electrons. Ionic compounds form crystals and conduct electricity when dissolved; covalent compounds are often gases, liquids, or soft solids.',
      keyPoints: [
        'Ionic bond: electron transfer between metal and non-metal',
        'Covalent bond: electron sharing between non-metals',
        'Electronegativity difference > 1.7 → ionic; < 0.4 → nonpolar covalent',
        'Ionic compounds have high melting points; covalent usually lower',
        'Water (H₂O) is a polar covalent molecule',
      ],
      quiz: [
        { question: 'NaCl (table salt) forms which type of bond?', options: ['Covalent', 'Metallic', 'Ionic', 'Hydrogen'], correct: 2, explanation: 'Na (metal) gives an electron to Cl (non-metal), forming an ionic bond.' },
        { question: 'Two non-metal atoms sharing electrons form a:', options: ['Ionic bond', 'Covalent bond', 'Metallic bond', 'Van der Waals bond'], correct: 1, explanation: 'Non-metals share electrons rather than transferring them, forming covalent bonds.' },
        { question: 'Which has a higher melting point?', options: ['Covalent molecular solids', 'Ionic compounds', 'Noble gases', 'They are equal'], correct: 1, explanation: 'Ionic compounds have strong electrostatic attractions between oppositely charged ions, requiring more energy to melt.' },
        { question: 'Water is polar because:', options: ['It has two hydrogens', 'Oxygen is more electronegative, pulling electrons toward it', 'Hydrogen is heavier', 'It has a linear shape'], correct: 1, explanation: 'Oxygen is more electronegative than hydrogen, so shared electrons are pulled toward O, creating a polar molecule.' },
      ],
      xp: 75,
    }],
  },
  {
    id: 'chem-builder-u2', title: 'Acids, Bases & pH', emoji: '🧪',
    description: 'What acids and bases are, pH scale, and neutralization',
    lessons: [{
      id: 'chem-builder-u2-l1', title: 'pH and Neutralization', emoji: '⚖',
      content: 'Acids donate H⁺ ions; bases accept H⁺ ions. pH measures hydrogen ion concentration: pH = −log[H⁺]. Scale 0–14: below 7 is acidic, 7 is neutral, above 7 is basic. Neutralization: acid + base → salt + water.',
      keyPoints: [
        'pH = −log[H⁺]; lower pH = more acidic',
        'pH < 7: acidic; pH = 7: neutral; pH > 7: basic',
        'Strong acids fully dissociate (HCl, H₂SO₄)',
        'Neutralization: HCl + NaOH → NaCl + H₂O',
        'Buffer solutions resist changes in pH',
      ],
      quiz: [
        { question: 'What is the pH of pure water?', options: ['0', '14', '7', '1'], correct: 2, explanation: 'Pure water is neutral with pH = 7. [H⁺] = [OH⁻] = 10⁻⁷ M.' },
        { question: 'A solution with pH 2 is:', options: ['Basic', 'Neutral', 'Strongly acidic', 'Mildly acidic'], correct: 2, explanation: 'pH 2 is very acidic — close to the acidic extreme (pH 0). Each unit decrease in pH = 10× more acidic.' },
        { question: 'In neutralization, acid + base produces:', options: ['Only water', 'Only salt', 'Salt and water', 'Hydrogen gas'], correct: 2, explanation: 'Acid + base → salt + water. E.g., HCl + NaOH → NaCl + H₂O.' },
        { question: 'HCl is a strong acid because it:', options: ['Has many atoms', 'Is colorless', 'Fully dissociates into H⁺ and Cl⁻ in water', 'Contains only one H'], correct: 2, explanation: 'Strong acids fully dissociate in water, releasing all their H⁺ ions. Weak acids only partially dissociate.' },
      ],
      xp: 75,
    }],
  },
])

export const chemExplorer: Curriculum = make('chemistry', 'explorer', [
  {
    id: 'chem-explorer-u1', title: 'Organic Chemistry', emoji: '🧬',
    description: 'Carbon compounds: hydrocarbons, functional groups, reactions',
    lessons: [{
      id: 'chem-explorer-u1-l1', title: 'Carbon & Functional Groups', emoji: '⛓',
      content: 'Organic chemistry studies carbon-containing compounds. Carbon forms 4 bonds — enabling chains, rings, and branching. Functional groups determine reactivity: hydroxyl (−OH) in alcohols, carboxyl (−COOH) in acids, amino (−NH₂) in amines.',
      keyPoints: [
        'Carbon forms 4 covalent bonds — the basis of organic chemistry',
        'Hydrocarbons: only C and H (alkanes, alkenes, alkynes)',
        'Functional groups: −OH (alcohol), −COOH (carboxylic acid), −NH₂ (amine)',
        'Isomers have the same formula but different structures',
        'Benzene (C₆H₆) is a stable aromatic ring with delocalized electrons',
      ],
      quiz: [
        { question: 'Why is carbon the backbone of life?', options: ['It is the most abundant element', 'It forms 4 bonds, enabling complex chain and ring structures', 'It is very reactive', 'It is the lightest element that forms bonds'], correct: 1, explanation: 'Carbon\'s 4 valence bonds allow it to form chains, branches, and rings of enormous complexity.' },
        { question: 'Which functional group defines an alcohol?', options: ['−COOH', '−NH₂', '−OH', '−CHO'], correct: 2, explanation: 'The hydroxyl group (−OH) attached to a carbon chain defines alcohols (e.g., ethanol: CH₃CH₂OH).' },
        { question: 'Two molecules with formula C₃H₈O but different structures are:', options: ['Isotopes', 'Isomers', 'Allotropes', 'Polymers'], correct: 1, explanation: 'Structural isomers have the same molecular formula but different arrangements of atoms.' },
        { question: 'Benzene\'s unusual stability comes from:', options: ['Double bonds only', 'Its 6 carbons', 'Delocalized pi electrons across the ring', 'Its gas phase at room temperature'], correct: 2, explanation: 'Benzene has resonance — pi electrons are delocalized over the whole ring, giving extra stability beyond a simple alternating double-bond structure.' },
      ],
      xp: 90,
    }],
  },
  {
    id: 'chem-explorer-u2', title: 'Electrochemistry', emoji: '🔋',
    description: 'Redox reactions, galvanic cells, and electrolysis',
    lessons: [{
      id: 'chem-explorer-u2-l1', title: 'Redox & Galvanic Cells', emoji: '⚡',
      content: 'Redox reactions involve electron transfer: oxidation (loses electrons) and reduction (gains electrons). OIL RIG. Galvanic cells convert chemical energy to electricity (batteries). Electrolysis uses electricity to drive non-spontaneous reactions (e.g., splitting water).',
      keyPoints: [
        'OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons)',
        'Oxidizing agent gains electrons; reducing agent loses electrons',
        'Galvanic cell: spontaneous redox → electrical energy (batteries)',
        'Electrolysis: electrical energy → drives non-spontaneous redox',
        'Standard reduction potential (E°) determines cell voltage',
      ],
      quiz: [
        { question: 'In a redox reaction, oxidation means:', options: ['Gaining electrons', 'Losing electrons', 'Gaining protons', 'Losing protons'], correct: 1, explanation: 'OIL RIG: Oxidation Is Loss of electrons. The oxidized species gives electrons to the reducing agent.' },
        { question: 'A galvanic cell converts:', options: ['Electrical to chemical energy', 'Chemical to electrical energy', 'Heat to electricity', 'Light to electricity'], correct: 1, explanation: 'Galvanic (voltaic) cells convert spontaneous chemical energy (redox) to electrical energy — this is how batteries work.' },
        { question: 'Electrolysis uses electricity to:', options: ['Generate spontaneous reactions', 'Drive non-spontaneous chemical reactions', 'Measure pH', 'Increase temperature'], correct: 1, explanation: 'Electrolysis: electrical energy drives otherwise non-spontaneous redox reactions (e.g., electroplating, water splitting).' },
        { question: 'If E°_cell > 0, the cell reaction is:', options: ['Non-spontaneous', 'Spontaneous', 'At equilibrium', 'Impossible'], correct: 1, explanation: 'Positive standard cell potential means ΔG° < 0 — the reaction is spontaneous and will produce electricity.' },
      ],
      xp: 90,
    }],
  },
])

export const chemScholar: Curriculum = make('chemistry', 'scholar', [
  {
    id: 'chem-scholar-u1', title: 'Chemical Kinetics', emoji: '⏱',
    description: 'Reaction rates, rate laws, activation energy and catalysis',
    lessons: [{
      id: 'chem-scholar-u1-l1', title: 'Rate Laws & Activation Energy', emoji: '📈',
      content: 'Reaction rate depends on concentration (rate = k[A]^m[B]^n) and temperature (Arrhenius: k = Ae^(−Ea/RT)). The order of reaction is determined experimentally. Catalysts lower activation energy without being consumed.',
      keyPoints: [
        'Rate = k[A]^m[B]^n where m, n are determined experimentally',
        'Rate constant k increases with temperature (Arrhenius equation)',
        'Activation energy (Ea) is the energy barrier reactants must overcome',
        'Catalysts provide an alternative pathway with lower Ea',
        'Half-life: time for half of a reactant to be consumed (first-order: t½ = ln2/k)',
      ],
      quiz: [
        { question: 'Doubling [A] doubles the rate. The reaction order in A is:', options: ['Zero', 'First', 'Second', 'Third'], correct: 1, explanation: 'Rate doubles when [A] doubles → rate ∝ [A]¹ → first order in A.' },
        { question: 'What does a catalyst do to a reaction?', options: ['Adds energy', 'Increases Ea', 'Lowers activation energy without being consumed', 'Changes the products'], correct: 2, explanation: 'Catalysts provide an alternative, lower-energy pathway. They speed the reaction but are not consumed.' },
        { question: 'The Arrhenius equation shows that reaction rate:', options: ['Decreases with temperature', 'Is independent of temperature', 'Increases with temperature', 'Only changes with pressure'], correct: 2, explanation: 'k = Ae^(−Ea/RT). As T increases, e^(−Ea/RT) increases, so k increases — higher temperature means faster reaction.' },
        { question: 'For a first-order reaction with k = 0.693/min, what is t½?', options: ['2 min', '0.5 min', '1 min', '1.44 min'], correct: 2, explanation: 't½ = ln2/k = 0.693/0.693 = 1 min.' },
      ],
      xp: 105,
    }],
  },
  {
    id: 'chem-scholar-u2', title: 'Thermochemistry', emoji: '🔥',
    description: 'Enthalpy, entropy, Gibbs free energy and spontaneity',
    lessons: [{
      id: 'chem-scholar-u2-l1', title: 'Gibbs Free Energy', emoji: '⚖',
      content: 'Spontaneity is determined by Gibbs free energy: ΔG = ΔH − TΔS. If ΔG < 0, the reaction is spontaneous. Exothermic reactions (ΔH < 0) are favored but not always spontaneous — entropy (ΔS) also matters. ΔG° = −RT·ln(K) links thermodynamics to equilibrium.',
      keyPoints: [
        'ΔG = ΔH − TΔS: combines enthalpy and entropy',
        'ΔG < 0: spontaneous; ΔG > 0: non-spontaneous; ΔG = 0: equilibrium',
        'Exothermic (ΔH < 0) and entropy-increasing (ΔS > 0) → always spontaneous',
        'ΔG° = −RT·ln(K) — Gibbs energy relates to equilibrium constant',
        'Temperature determines whether entropy or enthalpy dominates',
      ],
      quiz: [
        { question: 'A reaction has ΔH = −100 kJ and ΔS = 200 J/K at 298K. Is it spontaneous?', options: ['No', 'Yes', 'Cannot determine', 'Only at high T'], correct: 1, explanation: 'ΔG = −100,000 − (298)(200) = −100,000 − 59,600 = −159,600 J. ΔG < 0 → spontaneous.' },
        { question: 'At equilibrium, ΔG equals:', options: ['−1', '+1', '0', 'ΔH'], correct: 2, explanation: 'At equilibrium, ΔG = 0 — the system is at its lowest accessible Gibbs energy and no net change occurs.' },
        { question: 'A reaction is endothermic (ΔH > 0) with increasing entropy (ΔS > 0). It becomes spontaneous:', options: ['At low temperatures', 'At high temperatures', 'Never', 'Always'], correct: 1, explanation: 'ΔG = ΔH − TΔS. With ΔH > 0 and ΔS > 0, TΔS eventually exceeds ΔH at high T, making ΔG negative.' },
        { question: 'ΔG° = −RT·ln(K) shows that a large K corresponds to:', options: ['ΔG° > 0', 'ΔG° = 0', 'ΔG° < 0', 'ΔG° = ΔH°'], correct: 2, explanation: 'Large K means the reaction strongly favors products → ln(K) is large positive → ΔG° is large negative.' },
      ],
      xp: 110,
    }],
  },
])

export const chemMaster: Curriculum = make('chemistry', 'master', [
  {
    id: 'chem-master-u1', title: 'Quantum Chemistry', emoji: '⚛',
    description: 'Molecular orbital theory, wave functions, and spectroscopy',
    lessons: [{
      id: 'chem-master-u1-l1', title: 'Molecular Orbital Theory', emoji: '🌊',
      content: 'MO theory: atomic orbitals combine to form molecular orbitals spanning the entire molecule. Bonding MOs lower energy (stabilizing); antibonding MOs (σ*,π*) raise it. Bond order = (bonding − antibonding electrons)/2. MO theory explains paramagnetism of O₂.',
      keyPoints: [
        'Atomic orbitals combine to form molecular orbitals (MOs)',
        'Bonding MOs: lower energy, stabilize the molecule',
        'Antibonding MOs (marked *): higher energy, destabilize',
        'Bond order = (bonding e⁻ − antibonding e⁻) / 2',
        'O₂ has two unpaired electrons in π* orbitals → paramagnetic',
      ],
      quiz: [
        { question: 'Bond order of O₂ according to MO theory?', options: ['1', '2', '3', '0'], correct: 1, explanation: 'O₂: 10 bonding e⁻, 6 antibonding e⁻. Bond order = (10−6)/2 = 2.' },
        { question: 'Antibonding molecular orbitals:', options: ['Lower energy than atomic orbitals', 'Have no effect on bonding', 'Raise energy and destabilize bonds', 'Are only found in metals'], correct: 2, explanation: 'Electrons in antibonding MOs (σ*, π*) have higher energy and weaken the bond.' },
        { question: 'Why is O₂ paramagnetic?', options: ['It has double bonds', 'It has two unpaired electrons in degenerate π* orbitals', 'It is an oxide', 'It has 8 protons'], correct: 1, explanation: 'MO theory shows two degenerate π* orbitals each get one electron (Hund\'s rule), leaving two unpaired spins — paramagnetic.' },
        { question: 'A bond order of 0 means:', options: ['A triple bond', 'A double bond', 'No bond forms', 'An ionic bond'], correct: 2, explanation: 'Bond order = 0 means equal bonding and antibonding electrons — no net bonding, so no stable molecule forms (e.g., He₂).' },
      ],
      xp: 125,
    }],
  },
  {
    id: 'chem-master-u2', title: 'Coordination Chemistry', emoji: '🔮',
    description: 'Transition metal complexes, crystal field theory, and applications',
    lessons: [{
      id: 'chem-master-u2-l1', title: 'Crystal Field Theory', emoji: '💎',
      content: 'Transition metal complexes consist of a central metal ion surrounded by ligands (Lewis bases). Crystal field theory explains d-orbital splitting by electrostatic ligand fields. Strong-field ligands cause large splitting (Δ) and force pairing; weak-field ligands give small Δ and high-spin complexes.',
      keyPoints: [
        'Coordination complexes: metal ion + surrounding ligands',
        'Ligands are Lewis bases that donate electron pairs to metal',
        'Crystal field theory: ligands split d-orbitals in energy',
        'Large Δ (strong-field ligands like CN⁻): low-spin complexes',
        'Small Δ (weak-field like F⁻, H₂O): high-spin, more unpaired e⁻',
      ],
      quiz: [
        { question: 'What are ligands in coordination chemistry?', options: ['Metal ions', 'Lewis acids that accept electron pairs', 'Lewis bases that donate electron pairs to the metal', 'Counterions'], correct: 2, explanation: 'Ligands are Lewis bases — they donate lone pairs to the central metal ion to form coordinate covalent bonds.' },
        { question: 'Strong-field ligands produce:', options: ['Large Δ and high-spin complexes', 'Small Δ and low-spin complexes', 'Large Δ and low-spin complexes', 'No d-orbital splitting'], correct: 2, explanation: 'Strong-field ligands (CN⁻, CO) create a large crystal field splitting, forcing electrons to pair in lower orbitals (low-spin).' },
        { question: 'Which is a strong-field ligand?', options: ['F⁻', 'H₂O', 'CN⁻', 'Cl⁻'], correct: 2, explanation: 'Spectrochemical series: CN⁻ is at the strong-field end. F⁻ and H₂O are weak-field ligands.' },
        { question: 'The color of transition metal complexes arises from:', options: ['d-d electronic transitions that absorb specific wavelengths', 'Metal melting', 'Ionic dissociation', 'The number of protons'], correct: 0, explanation: 'Electrons absorb light to jump between split d-orbitals. The complementary color of what is absorbed is what we see.' },
      ],
      xp: 125,
    }],
  },
])

// ─── BIOLOGY ─────────────────────────────────────────────────────────────────

export const bioBuilder: Curriculum = make('biology', 'builder', [
  {
    id: 'bio-builder-u1', title: 'Evolution', emoji: '🦎',
    description: 'Natural selection, adaptation and the tree of life',
    lessons: [{
      id: 'bio-builder-u1-l1', title: 'Natural Selection', emoji: '🌿',
      content: 'Evolution occurs through natural selection: heritable variation exists, some variants survive better, survivors reproduce more, traits accumulate over generations. Darwin\'s key insight: evolution has no foresight — it selects from existing variation based only on current environment.',
      keyPoints: [
        'Natural selection requires: variation, heritability, differential survival',
        'Adaptations are traits that increase fitness in the current environment',
        'Evolution acts on populations, not individuals',
        'Common descent: all life shares a common ancestor',
        'Speciation occurs when populations become reproductively isolated',
      ],
      quiz: [
        { question: 'Which is NOT required for natural selection to occur?', options: ['Heritable variation', 'Differential reproduction', 'A goal or direction', 'Environmental pressure'], correct: 2, explanation: 'Natural selection has no foresight or goal. It merely filters existing variation based on current survival/reproduction success.' },
        { question: 'Evolution operates on:', options: ['Individual organisms', 'Populations over generations', 'Single genes only', 'Ecosystems directly'], correct: 1, explanation: 'Evolution = change in allele frequencies in populations over time. Individual organisms don\'t evolve — they live or die.' },
        { question: 'What is an adaptation?', options: ['Any change in an organism', 'A trait that increases fitness in the current environment', 'A mutation', 'A learned behavior'], correct: 1, explanation: 'Adaptations are heritable traits that improve survival and reproductive success relative to other variants.' },
        { question: 'Speciation most commonly requires:', options: ['Mutation only', 'Reproductive isolation between populations', 'Identical environments', 'Rapid climate change'], correct: 1, explanation: 'When populations can no longer interbreed (reproductive isolation), they diverge genetically and eventually become separate species.' },
      ],
      xp: 75,
    }],
  },
  {
    id: 'bio-builder-u2', title: 'Ecology', emoji: '🌍',
    description: 'Ecosystems, food webs, and ecological relationships',
    lessons: [{
      id: 'bio-builder-u2-l1', title: 'Ecosystems & Food Webs', emoji: '🌿',
      content: 'An ecosystem is all the organisms in an area plus their abiotic environment. Energy flows through food webs: producers (plants) → primary consumers → secondary consumers. Only ~10% of energy transfers between levels. Nutrients cycle; energy does not.',
      keyPoints: [
        'Producers (plants, algae) convert sunlight to chemical energy',
        '~10% of energy transfers from one trophic level to the next',
        'Decomposers (fungi, bacteria) recycle nutrients from dead matter',
        'Nutrient cycles (carbon, nitrogen) are circular; energy flow is one-way',
        'Keystone species have outsized impact on ecosystem structure',
      ],
      quiz: [
        { question: 'Why do food chains rarely exceed 4-5 levels?', options: ['Predators run out of space', 'Only 10% of energy transfers, so little remains at top', 'Top predators live longer', 'Nutrients are lost'], correct: 1, explanation: 'Each level retains only ~10% of energy from the level below. After 4-5 steps, insufficient energy remains to support another level.' },
        { question: 'A keystone species is one that:', options: ['Is the most abundant species', 'Has outsized ecological impact relative to its biomass', 'Produces the most offspring', 'Only eats plants'], correct: 1, explanation: 'Remove a keystone species and the ecosystem changes dramatically — disproportionate influence on the ecosystem structure.' },
        { question: 'Why do nutrients cycle but energy does not?', options: ['Nutrients are heavier', 'Energy is lost as heat at each step; nutrients are conserved as matter', 'Plants absorb all energy', 'Decomposers destroy energy'], correct: 1, explanation: 'Energy is lost as heat (2nd Law of Thermodynamics). Nutrients are atoms that cycle through organisms, soil, water, and atmosphere.' },
        { question: 'Which organisms recycle dead organic matter?', options: ['Producers', 'Primary consumers', 'Decomposers', 'Apex predators'], correct: 2, explanation: 'Decomposers (fungi, bacteria) break down dead organisms, releasing nutrients back to the ecosystem.' },
      ],
      xp: 75,
    }],
  },
])

export const bioExplorer: Curriculum = make('biology', 'explorer', [
  {
    id: 'bio-explorer-u1', title: 'Biochemistry', emoji: '🧪',
    description: 'Proteins, enzymes, ATP and cellular metabolism',
    lessons: [{
      id: 'bio-explorer-u1-l1', title: 'Proteins & Enzymes', emoji: '⚙',
      content: 'Proteins are polymers of amino acids folded into specific 3D shapes. Their shape determines function. Enzymes are biological catalysts: they lower activation energy, are specific to one substrate (lock-and-key), and are not consumed. Temperature and pH affect enzyme activity.',
      keyPoints: [
        '20 amino acids combine in different sequences to make all proteins',
        'Protein function depends entirely on its 3D shape (conformation)',
        'Enzymes: biological catalysts, substrate-specific, not consumed',
        'Active site: where substrate binds (lock-and-key model)',
        'High temperature or extreme pH denatures enzymes (breaks shape)',
      ],
      quiz: [
        { question: 'What determines a protein\'s function?', options: ['Its amino acid count', 'Its 3D folded shape', 'Its color', 'Its weight'], correct: 1, explanation: 'A protein\'s 3D conformation determines what it can bind and do. Change the shape (denaturation) and it loses function.' },
        { question: 'An enzyme is a biological catalyst that:', options: ['Is consumed in the reaction', 'Changes the products', 'Lowers activation energy without being consumed', 'Adds energy to reactions'], correct: 2, explanation: 'Enzymes lower Ea (activation energy) and are regenerated after each reaction cycle — catalysts are not consumed.' },
        { question: 'Boiling an enzyme destroys its activity because:', options: ['It evaporates', 'Heat denatures the protein by disrupting its 3D shape', 'It runs out of substrate', 'Boiling adds water'], correct: 1, explanation: 'High temperatures break the weak interactions (H-bonds, van der Waals) maintaining enzyme shape → denaturation → loss of function.' },
        { question: 'What is the "active site" of an enzyme?', options: ['The entire protein', 'The region where substrate binds and reaction occurs', 'The area that binds products', 'The cell membrane attachment site'], correct: 1, explanation: 'The active site is a specific pocket where the substrate binds with complementary shape. This is where catalysis happens.' },
      ],
      xp: 90,
    }],
  },
  {
    id: 'bio-explorer-u2', title: 'Physiology', emoji: '❤',
    description: 'How organ systems work: heart, lungs, kidneys',
    lessons: [{
      id: 'bio-explorer-u2-l1', title: 'The Cardiovascular System', emoji: '🫀',
      content: 'The heart pumps blood through two circuits: pulmonary (heart→lungs→heart) and systemic (heart→body→heart). Oxygenated blood leaves via aorta; deoxygenated returns via vena cava. Blood pressure is measured as systolic/diastolic (120/80 mmHg normal).',
      keyPoints: [
        'Heart has 4 chambers: right/left atria and ventricles',
        'Pulmonary circuit: heart → lungs (gas exchange) → heart',
        'Systemic circuit: heart → body → heart',
        'Arteries carry blood away from heart; veins carry blood to heart',
        'Blood pressure: systolic (heart contracting) / diastolic (heart relaxing)',
      ],
      quiz: [
        { question: 'What is the pulmonary circuit?', options: ['Heart to body and back', 'Heart to lungs and back for gas exchange', 'Blood going to kidneys', 'The lymphatic system'], correct: 1, explanation: 'Pulmonary circuit: right ventricle → lungs (pick up O₂, drop CO₂) → left atrium.' },
        { question: 'Arteries vs. veins — which carries oxygenated blood from the heart?', options: ['Veins', 'Arteries', 'Capillaries', 'Lymphatics'], correct: 1, explanation: 'Arteries carry blood AWAY from the heart. In the systemic circuit, arteries carry oxygenated blood to the body.' },
        { question: 'Normal blood pressure is approximately:', options: ['80/120 mmHg', '120/80 mmHg', '180/90 mmHg', '60/40 mmHg'], correct: 1, explanation: '120/80 mmHg is normal. Systolic (120) is the pressure when the heart contracts; diastolic (80) when it relaxes.' },
        { question: 'The left ventricle must pump harder than the right because:', options: ['It is larger', 'It pumps to the entire body (systemic circuit), requiring higher pressure', 'It receives more blood', 'It processes oxygen'], correct: 1, explanation: 'The systemic circuit is much longer than the pulmonary circuit, requiring higher pressure — hence the left ventricle has thicker walls.' },
      ],
      xp: 90,
    }],
  },
])

export const bioScholar: Curriculum = make('biology', 'scholar', [
  {
    id: 'bio-scholar-u1', title: 'Molecular Biology', emoji: '🧬',
    description: 'Gene expression, transcription, translation, and gene regulation',
    lessons: [{
      id: 'bio-scholar-u1-l1', title: 'Transcription & Translation', emoji: '📖',
      content: 'Gene expression: DNA → RNA → Protein (Central Dogma). Transcription: RNA polymerase copies a gene into mRNA in the nucleus. Translation: ribosomes read mRNA codons and add amino acids via tRNA. Each 3-base codon specifies one amino acid.',
      keyPoints: [
        'Central Dogma: DNA → (transcription) → mRNA → (translation) → Protein',
        'Transcription occurs in the nucleus; translation on ribosomes',
        'mRNA codons are 3-base sequences each coding for an amino acid',
        'tRNA brings the correct amino acid matching each codon',
        'Gene regulation: promoters, transcription factors, operons control when genes are expressed',
      ],
      quiz: [
        { question: 'What is the Central Dogma of molecular biology?', options: ['DNA → Protein → RNA', 'Protein → RNA → DNA', 'DNA → RNA → Protein', 'RNA → DNA → Protein'], correct: 2, explanation: 'The Central Dogma: genetic information flows from DNA (transcription) to mRNA to protein (translation). Reverse transcription is an exception.' },
        { question: 'Where does transcription occur in eukaryotes?', options: ['Ribosome', 'Cytoplasm', 'Nucleus', 'Mitochondria'], correct: 2, explanation: 'Transcription happens in the nucleus, where DNA is stored. The mRNA then travels to ribosomes in the cytoplasm.' },
        { question: 'A codon is:', options: ['A single DNA base', 'A sequence of 3 mRNA bases coding for one amino acid', 'A type of enzyme', 'A promoter sequence'], correct: 1, explanation: 'Codons are 3-nucleotide sequences in mRNA. Each specifies one amino acid (or start/stop signals). 64 possible codons encode 20 amino acids.' },
        { question: 'What carries amino acids to ribosomes during translation?', options: ['mRNA', 'DNA', 'tRNA', 'rRNA'], correct: 2, explanation: 'tRNA (transfer RNA) has an anticodon that matches mRNA codons and carries the corresponding amino acid to the ribosome.' },
      ],
      xp: 105,
    }],
  },
  {
    id: 'bio-scholar-u2', title: 'Immunology', emoji: '🛡',
    description: 'How the immune system recognizes and destroys pathogens',
    lessons: [{
      id: 'bio-scholar-u2-l1', title: 'Innate & Adaptive Immunity', emoji: '⚔',
      content: 'The immune system has two branches. Innate (fast, non-specific): physical barriers, macrophages, NK cells, inflammation. Adaptive (slow, specific): B cells produce antibodies; T cells kill infected cells or coordinate the response. Memory cells allow rapid response to repeat infections — the basis of vaccination.',
      keyPoints: [
        'Innate immunity: fast, non-specific (macrophages, neutrophils, inflammation)',
        'Adaptive immunity: slow but specific (B cells, T cells, antibodies)',
        'B cells produce antibodies that bind specific antigens',
        'T cells: cytotoxic T cells kill infected cells; helper T cells coordinate',
        'Memory B and T cells enable rapid response to repeat infections (vaccination)',
      ],
      quiz: [
        { question: 'Which immune response is faster but non-specific?', options: ['Adaptive', 'Humoral', 'Innate', 'Memory'], correct: 2, explanation: 'Innate immunity responds immediately but does not distinguish between specific pathogens. Adaptive is slower but highly specific.' },
        { question: 'What do B cells produce?', options: ['Cytokines only', 'Antibodies', 'T-cell receptors', 'Complement proteins'], correct: 1, explanation: 'B cells (and the plasma cells they differentiate into) produce antibodies — proteins that bind specific antigens on pathogens.' },
        { question: 'Why does vaccination work?', options: ['Vaccines kill all bacteria', 'Vaccines create memory B and T cells for rapid future response', 'Vaccines increase innate immunity only', 'Vaccines add antibiotics to blood'], correct: 1, explanation: 'Vaccines introduce antigens without disease, triggering adaptive immunity and creating memory cells ready to respond rapidly if the pathogen appears.' },
        { question: 'Cytotoxic T cells primarily:', options: ['Produce antibodies', 'Directly kill infected or cancerous cells', 'Coordinate the immune response', 'Phagocytose bacteria'], correct: 1, explanation: 'Cytotoxic (CD8+) T cells recognize and kill cells displaying foreign antigen fragments — infected cells or tumor cells.' },
      ],
      xp: 105,
    }],
  },
])

export const bioMaster: Curriculum = make('biology', 'master', [
  {
    id: 'bio-master-u1', title: 'Genomics', emoji: '🔬',
    description: 'CRISPR, genome sequencing, epigenetics and gene therapy',
    lessons: [{
      id: 'bio-master-u1-l1', title: 'CRISPR & Gene Editing', emoji: '✂',
      content: 'CRISPR-Cas9 is a bacterial immune system adapted as a gene editor. Guide RNA directs Cas9 to cut specific DNA sequences with near-perfect precision. The cell\'s repair machinery can then disable a gene or insert new sequences. Applications: treating genetic diseases, agriculture, basic research.',
      keyPoints: [
        'CRISPR-Cas9: guide RNA + Cas9 nuclease targets and cuts specific DNA sequences',
        'After cutting, NHEJ (error-prone) disrupts gene; HDR inserts new sequence',
        'Base editing and prime editing allow single-nucleotide changes without double-strand breaks',
        'Therapeutic applications: sickle cell anemia, some cancers now in clinical trials',
        'Off-target effects and ethical concerns (germline editing) remain active issues',
      ],
      quiz: [
        { question: 'What directs Cas9 to the correct DNA location?', options: ['Protein folding', 'Guide RNA complementary to the target sequence', 'Temperature', 'Random diffusion'], correct: 1, explanation: 'Guide RNA (gRNA) is designed to match the target DNA sequence. It forms a complex with Cas9 and directs it to that precise location.' },
        { question: 'NHEJ repair after CRISPR cutting typically:', options: ['Inserts a new gene perfectly', 'Creates small insertions or deletions, disrupting the gene', 'Has no effect', 'Restores the original sequence'], correct: 1, explanation: 'NHEJ (Non-Homologous End Joining) is error-prone and often creates frameshift mutations — useful for knocking out genes.' },
        { question: 'Sickle cell anemia CRISPR therapy works by:', options: ['Removing all blood cells', 'Reactivating fetal hemoglobin to compensate', 'Adding a donor\'s immune cells', 'Inserting insulin genes'], correct: 1, explanation: 'Approved therapies target the BCL11A gene to reactivate fetal hemoglobin (HbF), which can substitute for defective adult hemoglobin.' },
        { question: 'The main ethical concern about germline editing is:', options: ['It is too expensive', 'Changes would be inherited by future generations without their consent', 'It does not work efficiently', 'It uses animal DNA'], correct: 1, explanation: 'Germline edits affect egg/sperm/embryos and are heritable — permanently altering the human gene pool with unknowable long-term effects.' },
      ],
      xp: 125,
    }],
  },
  {
    id: 'bio-master-u2', title: 'Systems Biology', emoji: '🌐',
    description: 'Network biology, emergent properties and synthetic biology',
    lessons: [{
      id: 'bio-master-u2-l1', title: 'Biological Networks', emoji: '🕸',
      content: 'Systems biology treats the cell as an integrated network of interacting molecules. Protein-protein interaction networks, gene regulatory networks, and metabolic networks are analysed using graph theory and computational modelling. Emergent properties arise from network topology, not individual components.',
      keyPoints: [
        'Emergent properties cannot be predicted from components in isolation',
        'Gene regulatory networks use feedback loops to create bistability and oscillations',
        'Hub proteins in interaction networks are essential — targeting them disrupts many pathways',
        'Synthetic biology engineers genetic circuits with predictable behavior',
        'Systems biology integrates genomics, proteomics, and metabolomics data computationally',
      ],
      quiz: [
        { question: 'What is an emergent property?', options: ['A trait predicted from one gene', 'A behavior arising from network interactions not present in individual parts', 'A mutation', 'A protein structure'], correct: 1, explanation: 'Emergence: complex behaviors (oscillation, bistability, collective decision) arise from interactions between components, not from the components alone.' },
        { question: 'Why are hub proteins important drug targets?', options: ['They are largest', 'They interact with many other proteins — disrupting them affects many pathways', 'They are on cell surface', 'They produce the most ATP'], correct: 1, explanation: 'Hub proteins have high connectivity in protein-protein interaction networks. Inhibiting them can shut down multiple disease pathways simultaneously.' },
        { question: 'Synthetic biology aims to:', options: ['Study natural ecosystems', 'Engineer cells with novel genetic circuits for specific functions', 'Clone animals', 'Sequence all human genes'], correct: 1, explanation: 'Synthetic biology applies engineering principles to design and build new biological systems — metabolic pathways, biosensors, gene circuits.' },
        { question: 'A negative feedback loop in gene regulation typically:', options: ['Amplifies gene expression', 'Creates bistability', 'Stabilizes gene expression around a set point', 'Has no effect'], correct: 2, explanation: 'Negative feedback: when gene product accumulates, it inhibits its own production — restoring balance. This homeostatic mechanism is ubiquitous in biology.' },
      ],
      xp: 125,
    }],
  },
])

// ─── HISTORY ─────────────────────────────────────────────────────────────────

export const historyBuilder: Curriculum = make('history', 'builder', [
  {
    id: 'hist-builder-u1', title: 'The Roman Empire', emoji: '🏛',
    description: 'Rise, peak, and fall of history\'s most influential empire',
    lessons: [{
      id: 'hist-builder-u1-l1', title: 'Rome: Republic to Empire', emoji: '⚔',
      content: 'Rome grew from a city-state (founded 753 BCE) to a Republic governed by the Senate, then to an Empire under Augustus (27 BCE). Julius Caesar\'s assassination led to civil war; his heir Octavian won and became the first emperor. At its peak, Rome controlled 5 million km² and 70 million people.',
      keyPoints: [
        'Rome founded as a kingdom c.753 BCE; became Republic ~509 BCE',
        'Republic: governed by Senate, consuls, and tribunes',
        'Julius Caesar crossed the Rubicon in 49 BCE, triggering civil war',
        'Augustus (Octavian) became first emperor 27 BCE — ended the Republic',
        'Pax Romana (27 BCE–180 CE): 200 years of relative peace and expansion',
      ],
      quiz: [
        { question: 'What transition did Augustus Caesar represent?', options: ['Kingdom to Republic', 'Republic to Empire', 'Empire to Democracy', 'City to Kingdom'], correct: 1, explanation: 'Augustus (27 BCE) effectively ended the Roman Republic and created the Roman Empire, though he carefully maintained the fiction of republican institutions.' },
        { question: 'The Roman Republic was governed primarily by:', options: ['A king', 'The Senate and elected consuls', 'Military generals only', 'A single elected president'], correct: 1, explanation: 'The Republic had a Senate (aristocratic body), two consuls (annually elected executives), and other assemblies. It was an oligarchic republic.' },
        { question: 'What was the Pax Romana?', options: ['A Roman law code', 'Two centuries of relative peace and prosperity under imperial rule', 'The fall of Rome', 'A type of Roman architecture'], correct: 1, explanation: 'The Pax Romana (27 BCE–180 CE) was a period of relative peace, trade, and expansion — Rome\'s golden age.' },
        { question: 'Julius Caesar was significant because:', options: ['He founded Rome', 'He wrote Roman law', 'He ended the Republic through civil war and was assassinated on the Ides of March', 'He defeated the Persians'], correct: 2, explanation: 'Caesar\'s crossing of the Rubicon, dictatorship, and assassination on 15 March 44 BCE triggered the civil wars that ended the Republic.' },
      ],
      xp: 75,
    }],
  },
  {
    id: 'hist-builder-u2', title: 'The Renaissance', emoji: '🎨',
    description: 'Europe\'s intellectual and artistic rebirth in the 14th–17th centuries',
    lessons: [{
      id: 'hist-builder-u2-l1', title: 'Renaissance Art & Ideas', emoji: '🖼',
      content: 'The Renaissance (14th–17th c.) began in Italian city-states — Florence, Venice, Rome. It rediscovered Greek and Roman classical texts after the fall of Constantinople (1453) flooded Europe with manuscripts. Humanism placed humans at the center. Key figures: Leonardo da Vinci, Michelangelo, Galileo, Machiavelli.',
      keyPoints: [
        'Renaissance began in Florence, Italy in the 14th century',
        'Rediscovery of classical Greek and Roman texts sparked new thinking',
        'Humanism: humans and their capacity for reason are central',
        'Linear perspective in art created realistic depth (Brunelleschi)',
        'Printing press (Gutenberg, 1440s) accelerated the spread of ideas',
      ],
      quiz: [
        { question: 'Where did the Renaissance begin?', options: ['England', 'France', 'Italian city-states (Florence, Venice)', 'Germany'], correct: 2, explanation: 'The Renaissance originated in wealthy Italian city-states, especially Florence, where Medici patronage funded artists and scholars.' },
        { question: 'What was humanism in the Renaissance?', options: ['A religious movement', 'A philosophy centering human capacity, reason, and classical learning', 'A type of art style', 'Opposition to the Church'], correct: 1, explanation: 'Humanism emphasized human dignity, achievement, and rational inquiry — shifting focus from purely religious subjects to human experience.' },
        { question: 'What role did the printing press play in the Renaissance?', options: ['Created art faster', 'Had no significant impact', 'Rapidly spread ideas, books, and eventually the Reformation', 'Only printed religious texts'], correct: 2, explanation: 'Gutenberg\'s press (1440s) made books affordable and widespread, accelerating the spread of Renaissance and Reformation ideas across Europe.' },
        { question: 'Linear perspective in art was significant because:', options: ['It used more colors', 'It created mathematically accurate illusions of 3D depth on flat surfaces', 'It replaced sculpture', 'It was faster to produce'], correct: 1, explanation: 'Brunelleschi\'s discovery of linear perspective (~1413) allowed artists to create convincing depth, revolutionizing Western painting.' },
      ],
      xp: 75,
    }],
  },
])

export const historyExplorer: Curriculum = make('history', 'explorer', [
  {
    id: 'hist-explorer-u1', title: 'World Wars', emoji: '🌍',
    description: 'The causes, events, and consequences of WWI and WWII',
    lessons: [{
      id: 'hist-explorer-u1-l1', title: 'WWI: Causes and Impact', emoji: '🪖',
      content: 'WWI (1914–1918) was triggered by Archduke Franz Ferdinand\'s assassination but caused by deeper forces: MAIN (Militarism, Alliances, Imperialism, Nationalism). The war killed 17 million and destroyed four empires (Russian, Ottoman, Austro-Hungarian, German). The Treaty of Versailles\'s harsh terms set the stage for WWII.',
      keyPoints: [
        'MAIN causes: Militarism, Alliances, Imperialism, Nationalism',
        'Spark: assassination of Archduke Franz Ferdinand, June 28, 1914',
        'New technologies: machine guns, poison gas, tanks, airplanes',
        '17 million dead; four empires collapsed',
        'Treaty of Versailles (1919): war guilt clause and reparations destabilized Germany',
      ],
      quiz: [
        { question: 'What does MAIN stand for (WWI causes)?', options: ['Military, Aggression, Imperialism, Nationalism', 'Militarism, Alliances, Imperialism, Nationalism', 'Monarchy, Alliances, Isolation, Negotiation', 'Military, Annexation, Industry, Nations'], correct: 1, explanation: 'MAIN = Militarism (arms race), Alliances (complex treaties), Imperialism (colonial competition), Nationalism (ethnic tensions).' },
        { question: 'Why did the Treaty of Versailles contribute to WWII?', options: ['It gave Germany too much territory', 'Its war guilt clause and crushing reparations humiliated Germany, fueling resentment', 'It ignored Germany entirely', 'It created the United Nations'], correct: 1, explanation: 'Article 231 (war guilt clause) forced Germany to accept blame and pay enormous reparations, creating economic crisis and nationalist resentment exploited by Hitler.' },
        { question: 'The assassination of Archduke Franz Ferdinand in 1914 was significant because:', options: ['It ended the war', 'It triggered the alliance system, escalating a local conflict to world war', 'It was the war\'s only major event', 'He was American'], correct: 1, explanation: 'The assassination activated Europe\'s complex alliance system: Austria-Hungary declared war on Serbia; Russia mobilized; Germany attacked France via Belgium; Britain joined.' },
        { question: 'How many empires collapsed as a result of WWI?', options: ['One', 'Two', 'Three', 'Four'], correct: 3, explanation: 'Four empires fell: Russian (1917 revolution), Ottoman, Austro-Hungarian, and German — completely redrawing the map of Europe and the Middle East.' },
      ],
      xp: 90,
    }],
  },
  {
    id: 'hist-explorer-u2', title: 'The Cold War', emoji: '🧊',
    description: 'US-Soviet rivalry, the arms race, and proxy conflicts 1947–1991',
    lessons: [{
      id: 'hist-explorer-u2-l1', title: 'Cold War: Ideology to Arms Race', emoji: '☢',
      content: 'The Cold War (1947–1991) was an ideological struggle: US capitalism/democracy vs. Soviet communism/authoritarianism. Neither superpower fought directly — they competed through proxy wars (Korea, Vietnam, Afghanistan), space race, nuclear arms race. MAD (Mutually Assured Destruction) prevented direct conflict.',
      keyPoints: [
        'Cold War: US vs. USSR — ideology, not direct military conflict',
        'NATO (1949) vs. Warsaw Pact (1955): competing military alliances',
        'Nuclear deterrence via MAD (Mutually Assured Destruction)',
        'Proxy wars: Korea, Vietnam, Angola, Afghanistan',
        'Berlin Wall (1961–1989) symbolized the Iron Curtain divide',
      ],
      quiz: [
        { question: 'Why was the Cold War "cold" — never a direct US-Soviet military clash?', options: ['They never disagreed', 'MAD: mutual nuclear annihilation made direct war suicidal', 'The UN prevented it', 'They secretly cooperated'], correct: 1, explanation: 'Mutually Assured Destruction: both sides had enough nuclear weapons to destroy each other, making direct war irrational.' },
        { question: 'What was the Berlin Wall\'s symbolic significance?', options: ['It protected Germany from invasion', 'It divided capitalist West Germany from communist East Germany', 'It prevented nuclear attack', 'It was purely decorative'], correct: 1, explanation: 'The Berlin Wall (built 1961) physically divided West Berlin (free) from communist East Berlin, becoming the defining symbol of the Cold War divide.' },
        { question: 'Proxy wars were Cold War conflicts where:', options: ['Both superpowers fought each other directly', 'The US and USSR backed opposing sides in third-country conflicts', 'Only Europe was involved', 'Nuclear weapons were used'], correct: 1, explanation: 'Rather than fight each other, the US and USSR funded, armed, and advised opposing sides in countries like Korea, Vietnam, and Afghanistan.' },
        { question: 'The Cold War ended when:', options: ['The US invaded the USSR', 'NATO was formed', 'The Soviet Union collapsed in 1991', 'Nixon visited China'], correct: 2, explanation: 'The USSR dissolved in December 1991, ending the ideological and geopolitical competition that defined the second half of the 20th century.' },
      ],
      xp: 90,
    }],
  },
])

export const historyScholar: Curriculum = make('history', 'scholar', [
  {
    id: 'hist-scholar-u1', title: 'Colonialism & Its Legacy', emoji: '🌐',
    description: 'European colonial empires, decolonization, and lasting effects',
    lessons: [{
      id: 'hist-scholar-u1-l1', title: 'The Colonial System', emoji: '⛵',
      content: 'European colonialism (c.1500–1960s) restructured the globe. The Americas were colonized first, with devastating effect on indigenous populations (90% died from disease and violence). Africa was partitioned at the Berlin Conference (1884–85) without African input. Colonial economies extracted resources for European benefit, leaving artificial borders and underdeveloped institutions.',
      keyPoints: [
        'Columbian Exchange (1492+): crops, animals, diseases exchanged between hemispheres',
        '90% of indigenous Americans died from European-introduced diseases',
        'Transatlantic slave trade: 12 million Africans forcibly transported 1500–1900',
        'Berlin Conference 1884-85: Africa divided among European powers, ignoring ethnic boundaries',
        'Decolonization wave: 1940s–1960s; new nations inherited artificial colonial borders',
      ],
      quiz: [
        { question: 'The Berlin Conference (1884-85) is significant because:', options: ['It ended WWI', 'European powers divided Africa without African consent', 'It created the United Nations', 'It ended the slave trade'], correct: 1, explanation: 'European powers divided Africa into colonies at the Berlin Conference, drawing borders that ignored ethnic and cultural realities — boundaries that became modern nation-states.' },
        { question: 'Why did indigenous American populations collapse after European contact?', options: ['Primarily warfare', 'Primarily disease (smallpox, measles) to which they had no immunity', 'Climate change', 'Starvation from crop failure'], correct: 1, explanation: 'Europeans brought diseases (smallpox, measles) to which Native Americans had zero immunity. Epidemic mortality reached 90% in many regions.' },
        { question: 'How many Africans were transported in the transatlantic slave trade?', options: ['1 million', '5 million', '12 million', '50 million'], correct: 2, explanation: 'An estimated 12 million Africans were forcibly transported to the Americas between 1500–1900, with about 10.7 million surviving the Middle Passage.' },
        { question: 'A major legacy of colonialism is:', options: ['Strong democratic institutions in former colonies', 'Economic equality between former colonies and colonizers', 'Artificial borders that contributed to ongoing ethnic conflicts', 'Technological advancement in all regions'], correct: 2, explanation: 'Colonial powers drew borders for administrative convenience, grouping rival groups and splitting others. Many ongoing conflicts (Africa, Middle East) trace to these artificial boundaries.' },
      ],
      xp: 105,
    }],
  },
  {
    id: 'hist-scholar-u2', title: 'Economic History', emoji: '📈',
    description: 'How capitalism, trade systems, and financial crises shaped history',
    lessons: [{
      id: 'hist-scholar-u2-l1', title: 'The Great Depression & Global Financial Crises', emoji: '📉',
      content: 'The Great Depression (1929–1939) began with the US stock market crash and spread globally via banking failures and trade collapse. Unemployment hit 25% in the US. Government response: FDR\'s New Deal — massive public works and banking reform. Keynes argued governments must spend to stimulate demand during downturns.',
      keyPoints: [
        'Wall Street crash of October 1929 triggered bank runs and credit collapse',
        '25% US unemployment; 30% GDP contraction at its worst',
        'Smoot-Hawley tariff (1930) worsened the depression by triggering trade wars',
        'Keynesian economics: government spending should counteract recessions',
        'WWII war spending, not New Deal, ultimately ended the Depression',
      ],
      quiz: [
        { question: 'What triggered the Great Depression?', options: ['A drought', 'Stock market crash + banking failures + credit collapse', 'WWI debts only', 'New Deal policies'], correct: 1, explanation: 'The 1929 stock crash triggered bank failures, credit contraction, and demand collapse — a cascade that spread globally via trade networks.' },
        { question: 'What did Keynes argue during the Depression?', options: ['Governments should cut spending', 'Markets always self-correct quickly', 'Government spending should increase to stimulate demand in recessions', 'Gold standard must be maintained'], correct: 2, explanation: 'Keynes argued that when private demand collapses, government must step in as spender of last resort — deficit spending to stimulate aggregate demand.' },
        { question: 'The Smoot-Hawley Tariff (1930) made the Depression worse by:', options: ['Reducing government spending', 'Triggering retaliatory trade tariffs that collapsed international trade', 'Increasing money supply too fast', 'Devaluing the dollar'], correct: 1, explanation: 'The tariff raised US import duties, triggering retaliation. World trade collapsed by 66% between 1929–1934, deepening the global depression.' },
        { question: 'What ultimately ended the Great Depression?', options: ['The New Deal\'s public works', 'Natural economic recovery', 'WWII military spending', 'Higher tariffs'], correct: 2, explanation: 'WWII defense spending (1940–41) finally raised US GDP and employment to pre-Depression levels. The New Deal helped but was insufficient alone.' },
      ],
      xp: 110,
    }],
  },
])

export const historyMaster: Curriculum = make('history', 'master', [
  {
    id: 'hist-master-u1', title: 'Historiography', emoji: '📚',
    description: 'How historians construct, interpret and debate historical knowledge',
    lessons: [{
      id: 'hist-master-u1-l1', title: 'Schools of Historical Thought', emoji: '🔍',
      content: 'Historiography examines how history is written. Major schools: Rankean positivism (history as objective facts from primary sources), Marxist history (class struggle as engine), Annales School (long-term structures: geography, climate, economy), postcolonial history (centering marginalized voices), and postmodern history (narrative as constructed).',
      keyPoints: [
        'Rankean positivism: history reconstructed from primary sources "wie es eigentlich gewesen" (as it actually was)',
        'Marxist historiography: class struggle and material conditions drive history',
        'Annales School: geographic and economic long-term structures (longue durée) matter more than events',
        'Postcolonial history: challenges Eurocentric narratives, centers colonized peoples\' experiences',
        'Postmodern history: all historical narratives are constructed and embed power relations',
      ],
      quiz: [
        { question: 'Rankean positivism holds that history should be:', options: ['Guided by theory', 'Based on objective reconstruction from primary sources', 'Written from the victor\'s perspective', 'Focused on long-term economic trends'], correct: 1, explanation: 'Leopold von Ranke\'s approach: use primary sources rigorously to reconstruct "what actually happened" — the foundation of modern academic history.' },
        { question: 'The Annales School emphasized:', options: ['Political events and great men', 'Short-term diplomatic history', 'Long-term geographical, economic, and social structures (longue durée)', 'Military history'], correct: 2, explanation: 'The Annales School (Bloch, Febvre, Braudel) shifted focus from events to underlying structures — geography, climate, trade networks — that shape history over centuries.' },
        { question: 'Postcolonial historians primarily critique:', options: ['Marxist determinism', 'Economic history', 'Eurocentric narratives that marginalize non-Western peoples', 'The Annales school'], correct: 2, explanation: 'Postcolonial historiography (Said, Spivak, Chakrabarty) challenges the imperial assumptions embedded in traditional Western historical writing.' },
        { question: 'Postmodern historians argue that historical narratives:', options: ['Are fully objective', 'Are constructed and embed the author\'s cultural position and power', 'Can achieve complete truth', 'Should focus on facts only'], correct: 1, explanation: 'Postmodern historians hold that no narrative is neutral — all historical writing reflects the author\'s perspective, cultural assumptions, and power relations.' },
      ],
      xp: 120,
    }],
  },
  {
    id: 'hist-master-u2', title: 'Comparative History', emoji: '⚖',
    description: 'Analyzing patterns across civilizations: why some rise, others fall',
    lessons: [{
      id: 'hist-master-u2-l1', title: 'Why Civilizations Rise and Fall', emoji: '🌋',
      content: 'Historians debate why some civilizations thrive and others collapse. Diamond\'s "Guns, Germs, and Steel": geography determines resource access and development. Turchin\'s cliodynamics: mathematical models of social instability cycles. Ibn Khaldun\'s asabiyya: group cohesion drives rise; its decay causes fall. Tainter: complexity becomes unsustainable above certain thresholds.',
      keyPoints: [
        'Jared Diamond: geographic advantages (crops, animals, east-west axis) explain unequal development',
        'Joseph Tainter: civilizations collapse when complexity\'s costs exceed benefits',
        'Ibn Khaldun: asabiyya (social cohesion) drives political power; dynasties last ~3 generations',
        'Peter Turchin cliodynamics: mathematical cycles of elite overproduction and popular immiseration',
        'Most collapses involve multiple simultaneous stressors: climate, disease, invasion, internal conflict',
      ],
      quiz: [
        { question: 'Jared Diamond\'s thesis in "Guns, Germs and Steel" argues:', options: ['Europeans were biologically superior', 'Geographic and biological luck explains unequal global development', 'Capitalism caused inequality', 'War drove all development'], correct: 1, explanation: 'Diamond: Eurasia\'s east-west axis, domesticable plants/animals, and disease exposure gave geographic/biological advantages — not racial or cultural superiority.' },
        { question: 'Joseph Tainter argues civilizations collapse when:', options: ['Populations grow too fast', 'The marginal returns on complexity fall below its costs', 'Religion weakens', 'Leaders become corrupt'], correct: 1, explanation: 'Tainter: complex societies add layers (bureaucracy, military, infrastructure) that eventually cost more than they produce — collapse becomes rational simplification.' },
        { question: 'Ibn Khaldun\'s concept of asabiyya refers to:', options: ['Economic production', 'Group cohesion and solidarity that gives political power', 'Military technology', 'Religious devotion'], correct: 1, explanation: 'Ibn Khaldun (14th c.) observed that group solidarity (asabiyya) enables conquest; luxury and settled life erode it; new groups with stronger asabiyya then displace them.' },
        { question: 'Historical collapses (Roman, Maya, Bronze Age) most commonly involve:', options: ['A single cause: climate', 'Single-cause: invasion only', 'Multiple simultaneous stressors interacting', 'Purely economic factors'], correct: 2, explanation: 'Modern research shows collapses are almost always multicausal: climate stress + disease + elite conflict + external pressure interacting simultaneously.' },
      ],
      xp: 120,
    }],
  },
])
