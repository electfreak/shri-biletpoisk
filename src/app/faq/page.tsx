import Accordion from "../components/Accordion/Accordion";
import styles from "./faq.module.css";

const text =
  "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.";

const headers = [
  "Что такое Билетопоиск?",
  "Какой компании принадлежит Билетопоиск?",
  "Как купить билет на Билетопоиск?",
  "Как оставить отзыв на Билетопоиск?",
];

export default function Faq() {
  return (
    <>
      <div className={styles.faq}>
        <h1 className={styles.header}>Вопросы-ответы</h1>

        {headers.map((header) => (
          <Accordion key={header} text={text} head={header} />
        ))}
      </div>
    </>
  );
}
