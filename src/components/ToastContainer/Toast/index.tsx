import React, { useEffect } from 'react';
import {
  FiAlertTriangle,
  FiXCircle,
  FiShieldOff,
  FiCheck,
} from 'react-icons/fi';
import { clearTimeout } from 'timers';
import { ToastMessage, useToast } from '../../../hooks/toast';
import { Container } from './styles';

interface ToatsProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <FiAlertTriangle size={20} />,
  success: <FiCheck size={20} />,
  error: <FiShieldOff size={20} />,
};

const Toast: React.FC<ToatsProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
        <button onClick={() => removeToast(message.id)} type="button">
          <FiXCircle size={18} />
        </button>
      </div>
    </Container>
  );
};

export default Toast;
