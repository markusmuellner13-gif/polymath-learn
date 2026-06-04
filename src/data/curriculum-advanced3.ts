import type { Curriculum, Difficulty } from '../types'

const make = (topicId: string, difficulty: Difficulty, units: Curriculum['units']): Curriculum => ({
  topicId, difficulty, units,
})

// ─── COMPUTER SCIENCE ─────────────────────────────────────────────────────────

export const csBuilder: Curriculum = make('computerscience', 'builder', [
  {
    id: 'cs-builder-u1', title: 'Data Structures', emoji: '🗂',
    description: 'Arrays, lists, stacks, queues — organizing data for efficiency',
    lessons: [{
      id: 'cs-builder-u1-l1', title: 'Arrays, Stacks & Queues', emoji: '📦',
      content: 'A data structure organizes data for efficient access. Arrays store elements at indexed positions (O(1) access). Stacks are LIFO (Last In First Out) — like a plate stack. Queues are FIFO (First In First Out) — like a line at a shop. Choosing the right structure drastically affects performance.',
      keyPoints: [
        'Array: fixed-size indexed storage; O(1) access by index',
        'Stack: LIFO — push to top, pop from top (call stacks, undo history)',
        'Queue: FIFO — enqueue at back, dequeue from front (task scheduling)',
        'Linked list: nodes with pointers; O(n) access but O(1) insert at head',
        'Hash map: key-value storage with O(1) average lookup',
      ],
      quiz: [
        { question: 'A stack is LIFO. What does this mean?', options: ['Largest item first', 'Last item added is first to be removed', 'Items sorted alphabetically', 'First item always at top'], correct: 1, explanation: 'LIFO = Last In, First Out. Like a stack of plates — the last plate placed is the first one taken off.' },
        { question: 'Which data structure is used for browser "back" navigation?', options: ['Queue', 'Array', 'Stack', 'Hash map'], correct: 2, explanation: 'Browser history uses a stack. Each page visit is pushed; pressing "back" pops the last-visited page.' },
        { question: 'What is the time complexity of accessing an array element by index?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'], correct: 2, explanation: 'Arrays store elements contiguously in memory. Given the index, the memory address is computed directly — O(1) constant time.' },
        { question: 'A printer queue uses which data structure?', options: ['Stack', 'Queue', 'Tree', 'Graph'], correct: 1, explanation: 'Print jobs are processed FIFO — first submitted, first printed. This is a queue.' },
      ],
      xp: 75,
    }],
  },
  {
    id: 'cs-builder-u2', title: 'Functions & Loops', emoji: '🔁',
    description: 'Loops, functions, recursion and clean code organization',
    lessons: [{
      id: 'cs-builder-u2-l1', title: 'Loops & Recursion', emoji: '♻',
      content: 'Loops repeat code: for loops iterate a fixed number of times; while loops repeat until a condition is false. Recursion is a function calling itself. Every recursive solution needs a base case (to stop) and a recursive case. Recursion is elegant but can cause stack overflow if the base case is missing.',
      keyPoints: [
        'for loop: ideal when iterations are known in advance',
        'while loop: ideal when stopping condition is based on runtime state',
        'Recursion: function calling itself with a smaller subproblem',
        'Base case: the condition that stops recursion (essential!)',
        'Factorial, Fibonacci, and tree traversals are classic recursive problems',
      ],
      quiz: [
        { question: 'What prevents infinite recursion?', options: ['A while loop', 'A base case that stops the recursion', 'A try-catch block', 'A for loop'], correct: 1, explanation: 'Every recursive function needs a base case — a condition under which it returns without calling itself again, stopping the chain.' },
        { question: 'How many times does "for i in range(5)" loop?', options: ['4', '5', '6', '1'], correct: 1, explanation: 'range(5) generates 0, 1, 2, 3, 4 — 5 values, so the loop runs 5 times.' },
        { question: 'What happens without a base case in recursion?', options: ['The function never runs', 'It runs once and stops', 'Stack overflow — infinite calls until memory is exhausted', 'It returns 0'], correct: 2, explanation: 'Without a base case, the function calls itself infinitely, filling the call stack until a stack overflow error occurs.' },
        { question: 'Which problem is naturally recursive?', options: ['Printing numbers 1-10', 'Summing an array once', 'Factorial (n! = n × (n−1)!)', 'Checking if a number is even'], correct: 2, explanation: 'Factorial is self-similar: 5! = 5 × 4!. The problem reduces to a smaller version of itself — ideal for recursion.' },
      ],
      xp: 75,
    }],
  },
])

export const csExplorer: Curriculum = make('computerscience', 'explorer', [
  {
    id: 'cs-explorer-u1', title: 'Algorithms & Complexity', emoji: '⚡',
    description: 'Sorting, searching, Big O notation and algorithm design',
    lessons: [{
      id: 'cs-explorer-u1-l1', title: 'Big O & Sorting Algorithms', emoji: '📊',
      content: 'Big O notation describes how algorithm performance scales with input size. O(1) is constant, O(log n) is logarithmic (binary search), O(n) is linear, O(n log n) is quicksort average, O(n²) is bubble sort. Choosing a better algorithm often matters more than faster hardware.',
      keyPoints: [
        'Big O: worst-case time/space complexity as input grows',
        'O(1): constant — always same time (hash lookup)',
        'O(log n): logarithmic — binary search halves input each step',
        'O(n log n): efficient sorts — merge sort, quicksort average case',
        'O(n²): quadratic — bubble sort, insertion sort (bad for large data)',
      ],
      quiz: [
        { question: 'Binary search runs in O(log n) because it:', options: ['Checks every element', 'Sorts first then searches', 'Halves the search space each step', 'Uses hash maps'], correct: 2, explanation: 'Binary search eliminates half the remaining elements each comparison. With 1 million items, it needs at most ~20 steps.' },
        { question: 'Bubble sort is O(n²). This means for n=1000 items, roughly how many operations?', options: ['1,000', '10,000', '1,000,000', '1,000,000,000'], correct: 2, explanation: 'O(n²): 1000² = 1,000,000 operations. Compare to merge sort (O(n log n)): ~10,000 operations for the same input.' },
        { question: 'Which complexity is best for large datasets?', options: ['O(n²)', 'O(n)', 'O(log n)', 'O(2ⁿ)'], correct: 2, explanation: 'O(log n) grows extremely slowly. For n = 1 billion, O(log n) requires only ~30 steps. O(n) would require 1 billion.' },
        { question: 'What does Big O notation describe?', options: ['Memory capacity', 'How performance scales with input size (worst case)', 'Code readability', 'Language-specific speed'], correct: 1, explanation: 'Big O measures the rate of growth of time (or space) requirements as input size n increases — independent of hardware or constants.' },
      ],
      xp: 90,
    }],
  },
  {
    id: 'cs-explorer-u2', title: 'Databases', emoji: '🗄',
    description: 'SQL, relational databases, normalization and query optimization',
    lessons: [{
      id: 'cs-explorer-u2-l1', title: 'SQL & Relational Databases', emoji: '📋',
      content: 'Relational databases organize data in tables (rows and columns). SQL (Structured Query Language) queries this data. SELECT retrieves, INSERT adds, UPDATE modifies, DELETE removes. JOINs combine data from multiple tables via shared keys. Indexes speed up lookups at the cost of extra storage.',
      keyPoints: [
        'Tables have rows (records) and columns (attributes)',
        'Primary key: uniquely identifies each row',
        'Foreign key: links rows in one table to another',
        'SELECT * FROM table WHERE condition — basic query syntax',
        'JOIN combines rows from two tables where a condition is met',
      ],
      quiz: [
        { question: 'What does SELECT * FROM users WHERE age > 18 do?', options: ['Deletes all users over 18', 'Retrieves all columns for users older than 18', 'Updates user ages', 'Counts users over 18'], correct: 1, explanation: 'SELECT retrieves data; * means all columns; WHERE filters rows. This returns all information about users older than 18.' },
        { question: 'What is a primary key?', options: ['The first column', 'A key that unlocks the database', 'A column that uniquely identifies each row', 'The most important data'], correct: 2, explanation: 'Primary keys uniquely identify each record. No two rows can have the same primary key — enforces data integrity.' },
        { question: 'A JOIN in SQL:', options: ['Merges two databases into one', 'Combines rows from multiple tables based on a related column', 'Removes duplicate data', 'Splits a table into two'], correct: 1, explanation: 'JOIN combines rows from two tables where a specified condition (usually matching key) is true — the core operation for multi-table queries.' },
        { question: 'Why are database indexes useful?', options: ['They reduce data size', 'They speed up searches at the cost of additional storage', 'They encrypt the data', 'They join tables automatically'], correct: 1, explanation: 'Indexes (like book indexes) allow the database to find rows quickly without scanning every record. Tradeoff: extra storage and slower inserts.' },
      ],
      xp: 90,
    }],
  },
])

