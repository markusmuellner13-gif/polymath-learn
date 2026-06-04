import type { Curriculum, Difficulty } from '../types'

const make = (topicId: string, difficulty: Difficulty, units: Curriculum['units']): Curriculum => ({
  topicId, difficulty, units,
})

// ─── MATHEMATICS ────────────────────────────────────────────────────────────

export const mathBuilder: Curriculum = make('mathematics', 'builder', [
  {
    id: 'math-builder-u1', title: 'Linear Equations & Graphs', emoji: '📈',
    description: 'Solving equations and visualizing them on a coordinate plane',
    lessons: [{
      id: 'math-builder-u1-l1', title: 'Solving Linear Equations', emoji: '⚖',
      content: 'A linear equation has one or more variables raised only to the first power. To solve, isolate the variable by performing inverse operations on both sides. Multi-step equations require careful order of operations.',
      keyPoints: [
        'Inverse operations undo each other: +/− and ×/÷',
        'Whatever you do to one side, do to the other',
        'Combine like terms before solving',
        'Check answers by substituting back into the original equation',
        'Linear equations graph as straight lines',
      ],
      quiz: [
        { question: 'Solve: 3x + 9 = 24', options: ['x = 5', 'x = 11', 'x = 7', 'x = 3'], correct: 0, explanation: 'Subtract 9: 3x = 15. Divide by 3: x = 5.' },
        { question: 'Solve: 2(x − 3) = 10', options: ['x = 8', 'x = 4', 'x = 2', 'x = 11'], correct: 0, explanation: 'Distribute: 2x − 6 = 10. Add 6: 2x = 16. Divide: x = 8.' },
        { question: 'If 5x − 3 = 2x + 9, what is x?', options: ['x = 4', 'x = 3', 'x = 6', 'x = 2'], correct: 0, explanation: 'Subtract 2x: 3x − 3 = 9. Add 3: 3x = 12. Divide: x = 4.' },
        { question: 'Which operation isolates x in x + 7 = 15?', options: ['Add 7', 'Multiply by 7', 'Subtract 7', 'Divide by 7'], correct: 2, explanation: 'Subtracting 7 from both sides cancels the +7, leaving x = 8.' },
      ],
      xp: 70,
    }],
  },
  {
    id: 'math-builder-u2', title: 'Geometry Basics', emoji: '📐',
    description: 'Angles, triangles, and the Pythagorean theorem',
    lessons: [{
      id: 'math-builder-u2-l1', title: 'Triangles & the Pythagorean Theorem', emoji: '🔺',
      content: 'In a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides: a² + b² = c². Triangles have interior angles summing to 180°. Area = ½ × base × height.',
      keyPoints: [
        'Pythagorean theorem: a² + b² = c² for right triangles',
        'All triangle interior angles sum to 180°',
        'Area of triangle = ½ × base × height',
        'Hypotenuse is the longest side, opposite the right angle',
        'A 3-4-5 triangle is a classic right triangle example',
      ],
      quiz: [
        { question: 'A right triangle has legs 6 and 8. What is the hypotenuse?', options: ['10', '14', '12', '7'], correct: 0, explanation: '6² + 8² = 36 + 64 = 100. √100 = 10.' },
        { question: 'A triangle has angles 45° and 65°. What is the third angle?', options: ['60°', '70°', '80°', '90°'], correct: 1, explanation: '180° − 45° − 65° = 70°.' },
        { question: 'Area of a triangle with base 10 and height 6?', options: ['60', '30', '16', '20'], correct: 1, explanation: 'Area = ½ × 10 × 6 = 30.' },
        { question: 'Which side of a right triangle is the hypotenuse?', options: ['The shortest side', 'Either leg', 'The side opposite the right angle', 'Any side'], correct: 2, explanation: 'The hypotenuse is always opposite the 90° angle and is always the longest side.' },
      ],
      xp: 75,
    }],
  },
])

