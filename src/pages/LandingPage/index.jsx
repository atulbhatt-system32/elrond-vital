import React from 'react';
import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  hero_text,
  how_1_mobile,
  how_2_mobile,
  how_3_mobile,
  step1_notebook,
  step2_share,
  step3_collect,
  step4_give,
  step_1_base,
  step_2_base,
  step_3_base,
  step_4_base
} from '../../assets/img';
import Charity from '../../assets/img/charity.svg';
import Play from '../../assets/img/play.svg';
import {
  AdvanceCard,
  BasicCard,
  Carousel,
  GradientBtn,
  Ocassion,
  OcassionDesktop,
  Overlay
} from '../../components';
import styles from './LandingPage.module.scss';

const overlayFunction = (event) => {
  console.log('overlayFunction', event);
};
const LandingPage = () => {
  return (
    <div className='home'>
      <main>
        {/* HERO SECTION */}
        <section className={[styles.hero_section, styles.mobile].join(' ')}>
          <div className={styles.hero_section_content}>
            <div className={styles.hero_section_text_wrapper}>
              <img src={hero_text} alt='your fully decentralized money pot' />
            </div>
            <div className={styles.card_wrapper}>
              <BasicCard>
                <span className={styles.card_text}>
                  Create, share, participate securely in a transparent and
                  automated way
                </span>
                <div onClick={() => console.log('hello')}>Hello</div>
                <GradientBtn
                  text='Create'
                  clickAction={() => {
                    overlayFunction;
                  }}
                />
              </BasicCard>
            </div>
          </div>
        </section>

        <section className={[styles.hero_section, styles.desktop].join(' ')}>
          <div className={styles.hero_section_content}>
            <div className={styles.hero_section_left}>
              <div className={styles.hero_section_text_wrapper}>
                <img src={hero_text} alt='your fully decentralized money pot' />
              </div>
              <div className={styles.card_wrapper}>
                <BasicCard>
                  <span className={styles.card_text}>
                    Create, share, participate securely in a transparent and
                    automated way{' '}
                  </span>{' '}
                  <div className={styles.gradient_btn_wrapper}>
                    <GradientBtn text='Create' />
                  </div>
                </BasicCard>
              </div>
            </div>
          </div>
        </section>
        {/* HERO SECTION END */}

        {/* About Section Begins */}
        <section className={[styles.main_about, styles.mobile].join(' ')}>
          <h2 className={styles.main_head}>About us</h2>
          <p className={styles.main_text}>
            Vital is a fully decentralized application allowing anyone to create
            a fundraising project for all types of needs:{' '}
            <strong>Wedding, birthday, retirement, medical</strong> support or
            simply for <strong>common expenses.</strong>
          </p>
          <p className={styles.main_text}>
            Built on the Elrond blockchain, Vital is fully governed by Smart
            Contracts that provide transparency and security for our users.Our
            business model allows us to let you spend your kitty for free by
            spending it with one of our partners or by participating in our
            staking program.
          </p>

          <div className={styles.main_btn}>
            <GradientBtn text='How does this work?' />
          </div>
        </section>

        <section className={[styles.main_about, styles.desktop].join(' ')}>
          <div className={styles.main_about_left}>
            <div className={styles.main_about_left_content}>
              <h2 className={styles.main_head}>About us</h2>
              <p className={styles.main_text}>
                Vital is a fully decentralized application allowing anyone to
                create a fundraising project for all types of needs:{' '}
                <strong>Wedding, birthday, retirement, medical</strong> support
                or simply for <strong>common expenses.</strong>
              </p>
              <p className={styles.main_text}>
                Built on the Elrond blockchain, Vital is fully governed by Smart
                Contracts that provide transparency and security for our
                users.Our business model allows us to let you spend your kitty
                for free by spending it with one of our partners or by
                participating in our staking program.
              </p>

              <div className={styles.main_btn_wrapper}>
                <GradientBtn text='How does this work?' />
              </div>
            </div>
          </div>
        </section>
        {/* About Section Ends */}

        {/* Popular Projects Begin */}
        <section className={styles.main_carousel}>
          <h2 className={styles.carousel_head}>Popular Projects</h2>

          {/* Carousel Cards for desktop */}

          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            className={styles.desktop}
            orientation='horizontal'
          >
            <Slider className={styles.carousel_slide}>
              <Slide index={0}>
                <div className={styles.multi_cards_holder}>
                  <Carousel title='Birthday' />
                  <Carousel title='Gifts' />
                  <Carousel title='Travel' />
                </div>
              </Slide>
              <Slide index={1}>
                <div className={styles.multi_cards_holder}>
                  <Carousel title='Birthday' />
                  <Carousel title='Gifts' />
                  <Carousel title='Travel' />
                </div>
              </Slide>
              <Slide index={2}>
                <div className={styles.multi_cards_holder}>
                  <Carousel title='Birthday' />
                  <Carousel title='Gifts' />
                  <Carousel title='Travel' />
                </div>
              </Slide>
            </Slider>
            <div className={styles.carousel_controls}>
              <DotGroup showAsSelectedForCurrentSlideOnly />
            </div>
          </CarouselProvider>

          {/* Carousel Cards for mobile */}
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            style={{ width: '100%' }}
            className={styles.mobile}
          >
            <Slider style={{ width: '100%' }}>
              <Slide index={0}>
                <Carousel title='Birthday' />
              </Slide>
              <Slide index={1}>
                {' '}
                <Carousel title='Gifts' />
              </Slide>
              <Slide index={2}>
                {' '}
                <Carousel title='Travel' />
              </Slide>
            </Slider>
            <div className={styles.carousel_controls}>
              <DotGroup showAsSelectedForCurrentSlideOnly />
            </div>
          </CarouselProvider>
        </section>
        {/* Popular Projects End */}

        {/* How Section Begins*/}
        <section className={[styles.how_section, styles.mobile].join(' ')}>
          <div className={styles.how_section_content}>
            <div className={styles.how_section_heading}>
              <span>How does this work?</span>
            </div>
            <div className={styles.how_steps_wrapper}>
              <div className={styles.how_step1}>
                <div className={styles.how_step_bg}>
                  <img src={how_1_mobile} alt='step1' />
                  <div className={styles.step_content}>
                    <img
                      src={step1_notebook}
                      className={styles.step_illustration}
                      alt='create'
                    />
                    <span className={styles.step_title}>Create</span>
                    <span>
                      Create & personalize your money pot in just a few clicks
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.how_step2}>
                <div className={styles.how_step_bg}>
                  <img src={how_2_mobile} alt='step2' />
                  <div className={styles.step_content}>
                    <img
                      src={step2_share}
                      className={styles.step_illustration}
                      alt='share'
                    />
                    <span className={styles.step_title}>Share</span>
                    <span>
                      Easily share your money pot with friends via Email,
                      Twitter, Facebook or WhatsApp
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.how_step3}>
                <div className={styles.how_step_bg}>
                  <img src={how_3_mobile} alt='step3' />
                  <div className={styles.step_content}>
                    <img
                      src={step3_collect}
                      className={styles.step_illustration}
                      alt='collect'
                    />
                    <span className={styles.step_title}>Collect</span>
                    <span>
                      Collect & manage funds securely, watch your money pot grow
                      with each contribution!
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.how_step4}>
                <div className={styles.how_step_bg}>
                  <div className={styles.step_content}>
                    <img
                      src={step4_give}
                      className={styles.step_illustration}
                      alt='step4'
                    />
                    <span className={styles.step_title}>Give</span>
                    <span className={styles.give_text}>
                      Spend your money pot with one of our e-commerce partners,
                      gift your money pot to the lucky recipient or request a
                      transaction to your own wallet.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* DESKTOP HOW SECTION */}
        <section className={[styles.how_section, styles.desktop].join(' ')}>
          <span className={styles.hero_section_head}>How does this work ?</span>

          <div className={styles.steps_wrap}>
            <div className={styles.step_1}>
              <img src={step_1_base} alt='step_1_base' />
              <div className={styles.step_1_content_wrap}>
                <div className={styles.step_illustration}>
                  <img src={step1_notebook} alt='notebook' />
                </div>
                <span className={styles.step_head}>Create</span>
                <p para='p-one' className={styles.step_info}>
                  Create & personalize your money pot in just a few clicks
                </p>
              </div>
            </div>
            <div className={styles.step_2}>
              <img src={step_2_base} alt='step_2_base' />
              <div className={styles.step_2_content_wrap}>
                <div className={styles.step_illustration}>
                  <img src={step2_share} alt='share' />
                </div>
                <span className={styles.step_head}>Share</span>
                <p para='p-two' className={styles.step_info}>
                  Easily share your money pot with friends via Email, Twitter,
                  Facebook or WhatsApp
                </p>
              </div>
            </div>
            <div className={styles.step_3}>
              <img src={step_3_base} alt='step_3_base' />
              <div className={styles.step_3_content_wrap}>
                <div className={styles.step_illustration}>
                  <img src={step3_collect} alt='collect' />
                </div>
                <span className={styles.step_head}>Collect</span>
                <p para='p-three' className={styles.step_info}>
                  Collect & manage funds securely, watch your money pot grow
                  with each contribution!
                </p>
              </div>
            </div>
            <div className={styles.step_4}>
              <img src={step_4_base} alt='step_4_base' />
              <div className={styles.step_4_content_wrap}>
                <div className={styles.step_illustration}>
                  <img src={step4_give} alt='give' />
                </div>
                <span className={styles.step_head}>Give</span>
                <p para='p-four' className={styles.step_info}>
                  Spend your money pot with one of our e-commerce partners, gift
                  your money pot to the lucky recipient or request a transaction
                  to your own wallet.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* How Section ends */}

        {/* Curved Image Section */}

        <section className={styles.main_advance_cards}>
          <div className={styles.advance_card_container}>
            <AdvanceCard
              id={1}
              btn='party'
              title='Personal projects'
              img={Play}
              description_first='Create your kitty for all types of needs: 
            Wedding, birthday, retirement, medical 
            support or simply for common expenses. '
              description_second='And invite your friends, family or 
            entourage to participate in the 
            simplest way'
              text='View all personal projects'
            />
          </div>
          <div
            className={[styles.advance_card_container, styles.right].join(' ')}
          >
            <AdvanceCard
              id={2}
              btn='charity'
              title='Charitable associations'
              img={Charity}
              card_direction='right'
              description_first='Participate in the remarkable work of these 
            associations defending forgotten causes of 
            this world.All the associations present on Vital 
            are certified, and all transactions are 
            governed by Smart Contracts which ensure 
            reliability, transparency and security.'
              text='See all charities'
            />
          </div>
        </section>
        {/* Curved Image SEction Ends */}

        <section className={styles.main_ocassion}>
          <span className={styles.main_ocassion_name}>
            Birthday Party And Wedding
          </span>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={5}
            style={{ width: '100%' }}
            className={styles.mobile}
          >
            <Slider style={{ width: '100%', maxHeight: '40rem' }}>
              <Slide index={0}>
                <Ocassion />
              </Slide>
              <Slide index={1}>
                <Ocassion />
              </Slide>
              <Slide index={2}>
                <Ocassion />
              </Slide>
              <Slide index={3}>
                <Ocassion />
              </Slide>
              <Slide index={4}>
                <Ocassion />
              </Slide>
            </Slider>

            <div className={styles.carousel_controls}>
              <DotGroup showAsSelectedForCurrentSlideOnly />
            </div>
          </CarouselProvider>
          {/* Ocassion Desktop */}
          <OcassionDesktop />
        </section>
      </main>
      <Overlay />
    </div>
  );
};

export default LandingPage;
