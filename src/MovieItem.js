import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MovieItem.module.css";
function MovieItem({ id, img, title, year, body, category, rating }) {
  const categoryString = category.join(" ");
  const navigate = useNavigate();

  const STARS = ["first", "second", "third", "fourth", "last"];
  const [rates, setRates] = useState([0, 0, 0, 0, 0]);

  const calcStarRates = () => {
    let tempStarRateArr = [0, 0, 0, 0, 0];

    // 별 한개당 width 가 20점, 총 100점 만점 현재 비율
    let starVerScore = rating * 10;
    let idx = 0;

    // 20을 starVerScore 에서 하나씩 빼가면서 별 하나하나에 채워질 width 지정
    while (starVerScore > 20) {
      tempStarRateArr[idx] = 20;
      idx += 1;
      starVerScore -= 20;
    }

    tempStarRateArr[idx] = starVerScore;
    return tempStarRateArr;
  };

  useEffect(() => {
    setRates((rates) => (rates = calcStarRates()));
    console.log(rates);
  }, []);

  const goMovie = () => {
    navigate(`/movie/${id}`, {
      state: {
        img: img,
        title: title,
        body: body,
      },
    });
  };

  return (
    <li className={styles.MovieItem} onClick={goMovie}>
      <img className={styles.MovieItem_Img} src={img} />

      <div className={styles.MovieItem_Infor}>
        <h2 className={styles.MovieItem_Title}>{title}</h2>
        <p className={styles.MovieItem_Year}>{year}</p>
        <p className={styles.MovieItem_Body}>{body}</p>
        <p>{categoryString}</p>

        {STARS.map((item, index) => {
          console.log(`${index} => ${rates[index]}`);
          return (
            // 별, 비어있게 하는 기본값
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="39"
              viewBox="0 0 20 13"
              fill="#cacaca"
            >
              {/*
               클리핑 처리할 요소, id 를 참조하면 클리핑 처리 
               클리핑, 다른 파트에서 정의 요소의 일부를 제거
              */}
              <clipPath id={`${id}-${item}StarClip`}>
                <rect width={`${rates[index]}`} height="39" />
              </clipPath>

              {/* SVG 기본 도형 라이브러리에서 가장 강력한 요소
              선과 곡선, 호 등 다양한 형태로 그리기 가능 */}
              <path
                id={`${id}-${item}Star`}
                d="M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z"
                transform="translate(-2 -2)"
              />

              {/* clipPath 를 사용하기 위한 태그, 색 채우기 */}
              <use
                clipPath={`url(#${id}-${item}StarClip)`}
                href={`#${id}-${item}Star`}
                fill="#966fd6"
              />
            </svg>
          );
        })}
      </div>
    </li>
  );
}

export default MovieItem;