export const mathExplorer: Curriculum = make('mathematics', 'explorer', [
  {
    id: 'math-explorer-u1', title: 'Trigonometry', emoji: '🌊',
    description: 'Sine, cosine, tangent and their applications',
    lessons: [{
      id: 'math-explorer-u1-l1', title: 'Trig Ratios', emoji: '📡',
      content: 'Trigonometry relates angles and sides of right triangles. SOH-CAH-TOA: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent. These ratios extend to the unit circle for any angle.',
      keyPoints: [
        'sin θ = opposite ÷ hypotenuse (SOH)',
        'cos θ = adjacent ÷ hypotenuse (CAH)',
        'tan θ = opposite ÷ adjacent (TOA)',
        'sin²θ + cos²θ = 1 (Pythagorean identity)',
        'sin 30° = 0.5, cos 60° = 0.5, tan 45° = 1',
      ],
      quiz: [
        { question: 'In a right triangle, opposite = 3, hypotenuse = 5. What is sin θ?', options: ['0.6', '0.75', '0.8', '0.5'], correct: 0, explanation: 'sin θ = opposite/hypotenuse = 3/5 = 0.6.' },
        { question: 'What does TOA stand for?', options: ['Top Over Adjacent', 'Tangent = Opposite/Adjacent', 'Tangent Of Angle', 'Total Opposite Area'], correct: 1, explanation: 'TOA means tan = opposite ÷ adjacent.' },
        { question: 'If cos θ = 0.5, what is θ?', options: ['30°', '45°', '60°', '90°'], correct: 2, explanation: 'cos 60° = 0.5. This is a standard value to memorize.' },
        { question: 'What does sin²θ + cos²θ equal?', options: ['0', '2', '1', 'tan θ'], correct: 2, explanation: 'The Pythagorean identity: sin²θ + cos²θ = 1, always.' },
      ],
      xp: 85,
    }],
  },
  {
    id: 'math-explorer-u2', title: 'Statistics', emoji: '📊',
    description: 'Describing and interpreting data sets',
    lessons: [{
      id: 'math-explorer-u2-l1', title: 'Mean, Median, Mode & Standard Deviation', emoji: '📉',
      content: 'Measures of central tendency (mean, median, mode) describe where data clusters. Standard deviation measures how spread out data is from the mean. A low SD means data is clustered tightly; high SD means it is spread wide.',
      keyPoints: [
        'Mean = sum of values ÷ number of values',
        'Median = the middle value when sorted',
        'Mode = the most frequently occurring value',
        'Standard deviation measures spread around the mean',
        'Outliers affect the mean more than the median',
      ],
      quiz: [
        { question: 'Data: 2, 4, 4, 6, 8. What is the mean?', options: ['4', '4.8', '5', '6'], correct: 1, explanation: '(2+4+4+6+8) ÷ 5 = 24 ÷ 5 = 4.8.' },
        { question: 'Data: 1, 3, 3, 7, 9. What is the mode?', options: ['3', '7', '1', '9'], correct: 0, explanation: 'Mode is the most frequent value. 3 appears twice, all others once.' },
        { question: 'Why is median preferred over mean with extreme outliers?', options: ['It is faster to compute', 'Outliers do not affect the median', 'It uses all values', 'It is always smaller'], correct: 1, explanation: 'The median is positional, not computed from values, so extreme outliers cannot pull it away from center.' },
        { question: 'A low standard deviation means data is:', options: ['Far from the mean', 'Tightly clustered near the mean', 'Always negative', 'Hard to measure'], correct: 1, explanation: 'Small SD = data points are close to the mean. Large SD = data is spread out.' },
      ],
      xp: 85,
    }],
  },
])

