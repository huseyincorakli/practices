import { useNavigate,useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'

const Login = () => {

    const {setUser} = useAuth();
    const navigate = useNavigate();
    
    const handleLogin=()=>{
        setUser(true);
        navigate('/profile')
    }
  return (
    <div>
        <p>Login</p>
        <button onClick={handleLogin}>Giriş yap</button>
    </div>

    
  )
}

export default Login