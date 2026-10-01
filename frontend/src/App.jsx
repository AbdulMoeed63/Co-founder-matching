import { useState } from 'react'

const candidates = [
  { name: 'Sarah Ahmed', role: 'UI/UX & Product', score: 94, skills: 'Figma · Research · Product' },
  { name: 'Hamza Khan', role: 'Backend Developer', score: 89, skills: 'Python · FastAPI · MongoDB' },
  { name: 'Ayesha Malik', role: 'Marketing & Growth', score: 84, skills: 'Marketing · SEO · Growth' }
]

function Navbar({ page, setPage }) {
  return <nav className="nav">
    <button className="brand" onClick={() => setPage('home')}>Cohatch<span>.</span></button>
    <div className="navlinks">
      {['home','dashboard','matching','profile','investors'].map(p =>
        <button className={page === p ? 'active' : ''} onClick={() => setPage(p)} key={p}>
          {p[0].toUpperCase()+p.slice(1)}
        </button>
      )}
    </div>
    <button className="avatar">AM</button>
  </nav>
}

function Home({ setPage }) {
  return <main className="hero">
    <section>
      <div className="pill">AI-POWERED COFOUNDER MATCHING</div>
      <h1>Find the right person to <span>build with.</span></h1>
      <p className="lead">Cohatch analyzes skills, experience, goals and compatibility to help founders discover meaningful cofounder matches.</p>
      <div className="actions">
        <button className="primary" onClick={() => setPage('dashboard')}>Explore Dashboard →</button>
        <button className="secondary" onClick={() => setPage('matching')}>Find Cofounders</button>
      </div>
      <div className="stats">
        <div><b>94%</b><small>Example match score</small></div>
        <div><b>AI</b><small>Explainable matching</small></div>
        <div><b>360°</b><small>Founder profiles</small></div>
      </div>
    </section>
    <aside className="hero-card">
      <div className="card-label">AI MATCH PREVIEW</div>
      <div className="match-circle">94<span>%</span></div>
      <h3>Sarah Ahmed</h3>
      <p>UI/UX & Product</p>
      <div className="tags"><span>Product</span><span>Figma</span><span>Research</span></div>
      <div className="reason"><b>Why this match?</b><br/>Complementary skills and strong project-goal alignment.</div>
    </aside>
  </main>
}

function Dashboard({ setPage }) {
  return <main className="page">
    <div className="page-head"><div><div className="eyebrow">FOUNDER WORKSPACE</div><h1>Your dashboard</h1><p>Manage your profile, project and potential matches.</p></div><button className="primary" onClick={() => setPage('matching')}>View Matches</button></div>
    <div className="grid three">
      <div className="stat-card"><small>PROFILE COMPLETION</small><strong>82%</strong><div className="bar"><i style={{width:'82%'}}/></div></div>
      <div className="stat-card"><small>AI MATCHES</small><strong>12</strong><p>3 new this week</p></div>
      <div className="stat-card"><small>PROJECT ALIGNMENT</small><strong>91%</strong><p>Strong alignment</p></div>
    </div>
    <div className="panel"><div className="panel-title"><h2>Recommended matches</h2><button onClick={() => setPage('matching')}>See all</button></div>
      {candidates.slice(0,2).map(c => <Candidate c={c} key={c.name}/>)}
    </div>
  </main>
}

function Candidate({c}) {
  return <div className="candidate"><div className="mini-avatar">{c.name.split(' ').map(x=>x[0]).join('')}</div><div className="candidate-info"><b>{c.name}</b><span>{c.role}</span><small>{c.skills}</small></div><div className="score"><strong>{c.score}%</strong><span>match</span></div><button className="outline">View</button></div>
}

function Matching() {
  return <main className="page"><div className="eyebrow">AI DISCOVERY</div><h1>Find your cofounder</h1><p className="lead">Matches are examples for this starter project. Connect your FastAPI AI model here later.</p>
    <div className="filters"><input placeholder="Search skills, roles or interests..." /><select><option>All roles</option><option>Technical</option><option>Product</option><option>Marketing</option></select><button className="primary">AI Search</button></div>
    <div className="panel">{candidates.map(c => <Candidate c={c} key={c.name}/>)}</div>
  </main>
}

function Profile() {
  return <main className="page"><div className="eyebrow">YOUR PROFILE</div><h1>Abdul Moeed</h1><p className="lead">Software Engineering · AI/ML · Full-stack development</p>
    <div className="grid two"><div className="panel"><h2>About</h2><p>Building AI-powered products and looking for complementary skills, shared vision and reliable collaboration.</p><h3>Skills</h3><div className="tags"><span>Python</span><span>Machine Learning</span><span>FastAPI</span><span>React</span><span>MongoDB</span></div></div>
    <div className="panel"><h2>Resume</h2><div className="upload">Drop your resume here<br/><small>PDF or DOCX · AI parsing will be connected later</small><input type="file"/></div></div></div>
  </main>
}

function Investors() {
  return <main className="page"><div className="eyebrow">DUE DILIGENCE</div><h1>Investor verification</h1><p className="lead">A starter area for investors to review project scope, founder information and funding opportunities.</p>
  <div className="grid three"><div className="panel"><h3>Project Scope</h3><p>Review goals, milestones and technical requirements.</p></div><div className="panel"><h3>Founder Verification</h3><p>Review profiles, resumes and project alignment.</p></div><div className="panel"><h3>Funding</h3><p>Track investment interest and deal information.</p></div></div></main>
}

function Login({ setPage }) {
  return <main className="auth"><div className="auth-card"><div className="brand big">Cohatch<span>.</span></div><h1>Welcome back</h1><p>Sign in to continue building.</p><input placeholder="Email address"/><input placeholder="Password" type="password"/><button className="primary" onClick={() => setPage('dashboard')}>Sign in</button></div></main>
}

export default function App() {
  const [page,setPage] = useState('home')
  const content = page === 'home' ? <Home setPage={setPage}/> :
    page === 'dashboard' ? <Dashboard setPage={setPage}/> :
    page === 'matching' ? <Matching/> :
    page === 'profile' ? <Profile/> :
    page === 'investors' ? <Investors/> : <Login setPage={setPage}/>
  return <><Navbar page={page} setPage={setPage}/>{content}<footer>© 2026 Cohatch · AI Cofounder Matching</footer></>
}