export const mathScholar: Curriculum = make('mathematics', 'scholar', [
  {
    id: 'math-scholar-u1', title: 'Calculus Fundamentals', emoji: '∫',
    description: 'Derivatives, integrals, and the fundamental theorem',
    lessons: [{
      id: 'math-scholar-u1-l1', title: 'Derivatives', emoji: '📐',
      content: 'A derivative measures the instantaneous rate of change of a function. The power rule: d/dx[xⁿ] = nxⁿ⁻¹. Derivatives are the slopes of tangent lines and describe how quantities change instantaneously.',
      keyPoints: [
        'Derivative = instantaneous rate of change = slope of tangent',
        'Power rule: d/dx[xⁿ] = nxⁿ⁻¹',
        'd/dx[x²] = 2x; d/dx[x³] = 3x²',
        'Derivatives of constants are 0',
        'Chain rule: d/dx[f(g(x))] = f\'(g(x)) · g\'(x)',
      ],
      quiz: [
        { question: 'What is the derivative of x⁴?', options: ['4x³', 'x⁵/5', '4x', 'x³'], correct: 0, explanation: 'Power rule: d/dx[x⁴] = 4x³.' },
        { question: 'What is the derivative of a constant (e.g., 7)?', options: ['7', '1', '0', '7x'], correct: 2, explanation: 'Constants have zero rate of change, so their derivative is 0.' },
        { question: 'What does a derivative represent geometrically?', options: ['Area under the curve', 'Slope of the tangent line', 'Length of the curve', 'Volume of revolution'], correct: 1, explanation: 'The derivative at a point equals the slope of the tangent line to the curve at that point.' },
        { question: 'If f(x) = 3x² + 5x, what is f\'(x)?', options: ['6x + 5', '3x + 5', '6x', '3x²'], correct: 0, explanation: 'd/dx[3x²] = 6x; d/dx[5x] = 5. Sum: 6x + 5.' },
      ],
      xp: 100,
    }],
  },
  {
    id: 'math-scholar-u2', title: 'Linear Algebra', emoji: '🔢',
    description: 'Vectors, matrices, and systems of equations',
    lessons: [{
      id: 'math-scholar-u2-l1', title: 'Matrices & Systems', emoji: '🗂',
      content: 'A matrix is a rectangular array of numbers. Matrix multiplication, determinants, and inverses allow us to solve systems of linear equations efficiently. The determinant of a 2×2 matrix [a,b;c,d] = ad − bc.',
      keyPoints: [
        'Matrix: a rectangular array of numbers arranged in rows and columns',
        'Determinant of 2×2 [a b; c d] = ad − bc',
        'A matrix with det = 0 has no inverse (singular)',
        'Matrix multiplication is NOT commutative: AB ≠ BA in general',
        'Systems of equations can be written as Ax = b and solved with A⁻¹',
      ],
      quiz: [
        { question: 'What is det([3 1; 2 4])?', options: ['10', '12', '11', '8'], correct: 0, explanation: 'det = (3×4) − (1×2) = 12 − 2 = 10.' },
        { question: 'Is matrix multiplication commutative?', options: ['Always', 'Never', 'Not in general', 'Only for square matrices'], correct: 2, explanation: 'In general AB ≠ BA. There are special cases where they commute, but it is not a general rule.' },
        { question: 'A matrix with determinant 0 is called:', options: ['Identity', 'Singular', 'Diagonal', 'Orthogonal'], correct: 1, explanation: 'A singular matrix has det = 0 and no inverse, meaning the system of equations has no unique solution.' },
        { question: 'What does Ax = b represent?', options: ['A dot product', 'A system of linear equations in matrix form', 'A polynomial', 'An exponential function'], correct: 1, explanation: 'Ax = b is the matrix form of a system of linear equations, where A is the coefficient matrix, x is the unknowns, and b is the constants.' },
      ],
      xp: 105,
    }],
  },
])

