import React from 'react'
import { useRoutes } from "react-router-dom";
import AssignedTask from '../AssignedTask/AssignedTask';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import ImportantTask from '../ImportantTask/ImportantTask';
import MyDay from '../MyDay/MyDay';
import NotFound from '../NotFound';
import PlannedTask from '../PlannedTask/PlannedTask';
import Tasks from '../Tasks/Tasks';

const AllRoutes = () => {

    const element = useRoutes([
        {
            path: "/",
            element: <SignUp />
        },
        {
            path: "/signin",
            element: <SignIn />
        },
        {
            path: "/tasks",

            children: [
                {
                    index: true,
                    element: <MyDay />
                },
                {
                    path: "/tasks/important",
                    element: <ImportantTask />
                },
                {
                    path: "/tasks/planned",
                    element: <PlannedTask />
                },
                {
                    path: "/tasks/assigned-to-me",
                    element: <AssignedTask />
                },
                {
                    path: "/tasks/inbox",
                    element: <Tasks />
                },
            ]
        },
        {
            path: "*",
            element: <NotFound />
        }
    ])
  return element
}

export default AllRoutes