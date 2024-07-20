import { Card } from "./components/Card.jsx";
import { ListButton } from "./components/ListButton.jsx";

export default function App() {
    const items = ["lune", "marte", "e mierkole", "juebe"];
    return (
        <>
            <section className="container align-items-start">
                <ListButton>{items}</ListButton>
                <ListButton>{items}</ListButton>
            </section>
            <section className="container">
                <Card>Hola boton 1</Card>
                <Card>Hola boton 2</Card>
            </section>
        </>
    );
}
