import { useContext } from "react";
import { TaskContext } from "./TaskContext";

export const useTasks = () => {
   const context = useContext(TaskContext);
   if (!context) {
      throw new Error("useTasks debe usarse dentro de un taskProvider");
   }
   return context;
};
