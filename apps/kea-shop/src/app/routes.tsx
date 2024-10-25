import { createRoutesFromElements, Route } from 'react-router-dom';
import { App } from './app';

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    {/* <Route index element={<HomePage />}/> */}
  </Route>
);
