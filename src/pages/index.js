import Image from 'next/image'
import styles from './homepage.module.css'
import CarouselGenre from '@/components/Carousel'
import Layout from '@/components/layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.hero}>
          <div className={`${styles.hero__img__container}`}>
            <Image className={`${styles.hero__img__cover} ${styles["animate--rotate"]}`}
              src="opm-text-circle.svg" fill={true} />
          </div>
          <p className={`${styles.hero__text}`}>a visual and literary arts magazine at UCSD</p>
        </div>


        <div className={`${styles.block} ${styles.collection__cover}`}>
          <div className={styles.block__text}>
            <p className={styles["text--h1"]}>Spring 2023</p>
            <p className={styles["text--h1"]}>Collection No. 6</p>
            <p className={styles["text--h1"]}>Liminal</p>
          </div>
          <div className={styles.block__img__container} style={{width: '500px'}}>
            <figure className={styles.block__img}>
              <Image className={`${styles.img__cover} ${styles["img__cover--right"]}`}
                src="/images/5/eclipse-cover-caroline-tjoe.webp" fill={true} />
              <figcaption className={styles.block__img__caption}>Eclipse Cover by Caroline Tjoe</figcaption>
            </figure>
          </div>
        </div>



        <div className={styles.genre__container}>
          <svg className={styles.svg__poetry}>
            <circle cx="400" cy="400" r="400" />
          </svg>
          <div className={styles.headline}>
            <h2>Poetry</h2>
          </div>
          <hr className={styles.genre__hr} />
          <CarouselGenre genre={'poetry'} />
        </div>


        <div className={`${styles.genre__container} ${styles['genre__container--right']}`}>
          <svg className={styles.svg__visual}>
            <circle cx="200" cy="200" r="350" />
            <circle cx="400" cy="400" r="350" />
          </svg>
          <div className={styles.headline}>
            <h2>Visual Arts</h2>
          </div>
          <hr className={styles.genre__hr} />
          <CarouselGenre genre={'visual'} />
        </div>

        <div className={`${styles.genre__container}`}>
        <svg className={styles.svg__fiction}>
            <circle cx="400" cy="400" r="400" />
          </svg>
          <div className={styles.headline}>
            <h2>Fiction</h2>
          </div>
          <hr className={styles.genre__hr} />
          <CarouselGenre genre={'fiction'} />
        </div>

        <div className={`${styles.genre__container} ${styles['genre__container--right']}`}>
          <div className={styles.headline}>
            <h2>Nonfiction</h2>
          </div>
          <hr className={styles.genre__hr} />
          <CarouselGenre genre={'nonfiction'} />
        </div>
      </main>
    </Layout>


  )
}
