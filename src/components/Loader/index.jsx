import styles from './styles.module.scss';

const Loader = () => (
  <div className={styles.ldsEllipsis}>
    {Array.from({ length: 4 }).map(() => (
      <div />
    ))}
  </div>
);

export default Loader;
