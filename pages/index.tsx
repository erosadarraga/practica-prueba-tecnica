import type { NextPage } from 'next'
import Image from 'next/image';
import { RiHomeWifiLine } from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTimesCircle, faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { FormEvent, useState } from 'react';
import { useForm } from '../hooks/useForms';


const Home: NextPage = () => {

  const [touched, setTouched] = useState(false);

  const {
    formData, onChange, resetForm, validateCapital,
    password1, password2, validateNumber, validateCaracter
  } = useForm({
    password1: "",
    password2: '',
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetForm()
  }


  return (
    <section className='font-OpenSans'>
      <div className="flex items-center justify-center w-screen h-screen bg-ondos bg-zinc-400">
        <div className='w-[360px] container flex flex-col px-8 pt-5 h-[740px] bg-unnamedcolorffffff '>
          <div className='flex flex-row justify-center mb-7 '>
            <div className='self-center'>
              <RiHomeWifiLine className='w-8 h-10 fill-secundariohkf' />
            </div>
            <div className='relative '>
              <h2 className='text-2xl font-bold text-secundariohkf'>Home Kapital</h2>
              <p className='absolute top-5 left-10'>Finance</p>
            </div>
          </div>
          <div className='flex flex-row justify-center pb-5 '>
            <div>
              <Image
                className='fill-secundariohkf'
                src="/lock.svg" width="90px"
                height="90px" />
            </div>

          </div>
          <h2 className='pb-4 text-xl  font-extrabold  text-center text-azulprincipalhkf font-OpenSans'>Set Password</h2>
          <h3 className='pb-4 text-base font-bold text-center text-secundariohkf'>Type your new password</h3>
          <h4 className='pb-4 text-sm font-thin text-center text-azulprincipalhkf '>(At least 8 characters, one capital letter, one number and one special character)</h4>

          <form onSubmit={onSubmit}>
            <div className="mb-4 form-group ">
              <div className='relative'>
                <input onBlur={() => setTouched(true)}
                  placeholder=" " type="password" value={password1} name='password1' onChange={onChange} className={validateCapital(password1) && validateCaracter(password1) && validateNumber(password1) && password1.trim().length >= 8 || !touched ? " placeholder-transparent peer mb-4   form-control  w-full px-3 py-1.5 text-base font-normal text-center  bg-white bg-clip-padding border-b-2 border-solid border-unnamedcolor4bb9f4 m-0 focus:outline-none" : "  placeholder-transparent peer form-control mb-4  w-full px-3 py-1.5 text-base font-normal text-center bg-white bg-clip-padding border-b-2 border-solid border-unnamedcolorff4880 m-0 focus:outline-none"} id="exampleInputEmail1" aria-describedby="emailHelp" />
                <label htmlFor="exampleInputEmail1" className="peer  text-center   text-secundariohkf  absolute right-28 -top-3.5 text-base transition-all font-normal peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm">Password</label>
              </div>

              <div className='flex flex-col space-y-2'>

                <div className='flex flex-row items-center'>
                  {password1.trim().length <= 0 && <FontAwesomeIcon icon={faCirclePlay} className="text-unnamedcolor697ea5" />}
                  {password1.trim().length < 8 && password1.trim().length > 0 && <FontAwesomeIcon icon={faTimesCircle}
                    className="text-unnamedcolorff4880" />}
                  {password1.trim().length >= 8 && <FontAwesomeIcon icon={faCircleCheck}
                    className="text-unnamedcolor08d0b1" />}
                  <p className='pl-1 text-xs text-left'>Must have more than 8 characters.</p>
                </div>
                <div className='flex flex-row items-center'>
                  {password1.trim().length <= 0 && <FontAwesomeIcon icon={faCirclePlay} className="text-unnamedcolor697ea5" />}
                  {!validateCapital(password1) && password1.trim().length > 0 && <FontAwesomeIcon icon={faTimesCircle}
                    className="text-unnamedcolorff4880" />}
                  {validateCapital(password1) && <FontAwesomeIcon icon={faCircleCheck}
                    className="text-unnamedcolor08d0b1" />}<p className='pl-1 text-xs font-extralight'>Must have at least one capital letter.</p>
                </div>
                <div className='flex flex-row items-center'>
                  {password1.trim().length <= 0 && <FontAwesomeIcon icon={faCirclePlay} className="text-unnamedcolor697ea5" />}
                  {!validateNumber(password1) && password1.trim().length > 0 && <FontAwesomeIcon icon={faTimesCircle}
                    className="text-unnamedcolorff4880" />}
                  {validateNumber(password1) && <FontAwesomeIcon icon={faCircleCheck}
                    className="text-unnamedcolor08d0b1" />}<p className='pl-1 text-xs text-left font-extralight'>Must have at least one number.</p>
                </div>
                <div className='flex flex-row items-center'>
                  {password1.trim().length <= 0 && <FontAwesomeIcon icon={faCirclePlay} className="text-unnamedcolor697ea5" />}
                  {!validateCaracter(password1) && password1.trim().length > 0 && <FontAwesomeIcon icon={faTimesCircle}
                    className="text-unnamedcolorff4880" />}
                  {validateCaracter(password1) && <FontAwesomeIcon icon={faCircleCheck}
                    className="text-unnamedcolor08d0b1" />}<p className='pl-1 text-xs text-left font-extralight'>Must have at least one special character.</p>
                </div>

              </div>
            </div>
            <div className="mb-4  form-group">
              <div className='relative'>
                <input placeholder=' ' type="password" onBlur={() => setTouched(true)} value={password2} name='password2' onChange={onChange} className={password2 === password1 && password2.length > 0 || !touched ? "form-control peer  w-full px-3 py-1.5 text-base font-normal text-center text-gray-700 bg-white bg-clip-padding border-b-2 border-solid border-unnamedcolor4bb9f4 m-0 focus:outline-none" : "peer form-control  w-full px-3 py-1.5 text-base font-normal text-center text-gray-700 bg-white bg-clip-padding border-b-2 border-solid border-unnamedcolorff4880 m-0 focus:outline-none"} id="exampleInputPassword1" />
                <label htmlFor="exampleInputEmail1" className="peer  text-center   text-secundariohkf  absolute right-28 -top-3.5  text-base transition-all font-normal peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base  peer-focus:-top-3.5 peer-focus:text-sm">Password</label>
              </div>

            </div>
            <div className='flex flex-col space-y-2'>

              <div className='flex flex-row items-center mb-4'>
                {password1.trim().length <= 0 && <FontAwesomeIcon icon={faCirclePlay} className="text-unnamedcolor697ea5" />}
                {password1 !== password2 && password1.trim().length > 0 && <FontAwesomeIcon icon={faTimesCircle}
                  className="text-unnamedcolorff4880" />}
                {password1 === password2 && password1.length > 0 && <FontAwesomeIcon icon={faCircleCheck}
                  className="text-unnamedcolor08d0b1" />}
                <p className='pl-1 text-xs text-left'>Must have more than 8 characters.</p>
              </div></div>
            <div className='flex flex-row justify-center'> <button type="submit" className={validateCapital(password1) && validateCaracter(password1) && validateNumber(password1) && password1.trim().length >= 8 ? "px-16 py-4 text-lg font-bold leading-tight text-center uppercase  bg-secundariohkf text-unnamedcolorffffff " : "px-16 py-4 text-lg font-bold leading-tight text-center uppercase  bg-nuevogrishkf text-unnamedcolorffffff "} >Set Password</button></div>
          </form>

        </div >

      </div >


      <div className="selection:bg-rose-500 selection:text-white">
        <div className="min-h-screen bg-rose-100 flex justify-center items-center">
          <div className="p-8 flex-1">
            <div className="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
              <div className="relative h-48 bg-rose-500 rounded-bl-4xl">
                <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#ffffff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
              </div>
              <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
                <h1 className="text-2xl font-semibold text-gray-900">Welcome back!</h1>
                <form className="mt-12" action="" method="POST">
                  <div className="relative">
                    <input className="peer h-10 w-full  focus:outline-none focus:border-rose-600" placeholder=" " />
                    <label form="email" className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3.5  peer-focus:text-sm">Email address</label>
                  </div>

                </form>
                <a href="#" className="mt-4 block text-sm text-center font-medium text-rose-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500"> Forgot your password? </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section >
  )
}

export default Home
