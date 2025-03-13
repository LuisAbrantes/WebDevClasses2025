import './App.css';
import Header from './components/Header';
import ClassCard from './components/ClassCard';
import Footer from './components/Footer';

function App() {
    const classes = [
        {
            id: 1,
            title: 'Introdução ao HTML e CSS',
            description:
                'Fundamentos de estruturação e estilização de páginas web',
            path: 'classes/classes001/index.html'
        },
        {
            id: 2,
            title: 'JavaScript Básico',
            description: 'Conceitos fundamentais de programação com JavaScript',
            path: 'classes/classes002/index.html'
        },
        {
            id: 3,
            title: 'Frameworks Frontend',
            description: 'Introdução ao React e outros frameworks modernos',
            path: 'classes/classes003/index.html'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-serif">
            <Header />

            <main className="flex-grow container mx-auto px-6 py-12">
                <div className="max-w-5xl mx-auto">
                    <section className="mb-16 text-center">
                        <h1 className="text-5xl font-serif font-bold text-[#A51C30] mb-6 tracking-tight">
                            Desenvolvimento Web
                        </h1>
                        <div className="w-24 h-1 bg-[#A51C30] mx-auto mb-6"></div>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
                            Portfólio das aulas de desenvolvimento web do curso
                            técnico, apresentando conceitos fundamentais e práticas modernas.
                        </p>
                    </section>

                    <section className="mb-16">
                        <div className="flex items-center mb-10">
                            <h2 className="text-3xl font-serif font-semibold text-gray-800 mr-4">
                                Disciplinas
                            </h2>
                            <div className="flex-grow h-px bg-gray-200"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {classes.map(classItem => (
                                <ClassCard
                                    key={classItem.id}
                                    classItem={classItem}
                                />
                            ))}
                        </div>
                    </section>

                    <section className="text-center mb-16 bg-gray-100 py-12 px-6 rounded-lg">
                        <h2 className="text-3xl font-serif font-semibold text-[#A51C30] mb-4">
                            Metodologia de Ensino
                        </h2>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-6">
                            Nosso curso combina teoria e prática em um ambiente de aprendizado 
                            colaborativo, preparando os alunos para os desafios da indústria de tecnologia.
                        </p>
                        <a href="#" className="inline-block border-2 border-[#A51C30] text-[#A51C30] px-6 py-3 rounded-md hover:bg-[#A51C30] hover:text-white transition-all font-medium tracking-wide">
                            Saiba mais sobre o curso
                        </a>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
