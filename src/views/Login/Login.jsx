import Form from "../../components/Form/Form";
import './Login.css';

const Login = ({ login }) => (
  <div className="login_content">
    <Form login={login} />
  </div>
);

export default Login;
