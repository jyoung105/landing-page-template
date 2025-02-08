"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f3f1ea]">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SalesToolSection />
      <Footer />
    </main>
  )
}

function Header() {
  return (
    <motion.header
      className="fixed top-4 left-1/2 z-50 w-11/12 max-w-4xl"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="bg-white/80 backdrop-blur-md rounded-full border border-gray-200 shadow-lg">
        <div className="flex justify-between items-center px-8 py-2">
          <div className="flex items-center">
            <div className="w-[60px] h-[16px] relative">
              <Image
                src="https://res.cloudinary.com/ducqjmtlk/image/upload/v1737914689/nuablack4x72x20_rvv4mv.png"
                alt="Nua Logo"
                fill
                sizes="60px"
                className="object-contain object-left"
                priority
                quality={100}
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/changelog" className="text-xs font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Changelog
            </Link>
            <Button
              asChild
              variant="default"
              size="sm"
              className="bg-black text-white hover:bg-gray-800 rounded-full px-4 py-1 text-xs"
            >
              <Link href="/waitlist">Request Access</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

function HeroSection() {
  return (
    <div className="flex-1 flex flex-col items-center bg-[#f3f1ea] pt-28">
      <motion.p
        className="uppercase tracking-[0.51em] leading-[133%] text-center text-[19px] mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        INTRODUCING NUA
      </motion.p>
      <motion.h1
        className="text-[64px] leading-[83px] text-center px-4 lg:px-[314px] mb-[25px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <span className="font-normal">Automate </span>
        <span className="font-normal italic">high quality </span>
        <span className="font-normal">account research</span>
        <br />
        <span className="font-normal">to speed up your pipeline generation</span>
      </motion.h1>
      <motion.p
        className="text-[28px] text-center font-light px-4 lg:px-[314px] mb-[48px] leading-[133%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Nua analyzes your accounts & surfaces insights
        <br className="hidden md:inline" />
        you'd normally spend hours uncovering.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <Button asChild variant="default" size="lg" className="bg-black text-white hover:bg-black/90">
          <Link href="/waitlist">
            <span>Request Access</span>
            <Image
              src="https://res.cloudinary.com/ducqjmtlk/image/upload/v1737918196/Arrow_1_tacbar.svg"
              alt="Arrow"
              width={36}
              height={15}
              className="ml-2"
            />
          </Link>
        </Button>
      </motion.div>
      <motion.div
        className="relative w-full mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Image
          src="https://res.cloudinary.com/ducqjmtlk/image/upload/v1738096434/NUA_DEMO_2_1_kn8cwi.png"
          alt="Nua Integration Visualization"
          width={1274}
          height={1043}
          className="w-full max-w-[1274px] mx-auto"
          priority
        />
        <div
          className="absolute bottom-0 left-0 right-0 w-full h-[303px]"
          style={{
            background: "linear-gradient(to top, #DCD5C1 0%, rgba(217, 217, 217, 0) 100%)",
          }}
        />
      </motion.div>
    </div>
  )
}

function FeaturesSection() {
  return (
    <div className="container mx-auto relative py-[181px]">
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 1517 629"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0.646729 619.72L4.24351 0.471383L1516.06 9.25248L1512.47 628.501L0.646729 619.72Z"
            fill="url(#paint0_radial_150_176)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_150_176"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(774.078 314.235) rotate(85.9819) scale(410.647 4531.28)"
            >
              <stop stopColor="#E5DFD0" />
              <stop offset="1" stopColor="#F3F1EA" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="relative z-10">
        <motion.h2
          className="text-[64px] leading-[70px] mb-[51px] max-w-[391px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Made for Modern
          <br />
          SaaS Sales Teams
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[187px]">
          {[
            "https://res.cloudinary.com/ducqjmtlk/image/upload/v1738240085/Group_292_1_1_xrqqmp.png",
            "https://res.cloudinary.com/ducqjmtlk/image/upload/v1738242527/LLM_Powered_1_1_ouoqrm.png",
            "https://res.cloudinary.com/ducqjmtlk/image/upload/v1738242565/image_e9piuy.png",
          ].map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Banner ${index + 1}`}
                width={336}
                height={332}
                priority
                className="mx-auto"
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-[16px] text-black max-w-[650px] ml-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4">
            Nua is created by a founding team with experience in sales and product.
            <br />
            Committed to build the best tool for the sales of SaaS.
          </p>
          <Button asChild variant="link" className="p-0 h-auto text-[16px] text-black">
            <Link href="/waitlist">
              Request Access
              <Image
                src="https://res.cloudinary.com/ducqjmtlk/image/upload/v1738170017/Arrow_15_c8z3ee.svg"
                alt="Arrow"
                width={7}
                height={11}
                className="ml-2"
              />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

function SalesToolSection() {
  return (
    <section className="w-full bg-[#f3f1ea] relative">
      <div className="w-full h-[213px] bg-gradient-to-b from-[#DCD5C1] to-transparent" />
      <div className="container mx-auto px-4">
        <motion.div
          className="lg:ml-[112px] -mt-[60px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-black text-[18px] font-normal max-w-[326px]">Built for the user. Not the buyer.</p>
          <h2 className="text-black text-[60px] font-normal leading-[65px] max-w-[418px] mt-4">
            A sales tool you <br />
            will enjoy using
          </h2>
          <p className="text-black max-w-[326px] mt-7">
            The times of cluttered and unreliable data are over. Just get a clear view of your key data that enables you
            to build a strategic point of view on your accounts in seconds.
          </p>
        </motion.div>
        <motion.div
          className="mt-[-200px]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative" style={{ marginRight: "calc((100vw - 100%) / -2)" }}>
            <Image
              src="https://res.cloudinary.com/ducqjmtlk/image/upload/v1738267414/demodemo_1_hc3xrz.png"
              alt="Demo Visualization"
              width={1391}
              height={1033}
              className="w-full h-auto"
              priority
              style={{ marginTop: "9px" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="w-full bg-[#f3f1ea] py-24">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="text-center mb-20">
          <h2 className="text-[#1C392D] text-5xl font-medium mb-4 max-w-2xl mx-auto">
            Ready to automate your account research?
          </h2>
          <p className="text-gray-600 text-xl mb-8">Try Nua for your next sales pipeline. It's free to get started.</p>
          <Button asChild className="bg-black text-white hover:bg-black/90 px-8 py-6 h-auto text-base">
            <Link href="/waitlist">Request Access</Link>
          </Button>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left Side */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-[46px] h-[13px] relative">
                <Image
                  src="https://res.cloudinary.com/ducqjmtlk/image/upload/q_100/v1737901490/nuablack_dgaajp.png"
                  alt="Nua Logo"
                  fill
                  sizes="46px"
                  className="object-contain object-left"
                  quality={100}
                />
              </div>
              <span>© 2025 Nua, inc</span>
              <span className="hidden md:inline mx-2">•</span>
              <span className="hidden md:inline">Made with ❤️ in Seoul</span>
            </div>

            {/* Right Side */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex items-center gap-6 md:gap-8">
                <Link href="/change" className="text-sm text-gray-600 hover:text-gray-900">
                  Changelog
                </Link>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact us
                </Link>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://twitter.com/nua"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="https://linkedin.com/company/nua"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

