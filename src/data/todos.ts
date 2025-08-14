import type { Todo } from "../types/todo";

export const dummyData: Todo[] = [
    {
        id: 1, 
        title: "Like this video",
        completed: false,
    },
    {
        id: 2,
        title: "Smash that subscribe button",
        completed: false,
    },
    {
        id: 3,
        title: "Leave a comment below",
        completed: false,
    },
];
// Types not protected here, instead Typescript infers it. This is done in the src/types folder
// Import 'type' from types folder, and treat it like an inherited class in C++
// This way, typos and wrong value types are not accepted
// Here, dummyData is an array of Todo values, so it needs the square brackets