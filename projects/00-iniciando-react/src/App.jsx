import { Button } from "./components/Button.jsx";
import { Card } from "./components/Card.jsx";
import { NewList } from "./components/NewList.jsx";

export default function App() {
    const items = ["lune", "marte", "e mierkole", "juebe"];
    return (
        <>
            <section className="container flex-column gap-1">
                <NewList>{items}</NewList>
            </section>
            <section className="container">
                <Card>Hola boton 1</Card>
                <Card>Hola boton 2</Card>
            </section>
        </>
    );
}
