import React, {useState} from 'react'
import Image from 'next/image'
import cart from '../../public/assets/cart.png'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router'
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({});

    let validationError = {};

    if (!name.trim()) {
      validationError.name = "Name is required";
    }
    if (!email.trim()) {
      validationError.email = "Email is required";
    }
    if (!password.trim()) {
      validationError.password = "Password is required";
    }

    if (Object.keys(validationError).length > 0) {
      setError(validationError);
      setLoading(false);
      return;
    }
    // Call NextAuth signIn with credentials
    try {
      const res = await signIn("credentials", 
      { redirect: false,
         email,
          password 
        });

        if (res?.error) {
          setError({ global: res.error });
        } else {
          router.push("/checkout");
          alert("Account created successfully!");
        }
    }  catch (err) {
      setError({ global: "An error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div  className="flex flex-col lg:flex-row p-5 md:p-10">
      <div  className="lg:flex-2">
       <Image src={cart} alt='cart-img' className="w-full h-auto object-cover"
       loading="lazy"  />
      </div>
      <div className="lg:flex-1 px-0 py-10 md:py-20 lg:p-20">
        <div className="flex flex-col gap-2 md:gap-4">
        <p className="text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">Create An Account</p>
       <p className="text-sm md:tetx-lg lg:text-sm">Enter your details below</p>

       {error.global && (
            <p className="text-red-500 text-sm mb-2">{errors.global}</p>
          )}
       <form 
       onSubmit={handleSubmit}
       className="flex flex-col gap-4 md:gap-8 lg:gap-6">
       <div className="border-b border-gray-300 py-1">
     <input type="text"
     placeholder='Name' 
     value={name}
     onChange={(e) => setName(e.target.value)}
     className="text-xs md:text-lg lg:text-sm"/>
      {error.name && <p className="text-red-500 text-xs mt-1">{error.name}</p>}
     
       </div>
      
       <div className="border-b border-gray-300 py-1">
      <input type="text"
     placeholder='Email' 
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     className="text-xs md:text-lg lg:text-sm"/>
      {error.email && <p className="text-red-500 text-xs mt-1">{error.email}</p>}
       </div>
      
       <div className="border-b border-gray-300 py-1">
       <input type="text"
     placeholder="Password"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     className="text-xs md:text-lg lg:text-sm"/>
      {error.password && <p className="text-red-500 text-xs mt-1">{error.password}</p>}
       </div>
       <div className="">
              <button
                type="submit"
                disabled={loading}
                className="text-xs md:text-lg lg:text-sm bg-[#8644DB] text-white px-4 py-2 md:py-3 w-[100%]"
              >
                {loading ? "Creating..." : "Create Account"}
              </button>
            </div>
       <div className="">
        <button 
        onClick={() => signIn('google')}
        className="flex items-center justify-center gap-4 text-xs md:text-lg lg:text-sm bg-transparent text-black border border-gray-300 px-4 py-2 md:py-3 w-[100%]">
          <FcGoogle className="w-6 h-6 "
          />
          Sign up with Google</button>
       </div>
       <div className="text-xs md:text-lg lg:text-sm flex items-center justify-center gap-2">
        <p className="">Already have account?</p>
        <Link href={`/signIn`} className="">
        <p className='underline'>Log in</p>
        </Link>
       </div>
      



       </form>
        </div>
       

      </div>
    </div>
  )
}

export default SignUp