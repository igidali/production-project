import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/modal';
import { LoginForm } from '../login-form/login-form';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal className={classNames('', {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
    <LoginForm />
  </Modal>
);