export const csScholar: Curriculum = make('computerscience', 'scholar', [
  {
    id: 'cs-scholar-u1', title: 'Operating Systems', emoji: '💻',
    description: 'Processes, memory management, scheduling and concurrency',
    lessons: [{
      id: 'cs-scholar-u1-l1', title: 'Processes & Scheduling', emoji: '⚙',
      content: 'An OS manages hardware resources for programs. A process is a running program instance with its own memory space. The CPU scheduler decides which process runs when. Common strategies: Round Robin (fair time slices), Priority Scheduling, Shortest Job First. Context switching saves/restores process state when the CPU switches tasks.',
      keyPoints: [
        'Process: running program with own memory, registers, and state',
        'Thread: lightweight unit within a process sharing its memory',
        'Context switch: saving one process state and loading another',
        'Round Robin: each process gets a fixed CPU time slice',
        'Deadlock: two processes each waiting for the other\'s resource',
      ],
      quiz: [
        { question: 'What is a context switch?', options: ['Changing the language of the OS', 'Saving one process\'s state and loading another\'s to multiplex the CPU', 'Switching between programming languages', 'Upgrading the kernel'], correct: 1, explanation: 'Context switching lets the OS multiplex the CPU among many processes — each pause saves process state; each resume restores it.' },
        { question: 'Deadlock occurs when:', options: ['Too many processes run', 'Each of two processes holds a resource the other needs, neither can proceed', 'The CPU overheats', 'Memory is full'], correct: 1, explanation: 'Deadlock: Process A holds resource 1, needs resource 2. Process B holds resource 2, needs resource 1. Neither can proceed.' },
        { question: 'Threads differ from processes because:', options: ['Threads have separate memory spaces', 'Threads share memory with other threads in the same process', 'Threads cannot run in parallel', 'Threads require more memory'], correct: 1, explanation: 'Threads are lightweight — they share the process\'s address space. Processes are isolated from each other.' },
        { question: 'Round Robin scheduling:', options: ['Runs highest-priority process forever', 'Gives each process a fixed time slice in rotation', 'Always runs shortest job first', 'Randomly picks processes'], correct: 1, explanation: 'Round Robin cycles through all ready processes, giving each a fixed time quantum. Fair but may not be optimal for response time.' },
      ],
      xp: 105,
    }],
  },
  {
    id: 'cs-scholar-u2', title: 'Computer Networks', emoji: '🌐',
    description: 'TCP/IP, HTTP, DNS and how the internet works',
    lessons: [{
      id: 'cs-scholar-u2-l1', title: 'How the Internet Works', emoji: '🔗',
      content: 'The internet is a network of networks using the TCP/IP protocol suite. DNS translates domain names to IP addresses. HTTP (application layer) requests web pages. TCP (transport layer) ensures reliable delivery. IP (network layer) routes packets. Each layer adds/strips headers as data moves up/down the stack.',
      keyPoints: [
        'IP address: unique numerical identifier for each device on the internet',
        'DNS: translates human-readable domains (google.com) to IP addresses',
        'TCP: reliable, ordered delivery via connection handshake and acknowledgments',
        'HTTP: application-layer protocol for web page requests/responses',
        'Packets: data split into small chunks, routed independently, reassembled at destination',
      ],
      quiz: [
        { question: 'What does DNS do?', options: ['Sends emails', 'Translates domain names (e.g., google.com) to IP addresses', 'Encrypts data', 'Routes packets between countries'], correct: 1, explanation: 'DNS (Domain Name System) is the internet\'s phone book — it resolves human-readable domain names to numeric IP addresses.' },
        { question: 'TCP ensures reliable delivery by:', options: ['Sending data at constant speed', 'Using connection handshakes and acknowledgments for every packet', 'Encrypting all data', 'Storing copies on multiple servers'], correct: 1, explanation: 'TCP uses three-way handshake, sequencing, and acknowledgments. Lost packets are retransmitted — reliability at the cost of speed.' },
        { question: 'What is a network packet?', options: ['A physical envelope', 'A small chunk of data with header information for routing', 'A website file', 'A DNS record'], correct: 1, explanation: 'Large data is split into packets, each with headers (source IP, destination IP, sequence number). Packets travel independently and are reassembled.' },
        { question: 'HTTPS differs from HTTP because:', options: ['It is faster', 'It uses TLS encryption to secure the connection', 'It doesn\'t use DNS', 'It requires a different browser'], correct: 1, explanation: 'HTTPS = HTTP over TLS. Transport Layer Security encrypts the connection, preventing eavesdropping and tampering.' },
      ],
      xp: 105,
    }],
  },
])

export const csMaster: Curriculum = make('computerscience', 'master', [
  {
    id: 'cs-master-u1', title: 'Machine Learning', emoji: '🤖',
    description: 'Neural networks, gradient descent, and how models learn',
    lessons: [{
      id: 'cs-master-u1-l1', title: 'Neural Networks & Gradient Descent', emoji: '🧠',
      content: 'A neural network is layers of weights applied to inputs. Forward pass: input × weights + bias → activation. Loss measures error. Backpropagation computes the gradient of loss w.r.t. each weight. Gradient descent updates weights by taking steps opposite to the gradient, minimizing loss.',
      keyPoints: [
        'Neural networks: layers of weighted connections between nodes',
        'Activation functions (ReLU, sigmoid) add non-linearity',
        'Loss function measures how wrong the model\'s predictions are',
        'Backpropagation: chain rule to compute gradients of loss w.r.t. weights',
        'Gradient descent: w = w − α·∂L/∂w (α = learning rate)',
      ],
      quiz: [
        { question: 'What does backpropagation compute?', options: ['The forward pass output', 'The gradient of the loss with respect to each weight', 'The number of layers', 'The learning rate'], correct: 1, explanation: 'Backprop uses the chain rule to propagate error gradients backward through the network, computing ∂L/∂w for each weight.' },
        { question: 'Why do neural networks need activation functions?', options: ['To speed computation', 'To add non-linearity (without it, networks can only learn linear functions)', 'To prevent overfitting', 'To initialize weights'], correct: 1, explanation: 'Without non-linear activation functions, stacking linear layers still produces a linear function. Non-linearity enables learning of complex patterns.' },
        { question: 'Gradient descent updates weights by:', options: ['Adding the gradient', 'Moving in the direction of the gradient', 'Moving opposite to the gradient (downhill on loss surface)', 'Randomly changing weights'], correct: 2, explanation: 'We subtract the gradient (times learning rate) from weights. The gradient points uphill on the loss surface; we go downhill to minimize loss.' },
        { question: 'A high learning rate in gradient descent risks:', options: ['Slow convergence', 'Overshooting the minimum and failing to converge', 'Perfect performance', 'Underfitting'], correct: 1, explanation: 'Large learning rate = large steps. Can overshoot the minimum and oscillate or diverge. Small learning rate = slow but stable convergence.' },
      ],
      xp: 125,
    }],
  },
  {
    id: 'cs-master-u2', title: 'Distributed Systems', emoji: '🌐',
    description: 'Consensus, CAP theorem, and building scalable systems',
    lessons: [{
      id: 'cs-master-u2-l1', title: 'CAP Theorem & Consensus', emoji: '⚖',
      content: 'Distributed systems run across multiple nodes. CAP theorem: a distributed system can guarantee at most 2 of 3: Consistency (all nodes see same data), Availability (every request gets a response), Partition Tolerance (system works despite network splits). Real systems (Cassandra, Zookeeper) choose CP or AP. Raft and Paxos are consensus algorithms for agreement among nodes.',
      keyPoints: [
        'CAP theorem: Consistency, Availability, Partition Tolerance — pick at most 2',
        'CP systems (Zookeeper): consistent but may refuse requests during partitions',
        'AP systems (Cassandra, DynamoDB): always respond but may serve stale data',
        'Raft consensus: elects a leader; leader replicates log to followers',
        'Eventual consistency: all replicas converge to same state given enough time',
      ],
      quiz: [
        { question: 'CAP theorem says a distributed system can guarantee at most:', options: ['All three of C, A, P', 'Only one of C, A, P', 'Two of the three: C, A, P', 'None of the above'], correct: 2, explanation: 'CAP theorem (Brewer, 2000): no distributed system can simultaneously guarantee Consistency, Availability, AND Partition Tolerance.' },
        { question: 'Cassandra prioritizes Availability over Consistency. This means:', options: ['It may fail to respond', 'It always responds but may return stale data during partitions', 'It uses strong consistency', 'It never has network partitions'], correct: 1, explanation: 'AP systems like Cassandra always respond to requests, but during a network partition, different nodes may have different data (eventual consistency).' },
        { question: 'What is the purpose of a consensus algorithm like Raft?', options: ['To maximize throughput', 'To ensure all nodes agree on a single value despite failures', 'To encrypt data', 'To route network packets'], correct: 1, explanation: 'Consensus algorithms allow distributed nodes to agree on values (e.g., leader, log entry) even when some nodes fail or messages are lost.' },
        { question: 'Eventual consistency means:', options: ['Data is always consistent', 'Data may be inconsistent temporarily but converges given time and no new updates', 'The system eventually fails', 'Consistency is optional'], correct: 1, explanation: 'Eventual consistency: all replicas will converge to the same value eventually — but in the meantime, reads may see stale data.' },
      ],
      xp: 125,
    }],
  },
])

// ─── ECONOMICS ───────────────────────────────────────────────────────────────

