/**
 * Campus & Software Knowledge Engine for SBJITMR Nagpur
 * Smart Intelligent Chatbot with:
 * - Natural Language Intent Classification
 * - Fuzzy Match & Levenshtein Distance for Typo Tolerance
 * - Extensive Synonym & Context Expansion
 * - Full SBJITMR Nagpur College Knowledge Base
 * - Complete Smart Campus Intelligence System Software Manual
 */

export interface KnowledgeEntry {
  id: string;
  category: string;
  keywords: string[];
  patterns: RegExp[];
  response: string;
  suggestions: string[];
}

export interface KnowledgeCategory {
  name: string;
  icon: string;
  entries: KnowledgeEntry[];
}

// ═══════════════════════════════════════════════════════════════════════════════
// KNOWLEDGE BASE (SBJITMR NAGPUR + SOFTWARE INTELLIGENCE SYSTEM)
// ═══════════════════════════════════════════════════════════════════════════════

export const knowledgeBase: KnowledgeCategory[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 🏫 1. ABOUT SBJITMR NAGPUR (COLLEGE INFORMATION)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    name: 'SBJITMR College Information',
    icon: '🏫',
    entries: [
      {
        id: 'college-about',
        category: 'College Info',
        keywords: [
          'college', 'name', 'institute', 'sb jain', 'sbjain', 'sbjit', 'sbjitmr',
          'about', 'history', 'established', 'trust', 'autonomous', 'rtmnu', 'aicte',
          'naac', 'nba', 'affiliation', 'accreditation', 'nagpur'
        ],
        patterns: [
          /what.*(college|institute|sbjit|sb\s*jain)/i,
          /about.*(sb\s*jain|sbjitmr|sbjit|college|institute)/i,
          /tell.*about.*(college|institute|campus)/i,
          /who.*founded|established/i,
          /autonomous|accreditation|rtmnu|naac/i
        ],
        response: `🏫 **S. B. Jain Institute of Technology, Management and Research (SBJITMR), Nagpur**

SBJITMR is a premier autonomous engineering and management institute in Nagpur, Maharashtra:

• 🏛️ **Establishment:** Founded in **2008** under the aegis of the renowned **Sir Shantilal Badjate Charitable Trust**.
• ⭐ **Status:** An **Autonomous Institute** approved by **AICTE, New Delhi** and Directorate of Technical Education (**DTE Maharashtra - College Code: 4197**).
• 🎓 **Affiliation:** Permanently affiliated to **Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU)**.
• 🏅 **Accreditations:** Accredited with **Grade 'A' by NAAC**, with NBA accredited engineering programs and **ISO 9001:2015** certification.
• 🌿 **Campus:** Sprawling 14+ acres lush green, Wi-Fi enabled campus located in Yerla, Katol Road, Nagpur.
• 🌐 **Official Website:** [www.sbjit.edu.in](https://www.sbjit.edu.in)
• 📧 **Email Domain:** **@sbjit.edu.in**`,
        suggestions: ['What departments are at SBJITMR?', 'Campus location & address', 'Placements at SBJITMR', 'What is this software?']
      },
      {
        id: 'college-location',
        category: 'College Info',
        keywords: [
          'location', 'address', 'where', 'reach', 'map', 'yerla', 'katol',
          'katol road', 'directions', 'situated', 'asaram bapu ashram', 'pincode'
        ],
        patterns: [
          /where.*(located|situated|college|sbjit|sb\s*jain)/i,
          /address.*(college|sbjit|sb\s*jain)/i,
          /how.*reach.*(college|campus|sbjit)/i,
          /location.*(campus|college)/i
        ],
        response: `📍 **SBJITMR Campus Location & Address:**

• 📬 **Address:** Behind Asaram Bapu Ashram, Near Katol Road, Village Yerla, Nagpur, Maharashtra - **441501**, India.
• 🛣️ **Landmarks:** Situated off Katol Road Highway, just past Kalmeshwar Bypass / Yerla.
• 🚉 **Distance from Railway Station:** ~13 km from Nagpur Central Railway Station.
• ✈️ **Distance from Airport:** ~18 km from Dr. Babasaheb Ambedkar International Airport, Nagpur.
• 🚌 **Bus Connectivity:** Direct college buses run from all parts of Nagpur, and city buses ply regularly along Katol Road.`,
        suggestions: ['Bus & transport routes', 'College timings', 'About SBJITMR']
      },
      {
        id: 'college-departments',
        category: 'College Info',
        keywords: [
          'department', 'departments', 'branches', 'branch', 'stream', 'streams',
          'cse', 'aiml', 'etc', 'ece', 'electrical', 'mechanical', 'mba', 'humanities',
          'data science', 'programs', 'degrees', 'btech'
        ],
        patterns: [
          /what.*departments/i,
          /list.*(departments|branches|courses)/i,
          /which.*branches.*available/i,
          /cse.*aiml.*etc.*mechanical/i,
          /how many.*departments/i
        ],
        response: `📚 **Academic Departments & Programs at SBJITMR:**

**Undergraduate Programs (B.Tech - 4 Years):**
1. 💻 **Computer Science & Engineering (CSE)** — NBA Accredited
2. 🤖 **Artificial Intelligence & Machine Learning (AI&ML)**
3. 📊 **Data Science (CSE - Data Science)**
4. 📡 **Electronics & Telecommunication Engineering (ETC / ECE)** — NBA Accredited
5. ⚡ **Electrical Engineering (EE)**
6. ⚙️ **Mechanical Engineering (ME)**
7. 🔬 **Applied Sciences & Humanities (First Year B.Tech)**

**Postgraduate Programs:**
• 💼 **Master of Business Administration (MBA)** — Marketing, Finance, HR, Operations, Business Analytics

💡 *SBJITMR follows an Autonomous Curriculum offering Honors & Minor Degrees, Choice-Based Credit System (CBCS), and NPTEL/MOOCs transfer.*`,
        suggestions: ['Admissions & eligibility', 'Placements at SBJITMR', 'Exam and grading system']
      },
      {
        id: 'college-admissions',
        category: 'College Info',
        keywords: [
          'admission', 'admissions', 'apply', 'eligibility', 'mhtcet', 'cet', 'jee',
          'cutoff', 'cutoffs', 'cap', 'round', 'dte code', '4197', 'direct second year',
          'dse', 'polytechnic', 'diploma'
        ],
        patterns: [
          /how.*get.*admission/i,
          /admission.*process/i,
          /eligibility.*(criteria|btech|mba)/i,
          /cutoff|mht\s*cet|jee\s*main/i,
          /dte.*code|cap.*round/i,
          /direct.*second.*year|dse/i
        ],
        response: `🎓 **Admissions at SBJITMR Nagpur (DTE Code: 4197):**

**First Year B.Tech Eligibility:**
• Passed 10+2 (HSC) with Physics, Mathematics, and Chemistry/Computer Science/Biology with minimum **45% marks** (40% for reserved category in Maharashtra).
• Valid score in **MHT-CET** (State Level) or **JEE Main** (All India Seats).
• Admissions are governed by the **State CET Cell Maharashtra** via Centralized Admission Process (**CAP**).

**Direct Second Year (DSE) Admission:**
• For Polytechnic Diploma holders with minimum 45% (40% for reserved category) or B.Sc. degree graduates.

**MBA Admission:**
• Bachelor's Degree with minimum 50% (45% for reserved category).
• Valid score in **MAH-MBA/MMS-CET**, CAT, CMAT, or MAT.

📌 *DTE Institute Choice Code: **4197***. Contact the Admission Cell in the Admin Block or email \`admission@sbjit.edu.in\`.`,
        suggestions: ['Fees and scholarships', 'Departments available', 'Hostel details']
      },
      {
        id: 'college-fees-scholarships',
        category: 'College Info',
        keywords: [
          'fees', 'fee', 'tuition', 'cost', 'scholarship', 'scholarships', 'mahadbt',
          'ebc', 'tfws', 'freeship', 'concession', 'caste', 'obc', 'sc', 'st', 'vjnt',
          'panjabrao deshmukh', 'financial aid'
        ],
        patterns: [
          /what.*fees/i,
          /fee.*structure/i,
          /scholarship.*available/i,
          /mahadbt|ebc|tfws/i,
          /how much.*cost/i
        ],
        response: `💰 **Fees & Scholarship Schemes at SBJITMR:**

**Scholarships available via MahaDBT & DTE:**
• 🌟 **TFWS (Tuition Fee Waiver Scheme):** 100% tuition fee waiver for top meritorious students in CAP rounds.
• 🏷️ **EBC (Economically Backward Class):** 50% tuition fee reimbursement for general category students with annual family income < ₹8 Lakhs.
• 🛡️ **OBC / EWS / SEBC Category:** 50% tuition fee concession via MahaDBT portal.
• 🎓 **SC / ST / VJNT / SBC Category:** 100% tuition and development fee reimbursement / Freeship as per Maharashtra government norms.
• 🏠 **Dr. Panjabrao Deshmukh Hostel Allowance:** Annual maintenance allowance for students from rural backgrounds staying in hostels.

💡 *Fee installments and payment assistance are facilitated through the Accounts Section in the Admin Block.*`,
        suggestions: ['Admissions & eligibility', 'Hostel details', 'About the college']
      },
      {
        id: 'college-placements',
        category: 'College Info',
        keywords: [
          'placement', 'placements', 'tpo', 'recruiters', 'package', 'salary',
          'highest package', 'average package', 'companies', 'jobs', 'internship',
          'internships', 'training', 'crt', 'tcs', 'infosys', 'capgemini', 'persistent'
        ],
        patterns: [
          /placement.*(record|stat|cell|rate)/i,
          /highest.*package|average.*package/i,
          /top.*recruiters|which.*companies/i,
          /training.*placement|tpo/i,
          /job.*opportunities/i
        ],
        response: `💼 **Training & Placement Cell (T&P) at SBJITMR:**

SBJITMR has a proactive Placement Cell working round the year to connect students with industry leaders:

• 🚀 **Highest Package:** **₹10 LPA – ₹12+ LPA**
• 📊 **Average Package:** **₹3.5 LPA – ₹5.5 LPA**
• 🏢 **Top Recruiters:**
  - Tata Consultancy Services (TCS), Infosys, Wipro, Capgemini
  - Cognizant, Tech Mahindra, Persistent Systems, Hexaware
  - Amazon, L&T Infotech, Celebal Technologies, Jio Platforms
  - Dhoot Transmission, Triveni Turbines, Byju's

• 🎯 **Skill Enhancement:** Mandatory **CRT (Campus Recruitment Training)**, aptitude bootcamps, coding hackathons, mock interviews, and industry internships from 6th semester onwards.
• 📧 **T&P Office:** \`tpo@sbjit.edu.in\``,
        suggestions: ['Departments available', 'AI Academic Advisor', 'How does marketplace work?']
      },
      {
        id: 'college-facilities',
        category: 'College Info',
        keywords: [
          'facility', 'facilities', 'infrastructure', 'wifi', 'internet', 'lab', 'labs',
          'computer center', 'auditorium', 'seminar hall', 'campus amenities', 'library'
        ],
        patterns: [
          /what.*facilities/i,
          /campus.*facilities/i,
          /wifi.*available/i,
          /infrastructure|computer.*lab/i,
          /auditorium|seminar.*hall/i
        ],
        response: `🏢 **SBJITMR Campus Infrastructure & Facilities:**

• 💻 **Advanced Computing Labs:** 10+ high-tech computer centers with latest Core i7/GPU workstations, dual-boot Linux/Windows, and licensed developer tools.
• 📶 **Campus-wide Wi-Fi:** High-speed gigabit optical fiber network across all academic blocks.
• 📚 **Central Library:** 35,000+ technical volumes, IEEE Xplore, ScienceDirect, DELNET, multimedia center & 300+ seat reading hall.
• 🎭 **Auditorium:** 500+ capacity fully air-conditioned auditorium with digital acoustics for seminars, conferences, and fests.
• 🍽️ **Hygienic Canteen:** Nutritious vegetarian breakfast, meals, snacks, and beverages at subsidized student rates.
• 🚌 **Bus Transportation:** Fleet of college buses servicing every major corner of Nagpur.
• 🏋️ **Sports & Gym:** Outdoor grounds for cricket, football, basketball & volleyball, plus an indoor fitness gym.
• 🏥 **Medical Room:** First-aid center with consulting doctors and emergency transport assistance.`,
        suggestions: ['Library details & timings', 'Canteen food & timings', 'Bus routes & transport']
      },
      {
        id: 'college-library',
        category: 'College Info',
        keywords: [
          'library', 'books', 'borrow', 'reading hall', 'journals', 'ieee',
          'sciencedirect', 'delnet', 'digital library', 'book bank', 'opac'
        ],
        patterns: [
          /about.*library|library.*timing/i,
          /how.*borrow.*book/i,
          /reading.*hall|digital.*library/i,
          /book.*bank/i
        ],
        response: `📚 **SBJITMR Central Library:**

• ⏰ **Timings:** **8:30 AM – 8:00 PM** (Monday to Saturday); extended up to **10:00 PM** during End-Semester Examinations.
• 📖 **Collection:** Over 35,000+ volumes, standard national/international reference texts, and journals.
• 💻 **Digital Library:** 25 dedicated PCs with access to **IEEE Xplore, ScienceDirect, DELNET, and NPTEL video lectures**.
• 🔖 **Borrowing Rules:** 3 books issued for 14 days per student; Book Bank facility available for all semesters.
• 🔇 **Silent Reading Hall:** Air-conditioned, quiet study environment accommodating over 300 students.

💡 *Looking for peer-uploaded notes and previous year question papers? Use the **Resource Hub & PYQs** right here in this app!*`,
        suggestions: ['How to download resources?', 'Campus timings', 'Bus routes']
      },
      {
        id: 'college-transport',
        category: 'College Info',
        keywords: [
          'bus', 'transport', 'transportation', 'route', 'routes', 'pickup', 'travel',
          'sitabuldi', 'sadar', 'dharampeth', 'mankapur', 'jaripatka', 'wardha road'
        ],
        patterns: [
          /bus.*facility|bus.*timing|bus.*routes/i,
          /college.*bus/i,
          /how.*reach.*bus/i,
          /transport.*facility/i
        ],
        response: `🚌 **SBJITMR College Bus & Transportation:**

The institute operates a fleet of buses ensuring safe and convenient daily commuting for students and faculty across Nagpur:

• 🗺️ **Key Bus Routes:**
  - Route 1: Sitabuldi → Dharampeth → Law College Square → Katol Road
  - Route 2: Sadar → Mankapur → Zingabai Takli → Yerla
  - Route 3: Jaripatka → Kadbi Chowk → Chaoni → Campus
  - Route 4: Medical Square → Rahate Colony → Shankar Nagar → Ravinagar
  - Route 5: Wardha Road → Pratap Nagar → Hingna T-Point → Campus
• ⏰ **Timings:** Buses arrive on campus by **8:45 AM** and depart after classes at **5:15 PM**.
• 📝 **Bus Pass:** Applications are processed at the Student Transport Desk in the Admin Section at the beginning of each semester.`,
        suggestions: ['College timings', 'Campus location & address', 'About SBJITMR']
      },
      {
        id: 'college-canteen',
        category: 'College Info',
        keywords: [
          'canteen', 'food', 'cafeteria', 'mess', 'lunch', 'breakfast', 'tea',
          'coffee', 'snacks', 'eating', 'hungry', 'thali', 'samosa', 'poha'
        ],
        patterns: [
          /canteen.*food|canteen.*timing/i,
          /where.*eat|food.*available/i,
          /what.*food.*canteen/i,
          /cafeteria/i
        ],
        response: `🍽️ **SBJITMR Canteen & Food Court:**

• ⏰ **Timings:** **8:00 AM – 6:30 PM** daily.
• 🍲 **Menu Highlights:** Freshly prepared poha, samosas, idli-sambhar, dosas, sandwiches, full thali meals, cold drinks, tea, and filter coffee.
• 🌿 **Hygiene & Quality:** 100% vegetarian, prepared under strict cleanliness standards with purified RO drinking water.
• 💳 **Payment:** Cash, UPI (PhonePe, GPay, Paytm) widely accepted.
• 💰 **Student Pricing:** Subsidized, pocket-friendly campus rates.`,
        suggestions: ['College timings', 'Hostel details', 'Campus facilities']
      },
      {
        id: 'college-hostel',
        category: 'College Info',
        keywords: [
          'hostel', 'accommodation', 'stay', 'room', 'boarding', 'mess food',
          'boys hostel', 'girls hostel', 'warden', 'curfew', 'security'
        ],
        patterns: [
          /hostel.*facility|hostel.*timing/i,
          /is there.*hostel/i,
          /boys.*hostel|girls.*hostel/i,
          /accommodation/i
        ],
        response: `🏠 **SBJITMR Hostel & Student Accommodation:**

• 🏢 **Separate Facilities:** Tied-up and dedicated hostel accommodations for both Boys and Girls.
• 🔒 **Safety & Security:** 24/7 CCTV surveillance, biometric security, and dedicated resident wardens.
• 🍽️ **Mess:** 4 meals a day (Breakfast, Lunch, Evening Snacks, Dinner) with hygienic food.
• 📶 **Connectivity:** High-speed Wi-Fi enabled study rooms.
• 🚌 **Transit:** Direct college bus pickup and drop to hostel gates.
• ⏰ **Curfew Timing:** Gate closes at **9:00 PM** on weekdays and **9:30 PM** on weekends.

💡 *Need hostel supplies like coolers, mattresses, or drafters? Check the **Marketplace** on this platform to buy pre-owned items from seniors!*`,
        suggestions: ['How does marketplace work?', 'Bus & transport routes', 'College timings']
      },
      {
        id: 'college-clubs-fests',
        category: 'College Info',
        keywords: [
          'clubs', 'fests', 'events', 'technoutsav', 'euphoria', 'jallosh', 'athletica',
          'codechef', 'gdsc', 'robotics', 'nss', 'rotaract', 'ieee', 'csi', 'cultural',
          'sports fest', 'hackathon'
        ],
        patterns: [
          /student.*clubs|cultural.*fest/i,
          /technoutsav|euphoria|athletica/i,
          /hackathons|extracurricular/i,
          /what.*events/i
        ],
        response: `🎉 **Life at SBJITMR — Clubs, Fests & Events:**

• 🎭 **Annual Fests:**
  - 🎪 **Technoutsav:** Flagship national-level technical symposium featuring robot wars, code sprints, project expos, and LAN gaming.
  - 💃 **Euphoria / Jallosh:** Mega cultural extravanganza with dance, music, drama, fashion shows, and celebrity nights.
  - 🏆 **Athletica:** Annual inter-departmental sports tournament (cricket, football, volleyball, chess, athletics).

• 🚀 **Technical & Student Clubs:**
  - 💻 **GDSC & CodeChef Chapter:** Coding bootcamps, DSA sessions, and hackathons.
  - 🤖 **Robotics & IoT Club:** Hands-on hardware prototyping and drone development.
  - 🤝 **NSS & Rotaract Club:** Blood donation camps, tree plantations, and social outreach.
  - 📜 **IEEE & CSI Student Chapters:** Global workshops, seminars, and technical paper presentations.`,
        suggestions: ['Campus notice board', 'Academic departments', 'AI Academic Advisor']
      },
      {
        id: 'college-timings',
        category: 'College Info',
        keywords: [
          'timing', 'timings', 'hours', 'schedule', 'college time', 'office time',
          'when does college open', 'working hours', 'saturday', 'holiday'
        ],
        patterns: [
          /what.*timings/i,
          /college.*hours/i,
          /when.*(open|close|start)/i,
          /working.*hours/i
        ],
        response: `🕐 **SBJITMR Operating Timings:**

| Department / Facility | Working Hours |
|---|---|
| 🏫 **Academic Classes & Labs** | 9:00 AM – 5:00 PM (Mon – Sat) |
| 🏢 **Administrative Office & Student Section** | 9:30 AM – 5:00 PM |
| 📚 **Central Library & Reading Hall** | 8:30 AM – 8:00 PM (Till 10 PM in exams) |
| 💻 **Central Computer Center** | 9:00 AM – 6:00 PM |
| 🍽️ **Canteen & Cafeteria** | 8:00 AM – 6:30 PM |
| 👨‍🏫 **Faculty Consultation / TG Hour** | 3:30 PM – 5:00 PM |
| 🏋️ **Sports Grounds & Gym** | 6:00 AM – 8:00 AM & 4:30 PM – 7:00 PM |

📌 *Second & Fourth Saturdays are typically non-instructional days / reserved for co-curricular activities.*`,
        suggestions: ['Bus & transport routes', 'Library details & timings', 'About SBJITMR']
      },
      {
        id: 'college-contacts',
        category: 'College Info',
        keywords: [
          'contact', 'phone', 'email', 'number', 'helpline', 'reach', 'enquiry',
          'principal', 'registrar', 'tpo email', 'admin email'
        ],
        patterns: [
          /how.*contact.*college/i,
          /phone.*number|email.*address/i,
          /contact.*info/i,
          /helpline|principal.*office/i
        ],
        response: `📞 **SBJITMR Official Contact Directory:**

• 🏢 **Campus Address:** Yerla, Katol Road, Nagpur, Maharashtra - 441501
• 📧 **General Enquiries:** \`info@sbjit.edu.in\`
• 🎓 **Admissions Cell:** \`admission@sbjit.edu.in\`
• 💼 **Training & Placement (T&P):** \`tpo@sbjit.edu.in\`
• 🛡️ **Student Section / Exam Cell:** \`studentsection@sbjit.edu.in\`
• 🌐 **Official Portal:** [www.sbjit.edu.in](https://www.sbjit.edu.in)

💡 *For in-app technical issues or software support, consult the Admin or TG Mentor via the Notice Board or Course LMS.*`,
        suggestions: ['About SBJITMR', 'Admissions & eligibility', 'Software features']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 💻 2. SMART CAMPUS INTELLIGENCE SYSTEM (SOFTWARE FEATURES & HOW-TO)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    name: 'Smart Campus Software Manual',
    icon: '💻',
    entries: [
      {
        id: 'software-overview',
        category: 'Software Manual',
        keywords: [
          'software', 'system', 'app', 'platform', 'what is this', 'about software',
          'smart campus', 'portal', 'features', 'capabilities', 'purpose', 'project',
          'final year project', 'developer', 'who built this', 'tech stack'
        ],
        patterns: [
          /what.*is.*this.*(software|system|app|platform|website)/i,
          /about.*(software|platform|system)/i,
          /who.*(made|built|developed|created)/i,
          /tech.*stack|technologies/i,
          /features.*(software|platform)/i
        ],
        response: `🚀 **Smart Campus Intelligence System — Software Overview**

This software is a comprehensive, production-grade **Unified Digital Ecosystem** designed exclusively for **SBJITMR Nagpur**:

• 🎯 **Core Purpose:** To replace fragmented WhatsApp groups and manual spreadsheets with an all-in-one institutional hub for academics, peer study resource sharing, peer-to-peer marketplace, and AI advising.
• 🛠️ **Full-Stack Technology Stack:**
  - 🖥️ **Frontend:** React 18, TypeScript, Vite, Tailwind CSS with dynamic dark/light themes.
  - ⚙️ **Backend:** Node.js, Express, TypeScript, Prisma ORM with SQLite database.
  - ⚡ **Real-time Engine:** Socket.io WebSockets for instant notifications and peer chat.
  - 🔒 **Security:** JWT authentication, bcrypt encryption, institutional email verification (@sbjit.edu.in), and audit logging.

• 🌟 **Key Modules:**
  1. 📚 **Course LMS:** Enroll in courses, access syllabus, and receive professor announcements.
  2. 📋 **Resource Hub & PYQs:** Download study materials; student uploads undergo Faculty Moderation.
  3. 📝 **Assignment Center:** Submit homework online with auto-late detection and faculty grading.
  4. 🏪 **₹0 Peer Marketplace:** Buy & sell textbooks, calculators, and drafters with in-app chat.
  5. 🤖 **AI Academic Advisor:** Automated CGPA tracking, weak subject diagnosis, and customized revision plans.
  6. 📢 **Digital Notice Board:** Urgent circulars and announcements categorized with priority tags.`,
        suggestions: ['How to use marketplace?', 'How to upload resources?', 'What are demo accounts?', 'AI Academic Advisor']
      },
      {
        id: 'software-auth-roles',
        category: 'Software Manual',
        keywords: [
          'login', 'signin', 'register', 'signup', 'account', 'password', 'forgot password',
          'reset', 'roles', 'student role', 'faculty role', 'admin role', 'sbjit domain',
          'email verification'
        ],
        patterns: [
          /how.*(login|sign\s*in|register|sign\s*up)/i,
          /forgot.*password|reset.*password/i,
          /why.*can't.*use.*gmail|email.*domain/i,
          /what.*roles/i,
          /switch.*account/i
        ],
        response: `🔐 **Authentication, Roles & Security:**

• 🛡️ **Institutional Email Requirement:**
  Only email addresses ending in **@sbjit.edu.in** are permitted to register. This ensures a verified, safe, and spam-free student/faculty network. Personal Gmail/Yahoo accounts are rejected.

• 👥 **System Roles:**
  - 🎓 **Student:** Access courses, download PYQs, upload study resources for moderation, submit assignments, and trade on the marketplace.
  - 👨‍🏫 **Faculty:** Create courses, post announcements, review & approve student resource uploads in the Moderation Queue, and grade assignments.
  - 🛡️ **Administrator:** Full campus audit trail, oversee user accounts, and broadcast urgent notices.

• 🔑 **Forgot Password?** Click *"Forgot Password"* on the login page and enter your registered @sbjit.edu.in email to initiate reset credentials.`,
        suggestions: ['What are demo accounts?', 'How does faculty moderation work?', 'How to use marketplace?']
      },
      {
        id: 'software-demo-accounts',
        category: 'Software Manual',
        keywords: [
          'demo', 'demo accounts', 'test accounts', '1-click', 'one click', 'sample login',
          'sarah jenkins', 'alex rivera', 'rohan sharma', 'try without register'
        ],
        patterns: [
          /demo.*account/i,
          /1-click|one.*click/i,
          /test.*login|try.*login/i,
          /pre-seeded.*users/i
        ],
        response: `🧪 **Pre-Seeded 1-Click Demo Accounts:**

You can test the entire platform without manual registration by clicking the **1-Click Demo Buttons** on the Login Screen:

| Role | Profile Name | Email | Password |
|---|---|---|---|
| 👨‍🏫 **Faculty** | Prof. Sarah Jenkins | \`faculty1@sbjit.edu.in\` | \`Password@123\` |
| 🎓 **Student (6th Sem)** | Alex Rivera | \`student1@sbjit.edu.in\` | \`Password@123\` |
| 🎓 **Student (4th Sem)** | Rohan Sharma | \`student2@sbjit.edu.in\` | \`Password@123\` |

💡 *Tip: Open an Incognito window to sign in as Student in one tab and Faculty in another to test real-time moderation and marketplace chat!*`,
        suggestions: ['How does faculty moderation work?', 'How to buy or sell on marketplace?', 'Courses & LMS']
      },
      {
        id: 'software-courses',
        category: 'Software Manual',
        keywords: [
          'courses', 'course', 'enroll', 'enrollment', 'subjects', 'syllabus',
          'announcements', 'register course', 'drop course', 'lms'
        ],
        patterns: [
          /how.*enroll.*course/i,
          /view.*course|available.*course/i,
          /post.*announcement/i,
          /drop.*course/i,
          /course.*lms/i
        ],
        response: `📚 **Course LMS & Subject Management:**

• 🔍 **Browse Courses:** Click **"Courses"** in the sidebar to view all subjects categorized by department and semester.
• ➕ **Enrolling (Students):** Click the **"Enroll"** button on any available course. Once enrolled, you instantly gain access to the course syllabus, class announcements, and resources.
• 📢 **Course Announcements:**
  - Faculty can click **"Post Announcement"** within their subject to broadcast updates with file attachments.
  - Enrolled students receive instant **WebSocket push notifications** and bell badge alerts.
• ❌ **Dropping a Course:** Open the enrolled course details and click *"Unenroll"* if you have mistakenly added an elective.`,
        suggestions: ['How to submit assignments?', 'How to upload resources?', 'AI Academic Advisor']
      },
      {
        id: 'software-resources',
        category: 'Software Manual',
        keywords: [
          'resource', 'resources', 'notes', 'pyq', 'pyqs', 'question paper',
          'previous year', 'study material', 'upload resource', 'download notes',
          'pdf', 'file size', 'helpful', 'upvote'
        ],
        patterns: [
          /how.*(upload|download).*(resource|notes|pyq|paper)/i,
          /study.*material/i,
          /previous.*year.*question/i,
          /supported.*file.*formats|max.*file.*size/i,
          /upvote.*resource/i
        ],
        response: `📋 **Resource Hub & Previous Year Questions (PYQs):**

• 📥 **Downloading Resources:**
  1. Open **"Resource Hub & PYQs"** from the sidebar.
  2. Filter by category: **Lecture Notes, PYQs, Reference Books, or Student Summaries**.
  3. Filter by department or subject code, then click **"Download"**.

• 📤 **Uploading Resources (Students):**
  1. Click **"Upload Resource"**.
  2. Select your file (PDF, DOCX, PPTX, XLSX, TXT, ZIP, PNG, JPG up to **25 MB**).
  3. Enter the Title, Subject Code, Category, and Semester.
  4. Submit! Your resource enters the **Faculty Moderation Queue** to maintain academic quality.

• ⭐ **Quality Feedback:** Click the 👍 **"Helpful"** button on any resource to upvote high-quality notes for fellow classmates.`,
        suggestions: ['How does faculty moderation work?', 'How to submit assignments?', 'Campus marketplace']
      },
      {
        id: 'software-moderation',
        category: 'Software Manual',
        keywords: [
          'moderation', 'moderate', 'queue', 'approve', 'reject', 'pending review',
          'faculty moderation', 'why pending', 'approval process'
        ],
        patterns: [
          /moderation.*(queue|process|pipeline)/i,
          /how.*approve.*resource/i,
          /why.*resource.*pending/i,
          /reject.*resource/i
        ],
        response: `🔍 **Faculty Resource Moderation Pipeline:**

To prevent spam, low-quality, or inappropriate material from entering the academic library, all student uploads go through two-tier verification:

1. 🟡 **PENDING_REVIEW:** When a student uploads a file, it is immediately placed in the moderation queue and is not yet visible to other students.
2. 👨‍🏫 **Faculty Review:** Faculty members see a **"Resource Moderation"** badge in their sidebar. They can preview the document directly in the browser.
3. ✅ **Approval:** If accurate and useful, the faculty clicks **"Approve"**. The document is instantly published globally with a verification badge.
4. ❌ **Rejection:** If inaccurate or duplicate, faculty can **"Reject"** with constructive feedback sent back to the uploader.
5. ⚡ **Faculty Fast-Track:** Uploads made directly by Faculty members bypass moderation and go live immediately.`,
        suggestions: ['How to upload resources?', 'What are demo accounts?', 'Assignments & grading']
      },
      {
        id: 'software-assignments',
        category: 'Software Manual',
        keywords: [
          'assignment', 'assignments', 'submit', 'submission', 'homework',
          'deadline', 'due date', 'late submission', 'grading', 'rubric', 'marks'
        ],
        patterns: [
          /how.*submit.*assignment/i,
          /assignment.*deadline|due.*date/i,
          /late.*submission/i,
          /grading.*center|how.*grade/i
        ],
        response: `📝 **Assignment Submission & Grading Center:**

• 🎓 **For Students:**
  1. Navigate to **"Assignments"** in the sidebar.
  2. Select an assignment to review the instructions, due date, and maximum marks.
  3. Upload your solution file (PDF, code archive, DOCX).
  4. ⚠️ **Late Submissions:** The system automatically flags submissions uploaded past the deadline as *LATE*, but allows submissions unless strict cutoff is enforced.

• 👨‍🏫 **For Faculty:**
  1. Create new assignments with deadline, maximum marks, and evaluation rubrics.
  2. Access the **"Grading Center"** to review submitted student files.
  3. Enter numeric marks and qualitative feedback $\rightarrow$ students receive an instant grade notification.`,
        suggestions: ['AI Academic Advisor', 'How does grading work?', 'Courses LMS']
      },
      {
        id: 'software-marketplace',
        category: 'Software Manual',
        keywords: [
          'marketplace', 'buy', 'sell', 'trade', 'listing', 'drafter', 'calculator',
          'fx991', 'lab coat', 'apron', 'textbook', 'cycle', 'hostel cooler',
          'handover', 'zero cost', 'commission', 'olx'
        ],
        patterns: [
          /how.*(buy|sell).*marketplace/i,
          /list.*item|create.*listing/i,
          /marketplace.*(work|process|fees)/i,
          /drafter|calculator|lab.*coat/i,
          /handover.*lifecycle/i
        ],
        response: `🏪 **Campus Marketplace (Zero-Commission Student Exchange):**

A campus-safe, peer-to-peer exchange platform exclusively for verified SBJITMR students:

• 🏷️ **Popular Items:**
  - Engineering Drafters & Drawing Boards
  - Scientific Calculators (Casio fx-991EX / 991MS)
  - First-Year Workshop & Chemistry Lab Aprons
  - Semester Reference Textbooks & Gate Guides
  - Bicycles, Hostel Coolers, Mattresses & Electronics

• 🛍️ **How to Buy:**
  1. Browse listings or search for the item you need.
  2. Click **"I'm Interested"** or **"Chat"**.
  3. A private in-app conversation opens with the seller.
  4. Agree on meeting spot on campus (e.g. Canteen or Library entrance) for cash/UPI handover.

• 📦 **How to Sell:**
  1. Click **"Create Listing"** $\rightarrow$ add photo, title, condition (Like New / Used), and price.
  2. Set status: \`AVAILABLE\` $\rightarrow$ \`RESERVED\` $\rightarrow$ \`SOLD\` once handed over.
• 🔒 **Privacy:** No personal phone numbers or addresses are leaked; all talks happen in-app.`,
        suggestions: ['How does in-app chat work?', 'How does handover work?', 'Marketplace safety']
      },
      {
        id: 'software-chat',
        category: 'Software Manual',
        keywords: [
          'chat', 'message', 'messages', 'messaging', 'dm', 'inbox', 'socket',
          'realtime', 'websocket', 'seller', 'conversation', 'block user'
        ],
        patterns: [
          /how.*(chat|message)/i,
          /send.*message|in-app.*chat/i,
          /real-time.*messaging/i,
          /block.*user/i
        ],
        response: `💬 **In-App Real-Time Peer Messaging:**

• ⚡ **WebSocket Driven:** Powered by Socket.io for instant, real-time message delivery without needing page reloads.
• 📦 **Context Aware:** Each marketplace chat is linked to the specific product listing so both buyer and seller know exactly which item is being negotiated.
• 🔔 **Notifications:** New message alerts ping your top navbar with sound and badge counters.
• 🛡️ **Safety & Privacy:** Users communicate securely without exchanging WhatsApp numbers or social media handles. In case of harassment, users can be blocked with one click.`,
        suggestions: ['Campus marketplace', 'Notifications system', 'Software features']
      },
      {
        id: 'software-ai-advisor',
        category: 'Software Manual',
        keywords: [
          'ai advisor', 'advisor', 'academic advisor', 'cgpa', 'sgpa', 'marks',
          'performance', 'weak subjects', 'analysis', 'revision plan', 'study plan',
          'youtube videos', 'improve grades'
        ],
        patterns: [
          /ai.*advisor/i,
          /academic.*advisor/i,
          /how.*calculate.*cgpa/i,
          /weak.*subject/i,
          /study.*plan|revision.*plan/i,
          /how.*improve.*grades/i
        ],
        response: `🤖 **AI Academic Advisor Module:**

Located directly in the sidebar, the AI Academic Advisor acts as your personal 24/7 academic tutor:

• 📊 **CGPA & SGPA Analytics:** Visualizes semester-by-semester trends, showing credit weightage and performance trajectory.
• 🎯 **Weak Subject Diagnosis:** Automatically flags any enrolled course with internal or mid-term marks below the **65% benchmark**.
• 📺 **Curated Learning Resources:** Generates targeted YouTube tutorial playlists and NPTEL references specifically addressing your weak topics.
• 📅 **Automated Revision Plans:**
  - **7-Day Crash Revision Plan:** Rapid review for upcoming MSE (Mid-Semester Exams).
  - **30-Day Comprehensive Revision Plan:** Structured, day-by-day prep leading up to RTMNU End-Semester Exams (ESE).`,
        suggestions: ['Exam and grading system', 'Courses LMS', 'Resource Hub & PYQs']
      },
      {
        id: 'software-notices',
        category: 'Software Manual',
        keywords: [
          'notice', 'notices', 'board', 'notice board', 'circular', 'circulars',
          'urgent', 'announcements', 'event', 'holiday', 'exam timetable'
        ],
        patterns: [
          /notice.*board/i,
          /view.*notices|post.*notice/i,
          /campus.*circular/i,
          /exam.*timetable.*notice/i
        ],
        response: `📢 **Campus Digital Notice Board:**

• 📋 **Centralized Circulars:** View official notices published by the Principal's Office, Dean Academics, HODs, and Examination Cell.
• 🏷️ **Categorized Streams:** Filter by **Academic, Exam Timetables, Events, Emergency, Cultural, and Sports**.
• 🚦 **Priority Alerts:**
  - 🔴 **Urgent:** Highlighted with bright banner alerts for immediate deadlines or emergency closures.
  - 🟡 **High Priority:** Important academic announcements.
  - 🟢 **Normal:** General notices and club activities.
• ⏳ **Auto-Expiry:** Outdated event notices automatically archive after their expiration date to keep the board fresh.`,
        suggestions: ['College timings', 'Exam system', 'Software features']
      },
      {
        id: 'software-search-shortcuts',
        category: 'Software Manual',
        keywords: [
          'search', 'find', 'ctrl k', 'command k', 'shortcut', 'command palette',
          'dark mode', 'theme', 'navigation', 'how to search'
        ],
        patterns: [
          /how.*search/i,
          /ctrl.*k|command.*k/i,
          /command.*palette/i,
          /dark.*mode|light.*mode|switch.*theme/i,
          /keyboard.*shortcuts/i
        ],
        response: `🔍 **Power Features: Global Search & Theme Customization:**

• ⚡ **Global Search (Ctrl + K / ⌘ + K):**
  Press **Ctrl+K** anywhere in the application to summon the Command Palette! Search across:
  - 📚 All courses and subject codes
  - 📋 Study notes and PYQs
  - 🏪 Marketplace listings
  - 📢 Campus notices
  - 🚀 One-key navigation to any dashboard module

• 🌗 **Dark Mode / Light Mode:**
  Click the **Sun / Moon icon** in the top navigation bar to toggle between sleek dark mode and crisp high-contrast light mode. Your preference is saved automatically!`,
        suggestions: ['What is this software?', 'Demo accounts', 'About SBJITMR']
      }
    ]
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// CONVERSATIONAL & SMALL-TALK RESPONSES
// ═══════════════════════════════════════════════════════════════════════════════

export const greetings = {
  keywords: ['hi', 'hello', 'hey', 'namaste', 'good morning', 'good afternoon', 'good evening', 'hii', 'hiii', 'yo', 'sup'],
  patterns: [/^(hi|hello|hey|namaste|greetings|good\s*(morning|afternoon|evening))/i],
  response: `👋 **Namaste! Welcome to SBJITMR Campus AI Assistant!**

I am your intelligent guide for **S. B. Jain Institute of Technology, Management and Research (SBJITMR), Nagpur** and the **Smart Campus Intelligence System**.

**What I can help you with:**
• 🏫 **SBJITMR College:** History, location, departments, admissions, placements, cutoff, fees, bus routes, canteen & hostel.
• 💻 **Software Manual:** How to enroll in courses, upload notes, faculty moderation, submit assignments, buy/sell on marketplace, AI advisor & demo logins.

*Feel free to ask any question or tap a suggestion below!* 👇`,
  suggestions: ['About SBJITMR Nagpur', 'What can this software do?', 'Campus location & bus routes', 'How to use marketplace?']
};

export const thankYou = {
  keywords: ['thank', 'thanks', 'thank you', 'thx', 'ty', 'dhanyawad', 'shukriya', 'helpful', 'awesome'],
  patterns: [/thank/i, /\bthx\b/i, /\bty\b/i, /helpful|great\s*job/i],
  response: `😊 **You're very welcome!** 

Glad I could help. Whether you have questions about **SBJITMR academics** or need help navigating this **Smart Campus software**, I am always here for you! 🎓✨`,
  suggestions: ['Tell me about placements', 'How to upload resources?', 'Campus timings']
};

export const goodbye = {
  keywords: ['bye', 'goodbye', 'see you', 'tata', 'later', 'exit'],
  patterns: [/\b(bye|goodbye|see\s*you|later|cya)\b/i],
  response: `👋 **Goodbye! Have a productive day at SBJITMR!**

Come back anytime if you need help with study resources, courses, or campus info. 🚀`,
  suggestions: []
};

// ═══════════════════════════════════════════════════════════════════════════════
// SMART NLP MATCHING ENGINE (FUZZY + SYNONYM + WEIGHTED SCORING)
// ═══════════════════════════════════════════════════════════════════════════════

export interface ChatResponse {
  message: string;
  suggestions: string[];
}

/**
 * Common typo & abbreviation mappings
 */
const synonymMap: Record<string, string[]> = {
  // College names & abbreviations
  'sbjitmr': ['college', 'institute', 'sbjit', 'sbjain'],
  'sbjit': ['college', 'institute', 'sbjitmr', 'sbjain'],
  'sbjain': ['college', 'institute', 'sbjitmr', 'sbjit', 'sb jain'],
  'jain': ['college', 'institute', 'sbjitmr', 'sbjit'],
  'nagpur': ['college', 'institute', 'location', 'campus'],
  'yerla': ['location', 'address', 'katol road'],
  'katol': ['location', 'address', 'yerla'],
  'rtmnu': ['university', 'affiliation', 'autonomous', 'exam'],

  // Facilities & Campus
  'food': ['canteen', 'cafeteria', 'lunch', 'breakfast', 'snacks'],
  'mess': ['hostel', 'canteen', 'food'],
  'eating': ['canteen', 'cafeteria'],
  'hungry': ['canteen', 'food'],
  'travel': ['bus', 'transport', 'transportation', 'route'],
  'vehicle': ['bus', 'transport'],
  'stay': ['hostel', 'accommodation', 'room'],
  'living': ['hostel', 'accommodation'],
  'books': ['library', 'reading hall', 'resources', 'notes', 'textbook'],
  'book': ['library', 'resources', 'notes', 'textbook'],

  // Academics & Jobs
  'salary': ['package', 'placement', 'placements', 'tpo', 'jobs'],
  'job': ['placement', 'placements', 'recruiters', 'package'],
  'intern': ['internship', 'placement', 'training'],
  'score': ['cgpa', 'sgpa', 'grade', 'marks', 'exam'],
  'results': ['marks', 'grade', 'cgpa', 'exam'],
  'paper': ['pyq', 'pyqs', 'exam', 'question paper', 'resources'],
  'papers': ['pyq', 'pyqs', 'exam', 'question paper', 'resources'],
  'hw': ['assignment', 'assignments', 'homework'],
  'sir': ['faculty', 'professor', 'teacher'],
  'madam': ['faculty', 'professor', 'teacher'],
  'prof': ['faculty', 'professor', 'teacher'],
  'teacher': ['faculty', 'tg mentor'],

  // Marketplace & Software
  'olx': ['marketplace', 'buy', 'sell', 'listing'],
  'shop': ['marketplace', 'buy', 'sell'],
  'purchase': ['buy', 'marketplace'],
  'drafter': ['marketplace', 'engineering drafter'],
  'calcy': ['calculator', 'fx991', 'marketplace'],
  'calculator': ['marketplace', 'fx991'],
  'apron': ['lab coat', 'marketplace'],
  'coat': ['lab coat', 'apron', 'marketplace'],
  'who made': ['developer', 'tech stack', 'project', 'software'],
  'code': ['tech stack', 'developer', 'software'],
  'git': ['tech stack', 'software', 'project']
};

/**
 * Standardize and clean input string
 */
function normalizeInput(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^\w\s?]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Levenshtein Distance for fuzzy typo matching
 */
function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = i;
    for (let j = 1; j <= b.length; j++) {
      const val = b[j - 1] === a[i - 1] ? row[j - 1] : Math.min(row[j - 1], prev, row[j]) + 1;
      row[j - 1] = prev;
      prev = val;
    }
    row[b.length] = prev;
  }
  return row[b.length];
}

/**
 * Checks if a word is close enough to target (handles typos up to 2 edits)
 */
function isFuzzyMatch(word: string, target: string): boolean {
  if (word === target) return true;
  if (word.length <= 3) return word === target;
  const dist = levenshtein(word, target);
  if (word.length <= 5) return dist <= 1;
  return dist <= 2;
}

/**
 * Multi-layer scoring algorithm:
 * 1. Exact phrase matches (+12)
 * 2. Regex pattern matches (+10)
 * 3. Exact word keyword matches (+3)
 * 4. Synonym expansion matches (+2)
 * 5. Fuzzy typo matches (+2)
 */
function scoreEntry(normalizedInput: string, rawInput: string, entry: KnowledgeEntry): number {
  let score = 0;
  const inputWords = normalizedInput.split(/\s+/).filter(Boolean);

  // 1. Check Regex patterns
  for (const pattern of entry.patterns) {
    if (pattern.test(rawInput) || pattern.test(normalizedInput)) {
      score += 10;
    }
  }

  // 2. Exact phrase check
  for (const kw of entry.keywords) {
    if (kw.includes(' ') && normalizedInput.includes(kw)) {
      score += 8;
    }
  }

  // 3. Keyword & Synonym matching
  for (const word of inputWords) {
    for (const kw of entry.keywords) {
      if (word === kw) {
        score += 3;
      } else if (isFuzzyMatch(word, kw)) {
        score += 2;
      }
    }

    // Check synonym dictionary
    const synonyms = synonymMap[word];
    if (synonyms) {
      for (const syn of synonyms) {
        if (entry.keywords.includes(syn)) {
          score += 2.5;
        }
      }
    }
  }

  return score;
}

/**
 * Get response from knowledge engine
 */
export function getChatResponse(userInput: string): ChatResponse {
  const normalized = normalizeInput(userInput);

  if (!normalized || normalized.length === 0) {
    return {
      message: greetings.response,
      suggestions: greetings.suggestions,
    };
  }

  // Check greetings
  if (greetings.patterns.some((p) => p.test(userInput)) || greetings.keywords.some((k) => normalized === k)) {
    return {
      message: greetings.response,
      suggestions: greetings.suggestions,
    };
  }

  // Check thank you
  if (thankYou.patterns.some((p) => p.test(userInput)) || thankYou.keywords.some((k) => normalized.includes(k))) {
    return {
      message: thankYou.response,
      suggestions: thankYou.suggestions,
    };
  }

  // Check goodbye
  if (goodbye.patterns.some((p) => p.test(userInput)) || goodbye.keywords.some((k) => normalized.includes(k))) {
    return {
      message: goodbye.response,
      suggestions: goodbye.suggestions,
    };
  }

  // Score all knowledge entries across all categories
  let bestEntry: KnowledgeEntry | null = null;
  let highestScore = 0;

  for (const category of knowledgeBase) {
    for (const entry of category.entries) {
      const entryScore = scoreEntry(normalized, userInput, entry);
      if (entryScore > highestScore) {
        highestScore = entryScore;
        bestEntry = entry;
      }
    }
  }

  // If we found a confident match (score threshold 3.0)
  if (bestEntry && highestScore >= 3.0) {
    return {
      message: bestEntry.response,
      suggestions: bestEntry.suggestions,
    };
  }

  // Fallback with rich guidance
  return {
    message: `🤖 **I'm here to help with SBJITMR Nagpur and the Smart Campus System!**

I didn't quite catch the specifics of your question. You can ask me anything about:

🏫 **SBJITMR College:**
• *"Tell me about SBJITMR Nagpur"*
• *"What departments and branches are available?"*
• *"What is the placement record & highest package?"*
• *"College location, bus routes & address"*
• *"College timings & library hours"*
• *"Fees, MahaDBT scholarships & hostel"*

💻 **Smart Campus Software Manual:**
• *"How to enroll in courses or view syllabus?"*
• *"How to upload study notes & PYQs?"*
• *"How does faculty resource moderation work?"*
• *"How to buy or sell on the zero-commission marketplace?"*
• *"How to use the AI Academic Advisor for CGPA analysis?"*
• *"What are the demo logins for student and faculty?"*

*Try asking one of the suggestions below!* 👇`,
    suggestions: [
      'About SBJITMR Nagpur',
      'What departments are available?',
      'Placements at SBJITMR',
      'How to use marketplace?',
      'What are demo accounts?'
    ],
  };
}

export function getWelcomeMessage(): ChatResponse {
  return {
    message: `🤖 **Welcome to the SBJITMR Campus AI Assistant!**

I am equipped with complete knowledge of **S. B. Jain Institute of Technology, Management and Research (SBJITMR), Nagpur** and the **Smart Campus Intelligence System**.

Feel free to ask me anything about:
• 🏫 **Campus Life:** Departments, Admissions, Placements, Bus Routes, Timings, Library & Facilities.
• 💻 **Digital System:** Course LMS, Resource Hub & PYQs, Faculty Moderation, ₹0 Marketplace, Assignments & AI Advisor.

*How can I assist you today?* 👇`,
    suggestions: [
      'About SBJITMR Nagpur',
      'What departments are available?',
      'Placements & recruiters',
      'How does the marketplace work?',
      'Demo accounts'
    ],
  };
}
