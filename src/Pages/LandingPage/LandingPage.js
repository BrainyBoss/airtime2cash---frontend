import React from 'react'
import { Hero, AboutSection, SideIndicator, AboutCardWrapper, AboutCard, ProductSection, TestimonialSection, TestimonialCardWrapper} from '../../styles/LandingPageStyle'
import heroImage from '../../assets/images/HeroImage.png'
import rechargeImage from '../../assets/images/Recharge.png'
import loginIcon from '../../assets/icon/Login.svg'
import DashboardIcon from '../../assets/icon/Dashboard.svg'
import Spinning from '../../assets/icon/Spinning.svg'
import StyleButton from '../../styles/Button.styles.js'
import SliderItem from '../../Components/SliderItem'
import { Navbar} from '../../Components/Navbar'
import { Footer } from '../../Components/Footer'
import { Link } from 'react-router-dom'
 
const LandingPage = () => {
 const slideData = [
    {
      name: 'Christopher Moses',
      message: 'Our able CEO. Get Instant Airtime with Zero Stress. Enjoy Speedy Airtime recharge - You Can Get Airtime in a Few Clicks with JumiaPay Nigeria - MTN, Glo, Airtel and 9Mobile.'
    },
    {
      name: 'King solomon',
      message: 'Solution to excess airtime is here for you again Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
      name: 'Paul James',
      message: 'Kindly be informed that the Zenith Bank mobile banking app has been upgraded. Please visit the app store of your mobile device to download the latest version. Thank you'
    },
    {
      name: 'John Doe',
      message: 'We provide empirical evidence that Rwandans use the mobile phone network to transfer airtime to those affected by unexpected shocks. Using an extensive dataset on mobile phone activity.'
    },
  ]

  return (
    <div id="landed">
      {/* HEOR SECTION  */}
      <Navbar landing/>
    <Hero> 
      <div className='heroText'>
        <p><b>Surplus Airtime? Don’t worry we got you covered</b></p>
        <small>Excess recharge!, this is usually heartbreaking, worry no more.  Now you can exchange your excess airtime for cash value via this platform</small>
        <Link to='/register'><StyleButton height='48px' width='185px'>Get Started</StyleButton></Link>
      </div>
      <div className='heroImage'><img src={heroImage} alt="" /></div>
    </Hero>

    {/* ABOUT SECTION */}
    <AboutSection id='about'>
      <SideIndicator/>
      <div className='aboutDescription'>
        <h2>Change Surplus Airtime to Real Cash</h2>
        <small>In three simple steps, change airtime to cash</small>
      </div>
    </AboutSection>

    <AboutCardWrapper>
      <AboutCard backgroundColor='#FFF1F3'>
        <img src={loginIcon} alt=""/>
        <h4>Login or Register</h4>
        <p>First step is to Register, or you can login if you already have an account with us. The registration steps is easy and straightforward .</p>
      </AboutCard>
      <AboutCard backgroundColor='#FFF1F3'>
        <img src={DashboardIcon} alt=""/>
        <h4>Deposit From Dashboard</h4>
        <p>After successful registration and email verification, login to your dashboard to access your wallet where you can make deposit.</p>
      </AboutCard>
      <AboutCard backgroundColor='#F5FCF5'>
        <img src={Spinning} alt=""/>
        <h4>Convert</h4>
        <p>Then on the dashboard you can convert your recharge card which to cash</p>
      </AboutCard>
    </AboutCardWrapper>

    {/* PRODUCT SECTION */}
    <ProductSection id="product">
      <div className='productDescription'>
        <h2>The best platform for your convenient airtime exchange</h2>
        <p>You can also sell and buy recharge cards via this platform. The basis you need to do is verify you email </p>
        <Link to='/register'><StyleButton height='48px' width='185px'>Get Started</StyleButton></Link>
      </div>
      <div className='productImage'><img src={rechargeImage} alt=""/></div>
    </ProductSection>


    {/* TESTIMONIAL SECTION */}
    <TestimonialSection id='contactUs'>
      <h1>Hear what our customers are saying</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat eget ipsum, sed praesent.</p>
    </TestimonialSection>

    <TestimonialCardWrapper> 
        <SliderItem slideData={slideData}/>
    </TestimonialCardWrapper>
    <Footer />
    </div>
  )
}


export default LandingPage