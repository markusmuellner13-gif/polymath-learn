import type { Curriculum, Difficulty } from '../types'
import {
  mathBuilder, mathExplorer, mathScholar, mathMaster,
  physicsBuilder, physicsExplorer, physicsScholar, physicsMaster,
} from './curriculum-advanced'
import {
  chemBuilder, chemExplorer, chemScholar, chemMaster,
  bioBuilder, bioExplorer, bioScholar, bioMaster,
  historyBuilder, historyExplorer, historyScholar, historyMaster,
} from './curriculum-advanced2'
import {
  csBuilder, csExplorer, csScholar, csMaster,
  economicsBuilder, economicsExplorer, economicsScholar, economicsMaster,
  psychologyBuilder, psychologyExplorer, psychologyScholar, psychologyMaster,
  quantumBuilder, quantumExplorer, quantumScholar, quantumMaster,
} from './curriculum-advanced3'
import {
  astronomyBuilder, astronomyExplorer, astronomyScholar, astronomyMaster,
  philosophyBuilder, philosophyExplorer, philosophyScholar, philosophyMaster,
  geographyBuilder, geographyExplorer, geographyScholar, geographyMaster,
  literatureBuilder, literatureExplorer, literatureScholar, literatureMaster,
} from './curriculum-advanced4'

const make = (topicId: string, difficulty: Difficulty, units: Curriculum['units']): Curriculum => ({
  topicId,
  difficulty,
  units,
})

// ─── MATHEMATICS ────────────────────────────────────────────────────────────

const mathSpark: Curriculum = make('mathematics', 'spark', [
  {
    id: 'math-spark-u1',
    title: 'Numbers & the Basics',
    emoji: '🔢',
    description: 'What numbers are, how to count, and basic operations',
    lessons: [
      {
        id: 'math-spark-u1-l1',
        title: 'What Are Numbers?',
        emoji: '1️⃣',
        content: `Numbers are symbols we use to count and measure. The natural numbers (1, 2, 3…) let us count objects. Zero was a revolutionary invention — it represents "nothing" and makes all of arithmetic work. Negative numbers extend the line to the left, letting us represent debt, temperature below zero, or any value less than nothing. Together these form the integers: …−3, −2, −1, 0, 1, 2, 3…`,
        keyPoints: [
          'Natural numbers start at 1 and go up forever',
          'Zero was invented and changed mathematics entirely',
          'Negative numbers go below zero',
          'Integers include all whole numbers: negative, zero, and positive',
          'Numbers are abstract ideas, not physical things',
        ],
        quiz: [
          {
            question: 'Which set of numbers includes 0, negative, and positive whole numbers?',
            options: ['Natural numbers', 'Integers', 'Fractions', 'Decimals'],
            correct: 1,
            explanation: 'Integers include all whole numbers: …-2, -1, 0, 1, 2… Natural numbers start at 1 and don\'t include 0 or negatives.',
          },
          {
            question: 'What does the number 0 represent?',
            options: ['The smallest number', 'Nothing or the absence of quantity', 'A negative number', 'An imaginary concept'],
            correct: 1,
            explanation: 'Zero represents the absence of quantity. It\'s a real number that makes operations like subtraction and place value work.',
          },
          {
            question: 'Which is a negative number?',
            options: ['5', '0', '−3', '100'],
            correct: 2,
            explanation: '−3 is negative because it is less than zero. Negative numbers are to the left of zero on a number line.',
          },
          {
            question: 'What are natural numbers?',
            options: ['Numbers found in nature', 'Counting numbers starting from 1', 'Numbers including fractions', 'All integers'],
            correct: 1,
            explanation: 'Natural numbers are the basic counting numbers: 1, 2, 3, 4… They don\'t include zero or negatives.',
          },
        ],
        xp: 50,
      },
      {
        id: 'math-spark-u1-l2',
        title: 'Addition & Subtraction',
        emoji: '➕',
        content: `Addition combines two quantities into one. When you add 3 apples and 4 apples, you get 7 apples — the total. Subtraction is the opposite: it finds how much is left when you take some away. 10 − 3 = 7. These are the two most fundamental operations. The key insight: addition is commutative (3+4 = 4+3), but subtraction is NOT (10−3 ≠ 3−10). Understanding this saves many errors.`,
        keyPoints: [
          'Addition = combining quantities',
          'Subtraction = finding the difference',
          'Addition is commutative: order doesn\'t matter',
          'Subtraction is NOT commutative: order matters',
          'They are inverse operations — they undo each other',
        ],
        quiz: [
          {
            question: 'What is 15 + 27?',
            options: ['32', '42', '52', '12'],
            correct: 1,
            explanation: '15 + 27 = 42. Add the ones: 5+7=12, carry 1. Add the tens: 1+2+1=4. Result: 42.',
          },
          {
            question: 'Which property means 5 + 8 = 8 + 5?',
            options: ['Distributive', 'Associative', 'Commutative', 'Identity'],
            correct: 2,
            explanation: 'The commutative property says you can swap the order in addition and get the same result.',
          },
          {
            question: 'What is 50 − 23?',
            options: ['27', '37', '23', '73'],
            correct: 0,
            explanation: '50 − 23 = 27. Subtract ones: 0−3 requires borrowing, giving 10−3=7. Then 4−2=2. Result: 27.',
          },
          {
            question: 'If you have $30 and spend $12, how much is left?',
            options: ['$42', '$12', '$18', '$22'],
            correct: 2,
            explanation: '$30 − $12 = $18. Subtraction tells us how much remains after removing an amount.',
          },
        ],
        xp: 50,
      },
      {
        id: 'math-spark-u1-l3',
        title: 'Multiplication & Division',
        emoji: '✖',
        content: `Multiplication is repeated addition. 4 × 3 means "add 4 three times": 4+4+4 = 12. Division is the reverse — it splits a quantity into equal groups. 12 ÷ 3 = 4 means "how many groups of 3 fit in 12?" The multiplication table (times tables) is the foundation of all arithmetic. Division by zero is undefined — there is no answer, because no number of zeros can ever add up to something non-zero.`,
        keyPoints: [
          'Multiplication = repeated addition',
          'Division = splitting into equal groups',
          'They are inverse operations',
          'Multiplication is commutative: 3×4 = 4×3',
          'Division by zero is undefined (never allowed)',
        ],
        quiz: [
          {
            question: 'What is 7 × 8?',
            options: ['54', '56', '48', '64'],
            correct: 1,
            explanation: '7 × 8 = 56. This is a fundamental multiplication fact worth memorizing.',
          },
          {
            question: 'What does 24 ÷ 6 mean?',
            options: ['24 minus 6', 'How many groups of 6 fit in 24', '24 plus 6', '6 times 24'],
            correct: 1,
            explanation: 'Division asks "how many times does the divisor fit into the dividend?" 24 ÷ 6 = 4 because 6 fits 4 times.',
          },
          {
            question: 'Why is dividing by zero not allowed?',
            options: ['It gives a very large number', 'It always gives zero', 'No number of zeros ever adds to a non-zero value', 'It breaks the calculator'],
            correct: 2,
            explanation: 'Division by zero is undefined because no answer exists — there\'s no number that, multiplied by 0, gives a non-zero result.',
          },
          {
            question: 'What is 9 × 9?',
            options: ['72', '81', '90', '63'],
            correct: 1,
            explanation: '9 × 9 = 81. A quick trick: 9×n = 10n − n, so 9×9 = 90−9 = 81.',
          },
        ],
        xp: 60,
      },
    ],
  },
  {
    id: 'math-spark-u2',
    title: 'Fractions & Decimals',
    emoji: '½',
    description: 'Numbers between numbers — fractions, decimals, and percentages',
    lessons: [
      {
        id: 'math-spark-u2-l1',
        title: 'Understanding Fractions',
        emoji: '🍕',
        content: `A fraction represents a part of a whole. The number on top (numerator) tells how many parts you have. The number on bottom (denominator) tells how many equal parts the whole is divided into. ¾ means "3 out of 4 equal parts." Think of a pizza cut into 4 equal slices — if you eat 3, you ate ¾ of it. Equivalent fractions (½ = 2/4 = 4/8) represent the same value using different numbers.`,
        keyPoints: [
          'Numerator = parts you have',
          'Denominator = total equal parts',
          'Fractions represent parts of a whole',
          'Equivalent fractions equal the same amount',
          'A fraction where top > bottom is called improper (7/4)',
        ],
        quiz: [
          {
            question: 'In the fraction 3/5, what does the 5 (denominator) represent?',
            options: ['The 3 parts you have', 'The total number of equal parts', 'The value of the fraction', 'The remainder'],
            correct: 1,
            explanation: 'The denominator (bottom number) tells you into how many equal parts the whole is divided.',
          },
          {
            question: 'Which fraction is equivalent to 1/2?',
            options: ['1/3', '2/4', '3/7', '4/9'],
            correct: 1,
            explanation: '2/4 equals 1/2 — divide both top and bottom by 2 and you get 1/2. Equivalent fractions look different but represent the exact same value.',
          },
          {
            question: 'You eat 3 slices of an 8-slice pizza. What fraction did you eat?',
            options: ['3/5', '8/3', '3/8', '5/8'],
            correct: 2,
            explanation: '3/8 — you ate 3 out of 8 total slices.',
          },
          {
            question: 'What is an improper fraction?',
            options: ['A fraction with a zero', 'A fraction where the numerator is larger than the denominator', 'Any negative fraction', 'A fraction that can\'t be simplified'],
            correct: 1,
            explanation: 'An improper fraction has a numerator ≥ denominator, like 7/4. It represents more than one whole.',
          },
        ],
        xp: 60,
      },
      {
        id: 'math-spark-u2-l2',
        title: 'Decimals & Percentages',
        emoji: '💯',
        content: `Decimals are fractions written with a dot. 0.5 = ½, 0.25 = ¼. The digits after the decimal point represent tenths, hundredths, thousandths. Percentages are fractions out of 100 — "percent" literally means "per hundred." 75% = 75/100 = 0.75. These three forms are interchangeable. To convert: percent ÷ 100 = decimal; decimal × 100 = percent. Percentages are everywhere in daily life: sales, grades, statistics.`,
        keyPoints: [
          '0.1 = 1/10 (one tenth)',
          '0.25 = 25/100 = 25%',
          'Percent means "out of 100"',
          'Decimal × 100 = Percentage',
          'Percentage ÷ 100 = Decimal',
        ],
        quiz: [
          {
            question: 'What is 50% as a decimal?',
            options: ['5.0', '0.05', '0.50', '50.0'],
            correct: 2,
            explanation: '50% ÷ 100 = 0.50. Moving the decimal point 2 places left converts percent to decimal.',
          },
          {
            question: 'What is 0.75 as a percentage?',
            options: ['7.5%', '0.75%', '75%', '750%'],
            correct: 2,
            explanation: '0.75 × 100 = 75%. Multiplying by 100 converts a decimal to a percentage.',
          },
          {
            question: 'A shirt costs $40 and is 25% off. How much do you save?',
            options: ['$5', '$10', '$15', '$25'],
            correct: 1,
            explanation: '25% of $40 = 0.25 × 40 = $10 saved.',
          },
          {
            question: 'Which is the largest: 0.9, 85%, or 7/8?',
            options: ['0.9 (= 90%)', '85%', '7/8 (= 87.5%)', 'They are all equal'],
            correct: 0,
            explanation: 'Convert everything to percentages: 0.9 = 90%, 85% stays 85%, 7/8 = 87.5%. So 0.9 is the largest at 90%.',
          },
        ],
        xp: 65,
      },
    ],
  },
  {
    id: 'math-spark-u3',
    title: 'Intro to Algebra',
    emoji: '🔤',
    description: 'Using letters to represent unknown numbers — the gateway to advanced math',
    lessons: [
      {
        id: 'math-spark-u3-l1',
        title: 'Variables & Expressions',
        emoji: 'x',
        content: `Algebra is where math gets a superpower: we use letters (variables) to represent unknown or changing values. x + 5 = 12 — what is x? It's 7, because 7+5=12. A variable is just a placeholder for a number we need to find. An expression like 3x + 2 means "three times some number, plus two." An equation has an equals sign and asserts two expressions are equal. Solving an equation means finding the variable's value.`,
        keyPoints: [
          'Variables are letters that represent unknown numbers',
          'Expressions combine numbers and variables',
          'Equations have an "=" sign and can be solved',
          'The goal is to isolate the variable',
          'Whatever you do to one side, do to the other',
        ],
        quiz: [
          {
            question: 'In the equation x + 7 = 15, what is x?',
            options: ['22', '8', '7', '105'],
            correct: 1,
            explanation: 'Subtract 7 from both sides: x = 15 − 7 = 8.',
          },
          {
            question: 'What is a variable?',
            options: ['A type of equation', 'A letter representing an unknown number', 'A mathematical operation', 'A large number'],
            correct: 1,
            explanation: 'Variables are letters like x, y, or n used as placeholders for numbers we don\'t know yet.',
          },
          {
            question: 'If y = 4, what is 3y + 2?',
            options: ['9', '14', '342', '10'],
            correct: 1,
            explanation: '3y + 2 = 3(4) + 2 = 12 + 2 = 14. Substitute y = 4 into the expression.',
          },
          {
            question: 'Solve: 2x = 16',
            options: ['x = 32', 'x = 14', 'x = 8', 'x = 18'],
            correct: 2,
            explanation: 'Divide both sides by 2: x = 16 ÷ 2 = 8.',
          },
        ],
        xp: 70,
      },
    ],
  },
])

