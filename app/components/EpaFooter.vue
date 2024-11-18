<script setup lang="ts">
  const officialGov = ref<DefineComponent>();
  const toggleInfo = () => {
    if (officialGov.value.hidden) {
      officialGov.value.hidden = false;
      return;
    }
    officialGov.value.hidden = true;
  }
</script>

<template>
  <div>
    <div class="l-page__footer">
      <div class="l-constrain">
        <div class="l-page__footer-contact">
          <a href="https://www.epa.gov/web-policies-and-procedures/forms/contact-us-about-web-policies-and-procedures">Contact Us</a> to ask a question, provide feedback, or report a problem.
        </div> 
        <div class="l-page__footer-last-updated">
          Last updated on October 29, 2024
        </div>
      </div>
    </div>

    <footer
      class="footer"
    >
      <div class="l-constrain">
        <div class="footer__pre-footer">
          <ul class="list list--footer-language-bar">
            <li><a href="https://www.epa.gov/lep/assistance">Assistance</a></li>
            <li><a href="https://www.epa.gov/lep/assistance#esp">Ayuda</a></li>
            <li><a href="https://www.epa.gov/lep/assistance#ar">مساعدة</a></li>
            <li><a href="https://www.epa.gov/lep/assistance#chi-s">帮助 (简体版)</a></li>
            <li><a href="https://www.epa.gov/lep/assistance#chi-tr">幫助 (繁體版)</a></li>
            <li><a href="https://www.epa.gov/lep/assistance#fr">Aide</a></li>
            <li><a href="https://www.epa.gov/lep/assistance#hc">Asistans</a></li>
            <li><a href="https://www.epa.gov/lep/assistance#kor">지원</a></li>
            <li><a href="https://www.epa.gov/lep/assistance#port">Assistência</a></li>
            <li><a href="https://www.epa.gov/lep/assistance#rus">Помощь</a></li>
            <li><a href="https://www.epa.gov/lep/assistance#tag">Tulong</a></li>
            <li><a href="https://www.epa.gov/lep/assistance#viet">Trợ Giúp</a></li>
          </ul>
        </div>
        <img
          class="footer__epa-seal"
          src="../assets/images/epa-seal.svg"
          alt="United States Environmental Protection Agency"
          height="100"
          width="100"
        >
        <div class="footer__content contextual-region">
          <div class="footer__column">
            <h2>Discover.</h2>
      
            <ul class="menu menu--footer">
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/accessibility/epa-accessibility-statement"
                  class="menu__link"
                >Accessibility Statement</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/planandbudget"
                  class="menu__link"
                >Budget &amp; Performance</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/contracts"
                  class="menu__link"
                >Contracting</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/home/wwwepagov-snapshots"
                  class="menu__link"
                >EPA www Web Snapshots</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/grants"
                  class="menu__link"
                >Grants</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/ocr/whistleblower-protections-epa-and-how-they-relate-non-disclosure-agreements-signed-epa-employees"
                  class="menu__link"
                >No FEAR Act Data</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/privacy"
                  class="menu__link"
                >Privacy</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/privacy/privacy-and-security-notice"
                  class="menu__link"
                >Privacy and Security Notice</a>
              </li>
            </ul>
          </div>
          <div class="footer__column">
            <h2>Connect.</h2>
      
            <ul class="menu menu--footer">
              <li class="menu__item">
                <a
                  href="https://www.data.gov/"
                  class="menu__link"
                >Data.gov</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/office-inspector-general/about-epas-office-inspector-general"
                  class="menu__link"
                >Inspector General</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/careers"
                  class="menu__link"
                >Jobs</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/newsroom"
                  class="menu__link"
                >Newsroom</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/data"
                  class="menu__link"
                >Open Government</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.regulations.gov/"
                  class="menu__link"
                >Regulations.gov</a>
              </li>

              <li class="menu__item">
                <a
                  href="https://www.epa.gov/newsroom/email-subscriptions-epa-news-releases"
                  class="menu__link"
                >Subscribe</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.usa.gov/"
                  class="menu__link"
                >USA.gov</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.whitehouse.gov/"
                  class="menu__link"
                >White House</a>
              </li>
            </ul>
          </div>
          <div class="footer__column">
            <h2>Ask.</h2>
            <ul class="menu menu--footer">
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/aboutepa/forms/contact-epa"
                  class="menu__link"
                >Contact EPA</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/web-policies-and-procedures/epa-disclaimers"
                  class="menu__link"
                >EPA Disclaimers</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/aboutepa/epa-hotlines"
                  class="menu__link"
                >Hotlines</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/foia"
                  class="menu__link"
                >FOIA Requests</a>
              </li>
              <li class="menu__item">
                <a
                  href="https://www.epa.gov/aboutepa/frequent-questions-specific-epa-programstopics"
                  class="menu__link"
                >Frequent Questions</a>
              </li>
            </ul>
            <h2>Follow.</h2>
            <ul class="menu menu--social">
              <li class="menu--social menu__item">
                <a
                  class="menu__link menu--social"
                  aria-label="EPA’s Facebook"
                  href="https://www.facebook.com/EPA"
                >
      
                  <img
                    width="26"
                    height="26"
                    src="../assets/images/facebook.png"
                    class="icon icon--social"
                    aria-hidden="true"
                  >
                </a>
              </li>
              <li class="menu--social menu__item">
                <a
                  class="menu__link menu--social"
                  aria-label="EPA’s Twitter"
                  href="https://twitter.com/epa"
                >
                  <img
                    width="26"
                    height="26"
                    src="../assets/images/twitter-x.svg"
                    class="icon icon--social"
                    aria-hidden="true"
                  >
                </a>
              </li>
              <li class="menu--social menu__item">
                <a
                  class="menu__link menu--social"
                  aria-label="EPA’s Youtube"
                  href="https://www.youtube.com/user/USEPAgov"
                >
      
                  <img
                    src="../assets/images/youtube-icon.webp"
                    class="icon icon--social"
                    aria-hidden="true"
                  >
                </a>
              </li>
              <li class="menu--social menu__item">
                <a
                  class="menu__link menu--social"
                  aria-label="EPA’s Flickr"
                  href="https://www.flickr.com/photos/usepagov"
                >
      
                  <img
                    src="../assets/images/flickr-logo_49094.png"
                    class="icon icon--social"
                    aria-hidden="true"
                  >
                </a>
              </li>
              <li class="menu--social menu__item">
                <a
                  class="menu__link menu--social"
                  aria-label="EPA’s Instagram"
                  href="https://www.instagram.com/epagov"
                >
                  <img
                    width="24"
                    src="../assets/images/instagram.png"
                    class="icon icon--social"
                    aria-hidden="true"
                  >
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <a
      href="#top"
      class="back-to-top"
      title="back to top"
      aria-hidden="false"
      aria-label="back to top link"
      tabindex="1"
    >
      <img
        src="../assets/images/back-top-2.svg"
        class="icon icon--social"
        tabindex="1"
      >
    </a>
  </div>
</template>

<style scoped>
@import "../assets/styles/footerStyles.css";
</style>
