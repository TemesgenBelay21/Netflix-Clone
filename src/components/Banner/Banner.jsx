import { Play, Info } from "lucide-react";
import styles from "./Banner.module.css";
import bannerLogo from "../../assets/image/logo.png";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.contents}>
        <img className={styles.showLogo} src={bannerLogo} alt="Netflix" />
        <h1 className={styles.title}>Bridgerton</h1>
        <p className={styles.description}>
          Shondaland's Emmy-winning series brings Julia T to life, as eight
          siblings seek their perfect match amid London's scandals.
        </p>
        <div className={styles.buttons}>
          <button className={styles.playButton} aria-label="Play">
            <Play className={styles.buttonIcon} fill="currentColor" />
            Play
          </button>
          <button className={styles.infoButton} aria-label="More Info">
            <Info className={styles.buttonIcon} />
            More Info
          </button>
        </div>
      </div>
      <div className={styles.fadeBottom} />
    </div>
  );
}

export default Banner;