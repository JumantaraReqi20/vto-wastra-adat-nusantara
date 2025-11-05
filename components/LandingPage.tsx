import React from 'react';

interface LandingPageProps {
  onStart: () => void;
}

const FeatureCard = ({ icon, title, description }: { icon: React.ReactElement, title: string, description: string }) => (
    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/30 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-800 text-white mx-auto mb-4">
            {icon}
        </div>
        <h3 className="font-display text-xl font-bold text-stone-800 mb-2">{title}</h3>
        <p className="text-stone-600 text-sm">{description}</p>
    </div>
);

const TeamMemberCard = ({ name, role, imageUrl }: { name: string, role: string, imageUrl: string }) => (
    <div className="text-center group">
        <div className="relative inline-block">
            <img 
                src={imageUrl} 
                alt={name} 
                className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg border-4 border-white transition-transform duration-300 group-hover:scale-105" 
            />
        </div>
        <h4 className="mt-4 font-bold text-lg text-stone-800">{name}</h4>
        <p className="text-amber-800 font-medium">{role}</p>
    </div>
);

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    return (
        <div className="bg-[#FBF9F6] text-stone-800">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-stone-800 to-black opacity-90 z-10"></div>
                <div 
                    className="absolute inset-0 bg-repeat z-0 opacity-10" 
                    style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}
                ></div>
                <div className="relative z-20 px-4">
                    <h1 className="font-display text-5xl md:text-7xl font-bold drop-shadow-xl animate-fade-in-down">
                        Rasakan Pesona Budaya Nusantara dengan Teknologi AI
                    </h1>
                    <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-stone-300 animate-fade-in-up">
                        Jelajahi, pelajari, dan kenakan warisan adiluhung bangsa secara virtual.
                    </p>
                    <button 
                        onClick={onStart} 
                        className="mt-10 px-12 py-4 bg-amber-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 hover:shadow-amber-400/50 animate-glow"
                    >
                        Ayo Mulai
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4 bg-white/50">
                <div className="container mx-auto text-center max-w-4xl">
                    <h2 className="font-display text-4xl font-bold text-stone-900 mb-4">Mengenal WastraNusa</h2>
                    <p className="text-lg text-stone-700 leading-relaxed">
                        WastraNusa adalah sebuah jembatan digital yang menghubungkan kekayaan budaya Indonesia dengan teknologi masa depan. Misi kami adalah melestarikan dan memperkenalkan Pakaian Adat Nusantara kepada dunia melalui pengalaman virtual try-on yang interaktif dan edukatif. Kami percaya, teknologi AI dapat menjadi kanvas baru untuk melukiskan kembali keindahan warisan bangsa bagi generasi muda.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4">
                 <div className="container mx-auto">
                    <h2 className="font-display text-4xl font-bold text-stone-900 mb-12 text-center">Fitur Unggulan</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
                            title="Virtual Try-On Berbasis AI"
                            description="Kenakan pakaian adat dari berbagai suku secara digital dengan hasil yang realistis."
                        />
                        <FeatureCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                            title="Eksplorasi Budaya Nusantara"
                            description="Pelajari filosofi, sejarah, dan keindahan di balik setiap helai wastra nusantara."
                        />
                        <FeatureCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                            title="Interaktif & Personal"
                            description="Cukup unggah foto, sistem AI kami akan menyesuaikan pakaian adat secara otomatis."
                        />
                        <FeatureCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-9 9h18" /></svg>}
                            title="Pelestarian Melalui Teknologi"
                            description="Menghubungkan generasi muda dengan warisan budaya luhur melalui platform digital."
                        />
                    </div>
                 </div>
            </section>

             {/* Team Section */}
            <section id="team" className="py-20 px-4 bg-white/50">
                <div className="container mx-auto text-center">
                    <h2 className="font-display text-4xl font-bold text-stone-900 mb-12">Tim WastraNusa</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                        <TeamMemberCard name="Reqi Jumantara Hapid" role="Project Manager" imageUrl="https://i.pravatar.cc/150?u=reqi" />
                        <TeamMemberCard name="Wardah Aulia Azzahra" role="Data & Culture Researcher" imageUrl="https://i.pravatar.cc/150?u=wardah" />
                        <TeamMemberCard name="Umar Faruq Robbany" role="Lead Developer" imageUrl="https://i.pravatar.cc/150?u=umar" />
                        <TeamMemberCard name="Farrel Zandra" role="AI Engineer" imageUrl="https://i.pravatar.cc/150?u=farrel" />
                        <TeamMemberCard name="Banteng Harisantoso" role="UI/UX Designer" imageUrl="https://i.pravatar.cc/150?u=banteng" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-stone-900 text-stone-400 py-6">
                 <div 
                    className="absolute inset-x-0 bottom-0 h-full bg-repeat z-0 opacity-[0.03]" 
                    style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}
                ></div>
                <div className="container mx-auto text-center relative z-10">
                    <p>© 2025 WastraNusa – Melestarikan Budaya, Membangun Teknologi.</p>
                </div>
            </footer>
            <style>{`
                @keyframes fadeInDown {
                    0% { opacity: 0; transform: translateY(-20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-down {
                    animation: fadeInDown 1s ease-out forwards;
                }
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 1s ease-out 0.5s forwards;
                    opacity: 0;
                }
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 10px rgba(217, 119, 6, 0.4), 0 0 20px rgba(217, 119, 6, 0.3); }
                    50% { box-shadow: 0 0 25px rgba(245, 158, 11, 0.6), 0 0 40px rgba(245, 158, 11, 0.4); }
                }
                .animate-glow {
                    animation: glow 3s ease-in-out infinite 1s;
                }
            `}</style>
        </div>
    );
};