export const economicsBuilder: Curriculum = make('economics', 'builder', [
  {
    id: 'econ-builder-u1', title: 'GDP & Macroeconomics', emoji: '📈',
    description: 'How we measure economic output, growth, and business cycles',
    lessons: [{
      id: 'econ-builder-u1-l1', title: 'GDP and Economic Growth', emoji: '📊',
      content: 'GDP (Gross Domestic Product) is the total market value of all goods and services produced in a country in one year. GDP = C + I + G + (X−M): Consumption + Investment + Government spending + Net Exports. Real GDP adjusts for inflation. GDP per capita measures living standards.',
      keyPoints: [
        'GDP = C + I + G + (X−M) — the expenditure approach',
        'Real GDP adjusts for inflation; nominal GDP does not',
        'GDP growth of 2-3% is considered healthy in developed economies',
        'Recession: two consecutive quarters of negative GDP growth',
        'GDP per capita = GDP ÷ population (measures average living standard)',
      ],
      quiz: [
        { question: 'In GDP = C + I + G + (X−M), what does G represent?', options: ['Gains from trade', 'Government spending', 'Gross investment', 'Global exports'], correct: 1, explanation: 'G = Government spending on goods and services (not transfer payments like Social Security).' },
        { question: 'A recession is officially defined as:', options: ['Unemployment above 10%', 'Two consecutive quarters of negative GDP growth', 'Inflation above 5%', 'GDP below $1 trillion'], correct: 1, explanation: 'The common definition: two consecutive quarters (6 months) of negative real GDP growth.' },
        { question: 'Real GDP differs from nominal GDP because:', options: ['Real GDP excludes government spending', 'Real GDP adjusts for inflation', 'Real GDP uses purchasing power parity', 'Nominal GDP is more accurate'], correct: 1, explanation: 'Real GDP removes the effect of price changes (inflation), allowing comparison of actual output across years.' },
        { question: 'Country A has GDP $1 trillion and 10 million people. GDP per capita is:', options: ['$10,000', '$100,000', '$1,000', '$1 million'], correct: 1, explanation: 'GDP per capita = $1,000,000,000,000 ÷ 10,000,000 = $100,000.' },
      ],
      xp: 75,
    }],
  },
  {
    id: 'econ-builder-u2', title: 'Money & Banking', emoji: '🏦',
    description: 'How money is created, interest rates and central banks',
    lessons: [{
      id: 'econ-builder-u2-l1', title: 'How Banks Create Money', emoji: '💰',
      content: 'Banks create money through fractional reserve lending. When you deposit $1,000, the bank keeps 10% (reserve requirement) and lends $900. That $900 is deposited elsewhere, creating $810 more in loans, and so on. The money multiplier = 1/reserve ratio. Central banks (Fed, ECB) control money supply via interest rates and reserve requirements.',
      keyPoints: [
        'Fractional reserve banking: banks lend out most deposits, keeping only a fraction',
        'Money multiplier = 1 / reserve ratio',
        'With 10% reserve: $1,000 deposit → up to $10,000 in total money created',
        'Central bank sets the base interest rate, influencing all other rates',
        'Quantitative easing (QE): central bank buys assets to inject money into economy',
      ],
      quiz: [
        { question: 'With a 10% reserve requirement, $1,000 deposited creates how much money?', options: ['$1,000', '$10,000', '$100', '$1,100'], correct: 1, explanation: 'Money multiplier = 1/0.1 = 10. So $1,000 × 10 = $10,000 total money created through the banking system.' },
        { question: 'A central bank raises interest rates to:', options: ['Stimulate borrowing', 'Combat inflation by making borrowing more expensive', 'Increase unemployment', 'Reduce the money supply through QE'], correct: 1, explanation: 'Higher rates make borrowing costlier → less spending and investment → reduced demand → lower inflation.' },
        { question: 'Fractional reserve banking means:', options: ['Banks have 100% reserves', 'Banks only keep a fraction of deposits as reserves and lend the rest', 'Only fractions of deposits are insured', 'Banks use gold reserves'], correct: 1, explanation: 'Banks keep only a required fraction (e.g., 10%) of deposits as reserves and lend out the remainder — creating money in the process.' },
        { question: 'What is quantitative easing (QE)?', options: ['Reducing the money supply', 'Central bank buying assets to inject money into the economy', 'Increasing reserve requirements', 'Devaluing currency'], correct: 1, explanation: 'QE: the central bank buys bonds/assets, paying with newly created money. This injects liquidity when interest rates are near zero.' },
      ],
      xp: 75,
    }],
  },
])

export const economicsExplorer: Curriculum = make('economics', 'explorer', [
  {
    id: 'econ-explorer-u1', title: 'Game Theory', emoji: '♟',
    description: 'Strategic decision-making, Nash equilibrium, and the Prisoner\'s Dilemma',
    lessons: [{
      id: 'econ-explorer-u1-l1', title: 'Nash Equilibrium & Prisoner\'s Dilemma', emoji: '🤝',
      content: 'Game theory analyzes strategic interactions. A Nash equilibrium is a state where no player can improve their outcome by changing their strategy alone. The Prisoner\'s Dilemma: two rational actors choose to defect even though mutual cooperation yields better outcomes — explaining why cooperation breaks down.',
      keyPoints: [
        'Nash equilibrium: no player can improve by unilaterally changing their strategy',
        'Prisoner\'s Dilemma: rational self-interest leads to worse collective outcomes',
        'Dominant strategy: best regardless of what others do',
        'Repeated games: cooperation can emerge through tit-for-tat strategies',
        'Applications: oligopoly pricing, arms races, international agreements',
      ],
      quiz: [
        { question: 'In the Prisoner\'s Dilemma, both prisoners defect because:', options: ['They hate each other', 'Defection is a dominant strategy — better regardless of what the other does', 'They cannot communicate', 'Cooperation is illegal'], correct: 1, explanation: 'Defection dominates: if the other cooperates, defecting gives you more. If the other defects, defecting is still better. So both defect, reaching a mutually worse outcome.' },
        { question: 'A Nash equilibrium is:', options: ['The best possible outcome for all players', 'A state where no player can improve by unilaterally changing their strategy', 'Always socially optimal', 'The outcome if players cooperate'], correct: 1, explanation: 'Nash equilibrium (named after John Nash): a stable state where no individual player has an incentive to deviate given others\' strategies.' },
        { question: 'Tit-for-tat in repeated games works by:', options: ['Always defecting', 'Always cooperating', 'Cooperating first, then copying the opponent\'s previous move', 'Randomly choosing'], correct: 2, explanation: 'Tit-for-tat: start cooperative, then mirror the other player\'s last action. It\'s forgiving enough to enable cooperation but punishes defection immediately.' },
        { question: 'An arms race between nations is an example of:', options: ['Nash equilibrium and Prisoner\'s Dilemma', 'Pure cooperation', 'A zero-sum game only', 'Perfect competition'], correct: 0, explanation: 'Both nations arm even though both would prefer mutual disarmament (Prisoner\'s Dilemma). Each nation\'s dominant strategy is to arm (Nash equilibrium).' },
      ],
      xp: 90,
    }],
  },
  {
    id: 'econ-explorer-u2', title: 'International Trade', emoji: '🌍',
    description: 'Comparative advantage, trade policy, and globalization',
    lessons: [{
      id: 'econ-explorer-u2-l1', title: 'Comparative Advantage', emoji: '⚖',
      content: 'David Ricardo\'s comparative advantage: a country should produce goods it can make at lowest relative opportunity cost, even if another country is better at everything absolutely. Trade allows specialization and higher total output. Protectionism (tariffs, quotas) protects industries but reduces overall efficiency.',
      keyPoints: [
        'Comparative advantage: produce what you can make at lowest opportunity cost',
        'Even if one country is better at everything, trade is still mutually beneficial',
        'Specialization increases total global production',
        'Tariffs raise prices for domestic consumers; protect domestic producers',
        'Free trade increases efficiency but creates distributional concerns (winners and losers)',
      ],
      quiz: [
        { question: 'Country A can make both cars and wheat more efficiently than B. Should they trade?', options: ['No — A is better at both', 'Yes — comparative advantage still makes trade beneficial', 'Only if exchange rates are right', 'Only if populations are equal'], correct: 1, explanation: 'Absolute advantage is irrelevant. If A has lower opportunity cost in cars than wheat, A should specialize in cars and trade — both benefit.' },
        { question: 'A tariff on imported steel:', options: ['Lowers prices for consumers', 'Raises prices for domestic consumers and protects domestic steel producers', 'Eliminates domestic steel production', 'Increases imports'], correct: 1, explanation: 'Tariffs = import taxes. They raise the price of foreign goods, making domestic alternatives competitive. Consumers pay more; domestic producers gain.' },
        { question: 'Comparative advantage is based on:', options: ['Absolute productivity differences', 'Opportunity costs — what you give up to produce one good over another', 'Currency exchange rates', 'Labor force size'], correct: 1, explanation: 'Comparative advantage is about relative opportunity costs, not absolute productivity. Even a less productive country has a comparative advantage in something.' },
        { question: 'A main critique of free trade is:', options: ['It reduces total output', 'Gains are unevenly distributed — some workers/industries lose even as total welfare increases', 'It always causes inflation', 'It reduces government revenue'], correct: 1, explanation: 'Free trade increases aggregate efficiency but creates losers (industries that can\'t compete). Distribution of gains requires political management.' },
      ],
      xp: 90,
    }],
  },
])