// ─── PHYSICS ─────────────────────────────────────────────────────────────────

const physicsSpark: Curriculum = make('physics', 'spark', [
  {
    id: 'phys-spark-u1',
    title: 'Motion & Forces',
    emoji: '🚀',
    description: 'How things move, why they move, and what stops them',
    lessons: [
      {
        id: 'phys-spark-u1-l1',
        title: 'Speed, Velocity & Acceleration',
        emoji: '💨',
        content: `Speed tells you how fast something moves. Velocity is speed with direction — 60 km/h north is a velocity, 60 km/h is just a speed. Acceleration is how fast velocity changes. Stepping on a car's gas pedal accelerates you; braking also accelerates you (in the opposite direction). These three form the foundation of kinematics — the study of motion without asking why things move. The formula that connects them: v = u + at (final velocity = initial + acceleration × time).`,
        keyPoints: [
          'Speed = distance ÷ time',
          'Velocity = speed + direction (it\'s a vector)',
          'Acceleration = change in velocity ÷ time',
          'Braking is negative acceleration (deceleration)',
          'v = u + at is the key equation',
        ],
        quiz: [
          {
            question: 'What is the difference between speed and velocity?',
            options: ['Speed is faster', 'Velocity includes direction', 'Speed is more accurate', 'They are identical'],
            correct: 1,
            explanation: 'Velocity is a vector — it includes both magnitude (speed) and direction. "60 km/h" is speed; "60 km/h heading north" is velocity.',
          },
          {
            question: 'A car goes from 0 to 60 km/h in 10 seconds. What is its acceleration?',
            options: ['6 km/h per second', '60 km/h', '600 km/h²', '10 m/s²'],
            correct: 0,
            explanation: 'Acceleration = change in velocity ÷ time = (60−0) ÷ 10 = 6 km/h per second.',
          },
          {
            question: 'When you brake a car, what is happening?',
            options: ['The car has no acceleration', 'The car accelerates forward', 'The car decelerates (negative acceleration)', 'Velocity becomes zero instantly'],
            correct: 2,
            explanation: 'Braking changes velocity in the opposite direction of motion — this is negative acceleration or deceleration.',
          },
          {
            question: 'If speed = distance ÷ time, and you travel 120 km in 2 hours, what is your speed?',
            options: ['240 km/h', '60 km/h', '122 km/h', '118 km/h'],
            correct: 1,
            explanation: 'Speed = 120 km ÷ 2 h = 60 km/h.',
          },
        ],
        xp: 55,
      },
      {
        id: 'phys-spark-u1-l2',
        title: "Newton's Laws of Motion",
        emoji: '🍎',
        content: `Isaac Newton described three laws that govern all motion. First Law (Inertia): An object stays still or keeps moving in a straight line unless a force acts on it. A ball rolling on a perfect surface never stops. Second Law: Force = mass × acceleration (F = ma). A heavier object needs more force to accelerate. Third Law: Every action has an equal and opposite reaction. When you push a wall, the wall pushes back equally. Rockets work because of this — burning gas pushes down, rocket is pushed up.`,
        keyPoints: [
          '1st Law: Objects resist changes in motion (inertia)',
          '2nd Law: F = ma (Force = mass × acceleration)',
          '3rd Law: Every action has an equal and opposite reaction',
          'Inertia explains why seatbelts are needed',
          'Rockets use the 3rd law: exhaust down → rocket up',
        ],
        quiz: [
          {
            question: 'A 10 kg object is pushed with 50 N of force. What is its acceleration?',
            options: ['500 m/s²', '5 m/s²', '0.2 m/s²', '40 m/s²'],
            correct: 1,
            explanation: 'F = ma → a = F/m = 50 ÷ 10 = 5 m/s².',
          },
          {
            question: 'Which law explains why you lurch forward when a car stops suddenly?',
            options: ['Newton\'s 3rd Law', 'Newton\'s 2nd Law', 'Newton\'s 1st Law (Inertia)', 'Law of Gravity'],
            correct: 2,
            explanation: 'Your body was in motion and wants to stay in motion (inertia = 1st Law), so you continue moving forward as the car stops.',
          },
          {
            question: 'A rocket launches by ejecting exhaust downward. Which law explains this?',
            options: ['1st Law', '2nd Law', '3rd Law', 'Law of Conservation'],
            correct: 2,
            explanation: 'Newton\'s 3rd Law: the rocket pushes gas down (action), gas pushes rocket up (equal and opposite reaction).',
          },
          {
            question: 'Two objects — 1 kg and 10 kg — are pushed with the same force. Which accelerates more?',
            options: ['The 10 kg object', 'The 1 kg object', 'Both equally', 'Neither'],
            correct: 1,
            explanation: 'F = ma → a = F/m. With the same force, the lighter object (1 kg) gets 10× more acceleration.',
          },
        ],
        xp: 65,
      },
    ],
  },
  {
    id: 'phys-spark-u2',
    title: 'Energy & Work',
    emoji: '⚡',
    description: 'What energy is, how it transforms, and why it is always conserved',
    lessons: [
      {
        id: 'phys-spark-u2-l1',
        title: 'What Is Energy?',
        emoji: '🔋',
        content: `Energy is the capacity to do work. It comes in many forms: kinetic (moving objects), potential (stored by position or state), thermal (heat), chemical (food/fuel), electrical, and light. The most profound law in physics: energy is NEVER created or destroyed, only converted from one form to another. A ball at the top of a hill has gravitational potential energy. As it rolls down, this converts to kinetic energy. At the bottom it moves fastest. This is the Law of Conservation of Energy.`,
        keyPoints: [
          'Energy = the ability to do work',
          'Kinetic energy = energy of motion (½mv²)',
          'Potential energy = stored energy (mgh for gravity)',
          'Energy is always conserved — never destroyed',
          'Forms can convert: chemical → kinetic, potential → kinetic, etc.',
        ],
        quiz: [
          {
            question: 'A ball rolling down a hill converts potential energy to:',
            options: ['Thermal energy', 'Kinetic energy', 'Chemical energy', 'Nuclear energy'],
            correct: 1,
            explanation: 'Gravitational potential energy (height) converts to kinetic energy (motion) as the ball descends.',
          },
          {
            question: 'What does the Law of Conservation of Energy state?',
            options: ['Energy is used up in reactions', 'Energy can be created from nothing', 'Total energy is always conserved, never created or destroyed', 'Energy only exists as heat'],
            correct: 2,
            explanation: 'Energy cannot be created or destroyed — only transformed from one form to another. Total energy is always constant.',
          },
          {
            question: 'Which is an example of chemical energy converting to kinetic energy?',
            options: ['A battery lighting a bulb', 'A car burning fuel to move', 'The sun warming the ground', 'Water behind a dam'],
            correct: 1,
            explanation: 'A car burns fuel (chemical energy) which converts to motion (kinetic energy) via the engine.',
          },
          {
            question: 'A 2 kg object moving at 3 m/s has kinetic energy of:',
            options: ['6 J', '9 J', '3 J', '18 J'],
            correct: 1,
            explanation: 'KE = ½mv² = ½ × 2 × 3² = ½ × 2 × 9 = 9 Joules.',
          },
        ],
        xp: 60,
      },
    ],
  },
])