export const mathMaster: Curriculum = make('mathematics', 'master', [
  {
    id: 'math-master-u1', title: 'Real Analysis', emoji: '♾',
    description: 'Rigorous foundations of calculus: limits, continuity, convergence',
    lessons: [{
      id: 'math-master-u1-l1', title: 'Epsilon-Delta Definition of Limits', emoji: '🔬',
      content: 'Real analysis makes calculus rigorous. The ε-δ definition: lim(x→a) f(x) = L means for every ε > 0, there exists δ > 0 such that 0 < |x−a| < δ implies |f(x)−L| < ε. This eliminates intuitive hand-waving.',
      keyPoints: [
        'ε-δ definition makes limits formally precise',
        'For every ε > 0, we must find a δ > 0 that works',
        'Continuity: a function is continuous at a if lim f(x) = f(a)',
        'Uniform continuity is stronger than pointwise continuity',
        'The Bolzano-Weierstrass theorem: every bounded sequence has a convergent subsequence',
      ],
      quiz: [
        { question: 'In the ε-δ definition, what role does ε play?', options: ['Controls the input range', 'Controls the output tolerance', 'Represents the limit value', 'Defines the domain'], correct: 1, explanation: 'ε (epsilon) specifies how close f(x) must be to L (the output tolerance). δ then controls how close x must be to a.' },
        { question: 'A function f is continuous at a if:', options: ['f(a) is defined only', 'lim(x→a) f(x) exists only', 'lim(x→a) f(x) = f(a)', 'f is differentiable at a'], correct: 2, explanation: 'Continuity at a requires: f(a) defined, limit exists, and the limit equals f(a).' },
        { question: 'Bolzano-Weierstrass theorem guarantees:', options: ['Every sequence converges', 'Every bounded sequence has a convergent subsequence', 'Continuous functions are differentiable', 'Every series converges'], correct: 1, explanation: 'B-W: in bounded subsets of ℝⁿ, every infinite sequence has a convergent subsequence.' },
        { question: 'Which is stronger: uniform or pointwise continuity?', options: ['Pointwise', 'Uniform', 'They are equivalent', 'Neither implies the other'], correct: 1, explanation: 'Uniform continuity requires the same δ to work for ALL points in the domain, not just at each individual point.' },
      ],
      xp: 120,
    }],
  },
  {
    id: 'math-master-u2', title: 'Abstract Algebra', emoji: '🔮',
    description: 'Groups, rings, and fields — algebra\'s deepest structures',
    lessons: [{
      id: 'math-master-u2-l1', title: 'Groups & Symmetry', emoji: '🔄',
      content: 'A group (G, ∗) is a set with an operation satisfying closure, associativity, an identity element, and inverses for all elements. Groups capture the essence of symmetry mathematically. Lagrange\'s theorem: the order of any subgroup divides the order of the group.',
      keyPoints: [
        'Group axioms: closure, associativity, identity, inverses',
        'Abelian groups also satisfy commutativity (a∗b = b∗a)',
        'The integers under addition form a group: (ℤ, +)',
        'Lagrange\'s theorem: |H| divides |G| for subgroup H of G',
        'Symmetries of geometric objects form groups (e.g., rotations of a square)',
      ],
      quiz: [
        { question: 'Which property is NOT required for a group?', options: ['Closure', 'Commutativity', 'Identity element', 'Inverses'], correct: 1, explanation: 'Commutativity is NOT required for a group. Groups that also have commutativity are called abelian groups.' },
        { question: 'What does Lagrange\'s theorem state?', options: ['Every group is abelian', 'The order of a subgroup divides the group order', 'Every element is its own inverse', 'Groups have unique identities'], correct: 1, explanation: 'Lagrange\'s theorem: for finite group G with subgroup H, |H| divides |G|.' },
        { question: 'Are the integers (ℤ) under addition a group?', options: ['No, no identity', 'No, no inverses', 'Yes', 'No, not closed'], correct: 2, explanation: 'ℤ under + is a group: closed, associative, identity (0), inverse (−a for each a). It is also abelian.' },
        { question: 'What do group axioms capture mathematically?', options: ['Randomness', 'Symmetry', 'Continuity', 'Probability'], correct: 1, explanation: 'Groups were developed to formalize the concept of symmetry — the study of transformations that preserve structure.' },
      ],
      xp: 120,
    }],
  },
])

// ─── PHYSICS ─────────────────────────────────────────────────────────────────

