import {Hero,About,Services,Why,Departments,Appointment,Pricing,VideoSection,Testimonials,Doctors,FAQ,Blog,CTA} from '../sections/HomePage/index.js'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Why />
      <Departments />
      <Doctors />
      <Appointment />
      {/* <FAQ /> */}
      {/* <Blog /> */}
      <CTA />
    </>
  );
}

export default HomePage;
