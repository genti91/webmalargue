import { FormProvider } from './context/FormContext';
import { AppRouter } from './routers/AppRouter';

const App = () => {
  return (
    <FormProvider>
      <AppRouter />
    </FormProvider>
  );
};

export default App;