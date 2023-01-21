import homepage from "./homepage"
import homepageLink from "./homepageLink"
import homepageHero from "./homepageHero"
import homepageFeature from "./homepageFeature"
import homepageFeatureList from "./homepageFeatureList"
import homepageCta from "./homepageCta"
import homepageLogo from "./homepageLogo"
import homepageLogoList from "./homepageLogoList"
import homepageTestimonial from "./homepageTestimonial"
import homepageTestimonialList from "./homepageTestimonialList"
import homepageBenefit from "./homepageBenefit"
import homepageBenefitList from "./homepageBenefitList"
import homepageStat from "./homepageStat"
import homepageStatList from "./homepageStatList"
import homepageProduct from "./homepageProduct"
import homepageProductList from "./homepageProductList"

import navItem from "./navItem"
import navItemGroup from "./navItemGroup"
import socialLink from "./socialLink"
import layoutHeader from "./layoutHeader"
import layoutFooter from "./layoutFooter"
import layout from "./layout"

import page from "./page"

import aboutPage from "./aboutPage"
import aboutHero from "./aboutHero"
import aboutStat from "./aboutStat"
import aboutStatList from "./aboutStatList"
import aboutProfile from "./aboutProfile"
import aboutLeadership from "./aboutLeadership"
import aboutLogoList from "./aboutLogoList"

// Then we give our schema to the builder and provide the result to Sanity
export default [
  homepage,
  homepageLink,
  homepageHero,
  homepageFeature,
  homepageFeatureList,
  homepageCta,
  homepageLogo,
  homepageLogoList,
  homepageTestimonial,
  homepageTestimonialList,
  homepageBenefit,
  homepageBenefitList,
  homepageStat,
  homepageStatList,
  homepageProduct,
  homepageProductList,
  // layout
  navItem,
  navItemGroup,
  socialLink,
  layoutHeader,
  layoutFooter,
  layout,
  // HTML page
  page,
  // about page
  aboutPage,
  aboutHero,
  aboutStat,
  aboutStatList,
  aboutProfile,
  aboutLeadership,
  aboutLogoList,
]
