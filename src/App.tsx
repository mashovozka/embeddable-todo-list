import TodoList from "./components/todoList/todoList.component";
import { AppContainer } from "./App.styles";
import { toast, Toaster } from "sonner";
import { useEffect } from "react";
import { useAppSelector } from "@src/store/hooks";

const App = () => {
  const showToastError = useAppSelector((state) => state.todos.showToastError);

  useEffect(() => {
    if (showToastError) {
      toast.error("Error!");
    }
  }, [showToastError]);

  return (
    <AppContainer>
      <TodoList />
      <Toaster richColors position="bottom-left" />
    </AppContainer>
  );
};

export default App;
