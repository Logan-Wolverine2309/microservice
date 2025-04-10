import React from 'react'
import "./Auth.css";
import Signin from './Signin';
import Signup from './Signup';

const Auth = () => {
    const [isRegister, setIsRegister] = React.useState(true);
    const togglePanel = () => {
        setIsRegister(!isRegister);
    }
  return (
    <div className='flex justify-center items-center h-screen overfolw-hidden'>

        <div className='box lg:max-w-5xl'>
            <div className={`cover ${isRegister ? "rotate-active" :""}`}>

                <div className='front'>
                    <img src="https://images.pexels.com/photos/7709153/pexels-photo-7709153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="" />
                    <div className='text'>

                        <span className='text-2'>Success is built upon well-organized tasks
                        </span>
                        <span className='text-2'>Stay organized and achieve your goals with our app
                        </span>
                    </div>
                    <div className="back">
                        <img src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        />


                    </div>
                </div>
            </div>

            <div className="forms h-full">
            <div className="form-content h-full">
                <div className="login-form">
                    <Signin togglePanel={togglePanel}/>

                </div>

                <div className="signup-form">
                    <Signup togglePanel={togglePanel} />
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Auth;