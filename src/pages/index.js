import Image from 'next/image'
import styles from './homepage.module.css'
import Carousel from '@/components/Carousel'
import Layout from '@/components/layout'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.hero}>
          <div className={`${styles.hero__img__container} ${styles["img--offset-left"]}`}>
            <Image className={`${styles.img__cover} ${styles["animate--rotate"]}`}
              src="opm-text-circle.svg" fill={true} />
          </div>
          <p className={`${styles.hero__text}`}>a visual and literary arts magazine at UCSD</p>
        </div>


        <div className={styles.block}>
          <div className={styles.block__text}>
            <p className={styles["text--h1"]}>Spring 2023</p>
            <p className={styles["text--h1"]}>Collection No. 6</p>
            <p className={styles["text--h1"]}>Liminal</p>
          </div>
          <div className={styles.block__img__container}>
            <div className={styles.block__img}>
              <Image className={`${styles.img__cover} ${styles["img__cover--right"]}`}
                src="/images/5/eclipse-cover-caroline-tjoe.webp" fill={true} />
            </div>
            <p className={styles.block__img__caption}>Eclipse Cover by Caroline Tjoe</p>
          </div>
        </div>

        <div className={styles.genre__container}>
          <div className={styles.headline}>
            <h2>Poetry</h2>
          </div>
          <hr className={styles.genre__hr} />

          <div className={styles.block}>
            <div className={styles.block__img}>
              <div className={styles.block__img__container}>
                <Image className={`${styles.img__cover} ${styles["img__cover--left"]}`}
                  src="/images/5/i-sold-my-soul-katie-gasper.jpg" fill={true} />
              </div>
              <p className={styles.block__img__caption}>Katie Gasper</p>
            </div>
            <div className={styles.block__text}>
              <p className={'text--heading_1'}>I Sold My Soul At Sun God</p>
              <p className={styles["text--body"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ultricies accumsan. Quisque imperdiet nulla sagittis, euismod turpis sed, porta magna. Donec at elit vel diam vehicula ultrices. </p>
              <p>Nam hendrerit pretium aliquam. Nunc egestas, enim a venenatis imperdiet, justo...</p>
              <p>Click to read more.</p>
            </div>
          </div>
        </div>


        <div className={`${styles.genre__container} ${styles['genre__container--right']}`}>
          <div className={styles.headline}>
            <h2>Visual Arts</h2>
          </div>
          <hr className={styles.genre__hr} />

          <div className={`${styles.block} ${styles['block--right']}`}>
            <div className={styles.block__img}>
              <div className={styles.block__img__container}>
                <Image className={`${styles.img__cover} ${styles["img__cover--right"]}`}
                  src="/images/5/you-grew-on-me-grayscale-allison-gable.jpg" fill={true} />
              </div>
              <p className={styles.block__img__caption}>Illustration By</p>
            </div>
            <div className={styles.block__text}>
              <p className={'text--heading_1'}>Love Blooms</p>
            </div>
          </div>
        </div>


        <Carousel />
      </main>
    </Layout>


  )
}