export const economicsScholar: Curriculum = make('economics', 'scholar', [
  {
    id: 'econ-scholar-u1', title: 'Monetary Policy', emoji: '🏛',
    description: 'How central banks control inflation, growth, and employment',
    lessons: [{
      id: 'econ-scholar-u1-l1', title: 'Inflation, Interest Rates & the Taylor Rule', emoji: '📉',
      content: 'Central banks target inflation (~2%) by adjusting interest rates. The Taylor Rule: interest rate = 2% + current inflation + 0.5(inflation − target) + 0.5(output gap). When inflation exceeds target, rates rise. The Fisher effect: nominal rate = real rate + expected inflation. Zero lower bound: rates cannot go below ~0%.',
      keyPoints: [
        'Inflation target: 2% (Fed, ECB) — price stability with room for adjustment',
        'Taylor Rule: systematic framework for setting interest rates',
        'Higher rates → reduce spending → reduce inflation (but slow growth)',
        'Fisher effect: nominal rate = real rate + expected inflation',
        'Zero lower bound: rates near 0% reduce conventional monetary policy tools',
      ],
      quiz: [
        { question: 'If inflation is 4% and the target is 2%, the Taylor Rule suggests:', options: ['Lower interest rates', 'Keep rates unchanged', 'Raise interest rates', 'Print more money'], correct: 2, explanation: 'Taylor Rule: inflation above target → raise rates to cool spending and reduce price pressure.' },
        { question: 'The Fisher effect states that:', options: ['Higher inflation causes lower rates', 'Nominal interest rate = real rate + expected inflation', 'Inflation reduces real wages always', 'Rates and inflation are unrelated'], correct: 1, explanation: 'If expected inflation is 3% and you need a 1% real return, you charge 4% nominal. The Fisher effect connects nominal rates, real rates, and inflation.' },
        { question: 'The zero lower bound problem means:', options: ['Inflation cannot go below zero', 'Rates cannot easily go below 0%, limiting conventional monetary stimulus', 'Banks cannot lend below zero percent', 'GDP growth reaches zero'], correct: 1, explanation: 'With rates near 0%, traditional rate cuts are no longer possible. Central banks must resort to unconventional tools like QE.' },
        { question: 'Central banks primarily combat inflation by:', options: ['Printing more money', 'Raising interest rates to reduce borrowing and spending', 'Cutting taxes', 'Increasing government spending'], correct: 1, explanation: 'Higher rates make borrowing expensive → less credit → less spending → lower demand → reduced inflation.' },
      ],
      xp: 105,
    }],
  },
  {
    id: 'econ-scholar-u2', title: 'Behavioral Economics', emoji: '🧠',
    description: 'How psychological biases systematically affect economic decisions',
    lessons: [{
      id: 'econ-scholar-u2-l1', title: 'Biases, Heuristics & Nudges', emoji: '🎯',
      content: 'Behavioral economics (Kahneman, Thaler) shows humans are predictably irrational. Loss aversion: losses hurt ~2× more than equivalent gains feel good. Anchoring: first numbers seen bias all subsequent judgments. Nudges: changing choice architecture to guide better decisions without restricting freedom.',
      keyPoints: [
        'Homo economicus is a myth: real humans use heuristics, not perfect rationality',
        'Loss aversion: losing $100 hurts ~2× more than gaining $100 feels good',
        'Anchoring: initial number seen biases all subsequent estimates',
        'Present bias: we overweight immediate rewards vs. future benefits',
        'Nudges: opt-in vs. opt-out defaults dramatically change participation rates',
      ],
      quiz: [
        { question: 'Loss aversion means:', options: ['People avoid all losses', 'Losses feel roughly twice as painful as equivalent gains feel good', 'People always take risks', 'Gains are more motivating than losses'], correct: 1, explanation: 'Kahneman & Tversky found the emotional weight of a loss is about twice the weight of an equivalent gain — explaining risk aversion.' },
        { question: 'Pension enrollment jumped from 49% to 86% just by changing from opt-in to opt-out. This is:', options: ['Compulsion', 'A tax', 'A nudge using default bias', 'Advertising'], correct: 2, explanation: 'Thaler\'s nudge theory: the default option is disproportionately chosen. Opt-out enrollment exploits status quo bias to increase savings without mandates.' },
        { question: 'Anchoring occurs when:', options: ['We always round to round numbers', 'An initial number seen biases subsequent judgments even when irrelevant', 'Prices are fixed by government', 'We anchor our decisions in facts'], correct: 1, explanation: 'If you first see a price of $500, you anchor to it. Then $300 seems cheap even if the item\'s true value is $50.' },
        { question: 'Present bias explains why people:', options: ['Always plan for the future', 'Prefer $100 today over $150 in a month even when they\'d reverse this choice in a month', 'Avoid immediate gratification', 'Make rational intertemporal choices'], correct: 1, explanation: 'Present bias: we overweight the present compared to the future. People choose immediate rewards even when they\'d prefer the later reward from a distance.' },
      ],
      xp: 110,
    }],
  },
])

export const economicsMaster: Curriculum = make('economics', 'master', [
  {
    id: 'econ-master-u1', title: 'General Equilibrium', emoji: '⚖',
    description: 'Walrasian equilibrium, Pareto efficiency, and market failures',
    lessons: [{
      id: 'econ-master-u1-l1', title: 'Pareto Efficiency & Market Failures', emoji: '📐',
      content: 'General equilibrium: all markets clear simultaneously. Pareto efficiency: no one can be made better off without making someone worse off. The First Welfare Theorem: competitive equilibria are Pareto efficient. But externalities, public goods, information asymmetries, and monopolies create market failures requiring intervention.',
      keyPoints: [
        'Pareto efficient: no reallocation can make someone better off without harming another',
        'First Welfare Theorem: perfectly competitive markets → Pareto efficient outcome',
        'Externalities: costs/benefits not reflected in market prices (pollution = negative externality)',
        'Public goods: non-excludable and non-rival — markets underprovide them',
        'Asymmetric information: Akerlof\'s lemons problem — markets can fail when buyers/sellers have different information',
      ],
      quiz: [
        { question: 'A Pareto efficient allocation means:', options: ['Everyone is equally wealthy', 'Maximum total output', 'No one can be made better off without making someone else worse off', 'Prices equal marginal cost'], correct: 2, explanation: 'Pareto efficiency: the economy is on its production/utility possibility frontier — no waste, no Pareto-improving reallocation exists.' },
        { question: 'The First Welfare Theorem states:', options: ['Government intervention always improves welfare', 'Competitive markets always achieve Pareto efficiency under ideal conditions', 'Monopolies are more efficient', 'Free trade reduces welfare'], correct: 1, explanation: 'Under ideal conditions (no externalities, no public goods, perfect information), competitive markets allocate resources Pareto efficiently.' },
        { question: 'Pollution is a negative externality because:', options: ['It reduces GDP', 'Its costs fall on society but are not paid by the producer — market overproduces', 'Firms don\'t know they cause it', 'It violates property rights'], correct: 1, explanation: 'Externalities are costs/benefits not captured in market prices. Pollution costs (health, environment) aren\'t paid by the polluter → overproduction relative to social optimum.' },
        { question: 'Akerlof\'s "market for lemons" shows asymmetric information can cause:', options: ['Market efficiency', 'Market collapse — good cars driven out by bad ones due to information asymmetry', 'Higher prices', 'More competition'], correct: 1, explanation: 'Buyers can\'t tell good from bad cars. They offer average price. Owners of good cars withdraw; market fills with "lemons." Adverse selection collapses quality.' },
      ],
      xp: 125,
    }],
  },
  {
    id: 'econ-master-u2', title: 'Econometrics', emoji: '📉',
    description: 'Causal inference, regression, instrumental variables and natural experiments',
    lessons: [{
      id: 'econ-master-u2-l1', title: 'Causal Inference', emoji: '🔬',
      content: 'Econometrics measures economic relationships. Ordinary Least Squares (OLS) estimates linear relationships. The fundamental problem of causal inference: we observe only one potential outcome. Randomized controlled trials (RCTs) are the gold standard. Instrumental variables (IV) find exogenous variation when RCTs are impossible. Difference-in-differences compares treated vs. control groups before and after treatment.',
      keyPoints: [
        'Correlation ≠ causation — omitted variable bias is the core challenge',
        'RCT (randomized control trial): randomly assign treatment — the gold standard',
        'Instrumental variable (IV): exogenous variable that affects treatment but not outcome directly',
        'Difference-in-differences: (treated post − pre) − (control post − pre)',
        'Regression discontinuity: compare units just above/below a threshold',
      ],
      quiz: [
        { question: 'Why can\'t OLS regression alone establish causation?', options: ['It uses wrong math', 'Omitted variable bias — unmeasured third variables may explain the correlation', 'It only works for large samples', 'OLS is too simple'], correct: 1, explanation: 'OLS measures correlation. Without controlling for all confounders, or using a causal design, correlation may be driven by omitted variables.' },
        { question: 'An instrumental variable must be:', options: ['Correlated with the outcome but not the treatment', 'Correlated with treatment but affect the outcome only through treatment (exclusion restriction)', 'Always a natural experiment', 'A dummy variable'], correct: 1, explanation: 'IV: relevance (correlated with treatment) + exclusion restriction (affects outcome only through treatment). This isolates exogenous variation.' },
        { question: 'Difference-in-differences estimates the treatment effect by:', options: ['Comparing treated vs. control after treatment only', 'Comparing pre-post change in treated group vs. pre-post change in control group', 'Running OLS with treatment dummy', 'Using instrumental variables'], correct: 1, explanation: 'DiD: (Treated_post − Treated_pre) − (Control_post − Control_pre). The control group accounts for time trends, isolating the treatment effect.' },
        { question: 'Why are RCTs considered the gold standard for causal inference?', options: ['They are cheapest', 'Random assignment ensures treated and control groups are comparable on all confounders', 'They use the largest samples', 'They are easiest to implement'], correct: 1, explanation: 'Randomization balances all observed AND unobserved confounders between groups, allowing clean attribution of outcome differences to treatment.' },
      ],
      xp: 125,
    }],
  },
])

// ─── PSYCHOLOGY ──────────────────────────────────────────────────────────────

