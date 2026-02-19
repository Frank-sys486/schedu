import { FunctionComponent } from 'react';
import styles from './Loading.module.css';


const Loading: FunctionComponent = () => {
  	return (
    		<div className={styles.loading}>
      			<div className={styles.ios}>
        				<div className={styles.homeIndicator}>
          					<div className={styles.homeIndicator2} />
        				</div>
        				<div className={styles.statusBarIphone}>
          					<div className={styles.time}>
            						<div className={styles.time2}>9:41</div>
          					</div>
          					<div className={styles.levels}>
            						<img className={styles.cellularConnectionIcon} alt="" />
            						<img className={styles.wifiIcon} alt="" />
            						<div className={styles.battery}>
              							<div className={styles.border} />
              							<img className={styles.capIcon} alt="" />
              							<div className={styles.capacity} />
            						</div>
          					</div>
        				</div>
      			</div>
      			<img className={styles.ford21Icon} alt="" />
      			<div className={styles.foradi}>SCHEDU</div>
    		</div>);
};

export default Loading ;
