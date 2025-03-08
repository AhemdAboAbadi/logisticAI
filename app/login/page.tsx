"use client"
import {AuthRoute} from "../../service/HOC"
import {useState, ChangeEvent} from "react"
import axios, {AxiosError} from "axios"

import {toast} from "react-toastify"

interface LoginResponse {
  token: string
  redirect: string
}

export default function LoginPage() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", {
        username: email,
        password: password,
      })

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token)
        toast.success("Login successful", {
          onClose: () => {
            window.location.href = response.data.redirect
          },
        })
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        toast.error(`${error.response.data.message}`, {
          onClose: () => {
            toast.info("Please try again.", {
              autoClose: 3000,
            })
          },
        })
      } else {
        toast.error("An unknown error occurred")
      }
    }
  }

  return (
    <AuthRoute>
      <div className="flex ">
        <div className="flex bg-teal-500 w-1/2">
          <p className="text-white text-2xl p-20 m-auto">
            We are a software company that specializes in developing legal tools
            and products to support lawyers in their daily tasks. Our primary
            concentration is on U.S. immigration law, aiming to provide the
            necessary assistance to streamline their daily activities.
          </p>
        </div>
        <div className="flex items-center justify-center min-h-screen bg-white w-1/2">
          <div className="w-full max-w-md p-8">
            <div className="flex flex-col items-center m-7">
              <img className="w-40 h-20" src="/logo.png" alt="Logo" />
              <p className="text-lg m-4">Sign into your account</p>
            </div>
            <div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-300"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                className="w-full bg-teal-500 hover:bg-teal-300 text-white py-2 rounded-lg"
                onClick={handleLogin}>
                SIGN IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </AuthRoute>
  )
}