export const physicsBuilder: Curriculum = make('physics', 'builder', [
  {
    id: 'phys-builder-u1', title: 'Electricity & Circuits', emoji: '⚡',
    description: 'Voltage, current, resistance and Ohm\'s Law',
    lessons: [{
      id: 'phys-builder-u1-l1', title: 'Ohm\'s Law', emoji: '🔌',
      content: 'Voltage (V) is electrical pressure, current (I) is the flow of charge, resistance (R) is opposition to flow. Ohm\'s Law: V = IR. In series circuits, resistance adds; in parallel circuits, current splits.',
      keyPoints: [
        'V = IR (Voltage = Current × Resistance)',
        'Voltage is measured in Volts (V)',
        'Current is measured in Amperes (A)',
        'Resistance is measured in Ohms (Ω)',
        'Series: R_total = R1 + R2; Parallel: 1/R_total = 1/R1 + 1/R2',
      ],
      quiz: [
        { question: 'A circuit has V = 12V and R = 4Ω. What is the current?', options: ['3 A', '48 A', '8 A', '0.33 A'], correct: 0, explanation: 'I = V/R = 12/4 = 3 A.' },
        { question: 'Two 6Ω resistors in series. Total resistance?', options: ['3 Ω', '6 Ω', '12 Ω', '36 Ω'], correct: 2, explanation: 'Series: R_total = 6 + 6 = 12 Ω.' },
        { question: 'What does voltage represent?', options: ['Flow of electrons', 'Electrical pressure/potential difference', 'Opposition to current', 'Power consumed'], correct: 1, explanation: 'Voltage is electrical potential difference — the "pressure" that drives current through a circuit.' },
        { question: 'If resistance doubles with same voltage, current:', options: ['Doubles', 'Stays same', 'Halves', 'Quadruples'], correct: 2, explanation: 'I = V/R. Double R with same V → I halves.' },
      ],
      xp: 75,
    }],
  },
  {
    id: 'phys-builder-u2', title: 'Waves & Sound', emoji: '🌊',
    description: 'Properties of waves, frequency, wavelength and the Doppler effect',
    lessons: [{
      id: 'phys-builder-u2-l1', title: 'Wave Properties', emoji: '📻',
      content: 'Waves transfer energy without transferring matter. Key properties: wavelength (λ), frequency (f), amplitude, and wave speed (v = fλ). Sound is a longitudinal wave; light is transverse. The Doppler effect: frequency shifts when source or observer moves.',
      keyPoints: [
        'Wave speed = frequency × wavelength (v = fλ)',
        'Frequency is measured in Hertz (Hz = cycles per second)',
        'Amplitude determines the intensity/loudness of a wave',
        'Sound waves are longitudinal; light waves are transverse',
        'Doppler effect: moving source compresses waves toward observer',
      ],
      quiz: [
        { question: 'A wave has frequency 200 Hz and wavelength 2 m. What is its speed?', options: ['400 m/s', '100 m/s', '200 m/s', '2 m/s'], correct: 0, explanation: 'v = fλ = 200 × 2 = 400 m/s.' },
        { question: 'What does amplitude determine in a sound wave?', options: ['Pitch', 'Speed', 'Loudness', 'Wavelength'], correct: 2, explanation: 'Amplitude is the size of oscillation. Larger amplitude = louder sound (more energy).' },
        { question: 'An ambulance siren sounds higher pitched as it approaches. This is:', options: ['Resonance', 'The Doppler effect', 'Refraction', 'Diffraction'], correct: 1, explanation: 'The Doppler effect: as the source approaches, sound waves bunch together, increasing apparent frequency (higher pitch).' },
        { question: 'Which type of wave is sound?', options: ['Transverse', 'Longitudinal', 'Electromagnetic', 'Surface'], correct: 1, explanation: 'Sound is a longitudinal wave — the medium (air) vibrates parallel to the direction of wave travel.' },
      ],
      xp: 75,
    }],
  },
])

