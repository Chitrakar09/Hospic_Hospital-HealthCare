import {Hero,About,Services,Why,Departments,Appointment,Pricing,VideoSection,Testimonials,Doctors,FAQ,Blog,CTA,Notices} from '../sections/Home_page/index.js'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Why />
      <Departments />
      <Doctors initialCount={3} />
      <Notices/>
      {/* <Blog/> */}
      <Appointment />
    </>
  );
}

export default HomePage;