export const psychologyBuilder: Curriculum = make('psychology', 'builder', [
  {
    id: 'psych-builder-u1', title: 'Memory & Learning', emoji: '💭',
    description: 'How we form, store, and retrieve memories',
    lessons: [{
      id: 'psych-builder-u1-l1', title: 'Types of Memory', emoji: '🧩',
      content: 'Memory is not a single system. Sensory memory holds information for milliseconds. Short-term (working) memory holds ~7±2 items for ~20 seconds. Long-term memory is potentially unlimited and permanent: procedural (how to ride a bike), semantic (facts), episodic (personal events). Encoding, storage, and retrieval are the three stages.',
      keyPoints: [
        'Sensory memory: milliseconds; filters what enters working memory',
        'Working memory: ~7±2 items, ~20 seconds duration (Miller\'s Law)',
        'Long-term memory: procedural (skills), semantic (facts), episodic (experiences)',
        'Elaborative encoding: connecting new info to existing knowledge improves retention',
        'Retrieval cues: context, mood, and associated information help recall',
      ],
      quiz: [
        { question: 'Miller\'s Law states working memory holds approximately:', options: ['3 items', '7 ± 2 items', '20 items', '100 items'], correct: 1, explanation: 'Miller (1956): working memory holds 7 ± 2 "chunks" of information. Phone numbers and other important sequences are designed around this limit.' },
        { question: 'Procedural memory stores:', options: ['Facts and concepts', 'Personal life events', 'Skills and how-to knowledge (riding a bike)', 'Language vocabulary'], correct: 2, explanation: 'Procedural memory: implicit "how to" knowledge — motor skills, habits. It is remarkably resistant to forgetting (you never forget how to ride a bike).' },
        { question: 'Elaborative encoding works because:', options: ['Repetition alone', 'Making meaningful connections to existing knowledge deepens processing and retention', 'It uses more brain regions', 'It is faster'], correct: 1, explanation: 'Deep processing (connecting new info to existing schemas, generating examples) creates stronger, more retrievable memory traces than rote repetition.' },
        { question: 'Episodic memory stores:', options: ['General facts about the world', 'Personal experienced events with context (what, where, when)', 'Motor skills', 'Language rules'], correct: 1, explanation: 'Episodic memory is autobiographical — your personal experiences with spatio-temporal context: "I had breakfast at 8am in the kitchen."' },
      ],
      xp: 75,
    }],
  },
  {
    id: 'psych-builder-u2', title: 'Motivation & Emotion', emoji: '❤',
    description: 'What drives human behavior: needs, goals, and emotions',
    lessons: [{
      id: 'psych-builder-u2-l1', title: 'Maslow\'s Hierarchy & Intrinsic Motivation', emoji: '🏔',
      content: 'Maslow\'s hierarchy: physiological → safety → love/belonging → esteem → self-actualization. Higher needs emerge only when lower ones are satisfied. Intrinsic motivation (doing something for its own sake) drives deeper engagement than extrinsic (external rewards). Over-rewarding intrinsic activities can undermine them (overjustification effect).',
      keyPoints: [
        'Maslow\'s hierarchy: basic needs must be met before higher needs emerge',
        'Intrinsic motivation: driven by interest, enjoyment, curiosity — more durable',
        'Extrinsic motivation: driven by rewards, grades, money — less durable for complex tasks',
        'Overjustification effect: external rewards can reduce intrinsic motivation',
        'Self-determination theory: autonomy, competence, relatedness → intrinsic motivation',
      ],
      quiz: [
        { question: 'According to Maslow, which need must be satisfied first?', options: ['Self-actualization', 'Esteem', 'Physiological (food, water, shelter)', 'Belonging'], correct: 2, explanation: 'Maslow\'s hierarchy: physiological needs (survival basics) are the foundation. You cannot focus on belonging or esteem when starving.' },
        { question: 'The overjustification effect occurs when:', options: ['Rewards are too small', 'Offering external rewards for an intrinsically enjoyable activity reduces intrinsic motivation', 'Tasks are too hard', 'People receive no feedback'], correct: 1, explanation: 'If you pay someone to do what they loved doing freely, they may start viewing it as "work" and lose intrinsic motivation when rewards stop.' },
        { question: 'Self-determination theory identifies three core psychological needs:', options: ['Achievement, power, affiliation', 'Autonomy, competence, relatedness', 'Food, shelter, love', 'Money, status, health'], correct: 1, explanation: 'SDT (Deci & Ryan): autonomy (choice), competence (mastery), relatedness (connection) are the three universal needs that fuel intrinsic motivation.' },
        { question: 'Which type of motivation leads to more creative and long-lasting behavior?', options: ['Extrinsic rewards', 'Intrinsic motivation', 'Fear of punishment', 'Social pressure'], correct: 1, explanation: 'Research consistently shows intrinsic motivation produces higher quality work, greater creativity, and more persistent effort than external rewards.' },
      ],
      xp: 75,
    }],
  },
])

export const psychologyExplorer: Curriculum = make('psychology', 'explorer', [
  {
    id: 'psych-explorer-u1', title: 'Social Psychology', emoji: '👥',
    description: 'How social context shapes behavior: conformity, obedience, and attribution',
    lessons: [{
      id: 'psych-explorer-u1-l1', title: 'Conformity & Obedience', emoji: '🐑',
      content: 'Asch\'s conformity experiments: 75% of participants conformed to obviously wrong group answers at least once. Milgram\'s obedience study: 65% of participants administered what they thought were potentially lethal shocks when ordered by an authority figure. Situational power vastly exceeds what we predict based on character alone.',
      keyPoints: [
        'Asch conformity: people deny clear evidence to match group consensus',
        'Milgram obedience: authority figures can induce harmful compliance',
        'Fundamental Attribution Error: overestimating personality, underestimating situation',
        'Social facilitation: presence of others improves performance on easy tasks',
        'Group polarization: group discussion makes initial opinions more extreme',
      ],
      quiz: [
        { question: 'In Asch\'s experiment, participants conformed because:', options: ['They couldn\'t see clearly', 'Social pressure to match the group — informational and normative influence', 'They agreed with the group', 'The task was too hard'], correct: 1, explanation: 'Asch showed people deny clear perceptual evidence to avoid social rejection (normative influence) or because they doubt their own judgment (informational influence).' },
        { question: 'Milgram\'s study found that obedience increased when:', options: ['The victim was visible and close', 'The authority figure was distant', 'The authority figure was physically present and legitimate', 'Participants worked in groups'], correct: 2, explanation: 'Obedience was highest when the experimenter was present in the room. When experimenter moved away or gave instructions by phone, compliance dropped dramatically.' },
        { question: 'The Fundamental Attribution Error is the tendency to:', options: ['Attribute failures to luck', 'Overestimate situational factors and underestimate personality', 'Overestimate personality factors and underestimate situational influences', 'Attribute success to others'], correct: 2, explanation: 'We see others\' behavior and attribute it to their character, ignoring situational pressures. We do the opposite for ourselves (self-serving bias).' },
        { question: 'Group polarization means that after group discussion:', options: ['Opinions become more moderate', 'People change their views to match the majority', 'Initial views become more extreme', 'All members agree on one view'], correct: 2, explanation: 'Group discussion shifts members\' views further in the direction they already leaned. Initially cautious groups become more cautious; initially risky groups take more risk.' },
      ],
      xp: 90,
    }],
  },
  {
    id: 'psych-explorer-u2', title: 'Developmental Psychology', emoji: '👶',
    description: 'Piaget\'s stages, attachment theory and lifespan development',
    lessons: [{
      id: 'psych-explorer-u2-l1', title: 'Piaget & Attachment', emoji: '🌱',
      content: 'Piaget\'s stages: sensorimotor (0-2, object permanence), preoperational (2-7, symbolic thought, egocentrism), concrete operational (7-11, logical operations), formal operational (12+, abstract reasoning). Bowlby\'s attachment theory: early caregiver bonds shape lifelong relationship patterns. Ainsworth identified secure, anxious, and avoidant attachment styles.',
      keyPoints: [
        'Sensorimotor (0-2): learning through senses and motor action; object permanence',
        'Preoperational (2-7): language, symbolic play, but egocentric',
        'Concrete operational (7-11): logical thinking about concrete objects; conservation',
        'Formal operational (12+): abstract and hypothetical reasoning',
        'Attachment styles (Ainsworth): secure, anxious-ambivalent, avoidant',
      ],
      quiz: [
        { question: 'Object permanence develops in which Piagetian stage?', options: ['Preoperational', 'Sensorimotor', 'Concrete operational', 'Formal operational'], correct: 1, explanation: 'Object permanence — understanding that objects exist even when not visible — develops during the sensorimotor stage (~8-12 months).' },
        { question: 'Egocentrism in the preoperational stage means children:', options: ['Are selfish', 'Cannot physically see from another\'s location', 'Cannot take another person\'s cognitive perspective', 'Refuse to share toys'], correct: 2, explanation: 'Piagetian egocentrism: young children cannot mentally represent another person\'s perspective, viewpoint, or knowledge state (not selfishness).' },
        { question: 'Secure attachment in infancy is associated with:', options: ['No emotional bonds', 'Later anxiety and avoidance', 'Confidence in exploration with caregiver as safe base', 'Dependency and clingyness as an adult'], correct: 2, explanation: 'Securely attached infants explore confidently knowing the caregiver is a reliable "safe base." This predicts positive social and emotional outcomes.' },
        { question: 'Abstract and hypothetical reasoning develops in which stage?', options: ['Sensorimotor', 'Preoperational', 'Concrete operational', 'Formal operational'], correct: 3, explanation: 'Formal operational stage (12+): adolescents develop the ability to reason about hypothetical situations, abstract concepts, and systematic logic.' },
      ],
      xp: 90,
    }],
  },
])

