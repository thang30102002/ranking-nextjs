// import PlayerTop5 from "./PlayerTop5";
import style from "@/public/style/style.module.css"
import PlayerTop5 from "./PlayerTop5";
const TopPlayer5 = () => {
  return (
    <div className={style["top-player"]}>
      <ul className="list-group">
        <li className={`list-group-item ${style["li-top-player"]}`}>
          <PlayerTop5 />
        </li>
        <li className={`list-group-item ${style["li-top-player"]}`}>
          <PlayerTop5 />
        </li>
        <li className={`list-group-item ${style["li-top-player"]}`}>
          <PlayerTop5 />
        </li>
        <li className={`list-group-item ${style["li-top-player"]}`}>
          <PlayerTop5 />
        </li>
        <li className={`list-group-item ${style["li-top-player"]}`}>
          <PlayerTop5 />
        </li>
      </ul>
    </div>
  );
};
export default TopPlayer5;