// ─── CHEMISTRY ───────────────────────────────────────────────────────────────

const chemistrySpark: Curriculum = make('chemistry', 'spark', [
  {
    id: 'chem-spark-u1',
    title: 'Atoms & the Periodic Table',
    emoji: '⚛',
    description: 'The building blocks of all matter',
    lessons: [
      {
        id: 'chem-spark-u1-l1',
        title: 'What Is an Atom?',
        emoji: '🔬',
        content: `Everything you can touch, see, smell, or taste is made of atoms — impossibly tiny particles that are the basic building blocks of matter. An atom has a nucleus in the center (containing protons and neutrons) surrounded by a cloud of electrons. Protons carry positive charge, electrons carry negative charge, and neutrons carry no charge. The number of protons defines what element an atom is — this is the atomic number. Carbon always has 6 protons. Gold always has 79. Change the proton count and you have a completely different element.`,
        keyPoints: [
          'Atoms are the smallest unit of an element',
          'Nucleus = protons (positive) + neutrons (neutral)',
          'Electrons orbit the nucleus (negative charge)',
          'Atomic number = number of protons = defines the element',
          'Atoms are mostly empty space',
        ],
        quiz: [
          {
            question: 'What determines which element an atom belongs to?',
            options: ['Number of neutrons', 'Number of electrons', 'Number of protons', 'The atom\'s mass'],
            correct: 2,
            explanation: 'The number of protons (atomic number) uniquely identifies an element. Carbon always has 6, oxygen always has 8.',
          },
          {
            question: 'Where is most of an atom\'s mass located?',
            options: ['In the electrons', 'Evenly distributed', 'In the nucleus (protons and neutrons)', 'In the outer shell'],
            correct: 2,
            explanation: 'Protons and neutrons are ~1836× heavier than electrons. Nearly all mass is concentrated in the tiny nucleus.',
          },
          {
            question: 'An atom has 8 protons. What element is it?',
            options: ['Carbon', 'Nitrogen', 'Oxygen', 'Neon'],
            correct: 2,
            explanation: 'Oxygen (O) has atomic number 8 — meaning it has 8 protons. This is always true for oxygen.',
          },
          {
            question: 'What charge do electrons carry?',
            options: ['Positive', 'Negative', 'Neutral', 'Variable'],
            correct: 1,
            explanation: 'Electrons carry a negative charge. Protons are positive, neutrons are neutral.',
          },
        ],
        xp: 55,
      },
      {
        id: 'chem-spark-u1-l2',
        title: 'The Periodic Table',
        emoji: '🗂',
        content: `The Periodic Table is chemistry's greatest organizational achievement. It lists all 118 known elements by atomic number. Elements in the same column (group) have similar chemical properties because they have the same number of electrons in their outer shell. Rows are called periods. Metals are on the left (most elements), non-metals are on the right, metalloids form a staircase in between. Noble gases (rightmost column) are almost completely unreactive because their outer electron shells are full.`,
        keyPoints: [
          'Elements ordered by increasing atomic number',
          'Columns = groups = similar chemical behavior',
          'Rows = periods',
          'Metals (left) conduct electricity and heat',
          'Noble gases (right) are almost completely unreactive',
        ],
        quiz: [
          {
            question: 'Why do elements in the same group (column) behave similarly?',
            options: ['Same atomic mass', 'Same number of outer electrons', 'Same number of protons', 'Same physical state'],
            correct: 1,
            explanation: 'Elements in the same group have the same number of valence (outer shell) electrons, which determines chemical behavior.',
          },
          {
            question: 'Why are noble gases (like helium and neon) so unreactive?',
            options: ['They are too heavy to react', 'Their outer electron shells are completely full', 'They have no protons', 'They are too small'],
            correct: 1,
            explanation: 'Full outer shells mean noble gases don\'t need to gain or lose electrons, making them extremely stable and unreactive.',
          },
          {
            question: 'Elements increase from left to right across a period by:',
            options: ['Atomic mass only', 'Number of neutrons', 'Atomic number (one proton each step)', 'Randomly'],
            correct: 2,
            explanation: 'Each step right in a period adds one proton (and usually one electron), increasing the atomic number by 1.',
          },
          {
            question: 'Metals are generally found in which part of the periodic table?',
            options: ['Right side', 'Top row only', 'Left and center', 'Bottom only'],
            correct: 2,
            explanation: 'Metals occupy the left side and center (transition metals) of the periodic table.',
          },
        ],
        xp: 60,
      },
    ],
  },
  {
    id: 'chem-spark-u2',
    title: 'Chemical Reactions',
    emoji: '⚗',
    description: 'How atoms combine and rearrange to form new substances',
    lessons: [
      {
        id: 'chem-spark-u2-l1',
        title: 'What Is a Chemical Reaction?',
        emoji: '💥',
        content: `A chemical reaction occurs when atoms rearrange to form new substances. The starting materials are called reactants; the new substances formed are products. Chemical bonds break in reactants and new bonds form in products. The total number of each type of atom is always the same before and after — this is the Law of Conservation of Mass. Burning wood, cooking an egg, rusting iron, and digesting food are all chemical reactions. Unlike physical changes (ice melting), chemical changes create entirely new substances.`,
        keyPoints: [
          'Reactants → Products (bonds break and form)',
          'Conservation of Mass: atoms are never created or destroyed',
          'Chemical changes create new substances',
          'Physical changes don\'t alter chemical identity (ice → water)',
          'Energy is released or absorbed in every reaction',
        ],
        quiz: [
          {
            question: 'What are the starting materials in a chemical reaction called?',
            options: ['Products', 'Reactants', 'Catalysts', 'Compounds'],
            correct: 1,
            explanation: 'Reactants are the substances that enter a chemical reaction. Products are what come out.',
          },
          {
            question: 'Which is a chemical change (not physical)?',
            options: ['Melting ice', 'Breaking glass', 'Burning wood', 'Dissolving salt in water'],
            correct: 2,
            explanation: 'Burning wood produces entirely new substances (CO₂, water, ash) — a chemical change. The others are physical changes.',
          },
          {
            question: 'The Law of Conservation of Mass states:',
            options: ['Mass is created in reactions', 'Mass is destroyed in reactions', 'Total mass of reactants equals total mass of products', 'Mass doubles in combustion'],
            correct: 2,
            explanation: 'Atoms only rearrange in reactions — they are never created or destroyed, so total mass is conserved.',
          },
          {
            question: 'Rusting iron is an example of:',
            options: ['A physical change', 'A chemical reaction', 'A nuclear reaction', 'An impossible process'],
            correct: 1,
            explanation: 'Rusting is iron reacting with oxygen and water to form iron oxide (rust) — a completely new substance.',
          },
        ],
        xp: 60,
      },
    ],
  },
])