export const psychologyScholar: Curriculum = make('psychology', 'scholar', [
  {
    id: 'psych-scholar-u1', title: 'Cognitive Psychology', emoji: '🧩',
    description: 'Mental processes: attention, decision-making, and cognitive biases',
    lessons: [{
      id: 'psych-scholar-u1-l1', title: 'Dual Process Theory', emoji: '⚡',
      content: 'Kahneman\'s Dual Process Theory: System 1 (fast, automatic, emotional, heuristic) vs System 2 (slow, deliberate, logical, effortful). Most decisions are driven by System 1. Cognitive biases arise from System 1 shortcuts. Confirmation bias, availability heuristic, and representativeness heuristic are major sources of error.',
      keyPoints: [
        'System 1: fast, automatic, intuitive — runs constantly with no effort',
        'System 2: slow, deliberate, logical — requires effort and can be overwhelmed',
        'Availability heuristic: we judge probability by how easily examples come to mind',
        'Confirmation bias: we seek and remember information confirming existing beliefs',
        'Representativeness heuristic: judging probability by similarity to a prototype',
      ],
      quiz: [
        { question: 'System 1 thinking is characterized by:', options: ['Slow, deliberate analysis', 'Fast, automatic, effortless processing', 'High accuracy on complex problems', 'Logical step-by-step reasoning'], correct: 1, explanation: 'System 1 (Kahneman): automatic, fast, associative, runs constantly. Drives most everyday decisions. Prone to biases and heuristics.' },
        { question: 'Confirmation bias causes people to:', options: ['Seek all relevant evidence', 'Selectively seek and remember information that confirms existing beliefs', 'Change their minds easily', 'Distrust their own judgments'], correct: 1, explanation: 'Confirmation bias: we notice, remember, and prefer information that confirms what we already believe, while discounting contradictory evidence.' },
        { question: 'The availability heuristic judges probability by:', options: ['Statistical data', 'How easily examples come to mind', 'How representative a case seems', 'Expert consensus'], correct: 1, explanation: 'Availability heuristic: we estimate frequency/probability by how easily we recall examples. Dramatic events (plane crashes) are overestimated; mundane risks underestimated.' },
        { question: 'Why is System 2 often "lazy"?', options: ['It is less accurate', 'It has limited capacity and is effortful — people avoid using it when not necessary', 'It is evolutionarily older', 'It cannot handle emotions'], correct: 1, explanation: 'System 2 requires mental effort and is capacity-limited. People default to System 1 to conserve cognitive resources — "cognitive ease."' },
      ],
      xp: 105,
    }],
  },
  {
    id: 'psych-scholar-u2', title: 'Abnormal Psychology', emoji: '🌀',
    description: 'Major psychological disorders: depression, anxiety, psychosis and trauma',
    lessons: [{
      id: 'psych-scholar-u2-l1', title: 'Depression & Anxiety Disorders', emoji: '🧠',
      content: 'Major depressive disorder (MDD): pervasive low mood, anhedonia, cognitive distortions, for ≥2 weeks. Cognitive model (Beck): negative automatic thoughts → negative cognitive triad (self, world, future). Anxiety disorders: chronic excessive worry, panic attacks, phobias. CBT (Cognitive Behavioral Therapy) is the most evidence-based treatment for both.',
      keyPoints: [
        'MDD: persistent low mood + anhedonia + cognitive/somatic symptoms ≥2 weeks',
        'Beck\'s cognitive triad: negative view of self, world, and future',
        'Anxiety disorders involve excessive, persistent fear disproportionate to actual threat',
        'CBT: challenges negative thought patterns and maladaptive behaviors',
        'Biological factors: serotonin, norepinephrine, HPA axis dysregulation in both disorders',
      ],
      quiz: [
        { question: 'Beck\'s cognitive triad in depression involves negative views of:', options: ['Past, present, future', 'Self, world, and future', 'Parents, peers, culture', 'Sleep, appetite, concentration'], correct: 1, explanation: 'Beck\'s model: depression is maintained by a triad of negative automatic thoughts about oneself, the world, and the future.' },
        { question: 'CBT for depression primarily works by:', options: ['Uncovering childhood trauma', 'Prescribing medication', 'Identifying and challenging negative automatic thoughts and maladaptive behaviors', 'Improving social support'], correct: 2, explanation: 'CBT: therapist helps client identify negative thought patterns, test their accuracy, and replace them with more realistic thoughts — plus behavioral activation.' },
        { question: 'Anhedonia in depression refers to:', options: ['Intense anxiety', 'Inability to feel pleasure in previously enjoyable activities', 'Memory loss', 'Excessive sleeping'], correct: 1, explanation: 'Anhedonia is a core symptom of MDD: the loss of interest or pleasure in activities once enjoyed — reflecting decreased reward system activity.' },
        { question: 'Which nervous system branch is overactive in anxiety disorders?', options: ['Parasympathetic', 'Central only', 'Sympathetic (fight-or-flight)', 'Enteric'], correct: 2, explanation: 'Anxiety activates the sympathetic nervous system chronically: elevated cortisol, heart rate, muscle tension — a fight-or-flight response stuck in "on."' },
      ],
      xp: 110,
    }],
  },
])

export const psychologyMaster: Curriculum = make('psychology', 'master', [
  {
    id: 'psych-master-u1', title: 'Neuroscience of Behavior', emoji: '⚡',
    description: 'Neurotransmitters, reward circuits, stress systems and brain disorders',
    lessons: [{
      id: 'psych-master-u1-l1', title: 'Reward, Dopamine & Addiction', emoji: '🎯',
      content: 'The mesolimbic dopamine system (ventral tegmental area → nucleus accumbens) drives motivation and reward. Dopamine signals prediction errors — the difference between expected and actual reward. Addictive substances hijack this system: opioids activate reward directly, stimulants flood the synapse with dopamine. Over time: tolerance (less effect), sensitization (cue reactivity), and negative reinforcement maintain addiction.',
      keyPoints: [
        'Mesolimbic pathway: VTA → nucleus accumbens — core of reward and motivation',
        'Dopamine signals prediction errors, not pleasure itself',
        'Addiction: drug hijacks reward circuit, downregulates D2 receptors (tolerance)',
        'Sensitization: cue-triggered craving becomes stronger even as drug pleasure diminishes',
        'DeltaFosB accumulation in nucleus accumbens: molecular basis of addiction',
      ],
      quiz: [
        { question: 'Dopamine primarily signals:', options: ['Pleasure directly', 'Pain', 'Reward prediction error (unexpected reward, not reward itself)', 'Memory storage'], correct: 2, explanation: 'Dopamine encodes prediction error: fires when reward is better than expected, suppresses when worse. It drives learning and motivation, not pleasure per se.' },
        { question: 'Tolerance to addictive drugs develops because:', options: ['The drug becomes less available', 'Repeated activation downregulates receptors, requiring more drug for same effect', 'The drug changes its chemistry', 'The brain learns to process it faster'], correct: 1, explanation: 'Chronic overstimulation of reward circuits leads to downregulation of receptors and reduced sensitivity — requiring increasingly higher doses.' },
        { question: 'The mesolimbic pathway runs from:', options: ['Hippocampus to cortex', 'Amygdala to hypothalamus', 'VTA to nucleus accumbens', 'Locus coeruleus to prefrontal cortex'], correct: 2, explanation: 'VTA (ventral tegmental area) → nucleus accumbens: the core reward circuit. This pathway is the primary target of addictive drugs.' },
        { question: 'Sensitization in addiction means:', options: ['The user needs less drug over time', 'Cue-triggered craving intensifies even as drug pleasure decreases', 'Withdrawal symptoms disappear', 'Tolerance increases linearly'], correct: 1, explanation: 'Drug cues (a syringe, a bar) become strongly conditioned stimuli that trigger craving. This sensitized response persists for years after abstinence.' },
      ],
      xp: 125,
    }],
  },
  {
    id: 'psych-master-u2', title: 'Psychotherapy Research', emoji: '🧪',
    description: 'Evidence-based treatments, efficacy research and meta-analysis',
    lessons: [{
      id: 'psych-master-u2-l1', title: 'What Works in Therapy', emoji: '📊',
      content: 'Meta-analyses (thousands of RCTs) show psychotherapy is effective: effect size ~0.8 (large). CBT is the most evidence-based for anxiety/depression. DBT for borderline personality. EMDR for PTSD. The "Dodo Bird Verdict": common factors (therapeutic alliance, empathy, expectations) explain more variance than specific techniques.',
      keyPoints: [
        'Psychotherapy efficacy: meta-analytic effect size ~0.8 (large) vs. control',
        'CBT: strongest evidence base for anxiety and depressive disorders',
        'DBT (Dialectical Behavior Therapy): developed for BPD; effective for emotion dysregulation',
        'EMDR: evidence-based for PTSD (mechanism debated)',
        'Dodo Bird Verdict: common factors (alliance, empathy) may matter more than specific techniques',
      ],
      quiz: [
        { question: 'The "Dodo Bird Verdict" in psychotherapy research refers to:', options: ['Therapy doesn\'t work', 'All evidence-based therapies are equally ineffective', 'Common therapeutic factors may account for more variance than specific techniques', 'CBT is always best'], correct: 2, explanation: 'Named after Alice in Wonderland: "All have won and all must have prizes." The therapeutic alliance and common factors may matter as much as specific protocols.' },
        { question: 'DBT was developed primarily for:', options: ['Major depression', 'Schizophrenia', 'Borderline personality disorder', 'PTSD'], correct: 2, explanation: 'Marsha Linehan developed Dialectical Behavior Therapy for BPD, focusing on distress tolerance, emotional regulation, mindfulness, and interpersonal effectiveness.' },
        { question: 'An effect size of 0.8 for psychotherapy means:', options: ['It works 80% of the time', 'The average treated person does better than 79% of untreated controls', 'Effect lasts 8 months', 'Only 8% of clients improve'], correct: 1, explanation: 'Cohen\'s d = 0.8 (large): the average treated person scores 0.8 SD above the control mean — better than ~79% of untreated people.' },
        { question: 'EMDR is considered evidence-based primarily for:', options: ['Phobias', 'Schizophrenia', 'Depression', 'PTSD'], correct: 3, explanation: 'EMDR (Eye Movement Desensitization and Reprocessing) has strong RCT evidence for PTSD, endorsed by WHO and APA, though the role of eye movements is debated.' },
      ],
      xp: 125,
    }],
  },
])

// ─── QUANTUM PHYSICS ──────────────────────────────────────────────────────────

