import { Label, Input, RememberMe, ButtonLogin, ResetPass } from 'components/login';
import Auth from "layouts/Auth.js";
import { useState } from 'react';

export default function Login() {

  const [data, setData] = useState({});
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value)
  }

  return (
    <>

      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">

            <div className="relative flex flex-col min-w-0 w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10">

                <form>

                  <div className="relative w-full mb-3">
                    <Label value='Correo electrónico' />
                    <Input type='text' name='email' placeholder='Correo electrónico' value={data.email || ''} change={handleChange} pattern="[^@\s]+@[^@\s]+"/>
                  </div>

                  <div className="relative w-full mb-3">
                    <Label value='Contraseña' />
                    <Input type='password' name='password' placeholder='Contraseña' value={data.password || ''} change={handleChange} />
                  </div>

                  <div className='flex justify-between items-center'>
                    <RememberMe value='Recuérdame' />
                    <ResetPass />
                  </div>

                  <div className="text-center mt-6">
                    <ButtonLogin value='Iniciar sesión' />
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

Login.layout = Auth;