export const physicsExplorer: Curriculum = make('physics', 'explorer', [
  {
    id: 'phys-explorer-u1', title: 'Thermodynamics', emoji: '🔥',
    description: 'Heat, temperature, entropy and the laws of thermodynamics',
    lessons: [{
      id: 'phys-explorer-u1-l1', title: 'The Laws of Thermodynamics', emoji: '🌡',
      content: 'Thermodynamics governs heat and energy conversion. 0th Law: if A and B are in thermal equilibrium with C, then A and B are in equilibrium with each other. 1st Law: energy is conserved (ΔU = Q − W). 2nd Law: entropy of an isolated system always increases. 3rd Law: absolute zero is unattainable.',
      keyPoints: [
        '1st Law: ΔU = Q − W (internal energy = heat in minus work done)',
        '2nd Law: entropy (disorder) always increases in isolated systems',
        'Entropy explains why heat flows from hot to cold, never the reverse',
        '3rd Law: entropy approaches zero as temperature approaches absolute zero',
        'Carnot engine is the theoretical maximum efficiency heat engine',
      ],
      quiz: [
        { question: 'The 1st Law of Thermodynamics is essentially:', options: ['Entropy increases', 'Energy is conserved', 'Absolute zero is unreachable', 'Heat flows cold to hot'], correct: 1, explanation: 'The 1st Law is conservation of energy: ΔU = Q − W. Energy cannot be created or destroyed.' },
        { question: 'Why does heat always flow from hot objects to cold ones?', options: ['1st Law', '2nd Law (entropy increases)', '3rd Law', 'Newton\'s Law'], correct: 1, explanation: 'The 2nd Law: heat flows in the direction that increases total entropy — from hot to cold.' },
        { question: 'What does entropy measure?', options: ['Temperature', 'Pressure', 'Disorder or number of microstates', 'Heat capacity'], correct: 2, explanation: 'Entropy measures disorder, or equivalently the number of microscopic states consistent with the macroscopic state.' },
        { question: 'A Carnot engine operating between 500K and 300K has efficiency:', options: ['40%', '60%', '50%', '30%'], correct: 0, explanation: 'Carnot efficiency = 1 − T_cold/T_hot = 1 − 300/500 = 0.4 = 40%.' },
      ],
      xp: 90,
    }],
  },
  {
    id: 'phys-explorer-u2', title: 'Optics & Light', emoji: '🌈',
    description: 'Reflection, refraction, lenses and the nature of light',
    lessons: [{
      id: 'phys-explorer-u2-l1', title: 'Refraction & Lenses', emoji: '🔭',
      content: 'Light bends when it passes between media of different optical densities — this is refraction. Snell\'s Law: n₁sin θ₁ = n₂sin θ₂. Convex lenses converge light (used in cameras and eyes). Concave lenses diverge it (used for nearsightedness correction).',
      keyPoints: [
        'Refraction: light bends when crossing from one medium to another',
        'Snell\'s Law: n₁sinθ₁ = n₂sinθ₂',
        'Index of refraction n = c/v (speed of light in vacuum / speed in medium)',
        'Convex (converging) lens focuses parallel rays to a focal point',
        'Total internal reflection occurs when light hits interface at shallow angle from dense medium',
      ],
      quiz: [
        { question: 'What does Snell\'s Law describe?', options: ['Reflection of light', 'The relationship between angles in refraction', 'Wave speed', 'Color dispersion'], correct: 1, explanation: 'Snell\'s Law: n₁sinθ₁ = n₂sinθ₂ — it relates the angles of incidence and refraction to the refractive indices of the two media.' },
        { question: 'A convex lens:', options: ['Spreads light out', 'Has no effect on light', 'Converges parallel rays to a focal point', 'Creates a virtual image only'], correct: 2, explanation: 'Convex (converging) lenses bend parallel rays inward to meet at the focal point.' },
        { question: 'A diamond has n ≈ 2.4. What does this mean?', options: ['Light travels 2.4× faster in diamond', 'Light travels 2.4× slower in diamond than in vacuum', 'Diamond is 2.4× heavier than glass', 'Diamond absorbs 2.4× more light'], correct: 1, explanation: 'n = c/v, so v = c/n. For n = 2.4, light travels at c/2.4 — much slower than in vacuum.' },
        { question: 'Total internal reflection is used in:', options: ['Mirrors', 'Fiber optic cables', 'Telescope mirrors', 'Camera lenses'], correct: 1, explanation: 'Fiber optic cables use total internal reflection to guide light signals through glass fibers with nearly zero loss.' },
      ],
      xp: 90,
    }],
  },
])