export const quantumBuilder: Curriculum = make('quantumphysics', 'builder', [
  {
    id: 'qp-builder-u1', title: 'Heisenberg Uncertainty Principle', emoji: '❓',
    description: 'Why you can\'t know position and momentum simultaneously',
    lessons: [{
      id: 'qp-builder-u1-l1', title: 'Uncertainty Is Fundamental', emoji: '🎲',
      content: 'Heisenberg\'s Uncertainty Principle: Δx·Δp ≥ ℏ/2. You cannot simultaneously know a particle\'s position and momentum with arbitrary precision — not a measurement limitation but a fundamental feature of nature. The more precisely you know position, the less you can know momentum, and vice versa.',
      keyPoints: [
        'Δx·Δp ≥ ℏ/2 — position-momentum uncertainty',
        'This is NOT a measurement limitation — it\'s fundamental to nature',
        'Energy-time uncertainty: ΔE·Δt ≥ ℏ/2',
        'Virtual particles can exist briefly due to energy-time uncertainty',
        'Confinement → uncertainty in position → uncertainty in momentum → kinetic energy',
      ],
      quiz: [
        { question: 'Heisenberg\'s Uncertainty Principle states that:', options: ['Measurement disturbs the particle', 'It is a technical limitation of our instruments', 'Position and momentum cannot both be known precisely simultaneously — fundamentally', 'Quantum particles don\'t have position'], correct: 2, explanation: 'The uncertainty is intrinsic to quantum mechanics, not a result of clumsy measurement. Particles genuinely don\'t have simultaneously definite position and momentum.' },
        { question: 'If you confine an electron to a tiny box, what happens to its kinetic energy?', options: ['It decreases', 'It remains the same', 'It increases due to momentum uncertainty', 'It becomes zero'], correct: 2, explanation: 'Smaller box → smaller Δx → larger Δp → larger momentum uncertainty → greater average kinetic energy. This explains atomic stability.' },
        { question: 'The energy-time uncertainty principle allows:', options: ['Perpetual motion', 'Virtual particles to exist briefly, borrowing energy from the vacuum', 'Measuring energy perfectly at any instant', 'Time travel'], correct: 1, explanation: 'ΔE·Δt ≥ ℏ/2: for very short times, energy can be uncertain. Virtual particles "borrow" energy from the quantum vacuum — the basis of Casimir effect and Hawking radiation.' },
        { question: 'What does ℏ (h-bar) represent?', options: ['Speed of light', 'Planck\'s constant divided by 2π', 'Electron charge', 'Boltzmann constant'], correct: 1, explanation: 'ℏ = h/(2π) ≈ 1.055×10⁻³⁴ J·s. It is the reduced Planck constant and appears throughout quantum mechanics.' },
      ],
      xp: 80,
    }],
  },
  {
    id: 'qp-builder-u2', title: 'Quantum Tunneling', emoji: '🚇',
    description: 'How particles pass through classically forbidden barriers',
    lessons: [{
      id: 'qp-builder-u2-l1', title: 'Tunneling & Its Applications', emoji: '⚛',
      content: 'Quantum tunneling: a particle\'s wave function has non-zero probability of penetrating a classically forbidden energy barrier. Tunneling probability decreases exponentially with barrier width and height. Applications: nuclear fusion in stars, alpha decay, scanning tunneling microscopes, and tunnel diodes.',
      keyPoints: [
        'Tunneling: wave function extends into classically forbidden regions',
        'Probability decreases exponentially with barrier thickness',
        'Nuclear fusion in the Sun requires tunneling — classically impossible at solar temperatures',
        'Alpha decay: alpha particles tunnel through nuclear potential well',
        'STM (scanning tunneling microscope) maps surfaces atom by atom via tunneling current',
      ],
      quiz: [
        { question: 'Quantum tunneling occurs because:', options: ['Particles have infinite energy', 'The particle\'s wave function has non-zero amplitude in the classically forbidden region', 'Barriers are never truly solid', 'The Heisenberg principle allows it briefly'], correct: 1, explanation: 'Wave functions extend into classically forbidden regions. There\'s a small but nonzero probability of the particle appearing on the other side of the barrier.' },
        { question: 'Fusion reactions in the Sun require tunneling because:', options: ['The Sun is too cold for classical fusion', 'The protons must overcome/tunnel through Coulomb repulsion at solar temperatures', 'Tunneling provides extra energy', 'The Sun\'s gravity assists'], correct: 1, explanation: 'Protons in the Sun\'s core must overcome electrostatic repulsion. Classical thermal energy is insufficient; quantum tunneling through the Coulomb barrier makes fusion possible.' },
        { question: 'Scanning Tunneling Microscopes (STM) work by:', options: ['Optical diffraction at atomic scale', 'Measuring tunneling current between tip and surface atoms', 'X-ray diffraction', 'Electron beam imaging'], correct: 1, explanation: 'STM measures the exponentially distance-dependent tunneling current between a sharp metal tip and a conducting surface, allowing angstrom-scale topography mapping.' },
        { question: 'If a barrier doubles in width, tunneling probability:', options: ['Doubles', 'Stays the same', 'Decreases exponentially', 'Becomes zero exactly'], correct: 2, explanation: 'Tunneling probability ∝ e^(−2κd) where d is barrier width. Doubling d dramatically decreases probability — exponential sensitivity to width.' },
      ],
      xp: 80,
    }],
  },
])

export const quantumExplorer: Curriculum = make('quantumphysics', 'explorer', [
  {
    id: 'qp-explorer-u1', title: 'Quantum Entanglement', emoji: '🔗',
    description: 'Spooky action at a distance, Bell\'s theorem and quantum correlations',
    lessons: [{
      id: 'qp-explorer-u1-l1', title: 'Entanglement & Non-Locality', emoji: '✨',
      content: 'Quantum entanglement: two particles share a quantum state such that measuring one instantly determines the other\'s state, regardless of distance. Einstein called it "spooky action at a distance." Bell\'s theorem (1964) and subsequent experiments prove entanglement is real and cannot be explained by hidden variables.',
      keyPoints: [
        'Entangled particles share a joint quantum state — neither has definite individual properties',
        'Measuring one instantly determines the other\'s state, even light-years away',
        'This does NOT allow faster-than-light communication (measurement outcomes are random)',
        'Bell\'s inequality: violated by quantum mechanics, ruling out local hidden variable theories',
        'Applications: quantum cryptography, quantum computing, quantum teleportation',
      ],
      quiz: [
        { question: 'Entanglement means two particles:', options: ['Are physically connected', 'Share a quantum state such that one\'s measurement determines the other\'s', 'Communicate faster than light', 'Have identical properties always'], correct: 1, explanation: 'Entangled particles have correlated quantum states. Before measurement, neither has definite properties; measuring one collapses both, regardless of separation.' },
        { question: 'Can entanglement be used for faster-than-light communication?', options: ['Yes, always', 'Yes, under special conditions', 'No — measurement outcomes are random and cannot carry information', 'Only in quantum computers'], correct: 2, explanation: 'No FTL communication: the correlation is only revealed when the two measurement results are compared via classical means. You cannot control or predict individual outcomes.' },
        { question: 'Bell\'s theorem proved that:', options: ['Einstein\'s hidden variable theory was correct', 'Quantum correlations cannot be explained by any local hidden variable theory', 'Entanglement violates special relativity', 'Quantum mechanics is incomplete'], correct: 1, explanation: 'Bell derived inequalities that any local hidden variable theory must obey. Experiments (Aspect 1982, 2022 Nobel Prize) show QM violates Bell inequalities — no local hidden variables.' },
        { question: 'Quantum teleportation transfers:', options: ['Matter instantly', 'Information faster than light', 'The quantum state of one particle to a distant particle using entanglement + classical communication', 'Energy across space'], correct: 2, explanation: 'Quantum teleportation: uses entanglement + classical channel to reconstruct a quantum state at a distant location. Still limited by classical communication speed.' },
      ],
      xp: 95,
    }],
  },
  {
    id: 'qp-explorer-u2', title: 'Schrödinger Equation', emoji: '〰',
    description: 'The wave equation governing quantum state evolution',
    lessons: [{
      id: 'qp-explorer-u2-l1', title: 'Wave Functions & Probability', emoji: '🌊',
      content: 'The Schrödinger equation governs how quantum states evolve: iℏ ∂ψ/∂t = Ĥψ. The wave function ψ(x,t) encodes all knowable information about a particle. |ψ|² gives the probability density of finding the particle at position x. Measurement collapses ψ to an eigenstate of the measured observable.',
      keyPoints: [
        'iℏ ∂ψ/∂t = Ĥψ — the time-dependent Schrödinger equation',
        'ψ (psi) is the wave function — a complex-valued field in space',
        '|ψ|² = probability density (Born rule)',
        'Superposition: quantum states can be sums of multiple eigenstates simultaneously',
        'Measurement collapses ψ to a single eigenstate with probability |⟨eigenstate|ψ⟩|²',
      ],
      quiz: [
        { question: 'What does |ψ|² represent?', options: ['The wave function itself', 'The total energy', 'The probability density of finding the particle at a location', 'The particle\'s speed'], correct: 2, explanation: 'Born rule: |ψ(x)|² dx gives the probability of finding the particle between x and x+dx. This is the fundamental connection between wave function and measurement.' },
        { question: 'Superposition in quantum mechanics means a particle:', options: ['Exists in two locations simultaneously always', 'Is described by a state that is a sum of multiple eigenstates', 'Has two values of spin', 'Interferes only with itself'], correct: 1, explanation: 'Superposition: ψ = α|0⟩ + β|1⟩. The particle is in a quantum superposition — not "both states at once" but in a state with probability amplitudes for each.' },
        { question: 'What happens to the wave function upon measurement?', options: ['Nothing', 'It evolves according to Schrödinger equation faster', 'It collapses to an eigenstate of the measured observable', 'It disappears'], correct: 2, explanation: 'Wavefunction collapse (measurement postulate): after measurement, ψ collapses to the eigenstate corresponding to the measured eigenvalue.' },
        { question: 'The Schrödinger equation is:', options: ['Nonlinear and relativistic', 'Linear and deterministic between measurements', 'Stochastic at all times', 'Only valid for macro objects'], correct: 1, explanation: 'The Schrödinger equation is linear (superposition holds) and deterministic — it deterministically evolves ψ. Indeterminacy only appears at measurement.' },
      ],
      xp: 95,
    }],
  },
])

