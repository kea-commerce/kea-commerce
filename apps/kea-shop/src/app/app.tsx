import { Link, Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';
import Footer from '../../../../libs/shared/src/lib/footer';

export function App() {
  return (
    <div>
      <NxWelcome title='kea-shop' />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}

      {/* END: routes */}
      <Footer />
    </div>
  );
}
