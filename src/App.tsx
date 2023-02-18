import { useState } from "react";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

type PostType = {
    id: number;
    author: {
        avatarUrl: string;
        role: string;
        name: string;
    };
    publishedAt: Date;
    content: Array<{
        type: "paragraph" | "link";
        text: string;
    }>;
};

const posts: PostType[] = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/jeronimo-mz.png",
            role: "Desenvolvedor Web",
            name: "Jerónimo Matavel",
        },
        publishedAt: new Date("2023-02-19T01:00:00.000"),
        content: [
            {
                type: "paragraph",
                text: "Fala galeraa 👋",
            },
            {
                type: "paragraph",
                text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            {
                type: "link",
                text: "jane.design/doctorcare",
            },
        ],
    },
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/maykbrito.png",
            role: "Instructor @ Rocketseat",
            name: "Mayk Brito",
        },
        publishedAt: new Date("2023-02-19T01:00:00.000"),
        content: [
            {
                type: "paragraph",
                text: "Fala Pessoal 👋",
            },
            {
                type: "paragraph",
                text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
            },
            {
                type: "link",
                text: "jane.design/doctorcare",
            },
        ],
    },
];

function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main className={styles.posts}>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    ))}
                    {/* <Post /> */}
                    {/* <Post /> */}
                    {/* <Post /> */}
                </main>
            </div>
        </>
    );
}

export default App;
