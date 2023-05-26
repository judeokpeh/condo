import Input from "@/components/Input"
import { useCallback, useState } from "react"


const Auth = () => {
  const[email, setEmail] = useState('')
  const[name, setName] = useState('')
  const[password, setPassword] = useState('')

  const[variant, setVariant] = useState('login')

  const toggleVariant = useCallback(()=>{
      setVariant((cv)=>cv==='login'? 'register': 'login')
  }, [])


  return (
    <div className="relative h-full bg-[url('/images/hero.jpeg/')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black lg:bg-opacity-50 px-5 py-5 h-full w-full">
        <nav >
          <img src="/images/logo.png" alt="logo" className="h-12"/>
        </nav>
        <div className="flex justify-center">
        <div className="rounded-md pb-12 mt-8 w-full bg-black px-16 py-16 self-center lg:w-2/5 lg:max-w-md opacity-50">
          <h1 className="text-white font-semibold text-4xl mb-8 ">
            {variant === 'login'? 'Sign In': 'Register'}
            </h1>
          <div className="flex flex-col gap-4">
            {variant === 'register' &&(
                <Input label="Email"
                onChange={(e:any)=>setEmail(e.target.value)}
                value={email}
                id="email"
                type="email"
                />

            )}
            
             <Input label="username"
            onChange={(e:any)=>setName(e.target.value)}
            value={name}
            id="name"
            type="name"
            />
             <Input label="password"
            onChange={(e:any)=>setPassword(e.target.value)}
            value={password}
            id="password"
            type="password"
            />
          </div>
          <button className=" text-2xl text-white bg-red-600 py-3 mt-8 transition hover:bg-red-700 w-full rounded-md">
            Login
          </button>
          <h2 className="text-neutral-400">
            {variant === 'login'? 'First time using Condo?': 'Already have an account?'}
            <span onClick={toggleVariant} className="text-white ml-1 cursor-pointer hover:underline"> 
            {variant === 'login'? 'Create an acoount': 'Login'}
            </span>
          </h2>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