export const quantumScholar: Curriculum = make('quantumphysics', 'scholar', [
  {
    id: 'qp-scholar-u1', title: 'Quantum Measurement Problem', emoji: '🔍',
    description: 'Interpretations of quantum mechanics: Copenhagen, Many-Worlds, decoherence',
    lessons: [{
      id: 'qp-scholar-u1-l1', title: 'Interpretations of Quantum Mechanics', emoji: '🌌',
      content: 'The measurement problem: why does the quantum superposition collapse to a definite outcome? Interpretations differ: Copenhagen (Bohr): the wave function is epistemic, collapse happens at measurement. Many-Worlds (Everett): the universe branches; all outcomes occur. Decoherence: quantum superpositions leak into environment, appearing classical without requiring explicit collapse.',
      keyPoints: [
        'Copenhagen: wave function is epistemic; collapse occurs at measurement; shut up and calculate',
        'Many-Worlds: no collapse; universe splits into branches for each outcome',
        'Decoherence: entanglement with environment destroys interference — apparent collapse',
        'Pilot Wave (Bohmian): hidden variable theory with deterministic trajectories guided by a wave',
        'No interpretation changes predictions — it\'s a philosophical debate',
      ],
      quiz: [
        { question: 'The Copenhagen interpretation says wavefunction collapse:', options: ['Never happens', 'Happens when any interaction occurs', 'Happens at measurement by a classical device', 'Is described by Schrödinger equation'], correct: 2, explanation: 'Copenhagen: the wave function collapses upon measurement by a classical apparatus. The quantum/classical boundary is left vague — Bohr was pragmatic, not metaphysical.' },
        { question: 'The Many-Worlds interpretation avoids collapse by:', options: ['Denying quantum mechanics', 'Saying all outcomes occur in branching parallel universes', 'Using hidden variables', 'Treating observation as classical'], correct: 1, explanation: 'Everett\'s MWI: the universal wave function never collapses. Instead, the observer and measuring device enter superposition with the system — all outcomes are real in separate branches.' },
        { question: 'Decoherence explains classical behavior by:', options: ['Introducing collapse explicitly', 'Entanglement with environmental degrees of freedom destroying quantum coherence', 'Denying quantum mechanics at large scales', 'Using a different Hamiltonian'], correct: 1, explanation: 'Decoherence: quantum systems entangle with their environment. Interference terms in ρ = |ψ⟩⟨ψ| decay exponentially, leaving a classical-looking mixed state.' },
        { question: 'Do different quantum interpretations make different experimental predictions?', options: ['Yes, Many-Worlds predicts different results', 'Yes, Copenhagen is empirically tested more', 'No — all interpretations reproduce identical predictions for all experiments', 'Only at very large scales'], correct: 2, explanation: 'The interpretations are empirically equivalent — they are metaphysical positions about what quantum theory means, not competing empirical theories.' },
      ],
      xp: 110,
    }],
  },
  {
    id: 'qp-scholar-u2', title: 'Quantum Computing', emoji: '💻',
    description: 'Qubits, superposition, entanglement and quantum advantage',
    lessons: [{
      id: 'qp-scholar-u2-l1', title: 'Qubits & Quantum Gates', emoji: '⚡',
      content: 'A qubit is a quantum two-level system in superposition: |ψ⟩ = α|0⟩ + β|1⟩. N qubits can represent 2ᴺ states simultaneously. Quantum gates are unitary operations on qubits. Shor\'s algorithm factors numbers exponentially faster than classical. Grover\'s algorithm searches in O(√N) vs. classical O(N).',
      keyPoints: [
        'Qubit: quantum two-level system; can be in superposition of |0⟩ and |1⟩',
        'N qubits encode 2ᴺ states simultaneously — exponential parallelism',
        'Quantum gates: unitary operations (NOT = X gate; Hadamard creates superposition)',
        'Shor\'s algorithm: factoring in polynomial time — threatens RSA encryption',
        'Grover\'s search: quadratic speedup for unstructured search',
      ],
      quiz: [
        { question: 'How many states can 10 qubits represent simultaneously?', options: ['10', '20', '100', '1024'], correct: 3, explanation: 'N qubits represent 2ᴺ states simultaneously in superposition. 2¹⁰ = 1024 states.' },
        { question: 'Shor\'s algorithm threatens which security system?', options: ['AES symmetric encryption', 'RSA public-key encryption (relies on factoring difficulty)', 'Password hashing', 'TLS handshakes only'], correct: 1, explanation: 'RSA security relies on the difficulty of factoring large numbers. Shor\'s algorithm factors in polynomial time — a quantum computer running Shor\'s would break RSA.' },
        { question: 'The Hadamard gate puts a qubit into:', options: ['The |0⟩ state', 'The |1⟩ state', 'An equal superposition: (|0⟩ + |1⟩)/√2', 'An entangled state'], correct: 2, explanation: 'H|0⟩ = (|0⟩ + |1⟩)/√2 — equal superposition. This is the key gate for creating quantum parallelism at the start of quantum algorithms.' },
        { question: 'Quantum decoherence is the main engineering challenge because:', options: ['Qubits are too small to make', 'Quantum states are fragile — any environmental interaction destroys superposition', 'Quantum gates are too slow', 'Classical computers are faster currently'], correct: 1, explanation: 'Qubits must be isolated from the environment to maintain coherence. Any interaction causes decoherence (collapse of quantum state). This limits circuit depth.' },
      ],
      xp: 115,
    }],
  },
])

export const quantumMaster: Curriculum = make('quantumphysics', 'master', [
  {
    id: 'qp-master-u1', title: 'Advanced Quantum Field Theory', emoji: '🌀',
    description: 'Renormalization, Feynman diagrams, and vacuum energy',
    lessons: [{
      id: 'qp-master-u1-l1', title: 'Renormalization & Infinities', emoji: '♾',
      content: 'QFT calculations yield infinite loop integrals for self-energy corrections. Renormalization absorbs infinities into redefined physical parameters (mass, charge). The procedure is self-consistent but conceptually troubling. The Lamb shift and g−2 of the electron confirm QFT at extraordinary precision.',
      keyPoints: [
        'Loop integrals in QFT diverge (UV divergences) — infinite results appear',
        'Renormalization: redefine bare parameters to absorb divergences; physical parameters are finite',
        'The Lamb shift (hydrogen energy levels) was the key experimental confirmation of QED renormalization',
        'Electron g−2 = 2.0023193... predicted by QED to 12 decimal places',
        'Wilsonian renormalization: QFT as effective field theory with a UV cutoff',
      ],
      quiz: [
        { question: 'UV divergences in QFT arise from:', options: ['Low-energy photons', 'Loop integrals over all momenta, including infinite momenta', 'Measurement uncertainty', 'The exclusion principle'], correct: 1, explanation: 'When calculating loop corrections, we integrate over all possible momenta flowing through the loop — including arbitrarily high (UV) momenta, giving divergent results.' },
        { question: 'Renormalization deals with divergences by:', options: ['Ignoring them', 'Absorbing infinities into redefined physical parameters that are measured', 'Setting them to zero', 'Using different equations'], correct: 1, explanation: 'Renormalization: split the Lagrangian into physical + counterterm parts. Counterterms cancel divergences, leaving physical, finite predictions.' },
        { question: 'The Lamb shift confirmed QED renormalization by showing:', options: ['Hydrogen has two electrons', 'The 2s and 2p energy levels in hydrogen are slightly split due to quantum vacuum fluctuations', 'Protons have quarks', 'Photons have mass'], correct: 1, explanation: 'Classical QM predicts 2s₁/₂ and 2p₁/₂ levels are degenerate. QED (after renormalization) predicts a ~1058 MHz splitting — confirmed by Lamb and Retherford (1947).' },
        { question: 'Wilsonian renormalization group teaches us that:', options: ['All QFTs are fundamental', 'Most QFTs are effective field theories valid below some UV cutoff scale', 'The UV cutoff is infinitely small', 'QFT is wrong above TeV energies'], correct: 1, explanation: 'Wilson\'s perspective: QFTs are effective theories parameterizing physics below a cutoff Λ. The divergences signal the breakdown of the theory at that scale — new physics above.' },
      ],
      xp: 130,
    }],
  },
  {
    id: 'qp-master-u2', title: 'Bell\'s Theorem in Depth', emoji: '🔔',
    description: 'Locality, realism, loophole-free tests and foundations of quantum mechanics',
    lessons: [{
      id: 'qp-master-u2-l1', title: 'Bell Inequalities & Loophole-Free Tests', emoji: '⚖',
      content: 'Bell (1964): any local hidden variable theory predicts correlations bounded by Bell inequalities. Quantum mechanics predicts violations up to 2√2 (Tsirelson\'s bound). The 2022 Nobel Prize: Aspect, Clauser, Zeilinger demonstrated loophole-free Bell inequality violations, confirming non-local quantum correlations are real.',
      keyPoints: [
        'Local realism: measurement outcomes are predetermined and don\'t influence each other',
        'Bell inequality: |E(ab) + E(ab\') + E(a\'b) − E(a\'b\')| ≤ 2 (CHSH form)',
        'QM predicts CHSH ≤ 2√2 ≈ 2.83 (Tsirelson bound) — violates Bell inequality',
        'Loophole-free tests (2015): detector efficiency, locality, and freedom-of-choice loopholes all closed simultaneously',
        '2022 Nobel Prize: Aspect, Clauser, Zeilinger for experimental Bell inequality tests',
      ],
      quiz: [
        { question: 'Bell inequalities bound the correlations of:', options: ['Any quantum system', 'Any local hidden variable theory', 'Only entangled systems', 'Classical computing systems'], correct: 1, explanation: 'Bell inequalities are mathematical bounds that must hold if any local hidden variable theory describes the universe. QM violates these bounds.' },
        { question: 'The CHSH Bell inequality is:', options: ['|E(ab) + E(ab\') + E(a\'b) − E(a\'b\')| ≤ 2', '|E(ab)| ≤ 1 always', 'S = 2.83 always', 'ΔE·Δt ≥ ℏ/2'], correct: 0, explanation: 'CHSH: the absolute value of a linear combination of four correlation functions is bounded by 2 for local hidden variable theories. QM reaches 2√2 ≈ 2.83.' },
        { question: 'The detection loophole in Bell tests refers to:', options: ['Detectors being too fast', 'Undetected particles selectively biasing results toward QM predictions', 'Experimenter knowing particle states', 'Entanglement being imperfect'], correct: 1, explanation: 'If detectors miss many particles, and detected ones are a non-random sample, results could mimic QM without non-locality. Loophole-free tests used high-efficiency detectors.' },
        { question: 'The 2022 Nobel Prize in Physics was awarded for:', options: ['Quantum computing', 'Discovering the Higgs boson', 'Loophole-free Bell inequality experiments proving non-local quantum correlations', 'Gravitational wave detection'], correct: 2, explanation: 'Alain Aspect, John Clauser, and Anton Zeilinger received the 2022 Nobel for their experimental work ruling out local hidden variables via Bell inequality violations.' },
      ],
      xp: 130,
    }],
  },
])
