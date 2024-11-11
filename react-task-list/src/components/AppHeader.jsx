// usa dei paths relativi per accedere ai file dentro (src folder)
import reactLogo from '../assets/react.svg'
// usa paths assoluto per accedere ai file dentro (public folder)
import viteLogo from '/vite.svg'

export default function AppHeader() {

    // Metti qui la logica
    const title = 'JSX Task List';

    // Metti qui il markup
    return (
        <header>

            <h1>
                Task Manager
            </h1>

        </header>
    )
}