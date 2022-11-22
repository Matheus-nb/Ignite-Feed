import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css'
import styles from './App.module.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/matheus-nb.png",
      name: "Matheus Anderson",
      role: "Estágiário @ SPCBrasil"
    },
    content: [ 
      {
        type: "paragraph",
        content: "Fala Galera!",
      },
      {
        type: "paragraph",
        content:  "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat",
      },
      {
        type: "link",
        content: "github/matheus-nb/projetoFake",
      }
    ],
    publishedAt: new Date('2022-11-17 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ RocketSeat"
    },
    content: [ 
      {
        type: "paragraph",
        content: "Fala Matheus!",
      },
      {
        type: "paragraph",
        content: "Ótimo projeto desenvolvido, continua assim e bora DALE",
      },
      {
        type: "link",
        content: "github/diego3g/projetoFake",
      }
    ],
    publishedAt: new Date('2022-11-18 06:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