export const physicsScholar: Curriculum = make('physics', 'scholar', [
  {
    id: 'phys-scholar-u1', title: 'Electromagnetism', emoji: '🧲',
    description: 'Maxwell\'s equations, electromagnetic induction, and fields',
    lessons: [{
      id: 'phys-scholar-u1-l1', title: 'Faraday\'s Law & Induction', emoji: '⚡',
      content: 'Changing magnetic flux induces an EMF: ε = −dΦ_B/dt (Faraday\'s Law). Lenz\'s Law: the induced current opposes the change causing it. Together these are the basis of generators, transformers, and wireless charging.',
      keyPoints: [
        'Faraday\'s Law: changing magnetic flux induces EMF',
        'ε = −dΦ_B/dt (the minus sign is Lenz\'s Law)',
        'Lenz\'s Law: induced current opposes the flux change',
        'Generators convert mechanical energy to electrical using induction',
        'Transformers use mutual induction to change voltage levels',
      ],
      quiz: [
        { question: 'What does Faraday\'s Law state?', options: ['Moving charges create magnetic fields', 'Changing magnetic flux induces an EMF', 'Charge is conserved', 'Electric fields point from + to −'], correct: 1, explanation: 'Faraday\'s Law: EMF is induced whenever magnetic flux through a circuit changes.' },
        { question: 'What does the negative sign in ε = −dΦ/dt mean?', options: ['EMF is always negative', 'The induced current opposes the change (Lenz\'s Law)', 'Energy is lost', 'The field decreases'], correct: 1, explanation: 'The minus sign encodes Lenz\'s Law: induced effects always oppose their cause.' },
        { question: 'A generator works by:', options: ['Pumping electrons', 'Using magnetic induction from rotating coils', 'Chemical reactions', 'Splitting atoms'], correct: 1, explanation: 'Generators spin coils in magnetic fields, continuously changing flux and inducing alternating current.' },
        { question: 'A transformer steps voltage up by 10×. What happens to current?', options: ['Also increases 10×', 'Decreases by 10×', 'Stays the same', 'Goes to zero'], correct: 1, explanation: 'Power is conserved: P = VI. If V increases 10×, I must decrease by 10× to conserve energy.' },
      ],
      xp: 105,
    }],
  },
  {
    id: 'phys-scholar-u2', title: 'Special Relativity', emoji: '🚀',
    description: 'Einstein\'s revolution: time dilation, length contraction, E=mc²',
    lessons: [{
      id: 'phys-scholar-u2-l1', title: 'Time Dilation & Mass-Energy', emoji: '⏱',
      content: 'Special relativity rests on two postulates: physical laws are the same in all inertial frames, and the speed of light c is constant for all observers. Consequences: moving clocks run slow (time dilation), moving objects shorten (length contraction), and E = mc².',
      keyPoints: [
        'Speed of light c = 3×10⁸ m/s is the same for all observers',
        'Time dilation: moving clocks tick slower — t = t₀/√(1−v²/c²)',
        'Length contraction: moving objects appear shorter in direction of motion',
        'E = mc²: mass and energy are interconvertible',
        'Nothing with mass can reach the speed of light',
      ],
      quiz: [
        { question: 'What are Einstein\'s two postulates of special relativity?', options: ['Gravity curves space; time stops at c', 'Laws of physics same in all inertial frames; c is constant for all observers', 'Energy is conserved; momentum is conserved', 'Mass increases; length decreases'], correct: 1, explanation: 'The two postulates: (1) physical laws hold in all inertial frames, and (2) c is the same for all observers regardless of motion.' },
        { question: 'A clock on a rocket moving at 0.9c compared to a stationary clock:', options: ['Ticks faster', 'Ticks at the same rate', 'Ticks slower', 'Stops'], correct: 2, explanation: 'Time dilation: moving clocks tick slower relative to stationary observers. At 0.9c, it ticks at about 44% of the normal rate.' },
        { question: 'What does E = mc² express?', options: ['Energy equals mass times velocity squared', 'Mass and energy are equivalent and interconvertible', 'Momentum is conserved', 'Light has mass'], correct: 1, explanation: 'E = mc² means mass is a form of energy. A tiny mass converts to enormous energy (c² ≈ 9×10¹⁶).' },
        { question: 'Can a spaceship with mass accelerate to exactly c?', options: ['Yes, with enough fuel', 'Yes at low temperatures', 'No — it would require infinite energy', 'Only in vacuum'], correct: 2, explanation: 'As v → c, relativistic mass approaches infinity and the energy required becomes infinite. Massive objects can never reach c.' },
      ],
      xp: 110,
    }],
  },
])

