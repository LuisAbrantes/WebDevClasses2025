import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import ClassesList from './components/ClassesList';
import AssessmentsList from './components/AssessmentsList';
import TeachingMethodology from './components/TeachingMethodology';
import Footer from './components/Footer';
import GitHubStar from './components/GitHubStar';

function App() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-serif">
            <Header />

            <main className="flex-grow container mx-auto px-6 py-12">
                <div className="max-w-5xl mx-auto">
                    <Introduction />
                    <GitHubStar />
                    <ClassesList />
                    <AssessmentsList />
                    <TeachingMethodology />
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;
