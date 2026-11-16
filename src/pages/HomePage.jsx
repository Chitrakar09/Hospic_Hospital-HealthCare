import {Hero,About,Services,Why,Departments,Appointment,Pricing,VideoSection,Testimonials,Doctors,FAQ,Blog,CTA} from '../sections/Home_page/index.js'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Why />
      <Departments />
      <Doctors />
      {/* <Blog/> */}
      <Appointment />
    </>
  );
}

export default HomePage;
