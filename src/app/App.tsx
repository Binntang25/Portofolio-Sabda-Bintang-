import image_Group_71_1 from '@/imports/Group_71-1.png'
import image_Group_71 from '@/imports/Group_71.png'
import image_Group_2 from '@/imports/Group_2.png'
import image_DSC05129_jpg_1 from '@/imports/DSC05129.jpg-1.jpeg'
import image_DSC05129_jpg from '@/imports/DSC05129.jpg.jpeg'
import image_DSC05657_jpg from '@/imports/DSC05657.jpg.jpeg'
import image_Group_1 from '@/imports/Group-1.png'
import image_Kelinci4 from '@/imports/Kelinci4.png'
import image_WhatsApp_Image_2026_03_10_at_16_49_39_1 from '@/imports/WhatsApp_Image_2026-03-10_at_16.49.39-1.jpeg'
import image_IMG_20241031_195800_jpg from '@/imports/IMG_20241031_195800.jpg.jpeg'
import image_WhatsApp_Image_2026_03_10_at_16_49_39 from '@/imports/WhatsApp_Image_2026-03-10_at_16.49.39.jpeg'
import image_IMG_20260312_WA0014_jpg from '@/imports/IMG-20260312-WA0014.jpg.jpeg'
import image_WhatsApp_Image_2026_03_06_at_18_58_16 from '@/imports/WhatsApp_Image_2026-03-06_at_18.58.16.jpeg'
import image_WhatsApp_Image_2026_03_06_at_18_58_15__1_ from '@/imports/WhatsApp_Image_2026-03-06_at_18.58.15__1_.jpeg'
import image_DSC04680_jpg from '@/imports/DSC04680.jpg.jpeg'
import image_DSC05373_jpg_1 from '@/imports/DSC05373.jpg-1.jpeg'
import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import profilePhoto from '../imports/WhatsApp_Image_2026-03-04_at_19.50.34-removebg-preview-1.png';
import profilePhoto2 from '../imports/WhatsApp_Image_2025-10-16_at_10.03.44-removebg-preview.png';
import frameAsset from '../imports/Asset1_2-1.png';
import rectangleAsset from '../imports/Rectangle_6-1.png';
import astronautDecor from '../imports/fbd223bbd13849401f05540dde02a81b-removebg-preview-1.png';
import canvaProject1 from '../imports/Screenshot_2025-06-07_200427.png';
import canvaProject2 from '../imports/Screenshot_2025-06-07_201521.png';
import canvaProject3 from '../imports/Screenshot_2025-06-07_201536.png';
import figmaProject1 from '../imports/1-removebg-preview__1_.png';
import figmaProject2 from '../imports/2-removebg-preview__1_.png';
import figmaProject3 from '../imports/3-removebg-preview.png';
import figmaBackground from '../imports/Group.png';
import sunIcon from '../assets/icon/sun.svg';
import moonIcon from '../assets/icon/moon.svg';
import mailIcon from '../assets/icon/mail.svg';
import phoneIcon from '../assets/icon/phone.svg';
import instagramIcon from '../assets/icon/instagram.svg';
import linkedinIcon from '../assets/icon/linkedin.svg';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const bg = isDark
    ? 'bg-gradient-to-br from-[#1a1a4e] via-[#2d2d6e] to-[#1a1a4e] text-white'
    : 'bg-gradient-to-br from-[#f0f0ff] via-[#e8e8ff] to-[#f0f0ff] text-[#1a1a4e]';

  const navBg = isDark
    ? 'bg-[#2d2d6e]/40 border-[#6b6bb8]/50'
    : 'bg-white/70 border-[#9d9dff]/50';

  const navText = isDark ? 'text-white/90 hover:text-white' : 'text-[#2d2d6e]/80 hover:text-[#1a1a4e]';
  const navActive = isDark ? 'text-[#b8b8ff]' : 'text-[#6b6bb8]';

  const cardBg = isDark
    ? 'bg-[#2d2d6e]/40 border-[#6b6bb8]/50'
    : 'bg-white/60 border-[#9d9dff]/40';

  const badgeBg = isDark
    ? 'bg-[#6b6bb8]/30 border-[#6b6bb8]/50'
    : 'bg-[#e0e0ff]/60 border-[#9d9dff]/50';

  const titleColor = isDark ? 'text-[#d4b3ff]' : 'text-[#6b6bb8]';
  const subText = isDark ? 'text-white/85' : 'text-[#2d2d6e]/80';

  return (
    <div className={`min-h-screen transition-colors duration-500 ${bg}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
        <div className={`backdrop-blur-md border-2 rounded-full px-10 py-4 flex gap-10 items-center transition-colors duration-500 ${navBg}`}>
          <button
            onClick={() => scrollToSection('home')}
            className={`text-base font-semibold tracking-wide transition-colors whitespace-nowrap ${activeSection === 'home' ? navActive : navText}`}
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`text-base font-semibold tracking-wide transition-colors whitespace-nowrap ${activeSection === 'about' ? navActive : navText}`}
          >
            ABOUT ME
          </button>
          <button
            onClick={() => scrollToSection('project')}
            className={`text-base font-semibold tracking-wide transition-colors whitespace-nowrap ${activeSection === 'project' ? navActive : navText}`}
          >
            PROJECT
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className={`text-base font-semibold tracking-wide transition-colors whitespace-nowrap ${activeSection === 'skills' ? navActive : navText}`}
          >
            SOFT SKILL
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-base font-semibold tracking-wide transition-colors whitespace-nowrap ${activeSection === 'contact' ? navActive : navText}`}
          >
            CONTACT
          </button>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isDark ? 'bg-white/10 hover:bg-white/20 text-yellow-300' : 'bg-[#2d2d6e]/10 hover:bg-[#2d2d6e]/20 text-[#2d2d6e]'}`}
          >
            <img
              src={isDark ? sunIcon : moonIcon}
              alt={isDark ? 'Light mode' : 'Dark mode'}
              className="w-5 h-5"
            />
          </button>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-12 lg:px-20 relative pt-32">
        <div className="absolute top-32 left-20">
          <div className="w-24 h-24 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="absolute bottom-40 right-32">
          <div className="w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-center">
          {/* Left Side: Title and Social Icons */}
          <div className="space-y-12 -mt-20">
            <h1 className="font-black tracking-tight leading-[0.85]" style={{ width: '250px', height: '260px', fontSize: '120px' }}>
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">PORTO</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d9dff] to-[#d4b3ff] drop-shadow-[0_0_50px_rgba(157,157,255,0.5)]">
                FOLIO
              </span>
            </h1>

            <div className={`backdrop-blur-sm border-2 rounded-full px-6 py-4 flex gap-4 w-fit transition-colors duration-500 ${navBg}`}>
              <a href="https://www.instagram.com/sabdabintang_?igsh=YXk3eWt3M3IyYTZ5" target="_blank" rel="noopener noreferrer"
                 className="w-14 h-14 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <img src={instagramIcon} alt="Instagram" className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/sabdabintang-ramadhani-a27147400" target="_blank" rel="noopener noreferrer"
                 className="w-14 h-14 bg-[#0A66C2] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7" />
              </a>
              <a href="mailto:sabdabintang122@gmail.com"
                 className="w-14 h-14 bg-gradient-to-br from-[#EA4335] to-[#34A853] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <img src={mailIcon} alt="Mail" className="w-7 h-7" />
              </a>
              <a href="https://wa.me/6285731777140" target="_blank" rel="noopener noreferrer"
                 className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <img src={phoneIcon} alt="Phone" className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Right Side: Photo Frame with Astronaut */}
          <div className="relative">
            {/* Frame Background */}
            <div className="relative w-[560px] h-[388px]">
              <img
                src={frameAsset}
                alt="Frame"
                className="w-full h-full object-cover"
              />

              {/* Content Inside Frame */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-10 py-6 gap-5 -mt-4">
                {/* Profile Photo */}
                <img
                  src={profilePhoto}
                  alt="Sabda Bintang Ramadhani"
                  className="drop-shadow-2xl object-cover -mt-12"
                  style={{ width: '278px', height: '464px' }}
                />

                {/* Astronaut */}
                <img
                  src={astronautDecor}
                  alt="Astronaut"
                  className="w-[300px] h-auto object-contain drop-shadow-2xl -mt-20"
                />
              </div>

              {/* Rectangle Decoration - Bottom Right Outside */}
              <div className="absolute -bottom-3 -right-5">
                <img
                  src={rectangleAsset}
                  alt="Decoration"
                  className="w-20 h-20 object-contain opacity-40"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-8 py-20 relative">
        <div className="absolute top-20 right-20">
          <svg className="w-20 h-20 text-white/10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>

        <div className="max-w-5xl w-full">
          <div className={`backdrop-blur-sm border-2 rounded-[2.5rem] p-12 relative shadow-[0_0_40px_rgba(107,107,184,0.25)] transition-colors duration-500 ${cardBg}`}>
            <div className="absolute -top-6 left-12">
              <svg className="w-16 h-16 text-[#6b6bb8]/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="absolute -bottom-6 right-12">
              <svg className="w-16 h-16 text-[#6b6bb8]/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-black leading-tight">Hi, I'm Sabda Bintang Ramadhani</h2>
                <p className={`text-base lg:text-lg leading-relaxed ${subText}`}>
                  Saya Mahasiswa Politeknik Elektronika Negeri Surabaya (PENS) Semester 4 jurusan Multimedia Broadcasting yang memiliki minat dan kemampuan dalam bidang fotografi, desain grafis, dan pembuatan konten digital.
                </p>
                <p className={`text-base lg:text-lg leading-relaxed ${subText}`}>
                  Berpengalaman dalam praktik kerja lapangan di studio foto serta pembuatan media promosi seperti poster dan konten Instagram. Mampu bekerja secara individu maupun tim.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <img
                  src={profilePhoto2}
                  alt="Sabda Bintang Ramadhani"
                  className="w-72 h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-7xl w-full space-y-16">
          <h2 className="text-5xl lg:text-6xl font-black text-center mb-16">MY PROJECTS</h2>

          {/* Blender Projects */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className={`backdrop-blur-sm border-2 rounded-full px-10 py-4 inline-block shadow-lg transition-colors duration-500 ${badgeBg}`}>
                <h3 className={`text-2xl lg:text-3xl font-black ${titleColor}`}>PROJECT BLENDER</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className={`backdrop-blur-sm border-2 rounded-3xl p-5 overflow-hidden shadow-[0_0_30px_rgba(107,107,184,0.2)] hover:shadow-[0_0_40px_rgba(107,107,184,0.35)] transition-all duration-500 ${cardBg}`}>
                <ImageWithFallback
                  src={image_IMG_20260312_WA0014_jpg}
                  alt="Blender Project 1"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              <div className={`backdrop-blur-sm border-2 rounded-3xl p-5 overflow-hidden shadow-[0_0_30px_rgba(107,107,184,0.2)] hover:shadow-[0_0_40px_rgba(107,107,184,0.35)] transition-all duration-500 ${cardBg}`}>
                <ImageWithFallback
                  src={image_Kelinci4}
                  alt="Blender Project 2"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* CorelDraw Projects */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className={`backdrop-blur-sm border-2 rounded-full px-10 py-4 inline-block shadow-lg transition-colors duration-500 ${badgeBg}`}>
                <h3 className={`text-2xl lg:text-3xl font-black ${titleColor}`}>PROJECT CORELLDRAW</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className={`backdrop-blur-sm border-2 rounded-3xl p-5 overflow-hidden shadow-[0_0_30px_rgba(107,107,184,0.2)] hover:shadow-[0_0_40px_rgba(107,107,184,0.35)] transition-all duration-500 ${cardBg}`}>
                <ImageWithFallback
                  src={image_WhatsApp_Image_2026_03_06_at_18_58_15__1_}
                  alt="CorelDraw Project 1"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
              <div className={`backdrop-blur-sm border-2 rounded-3xl p-5 overflow-hidden shadow-[0_0_30px_rgba(107,107,184,0.2)] hover:shadow-[0_0_40px_rgba(107,107,184,0.35)] transition-all duration-500 ${cardBg}`}>
                <ImageWithFallback
                  src={image_WhatsApp_Image_2026_03_06_at_18_58_16}
                  alt="CorelDraw Project 2"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Canva Projects */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className={`backdrop-blur-sm border-2 rounded-full px-10 py-4 inline-block shadow-lg transition-colors duration-500 ${badgeBg}`}>
                <h3 className={`text-2xl lg:text-3xl font-black ${titleColor}`}>PROJECT CANVA</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`backdrop-blur-sm border-2 rounded-3xl p-5 overflow-hidden shadow-[0_0_30px_rgba(107,107,184,0.2)] hover:shadow-[0_0_40px_rgba(107,107,184,0.35)] transition-all duration-500 ${cardBg}`}>
                <img
                  src={canvaProject1}
                  alt="Canva Project - Burger Poster"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div className={`backdrop-blur-sm border-2 rounded-3xl p-5 overflow-hidden shadow-[0_0_30px_rgba(107,107,184,0.2)] hover:shadow-[0_0_40px_rgba(107,107,184,0.35)] transition-all duration-500 ${cardBg}`}>
                <img
                  src={canvaProject2}
                  alt="Canva Project - Hari Raya Idul Fitri"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              <div className={`backdrop-blur-sm border-2 rounded-3xl p-5 overflow-hidden shadow-[0_0_30px_rgba(107,107,184,0.2)] hover:shadow-[0_0_40px_rgba(107,107,184,0.35)] transition-all duration-500 ${cardBg}`}>
                <img
                  src={canvaProject3}
                  alt="Canva Project - Fast Food Pizza"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Figma Projects */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className={`backdrop-blur-sm border-2 rounded-full px-10 py-4 inline-block shadow-lg transition-colors duration-500 ${badgeBg}`}>
                <h3 className={`text-2xl lg:text-3xl font-black ${titleColor}`}>PROJECT FIGMA</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative bg-[#2d2d6e]/40 backdrop-blur-sm border-2 border-[#6b6bb8]/50 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(107,107,184,0.2)] hover:shadow-[0_0_40px_rgba(107,107,184,0.35)] transition-shadow" style={{ height: '420px' }}>
                <img
                  src={figmaBackground}
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover opacity-10"
                />
                <div className="relative flex items-center justify-center h-full p-6">
                  <img
                    src={image_Group_2}
                    alt="Project Figma - E-commerce App"
                    className="h-full w-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              <div className="relative bg-[#2d2d6e]/40 backdrop-blur-sm border-2 border-[#6b6bb8]/50 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(107,107,184,0.2)] hover:shadow-[0_0_40px_rgba(107,107,184,0.35)] transition-shadow" style={{ height: '420px' }}>
                <img
                  src={figmaBackground}
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover opacity-10"
                />
                <div className="relative flex items-center justify-center h-full p-6">
                  <img
                    src={image_Group_71_1}
                    alt="Project Figma - UI Design"
                    className="h-full w-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Photography */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <div className={`backdrop-blur-sm border-2 rounded-full px-10 py-4 inline-block shadow-lg transition-colors duration-500 ${badgeBg}`}>
                <h3 className={`text-2xl lg:text-3xl font-black ${titleColor}`}>PHOTOGRAPHY</h3>
              </div>
            </div>

            {/* Landscape photos — 2x2 grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { src: image_DSC05373_jpg_1, alt: 'Photography 1' },
                { src: image_DSC04680_jpg, alt: 'Photography 2' },
                { src: image_WhatsApp_Image_2026_03_10_at_16_49_39_1, alt: 'Photography 3' },
                { src: image_IMG_20241031_195800_jpg, alt: 'Photography 4' },
              ].map((photo, i) => (
                <div key={i} className="bg-[#2d2d6e]/40 backdrop-blur-sm border-2 border-[#6b6bb8]/50 rounded-3xl p-4 overflow-hidden shadow-[0_0_30px_rgba(107,107,184,0.2)] hover:shadow-[0_0_40px_rgba(107,107,184,0.35)] transition-shadow">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>

            {/* Portrait photos — side by side, same height */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#2d2d6e]/40 backdrop-blur-sm border-2 border-[#6b6bb8]/50 rounded-3xl p-4 overflow-hidden shadow-[0_0_30px_rgba(107,107,184,0.2)] hover:shadow-[0_0_40px_rgba(107,107,184,0.35)] transition-shadow flex items-center justify-center" style={{ height: '380px' }}>
                <img
                  src={image_DSC05657_jpg}
                  alt="Photography 5"
                  className="h-full w-auto object-contain rounded-2xl"
                />
              </div>
              <div className="bg-[#2d2d6e]/40 backdrop-blur-sm border-2 border-[#6b6bb8]/50 rounded-3xl p-4 overflow-hidden shadow-[0_0_30px_rgba(107,107,184,0.2)] hover:shadow-[0_0_40px_rgba(107,107,184,0.35)] transition-shadow flex items-center justify-center" style={{ height: '380px' }}>
                <ImageWithFallback
                  src={image_DSC05129_jpg_1}
                  alt="Photography 6"
                  className="h-full w-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-6xl w-full space-y-16">
          <h2 className="text-5xl lg:text-6xl font-black text-center mb-16">MY SKILLS</h2>

          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className={`text-3xl lg:text-4xl font-black text-center ${titleColor}`}>Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { skill: 'Fotografi Studio & Outdoor', level: 90 },
                { skill: 'Desain Grafis (Poster, Konten Sosial Media)', level: 95 },
                { skill: 'Content Creation (Instagram & Digital Media)', level: 92 },
                { skill: 'Adobe Photoshop', level: 88 },
                { skill: 'CorelDRAW', level: 90 },
                { skill: 'Canva', level: 95 },
                { skill: 'Figma', level: 85 },
                { skill: 'Lightroom', level: 88 }
              ].map((item, index) => (
                <div key={index} className={`backdrop-blur-sm border-2 rounded-3xl p-8 shadow-[0_0_30px_rgba(107,107,184,0.2)] hover:shadow-[0_0_40px_rgba(107,107,184,0.35)] transition-all duration-500 ${cardBg}`}>
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="text-lg lg:text-xl font-bold">{item.skill}</h3>
                    <span className={`text-lg lg:text-xl font-semibold ${titleColor}`}>{item.level}%</span>
                  </div>
                  <div className={`w-full rounded-full h-3 overflow-hidden shadow-inner ${isDark ? 'bg-[#1a1a4e]/50' : 'bg-[#c0c0f0]/50'}`}>
                    <div
                      className="h-full bg-gradient-to-r from-[#9d9dff] to-[#d4b3ff] rounded-full transition-all duration-1000 shadow-lg"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-8">
            <h3 className={`text-3xl lg:text-4xl font-black text-center ${titleColor}`}>Experience</h3>
            <div className={`backdrop-blur-sm border-2 rounded-3xl p-10 shadow-[0_0_30px_rgba(107,107,184,0.2)] transition-colors duration-500 ${cardBg}`}>
              <div className="space-y-4">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <h4 className="text-2xl lg:text-3xl font-black">Praktik Kerja Lapangan (PKL)</h4>
                  <span className="text-lg text-[#d4b3ff] font-semibold">Agustus 2023 - Februari 2024</span>
                </div>
                <p className={`text-xl font-bold ${subText}`}>Ardyah Photo Studio - Lamongan, Indonesia</p>
                <ul className={`space-y-3 text-base lg:text-lg list-disc list-inside ${subText}`}>
                  <li>Mendesain berbagai kebutuhan visual seperti poster, banner, dan konten promosi menggunakan CorelDRAW</li>
                  <li>Mengolah dan mengedit foto menggunakan Adobe Photoshop untuk meningkatkan kualitas visual</li>
                  <li>Melakukan proses pengambilan gambar di studio dengan pencahayaan yang sesuai</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certificates */}
          <div className="space-y-8">
            <h3 className={`text-3xl lg:text-4xl font-black text-center ${titleColor}`}>Certificates & Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Sertifikat Praktik Kerja Lapangan (PKL) - SMKN 1 Kalitengah',
                'Sertifikat Kompetensi Keahlian (Desain Komunikasi Visual)',
                'Peserta Industrial Festival 2024 Kementerian Perindustrian',
                'Peserta Talkshow Industrial Festival 2024 "Join the Digital Frenzy"',
                'Sertifikat LKMM Pra TD PENS 2025',
                'Uji Kompetensi Keahlian (UKK) - Vidio Vlog dan Poster WBL'
              ].map((cert, index) => (
                <div key={index} className={`backdrop-blur-sm border-2 rounded-2xl p-6 shadow-[0_0_25px_rgba(107,107,184,0.2)] hover:shadow-[0_0_35px_rgba(107,107,184,0.35)] transition-all duration-500 ${cardBg}`}>
                  <p className={`text-base lg:text-lg font-medium ${subText}`}>{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-20 relative">
        <div className="absolute bottom-32 right-20">
          <svg className="w-20 h-20 text-white/10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>

        <div className="max-w-4xl w-full space-y-12">
          <h2 className="text-5xl lg:text-6xl font-black text-center mb-16">CONTACT</h2>

          <div className="space-y-6">
            {/* Instagram */}
            <a href="https://www.instagram.com/sabdabintang_?igsh=YXk3eWt3M3IyYTZ5" target="_blank" rel="noopener noreferrer" className={`backdrop-blur-sm border-2 rounded-full p-6 flex items-center gap-6 transition-all shadow-[0_0_25px_rgba(107,107,184,0.2)] hover:shadow-[0_0_35px_rgba(107,107,184,0.35)] duration-500 ${cardBg}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
              </div>
              <p className="text-xl lg:text-2xl font-medium">@sabdabintang_</p>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/sabdabintang-ramadhani-a27147400" target="_blank" rel="noopener noreferrer" className={`backdrop-blur-sm border-2 rounded-full p-6 flex items-center gap-6 transition-all shadow-[0_0_25px_rgba(107,107,184,0.2)] hover:shadow-[0_0_35px_rgba(107,107,184,0.35)] duration-500 ${cardBg}`}>
              <div className="w-16 h-16 bg-[#0A66C2] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
              </div>
              <p className="text-xl lg:text-2xl font-medium">Sabda Bintang Ramadhani</p>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/6285731777140" target="_blank" rel="noopener noreferrer" className={`backdrop-blur-sm border-2 rounded-full p-6 flex items-center gap-6 transition-all shadow-[0_0_25px_rgba(107,107,184,0.2)] hover:shadow-[0_0_35px_rgba(107,107,184,0.35)] duration-500 ${cardBg}`}>
              <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <img src={phoneIcon} alt="Phone" className="w-8 h-8" />
              </div>
              <p className="text-xl lg:text-2xl font-medium">085731777140</p>
            </a>

            {/* Email */}
            <a href="mailto:sabdabintang122@gmail.com" className={`backdrop-blur-sm border-2 rounded-full p-6 flex items-center gap-6 transition-all shadow-[0_0_25px_rgba(107,107,184,0.2)] hover:shadow-[0_0_35px_rgba(107,107,184,0.35)] duration-500 ${cardBg}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#EA4335] via-[#FBBC05] to-[#34A853] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <img src={mailIcon} alt="Mail" className="w-8 h-8" />
              </div>
              <p className="text-xl lg:text-2xl font-medium">sabdabintang122@gmail.com</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}