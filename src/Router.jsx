import "react";
import { Routes, Route } from 'react-router-dom';
import MainPage from '../src/pages/Main/MainPage';
import SelectionPage from '../src/pages/Selection/SelectionPage';
import { HabitsApi } from "./API/HabitsApi";


export function Router() {

    const [habits, setHabits] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await(new HabitsApi()).provideHabits();
                if (response.ok) {
                    const data = await response.json();
                    setHabits(data);
                } else {
                    console.log("Ha ocurrido un error :(")
                }
            } catch (error) {
                console.log ("Ha ocurrido un error :(", error);
            }
        };
        fetchData();
    }, []);


    return (
        <Routes>
            <Route path="/" element={<MainPage habits={habits} />} />
            {/* cambiar la ruta a /selection */}
            <Route path="/SelectionPage" element={<SelectionPage habits={habits}
                onSelectedHabits={h => setHabits(h)} />} />
        </Routes>
    );
}