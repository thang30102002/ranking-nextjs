import style from "@/public/style/style.module.css"
const PlayerTop5 = () => {
  return (
    <div className={style["player-top-5"]}>
      <div>
        <h1>#1</h1>
      </div>
      <div>
        <img className={style["img-player-top-5"]} src="https://matchroompool.com/wp-content/uploads/fedor.webp"></img>
      </div>
      <div>
        <h3>NGUYEN QUOC THANG</h3>
        <p>5000,000 VND</p>
      </div>
    </div>
  );
};
export default PlayerTop5;
