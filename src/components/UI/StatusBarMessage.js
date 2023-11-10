import styles from './StatusBarMessage.module.css';

const StatusBarMessage = ({ status }) => {
  let statusClasses = '';

  if (status.status === 'error') {
    statusClasses = styles.error;
  }
  if (status.status === 'success') {
    statusClasses = styles.success;
  }

  const messageClasses = `${styles.message} ${statusClasses}`;

  return (
    <section className={messageClasses}>
      <h2>{status.title}</h2>
      <p>{status.message}</p>
    </section>
  );
};

export default StatusBarMessage;