// ─── BIOLOGY ─────────────────────────────────────────────────────────────────

const biologySpark: Curriculum = make('biology', 'spark', [
  {
    id: 'bio-spark-u1',
    title: 'The Cell — Life\'s Building Block',
    emoji: '🔬',
    description: 'Understanding the fundamental unit of all life',
    lessons: [
      {
        id: 'bio-spark-u1-l1',
        title: 'What Is a Cell?',
        emoji: '🦠',
        content: `Every living organism — from bacteria to blue whales — is made of cells. The cell is the smallest unit of life. Some organisms (bacteria) consist of just one cell; humans have about 37 trillion. All cells share key features: a cell membrane (the boundary), cytoplasm (the liquid interior), and DNA (the instruction manual). Eukaryotic cells (plants, animals, fungi) have a nucleus that contains the DNA. Prokaryotic cells (bacteria) don't have a nucleus — DNA floats freely. Plant cells have rigid cell walls and chloroplasts for photosynthesis; animal cells do not.`,
        keyPoints: [
          'Cell = smallest unit of life',
          'All cells have membrane, cytoplasm, and DNA',
          'Eukaryotes have a nucleus (plants, animals, fungi)',
          'Prokaryotes have no nucleus (bacteria)',
          'Plant cells have cell walls and chloroplasts; animal cells don\'t',
        ],
        quiz: [
          {
            question: 'What is the smallest unit of life?',
            options: ['An atom', 'A molecule', 'A cell', 'A tissue'],
            correct: 2,
            explanation: 'The cell is the smallest unit that can carry out all functions of life.',
          },
          {
            question: 'What is the main difference between prokaryotic and eukaryotic cells?',
            options: ['Size only', 'Prokaryotes have no nucleus', 'Eukaryotes have no DNA', 'Prokaryotes are always larger'],
            correct: 1,
            explanation: 'Prokaryotes (like bacteria) lack a membrane-bound nucleus. Their DNA floats in the cytoplasm.',
          },
          {
            question: 'Which structure do plant cells have that animal cells lack?',
            options: ['Cell membrane', 'Nucleus', 'Cell wall and chloroplasts', 'Cytoplasm'],
            correct: 2,
            explanation: 'Plant cells have rigid cell walls for structure and chloroplasts for photosynthesis. Animal cells have neither.',
          },
          {
            question: 'Approximately how many cells does the human body have?',
            options: ['1 thousand', '37 million', '37 trillion', '1 billion'],
            correct: 2,
            explanation: 'The human body contains approximately 37 trillion cells of many different types.',
          },
        ],
        xp: 55,
      },
    ],
  },
  {
    id: 'bio-spark-u2',
    title: 'DNA & Genetics',
    emoji: '🧬',
    description: 'The instruction manual of life and how traits are inherited',
    lessons: [
      {
        id: 'bio-spark-u2-l1',
        title: 'What Is DNA?',
        emoji: '🔀',
        content: `DNA (deoxyribonucleic acid) is the molecule that carries the genetic instructions for the development, functioning, and reproduction of all known life. It looks like a twisted ladder — the famous "double helix." The rungs of the ladder are base pairs made of four letters: A, T, G, C. These letters spell out genes — sections of DNA that code for specific proteins. Proteins do almost everything in your body: they're enzymes, structural materials, hormones, and more. You have about 20,000 genes packed into 46 chromosomes in nearly every cell.`,
        keyPoints: [
          'DNA = double helix shaped molecule',
          'Built from 4 bases: A, T, G, C',
          'Genes are sections of DNA that encode proteins',
          'Humans have ~20,000 genes on 46 chromosomes',
          'DNA is found in the nucleus of eukaryotic cells',
        ],
        quiz: [
          {
            question: 'What shape is DNA?',
            options: ['A single strand', 'A sphere', 'A double helix', 'A cube'],
            correct: 2,
            explanation: 'DNA forms a double helix — two strands twisted around each other like a twisted ladder.',
          },
          {
            question: 'What are the four DNA bases?',
            options: ['A, B, C, D', 'A, T, G, C', 'X, Y, Z, W', 'P, Q, R, S'],
            correct: 1,
            explanation: 'DNA uses four nucleotide bases: Adenine (A), Thymine (T), Guanine (G), and Cytosine (C).',
          },
          {
            question: 'What do genes ultimately produce?',
            options: ['More DNA', 'Proteins', 'Cells', 'Energy'],
            correct: 1,
            explanation: 'Genes are instructions for making proteins. Proteins carry out virtually all cellular functions.',
          },
          {
            question: 'How many chromosomes do humans have?',
            options: ['23', '46', '64', '92'],
            correct: 1,
            explanation: 'Humans have 46 chromosomes (23 pairs) in most body cells. We inherit one chromosome of each pair from each parent.',
          },
        ],
        xp: 60,
      },
    ],
  },
])