export const physicsMaster: Curriculum = make('physics', 'master', [
  {
    id: 'phys-master-u1', title: 'Quantum Field Theory', emoji: '〰',
    description: 'Fields, particles as excitations, and the Standard Model',
    lessons: [{
      id: 'phys-master-u1-l1', title: 'Fields & Particles', emoji: '⚛',
      content: 'In QFT, particles are excitations of underlying quantum fields that pervade all of space. The electron is an excitation of the electron field; the photon of the electromagnetic field. The Standard Model describes all known particles and three fundamental forces (electroweak and strong) via gauge symmetries.',
      keyPoints: [
        'Every particle type corresponds to a quantum field filling all space',
        'Particles = localized excitations (quanta) of these fields',
        'The Standard Model has 17 fundamental particles: 6 quarks, 6 leptons, 4 gauge bosons, Higgs',
        'Gauge symmetries dictate the form of fundamental interactions',
        'QED (quantum electrodynamics) is the most precisely tested theory in physics',
      ],
      quiz: [
        { question: 'In QFT, what is a particle?', options: ['A tiny solid ball', 'An excitation of an underlying quantum field', 'A vibrating string', 'A point charge'], correct: 1, explanation: 'QFT: particles are localized quanta — excitations of quantum fields that permeate all space.' },
        { question: 'How many fundamental particles does the Standard Model describe?', options: ['4', '12', '17', '24'], correct: 2, explanation: 'The Standard Model has 17: 6 quarks, 6 leptons, the W/Z/photon/gluon gauge bosons, and the Higgs boson.' },
        { question: 'What determines the form of interactions in the Standard Model?', options: ['Particle masses', 'Gauge symmetries', 'Temperature', 'Number of dimensions'], correct: 1, explanation: 'The Standard Model is built on gauge symmetries (U(1)×SU(2)×SU(3)). The symmetry groups dictate what interactions are allowed.' },
        { question: 'QED is known for:', options: ['Predicting dark matter', 'Being the least tested theory', 'Extraordinary precision — matching experiment to 12 decimal places', 'Describing gravity'], correct: 2, explanation: 'QED predictions match experiment to about 12 significant figures — the most precisely verified theory in all of science.' },
      ],
      xp: 130,
    }],
  },
  {
    id: 'phys-master-u2', title: 'General Relativity', emoji: '🌌',
    description: 'Curved spacetime, black holes and gravitational waves',
    lessons: [{
      id: 'phys-master-u2-l1', title: 'Curved Spacetime', emoji: '🌀',
      content: 'General relativity reframes gravity as the curvature of 4-dimensional spacetime caused by mass-energy. The Einstein field equations: G_μν = 8πG/c⁴ · T_μν. Predictions: gravitational lensing, black holes, gravitational time dilation, and gravitational waves (detected 2015).',
      keyPoints: [
        'Gravity = curvature of spacetime caused by mass-energy',
        'Einstein field equations: G_μν = (8πG/c⁴)T_μν',
        'Geodesics are the straightest paths in curved spacetime — what free-falling objects follow',
        'Black holes are regions where spacetime curvature prevents escape at even c',
        'Gravitational waves are ripples in spacetime, first detected by LIGO in 2015',
      ],
      quiz: [
        { question: 'General relativity describes gravity as:', options: ['A force between masses', 'Curvature of 4D spacetime', 'Exchange of gravitons', 'A magnetic effect'], correct: 1, explanation: 'GR: mass-energy curves spacetime, and objects follow geodesics (straightest paths) in that curved spacetime — which we experience as gravity.' },
        { question: 'What is a geodesic in GR?', options: ['A type of black hole', 'The straightest possible path in curved spacetime', 'A gravitational wave', 'The event horizon'], correct: 1, explanation: 'A geodesic is the generalization of a straight line to curved spacetime — the path a free-falling object follows.' },
        { question: 'Gravitational waves were first directly detected in:', options: ['1905', '1965', '1999', '2015'], correct: 3, explanation: 'LIGO detected gravitational waves from a black hole merger on September 14, 2015 — confirming a century-old GR prediction.' },
        { question: 'What defines a black hole\'s event horizon?', options: ['The center of mass', 'The boundary beyond which escape velocity exceeds c', 'The photon sphere', 'The accretion disk'], correct: 1, explanation: 'The event horizon is the spherical boundary where escape velocity = c. Beyond it, nothing — not even light — can escape.' },
      ],
      xp: 130,
    }],
  },
])
