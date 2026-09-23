/**
 * Campus Knowledge Engine
 * Smart rule-based chatbot with keyword matching & intent classification
 * Covers: Campus Info, Academics, Marketplace, Resources, Assignments,
 *         Account Help, Notice Board, Timings, Facilities
 */

interface KnowledgeEntry {
  keywords: string[];
  patterns: RegExp[];
  response: string;
  suggestions?: string[];
}

interface KnowledgeCategory {
  name: string;
  icon: string;
  entries: KnowledgeEntry[];
}

const knowledgeBase: KnowledgeCategory[] = [
  // ═══════════════════════════════════════════════════════════════
  // 🏫 CAMPUS INFORMATION
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Campus Information',
    icon: '🏫',
    entries: [
      {
        keywords: ['college', 'name', 'institute', 'university', 'about', 'sbjit', 'sbit', 'campus'],
        patterns: [/what.*college/i, /about.*(campus|college|institute)/i, /tell.*about/i, /which.*college/i],
        response: `🏫 **St. Bernard Institute of Technology (SBIT)**\n\nSBIT is a premier engineering institute committed to excellence in technical education. The campus features state-of-the-art labs, a digital library, sports facilities, and a vibrant student community.\n\n📧 Institutional domain: **@sbjit.edu.in**\n🎓 Programs: B.Tech across 7 departments\n📅 Academic Year: 2026-27`,
        suggestions: ['What departments are available?', 'What are the timings?', 'Tell me about facilities'],
      },
      {
        keywords: ['department', 'departments', 'branch', 'branches', 'streams'],
        patterns: [/what.*department/i, /list.*department/i, /available.*branch/i, /how many.*department/i],
        response: `📚 **Departments at SBIT:**\n\n1. 💻 Computer Science & Engineering\n2. 📡 Electronics & Communication Engineering\n3. ⚡ Electrical Engineering\n4. ⚙️ Mechanical Engineering\n5. 🏗️ Civil Engineering\n6. 🖥️ Information Technology\n7. 🔬 Applied Sciences & Humanities\n\nEach department has dedicated faculty, labs, and research facilities.`,
        suggestions: ['Tell me about CSE', 'What courses are available?', 'How many semesters?'],
      },
      {
        keywords: ['semester', 'semesters', 'duration', 'years', 'how long'],
        patterns: [/how many.*semester/i, /semester.*system/i, /duration.*course/i, /how.*long.*program/i],
        response: `📅 **Semester Structure:**\n\nSBIT follows an **8-semester** (4-year) B.Tech program:\n\n• Semesters 1-2: Foundation courses\n• Semesters 3-4: Core department subjects\n• Semesters 5-6: Advanced & elective courses\n• Semesters 7-8: Specialization, projects & internship\n\nEach semester spans approximately 6 months with MSE (Mid-Semester Exam) and ESE (End-Semester Exam).`,
        suggestions: ['How does grading work?', 'Tell me about exams', 'What is CGPA?'],
      },
      {
        keywords: ['contact', 'phone', 'email', 'reach', 'helpline', 'support'],
        patterns: [/how.*contact/i, /contact.*info/i, /phone.*number/i, /email.*address/i],
        response: `📞 **Contact Information:**\n\n• 📧 General: admin@sbjit.edu.in\n• 🌐 Portal: Smart Campus Intelligence System\n• 🏢 For academic queries: Contact your TG (Teacher Guardian) Mentor\n• 💬 In-app: Use the Marketplace Chat for peer communication\n\n💡 *Tip: You can reach out to faculty through course announcements!*`,
        suggestions: ['Who is my TG Mentor?', 'How to send a message?', 'How to post on notice board?'],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 📚 ACADEMICS & COURSES
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Academics',
    icon: '📚',
    entries: [
      {
        keywords: ['course', 'courses', 'subjects', 'enroll', 'enrollment', 'register'],
        patterns: [/how.*enroll/i, /view.*course/i, /available.*course/i, /join.*course/i, /register.*course/i],
        response: `📚 **Courses & Enrollment:**\n\n**To view courses:**\n1. Navigate to **"Courses"** from the sidebar\n2. Browse courses by department and semester\n3. Click on a course to see details, syllabus, and announcements\n\n**To enroll:**\n• Click the **"Enroll"** button on any available course\n• You'll get access to announcements, resources, and assignments\n\n📝 Faculty can create courses and manage enrollments.`,
        suggestions: ['How to view assignments?', 'How to upload resources?', 'Tell me about grading'],
      },
      {
        keywords: ['exam', 'exams', 'examination', 'mse', 'ese', 'test', 'marks'],
        patterns: [/when.*exam/i, /exam.*schedule/i, /what.*mse/i, /what.*ese/i, /exam.*type/i],
        response: `📝 **Examination System:**\n\n• **MSE 1** — Mid-Semester Exam 1 (after ~6 weeks)\n• **MSE 2** — Mid-Semester Exam 2 (after ~12 weeks)\n• **ESE** — End-Semester Exam (final comprehensive exam)\n• **Unit Tests** — Periodic assessments by faculty\n\n**Marks Distribution (typical):**\n• MSE: 20-30 marks each\n• ESE: 40-60 marks\n• Assignments & Internal: 10-20 marks\n\n💡 *Check the Notice Board for exam schedules and seating arrangements!*`,
        suggestions: ['How to check my results?', 'What is CGPA?', 'How does grading work?'],
      },
      {
        keywords: ['cgpa', 'gpa', 'grade', 'grading', 'percentage', 'score', 'result', 'results'],
        patterns: [/how.*cgpa/i, /calculate.*cgpa/i, /grading.*system/i, /check.*result/i, /view.*marks/i],
        response: `📊 **Grading & CGPA:**\n\n**Grade Scale:**\n• O (Outstanding): 10 points — 90%+\n• A+ (Excellent): 9 points — 80-89%\n• A (Very Good): 8 points — 70-79%\n• B+ (Good): 7 points — 60-69%\n• B (Average): 6 points — 50-59%\n• F (Fail): 0 points — Below 40%\n\n**CGPA Formula:**\nCGPA = Σ(Credit × Grade Points) / Σ(Credits)\n\n📈 Use the **AI Academic Advisor** in the sidebar to track your performance trends and get personalized improvement plans!`,
        suggestions: ['Open AI Advisor', 'How to improve grades?', 'View my courses'],
      },
      {
        keywords: ['announcement', 'announcements', 'updates', 'news'],
        patterns: [/course.*announcement/i, /how.*announcement/i, /view.*announcement/i, /latest.*update/i],
        response: `📢 **Course Announcements:**\n\n**For Students:**\n• Open a course → View the **Announcements** tab\n• You'll receive real-time notifications for new announcements\n\n**For Faculty:**\n1. Navigate to your course\n2. Click **"Post Announcement"**\n3. Add a title, content, and optional attachment\n\n🔔 Announcements trigger instant notifications to all enrolled students!`,
        suggestions: ['How to check notifications?', 'View notice board', 'How to upload resources?'],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 📋 RESOURCES & STUDY MATERIALS
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Resources',
    icon: '📋',
    entries: [
      {
        keywords: ['resource', 'resources', 'study', 'material', 'notes', 'pyq', 'download', 'upload'],
        patterns: [/upload.*resource/i, /download.*notes/i, /study.*material/i, /share.*notes/i, /how.*upload/i, /pyq/i, /previous.*year/i],
        response: `📋 **Resource Hub & Study Materials:**\n\n**To browse & download:**\n1. Go to **"Resource Hub & PYQs"** in sidebar\n2. Filter by category: Notes, PYQs, References, Student Guides\n3. Click **Download** on any approved resource\n\n**To upload (Students):**\n1. Click the **Upload** button\n2. Select file, add title, category, and subject code\n3. Your upload enters the **Faculty Moderation Queue**\n4. Once approved ✅ → visible to all students!\n\n**Faculty uploads** are instantly published without moderation.\n\n💡 *Rate resources as "Helpful" to boost quality content!*`,
        suggestions: ['What is the moderation process?', 'How to bookmark resources?', 'Upload a resource'],
      },
      {
        keywords: ['moderation', 'moderate', 'approve', 'reject', 'review', 'pending'],
        patterns: [/moderation.*process/i, /how.*moderation/i, /why.*pending/i, /resource.*rejected/i, /approve.*resource/i],
        response: `🔍 **Resource Moderation Pipeline:**\n\n**How it works:**\n1. Student uploads a resource → Status: **PENDING_REVIEW** 🟡\n2. Faculty sees it in the **Moderation Queue**\n3. Faculty reviews the content preview\n4. ✅ **Approved** → Resource goes live for everyone\n5. ❌ **Rejected** → Student gets constructive feedback\n\n**Why moderation?**\nTo ensure academic quality and prevent inappropriate content.\n\n📝 *Faculty uploads bypass moderation and are published immediately.*`,
        suggestions: ['How to upload resources?', 'View my resources', 'Contact faculty'],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 📝 ASSIGNMENTS
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Assignments',
    icon: '📝',
    entries: [
      {
        keywords: ['assignment', 'assignments', 'submit', 'submission', 'deadline', 'homework', 'due'],
        patterns: [/how.*submit/i, /assignment.*due/i, /submit.*assignment/i, /late.*submission/i, /view.*assignment/i],
        response: `📝 **Assignments & Submissions:**\n\n**For Students:**\n1. Navigate to **"Assignments"** in sidebar\n2. View all assignments with deadlines\n3. Click an assignment → Upload your solution file\n4. ⚠️ Late submissions are flagged but may still be accepted\n\n**For Faculty:**\n• Create assignments with description, max marks, due date\n• View submissions in the **Grading Center**\n• Grade with marks + qualitative feedback\n\n⏰ *Always check deadlines! The system auto-detects late submissions.*`,
        suggestions: ['How does grading work?', 'View my courses', 'Check deadlines'],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 🏪 CAMPUS MARKETPLACE
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Marketplace',
    icon: '🏪',
    entries: [
      {
        keywords: ['marketplace', 'buy', 'sell', 'listing', 'product', 'textbook', 'calculator', 'item'],
        patterns: [/how.*sell/i, /how.*buy/i, /list.*item/i, /marketplace.*work/i, /sell.*textbook/i, /buy.*calculator/i],
        response: `🏪 **Campus Marketplace:**\n\nA **zero-cost** student-to-student exchange platform!\n\n**To sell an item:**\n1. Go to **"Marketplace"** → Click **"Create Listing"**\n2. Add photos, title, description, price, condition\n3. Categories: Textbooks, Calculators, Lab Coats, Electronics, Hostel Items, etc.\n\n**To buy:**\n1. Browse available listings\n2. Click **"I'm Interested"** to send a purchase request\n3. Chat privately with the seller via **in-app messaging** 💬\n4. Arrange a physical campus handover\n\n🔒 *No personal phone/email is shared — all communication is in-app!*`,
        suggestions: ['How does the handover work?', 'How to chat with sellers?', 'View my listings'],
      },
      {
        keywords: ['chat', 'message', 'messaging', 'conversation', 'talk', 'dm'],
        patterns: [/how.*chat/i, /send.*message/i, /in-app.*chat/i, /talk.*seller/i, /private.*message/i],
        response: `💬 **In-App Messaging:**\n\n**How to start a chat:**\n1. Go to a Marketplace listing\n2. Click **"I'm Interested"** or **"Chat"**\n3. A private conversation opens between buyer and seller\n\n**Features:**\n• 🔒 Privacy-preserving — no personal info leaked\n• ⚡ Real-time messaging via WebSocket\n• 📱 Accessible from the chat icon in the top navbar\n• 🚫 Block users if needed\n\n💡 *All marketplace conversations are linked to specific products for context.*`,
        suggestions: ['How to buy items?', 'How to block someone?', 'View marketplace'],
      },
      {
        keywords: ['handover', 'reserved', 'sold', 'status', 'purchase', 'request'],
        patterns: [/handover.*process/i, /how.*handover/i, /item.*status/i, /purchase.*request/i, /accept.*request/i],
        response: `🤝 **Purchase & Handover Lifecycle:**\n\n**Status Flow:**\n\`AVAILABLE\` → \`PENDING\` (buyer requests) → \`RESERVED\` (seller accepts) → \`SOLD\` (physical handover done)\n\n**Steps:**\n1. 🛒 Buyer sends a purchase request\n2. 💬 Seller reviews and chats with buyer\n3. ✅ Seller accepts → item is **RESERVED**\n4. 📦 They meet on campus for handover\n5. 🎉 Seller marks as **SOLD** → listing closed\n\n❌ Either party can cancel at any stage before handover.`,
        suggestions: ['How to list an item?', 'How to chat?', 'Report a listing'],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 🔐 ACCOUNT & AUTH
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Account',
    icon: '🔐',
    entries: [
      {
        keywords: ['login', 'signin', 'sign in', 'log in', 'password', 'forgot', 'reset', 'account'],
        patterns: [/how.*login/i, /forgot.*password/i, /reset.*password/i, /can't.*login/i, /create.*account/i, /sign.*up/i],
        response: `🔐 **Account & Authentication:**\n\n**To register:**\n• Use your institutional email (**@sbjit.edu.in** only)\n• Personal emails (Gmail, Yahoo, etc.) are blocked\n• Set a strong password and select your department\n\n**Forgot password?**\n1. Click **"Forgot Password"** on the login page\n2. Enter your institutional email\n3. Follow the reset instructions\n\n**Roles:**\n• 🎓 **Student** — Access courses, resources, marketplace\n• 👨‍🏫 **Faculty** — Create courses, moderate, grade\n• 🛡️ **Admin** — Full system access & audit logs\n\n💡 *Demo accounts are available via 1-Click buttons on the login page!*`,
        suggestions: ['What are demo accounts?', 'How to change password?', 'What roles exist?'],
      },
      {
        keywords: ['demo', 'test', 'sample', 'try', 'demo account'],
        patterns: [/demo.*account/i, /test.*account/i, /try.*system/i, /sample.*login/i, /1-click/i],
        response: `🧪 **Demo Accounts (Pre-Seeded):**\n\n| Role | Name | Email | Password |\n|------|------|-------|----------|\n| 👨‍🏫 Faculty | Prof. Sarah Jenkins | faculty1@sbjit.edu.in | Password@123 |\n| 🎓 Student (6th Sem) | Alex Rivera | student1@sbjit.edu.in | Password@123 |\n| 🎓 Student (4th Sem) | Rohan Sharma | student2@sbjit.edu.in | Password@123 |\n\n💡 *Use the 1-Click Demo Buttons on the login page for instant access!*`,
        suggestions: ['How to login?', 'What can students do?', 'What can faculty do?'],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 📢 NOTICE BOARD
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Notice Board',
    icon: '📢',
    entries: [
      {
        keywords: ['notice', 'notices', 'board', 'notice board', 'campus notice', 'event', 'circular'],
        patterns: [/notice.*board/i, /campus.*notice/i, /how.*notice/i, /post.*notice/i, /view.*notice/i, /upcoming.*event/i],
        response: `📢 **Campus Notice Board:**\n\n**View notices:**\n• Navigate to **"Notice Board"** in the sidebar\n• Filter by category: General, Academic, Event, Exam, Emergency, Cultural, Sports\n• Priority levels: Normal 🟢, High 🟡, Urgent 🔴\n\n**Post a notice (Faculty/Admin):**\n1. Click **"Create Notice"**\n2. Add title, content, category, priority\n3. Set optional location and event date\n4. Set an expiry date (notices auto-expire)\n\n📌 *Urgent notices are highlighted prominently for all users!*`,
        suggestions: ['View notice board', 'How to contact admin?', 'Check exam schedule'],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 🕐 TIMINGS & SCHEDULE
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Timings',
    icon: '🕐',
    entries: [
      {
        keywords: ['timing', 'timings', 'time', 'hours', 'schedule', 'when', 'open', 'close'],
        patterns: [/what.*timing/i, /college.*timing/i, /when.*open/i, /office.*hour/i, /working.*hour/i],
        response: `🕐 **Campus Timings:**\n\n| Facility | Timing |\n|----------|--------|\n| 🏫 College Hours | 9:00 AM – 5:00 PM (Mon-Sat) |\n| 📚 Library | 8:30 AM – 8:00 PM (Mon-Sat) |\n| 💻 Computer Lab | 9:00 AM – 6:00 PM |\n| 🍽️ Canteen | 8:00 AM – 7:00 PM |\n| 🏢 Admin Office | 10:00 AM – 4:00 PM |\n| 👨‍🏫 Faculty Office Hours | 2:00 PM – 4:00 PM (Tue/Thu) |\n| 🏋️ Sports Complex | 6:00 AM – 8:00 AM, 4:00 PM – 7:00 PM |\n\n📌 *Timings may vary during exam periods. Check the Notice Board for updates!*`,
        suggestions: ['Library details', 'How to contact faculty?', 'Campus facilities'],
      },
      {
        keywords: ['library', 'books', 'borrow', 'reading'],
        patterns: [/library.*timing/i, /about.*library/i, /borrow.*book/i, /library.*facility/i],
        response: `📚 **Campus Library:**\n\n• ⏰ **Hours:** 8:30 AM – 8:00 PM (Monday to Saturday)\n• 📖 **Collection:** 50,000+ books, journals, and digital resources\n• 💻 **Digital Access:** E-journals, IEEE papers, NPTEL resources\n• 📋 **Borrowing:** Up to 3 books for 14 days (student ID required)\n• 🔇 **Quiet Zone:** Dedicated silent study areas available\n• 🖨️ **Print/Scan:** Self-service kiosk available\n\n💡 *Use the Resource Hub on this platform for peer-shared digital study materials!*`,
        suggestions: ['Campus timings', 'How to download resources?', 'Study materials'],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 🏢 FACILITIES
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Facilities',
    icon: '🏢',
    entries: [
      {
        keywords: ['facility', 'facilities', 'infrastructure', 'amenities', 'wifi', 'internet', 'lab', 'labs'],
        patterns: [/campus.*facility/i, /what.*facilities/i, /wifi.*available/i, /internet.*access/i, /computer.*lab/i],
        response: `🏢 **Campus Facilities:**\n\n• 📶 **Wi-Fi:** Campus-wide free internet (login with institutional ID)\n• 💻 **Computer Labs:** 5 labs with 300+ workstations\n• 🔬 **Research Labs:** Department-specific research facilities\n• 📚 **Central Library:** 50,000+ books + digital resources\n• 🏋️ **Sports Complex:** Indoor & outdoor facilities\n• 🍽️ **Canteen:** Hygienic food court with subsidized meals\n• 🏥 **Medical Room:** First-aid and basic healthcare\n• 🚌 **Transport:** College bus service covering major routes\n• 🏠 **Hostel:** Separate boys & girls hostels with 24/7 security\n\n💡 *Report facility issues through the admin office or Notice Board.*`,
        suggestions: ['Campus timings', 'Wi-Fi login help', 'Hostel details'],
      },
      {
        keywords: ['hostel', 'accommodation', 'room', 'stay', 'boarding'],
        patterns: [/hostel.*detail/i, /about.*hostel/i, /hostel.*timing/i, /hostel.*fee/i, /accommodation/i],
        response: `🏠 **Hostel Facilities:**\n\n• 🏢 Separate Boys & Girls hostels\n• 🔒 24/7 security with biometric access\n• 📶 Wi-Fi enabled in all rooms\n• 🍽️ Mess facility with 3 meals/day\n• 🧺 Laundry service available\n• 📖 Common study rooms\n• ⏰ Gate closing: 9:00 PM (weekdays), 10:00 PM (weekends)\n\n💡 *Use the Campus Marketplace to buy/sell hostel items from seniors!*`,
        suggestions: ['View marketplace', 'Campus facilities', 'Canteen timings'],
      },
      {
        keywords: ['sport', 'sports', 'ground', 'gym', 'fitness', 'playground'],
        patterns: [/sport.*facility/i, /gym.*available/i, /playground/i, /sport.*complex/i, /fitness/i],
        response: `🏋️ **Sports & Fitness:**\n\n• ⚽ Football & Cricket Ground\n• 🏀 Basketball & Volleyball Courts\n• 🏸 Badminton & Table Tennis (Indoor)\n• 🏋️ Gymnasium with modern equipment\n• 🏊 Inter-college sports competitions\n\n⏰ **Timings:** 6:00 AM – 8:00 AM & 4:00 PM – 7:00 PM\n\n🏆 *Annual sports fest "Athletica" features 15+ events!*`,
        suggestions: ['Campus timings', 'Upcoming events', 'View notice board'],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 🤖 AI & PLATFORM FEATURES
  // ═══════════════════════════════════════════════════════════════
  {
    name: 'Platform Features',
    icon: '🤖',
    entries: [
      {
        keywords: ['ai', 'advisor', 'academic advisor', 'performance', 'analysis', 'improvement', 'study plan'],
        patterns: [/ai.*advisor/i, /academic.*advisor/i, /performance.*analysis/i, /study.*plan/i, /improve.*grade/i],
        response: `🤖 **AI Academic Advisor:**\n\nThe platform includes a built-in **AI Academic Advisor** accessible from the sidebar:\n\n**Features:**\n• 📊 **Performance Analysis** — Visual breakdown of your marks across courses\n• 📈 **CGPA Trend** — Semester-wise CGPA history chart\n• 🎯 **Weak Subject Detection** — Identifies courses below 65% benchmark\n• 📺 **Curated Video Resources** — YouTube tutorials for weak subjects\n• 📅 **Study Plan Generator** — 7-day or 30-day revision plans\n\n💡 *Navigate to "AI Academic Advisor" in the sidebar to get started!*`,
        suggestions: ['How to check my CGPA?', 'How does grading work?', 'View my courses'],
      },
      {
        keywords: ['feature', 'features', 'what can', 'help', 'do', 'capabilities', 'platform'],
        patterns: [/what.*can.*do/i, /platform.*feature/i, /what.*feature/i, /help.*me/i, /what.*available/i],
        response: `✨ **Smart Campus Intelligence System — Features:**\n\n📚 **Academic Hub**\n• Course enrollment & management\n• Broadcast announcements\n• Study material sharing with moderation\n• Assignments with rubric grading\n\n🏪 **Campus Marketplace**\n• Zero-cost student exchange\n• In-app private messaging\n• Secure handover lifecycle\n\n🤖 **AI Academic Advisor**\n• Performance analytics & CGPA trends\n• Weak subject detection\n• Curated study resources & plans\n\n📢 **Notice Board** — Campus-wide announcements\n🔐 **Secure Auth** — Institutional email verification\n📊 **Audit Logs** — Activity tracking\n🔍 **Global Search** — Ctrl+K to search anything!`,
        suggestions: ['How to use marketplace?', 'How to upload resources?', 'Tell me about AI Advisor'],
      },
      {
        keywords: ['search', 'find', 'ctrl+k', 'command'],
        patterns: [/how.*search/i, /global.*search/i, /find.*something/i, /ctrl.*k/i, /command.*palette/i],
        response: `🔍 **Global Search (Ctrl+K):**\n\nPress **Ctrl+K** (or **⌘+K** on Mac) anywhere in the app to open the **Command Palette**!\n\n**You can search for:**\n• 📚 Courses by name or code\n• 📋 Resources and study materials\n• 🏪 Marketplace listings\n• 📢 Notices\n• ⚡ Quick navigation to any page\n\n💡 *It's the fastest way to find anything on the platform!*`,
        suggestions: ['Platform features', 'How to navigate?', 'View courses'],
      },
      {
        keywords: ['notification', 'notifications', 'bell', 'alert', 'alerts'],
        patterns: [/how.*notification/i, /check.*notification/i, /notification.*work/i, /get.*alert/i],
        response: `🔔 **Notifications:**\n\nYou receive real-time notifications for:\n• 📢 New course announcements\n• ✅ Resource moderation updates (approved/rejected)\n• 📝 Assignment deadlines & grading\n• 🛒 Marketplace purchase requests\n• 💬 New chat messages\n\n**How to view:**\n• Click the 🔔 bell icon in the top navigation bar\n• Unread notifications show a badge count\n• Click any notification to navigate to the relevant page\n\n💡 *Notifications are delivered in real-time via WebSocket!*`,
        suggestions: ['How to use marketplace?', 'View assignments', 'Check announcements'],
      },
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// GREETING & FALLBACK RESPONSES
// ═══════════════════════════════════════════════════════════════

const greetings: KnowledgeEntry = {
  keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'hii', 'hiii', 'namaste', 'howdy', 'sup', 'yo'],
  patterns: [/^hi\b/i, /^hello/i, /^hey/i, /^good\s*(morning|afternoon|evening)/i, /^namaste/i, /^howdy/i],
  response: `👋 **Hello! Welcome to Campus AI Assistant!**\n\nI'm here to help you with anything related to **SBIT campus**. You can ask me about:\n\n• 🏫 Campus info & departments\n• 📚 Courses, exams & grading\n• 📋 Resources & study materials\n• 📝 Assignments & submissions\n• 🏪 Marketplace (buy/sell items)\n• 🔐 Account & login help\n• 📢 Notice board\n• 🕐 Timings & facilities\n\n*Just type your question or tap a suggestion below!* 👇`,
  suggestions: ['What is this platform?', 'Campus timings', 'How to use marketplace?', 'Demo accounts'],
};

const thankYou: KnowledgeEntry = {
  keywords: ['thanks', 'thank', 'thank you', 'thx', 'ty', 'appreciated', 'helpful'],
  patterns: [/thank/i, /\bthx\b/i, /\bty\b/i, /appreciated/i],
  response: `😊 **You're welcome!** Happy to help!\n\nFeel free to ask me anything else about the campus. I'm always here! 🤖✨`,
  suggestions: ['Campus info', 'View features', 'Campus timings'],
};

const goodbye: KnowledgeEntry = {
  keywords: ['bye', 'goodbye', 'see you', 'later', 'exit', 'close'],
  patterns: [/\bbye\b/i, /goodbye/i, /see\s*you/i, /\blater\b/i],
  response: `👋 **Goodbye! Have a great day!**\n\nRemember, I'm always here whenever you need help. Just click the chat button! 🎓✨`,
  suggestions: [],
};

const fallbackResponses = [
  `🤔 I'm not sure about that one! Here are some things I can help with:\n\n• 🏫 Campus information\n• 📚 Courses & academics\n• 📋 Resources & materials\n• 🏪 Marketplace\n• 🔐 Account help\n• 🕐 Timings & facilities\n\n*Try asking something like "How to enroll in a course?" or "Campus timings"*`,
  `❓ I didn't quite understand that. Could you rephrase?\n\nI'm best at answering questions about:\n• Campus facilities & timings\n• Academic courses & exams\n• Resource uploads & moderation\n• Marketplace buying/selling\n• Account & login help\n\n💡 *Tip: Try using keywords like "courses", "marketplace", "timings", etc.*`,
  `🤖 Hmm, I don't have information on that yet. I specialize in campus-related queries!\n\n**Quick suggestions:**\n• "Tell me about the college"\n• "How to upload study materials?"\n• "Campus timings"\n• "How does the marketplace work?"\n\n*Tap a suggestion below or type your question!* 👇`,
];

// ═══════════════════════════════════════════════════════════════
// MATCHING ENGINE
// ═══════════════════════════════════════════════════════════════

interface ChatResponse {
  message: string;
  suggestions: string[];
}

function normalizeInput(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^\w\s?]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function calculateKeywordScore(input: string, keywords: string[]): number {
  const words = input.split(/\s+/);
  let score = 0;
  for (const keyword of keywords) {
    const kwParts = keyword.split(/\s+/);
    if (kwParts.length > 1) {
      // Multi-word keyword — check if all parts are present
      if (kwParts.every((part) => input.includes(part))) {
        score += 3;
      }
    } else if (words.includes(keyword)) {
      score += 2;
    } else if (input.includes(keyword)) {
      score += 1;
    }
  }
  return score;
}

function calculatePatternScore(input: string, patterns: RegExp[]): number {
  let score = 0;
  for (const pattern of patterns) {
    if (pattern.test(input)) {
      score += 5; // Patterns are stronger signals
    }
  }
  return score;
}

export function getChatResponse(userInput: string): ChatResponse {
  const normalized = normalizeInput(userInput);

  if (!normalized || normalized.length < 1) {
    return {
      message: greetings.response,
      suggestions: greetings.suggestions || [],
    };
  }

  // Check greetings first
  const greetScore = calculateKeywordScore(normalized, greetings.keywords) + calculatePatternScore(userInput, greetings.patterns);
  if (greetScore >= 2) {
    return {
      message: greetings.response,
      suggestions: greetings.suggestions || [],
    };
  }

  // Check thank you
  const thankScore = calculateKeywordScore(normalized, thankYou.keywords) + calculatePatternScore(userInput, thankYou.patterns);
  if (thankScore >= 2) {
    return {
      message: thankYou.response,
      suggestions: thankYou.suggestions || [],
    };
  }

  // Check goodbye
  const byeScore = calculateKeywordScore(normalized, goodbye.keywords) + calculatePatternScore(userInput, goodbye.patterns);
  if (byeScore >= 2) {
    return {
      message: goodbye.response,
      suggestions: goodbye.suggestions || [],
    };
  }

  // Score all knowledge entries
  let bestMatch: { entry: KnowledgeEntry; score: number } | null = null;

  for (const category of knowledgeBase) {
    for (const entry of category.entries) {
      const kwScore = calculateKeywordScore(normalized, entry.keywords);
      const patternScore = calculatePatternScore(userInput, entry.patterns);
      const totalScore = kwScore + patternScore;

      if (totalScore > 0 && (!bestMatch || totalScore > bestMatch.score)) {
        bestMatch = { entry, score: totalScore };
      }
    }
  }

  if (bestMatch && bestMatch.score >= 2) {
    return {
      message: bestMatch.entry.response,
      suggestions: bestMatch.entry.suggestions || [],
    };
  }

  // Fallback
  const fallback = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  return {
    message: fallback,
    suggestions: ['Campus info', 'Courses & academics', 'Marketplace help', 'Campus timings', 'Platform features'],
  };
}

export function getWelcomeMessage(): ChatResponse {
  return {
    message: `🤖 **Hi there! I'm your Campus AI Assistant!**\n\nI can answer questions about **SBIT campus**, courses, exams, resources, marketplace, facilities, and more.\n\n*What would you like to know?* 👇`,
    suggestions: ['What is this platform?', 'Campus timings', 'How to use marketplace?', 'Demo accounts', 'Campus facilities'],
  };
}