// ─── HISTORY ─────────────────────────────────────────────────────────────────

const historySpark: Curriculum = make('history', 'spark', [
  {
    id: 'hist-spark-u1',
    title: 'Ancient Civilizations',
    emoji: '🏛',
    description: 'The first great civilizations and what made them possible',
    lessons: [
      {
        id: 'hist-spark-u1-l1',
        title: 'The Birth of Civilization',
        emoji: '🌾',
        content: `For most of human history (200,000+ years), people were hunter-gatherers — following food sources. About 12,000 years ago, in the Fertile Crescent (modern Iraq/Syria), humans discovered agriculture: planting crops and raising animals. This revolution changed everything. With reliable food supplies, people settled in villages, then towns, then cities. Cities needed organization → governments formed. Surplus food needed recording → writing was invented. The first civilizations arose along rivers: Mesopotamia (Tigris-Euphrates), Egypt (Nile), Indus Valley (Indus), and China (Yellow River).`,
        keyPoints: [
          'Agriculture began ~12,000 years ago in the Fertile Crescent',
          'Farming → permanent settlements → cities → civilization',
          'Writing was invented to track surplus goods',
          'First civilizations formed along major rivers',
          'Mesopotamia, Egypt, Indus Valley, and China were the first',
        ],
        quiz: [
          {
            question: 'What was the key development that allowed civilization to begin?',
            options: ['The invention of writing', 'Discovery of agriculture and animal domestication', 'Building of pyramids', 'Invention of the wheel'],
            correct: 1,
            explanation: 'Agriculture provided reliable food surpluses that allowed people to settle permanently and build complex societies.',
          },
          {
            question: 'Where did agriculture first develop?',
            options: ['Egypt', 'China', 'The Fertile Crescent (modern Iraq/Syria)', 'Greece'],
            correct: 2,
            explanation: 'The Fertile Crescent in the Middle East is where the first known agriculture (wheat, barley, sheep, goats) emerged around 10,000 BCE.',
          },
          {
            question: 'Why was writing first invented?',
            options: ['To record poetry', 'To track and record economic transactions and food surpluses', 'For religious worship', 'To communicate across distances'],
            correct: 1,
            explanation: 'The earliest writing systems (cuneiform in Mesopotamia) were accounting tools to track grain, livestock, and trade.',
          },
          {
            question: 'Along which river did Egyptian civilization develop?',
            options: ['Tigris', 'Euphrates', 'Indus', 'Nile'],
            correct: 3,
            explanation: 'Egyptian civilization developed along the Nile River, whose annual floods deposited fertile silt, enabling agriculture in a desert region.',
          },
        ],
        xp: 55,
      },
    ],
  },
  {
    id: 'hist-spark-u2',
    title: 'Modern World History',
    emoji: '🌍',
    description: 'The revolutions, wars, and movements that shaped today\'s world',
    lessons: [
      {
        id: 'hist-spark-u2-l1',
        title: 'The Industrial Revolution',
        emoji: '🏭',
        content: `The Industrial Revolution (1760–1840) transformed human society more radically than anything since agriculture. Beginning in Britain, coal-powered steam engines replaced human and animal labor. Factories replaced craftsmen. Cities exploded as people moved from farms for work. The railroad connected nations. Production of goods became cheaper and faster. The downside: harsh working conditions, child labor, and pollution. But it also created the modern middle class, mass education, and eventually higher living standards for billions. Every aspect of modern life traces back to this period.`,
        keyPoints: [
          'Started in Britain around 1760',
          'Steam engines powered new manufacturing and transport',
          'Cities grew rapidly as people left farms',
          'Created both wealth and terrible working conditions',
          'Railways connected nations and changed commerce forever',
        ],
        quiz: [
          {
            question: 'Where did the Industrial Revolution begin?',
            options: ['France', 'USA', 'Britain', 'Germany'],
            correct: 2,
            explanation: 'Britain was first because of its coal deposits, colonial trade networks, stable government, and existing market economy.',
          },
          {
            question: 'What was the key energy source of the Industrial Revolution?',
            options: ['Oil', 'Nuclear power', 'Solar energy', 'Coal-powered steam'],
            correct: 3,
            explanation: 'Coal-fired steam engines drove machines, railways, and ships — replacing muscle power with mechanical power.',
          },
          {
            question: 'What major social change accompanied industrialization?',
            options: ['People moved from cities to farms', 'People moved from farms to industrial cities', 'Population decreased dramatically', 'Education became impossible'],
            correct: 1,
            explanation: 'Urbanization — the mass migration from rural to urban areas — was a defining social transformation of industrialization.',
          },
          {
            question: 'Approximately when did the Industrial Revolution begin?',
            options: ['1066', '1492', '1760', '1900'],
            correct: 2,
            explanation: 'The Industrial Revolution is generally dated from around 1760 in Britain, running through roughly 1840.',
          },
        ],
        xp: 60,
      },
    ],
  },
])

// ─── COMPUTER SCIENCE ─────────────────────────────────────────────────────────

