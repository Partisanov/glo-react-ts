import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/normalize.scss";
import "./assets/scss/style.scss";
import { ToDoListPage } from "./pages/ToDoListPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { IToDo } from "./models/todo-item";
import { NotFound } from "./pages/404";
import { Layout } from "./layouts/Layout";
const todos: IToDo[] = [
  {
    id: 0,
    text: "First todo",
    isDone: false,
  },
  {
    id: 1,
    text: "Second todo",
    isDone: true,
  },
  {
    id: 2,
    text: "Thour todo",
    isDone: false,
  },
  {
    id: 3,
    text: "Four todo",
    isDone: true,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage todos={todos} />,
      },
      {
        path: "/list/:id",
        element: <ToDoListPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />
  }
],{
  basename:'/app/'
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
