import { CallLink } from './components/CallLink'
import { ServiceMenu } from './components/ServiceMenu'
import { salon } from './data/salon'
import { nailServices, waxingServices } from './data/services'
import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header wrap">
        <a className="wordmark" href="#home" aria-label="Supreme Nails home">Supreme<span>NAILS</span></a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#visit">Visit Us</a>
          <CallLink placement="header" className="button button-small" />
        </nav>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="tiny-star" aria-hidden="true">✳</span> YOUR NAIL SALON IN LINDENHURST</p>
            <h1 id="hero-title">A little polish.<br />A little <em>you time.</em></h1>
            <p className="hero-description">Make room for a moment that’s yours. From a classic manicure to a fresh set, find your next finishing touch at Supreme Nails.</p>
            <div className="hero-actions">
              <CallLink placement="hero" />
              <a className="text-link" href="#services">View Services <span aria-hidden="true">↓</span></a>
            </div>
            <p className="booking-note">Appointments by phone · {salon.phone}</p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-arch"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span className="art-star">✧</span><div className="nail nail-cream" /><div className="nail nail-wine" /><div className="nail nail-pink" /><span className="art-star small-star">✧</span><span className="art-caption">THE BEAUTY IS IN THE DETAILS</span></div>
            <div className="art-label"><span>Supreme</span><span>NAILS & A LITTLE SELF-CARE</span></div>
          </div>
        </section>
        <div className="service-strip" aria-hidden="true"><span>MANICURES</span><span>✧</span><span>PEDICURES</span><span>✧</span><span>GEL & SNS</span><span>✧</span><span>WAXING</span></div>
        <section className="services wrap section-space" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <div><p className="eyebrow">THE SERVICE MENU</p><h2 id="services-title">Your style. <em>Your moment.</em></h2></div>
            <p>The classics you love, the details that make them yours. Explore our nail and waxing services.</p>
          </div>
          <div className="menus">
            <ServiceMenu title="Nails" number="01" description="From a simple refresh to a brand-new set." services={nailServices} />
            <ServiceMenu title="Waxing" number="02" description="A smooth finish, down to the details." services={waxingServices} />
          </div>
          <p className="price-note">Prices marked with + are starting prices. Call us with questions about your service.</p>
        </section>
        <section className="visit-section" id="visit" aria-labelledby="visit-title">
          <div className="wrap visit-grid">
            <div className="visit-copy"><p className="eyebrow">A LITTLE TIME FOR YOURSELF</p><h2 id="visit-title">See you<br /><em>at Supreme.</em></h2><p>Find us on North Wellwood Avenue in Lindenhurst. Give us a call to book your next visit.</p><CallLink placement="visit" /></div>
            <div className="visit-details">
              <div className="location"><h3>Come find us</h3><address>{salon.name}<br />{salon.address}<br />{salon.city}</address><a className="text-link" href={salon.directionsHref} data-track-event="directions_click" data-track-placement="visit">Get Directions <span aria-hidden="true">↗</span></a></div>
              <div className="hours"><h3>Salon hours</h3><dl>{salon.hours.map(({ days, time }) => <div key={days}><dt>{days}</dt><dd>{time}</dd></div>)}</dl></div>
              <div className="phone-detail"><span>Appointments by phone only</span><CallLink placement="contact" className="text-link" showNumber /></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap"><a className="wordmark" href="#home" aria-label="Supreme Nails home">Supreme<span>NAILS</span></a><p>Nails, care, and a moment for you.<br /><span>Lindenhurst, New York</span></p><small>© {new Date().getFullYear()} Supreme Nails</small></footer>
      <div className="mobile-call"><CallLink placement="mobile" /></div>
    </>
  )
}

export default App