const csSpark: Curriculum = make('computerscience', 'spark', [
  {
    id: 'cs-spark-u1',
    title: 'Programming Fundamentals',
    emoji: '💻',
    description: 'How to think like a programmer and write your first code',
    lessons: [
      {
        id: 'cs-spark-u1-l1',
        title: 'What Is Programming?',
        emoji: '🤖',
        content: `Programming is giving precise instructions to a computer. Computers are incredibly fast but completely literal — they do exactly what you tell them, nothing more, nothing less. A program is a sequence of instructions written in a programming language (Python, JavaScript, Java, etc.) that the computer can execute. These languages use English-like syntax to make coding human-readable. A compiler or interpreter translates your code into machine code (0s and 1s) that the hardware understands. Programming is fundamentally about problem-solving: breaking a big problem into small, precise steps.`,
        keyPoints: [
          'Programming = giving precise instructions to computers',
          'Programs are written in programming languages',
          'Compilers/interpreters translate code to machine language',
          'Computers are fast but completely literal',
          'Programming is about breaking problems into steps (algorithms)',
        ],
        quiz: [
          {
            question: 'What does a compiler or interpreter do?',
            options: ['Writes code automatically', 'Translates human-readable code to machine code', 'Tests code for errors', 'Runs the operating system'],
            correct: 1,
            explanation: 'A compiler or interpreter takes source code written in a programming language and translates it into machine-executable instructions.',
          },
          {
            question: 'Why are computers described as "completely literal"?',
            options: ['They speak English literally', 'They execute exactly what is programmed — no more, no less', 'They are always correct', 'They understand context'],
            correct: 1,
            explanation: 'Computers follow instructions exactly as written. If your code has a logical error, the computer won\'t infer what you meant — it will just do what you said.',
          },
          {
            question: 'What is an algorithm?',
            options: ['A type of programming language', 'A computer hardware component', 'A step-by-step procedure for solving a problem', 'A type of memory'],
            correct: 2,
            explanation: 'An algorithm is a finite sequence of well-defined instructions to solve a problem or complete a task.',
          },
          {
            question: 'Which of these is a programming language?',
            options: ['HTML only', 'Python', 'Microsoft Word', 'The Internet'],
            correct: 1,
            explanation: 'Python is a general-purpose programming language. HTML is a markup language. Word is an application. "The Internet" is a network.',
          },
        ],
        xp: 55,
      },
      {
        id: 'cs-spark-u1-l2',
        title: 'Variables, Data Types & Conditionals',
        emoji: '🔀',
        content: `In programming, variables store data. Unlike math variables that represent unknowns, code variables hold actual values. Data types define what kind of data: integers (whole numbers), floats (decimals), strings (text), and booleans (true/false). Conditionals let programs make decisions: if (condition) { do this } else { do that }. This is how programs behave differently based on input. For example: if the user's age >= 18 { show adult content } else { show kid content }. Together, variables and conditionals are the bedrock of all programming logic.`,
        keyPoints: [
          'Variables store data under a named label',
          'Data types: int, float, string, boolean',
          'if/else statements make programs branch based on conditions',
          'Boolean values are only true or false',
          'Conditionals are the basis of all decision-making in code',
        ],
        quiz: [
          {
            question: 'What data type would store the name "Alice"?',
            options: ['Integer', 'Boolean', 'String', 'Float'],
            correct: 2,
            explanation: 'Strings store text — sequences of characters like names, sentences, and words.',
          },
          {
            question: 'What does a boolean value represent?',
            options: ['A number', 'True or false only', 'A word', 'A decimal'],
            correct: 1,
            explanation: 'Booleans have only two possible values: true or false. They\'re used in conditions and logical operations.',
          },
          {
            question: 'What does this code do: if (score >= 60) { print("Pass") } else { print("Fail") }?',
            options: ['Always prints "Pass"', 'Prints Pass if score ≥ 60, else Fail', 'Prints both', 'Does nothing'],
            correct: 1,
            explanation: 'The if/else conditional checks the condition. If score is 60 or above, it prints "Pass"; otherwise it prints "Fail".',
          },
          {
            question: 'What data type would store the number 3.14?',
            options: ['Integer', 'String', 'Boolean', 'Float'],
            correct: 3,
            explanation: 'Floats (floating-point numbers) store decimal values like 3.14, 2.718, or 0.001.',
          },
        ],
        xp: 65,
      },
    ],
  },
])

// ─── QUANTUM PHYSICS ──────────────────────────────────────────────────────────

const quantumSpark: Curriculum = make('quantumphysics', 'spark', [
  {
    id: 'qp-spark-u1',
    title: 'The Quantum World',
    emoji: '〰',
    description: 'Where normal physics breaks down and strangeness rules',
    lessons: [
      {
        id: 'qp-spark-u1-l1',
        title: 'Wave-Particle Duality',
        emoji: '🌊',
        content: `Here's where physics gets weird. In the early 1900s, scientists discovered that light — which everyone thought was a wave — also behaves like a particle (called a photon). Stranger still: electrons — which everyone thought were particles — also behave like waves. This is wave-particle duality, and it's not a limitation of our instruments. It's genuinely how nature works. The famous double-slit experiment shows electrons creating an interference pattern (wave behavior) when not observed, but landing in particle-like spots when we try to watch. Observation itself changes the result.`,
        keyPoints: [
          'Light behaves as both wave and particle (photon)',
          'Electrons behave as both particle and wave',
          'Wave-particle duality is fundamental, not an artifact of measurement',
          'The double-slit experiment reveals this duality',
          'Observation affects quantum systems — a key principle',
        ],
        quiz: [
          {
            question: 'What does wave-particle duality mean?',
            options: ['Waves turn into particles', 'Quantum objects behave as both waves and particles', 'Only waves exist', 'Particles are illusions'],
            correct: 1,
            explanation: 'Quantum objects like electrons and photons exhibit wave-like and particle-like properties depending on how they\'re measured.',
          },
          {
            question: 'What does the double-slit experiment demonstrate?',
            options: ['Light always travels in a straight line', 'Electrons only behave as particles', 'Quantum particles create interference patterns (wave behavior) when unobserved', 'Newton\'s laws apply at all scales'],
            correct: 2,
            explanation: 'In the double-slit experiment, electrons create an interference pattern when unobserved, proving wave behavior — but land on single spots when observed, proving particle behavior.',
          },
          {
            question: 'What is a photon?',
            options: ['A type of atom', 'A quantum of light (light as a particle)', 'An electron orbit', 'A type of wave only'],
            correct: 1,
            explanation: 'A photon is the fundamental particle of light — a quantum (discrete packet) of electromagnetic energy.',
          },
          {
            question: 'What happens when scientists try to observe which slit an electron goes through?',
            options: ['Nothing changes', 'The interference pattern disappears, electrons act as particles', 'Electrons split in half', 'The electron stops moving'],
            correct: 1,
            explanation: 'Observation "collapses" the quantum wave — once you know which path it took, the wave interference disappears and electrons behave like classical particles.',
          },
        ],
        xp: 70,
      },
    ],
  },
])

// ─── ASTRONOMY ───────────────────────────────────────────────────────────────

const astronomySpark: Curriculum = make('astronomy', 'spark', [
  {
    id: 'astro-spark-u1',
    title: 'Our Solar System',
    emoji: '☀',
    description: 'The Sun, planets, moons, and everything in our cosmic neighborhood',
    lessons: [
      {
        id: 'astro-spark-u1-l1',
        title: 'The Sun and the Planets',
        emoji: '🌍',
        content: `Our solar system formed 4.6 billion years ago from a cloud of gas and dust. The Sun holds 99.86% of the solar system's mass — it's a medium-sized star, a giant ball of hydrogen and helium undergoing nuclear fusion. Eight planets orbit the Sun: Mercury, Venus, Earth, Mars (rocky inner planets), then Jupiter, Saturn, Uranus, Neptune (gas and ice giants). Earth is in the habitable zone — not too hot, not too cold for liquid water. Jupiter is so massive it could swallow 1,300 Earths. Saturn's rings are made of ice and rock and stretch 282,000 km across.`,
        keyPoints: [
          'Solar system formed 4.6 billion years ago',
          'Sun = 99.86% of all solar system mass',
          '8 planets: 4 rocky inner, 4 gas/ice outer',
          'Earth is in the habitable zone for liquid water',
          'Saturn\'s rings are ice and rock',
        ],
        quiz: [
          {
            question: 'What percentage of the solar system\'s mass does the Sun hold?',
            options: ['50%', '75%', '99.86%', '33%'],
            correct: 2,
            explanation: 'The Sun contains about 99.86% of all matter in the solar system — it utterly dominates.',
          },
          {
            question: 'How many planets are in our solar system?',
            options: ['7', '8', '9', '10'],
            correct: 1,
            explanation: 'There are 8 official planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Pluto was reclassified as a dwarf planet in 2006.',
          },
          {
            question: 'What makes Earth special in the solar system?',
            options: ['It\'s the largest', 'It\'s the closest to the Sun', 'It\'s in the habitable zone with liquid water', 'It has the most moons'],
            correct: 2,
            explanation: 'Earth is in the habitable zone — at just the right distance from the Sun for liquid water to exist on its surface, which is essential for life as we know it.',
          },
          {
            question: 'What are Saturn\'s rings made of?',
            options: ['Solid gold', 'Gas clouds', 'Particles of ice and rock', 'Dust only'],
            correct: 2,
            explanation: 'Saturn\'s rings are composed of countless particles of ice and rock, ranging from tiny grains to boulders.',
          },
        ],
        xp: 60,
      },
    ],
  },
])

// ─── PSYCHOLOGY ──────────────────────────────────────────────────────────────

const psychologySpark: Curriculum = make('psychology', 'spark', [
  {
    id: 'psych-spark-u1',
    title: 'The Brain & Behavior',
    emoji: '🧠',
    description: 'How your brain shapes what you think, feel, and do',
    lessons: [
      {
        id: 'psych-spark-u1-l1',
        title: 'How the Brain Works',
        emoji: '⚡',
        content: `Your brain is 1.4 kg of neural tissue that generates your entire experience of reality. It contains roughly 86 billion neurons — each connected to up to 10,000 others via synapses, forming a network of ~100 trillion connections. Thoughts, feelings, and memories are patterns of electrical and chemical signals flowing through these networks. Different brain regions specialize: the prefrontal cortex handles reasoning, the amygdala processes fear and emotion, the hippocampus forms memories, the cerebellum coordinates movement. Neuroplasticity means the brain physically changes and rewires in response to learning and experience.`,
        keyPoints: [
          '86 billion neurons, ~100 trillion connections',
          'Thoughts are patterns of electrical/chemical signals',
          'Prefrontal cortex = reasoning and decisions',
          'Amygdala = fear and emotion',
          'Hippocampus = memory formation',
          'Neuroplasticity = brain rewires with experience',
        ],
        quiz: [
          {
            question: 'How many neurons does the human brain contain approximately?',
            options: ['1 million', '1 billion', '86 billion', '1 trillion'],
            correct: 2,
            explanation: 'The human brain contains approximately 86 billion neurons, connected by roughly 100 trillion synaptic connections.',
          },
          {
            question: 'What is neuroplasticity?',
            options: ['The brain\'s ability to grow larger', 'The brain physically rewiring and changing through learning', 'Brain cells replacing themselves', 'The brain\'s flexibility when injured'],
            correct: 1,
            explanation: 'Neuroplasticity is the brain\'s ability to reorganize neural connections in response to learning, experience, or injury.',
          },
          {
            question: 'Which brain region is most associated with forming new memories?',
            options: ['Cerebellum', 'Prefrontal cortex', 'Hippocampus', 'Amygdala'],
            correct: 2,
            explanation: 'The hippocampus is critical for forming new long-term memories. Damage to it (as in Alzheimer\'s) severely impairs memory formation.',
          },
          {
            question: 'What does the amygdala primarily process?',
            options: ['Language', 'Vision', 'Movement coordination', 'Fear and emotional responses'],
            correct: 3,
            explanation: 'The amygdala is the brain\'s emotional alarm system — it processes fear, threat detection, and emotional memories.',
          },
        ],
        xp: 65,
      },
    ],
  },
])

// ─── ECONOMICS ───────────────────────────────────────────────────────────────

const economicsSpark: Curriculum = make('economics', 'spark', [
  {
    id: 'econ-spark-u1',
    title: 'Supply, Demand & Markets',
    emoji: '📊',
    description: 'The forces that set prices and allocate resources',
    lessons: [
      {
        id: 'econ-spark-u1-l1',
        title: 'Supply and Demand',
        emoji: '⚖',
        content: `Supply and demand is the most powerful framework in economics. Demand: as price rises, buyers want less. As price falls, they want more. Supply: as price rises, sellers want to offer more. These forces interact at the market price — the equilibrium — where the amount buyers want equals the amount sellers offer. If demand surges (e.g., everyone suddenly wants masks during a pandemic), prices rise until supply catches up. If supply surges (e.g., oil producers flood the market), prices fall. Every price you see is the result of these invisible forces finding balance.`,
        keyPoints: [
          'Higher price → less demand, more supply',
          'Lower price → more demand, less supply',
          'Equilibrium = where supply and demand meet',
          'Shifts in demand or supply change the equilibrium price',
          'Markets continuously adjust prices to balance the two',
        ],
        quiz: [
          {
            question: 'At market equilibrium, what is true?',
            options: ['Supply exceeds demand', 'Demand exceeds supply', 'Quantity demanded equals quantity supplied', 'Price is at its maximum'],
            correct: 2,
            explanation: 'Equilibrium is the point where the quantity buyers want to buy exactly equals the quantity sellers want to sell.',
          },
          {
            question: 'If the price of a good rises, what typically happens to demand?',
            options: ['Demand increases', 'Demand decreases', 'Demand stays the same', 'Demand doubles'],
            correct: 1,
            explanation: 'The Law of Demand: as price rises, quantity demanded falls, all else equal. Higher prices make buyers less willing or able to buy.',
          },
          {
            question: 'A drought destroys half the wheat crop. What happens to wheat prices?',
            options: ['Prices fall', 'Prices stay the same', 'Prices rise', 'Demand disappears'],
            correct: 2,
            explanation: 'A supply decrease (drought) while demand stays the same creates a shortage, pushing prices up until demand adjusts.',
          },
          {
            question: 'What does the Law of Supply state?',
            options: ['Higher prices lead to less supply', 'Higher prices lead to more supply', 'Supply is always constant', 'Supply determines price completely'],
            correct: 1,
            explanation: 'The Law of Supply: as price rises, sellers are more willing to produce and sell more, increasing quantity supplied.',
          },
        ],
        xp: 60,
      },
    ],
  },
])

// ─── PHILOSOPHY ──────────────────────────────────────────────────────────────

const philosophySpark: Curriculum = make('philosophy', 'spark', [
  {
    id: 'phil-spark-u1',
    title: 'Logic & Critical Thinking',
    emoji: '🤔',
    description: 'How to reason well and spot faulty arguments',
    lessons: [
      {
        id: 'phil-spark-u1-l1',
        title: 'What Is Logic?',
        emoji: '🔍',
        content: `Logic is the study of valid reasoning — how to move from what we know to conclusions that must follow. An argument has premises (what we accept as true) and a conclusion (what we're trying to establish). A valid argument: if the premises are true, the conclusion MUST be true. Example: All humans are mortal. Socrates is a human. Therefore Socrates is mortal. This is a syllogism and it's logically airtight. Logic helps us distinguish good arguments from bad ones — and there are dozens of recognized logical fallacies (bad argument patterns) worth learning to spot.`,
        keyPoints: [
          'Logic = study of valid reasoning',
          'Arguments have premises and a conclusion',
          'Valid argument: true premises guarantee true conclusion',
          'Logical fallacies are common patterns of bad reasoning',
          'Critical thinking uses logic to evaluate claims',
        ],
        quiz: [
          {
            question: 'What makes an argument "valid" in logic?',
            options: ['It sounds convincing', 'The premises are true', 'If premises are true, the conclusion must be true', 'It\'s approved by experts'],
            correct: 2,
            explanation: 'Validity is about structure: a valid argument is one where true premises guarantee a true conclusion, regardless of whether the premises actually are true.',
          },
          {
            question: 'In the argument "All cats are mammals; Tom is a cat; therefore Tom is a mammal" — what is the conclusion?',
            options: ['All cats are mammals', 'Tom is a cat', 'Tom is a mammal', 'Cats and mammals exist'],
            correct: 2,
            explanation: '"Tom is a mammal" is the conclusion — what the argument is trying to establish from the premises.',
          },
          {
            question: 'What is a logical fallacy?',
            options: ['A true argument', 'A false premise', 'A flawed pattern of reasoning', 'A complicated argument'],
            correct: 2,
            explanation: 'A logical fallacy is an error in reasoning — an argument pattern that appears valid but isn\'t. Examples: ad hominem, straw man, slippery slope.',
          },
          {
            question: 'Which is an example of a logical fallacy?',
            options: ['Using evidence to support a claim', 'Attacking a person\'s character instead of their argument (ad hominem)', 'Drawing a conclusion from valid premises', 'Asking for evidence'],
            correct: 1,
            explanation: 'Ad hominem is a fallacy: attacking the person making the argument rather than the argument itself.',
          },
        ],
        xp: 65,
      },
    ],
  },
])

// ─── GEOGRAPHY ───────────────────────────────────────────────────────────────

const geographySpark: Curriculum = make('geography', 'spark', [
  {
    id: 'geo-spark-u1',
    title: 'Our Planet Earth',
    emoji: '🌍',
    description: 'Earth\'s structure, features, and the forces that shape it',
    lessons: [
      {
        id: 'geo-spark-u1-l1',
        title: 'Tectonic Plates & Earth\'s Structure',
        emoji: '🌋',
        content: `Earth is not a solid, uniform ball — it has layers. The inner core (solid iron, 5,150°C), outer core (liquid iron, generating our magnetic field), mantle (semi-solid rock, constantly churning), and crust (the thin shell we live on). The crust is broken into massive pieces called tectonic plates, which float on the mantle and move 2-10 cm per year. When plates collide, mountains form (Himalayas). When they pull apart, oceans spread (Atlantic Ocean). Where they grind sideways, earthquakes strike (San Andreas Fault). Volcanoes occur where plates subduct (one slides under another).`,
        keyPoints: [
          'Earth has layers: crust, mantle, outer core, inner core',
          'The crust is broken into ~15 major tectonic plates',
          'Plates move 2-10 cm per year on the mantle',
          'Colliding plates form mountains',
          'Subducting plates cause volcanoes and earthquakes',
        ],
        quiz: [
          {
            question: 'What generates Earth\'s magnetic field?',
            options: ['The crust moving', 'The solid inner core', 'The liquid outer core (iron in motion)', 'The Sun\'s radiation'],
            correct: 2,
            explanation: 'Earth\'s magnetic field is generated by convection of liquid iron in the outer core — a process called the geodynamo.',
          },
          {
            question: 'The Himalayas formed because two tectonic plates:',
            options: ['Pulled apart', 'Ground sideways against each other', 'Collided (Indian plate into Eurasian plate)', 'One slid under the other'],
            correct: 2,
            explanation: 'The Himalayas formed when the Indian tectonic plate collided with the Eurasian plate, pushing rock upward into the world\'s tallest mountains.',
          },
          {
            question: 'What causes earthquakes at tectonic plate boundaries?',
            options: ['Volcanic eruptions only', 'Stress and sudden slipping of plates against each other', 'Ocean currents', 'Changes in temperature'],
            correct: 1,
            explanation: 'Earthquakes occur when stress built up at plate boundaries is suddenly released as the plates slip past or against each other.',
          },
          {
            question: 'How fast do tectonic plates typically move?',
            options: ['Meters per year', '2-10 cm per year (about fingernail growth rate)', 'Kilometers per year', 'They don\'t move'],
            correct: 1,
            explanation: 'Tectonic plates move very slowly — about 2-10 cm per year, similar to the rate your fingernails grow.',
          },
        ],
        xp: 60,
      },
    ],
  },
])

// ─── LITERATURE ──────────────────────────────────────────────────────────────

const literatureSpark: Curriculum = make('literature', 'spark', [
  {
    id: 'lit-spark-u1',
    title: 'Reading & Analysis',
    emoji: '📖',
    description: 'How to read deeply and understand what authors are really doing',
    lessons: [
      {
        id: 'lit-spark-u1-l1',
        title: 'Themes, Symbols & Motifs',
        emoji: '🎭',
        content: `Great literature works on multiple levels simultaneously. A theme is the central message or insight about life — what the story is really about beneath the plot. In "To Kill a Mockingbird," the plot is a trial, but the theme is racial injustice and moral courage. A symbol is an object, character, or event that represents something beyond itself. The green light in "The Great Gatsby" symbolizes Gatsby's unattainable dreams. A motif is a recurring element that reinforces the theme — like mirrors appearing throughout a story about identity. Skilled readers notice these layers and understand the author's craft.`,
        keyPoints: [
          'Theme = the central message or insight (beyond the plot)',
          'Symbol = object/character representing something larger',
          'Motif = recurring element reinforcing the theme',
          'Irony = saying/showing the opposite of what is meant',
          'Analyzing literature means reading beneath the surface',
        ],
        quiz: [
          {
            question: 'What is a theme in literature?',
            options: ['The setting of the story', 'The central message or insight about life', 'The main character', 'The plot summary'],
            correct: 1,
            explanation: 'A theme is the deeper meaning of a work — what it says about human experience, not just what happens in the plot.',
          },
          {
            question: 'In "The Great Gatsby," the green light at the end of Daisy\'s dock symbolizes:',
            options: ['Real traffic lights', 'Money and greed', 'Gatsby\'s unattainable dreams and longing', 'The color of the sea'],
            correct: 2,
            explanation: 'The green light symbolizes Gatsby\'s yearning for his idealized past and the American Dream — always visible but never reachable.',
          },
          {
            question: 'What is a motif?',
            options: ['A type of character', 'A recurring element that reinforces the theme', 'The climax of the story', 'A writing style'],
            correct: 1,
            explanation: 'A motif is a recurring image, phrase, or idea that appears throughout a text and reinforces its themes.',
          },
          {
            question: 'What is irony?',
            options: ['Exaggeration for effect', 'Expressing the opposite of what is meant', 'A very long metaphor', 'Using rhyme in prose'],
            correct: 1,
            explanation: 'Irony involves a gap between expectation and reality, or saying the opposite of what is meant (e.g., "What a lovely weather!" during a storm).',
          },
        ],
        xp: 65,
      },
    ],
  },
])

// ─── CURRICULUM MAP ───────────────────────────────────────────────────────────

export const CURRICULA: Curriculum[] = [
  mathSpark, mathBuilder, mathExplorer, mathScholar, mathMaster,
  physicsSpark, physicsBuilder, physicsExplorer, physicsScholar, physicsMaster,
  chemistrySpark, chemBuilder, chemExplorer, chemScholar, chemMaster,
  biologySpark, bioBuilder, bioExplorer, bioScholar, bioMaster,
  historySpark, historyBuilder, historyExplorer, historyScholar, historyMaster,
  csSpark, csBuilder, csExplorer, csScholar, csMaster,
  economicsSpark, economicsBuilder, economicsExplorer, economicsScholar, economicsMaster,
  psychologySpark, psychologyBuilder, psychologyExplorer, psychologyScholar, psychologyMaster,
  quantumSpark, quantumBuilder, quantumExplorer, quantumScholar, quantumMaster,
  astronomySpark, astronomyBuilder, astronomyExplorer, astronomyScholar, astronomyMaster,
  philosophySpark, philosophyBuilder, philosophyExplorer, philosophyScholar, philosophyMaster,
  geographySpark, geographyBuilder, geographyExplorer, geographyScholar, geographyMaster,
  literatureSpark, literatureBuilder, literatureExplorer, literatureScholar, literatureMaster,
]

export function getCurriculum(topicId: string, difficulty: Difficulty): Curriculum | null {
  return CURRICULA.find(c => c.topicId === topicId && c.difficulty === difficulty) ?? null
}

export function getAllUnitsForTopic(topicId: string, difficulty: Difficulty) {
  const curr = getCurriculum(topicId, difficulty)
  return curr?.units ?? []
}
